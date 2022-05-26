import React from 'react';
import { toast } from 'react-toastify';

const Order = ({ orders, order, index, setOrders, setDeletingOrder }) => {
    const { _id, name, quantity, totalPrice } = order;
    return (
        <>
            <tr className="hover">

                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${totalPrice}</td>
                <td>
                    <div className='flex gap-3 justify-center'>
                        <button className='btn btn-xs btn-success'>Pay</button>
                        <label for="my-modal-3" className="btn btn-xs btn-error modal-button " onClick={() => setDeletingOrder(order)}>Cancel</label>

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