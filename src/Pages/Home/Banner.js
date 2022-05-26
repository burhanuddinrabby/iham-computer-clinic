import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero lg:my-36 my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='https://i.ibb.co/KsFDQvZ/image.png' className="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div className='text-[#bcb4b4]'>
                    <h1 id='' className="text-5xl font-bold">Your Gaming Journey </h1>
                    <h1 id='' className="text-5xl font-bold data-text-sm" datatext="Starts Here...">Starts Here</h1>
                    <p className="py-6">Iham computer Clinic has been serving all over the world for a century. We've completed a lot of successful
                        shipment. Enjoy your journey with us</p>
                    <PrimaryButton>Visit Products</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;