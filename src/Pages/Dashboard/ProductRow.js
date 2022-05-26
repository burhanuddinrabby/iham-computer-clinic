import React from 'react';

const ProductRow = ({ service, refetch, index, setDeleteProduct }) => {
    const { _id, name, img, available } = service;
    return (
        <tr className='hover'>
            <th>{index}</th>
            <td>
                <div className="flex items-center justify-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{available}</td>
            <td>
                <label for="my-modal-3" className="btn btn-xs btn-error text-white modal-button " onClick={() => setDeleteProduct(service)}>Delete Product</label>
            </td>
        </tr>
    );
};

export default ProductRow;