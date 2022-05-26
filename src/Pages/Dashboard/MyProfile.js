import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { email } = user;
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

    const { displayName } = user;
    return (
        <div className='lg:w-2/4 mx-auto bg-slate-800 p-10 mt-8 rounded shadow-md'>

            <h2 className='text-[#24cfcc] text-center text-4xl font-bold my-6'>Hello {displayName} your email {user.email} </h2>
            <p className='text-center mb-5'>Please add few more information to introduce yourself</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <input
                        type="text"
                        className="input h-9 input-bordered w-full"
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
                <div className="form-control w-full">
                    <input
                        type="text"
                        className="input h-9 input-bordered w-full"
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
                <div className="form-control w-full">
                    <input
                        type="text"
                        className="input h-9 input-bordered w-full"
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
                <button className="btn btn-primary w-full " type="submit">Update Your Information</button>
            </form>
        </div>
    );
};

export default MyProfile;