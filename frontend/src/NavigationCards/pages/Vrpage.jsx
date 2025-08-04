// src/NavigationCards/pages/Vrpage.jsx
import React from "react";
import Vr from "/Vrpage.mp4";

const vrExperiences = [
  { id: 1, image: "/image1.jpg", link: "https://vr-link-1.com", title: "Glass Bridge, Rajgir" },
  { id: 2, image: "/image2.jpg", link: "https://vr-link-2.com", title: "Pawapuri, Nalanda" },
  { id: 3, image: "/image3.jpg", link: "https://vr-link-3.com", title: "Jungle Safari, Rajgir" },
];

const Vrpage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Vr} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-center tracking-wide">
          Explore Bihar in Virtual Reality
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {vrExperiences.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={`VR Preview ${item.id}`}
                className="w-full h-40 object-cover rounded-xl mb-4 border border-white/10"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
              <button
                onClick={() => window.open(item.link, "_blank")}
                className="mt-auto bg-[#a92b4e] px-6 py-2 text-white rounded-full text-sm font-semibold hover:bg-[#c6365d] transition"
              >
                Experience in VR
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vrpage;
