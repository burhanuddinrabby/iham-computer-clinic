import React from 'react';
import { toast } from 'react-toastify';

const Order = ({ orders, order, index, setOrders }) => {
    const { _id, name, quantity, totalPrice } = order;
    const handleCancel = (id) => {
        const confirm = window.confirm(`Are you sure you want to cancel this order ?`);
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success('Successfully cancelled your order');
                        setOrders(orders.filter(order => order._id !== id));
                    }
                })
        }

    }
    return (
        <>
            <tr className="hover">

                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${totalPrice}</td>
                <td>
                    <div className='flex gap-3 justify-center'>
                        <button className='btn btn-xs btn-success'>pay</button>
                        <button className="btn btn-xs btn-error" onClick={() => handleCancel(_id)}>Cancel</button>

                    </div>
                    {/* <Link to={`/dashboard/payment/${order._id}`}>
                                        </Link> */}
                    {/* {
                                    (order.price && !order.paid) && 
                                    } */}
                    {/* {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>} */}
                </td>
            </tr>
        </>
    );
};

export default Order;