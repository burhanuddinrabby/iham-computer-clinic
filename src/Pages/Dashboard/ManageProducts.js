import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const { data: services, isLoading, refetch } = useQuery('services', () => fetch('https://pure-dawn-17806.herokuapp.com/services', {
        method: 'GET',
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <h1 className='text-6xl text-center font-bold my-8 text-[#24cfcc]'>All Products</h1>
            {
                services.length <= 0 ? <Loading></Loading> :
                    <div className="overflow-x-auto text-black mb-10">
                        <table className="table w-full text-center">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Available</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map((service, index) => <ProductRow
                                        key={service._id}
                                        index={index + 1}
                                        service={service}
                                        refetch={refetch}
                                    ></ProductRow>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};

export default ManageProducts;