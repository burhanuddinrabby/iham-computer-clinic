import React from 'react';

const ManageOrderRow = ({ index, order }) => {
    const { _id, name, quantity, buyerName, paid, shipped } = order;
    return (
        <tr className="hover">

            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{buyerName}</td>
            <td>{paid ? <span className='text-green-600'>pending</span> : <span className='text-red-500'>unpaid</span>}</td>
            <td>
                <div className='flex gap-3 justify-center'>
                    {
                        shipped ?
                            ''
                            :
                            <button className='btn btn-xs btn-warning'>Ship</button>
                    }
                </div>
            </td>
        </tr>
    );
};

export default ManageOrderRow;