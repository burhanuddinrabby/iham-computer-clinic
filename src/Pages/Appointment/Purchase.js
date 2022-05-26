import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [productQuantity, setQuantity] = useState(0);
    const [service, setService] = useState({});
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://pure-dawn-17806.herokuapp.com/purchase/${id}`);
            const data = await res.json();
            setService(data);
            setQuantity(data.minQuantity);
        }
        fetchData();
    }, [id]);
    const { name, price, description, img, minQuantity, available } = service;
    const onSubmit = e => {
        e.preventDefault();
        const buyerName = e.target.name.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        const phoneNumber = e.target.phoneNumber.value;
        const quantity = parseInt(e.target.quantity.value);
        const totalPrice = price * quantity;
        const newOrder = { name, buyerName, email, address, phoneNumber, quantity, totalPrice };
        if (quantity > available) {
            toast.warn('Please check your order quantity, we only have ' + available + ' left');
        } else if (quantity < minQuantity) {
            toast.warn('Please check your order quantity, you have to order more than ' + minQuantity);
        }
        else if (newOrder.address !== '' && newOrder.phoneNumber !== '' && quantity !== 0) {
            const confirm = window.confirm(`Are you sure you want to purchase this product for $${totalPrice} ?`);
            if (confirm) {
                const newAvailable = available - quantity;
                const newService = { ...service, available: newAvailable };
                setService(newService);
                console.log(newOrder);
                fetch('https://pure-dawn-17806.herokuapp.com/orders', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(newOrder)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            toast(`Your order is set. Go to dashboard and check My order`)
                            fetch(`https://pure-dawn-17806.herokuapp.com/purchase/${id}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json',
                                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                },
                                body: JSON.stringify(newService)
                            })
                        }
                        else {
                            toast.error(`Failed to add order`)
                        }
                    });
            }
        }
    };
    const handleOnChange = e => {
        const quantity = parseInt(e.target.value);
        setQuantity(quantity);
    }
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


                                <form onSubmit={onSubmit}>
                                    <div className="mt-4">
                                        <input
                                            className="border border-gray-200 bg-gray-200 p-4 rounded w-full text-base leading-4 text-[black]"
                                            type="text"
                                            readOnly
                                            value={user?.displayName}
                                            name="name"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <input
                                            className="border border-gray-200 bg-gray-200 p-4 rounded w-full text-base leading-4 text-[black]"
                                            type="email"
                                            readOnly
                                            value={user?.email}
                                            name="email"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <input
                                            className=" border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="text"
                                            placeholder="Address"
                                            name="address"
                                            required
                                        />
                                        <input
                                            className="mt-4 border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="number"
                                            placeholder="Phone Number"
                                            name="phoneNumber"
                                            required
                                        />

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
                                                    onChange={handleOnChange}
                                                    name="quantity"
                                                />
                                                <span className='btn btn-primary rounded-l-none font-bold text-2xl' onClick={() => setQuantity(productQuantity + 1)} disabled={productQuantity >= available}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-8 border border-transparent text-white flex justify-center items-center py-4 rounded w-full btn">
                                        Place Order
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Purchase;