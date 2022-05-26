import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
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
                            orders.map((order, index) => <Order key={order._id} setDeletingOrder={setDeletingOrder} orders={orders} order={order} setOrders={setOrders} index={index}></Order>)
                        }


                    </tbody>
                </table>
                {deletingOrder && <DeleteConfirmModal
                    deletingOrder={deletingOrder}
                    orders={orders}
                    setOrders={setOrders}
                    setDeletingOrder={setDeletingOrder}
                ></DeleteConfirmModal>}
            </div>
        </div>
    );
};

export default MyOrders;