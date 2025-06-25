import React, { useState,useEffect} from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../app.css";



const people = [
  {
    id: 1,
    name: "Manoj Bajpayee",
    occupation: "Actor",
    dob: "23 April 1969",
    district: "West Champaran",
    img: "https://th-i.thgim.com/public/incoming/n3k61b/article68075789.ece/alternates/FREE_1200/MANOJ-SHHHH.jpg",
    description: "Renowned for powerful roles in independent and commercial films.",
    bestWork: "The Family Man",
    imdb: "https://www.imdb.com/name/nm0048075/?ref_=ext_shr_lnk",
  },
  {
    id: 2,
    name: "Pankaj Tripathi",
    occupation: "Actor",
    dob: "5 September 1976",
    district: "Gopalganj",
    img: "https://media.assettype.com/freepressjournal/2022-01/bdc02614-b127-4db2-a440-2f44b9f5f284/Screenshot_2022_01_25_at_5_43_01_AM.png?width=1200",
    description: "Famous for his versatility and natural acting style.",
   bestWork: "Mirzapur",
    imdb: "https://www.imdb.com/name/nm2690647/?ref_=ext_shr_lnk",
  },
  {
    id: 3,
    name: "Sonakshi Sinha",
    occupation: "Actress",
    dob: "2 June 1987",
    district: "Patna",
    img: "https://static.toiimg.com/photo/105058466/105058466.jpg",
    description: "Bollywood actress known for impactful roles in commercial films.",
    bestWork: "Lootera",
    imdb: "https://www.imdb.com/name/nm3848064/?ref_=ext_shr_lnk",
  },
  {
    id: 4,
    name: "Shatrughan Sinha",
    occupation: "Actor",
    dob: "15 July 1946",
    district: "Patna",
    img: "https://sm.mashable.com/mashable_in/seo/8/88864/88864_trrd.png",
    description: "Veteran actor and politician, iconic in 70s-80s cinema.",
    bestWork: "Kalicharan",
    imdb: "https://www.imdb.com/name/nm0802374/?ref_=ext_shr_lnk",
  },
  {
    id: 5,
    name: "Sushant Singh Rajput",
    occupation: "Actor",
    dob: "21 January 1986",
    district: "Patna",
    img: "https://i.pinimg.com/736x/40/60/63/406063a5d7bf517313bf00ee5d6ab840.jpg",
    description: "Talented actor known for heartfelt performances.",
    bestWork: "MS Dhoni: The Untold Story",
    imdb: "https://www.imdb.com/name/nm3818286/?ref_=ext_shr_lnk",
  },
  {
    id: 6,
    name: "Sanjay Mishra",
    occupation: "Actor",
    dob: "6 October 1963",
    district: "Darbhangha",
    img: "https://i.pinimg.com/564x/33/cf/5a/33cf5a9baf45e25e6b8ce5adc89f8b54.jpg",
    description: "Celebrated for comic timing and strong character roles.",
    bestWork: "Ankhon Dekhi",
    imdb: "https://www.imdb.com/name/nm0592799/?ref_=ext_shr_lnk",
  },
  {
    id: 7,
    name: "Neha Sharma",
    occupation: "Actress",
    dob: "21 November 1987",
    district: "Bhagalpur",
    img: "https://akm-img-a-in.tosshub.com/aajtak/images/video/202403/6600096b7e220-will-neha-sharma-contest-elections-from-bihar-240722280-16x9.png",
    description: "Actress and model with presence in films and web series.",
    bestWork: "Crook",
    imdb: "https://www.imdb.com/name/nm2777281/?ref_=ext_shr_lnk",
  },
  {
    id: 8,
    name: "Gurmeet Choudhary",
    occupation: "Actor",
    dob: "22 February 1984",
    district: "Bhagalpur",
    img: "https://www.gethucinema.com/tmdb/eCeElyYgPm1ZvV1NWlBeQbUCp8c.jpg",
    description: "TV and film actor popular for mythological and action roles.",
    bestWork: "Khamoshiyan",
    imdb: "https://www.imdb.com/name/nm3073211/?ref_=ext_shr_lnk",
  },
  {
    id: 9,
    name: "Ustad Bismillah Khan",
    occupation: "Shehnai Maestro",
    dob: "21 March 1916",
    district: "Dumraon (Buxar)",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/bismillah-khan-647_032116095003.jpg",
    description: "Legendary Shehnai player, Bharat Ratna awardee.",
    bestWork: "Goonj Uthi Shehnai (music)",
    imdb: "https://www.imdb.com/name/nm0451190/?ref_=ext_shr_lnk",
  },
  {
    id: 10,
    name: "Sharda Sinha",
    occupation: "Folk Singer",
    dob: "1 October 1952",
    district: "Samastipur",
    img: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/11/India-Today_Sharda-Sinha-YIM6937-1-1-scaled.jpg?size=*:900",
    description: "Voice of Bihar’s folk heritage, especially during Chhath.",
    bestWork: "Maine Pyar Kiya (singer)",
    imdb: "https://www.imdb.com/name/nm0788686/?ref_=ext_shr_lnk",
  },
  {
    id: 11,
    name: "Maithili Thakur",
    occupation: "Folk/Classic Singer",
    dob: "25 July 2000",
    district: "Madhubani",
    img: "https://c.saavncdn.com/artists/Maithili_Thakur_002_20230227072619_500x500.jpg",
    description: "Young prodigy promoting Indian classical and folk music.",
    bestWork: "Primarily Music Albums",
    imdb: "https://www.imdb.com/name/nm9859083/?ref_=ext_shr_lnk",
  },
  {
    id: 12,
    name: "Chandan Tiwari",
    occupation: "Folk Singer",
    dob: "15 August 1985",
    district: "Patna",
    img: "https://chandantiwari.in/wp-content/uploads/2024/11/PHOTO-2024-03-27-16-07-40-1.jpg",
    description: "Folk singer reviving Bhojpuri and regional traditions.",
    bestWork: "Live Performances & Albums",
    imdb: "https://www.imdb.com/name/nm13792834/?ref_=ext_shr_lnk",
  },
  {
    id: 13,
    name: "Bhikhari Thakur",
    occupation: "Bhojpuri Folk Dramatist",
    dob: "18 December 1887",
    district: "Saran",
    img: "https://images.news18.com/ibnkhabar/uploads/2021/07/Bhikhari-Thakur-1.jpg?im=FitAndFill,width=1200,height=675",
    description: "Called the Shakespeare of Bhojpuri theatre.",
    bestWork: "Bidesiya (stage drama)",
    imdb: "https://www.imdb.com/name/nm3098812/?ref_=ext_shr_lnk",
  },
  {
    id: 14,
    name: "Sita Devi",
    occupation: "Madhubani Artist",
    dob: "1914",
    district: "Madhubani",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIz0LIxS_vCnv4_hKVG4Hm8pKwA5ewOlKFA&s",
    description: "National award-winning Madhubani artist.",
    bestWork: "Folk Art",
    imdb: "https://www.imdb.com/name/nm12445508/",
  },
  {
    id: 15,
    name: "Shanti Devi",
    occupation: "Godna Artist",
    dob: "1941",
    district: "Nawada",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7c2MyynJnjoiUs8s0MGLHpgAoqfkDnrmHwA&s",
    description: "Preserver of Godna tattoo art in Bihar.",
    bestWork: "Folk Art",
    imdb: "https://www.imdb.com/name/nm12445852/",
  },
  {
    id: 16,
    name: "Dulari Devi",
    occupation: "Madhubani Artist",
    dob: "1968",
    district: "Madhubani",
    img: "https://www.folkartopedia.com/wp-content/uploads/elementor/thumbs/Dularee-Devi_2-on0xbaf8s19wqch43hw4ynl4lf5ni64lavjlt2w41c.jpg",
    description: "Internationally exhibited Madhubani artist and mentor.",
    bestWork: "Folk Art",
    imdb: "https://www.imdb.com/name/nm12445544/",
  },
];


