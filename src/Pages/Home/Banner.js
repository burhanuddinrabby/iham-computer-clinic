import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero my-36">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='https://i.ibb.co/KsFDQvZ/image.png' className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your Gamers Journey Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Visit Products</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;