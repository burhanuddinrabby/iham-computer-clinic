import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, index, setOrders, setDeletingOrder }) => {
    const { name, quantity, totalPrice } = order;
    return (
        <>
            <tr className="hover">

                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${totalPrice}</td>
                <td>
                    <div className='flex gap-3 justify-center'>
                        {
                            order.paid ?
                                <>
                                    <span className='text-success'>Paid</span>
                                    <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                </>
                                :
                                <>
                                    <Link to={`/dashboard/payment/${order._id}`} className='btn btn-success btn-xs'>Pay</Link>
                                    <label for="my-modal-3" className="btn btn-xs btn-error modal-button " onClick={() => setDeletingOrder(order)}>Cancel</label>
                                </>
                        }

                    </div>
                </td>
            </tr>
        </>
    );
};

export default Order;