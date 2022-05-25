import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReactStars from 'react-stars'
import { toast } from 'react-toastify';
const AddReview = () => {
    //loading user
    const [user] = useAuthState(auth);
    const [rating, setRating] = useState(0);
    const ratingChanged = (newRating) => {
        setRating(newRating)
    }
    const addItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        console.log({ name, description, rating });

        //adding item to database
        fetch('http://localhost:5000/add-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ name, description, rating })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Review added successfully, Thank you for your feedback!");
                }
            })
        //reset form
        e.target.reset();
    }
    return (
        <div className='lg:w-2/4 mx-auto bg-slate-800 p-10 mt-8 rounded shadow-md'>
            <h1 className='mx-auto text-center mt-2 text-4xl '>Please add a <span className='font-bold'>review</span> to let us know</h1>

            <form className='mx-auto my-5' onSubmit={addItem}>

                <div className="mb-3">
                    <input type="text" className='input input-bordered w-full text-xl text-black' placeholder="Enter Bike Name" name='name' value={user.displayName} readOnly />
                </div>
                <div className="mb-3">
                    <input as='textarea' className='w-full textarea textarea-bordered h-20 text-lg text-black' placeholder='Add your opinion and reason behind your review' name='description' required />
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