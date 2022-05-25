import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [errorMessage, setErrorMessage] = useState('');
    const [productQuantity, setQuantity] = useState(0);
    const [service, setService] = useState({});
    useEffect(() => {
        async function fecthing() {
            const res = await fetch(`http://localhost:5000/purchase/${id}`);
            const data = await res.json();
            setService(data);
            setQuantity(data.minQuantity);
        }
        fecthing();
    }, [id]);
    const { name, price, description, img, minQuantity, available } = service;
    // console.log(minQuantity);
    // setQuantity(minQuantity);
    // console.log(productQuantity);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const newQuantity = parseInt(data.quantity);
        // console.log(data.quantity);
        if (newQuantity < minQuantity) {
            setErrorMessage('You can not buy less than ' + minQuantity + ' ' + name + 's')
        } else if (minQuantity > available) {
            setErrorMessage('We are sorry we can\'t server you ' + available + ' ' + name + 's')
        } else if (newQuantity > available) {
            setErrorMessage('You can not buy more than ' + available + ' ' + name + 's')
        } else {
            setErrorMessage('');
            const newAvailable = available - newQuantity;
            setService({ ...service, available: newAvailable });
            setQuantity(newQuantity)
            const newData = { ...data, quantity: newQuantity }
            sendToServer(newData);
        }
    };
    const sendToServer = (newData) => {
        console.log('sending', newData);
    }
    // const handleChange = (e) => {
    //     console.log('changing');
    // }
    loading && <Loading></Loading>
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="pt-10 pb-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                    <div className="flex flex-col justify-start items-start w-full space-y-9">
                        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                            <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                                <div className="flex flex-col justify-start items-start w-full space-y-4">
                                    <p className="text-xl md:text-2xl leading-normal text-gray-800"><b>Your Product :</b> {name}</p>
                                    <p className="text-xl leading-none text-gray-800"><b>Product Price :</b> ${price} <small className='text-sm'>per product</small></p>
                                </div>
                                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                    <img src={img} alt="headphones" />
                                </div>
                            </div>

                            <div className="p-8 bg-gray-100 text-[black] flex flex-col lg:w-full xl:w-3/5">
                                <div>
                                    <h3 className='font-bold text-2xl mb-5'>About the product</h3>
                                    <p className=' mb-2'>{description}</p>

                                </div>
                                <p className="text-base font-bold mt-5 leading-normal sm:leading-4 text-gray-600">
                                    Please provide necessary information to purchase
                                </p>


                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mt-4">
                                        <input
                                            className="border border-gray-200 bg-gray-200 p-4 rounded w-full text-base leading-4 text-[black]"
                                            type="text"
                                            readOnly
                                            value={user?.displayName}
                                            {...register("name")}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <input
                                            className="border border-gray-200 bg-gray-200 p-4 rounded w-full text-base leading-4 text-[black]"
                                            type="email"
                                            readOnly
                                            value={user?.email}
                                            {...register("email")}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <input
                                            className=" border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="text"
                                            placeholder="Address"
                                            {...register("address", {
                                                required: {
                                                    value: true,
                                                    message: "Please enter your address"
                                                }
                                            })}
                                        />
                                        <label className="label pb-0">
                                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                        </label>


                                        <input
                                            className=" border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="number"
                                            placeholder="Phone Number"
                                            {...register("phoneNumber", {
                                                required: {
                                                    value: true,
                                                    message: "Please enter your phone number"
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
                                        </label>

                                    </div>

                                    <div className="mt-2 flex-col">
                                        <b><p className='text-md mb-3 mt-6'>Available Quantity: {available}pcs</p></b>
                                        <b><p className='text-md mb-3'>Minimum Order: {minQuantity}pcs</p></b>
                                        <p className='text-md mb-3 mt-3'>Per Pcs Price: ${price}</p>
                                        <div>
                                            <div className='flex items-center justify-between '>
                                                <span className='btn btn-primary rounded-r-none font-bold text-2xl' onClick={() => setQuantity(productQuantity - 1)} disabled={productQuantity <= minQuantity}>-</span>
                                                <input
                                                    className="border border-gray-300 p-3 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                                    type="number"
                                                    value={productQuantity}
                                                    onChange={() => console.log('changing')}
                                                    readOnly={false}
                                                    {...register("quantity", {
                                                        required: {
                                                            value: true,
                                                            message: `Please put the amount you need. Not more than ${available} or less than ${minQuantity}`
                                                        }
                                                    })}
                                                />
                                                <span className='btn btn-primary rounded-l-none font-bold text-2xl' onClick={() => setQuantity(productQuantity + 1)} disabled={productQuantity >= available}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={minQuantity > available}
                                        className="mt-8 border border-transparent text-white flex justify-center items-center py-4 rounded w-full">
                                        <label htmlFor="my-modal-3" className="w-full btn modal-button">
                                            <div>
                                                <p className="text-white leading-4"> Place Order</p>

                                            </div>
                                        </label>
                                    </button>
                                </form>
                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h1>
                                            {
                                                ((errors.phoneNumber?.type === 'required') || (errors.address?.type === 'required')) ? <span className="label-text-alt text-red-500 text-xl">Please fill up the input field correctly. Those are required</span>
                                                    :
                                                    errorMessage ? <div>
                                                        <p className='font-bold text-red-500 mb-3'>{errorMessage}</p>
                                                        <p>Please make sure you're buying a valid amount of products</p>
                                                    </div>
                                                        : <div>
                                                            <p className='font-bold mb-3 mt-3'>Total Price: ${productQuantity * price}</p>
                                                            <p>You've to pay ${productQuantity * price} to buy {productQuantity} {name}s</p>
                                                            <button className='btn-sm btn mt-4 btn-primary text-[#000000]'>Add to order</button>
                                                            &nbsp; &nbsp;
                                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-error">Cancel</label>
                                                        </div>
                                            }
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Purchase;