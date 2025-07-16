import React from "react";
import "../app.css";
import Logo1 from "/src/assets/Logo1.png";
import UserAvatar from "/src/assets/UserAvtar.svg";
import { IoIosLogOut, IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout triggered");
    // Add actual logout logic here
  };

  return (
    <div className="flex h-screen bg-[#f9fafb] font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col ">
        {/* Logo */}
        <div className="p-4 border-b  border-gray-200">
          <img src={Logo1} alt="Logo" className="h-16" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-3">
            <li>
              <button
                className="w-full px-4 py-2 flex items-center text-sm font-semibold text-[#a92b43] bg-[#f4e4e8] rounded-lg transition-all duration-200"
              >
                Overview
              </button>
            </li>
            {["Applied NOC", "Pending NOC", "Success NOC"].map((item) => (
              <li key={item}>
                <button className="w-full px-4 py-2 flex items-center text-sm font-semibold text-gray-700 hover:bg-gray-100  rounded-lg transition-all duration-200">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative overflow-y-auto">
        {/* Top Navbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-7 bg-[#f9fafb]  ">
          <div>
          <h2 className=" text-black font-bold text-xl">Overview</h2>
          <h2 className="text-sm text-gray-400">Monday, 6th March</h2>
          </div>

          <div className="flex items-center gap-4">
      
            <img
              src={UserAvatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-[#a92b43] object-cover"
            />

            {/* Logout Button */}
            <button
              className="group flex items-center justify-start w-9 h-9 bg-[#e7000b] rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-full active:translate-x-1 active:translate-y-1"
              onClick={handleLogout}
            >
              <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                <IoIosLogOut className="text-white text-lg" />
              </div>
              <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Logout
              </div>
            </button>
          </div>
        </div>

        
      
        <button
          onClick={() => navigate("/apply-noc")}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#a92b43] hover:bg-[#911d38] text-white rounded-full p-4 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <IoIosAdd className="text-3xl animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