const CarouselOfCelebs = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [flippedCard, setFlippedCard] = useState(null);
  const total = people.length;

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + itemsPerPage >= total ? 0 : prev + itemsPerPage));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - itemsPerPage < 0 ? total - itemsPerPage : prev - itemsPerPage));
  };

return (
  <div className="w-full flex flex-col items-center justify-center bg-[#190108] py-10">
    <h2 className="text-white playwrite-mx-guides-regular text-3xl sm:text-4xl md:text-5xl mb-10 pt-10 pb-8 text-center">
      Celebrities of Bihar
    </h2>

    <div className="w-full flex justify-center px-4">
      <div className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out flex-wrap justify-center">
        {people.slice(index, index + itemsPerPage).map((person) => (
          <div
            key={person.id}
            className="w-64 sm:w-72 h-96 perspective"
            onClick={() => setFlippedCard(flippedCard === person.id ? null : person.id)}
          >
            {/* Animated border wraps the whole card */}
            <div className="card-animated-border w-full h-full">
              {/* Flipping logic happens inside */}
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                  flippedCard === person.id ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-white/40 backdrop-blur-3xl text-white rounded-2xl overflow-hidden border border-white/20">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <p className="text-sm">{person.occupation}</p>
                    <p className="text-sm">{person.address}</p>
                  </div>
                </div>

                {/* Back Side */}


{/* Back Side */}
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#282828] text-white rounded-2xl p-4 flex flex-col justify-start items-center text-left border outline-2 outline-white ">

  {/* Ultra-Thin Colored Ring */}
  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[132px] h-[132px] rounded-full bg-white/90 flex items-center justify-center shadow-md">
    <img
      src={person.img}
      alt={person.name}
      className="w-32 h-32 rounded-full object-cover "
    />
  </div>

  {/* Content starts below image */}
  <div className="mt-40 w-full px-2">
    
    <p className="text-sm mb-1 italic">{person.occupation}</p>
    <p className="text-sm mb-1">Date of Birth: {person.dob}</p>
    <p className="text-sm mb-1">District: {person.district}</p>
    <p className="text-sm mb-2">{person.description}</p>
    <p className="text-sm font-semibold mb-1">Best Film: {person.bestWork}</p>
    <a
      href={person.imdb}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        alt="IMDb"
        className="w-16 h-auto mt-4"
      />
    </a>
  </div>
</div>






              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center gap-4 mt-6">
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
  </div>
);




 
};

export default CarouselOfCelebs;