import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <h1 className='text-2xl text-emerald-600'>User DashBoard</h1>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">User Orders</Link></li>
                        <li><Link to="/dashboard/userprofile">User Profile</Link></li>
                        <li><Link to="/dashboard/Userreviews">User Reviews</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Dashboard;