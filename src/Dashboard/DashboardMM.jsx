import React from 'react';
import "../app.css";
import Logo1 from "/src/assets/Logo1.png";
import Adminmam from "/src/assets/Adminmam.svg";
import { IoIosLogOut } from "react-icons/io";
import Dashboardactivity from './dashboardactivity';
const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4 border-b border-gray-200">
                    <h1 className="text-2xl pl-8 font-bold  text-gray-800">Dashboard</h1>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2 font-semibold">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                                <span className="ml-6">Overview</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                                <span className="ml-6">Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                                <span className="ml-6">Settings</span>
                            </a>
                        </li>

                    </ul>
                    <div className='pl-8'>
                        <button className=" pl-6 mt-[32rem] w-35 bg-[#a92b43] flex gap-3 text-white py-2 font-semibold rounded-lg hover:bg-[#802d44] transition-colors">
                            <IoIosLogOut className='py-1 size-7' />
                            Logout
                        </button>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="relative flex-1 p-8 overflow-auto">
                {/* Top Navbar */}
                <div className=" absolute top-0 left-0 w-full flex items-center justify-between px-8 py-2  bg-white shadow-sm">
                    {/* Logo Section */}
                    <div className="text-xl font-bold text-[#a92b43]">
                        <img src={Logo1} alt="logo" className="h-12 w-18" />
                    </div>

                    {/* Avatar Section */}
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600 text-sm">Admin</span>
                        <img
                            src={Adminmam}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full object-cover border-2 border-[#a92b43]"
                        />
                    </div>
                </div>


                <header className="mb-8 mt-20">
                    <h2 className="text-3xl font-semibold text-gray-800">Overview</h2>

                </header>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <MetricCard
                        title="Total NOC"
                        value="24,780"
                        change="+12.5%"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#a92b43]">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clipRule="evenodd" />
                            </svg>
                        }

                    />
                    <MetricCard
                        title="New Users"
                        value="1,254"
                        change="+3.2%"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#a92b43]">
                                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                            </svg>

                        }
                    />
                    <MetricCard
                        title="Completed NOC"
                        value="324"
                        change="+8.7%"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#a92b43]">
                                <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clip-rule="evenodd" />
                            </svg>

                        }
                    />
                    <MetricCard
                        title="Pending NOC"
                        value="12"
                        change="-2.1%"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#a92b43]">
                                <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                            </svg>

                        }
                    />

                </div>
                <Dashboardactivity />

            </div>




        </div>
    );
};

const MetricCard = ({ title, value, change, icon }) => {
    const isPositive = change.startsWith('+');

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
                    <p className={`text-sm mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {change} from last week
                    </p>
                </div>
                <span className="text-2xl">{icon}</span>
            </div>
        </div>
    );
};






export default Dashboard;