import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { getDistance } from "geolib";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});





const categories = {
  "Film Locations": [
    {
      id: 1,
      title: "Ghora Katora",
      img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/ghora_katora/ghora-katora.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg",
      description: "Ghora Katora, meaning 'Horse Bowl' is a serene lake near Rajgir...",
      lat: 25.0085,
      lng: 85.4201
    },
    {
      id: 2,
      title: "Sabhyata Dwar",
      img: "https://d34vm3j4h7f97z.cloudfront.net/original/4X/0/e/f/0eff8ccd6a5c2badce42ea5c330ff4a41449fd0f.jpeg",
      description: "Sabhyata Dwar, or the Civilization Gate, stands tall in Patna...",
      lat: 25.6120,
      lng: 85.1430
    },
    {
      id: 3,
      title: "Amritdhara Waterfall",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a5/91/4c/amritdhara-water-fal.jpg?w=600&h=-1&s=1",
      description: "Amrit Dhara is a natural waterfall located in Chhattisgarh...",
      lat: 23.2108,
      lng: 82.2935
    },
    {
      id: 4,
      title: "Eco Park",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/55/22/85/20171225-144241-largejpg.jpg?w=500&h=400&s=1",
      desctiption: "Eco Park, also known as Rajdhani Vatika, is a green space in Patna...",
      lat: 25.6156,
      lng: 85.1078
    },
    {
      id: 5,
      title: "Buddha Smriti",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d4/7a/30/buddha-smriti-park.jpg?w=500&h=400&s=1",
      description: "Located near Patna Junction, Buddha Smriti Park is an urban oasis...",
      lat: 25.6090,
      lng: 85.1376
    },
    {
      id: 6,
      title: "Glass Bridge",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/glsi_1200x768.jpeg?size=1200:675",
      description: "The Rajgir Glass Bridge offers a thrilling experience...",
      lat: 25.0044,
      lng: 85.4212
    },
    {
      id: 7,
      title: "Kakolat Waterfall",
      img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nawada/kakolat_waterfall/kakolat-waterfall-nawada.png/jcr:content/renditions/cq5dam.web.480.480.jpeg",
      desctiption: "Kakolat Waterfall, cascading from a height of approx. 160 feet...",
      lat: 24.6367,
      lng: 85.4035
    }
  ],

  "Religious Places": [
    {
      id: 1,
      title: "Kundalpur",
      img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/kundalpur/jainism_nalanda_a_kundalpur_pic_02.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg",
      description: "Kundalpur is revered as the birthplace of Lord Mahavira...",
      lat: 25.0284,
      lng: 85.4405
    },
    {
      id: 2,
      title: "Mahabodhi",
      img: "https://railrecipe.com/blog/wp-content/uploads/2021/03/Mahabodhi-Temple-Gaya.jpg",
      description: "The Mahabodhi Temple in Bodh Gaya is a UNESCO World Heritage site...",
      lat: 24.6950,
      lng: 84.9912
    },
    {
      id: 3,
      title: "Jal Mandir",
      img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/jal_mandir/jal_mandir_a7307011_edit.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg",
      description: "Jal Mandir, situated in Pawapuri, is a temple built in the middle of a lotus-filled lake...",
      lat: 25.0173,
      lng: 85.4386
    },
    {
      id: 4,
      title: "Mundeshwari Temple",
      img: "https://thetempleguru.com/wp-content/uploads/2024/08/Mundeshwari-temple-kaimur-bihar.jpg",
      description: "Mundeshwari Temple, one of the oldest functional temples in India...",
      lat: 25.0410,
      lng: 83.6116
    },
    {
      id: 5,
      title: "Pathar ki Masjid",
      img: "https://image3.mouthshut.com/images/Restaurant/Photo/-62333_176796.jpg",
      description: "Pathar ki Masjid, located on the banks of the Ganges in Patna...",
      lat: 25.6156,
      lng: 85.1373
    },
    {
      id: 6,
      title: "Jain Temple",
      img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/kundalpur/jainism_nalanda_a_kundalpur_pic_02.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg",
      description: "The Jain temples in Kundalpur, with their intricate carvings...",
      lat: 25.0284,
      lng: 85.4405
    },
    {
      id: 7,
      title: "Shanti Stupa",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Viswasanthi_Stupa%2C_Wardha.JPG/1200px-Viswasanthi_Stupa%2C_Wardha.JPG",
      description: "Shanti Stupa in Rajgir is a white-domed structure symbolizing peace and harmony...",
      lat: 25.0176,
      lng: 85.4239
    },
    {
      id: 8,
      title: "Mundeshwari",
      img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/kaimur/mundeshwari_devi_temple/mundishwaridevi-tn.png/jcr:content/renditions/cq5dam.web.1280.765.jpeg",
      description: "Mundeshwari Temple, one of the oldest functional temples in India...",
      lat: 25.0410,
      lng: 83.6116
    }
  ],

  "Wildlife": [
    {
      id: 1,
      title: "Valmiki Reserve",
      img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/03/09/2681300-valmiki-tiger-reserve.jpg?im=Resize=(1200,900)",
      description: "Valmiki Tiger Reserve, located in the West Champaran district, is home to diverse flora and fauna, including the majestic Bengal tiger...",
      lat: 27.0780,
      lng: 84.5750
    },
    {
      id: 2,
      title: "Rajgir Zoo",
      img: "https://images.bhaskarassets.com/web2images/521/2021/03/10/orig_4_1615322925.jpg",
      description: "Rajgir Zoo Safari provides a unique experience of observing animals in their natural habitats...",
      lat: 25.0176,
      lng: 85.4239
    },
    {
      id: 3,
      title: "Kaimur",
      img: "https://pbs.twimg.com/profile_images/1288390076041277440/pP_qpOz9_400x400.jpg",
      description: "Kaimur Wildlife Sanctuary, spread across the Kaimur district, encompasses hills, forests, and waterfalls...",
      lat: 25.0410,
      lng: 83.6116
    },
    {
      id: 4,
      title: "Wildlife Century",
      img: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/09/Wildlife-Sanctuary-in-Bihar-Cover-Photo-840x425.jpg",
      description: "Wildlife Century is a protected area in Bihar, known for its rich biodiversity and conservation efforts...",
      lat: 25.6156,
      lng: 85.1373 // Assuming this refers to Patna region's wildlife areas
    },
    {
      id: 5,
      title: "Bison",
      img: "https://storiesfromindiaswilds.wordpress.com/wp-content/uploads/2022/03/whatsapp-image-2022-03-10-at-11.32.38.jpeg?w=1024",
      description: "Bison sightings occur in some parts of Bihar's sanctuaries like Valmiki and Kaimur. This location can be contextualized as part of broader forest reserves.",
      lat: 27.0780,
      lng: 84.5750 // Referencing Valmiki region again for Bison habitat
    },
    {
      id: 6,
      title: "Bhimbandh Sanctuary",
      img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/munger/bheembandh_sanctuary/nature_munger_category_a_bhimband_sanctuary_pic_01.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg",
      description: "Bhimbandh Sanctuary in Munger is known for its hot springs and rich biodiversity...",
      lat: 24.8333,
      lng: 86.4167
    },
    {
      id: 7,
      title: "Patna Zoo",
      img: "https://thebusinesscluster.net/wp-content/uploads/2024/03/image-235.png",
      description: "Patna Zoo houses a variety of animal species and lush greenery...",
      lat: 25.6122,
      lng: 85.1250
    },
    {
      id: 8,
      title: "Unnamed Wildlife",
      img: "https://static.toiimg.com/photo/msid-106921990,width-96,height-65.cms",
      description: "A general reference to wildlife presence and preservation in Bihar. Can be used as a generic card or replaced with a more specific sanctuary.",
      lat: 25.5941,
      lng: 85.1376 // Patna center fallback
    }
  ]
  ,
  "Historical Monuments": [
    {
      id: 1,
      title: "Ashoka Pillar",
      img: "https://media.istockphoto.com/id/1365993607/photo/ashoka-pillar-at-vaishali-in-bihar-india.jpg?s=612x612&w=0&k=20&c=E1VlOJI-ch4LduZy1xGLIHkqZcN1KcZiTt6hPn3T228=",
      description: "The Ashoka Pillar in Vaishali stands as a testament to Emperor Ashoka's embrace of Buddhism...",
      lat: 26.0158,
      lng: 85.0845
    },
    {
      id: 2,
      title: "Gandikota",
      img: "https://media.istockphoto.com/id/1246416146/photo/the-great-canyon-in-gandikota.jpg?s=612x612&w=0&k=20&c=pJia2qMx-mfip4-gC8dF-ksE6IYiiQlBoFnSw3uKAy8=",
      description: "Gandikota, often referred to as the 'Grand Canyon of India' features a gorge formed by the Pennar River...",
      lat: 14.8156,
      lng: 78.2824 // Note: Not in Bihar, this is in Andhra Pradesh
    },
    {
      id: 3,
      title: "Lord Buddha Statue",
      img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_c/gaya/80_feet_buddha/buddhist_gaya_c_80_feet_buddha_pic_01.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg",
      description: "The towering 80-feet Buddha statue in Bodh Gaya is an iconic symbol of peace and enlightenment...",
      lat: 24.6959,
      lng: 84.9911
    },
    {
      id: 4,
      title: "Sujata Kuti",
      img: "https://media.istockphoto.com/id/1128850714/photo/sujata-kuti-stupa-bodh-style-india.jpg?s=612x612&w=0&k=20&c=oRFORgJIgCbxu_cT-lm0nhLwPw1FbSmQZwQMmjUoZdA=",
      description: "Sujata Kuti is a stupa commemorating Sujata's offering of kheer to Buddha before his enlightenment...",
      lat: 24.6911,
      lng: 84.9997
    },
    {
      id: 5,
      title: "Vaishali Stupa",
      img: "https://media.istockphoto.com/id/937177718/photo/vaishali-ancient-stupa-in-india.jpg?s=612x612&w=0&k=20&c=F7E_NTGWlcUQvs2LO_NuBFFxXLs2TWRE_k1mnDzkVdM=",
      description: "Vaishali Stupa is an ancient Buddhist monument marking the site of significant events in Buddha's life...",
      lat: 26.0154,
      lng: 85.0833
    },
    {
      id: 6,
      title: "Kesariya Stupa",
      img: "https://media.istockphoto.com/id/1128850736/photo/kesaria-stupa-champaran-district-of-bihar-india.jpg?s=612x612&w=0&k=20&c=7TV49EV6EiDZ6FJG9MD4xy11JA5WgRqHr8X5rEl0o3M=",
      description: "Kesariya Stupa, one of the tallest Buddhist stupas in the world, is located in East Champaran...",
      lat: 26.3773,
      lng: 84.4342
    },
    {
      id: 7,
      title: "Mahabodhi Temple",
      img: "https://media.istockphoto.com/id/842997816/photo/mahabodhi-temple-bodhgaya.jpg?s=612x612&w=0&k=20&c=0_tRix2uyZG0V9DKmCGeEE0h2_Mn4pIAZyyVzP5UDGI=",
      description: "The Mahabodhi Temple in Bodh Gaya is a UNESCO World Heritage site marking the location where Buddha attained enlightenment...",
      lat: 24.6950,
      lng: 84.9912
    }
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

  const patnaCoords = { latitude: 25.611, longitude: 85.144 };
  const locationCoords = { latitude: item.lat, longitude: item.lng };
  const distanceFromPatna = (getDistance(patnaCoords, locationCoords) / 1000).toFixed(2);

  return (
    <div className="h-screen overflow-hidden bg-[#190108] text-white flex flex-col items-center px-4 py-8 md:px-16">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 flex items-center gap-2"
      >
        ← Back
      </button>

      {/* Grid Layout: Image | Content */}
      <div className="max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-lg grid md:grid-cols-2 flex-grow">
        {/* Image Side */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        {/* Content Side with internal scroll if needed */}
        <div className="p-6 flex flex-col justify-between overflow-y-auto max-h-screen">
          <div>
            <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
            <p className="text-base leading-relaxed mb-4">
              {item.description || "No description available for this location."}
            </p>
            <div className="mb-4">
              <p><strong>Distance from Patna:</strong> {distanceFromPatna} km</p>
              <p className="mt-2">
                <strong>How to Reach:</strong>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li><strong>Train:</strong> Take a train to Rajgir Railway Station. From there, hire a taxi (approx. 6 km).</li>
                  <li><strong>Bus:</strong> Buses are available from Patna to Rajgir. Use local transport to reach the location.</li>
                  <li><strong>Air:</strong> Nearest airport is in Patna. Take a cab/bus to Rajgir (~95 km).</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Map */}
          {item.lat && item.lng && (
            <div className="h-64 w-full rounded-lg overflow-hidden mt-4">
              <MapContainer
                center={[item.lat, item.lng]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[item.lat, item.lng]}>
                  <Popup>{item.title}</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );


};

export default LocationDetail;
