import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import "../app.css"

// Import all your videos
import Vrvideo from "/src/assets/Vrvideo.mp4";
import Vid1 from "/Vid1.mp4";
import Vid2 from "/Vid2.mp4";
import Vid3 from "/Vid3.mp4";
import Vid4 from "/Vid4.mp4";
import Vid5 from "/Vid5.mp4";
import Vid6 from "/Vid6.mp4";
import Vid7 from "/Vid7.mp4";

const videoList = [Vrvideo, Vid1, Vid2, Vid3, Vid4, Vid5, Vid6, Vid7];

function Vr() {
  const [mainVideo, setMainVideo] = useState(videoList[0]);
  const [otherVideos, setOtherVideos] = useState(videoList.slice(1));

  const handleVideoClick = (clickedVideo, index) => {
    const currentMain = mainVideo;
    const updatedOthers = [...otherVideos];
    updatedOthers[index] = currentMain;

    setMainVideo(clickedVideo);
    setOtherVideos(updatedOthers);
  };

  return (
    <div id="Vr" className="bg-[#190108] pt-16 px-4 md:px-10 pb-24">
      {/* Heading */}
      <h2 className="text-white text-5xl pl-22 font-bold">Virtual Reality (VR)</h2>

      {/* Learn more link */}
      
      {/* Grid: Text + Main Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center mb-12">
        {/* Text content */}
        <div>
          <p className="text-white text-base leading-relaxed px-4 md:px-24 text-justify">
            <strong>Experience Bapu Tower, Bihar in Virtual Reality (VR):</strong> <br />
            Step into the cultural core of Bihar with an immersive 360° VR journey through Bapu Tower. Witness the stunning architecture, explore its historical backdrop, and feel the vibrant energy of the surrounding cityscape. Whether you're a history lover, traveler, or student, this virtual experience brings Bapu Tower to life — making you feel like you're truly there, without ever leaving your space.
          </p>
          <div className="flex items-center mt-2 mb-8 pl-18">
        <p className="text-white text-lg pl-6 font-semibold">Learn more</p>
        <IoIosArrowRoundForward className="text-[#a92b4e] text-4xl ml-2 scale-x-150" />
      </div>

        </div>
        

        {/* Main video */}
        <motion.div
          initial={{ opacity: 0.8, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: "easeInOut", type: "tween" },
          }}
          viewport={{ amount: 0.3 }}
          className="w-full h-[25rem] rounded-xl shadow-lg overflow-hidden bg-black"
        >
          <video
            className="w-full h-full object-cover"
            src={mainVideo}
            autoPlay
            muted
            loop
          />
        </motion.div>
      </div>

      {/* Auto-scrolling video thumbnails */}
      <div className="overflow-hidden group mt-8 px-4">
        <div className="flex w-max space-x-4 animate-scrollVideos group-hover:pause-scroll">
          {[...otherVideos, ...otherVideos].map((vid, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer rounded-xl overflow-hidden shadow-md border border-gray-700 w-60 h-36"
              onClick={() => handleVideoClick(vid, index % otherVideos.length)}
            >
              <video
                className="w-full h-full object-cover"
                src={vid}
                muted
                loop
                autoPlay
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vr;
