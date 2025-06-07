import React from 'react';
import "../app.css";
import Logo1 from "/src/assets/Logo1.png";
import Adminmam from "/src/assets/Adminmam.svg";
import { IoIosLogOut } from "react-icons/io";

const DistrictDashboard = ({ districtName = "Patna", activityOne = "Forwarded NOCs", activityTwo = "Under Review" }) => {
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
                        <button className="pl-6 mt-[32rem] w-35 bg-[#a92b43] flex gap-3 text-white py-2 font-semibold rounded-lg hover:bg-[#802d44] transition-colors">
                            <IoIosLogOut className='py-1 size-7' />
                            Logout
                        </button>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="relative flex-1 p-8 overflow-auto">
                {/* Top Navbar */}
                <div className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-2 bg-white shadow-sm">
                    <div className="text-xl font-bold text-[#a92b43]">
                        <img src={Logo1} alt="logo" className="h-12 w-18" />
                    </div>
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
                    <h2 className="text-3xl font-semibold text-gray-800">{districtName} District Dashboard</h2>
                </header>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <MetricCard title="Total NOC" value="24,780" change="+12.5%" />
                    <MetricCard title="New Users" value="1,254" change="+3.2%" />
                    <MetricCard title="Completed NOC" value="324" change="+8.7%" />
                    <MetricCard title="Pending NOC" value="12" change="-2.1%" />
                </div>

                {/* District-Specific Activity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-yellow-100 p-6 rounded shadow">
                        <h4 className="text-xl font-bold text-gray-800">{activityOne}</h4>
                        <p className="text-sm mt-2 text-gray-600">NOCs that have been forwarded for approval.</p>
                    </div>
                    <div className="bg-purple-100 p-6 rounded shadow">
                        <h4 className="text-xl font-bold text-gray-800">{activityTwo}</h4>
                        <p className="text-sm mt-2 text-gray-600">Currently under review by officials.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MetricCard = ({ title, value, change }) => {
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
                <span className="text-2xl text-[#a92b43]">📊</span>
            </div>
        </div>
    );
};

export default DistrictDashboard;
