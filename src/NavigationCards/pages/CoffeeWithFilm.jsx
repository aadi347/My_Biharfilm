import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filmclub from "/Filmclub.mp4"; // background video
import Navbar from "../../components/Navbar";

const images = [
  "12 May 2023 (Azad Vartaman ka ek din & Dharti ke bhagwan)",
  "07 October 2022 (Womeniya Rhythm of change)",
  "07 September 2022 (Sumi)",
  "07 July 2022 (Peepli Live)",
  "07 June 2022 (Manjhi - The Mountain Man)",
  "27 January 2017 (Road To Sangam)",
  "27 August 2016 (Nil Battey Sannata)",
  "29 July 2016 (Antardwand)",
  "24 June 2016 (Dulha)",
  "27 May 2016 (Handover)",
];

const pressReleases = [...images]; // Same content for both

const CoffeeWithFilm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden pt-20">
      <Navbar />

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
        src={Filmclub}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-5 py-2 bg-[#a92b43] text-white rounded-md hover:bg-[#891737] transition duration-300"
        >
          ← Back to Film Club
        </button>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-md">
          Coffee With Film
        </h1>

        {/* Dual Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-white">IMAGES</h2>
            <ul className="space-y-2">
              {images.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-400 hover:underline text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Press Release Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-white">PRESS RELEASE</h2>
            <ul className="space-y-2">
              {pressReleases.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-400 hover:underline text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeWithFilm;
