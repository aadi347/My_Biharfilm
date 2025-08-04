import React, { useState } from "react";
import { motion } from "framer-motion";

// Expanded data: 3+ artists per category
const artists = [
    // Actors
    {
        name: "Ravi Kumar",
        type: "Actors",
        description: "Award-winning actor known for his versatility in drama and comedy.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Anjali Patel",
        type: "Actors",
        description: "Talented actress with a flair for emotional roles.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Vikram Sinha",
        type: "Actors",
        description: "Stage and film actor, acclaimed for his powerful performances.",
        image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    // Dancers
    {
        name: "Priya Sharma",
        type: "Dancers",
        description: "Classical and contemporary dancer with 10+ years of stage experience.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Rahul Dev",
        type: "Dancers",
        description: "Energetic hip-hop and folk dancer, winner of multiple contests.",
        image: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
        name: "Meera Joshi",
        type: "Dancers",
        description: "Specializes in Kathak and Bollywood dance styles.",
        image: "https://randomuser.me/api/portraits/women/52.jpg"
    },
    // Stunt Performers
    {
        name: "Amit Singh",
        type: "Stunt Performers",
        description: "Professional stunt performer, skilled in action choreography.",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: "Sanjay Rana",
        type: "Stunt Performers",
        description: "Expert in high falls and fight sequences for film.",
        image: "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
        name: "Deepak Kumar",
        type: "Stunt Performers",
        description: "Motorcycle and car stunt specialist.",
        image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    // Makeup Artists
    {
        name: "Neha Verma",
        type: "Makeup Artists",
        description: "Creative makeup artist for film, TV, and fashion.",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        name: "Meena Joshi",
        type: "Makeup Artists",
        description: "Specializes in prosthetic and bridal makeup.",
        image: "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
        name: "Ritu Singh",
        type: "Makeup Artists",
        description: "Award-winning artist for special effects makeup.",
        image: "https://randomuser.me/api/portraits/women/73.jpg"
    },
    // Street Performers
    {
        name: "Suresh Das",
        type: "Street Performers",
        description: "Popular street magician and entertainer.",
        image: "https://randomuser.me/api/portraits/men/77.jpg"
    },
    {
        name: "Pooja Mishra",
        type: "Street Performers",
        description: "Acrobat and juggler, performs at festivals and fairs.",
        image: "https://randomuser.me/api/portraits/women/78.jpg"
    },
    {
        name: "Ramesh Lal",
        type: "Street Performers",
        description: "Traditional folk singer and puppeteer.",
        image: "https://randomuser.me/api/portraits/men/79.jpg"
    },
];

const categories = [
    "Actors",
    "Dancers",
    "Stunt Performers",
    "Makeup Artists",
    "Street Performers"
];

const LocalArtist = () => {
    const [selectedType, setSelectedType] = useState("Actors");
    const [search, setSearch] = useState("");
    const [focusedArtist, setFocusedArtist] = useState(null);

    const filtered = artists.filter(
        (a) =>
            (selectedType === "" || a.type === selectedType) &&
            a.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-h-[38rem] bg-[#190108] text-white py-6 px-3 sm:px-4 md:px-6 flex flex-col lg:flex-row gap-6 mt-0 overflow-x-hidden rounded-2xl">
            {/* Sidebar */}
            <div className="lg:w-1/4 w-full max-h-[80vh] overflow-y-auto bg-[#2a2a39] rounded-xl p-4 sm:p-5 border border-gray-700 shadow-md">
                <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-[#2a2a39] z-10 py-2"> Local Artists</h2>
                <input
                    type="text"
                    placeholder="🔍 Search Artists..."
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
                                setFocusedArtist(null);
                            }}
                            className={`block w-full mb-2 px-4 py-2 rounded-lg transition font-medium  ${selectedType === type
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
                {!focusedArtist ? (
                    // List/Grid of artist cards
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                        {filtered.length === 0 && (
                            <div className="text-center text-gray-400 col-span-full">No artists found.</div>
                        )}
                        {filtered.map((artist, i) => (
                            <motion.div
                                key={i}
                                onClick={() => setFocusedArtist(artist)}
                                className="w-40 h-44 cursor-pointer bg-[#544347] hover:bg-[#380e1a] rounded-xl p-3 shadow-md border border-gray-700 transition flex flex-col items-center"
                                whileHover={{ scale: 1.03 }}
                            >
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="w-12 h-12 rounded-full object-cover mb-2"
                                />
                                <div className="font-semibold text-base text-center">{artist.name}</div>
                                <div className="text-xs text-gray-300 mt-1">{artist.type}</div>
                                <div className="text-xs text-gray-500 mt-1 line-clamp-2 text-center">{artist.description}</div>
                                <div className="text-xs text-purple-400 mt-1">Click for details</div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    // Artist detail view
                    <div className="flex flex-col items-center justify-center flex-grow p-8 border border-gray-700 rounded-xl m-4 bg-[#2a2a39]">
                        <button
                            className="mb-6 bg-[#380e1a] text-white px-4 py-2 rounded-lg shadow border border-transparent hover:border-2 hover:border-white transition self-start"
                            onClick={() => setFocusedArtist(null)}
                        >
                            ← Back to List
                        </button>
                        <img
                            src={focusedArtist.image}
                            alt={focusedArtist.name}
                            className="w-32 h-32 rounded-full object-cover mb-4 "
                        />
                        <h3 className="text-3xl font-bold mb-2">{focusedArtist.name}</h3>
                        <div className="text-lg text-purple-300 mb-2">{focusedArtist.type}</div>
                        <p className="text-base text-gray-200 mb-4">{focusedArtist.description}</p>
                        {/* Add more artist details here if needed */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LocalArtist;