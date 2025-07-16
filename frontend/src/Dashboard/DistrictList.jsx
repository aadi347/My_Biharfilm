import React from "react";
import { useNavigate } from "react-router-dom";

const districts = [
  "Patna", "Muzaffarpur", "Gaya", "Darbhanga", "Bhagalpur", "Nalanda", "Begusarai", "Purnia",
  "Ara", "Chapra", "Motihari", "Buxar", "Katihar", "Siwan", "Samastipur", "Hajipur",
  "Saharsa", "Dehri", "Jehanabad", "Bettiah", "Sitamarhi", "Khagaria", "Munger", "Lakhisarai",
  "Sheikhpura", "Sheohar", "Madhepura", "Kishanganj"
];

const DistrictList = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {districts.map(district => (
        <button
          key={district}
          onClick={() => navigate(`/district/${district}`)}
          className="bg-white border hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
        >
          {district}
        </button>
      ))}
    </div>
  );
};

export default DistrictList;
