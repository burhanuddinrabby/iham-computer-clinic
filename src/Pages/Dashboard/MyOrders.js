import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import Order from './Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    console.log(orders);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    // if (res.status === 401 || res.status === 403) {
                    //     signOut(auth);
                    //     localStorage.removeItem('accessToken');
                    //     navigate('/');
                    // }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto text-[black] ">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <Order key={order._id} orders={orders} order={order} setOrders={setOrders} index={index}></Order>)
                        }


                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyOrders;