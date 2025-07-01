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
        <div className="flex flex-col gap-2 px-4  pt-4 text-sm font-medium">
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
          </div>
        </header>

        {/* Metrics Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard title="Total NOC" value="24,780" change="+12.5%" />
          <MetricCard title="New Users" value="1,254" change="+3.2%" />
          <MetricCard title="Completed NOC" value="324" change="+8.7%" />
          <MetricCard title="Pending NOC" value="12" change="-2.1%" />
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
