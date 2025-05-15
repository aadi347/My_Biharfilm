import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

// Sample Data with Image URLs
const categories = {
  "Film Locations": [
    { id: 1, title: "Ghora Katora", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/ghora_katora/ghora-katora.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg" },
    { id: 2, title: "Sabhyata Dwar ", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b4/c9/00/caption.jpg?w=300&h=300&s=1" },
    { id: 3, title: "Waterfall ", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a5/91/4c/amritdhara-water-fal.jpg?w=600&h=-1&s=1" },
    { id: 4, title: "Eco Park", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/55/22/85/20171225-144241-largejpg.jpg?w=500&h=400&s=1" },
    { id: 5, title: "Buddha Smriti", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d4/7a/30/buddha-smriti-park.jpg?w=500&h=400&s=1" },
    { id: 6, title: "Glass Brige", img: "https://im.indiatimes.in/content/2020/Dec/9twitter_5fe07db422a7d.jpg?w=720&h=1280&cc=1&webp=1&q=50" },
    { id: 7, title: "Kakolat Waterfall", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nawada/kakolat_waterfall/kakolat-waterfall-nawada.png/jcr:content/renditions/cq5dam.web.480.480.jpeg" },
    { id: 8, title: "Sabhyata Dwar", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b4/c9/00/caption.jpg?w=300&h=300&s=1" },
    { id: 9, title: "Glass Brige", img: "https://im.indiatimes.in/content/2020/Dec/9twitter_5fe07db422a7d.jpg?w=720&h=1280&cc=1&webp=1&q=50" },
  ],
  "Religious Places": [
    { id: 1, title: "Kundalpur", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/kundalpur/jainism_nalanda_a_kundalpur_pic_02.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg" },
    { id: 2, title: "Mahabodhi ", img: "https://railrecipe.com/blog/wp-content/uploads/2021/03/Mahabodhi-Temple-Gaya.jpg" },
    { id: 3, title: "Jal Mandir", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/jal_mandir/jal_mandir_a7307011_edit.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg" },
    { id: 4, title: "Mundeshwari Temple", img: "https://thetempleguru.com/wp-content/uploads/2024/08/Mundeshwari-temple-kaimur-bihar.jpg" },
    { id: 5, title: "Pathar ki Masjid", img: "https://image3.mouthshut.com/images/Restaurant/Photo/-62333_176796.jpg" },
    { id: 6, title: "Jain temple", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/kundalpur/jainism_nalanda_a_kundalpur_pic_02.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg" },
    { id: 7, title: "Shanti Stupa", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Viswasanthi_Stupa%2C_Wardha.JPG/1200px-Viswasanthi_Stupa%2C_Wardha.JPG" },
    { id: 8, title: "Kundalpur", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/kundalpur/jainism_nalanda_a_kundalpur_pic_02.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg" },
    { id: 9, title: "Mundeshwari", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/kaimur/mundeshwari_devi_temple/mundishwaridevi-tn.png/jcr:content/renditions/cq5dam.web.1280.765.jpeg" },
  ],
  "Wildlife": [
    { id: 1, title: "Valmiki Resrve", img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/03/09/2681300-valmiki-tiger-reserve.jpg?im=Resize=(1200,900)" },
    { id: 2, title: "Rajgir Zoo", img: "https://images.bhaskarassets.com/web2images/521/2021/03/10/orig_4_1615322925.jpg" },
    { id: 3, title: "Kaimur", img: "https://pbs.twimg.com/profile_images/1288390076041277440/pP_qpOz9_400x400.jpg" },
    { id: 4, title: "Willife Century", img: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/09/Wildlife-Sanctuary-in-Bihar-Cover-Photo-840x425.jpg" },
    { id: 5, title: "Bision ", img: "https://storiesfromindiaswilds.wordpress.com/wp-content/uploads/2022/03/whatsapp-image-2022-03-10-at-11.32.38.jpeg?w=1024" },
    { id: 6, title: "Bhim bham Sanctuary", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/munger/bheembandh_sanctuary/nature_munger_category_a_bhimband_sanctuary_pic_01.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg" },
    { id: 7, title: "Patna Zoo", img: "https://thebusinesscluster.net/wp-content/uploads/2024/03/image-235.png" },
    { id: 8, title: "Wildlife ", img: "https://static.toiimg.com/photo/msid-106921990,width-96,height-65.cms" },
    { id: 9, title: "Valmiki", img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/03/09/2681300-valmiki-tiger-reserve.jpg?im=Resize=(1200,900)" },
  ],
  "Historical Monuments": [
    { id: 1, title: "Ashoka Pillar", img: "https://media.istockphoto.com/id/1365993607/photo/ashoka-pillar-at-vaishali-in-bihar-india.jpg?s=612x612&w=0&k=20&c=E1VlOJI-ch4LduZy1xGLIHkqZcN1KcZiTt6hPn3T228=" },
    { id: 2, title: "Gandikota", img: "https://media.istockphoto.com/id/1246416146/photo/the-great-canyon-in-gandikota.jpg?s=612x612&w=0&k=20&c=pJia2qMx-mfip4-gC8dF-ksE6IYiiQlBoFnSw3uKAy8=" },
    { id: 3, title: "Lord Buddha", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_c/gaya/80_feet_buddha/buddhist_gaya_c_80_feet_buddha_pic_01.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg" },
    { id: 4, title: "Sujata Kuti", img: "https://media.istockphoto.com/id/1128850714/photo/sujata-kuti-stupa-bodh-style-india.jpg?s=612x612&w=0&k=20&c=oRFORgJIgCbxu_cT-lm0nhLwPw1FbSmQZwQMmjUoZdA=" },
    { id: 5, title: "Vaishali Stupa", img: "https://media.istockphoto.com/id/937177718/photo/vaishali-ancient-stupa-in-india.jpg?s=612x612&w=0&k=20&c=F7E_NTGWlcUQvs2LO_NuBFFxXLs2TWRE_k1mnDzkVdM=" },
    { id: 6, title: "Kesariya Stupa", img: "https://media.istockphoto.com/id/1128850736/photo/kesaria-stupa-champaran-district-of-bihar-india.jpg?s=612x612&w=0&k=20&c=7TV49EV6EiDZ6FJG9MD4xy11JA5WgRqHr8X5rEl0o3M=" },
    { id: 7, title: "Mahabodhi", img: "https://media.istockphoto.com/id/842997816/photo/mahabodhi-temple-bodhgaya.jpg?s=612x612&w=0&k=20&c=0_tRix2uyZG0V9DKmCGeEE0h2_Mn4pIAZyyVzP5UDGI=" },
    { id: 8, title: "Vaishali Stupa ", img: "https://media.istockphoto.com/id/937177718/photo/vaishali-ancient-stupa-in-india.jpg?s=612x612&w=0&k=20&c=F7E_NTGWlcUQvs2LO_NuBFFxXLs2TWRE_k1mnDzkVdM=" },
    { id: 9, title: "kesariya Stupa", img: "https://media.istockphoto.com/id/1128850736/photo/kesaria-stupa-champaran-district-of-bihar-india.jpg?s=612x612&w=0&k=20&c=7TV49EV6EiDZ6FJG9MD4xy11JA5WgRqHr8X5rEl0o3M=" },
  ],
};

// ... (imports remain unchanged)

const FilterableCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("Film Locations");
  const [index, setIndex] = useState(0);

  const cards = categories[selectedCategory];
  const totalCards = cards.length;
  const itemsPerPage = 4;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + itemsPerPage >= totalCards ? 0 : prevIndex + itemsPerPage));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - itemsPerPage < 0 ? totalCards - itemsPerPage : prevIndex - itemsPerPage));
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center bg-[#190108] py-6 px-4 sm:px-8 md:px-12 lg:px-16 pb-20"
      id="Shooting-location"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 pt-24 text-white text-center">
        Top Shooting Locations
      </h1>

      {/* Filter Buttons */}
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
      </div>

      {/* Cards Carousel */}
      <div className="overflow-hidden mt-4 w-full md:w-[90%] relative px-2">
        <div className="flex gap-6 transition-transform duration-500 ease-in-out justify-center">
          {cards.slice(index, index + itemsPerPage).map((card) => (
            <div
              key={card.id}
              className="w-[270px] sm:w-72 h-80 border-1 rounded-2xl overflow-hidden bg-transparent transform transition-transform duration ease-in-out hover:scale-95 group relative"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
              />

              {/* Location Name */}
              <div className="absolute text-base sm:text-xl font-bold bg-gradient-to-t from-black/40 to-transparent bottom-0 left-0 w-full text-white text-start p-4">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex mt-6 gap-4">
        <button onClick={prevSlide} className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600">
          <IoIosArrowBack size={30} />
        </button>
        <button onClick={nextSlide} className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600">
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </motion.div>
  );
};

export default FilterableCarousel;

