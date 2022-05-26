import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ deleteProduct, services, refetch }) => {
    const { _id, name } = deleteProduct;
    const handleDelete = (id) => {
        console.log('deleting', id);
        fetch(`https://pure-dawn-17806.herokuapp.com/service/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Successfully deleted a product');
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete  {name}?</h3>
                    <p className="py-4">If yes press on delete button or cancel it.</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="my-modal-3" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;