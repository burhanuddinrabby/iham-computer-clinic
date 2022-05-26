import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '1525e132988dcf906574630da4b88790';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        toast.warn('Adding product. It may take a while');
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const name = data.name;
                    const description = data.description;
                    const newAvailable = parseInt(data.available);
                    const newMinQuantity = parseInt(data.minQuantity);
                    const newPrice = parseInt(data.price);
                    const product = {
                        name: name,
                        description: description,
                        available: newAvailable,
                        minQuantity: newMinQuantity,
                        price: newPrice,
                        img: img
                    };
                    console.log(product);
                    //adding item to database
                    fetch('https://pure-dawn-17806.herokuapp.com/services', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.success) {
                                toast.success("Product added successfully !");
                            }
                        })
                }
            })
        reset();
    }

    return (
        <div>
            <h2 className="text-2xl text-center text-[#44ced8]">Add a New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='text-black'>
                <div className="card lg:max-w-3xl mx-auto shadow-lg bg-base-100 p-10">
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Product Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Product Description"
                            className="input input-bordered w-full "
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Product description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.description.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="number"
                            placeholder="Total Quantity"
                            className="input input-bordered w-full "
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Total Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.available.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="number"
                            placeholder="Minimum buying Quantity"
                            className="input input-bordered w-full "
                            {...register("minQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.minQuantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="price"
                            placeholder="Product Price"
                            className="input input-bordered w-full "
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Product price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.price.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <input
                            type="file"
                            className="input input-bordered w-full h-9"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-400 text-sm">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full text-white' type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;