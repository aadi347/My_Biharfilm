import React from "react";
import "../App.css"; // Import your CSS file for styles
const topImages = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_3U00IWSSR-omPQem2GCHZyg_Kq0DmZoGg&s",
    alt: "Leader 1",
    name: "Shri Motilal Prasad",
    namee: "Hon'ble Minister"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/biharfilm%2Fhome_secy.jpeg?alt=media&token=2f9b010e-0fed-4627-949d-a4779308a995",
    alt: "Leader 2",
    name: "Sri Pranav Kumar,I.A.S",
    namee: "Managing Director",
    nameee: "Secretary (Art, Culture & Youth Department)"
  },
];

const bodyMembers = [
  
  {
    img: "https://static.wixstatic.com/media/cd3dbe_8f26ba759b334abc94aa6f69dd36f2cc~mv2.jpeg/v1/fill/w_667,h_375,al_c,q_80,enc_avif,quality_auto/cd3dbe_8f26ba759b334abc94aa6f69dd36f2cc~mv2.jpeg",
    name: "Sri Arvind Ranjan Das",
    role: "Consultant(Film)",
    description: "0612-2219213",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "V.D.Mishra",
    role: "	Consultant (Fin. & Account)",
    description: "7482075777",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "	Sonika Kumari",
    role: "Assistant Section Officer",
    description: "",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Kumar Gaurav",
    role: "Junior Consultant (Communication and Networking)",
    description: "",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Leela Kumari Prasad",
    role: "Data Entry Operator",
    description: "",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    name: "Amit Ranjan",
    role: "Data Entry Operator",
    description: "",
  },
];

const GoverningComponent = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 pt-10 pb-20 bg-[#190108] w-full  rounded-tl-4xl rounded-tr-4xl -mt-10 relative z-10" id="GoverningBody">
      {/* Title */}
        <p className="text-white text-3xl sm:text-4xl md:text-8xl bebas-neue-regular pb-12 pl-[23rem]">
    Governing Body
  </p>

      {/* Top Leaders */}
      <div className="flex flex-wrap justify-center gap-12 sm:gap-20 mb-16">
        {topImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-white w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg hover:scale-105 transition">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-white text-base sm:text-lg font-semibold">{item.name}</p>
            <p className="text-zinc-400 text-sm">{item.namee}</p>
            {item.nameee && <p className="text-zinc-400 text-sm">{item.nameee}</p>}
          </div>
        ))}
      </div>

      {/* Member Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className=" table-auto divide-y divide-gray-200">
          <tbody>
            {bodyMembers.map((member, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition"
              >
                {/* Profile Image */}
                <td className="px-6 sm:px-10 lg:px-16 py-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>

                {/* Name */}
                <td className="px-1 py-4 text-gray-800 font-medium w-full sm:w-48">
                  {member.name}
                </td>

                {/* Role */}
                <td className="px-6 py-4 text-gray-500 w-full sm:w-48 whitespace-nowrap">
                  {member.role}
                </td>

                {/* Description */}
                <td className="px-6 py-4 text-gray-600 text-sm">
                  {member.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoverningComponent;
