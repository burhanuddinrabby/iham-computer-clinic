import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Service from '../Home/Service';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import Order from './Order';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const { data: services, isLoading, refetch } = useQuery('services', () => fetch('http://localhost:5000/services', {
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
                    <div className="overflow-x-auto text-black">
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
    // const [deletingDoctor, setDeletingDoctor] = useState(null);

    // const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://secret-dusk-46242.herokuapp.com/doctor', {
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    // return (
    //     <div>
    //         <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
    //         <div className="overflow-x-auto">
    //             <table className="table w-full">
    //                 <thead>
    //                     <tr>
    //                         <th></th>
    //                         <th>Avatar</th>
    //                         <th>Name</th>
    //                         <th>Specialty</th>
    //                         <th>Action</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {
    //                         doctors.map((doctor, index) => <DoctorRow
    //                             key={doctor._key}
    //                             doctor={doctor}
    //                             index={index}
    //                             refetch={refetch}
    //                             setDeletingDoctor={setDeletingDoctor}
    //                         ></DoctorRow>)
    //                     }
    //                 </tbody>
    //             </table>
    //         </div>
    //         {deletingDoctor && <DeleteConfirmModal
    //             deletingDoctor={deletingDoctor}
    //             refetch={refetch}
    //             setDeletingDoctor={setDeletingDoctor}
    //         ></DeleteConfirmModal>}
    //     </div>
    // );
};

export default ManageProducts;