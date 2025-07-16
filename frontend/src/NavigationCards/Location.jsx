
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const categories = {
  "Hills & Caves": [
    {
      id: 1,
      title: "Barabar Hills",
      img: "https://film.bihar.gov.in/assets/Hills%20and%20Caves/Barabar%20Hills%20000.jpg",
      description: "Barabar Hills, located in the Jehanabad district of Bihar, are home to the oldest surviving rock-cut caves in India, dating back to the Mauryan period.",
      lat: 25.0076,
      lng: 85.0653,
      
    },
    {
      id: 2,
      title: "Gridhakut Hills",
      img: "https://film.bihar.gov.in/assets/Hills%20and%20Caves/Gridhakut%20Hill3%20000.jpg",
      description: "Gridhakut Hills, also known as Vulture Peak, is located near Rajgir in Bihar. It is a significant Buddhist pilgrimage site where Lord Buddha is said to have delivered many important sermons.",
      lat: 25.0172,
      lng: 85.4217
    },
    {
      id: 3,
      title: "Grupa Hills Gaya",
      img: "https://film.bihar.gov.in/assets/Hills%20and%20Caves/Gurpa%20Hill%20Gaya%20000.jpg",
      description: "Grupa Hills (also known as Gurpa Hills) is a sacred Buddhist site located near Gaya in Bihar. .",
      lat: 24.9251,
      lng: 85.1522
    },
    {
      id: 4,
      title: "Kaimur Hills",
      img: "https://film.bihar.gov.in/assets/Hills%20and%20Caves/kaimur%20hills1%20000.jpg",
     description: "Kaimur Hills are part of the Vindhya range in Bihar, known for scenic landscapes, waterfalls, and wildlife.",
     lat: 24.6215,
     lng: 83.5830
    },
    {
      id: 5,
      title: "Kakolat Waterfall",
      img: "https://film.bihar.gov.in/assets/Hills%20and%20Caves/Kakolat%20Waterfalls%20000.jpg",
      description: "Kakolat Waterfall is a scenic spot in Nawada district, famous for its clear waters and natural setting. It’s a popular picnic and shooting destination.",
      lat: 24.7082,
      lng: 85.5200
    },
    {
      id: 6,
      title: "Telhar Kund Kaimur",
      img: "https://film.bihar.gov.in/assets/Hills%20and%20Caves/Telhar%20Kund%20Kaimur%20000.jpg",
      description: "Telhar Kund is a picturesque waterfall located in the Kaimur hills, surrounded by lush forests and rocky cliffs.",
  lat: 24.6467,
  lng: 83.4801
    },
    {
      id: 7,
      title: "Tutla Bhawani Waterfall",
      img: "https://film.bihar.gov.in/assets/Hills%20and%20Caves/tutla%20bhawani%20waterfall.jpeg",
       description: "Tutla Bhawani Waterfall is a hidden gem in Rohtas, known for its serene environment and religious significance.",
  lat: 24.9550,
  lng: 84.0583
    },
    {
  id: 8,
  title: "Vishwa Shanti Stupa",
  img: "https://film.bihar.gov.in/assets/Hills%20and%20Caves/Vishwa%20Stanti%20Stupa%20Rajgir%20000.jpg",
  description: "Vishwa Shanti Stupa in Rajgir is a symbol of world peace, perched on Ratnagiri Hill and accessible by a ropeway.",
  lat: 25.0305,
  lng: 85.4215
},

    
  ],
  "Monuments & Museums": [
    {
      id: 1,
      title: "Bihar Museum",
      img: "https://film.bihar.gov.in/assets/Markets%20and%20Buildings/Bihar%20Museum1%20000.jpg",
      description: "Bihar Museum in Patna showcases Bihar’s rich cultural heritage with modern exhibits and galleries.",
  lat: 25.6071,
  lng: 85.1234
    },
    {
      id: 2,
      title: "Dutch Building",
      img: "https://film.bihar.gov.in/assets/Markets%20and%20Buildings/dutch%20building%20000.jpg",
    description: "The Dutch Building in Patna is a historic colonial-era structure, known for its architectural significance.",
  lat: 25.6102,
  lng: 85.1408
    },
    {
      id: 3,
      title: "Gandhi Sangrahalay",
      img: "https://film.bihar.gov.in/assets/Markets%20and%20Buildings/Gandhi%20Sangrahalaya%20000.jpg",
      description: "Gandhi Sangrahalaya is a museum in Patna dedicated to the life and ideals of Mahatma Gandhi.",
  lat: 25.6135,
  lng: 85.1413
    },
    {
      id: 4,
      title: "Khuda baksh Oriental Library",
      img: "https://film.bihar.gov.in/assets/Markets%20and%20Buildings/khuda%20baksh%20oriental%20library%200000.jpg",
       description: "Khuda Bakhsh Oriental Library in Patna holds rare manuscripts and ancient texts, a treasure trove of history.",
  lat: 25.6120,
  lng: 85.1418
    },
    {
      id: 5,
      title: "Patna Museum",
      img: "https://film.bihar.gov.in/assets/Markets%20and%20Buildings/patna%20museum%20000.jpg",
       description: "Patna Museum in Patna showcases Bihar’s rich cultural heritage with modern exhibits and galleries.",
  lat: 25.6071,
  lng: 85.1234
    },
    {
      id: 6,
      title: "Planetarium Patna",
      img: "https://film.bihar.gov.in/assets/Markets%20and%20Buildings/planetarium%20patna%20000.jpg",
       description: "Patna Planetarium offers educational astronomy shows and exhibits for all ages.",
  lat: 25.6139,
  lng: 85.1442
    },
   
    
  ],
  "Nature": [
    {
      id: 1,
      title: "Valmiki Tiger Reserve",
      img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/03/09/2681300-valmiki-tiger-reserve.jpg?im=Resize=(1200,900)",
       description: "Valmiki Tiger Reserve is Bihar’s only tiger reserve, rich in wildlife including tigers, elephants, and deer.",
  lat: 27.4456,
  lng: 84.9206
    },
    {
      id: 2,
      title: "Rajgir Zoo",
      img: "https://images.bhaskarassets.com/web2images/521/2021/03/10/orig_4_1615322925.jpg",
      description: "Rajgir Zoo (Vishwa Shanti Van) offers a small but diverse collection of animals amid scenic surroundings near Rajgir.",
  lat: 25.0269,
  lng: 85.4204
    },
    {
      id: 3,
      title: "Kaimur Wildlife",
      img: "https://pbs.twimg.com/profile_images/1288390076041277440/pP_qpOz9_400x400.jpg",
      description: "Rajgir Zoo (Vishwa Shanti Van) offers a small but diverse collection of animals amid scenic   surroundings near Rajgir.",
      lat: 25.0269,
      lng: 85.4204    },
    
   
    {
      id: 4,
      title: "Bhimband wildlife Sanctuary",
      img: "https://film.bihar.gov.in/assets/Forest%20and%20wildlife/Bhimband%20Sanctuary%20000.jpg",
      description: "Bhimbandh Wildlife Sanctuary in Munger is known for its hot springs, forests, and a variety of wildlife.",
  lat: 24.4535,
  lng: 86.3286
    },
    {
      id: 5,
      title: "Patna Zoo",
      img: "https://thebusinesscluster.net/wp-content/uploads/2024/03/image-235.png",
     description: "Patna Zoo houses a variety of animal species including tigers, lions, elephants, and offers educational exhibits in a park-like setting.",
  lat: 25.6122,
  lng: 85.1250
    },    
  ],
 
};

