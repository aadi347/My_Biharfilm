import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const categories = {
  "Film Locations": [
    { id: 1, title: "Ghora Katora", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/ghora_katora/ghora-katora.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg", description: "Ghora Katora, meaning 'Horse Bowl'is a serene lake near Rajgir, surrounded by lush hills. Its tranquil waters and natural beauty make it an ideal backdrop for romantic scenes, nature documentaries, or historical dramas. The absence of urban noise enhances its appeal for filmmakers seeking pristine natural settings."  },
    { id: 2, title: "Sabhyata Dwar ", img: "https://d34vm3j4h7f97z.cloudfront.net/original/4X/0/e/f/0eff8ccd6a5c2badce42ea5c330ff4a41449fd0f.jpeg", description: "Sabhyata Dwar, or the Civilization Gate, stands tall in Patna with its Mauryan-style architecture. This 32-meter-high sandstone arch, adorned with inscriptions from historical figures like Ashoka and Buddha, offers a majestic setting for period films or sequences emphasizing cultural grandeur." },
    { id: 3, title: "Amritdhara Waterfall ", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a5/91/4c/amritdhara-water-fal.jpg?w=600&h=-1&s=1", description: "Amrit Dhara is a natural waterfall located in Manendragarh-Chirmiri-Bharatpur district, state of Chhattisgarh, India. It originates from the Hasdeo River, which is a tributary of the Mahanadi River. The fall is situated at a distance of 50 km from Chirmiri and 30 km from Manendragarh. The waterfall is located on the Manendragarh-Baikunthpur road NH 43. The Amrit Dhara waterfall in Manendragarh-Chirmiri-Bharatpur in Chhattisgarh in India falls from a height of 90.0 ft (27.4 metres)." },
    { id: 4, title: "Eco Park", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/55/22/85/20171225-144241-largejpg.jpg?w=500&h=400&s=1", desctiption: "Eco Park, also known as Rajdhani Vatika, is a sprawling green space in Patna featuring manicured lawns, lakes, and adventure activities like zip-lining. Its diverse landscapes provide versatile settings for family-oriented films, romantic sequences, or scenes requiring urban greenery." },
    { id: 5, title: "Buddha Smriti", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d4/7a/30/buddha-smriti-park.jpg?w=500&h=400&s=1", description: "Located near Patna Junction, Buddha Smriti Park is an urban oasis with meditation centers and a central stupa. Its serene ambiance and architectural elegance make it suitable for spiritual sequences, contemplative scenes, or cultural documentaries." },
    { id: 6, title: "Glass Brige", img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/glsi_1200x768.jpeg?size=1200:675", description: "The Rajgir Glass Bridge offers a thrilling experience with its transparent walkway suspended amidst scenic hills. This unique structure provides dramatic visuals for adventure films, romantic encounters, or sequences emphasizing human triumph over nature." },
    { id: 7, title: "Kakolat Waterfall", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nawada/kakolat_waterfall/kakolat-waterfall-nawada.png/jcr:content/renditions/cq5dam.web.480.480.jpeg", desctiption: "Kakolat Waterfall, cascading from a height of approximately 160 feet, is nestled in the Nawada district. Surrounded by dense forests, it offers a mystical setting ideal for fantasy sequences, romantic interludes, or scenes depicting nature's raw beauty." },
    
  ],
  "Religious Places": [
    { id: 1, title: "Kundalpur", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/kundalpur/jainism_nalanda_a_kundalpur_pic_02.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg", description: "Kundalpur is revered as the birthplace of Lord Mahavira, the 24th Tirthankara of Jainism. The area's ancient temples and spiritual significance provide an authentic backdrop for religious documentaries, historical narratives, or scenes exploring spiritual journeys." },
    { id: 2, title: "Mahabodhi ", img: "https://railrecipe.com/blog/wp-content/uploads/2021/03/Mahabodhi-Temple-Gaya.jpg", description: "The Mahabodhi Temple in Bodh Gaya is a UNESCO World Heritage site marking the location where Buddha attained enlightenment. Its intricate architecture and spiritual ambiance make it ideal for films exploring Buddhist themes, pilgrimages, or historical events." },
    { id: 3, title: "Jal Mandir", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/jal_mandir/jal_mandir_a7307011_edit.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg", description: "Jal Mandir, situated in Pawapuri, is a temple built in the middle of a lotus-filled lake. This serene setting offers picturesque visuals for spiritual sequences, reflective moments, or scenes emphasizing tranquility and devotion." },
    { id: 4, title: "Mundeshwari Temple", img: "https://thetempleguru.com/wp-content/uploads/2024/08/Mundeshwari-temple-kaimur-bihar.jpg", description: "Mundeshwari Temple, one of the oldest functional temples in India, is perched atop a hill in Kaimur. Its ancient stone architecture and panoramic views provide a compelling setting for historical dramas, spiritual journeys, or scenes depicting ancient rituals." },
    { id: 5, title: "Pathar ki Masjid", img: "https://image3.mouthshut.com/images/Restaurant/Photo/-62333_176796.jpg", description: "Pathar ki Masjid, located on the banks of the Ganges in Patna, is a 17th-century mosque built of stone. Its historical significance and architectural beauty make it suitable for period films, cultural explorations, or scenes highlighting communal harmony." },
    { id: 6, title: "Jain temple", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/kundalpur/jainism_nalanda_a_kundalpur_pic_02.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg", description: "The Jain temples in Kundalpur, with their intricate carvings and serene environment, offer authentic settings for films focusing on Jain philosophy, historical narratives, or spiritual quests." },
    { id: 7, title: "Shanti Stupa", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Viswasanthi_Stupa%2C_Wardha.JPG/1200px-Viswasanthi_Stupa%2C_Wardha.JPG", description: "Shanti Stupa in Rajgir is a white-domed structure symbolizing peace and harmony. Situated atop a hill, it provides panoramic views and a tranquil atmosphere, ideal for contemplative scenes, spiritual journeys, or sequences emphasizing inner peace." },
    { id: 8, title: "Kundalpur", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/kundalpur/jainism_nalanda_a_kundalpur_pic_02.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg", description: "Kundalpur is revered as the birthplace of Lord Mahavira, the 24th Tirthankara of Jainism. The area's ancient temples and spiritual significance provide an authentic backdrop for religious documentaries, historical narratives, or scenes exploring spiritual journeys." },
    { id: 9, title: "Mundeshwari", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/kaimur/mundeshwari_devi_temple/mundishwaridevi-tn.png/jcr:content/renditions/cq5dam.web.1280.765.jpeg", description: "Mundeshwari Temple, one of the oldest functional temples in India, is perched atop a hill in Kaimur. Its ancient stone architecture and panoramic views provide a compelling setting for historical dramas, spiritual journeys, or scenes depicting ancient rituals." },
  ],
  "Wildlife": [
    { id: 1, title: "Valmiki Resrve", img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/03/09/2681300-valmiki-tiger-reserve.jpg?im=Resize=(1200,900)", description: "Valmiki Tiger Reserve, located in the West Champaran district, is home to diverse flora and fauna, including the majestic Bengal tiger. Its dense forests and rich biodiversity offer authentic settings for wildlife documentaries, adventure films, or scenes emphasizing conservation." },
    { id: 2, title: "Rajgir Zoo", img: "https://images.bhaskarassets.com/web2images/521/2021/03/10/orig_4_1615322925.jpg", description: "Rajgir Zoo Safari provides a unique experience of observing animals in their natural habitats. The safari's landscapes and wildlife make it suitable for educational films, family adventures, or scenes showcasing human-animal interactions." },
    { id: 3, title: "Kaimur", img: "https://pbs.twimg.com/profile_images/1288390076041277440/pP_qpOz9_400x400.jpg", description: "Kaimur Wildlife Sanctuary, spread across the Kaimur district, encompasses hills, forests, and waterfalls. Its untouched natural beauty offers diverse settings for adventure sequences, nature documentaries, or scenes emphasizing solitude and wilderness." },
    { id: 4, title: "Willife Century", img: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/09/Wildlife-Sanctuary-in-Bihar-Cover-Photo-840x425.jpg",  },
    { id: 5, title: "Bision ", img: "https://storiesfromindiaswilds.wordpress.com/wp-content/uploads/2022/03/whatsapp-image-2022-03-10-at-11.32.38.jpeg?w=1024"},
    { id: 6, title: "Bhim bham Sanctuary", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/munger/bheembandh_sanctuary/nature_munger_category_a_bhimband_sanctuary_pic_01.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg", description: "Bhimbandh Sanctuary in Munger is known for its hot springs and rich biodiversity. The sanctuary's unique combination of thermal springs and wildlife provides intriguing visuals for documentaries, adventure films, or scenes exploring natural wonders." },
    { id: 7, title: "Patna Zoo", img: "https://thebusinesscluster.net/wp-content/uploads/2024/03/image-235.png", description: "Patna Zoo houses a variety of animal species and lush greenery. Its well-maintained enclosures and pathways offer controlled environments for educational films, children's movies, or scenes requiring interactions with wildlife." },
    { id: 8, title: "Wildlife ", img: "https://static.toiimg.com/photo/msid-106921990,width-96,height-65.cms" },
    { id: 9, title: "Valmiki", img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/03/09/2681300-valmiki-tiger-reserve.jpg?im=Resize=(1200,900)", description: "Valmiki Tiger Reserve, located in the West Champaran district, is home to diverse flora and fauna, including the majestic Bengal tiger. Its dense forests and rich biodiversity offer authentic settings for wildlife documentaries, adventure films, or scenes emphasizing conservation." },
  ],
  "Historical Monuments": [
    { id: 1, title: "Ashoka Pillar", img: "https://media.istockphoto.com/id/1365993607/photo/ashoka-pillar-at-vaishali-in-bihar-india.jpg?s=612x612&w=0&k=20&c=E1VlOJI-ch4LduZy1xGLIHkqZcN1KcZiTt6hPn3T228=", description: "The Ashoka Pillar in Vaishali stands as a testament to Emperor Ashoka's embrace of Buddhism. This ancient monolithic column, surrounded by archaeological remains, provides a historical setting for period films, documentaries, or scenes depicting ancient India." },
    { id: 2, title: "Gandikota", img: "https://media.istockphoto.com/id/1246416146/photo/the-great-canyon-in-gandikota.jpg?s=612x612&w=0&k=20&c=pJia2qMx-mfip4-gC8dF-ksE6IYiiQlBoFnSw3uKAy8=", description: "Gandikota, often referred to as the 'Grand Canyon of India' features a gorge formed by the Pennar River cutting through the Erramala hills. Its dramatic landscapes and ancient fortifications offer stunning visuals for epic tales, adventure sequences, or historical dramas." },
    { id: 3, title: "Lord Buddha", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_c/gaya/80_feet_buddha/buddhist_gaya_c_80_feet_buddha_pic_01.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg", description: "The towering 80-feet Buddha statue in Bodh Gaya is an iconic symbol of peace and enlightenment. This monumental sculpture provides a majestic backdrop for spiritual narratives, pilgrimages, or scenes emphasizing serenity and introspection." },
    { id: 4, title: "Sujata Kuti", img: "https://media.istockphoto.com/id/1128850714/photo/sujata-kuti-stupa-bodh-style-india.jpg?s=612x612&w=0&k=20&c=oRFORgJIgCbxu_cT-lm0nhLwPw1FbSmQZwQMmjUoZdA=", description: "Sujata Kuti is a stupa commemorating Sujata's offering of kheer to Buddha before his enlightenment. Located near Bodh Gaya, this site offers a peaceful setting for historical sequences, spiritual journeys, or scenes highlighting acts of compassion." },
    { id: 5, title: "Vaishali Stupa", img: "https://media.istockphoto.com/id/937177718/photo/vaishali-ancient-stupa-in-india.jpg?s=612x612&w=0&k=20&c=F7E_NTGWlcUQvs2LO_NuBFFxXLs2TWRE_k1mnDzkVdM=", description: "Vaishali Stupa is an ancient Buddhist monument marking the site of significant events in Buddha's life. Surrounded by lush greenery, it provides a serene environment suitable for historical documentaries, spiritual explorations, or scenes emphasizing heritage." },
    { id: 6, title: "Kesariya Stupa", img: "https://media.istockphoto.com/id/1128850736/photo/kesaria-stupa-champaran-district-of-bihar-india.jpg?s=612x612&w=0&k=20&c=7TV49EV6EiDZ6FJG9MD4xy11JA5WgRqHr8X5rEl0o3M=", description: "Kesariya Stupa, one of the tallest Buddhist stupas in the world, is located in East Champaran. Its massive structure and historical significance make it an impressive setting for epic narratives, historical films, or scenes exploring ancient architecture." },
    { id: 7, title: "Mahabodhi", img: "https://media.istockphoto.com/id/842997816/photo/mahabodhi-temple-bodhgaya.jpg?s=612x612&w=0&k=20&c=0_tRix2uyZG0V9DKmCGeEE0h2_Mn4pIAZyyVzP5UDGI=", description: "The Mahabodhi Temple in Bodh Gaya is a UNESCO World Heritage site marking the location where Buddha attained enlightenment. Its intricate architecture and spiritual ambiance make it ideal for films exploring Buddhist themes, pilgrimages, or historical events." },
    { id: 8, title: "Vaishali Stupa ", img: "https://media.istockphoto.com/id/937177718/photo/vaishali-ancient-stupa-in-india.jpg?s=612x612&w=0&k=20&c=F7E_NTGWlcUQvs2LO_NuBFFxXLs2TWRE_k1mnDzkVdM=", description: "Vaishali Stupa is an ancient Buddhist monument marking the site of significant events in Buddha's life. Surrounded by lush greenery, it provides a serene environment suitable for historical documentaries, spiritual explorations, or scenes emphasizing heritage." },
    { id: 9, title: "kesariya Stupa", img: "https://media.istockphoto.com/id/1128850736/photo/kesaria-stupa-champaran-district-of-bihar-india.jpg?s=612x612&w=0&k=20&c=7TV49EV6EiDZ6FJG9MD4xy11JA5WgRqHr8X5rEl0o3M=", description: "Kesariya Stupa, one of the tallest Buddhist stupas in the world, is located in East Champaran. Its massive structure and historical significance make it an impressive setting for epic narratives, historical films, or scenes exploring ancient architecture." },
  ],
};


const LocationDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const numericId = parseInt(id, 10);

 
  const categoryList = categories[category];
  if (!categoryList) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold">Category not found.</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

 
  const item = categoryList.find((c) => c.id === numericId);
  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold">Location not found.</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#190108] text-white flex flex-col items-center px-4 py-8 md:px-16">
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 flex items-center gap-2"
      >
        ← Back
      </button>

      <div className="max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={item.img}
          alt={item.title}
          className="w-full object-cover h-80 md:h-96"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-base leading-relaxed">
            {item.description ||
              "No description available for this location."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
