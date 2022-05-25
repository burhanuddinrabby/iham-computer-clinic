import React, { useEffect, useState } from 'react';
import Service from './Service';
import Loading from '../Shared/Loading'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <h1 className='text-6xl text-center font-bold mb-8 text-[#24cfcc]'>Our Products</h1>
            <hr className='max-w-6xl mx-auto h-6' />
            {
                services.length <= 0 ? <Loading></Loading> :
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto mt-8 mb-24 max-w-7xl gap-x-8 gap-y-10 sm:px-4'>

                        {services.slice(0, 6).map((service, index) => <Service key={index} service={service}></Service>)}
                    </div>
            }
        </>
    );
};

export default Services;