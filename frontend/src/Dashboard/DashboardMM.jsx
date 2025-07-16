import React from "react";
import "../app.css";
import Logo1 from "/src/assets/Logo1.png";
import Adminmam from "/src/assets/Adminmam.svg";
import { IoIosLogOut } from "react-icons/io";
import Dashboardactivity from "./dashboardactivity";
import { IoMdSettings } from "react-icons/io";
import { LuCircleArrowOutUpRight, LuShare2, LuTrash2 } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Dashboard = () => {
  const handleLogout = () => {
    console.log("Logout triggered");
    // Add actual logout logic here
  };

  return (
    <div className="flex h-screen bg-[#f5f6f8] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white flex flex-col justify-between py-6 border-r border-gray-200">
        <div>
          <div className="px-6 pb-2 border-b border-gray-200">
            <img src={Logo1} alt="Logo" className="h-16" />
          </div>

          <nav className="mt-6 px-4 space-y-1 text-sm font-medium">
            <SidebarItem icon={<MdSpaceDashboard />} label="Overview" active />
            <SidebarItem icon={<LuCircleArrowOutUpRight />} label="Recent" />
            <SidebarItem icon={<LuShare2 />} label="Shared" />
            <SidebarItem icon={<FaRegHeart />} label="Favorites" />
          </nav>
        </div>

        {/* Bottom: Settings and Deleted */}
        <div className="flex flex-col gap-2 px-4 pt-4 text-sm font-medium">
          <SidebarItem icon={<IoMdSettings />} label="Settings" />
          <SidebarItem icon={<LuTrash2 />} label="Deleted" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold">Overview</h1>
            <p className="text-sm text-gray-400">Monday, 6th March</p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-gray-300 text-sm w-60 focus:outline-none focus:ring-2 focus:ring-[#a92b43]"
            />
            <img
              src={Adminmam}
              className="w-10 h-10 rounded-full border"
              alt="Admin"
            />
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
        </header>

        {/* Metrics Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard title="Total NOC" value="256" change="+12.5%" />
          <MetricCard title="New Users" value="58" change="+3.2%" />
          <MetricCard title="Completed NOC" value="28" change="+8.7%" />
          <MetricCard title="Pending NOC" value="4" change="-2.1%" />
        </section>

        {/* Activity section */}
        <Dashboardactivity />
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
      active ? "bg-[#e4d7dc] text-[#a92b43]" : "hover:bg-gray-100"
    }`}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const MetricCard = ({ title, value, change }) => {
  const isPositive = change.startsWith("+");
  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm">
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <p className="text-xl font-bold">{value}</p>
      <p className={`text-xs mt-1 ${isPositive ? "text-green-600" : "text-red-500"}`}>
        {change} from last week
      </p>
    </div>
  );
};

export default Dashboard;
