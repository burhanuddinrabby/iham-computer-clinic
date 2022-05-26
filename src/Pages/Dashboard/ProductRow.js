import React from 'react';

const ProductRow = ({ service, refetch, index }) => {
    const handleDeleteProduct = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this product?');
        if (confirm) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        refetch();
                    }
                }
                )
        }
    }
    const { _id, name, img, available } = service;
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
            <td><button className="btn btn-xs btn-error text-white" onClick={() => handleDeleteProduct(_id)}>Delete Product</button></td>
        </tr>
    );
};

export default ProductRow;