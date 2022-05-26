import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ index, order }) => {
    const { _id, name, quantity, buyerName, paid, shipped } = order;
    const handleShipment = (id) => {
        console.log(id);
        fetch(`https://pure-dawn-17806.herokuapp.com/ship-order/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Successfully shipped the order');
                }
            })
    }
    return (
        <tr className="hover">

            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{buyerName}</td>
            <td>{paid ? <span className='text-green-600'>{shipped ? 'shipped' : 'pending'}</span> : <span className='text-red-500'>unpaid</span>}</td>
            <td>
                <div className='flex gap-3 justify-center'>
                    {
                        shipped ?
                            <span className='text-green-600'>shipped</span>
                            :

                            paid ?
                                <button className='btn btn-xs btn-warning' onClick={() => handleShipment(_id)}>Ship</button>
                                :
                                <span className='text-red-500'>Not paid yet</span>

                    }
                </div>
            </td>
        </tr>
    );
};

export default ManageOrderRow;