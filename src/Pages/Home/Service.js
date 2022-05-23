import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, }) => {
    const { name, img, description, available, price, minQuantity } = service;
    return (
        <div className="card card-compact lg:w-lg bg-[#cbcaca] text-[#000] shadow-xl">
            <figure><img src={img} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p>{description} <Link to='/' className='text-[#1176fa] text-base'>here...</Link></p>
                <p>Available : {available}</p>
                <p>Minimum Quantity : {minQuantity}</p>
                <p>Price : ${price}</p>
                <div className="card-actions justify-end">
                    <PrimaryButton className="btn btn-primary">Order Now</PrimaryButton>
                </div>
            </div>
        </div>)
};

export default Service;