const Location = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Hills & Caves");
  const [index, setIndex] = useState(0);

  const cards = categories[selectedCategory];
  const totalCards = cards.length;
  const itemsPerPage = 4;
  const categoryList = Object.keys(categories);

  const nextSlide = () => {
  const cards = categories[selectedCategory];
  const totalCards = cards.length;

  if (index + itemsPerPage >= totalCards) {
    // Move to next category
    const currentCategoryIndex = categoryList.indexOf(selectedCategory);
    const nextCategoryIndex = (currentCategoryIndex + 1) % categoryList.length;
    setSelectedCategory(categoryList[nextCategoryIndex]);
    setIndex(0);
  } else {
    setIndex(index + itemsPerPage);
  }
};


 const prevSlide = () => {
  if (index - itemsPerPage < 0) {
    // Move to previous category
    const currentCategoryIndex = categoryList.indexOf(selectedCategory);
    const prevCategoryIndex =
      (currentCategoryIndex - 1 + categoryList.length) % categoryList.length;

    const newCategory = categoryList[prevCategoryIndex];
    const newCards = categories[newCategory];
    const newTotal = newCards.length;
    const newIndex = Math.max(0, newTotal - itemsPerPage);

    setSelectedCategory(newCategory);
    setIndex(newIndex);
  } else {
    setIndex(index - itemsPerPage);
  }
};


  return (
    <motion.div
      className="w-full h-screen  flex flex-col items-center justify-center bg-[#190108] py-6 px-4 sm:px-8 md:px-12 lg:px-16 pb-20"
      id="Shooting-location"

    >
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 pt-24 text-white text-center">
        Top Shooting Locations
      </h1>

      {/* Filter Buttons */}
      import { useNavigate } from "react-router-dom"; // already imported

...

<div className="flex flex-wrap justify-center gap-4 mb-6 px-2">
  {Object.keys(categories).map((category) => (
    <button
      key={category}
      className={`px-4 py-2 rounded-lg text-sm sm:text-base ${
        selectedCategory === category
          ? "bg-red-600 text-white"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      }`}
      onClick={() => {
        setSelectedCategory(category);
        setIndex(0);
      }}
    >
      {category}
    </button>
  ))}

  {/* Navigate Button */}
  <button
    onClick={() => navigate("/shootinglocation")}
    className="px-4 py-2 rounded-lg text-sm sm:text-base bg-gray-700 text-gray-300 hover:bg-gray-600"
  >
    View All
  </button>
</div>


  
      <div className="overflow-hidden mt-4 w-full md:w-[90%] relative px-2">
        <div className="flex gap-6 transition-transform duration-500 ease-in-out justify-center">
          {cards.slice(index, index + itemsPerPage).map((card) => {
  
            const encodedCategory = encodeURIComponent(selectedCategory);
            const detailPath = `/location/${encodedCategory}/${card.id}`;

            return (
              <Link to={detailPath} key={card.id}>
                <div className="w-[270px] sm:w-72 h-80 border-1 rounded-2xl overflow-hidden bg-transparent transform transition-transform duration ease-in-out hover:scale-95 group relative cursor-pointer">
                
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
                  />

               
                  <div className="absolute text-base sm:text-xl font-bold bg-gradient-to-t from-black/40 to-transparent bottom-0 left-0 w-full text-white text-start p-4">
                    {card.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

   
      <div className="flex mt-6 gap-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600"
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </motion.div>
  );
};

export default Location;
