import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import "../app.css";

// High & Low Quality Imports
import VrvideoHQ from "/VrvideoHQ.mp4";
import VrvideoLQ from "/VrvideoLQ.mp4";
import VrvideoHQ2 from "/VrvideoHQ2.mp4";
import VrvideoLQ2 from "/VrvideoLQ2.mp4";
import VrvideoHQ3 from "/VrvideoHQ3.mp4";
import VrvideoLQ3 from "/VrvideoLQ3.mp4";
import VrvideoHQ4 from "/VrvideoHQ4.mp4";
import VrvideoLQ4 from "/VrvideoLQ4.mp4";
import VrvideoHQ5 from "/VrvideoHQ5.mp4";
import VrvideoLQ5 from "/VrvideoLQ5.mp4";
import VrvideoHQ6 from "/VrvideoHQ6.mp4";
import VrvideoLQ6 from "/VrvideoLQ6.mp4";

// Structured video list
const videoList = [
  { high: VrvideoHQ, low: VrvideoLQ },
  { high: VrvideoHQ2, low: VrvideoLQ2 },
  { high: VrvideoHQ3, low: VrvideoLQ3 },
  { high: VrvideoHQ4, low: VrvideoLQ4 },
  { high: VrvideoHQ5, low: VrvideoLQ5 },
  { high: VrvideoHQ6, low: VrvideoLQ6 },
];

function Vr() {
  const [mainVideo, setMainVideo] = useState(videoList[0].high);
  const [mainIndex, setMainIndex] = useState(0); // Track main video's index

  const handleVideoClick = (clickedVideo, index) => {
    // Swap main and clicked
    const updatedOthers = [...videoList];
    const newMainVideo = clickedVideo.high;

    // Update state
    setMainVideo(newMainVideo);
    setMainIndex(index);
  };

  return (
    <div id="Vr" className="bg-[#190108] pt-16 px-4 md:px-10 pb-24">
      {/* Heading */}
      <h2 className="text-white text-5xl pl-22 font-bold">Virtual Reality (VR)</h2>

      {/* Text + Main Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center mb-12">
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

        {/* Main video player */}
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
            controls
          />
        </motion.div>
      </div>

      {/* Video Thumbnails in low quality */}
      <div className="overflow-hidden group mt-8 px-4">
        <div className="flex w-max space-x-4 animate-scrollVideos group-hover:pause-scroll">
          {videoList.map((vid, index) =>
            index !== mainIndex ? ( // skip currently playing main video
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer rounded-xl overflow-hidden shadow-md border border-gray-700 w-60 h-36"
                onClick={() => handleVideoClick(vid, index)}
              >
                <video
                  className="w-full h-full object-cover"
                  src={vid.low}
                  muted
                  loop
                  autoPlay
                />
              </motion.div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Vr;
