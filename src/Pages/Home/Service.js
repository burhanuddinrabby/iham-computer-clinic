import React from 'react';

const Service = ({ service, }) => {
    return (
        <div class="card card-compact lg:w-lg bg-[#cbcaca] text-[#000] shadow-xl">
            <figure><img src={service.img} className='w-full' alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{service.name}</h2>
                <p>Available : {service.available}</p>
                <p>Minimum Quantity : {service.minQuantity}</p>
                <p>Price : {service.price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>)
};

export default Service;