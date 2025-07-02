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
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-md">
        {/* Logo Instead of Title */}
        <div className="p-4 border-b ">
          <img src={Logo1} alt="Logo" className="h-16" />
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-3">
            {["Applied NOC", "Pending NOC", "Success NOC"].map((item) => (
              <li key={item}>
                <button className="w-full px-4 py-2 flex items-center text-sm font-semibold text-gray-700 hover:bg-[#f4e4e8] hover:text-[#a92b43] rounded-lg transition-all duration-200">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
          <img src={Logo1} alt="Logo" className="h-12" />

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">User</span>
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
                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
              </div>
              <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Logout
              </div>
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="px-8 pt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Welcome to Your Dashboard
          </h2>
          <p className="text-sm text-gray-500">
            View and manage your NOC applications
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-8 mt-6 overflow-auto">
          <div className="h-full flex items-center justify-center text-gray-400 italic">
            Apply for NOC to see your applications here.
          </div>
        </div>

        {/* Floating Apply Button */}
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
