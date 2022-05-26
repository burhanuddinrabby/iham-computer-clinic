import React from 'react';

const ProductRow = ({ service, refetch, index }) => {

    const { _id, name, img, available, price, minQuantity } = service;
    return (
        <tr className='hover'>
            <th>{index}</th>
            <td>
                <div class="flex items-center justify-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{available}</td>
            <td><button className="btn btn-xs btn-error text-white">Delete Product</button></td>
        </tr>
    );
};

export default ProductRow;