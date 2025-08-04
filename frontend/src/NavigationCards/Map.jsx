import React, { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Tooltip,
    LayersControl,
    useMap,
} from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
});

const redIcon = new L.Icon({
    iconUrl: "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=home|ff0000",
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [1, -34],
});

const places = [
    { name: "CineWorks Studios", type: "Film Production", lat: 25.45711, lng: 86.06521 },
    { name: "Silver Frame Productions", type: "Film Production", lat: 25.45217, lng: 86.07819 },
    { name: "Visionary Films Pvt. Ltd.", type: "Film Production", lat: 25.44437, lng: 86.03709 },
    { name: "DreamScape Entertainment", type: "Film Production", lat: 25.46654, lng: 86.0997 },
    { name: "Lights Camera Action Studios", type: "Film Production", lat: 25.4771, lng: 85.9926 },
    { name: "Urban Prop Masters", type: "Props Vendor", lat: 25.42066, lng: 86.11903 },
    { name: "Creative Set Rentals", type: "Props Vendor", lat: 25.44557, lng: 86.02732 },
    { name: "Scenic Design Depot", type: "Props Vendor", lat: 25.41804, lng: 86.10659 },
    { name: "Epic Props & Effects", type: "Props Vendor", lat: 25.47121, lng: 85.96212 },
    { name: "Cinema Artisans", type: "Props Vendor", lat: 25.62416, lng: 86.14468 },
    { name: "Set Decor Hub", type: "Props Vendor", lat: 25.59235, lng: 86.1613 },
    { name: "FilmCraft Equipment", type: "Props Vendor", lat: 25.37884, lng: 86.00514 },
    { name: "Golden Reel Props", type: "Props Vendor", lat: 25.40944, lng: 86.14995 },
    { name: "Starlight Production House", type: "Film Production", lat: 25.42561, lng: 86.13863 },
    { name: "Maverick Props Studio", type: "Props Vendor", lat: 25.42692, lng: 86.1366 },
    { name: "OnSet Essentials", type: "Props Vendor", lat: 25.37628, lng: 86.18749 },
    { name: "Backdrop Rentals Co.", type: "Props Vendor", lat: 25.41896, lng: 86.1152 },
    { name: "Classic Props Gallery", type: "Props Vendor", lat: 25.66817, lng: 86.1777 },
];


const categories = ["All", "Film Production", "Props Vendor"];

const FlyToLocation = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
        if (lat && lng) {
            map.flyTo([lat, lng], 14, { duration: 1.5 });
        }
    }, [lat, lng]);
    return null;
};

const Map = () => {
    const [selectedType, setSelectedType] = useState("All");
    const [search, setSearch] = useState("");
    const [userLocation, setUserLocation] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const [focusedPlace, setFocusedPlace] = useState(null);

    const filtered = places.filter(
        (p) =>
            (selectedType === "All" || p.type === selectedType) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
    }, []);

    // Handler for clicking a card
    const handlePlaceClick = (place) => {
        setFocusedPlace(place);
        setShowMap(true);
    };

    // Handler for going back to list
    const handleBack = () => {
        setShowMap(false);
        setFocusedPlace(null);
    };

    return (
        <div className="max-h-[38rem] bg-[#190108] text-white py-6 px-3 sm:px-4 md:px-6 flex flex-col lg:flex-row gap-6 mt-0 overflow-x-hidden rounded-2xl ">
            {/* Sidebar */}
            <div className="lg:w-1/4 w-full max-h-[80vh] overflow-y-auto bg-[#2a2a39] rounded-xl p-4 sm:p-5 border border-gray-700 shadow-md">
                <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-[#2a2a39] z-10 py-2"> Props</h2>
                <input
                    type="text"
                    placeholder="🔍 Search Props..."
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
                                setShowMap(false);
                                setFocusedPlace(null);
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

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {!showMap ? (
                    // List/Grid of cards
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                        {filtered.length === 0 && (
                            <div className="text-center text-gray-400 col-span-full">No places found.</div>
                        )}
                        {filtered.map((place, i) => (
                            <div
                                key={i}
                                onClick={() => handlePlaceClick(place)}
                                className="cursor-pointer bg-[#2a2a39] hover:bg-[#380e1a] rounded-xl p-4 shadow-md border border-gray-700 transition"
                            >
                                <div className="font-semibold text-lg">{place.name}</div>
                                <div className="text-sm text-gray-300 mt-1">📍 {place.type}</div>
                                <div className="text-xs text-gray-500 mt-2">Click to view on map</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Map view for selected place
                    <div className="flex-grow rounded-2xl border border-gray-600 shadow-lg relative">
                        <button
                            className="absolute top-4 left-4 z-10 bg-[#380e1a] text-white px-4 py-2 rounded-lg shadow hover:bg-[#2a2a39] transition"
                            onClick={handleBack}
                        >
                            ← Back to List
                        </button>
                        <MapContainer
                            center={focusedPlace ? [focusedPlace.lat, focusedPlace.lng] : [25.43, 86.1]}
                            zoom={focusedPlace ? 14 : 11}
                            scrollWheelZoom={true}
                            className="rounded-2xl w-full h-[60vh] sm:h-[70vh] lg:h-full"
                            style={{ minHeight: "400px", width: "100%" }}
                        >
                            <LayersControl position="topright">
                                <LayersControl.BaseLayer checked name="Street View">
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="Satellite View">
                                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                                </LayersControl.BaseLayer>
                                <LayersControl.BaseLayer name="Topographic View">
                                    <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
                                </LayersControl.BaseLayer>
                            </LayersControl>
                            {filtered.map((place, i) => (
                                <Marker key={i} position={[place.lat, place.lng]} icon={customIcon}>
                                    <Popup>
                                        <strong>{place.name}</strong>
                                        <br />📍 {place.type}
                                    </Popup>
                                    <Tooltip permanent direction="top" offset={[0, -30]}>
                                        <motion.div
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className={`bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md border ${
                                                focusedPlace?.name === place.name
                                                    ? "text-purple-900 border-purple-600"
                                                    : "text-purple-800"
                                            }`}
                                        >
                                            {place.name}
                                        </motion.div>
                                    </Tooltip>
                                </Marker>
                            ))}
                            {focusedPlace && <FlyToLocation lat={focusedPlace.lat} lng={focusedPlace.lng} />}
                            {userLocation && (
                                <Marker position={[userLocation.lat, userLocation.lng]} icon={redIcon}>
                                    <Popup>📍 You are here</Popup>
                                </Marker>
                            )}
                        </MapContainer>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Map;