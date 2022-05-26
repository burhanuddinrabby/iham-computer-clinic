import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReactStars from 'react-stars'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    //loading user
    const [user] = useAuthState(auth);
    const imageStorageKey = '1525e132988dcf906574630da4b88790';
    const [rating, setRating] = useState(0);
    const ratingChanged = (newRating) => {
        setRating(newRating)
    }
    // const onSubmit = async data => {
    const onSubmit = async (data) => {
        const image = data.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        console.log(formData);
        toast.warn('Adding review. It may take a while');
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        email: data.email,
                        description: data.description,
                        rating,
                        img: img
                    }
                    //adding item to database
                    fetch('http://localhost:5000/add-review', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.success) {
                                toast.success("Review added successfully, Thank you for your feedback!");
                            }
                        })
                }
            })


        //reset form
        reset();
    }
    return (
        <div className='lg:w-2/4 mx-auto bg-slate-800 p-10 mt-8 rounded shadow-md'>
            <h1 className='mx-auto text-center mt-2 text-4xl '>Please add a <span className='font-bold'>review</span> to let us know</h1>

            <form className='mx-auto my-5' onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <input type="text" className='input input-bordered w-full text-xl text-black' placeholder="Enter Bike Name" value={user.displayName}
                        readOnly
                        {...register("name")} />
                </div>
                <div className="mb-3">
                    <input as='textarea' className='w-full textarea textarea-bordered h-20 text-lg text-black' placeholder='Add your opinion and reason behind your review' {...register("description", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })} />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full">
                    <input
                        type="file"
                        className="input h-9 input-bordered w-full"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>


                <span className='text-lg'>Your rating is : <span className="font-bold">{rating}</span> / 5</span>
                <div className="mb-3 flex justify-center">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={44}
                        color2={'#ffd700'} />
                </div>

                <button className="btn btn-primary w-full " type="submit">Add Your Review</button>
                <br />
            </form>
        </div>
    );
};

export default AddReview;