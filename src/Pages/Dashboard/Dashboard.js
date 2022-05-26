import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-4xl mt-4 text-center font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/my-profile">My Profile</Link></li>
                    {!admin && <>
                        <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                        <li><Link to="/dashboard/add-review">Add a Review</Link></li>
                    </>}

                    {admin && <>
                        <li><Link to="/dashboard/manage-orders">Manage Orders</Link></li>
                        <li><Link to="/dashboard/add-product">Add a Product</Link></li>
                        <li><Link to="/dashboard/users">Make Admin</Link></li>
                        <li><Link to="/dashboard/manage-products">Manage Products</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;