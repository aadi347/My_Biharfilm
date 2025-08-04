import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "Police",
  "Private Guards",
  "Fire Safety",
  "Medical",
  "Crowd Control"
];

const providers = [
  {
    name: "City Police Station",
    type: "Police",
    description: "Official police support for film sets and events.",
    contact: "100",
    image: "https://img.icons8.com/color/96/police-badge.png"
  },
  {
    name: "SafeGuard Pvt Ltd",
    type: "Private Guards",
    description: "Trained private guards for on-set security.",
    contact: "+91 9876543210",
    image: "https://img.icons8.com/color/96/security-checked.png"
  },
  {
    name: "Fire Response Team",
    type: "Fire Safety",
    description: "Fire safety officers and equipment for shoots.",
    contact: "+91 9123456780",
    image: "https://img.icons8.com/color/96/fireman-hat.png"
  },
  {
    
  }
];

const Security = () => {
  const [selectedType, setSelectedType] = useState("Police");
  const [search, setSearch] = useState("");
  const [focusedProvider, setFocusedProvider] = useState(null);

  const filtered = providers.filter(
    (p) =>
      (selectedType === "" || p.type === selectedType) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-h-[38rem] bg-[#190108] text-white py-6 px-3 sm:px-4 md:px-6 flex flex-col lg:flex-row gap-6 mt-0 overflow-x-hidden rounded-2xl">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full max-h-[80vh] overflow-y-auto bg-[#2a2a39] rounded-xl p-4 sm:p-5 border border-gray-700 shadow-md">
        <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-[#2a2a39] z-10 py-2"> Security Services</h2>
        <input
          type="text"
          placeholder="🔍 Search Providers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-5 p-2 rounded-lg bg-gray-800 border border-gray-600 text-white"
        />
        <div className="mb-6">
          {categories.map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedType(type);
                setFocusedProvider(null);
              }}
              className={`block w-full mb-2 px-4 py-2 rounded-lg transition font-medium  ${
                selectedType === type
                  ? "bg-[#380e1a] text-white shadow-md"
                  : "bg-gray-700 hover:bg-[#380e1a]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content with left border */}
      <div className="flex-1 flex flex-col border-l border-gray-700">
        {!focusedProvider ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {filtered.length === 0 && (
              <div className="text-center text-gray-400 col-span-full">No providers found.</div>
            )}
            {filtered.map((provider, i) => (
              <motion.div
                key={i}
                onClick={() => setFocusedProvider(provider)}
                className="w-40 h-44 cursor-pointer bg-[#544347] hover:bg-[#380e1a] rounded-xl p-3 shadow-md border border-gray-700 transition flex flex-col items-center"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-12 h-12 rounded-full object-cover mb-2"
                />
                <div className="font-semibold text-base text-center">{provider.name}</div>
                <div className="text-xs text-gray-300 mt-1">{provider.type}</div>
                <div className="text-xs text-gray-500 mt-1 line-clamp-2 text-center">{provider.description}</div>
                <div className="text-xs text-purple-400 mt-1">Click for details</div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-grow p-8 border border-gray-700 rounded-xl m-4 bg-[#2a2a39]">
            <button
              className="mb-6 bg-[#380e1a] text-white px-4 py-2 rounded-lg shadow border border-transparent hover:border-2 hover:border-white transition self-start"
              onClick={() => setFocusedProvider(null)}
            >
              ← Back to List
            </button>
            <img
              src={focusedProvider.image}
              alt={focusedProvider.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#380e1a]"
            />
            <h3 className="text-3xl font-bold mb-2">{focusedProvider.name}</h3>
            <div className="text-lg text-purple-300 mb-2">{focusedProvider.type}</div>
            <p className="text-base text-gray-200 mb-4">{focusedProvider.description}</p>
            <div className="text-base text-gray-400 mb-2">Contact: {focusedProvider.contact}</div>
            {/* Add more provider details here if needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Security;