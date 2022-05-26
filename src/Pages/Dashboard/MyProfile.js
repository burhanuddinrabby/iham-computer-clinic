import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faLocationDot,
    faEnvelope,
    faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, email, photoURL } = user;
    const [defaultUser, setDefault] = useState({});
    const { education, address, phone, linkedin } = defaultUser;
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data => setDefault(data))
    }, [])
    console.log(defaultUser);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(email, data);
        fetch(`http://localhost:5000/user-update/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Profile information successfully added");
                };
            })
    };
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg my-6">
                        <div className="avatar flex justify-center pt-6 pb-2">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {photoURL ? (
                                    <img src={photoURL} alt="" />
                                ) : (
                                    <img
                                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                        alt=""
                                    />
                                )}
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100">
                            <div className="card-body">
                                <h1 className="text-xl font-bold text-[black]">{displayName}</h1>
                                <div className="flex items-center mt-4 text-gray-700 ">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <h1 className="px-2 text-sm">Email: {email}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 ">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                    <h1 className="px-2 text-sm">
                                        Education: {education ? education : 'No information'}
                                    </h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 ">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <h1 className="px-2 text-sm">
                                        Location: {address ? address : 'No information'}
                                    </h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 ">
                                    <FontAwesomeIcon icon={faPhoneFlip} />
                                    <h1 className="px-2 text-sm">
                                        Phone number: {phone ? phone : 'No information'}
                                    </h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 ">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <h1 className="px-2 text-sm">
                                        LinkedIn Account: {linkedin ? linkedin : 'No information'}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card flex-shrink-0 w-96 max-w-sm shadow-lg bg-base-100">
                            <div className="card-body">
                                <h1 className="text-xl font-bold text-[black]">Update Your Profile</h1>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="Enter your Educational Qualification"
                                        className="input input-bordered"
                                        required
                                        {...register("education", {
                                            required: {
                                                value: true,
                                                message: 'Your educational background is required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.education.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        placeholder="Enter your address"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.address.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input
                                        type="number"
                                        className="input input-bordered"
                                        placeholder="Enter your Phone Number"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.phone.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        placeholder="Enter your linkedin profile link"
                                        {...register("linkedin", {
                                            required: {
                                                value: true,
                                                message: 'Linkedin profile link is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.linkedin.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Update Your Information</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;