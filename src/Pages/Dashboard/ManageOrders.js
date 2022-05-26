import React, { useEffect, useState } from 'react';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-orders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold mt-4 my-2 text-center text-[#2eb3ff]'>Total Orders: {orders.length}</h2>
            <div className="overflow-x-auto text-[black] ">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Buyer Name</th>
                            <th>Status</th>
                            <th>Shipment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrderRow key={order._id} order={order} index={index}></ManageOrderRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;