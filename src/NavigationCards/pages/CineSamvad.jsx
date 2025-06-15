import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Filmclub from "/Filmclub.mp4"; // make sure this path is valid

const imageData = [
  {
    src: "https://film.bihar.gov.in/img/cs1/a12.jpeg",
    title: "Session A",
    description: "Interactive discussion on storytelling and visual language.",
  },
  {
    src: "https://film.bihar.gov.in/img/cs1/b12.jpeg",
    title: "Session B",
    description: "Exploring regional cinema's impact and scope in Bihar.",
  },
  {
    src: "https://film.bihar.gov.in/img/cs1/c12.jpeg",
    title: "Session C",
    description: "Panel talk with filmmakers and critics.",
  },
  {
    src: "https://film.bihar.gov.in/img/cs1/d12.jpeg",
    title: "Session D",
    description: "Youth participation in cinematic arts.",
  },
  {
    src: "https://film.bihar.gov.in/img/cs1/e12.jpeg",
    title: "Session E",
    description: "Understanding the cultural lens in film narratives.",
  },
  {
    src: "https://film.bihar.gov.in/img/cs1/f12.jpeg",
    title: "Session F",
    description: "Workshops on screenwriting and editing basics.",
  },
  {
    src: "https://film.bihar.gov.in/img/cs1/g12.jpeg",
    title: "Session G",
    description: "Short film screenings by local artists.",
  },
  {
    src: "https://film.bihar.gov.in/img/cs1/h12.jpeg",
    title: "Session H",
    description: "Behind-the-scenes of documentary production.",
  },
];

const CineSamvad = () => {
  const navigate = useNavigate();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white px-4 py-16 overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
        src={Filmclub}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Motion Card Container */}
      <motion.div
        whileHover={{ translateY: 10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative z-10 bg-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-8 w-full max-w-8xl shadow-lg hover:shadow-2xl flex flex-col justify-between pl-24 gap-y-6"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-[#a92b43] text-white rounded hover:bg-[#891737] w-fit"
        >
          ← Back to Film Club
        </button>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Cine-Samvad
        </h1>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {imageData.map((item, index) => (
            <div
              key={index}
              className="mt-4 w-[22rem] h-[28rem] group relative overflow-hidden rounded-2xl bg-[#190108] shadow-lg transform transition duration-300 hover:scale-95 hover:bg-[#38242a] outline-1 outline-white outline-offset-1"
            >
              {/* Image Section */}
              <div className="group relative h-[70%] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className="h-[30%] p-4 flex flex-col justify-center">
                <h2 className="text-lg font-bold text-gray-300">{item.title}</h2>
                <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                <div className="absolute inset-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CineSamvad;
