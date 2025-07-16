import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bgpatter from "../assets/Bgpatter.svg";

import Adminsvgg from "../assets/Adminsvgg.svg";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const districtAccounts = [
    { email: "patna@gmail.com", password: "patna", district: "Patna" },
    { email: "gaya@gmail.com", password: "gaya", district: "Gaya" },
    { email: "bhagalpur@gmail.com", password: "bhagalpur", district: "Bhagalpur" },
    { email: "muzaffarpur@gmail.com", password: "muzaffarpur", district: "Muzaffarpur" },
  ];

  const userAccounts = [
    { email: "user@gmail.com", password: "user", role: "User" },
    { email: "artist@gmail.com", password: "artist", role: "Artist" },
    { email: "wender@gmail.com", password: "wender", role: "Wender" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isAdmin) {
      // Admin Login
      if (email === "admin@gmail.com" && password === "admin") {
        localStorage.setItem("authToken", "adminToken123");
        navigate("/dashboard");
        return;
      }

      // District Login
      const districtUser = districtAccounts.find(
        (acc) => acc.email === email && acc.password === password
      );

      if (districtUser) {
        localStorage.setItem("authToken", `${districtUser.district}_token`);
        navigate(`/district/${districtUser.district.toLowerCase()}`);
        return;
      }

      alert("Invalid admin or district credentials");
    } else {
      // User, Artist, Wender Login
      const user = userAccounts.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("authToken", `${user.role}_token`);
        if (user.role === "User") {
          navigate("/dashboard-user");
        } else {
          alert("Login successful");
          navigate("/");
        }
        return;
      }

      alert("Invalid user credentials");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-4 relative">
    <img
    src="/Bgg.svg"
    alt="Background"
    className="fixed inset-0 w-full h-full object-cover opacity-60 z-[-1]"
  />

      <div className="flex max-w-5xl w-full h-[39rem] rounded-3xl bg-white shadow-2xl overflow-hidden">
        {/* Left Graphic */}
        <div className="hidden w-1/2 bg-zinc-100 p-10 md:flex items-center justify-center">
          <img
            src={isAdmin ? Adminsvgg : Bgpatter}
            alt="Pattern"
            className="w-full h-auto transition-all duration-300"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              {isAdmin ? "Admin/District" : "User/Artist/Wender"} Login
            </span>
            <button
              type="button"
              onClick={() => setIsAdmin(!isAdmin)}
              className="text-sm px-4 py-1 border rounded-full text-gray-700 border-gray-300 hover:bg-gray-100"
            >
              Switch to {isAdmin ? "User" : "Admin"}
            </button>
          </div>

          <h2 className="text-2xl font-bold text-gray-800">Welcome back!</h2>
          <p className="mb-6 text-gray-500">Enter your email and password</p>

          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm text-gray-700 focus:border-[#a43f5c] focus:outline-none"
                  placeholder="example@gmail.com"
                  required
                />
                <span className="absolute text-lg left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <MdEmail />
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 pl-10 pr-10 text-sm text-gray-700 focus:border-[#a43f5c] focus:outline-none"
                  placeholder="********"
                  required
                />
                <span className="absolute text-lg left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <IoIosLock />
                </span>
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mb-6 w-full rounded-full bg-[#a92b43] py-2 shadow-[0_4px_8px_#802d44] font-semibold text-white hover:bg-[#891737]"
            >
              Login
            </button>

            {/* Footer Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#802d44] hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
