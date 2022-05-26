import React, { useEffect, useState } from 'react';
import Service from './Service';
import Loading from '../Shared/Loading'

const Services = () => {
    const [down, setDown] = useState(0);
    const [up, setUp] = useState(3);
    const [pageNumber, setPage] = useState(1);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://pure-dawn-17806.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.reverse()))
    }, [])
    const pages = Math.ceil(services.length / 3);
    const totalPages = [];
    for (let i = 1; i <= pages; i++) {
        totalPages.push(i)
    }
    const handlePage = (down) => {
        setDown(down * 3);
        setUp(down * 3 + 3)
    }
    return (
        <>
            <h1 className='text-6xl text-center font-bold mb-8 text-[#24cfcc]'>Our Products</h1>
            <hr className='max-w-6xl mx-auto h-6' />
            {
                services.length <= 0 ? <Loading></Loading> :
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto mt-8 mb-10 max-w-7xl gap-x-8 gap-y-10 sm:px-4'>

                        {services.slice(down, up).map((service, index) => <Service key={index} service={service}></Service>)}
                    </div>
            }
            <div className="flex justify-center w-full py-2 gap-2 mb-16">
                {
                    totalPages.map((page, index) => <button key={index} className={`btn btn-xs ${pageNumber === page ? 'btn-warning' : 'btn-primary'}`} onClick={() => {
                        handlePage(page - 1)
                        setPage(page)
                    }}>{page}</button>)
                }
            </div>
        </>
    );
};

export default Services;