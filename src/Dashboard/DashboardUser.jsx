

import React from 'react';
import "../app.css";
import Logo1 from "/src/assets/Logo1.png";
import UserAvatar from "/src/assets/UserAvtar.svg"; 
import { IoIosLogOut } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-50">
    
      <div className="w-64 bg-white shadow-md flex flex-col">
        {/* Logo / Title */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl pl-2 font-bold text-gray-800">User Dashboard</h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4 font-semibold text-gray-700">
            <li>
              <button
                onClick={() => /* filter logic for “Applied NOC” */ {}}
                className="flex items-center w-full p-2 rounded-lg hover:bg-gray-100"
              >
                <span className="ml-4">Applied NOC</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => /* filter logic for “Pending NOC” */ {}}
                className="flex items-center w-full p-2 rounded-lg hover:bg-gray-100"
              >
                <span className="ml-4">Pending NOC</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => /* filter logic for “Success NOC” */ {}}
                className="flex items-center w-full p-2 rounded-lg hover:bg-gray-100"
              >
                <span className="ml-4">Success NOC</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Logout Button at Bottom */}
        <div className="p-4 pl-13 border-gray-200">
          <button className="w-35 bg-[#a92b43] flex items-center justify-center gap-2 text-white py-2 font-semibold rounded-lg hover:bg-[#802d44] transition-colors">
            <IoIosLogOut className="text-xl" />
            Logout
          </button>
        </div>
      </div>

      {/* ─── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div className="relative flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="w-full flex items-center justify-between px-8 py-2 bg-white shadow-sm">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo1} alt="logo" className="h-12 w-auto" />
            
          </div>

          {/* Right: User Info */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">User</span>
            <img
              src={UserAvatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-[#a92b43]"
            />
          </div>
        </div>

        {/* Header / Page Title */}
        <header className="px-8 mt-16 mb-6">
          <h2 className="text-3xl font-semibold text-gray-800"></h2>
          <p className="text-gray-500 mt-1"></p>
        </header>

        {/* Placeholder for “Applied / Pending / Success” Lists */}
        <div className="px-8 flex-1 overflow-auto">
          {/* 
            ── Here you could render a table or cards depending on which filter 
            is active. For simplicity, we’ll leave this as a placeholder div.
          */}
          <div className="h-full flex items-center justify-center text-gray-400 italic">
            {/* e.g. “Select a category from the sidebar” */}
            Select “Applied NOC”, “Pending NOC”, or “Success NOC” to view your forms.
          </div>
        </div>

        {/* Centered “+” Button to Apply for New NOC */}
        <button
          onClick={() => navigate("/apply-noc")}
          className="
            absolute 
            bottom-10 
            left-1/2 
            transform -translate-x-1/2 
            bg-[#a92b43] 
            hover:bg-[#802d44] 
            text-white 
            rounded-full 
            p-4 
            shadow-lg 
            flex items-center justify-center
          "
        >
          <IoIosAdd className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
