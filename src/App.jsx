import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

// Components
import VideoSection from "./Components/VideoSection";
import Location from "./NavigationCards/Location";
import Vr from "./NavigationCards/Vr";
import Cinemaecosystem from "./NavigationCards/Cinemaecosystem";
import FilmClubUI from "./NavigationCards/FilmClub";
import ContactUs from "./NavigationCards/ContactUs";
import GoverningComponent from "./NavigationCards/GoverningBody";
import FilemPolicyPage from "./NavigationCards/FilmPolicy";
import Actors from "./NavigationCards/Actors";
import ButtonNOC from "./NavigationCards/NOCbutton";
import NOCFORMpage from "./NavigationCards/NOCFORMpage";
import LoginPage from "./Components/Login";
import SignupPage from "./Components/Signup";
import ShootingPermissionForm from "./NavigationCards/ShootingPermissionFoam";
import DashboardMM from "./Dashboard/DashboardMM";
import LocationDetail from "./NavigationCards/LocationDetail";
import DasboardUser from "./Dashboard/DashboardUser";
import DistrictDashboard from "./Dashboard/DistrictDashboard";
// import DistrictList from "./Dashboard/DistrictList"
import CineSamvad from "./NavigationCards/pages/CineSamvad";
import Notice from "./NavigationCards/Notice";
import CoffeeWithFilm from "./NavigationCards/pages/CoffeeWithFilm";
// Home Page
function Home() {
  return (
    <>
      <VideoSection />
      <ButtonNOC />
      <Location />
      <FilmClubUI />
      <Actors />
      <Vr />
      <Cinemaecosystem />
      <GoverningComponent />
      <FilemPolicyPage />
      <ContactUs />
      <ButtonNOC />
    </>
  );
}


const DistrictDashboardWrapper = () => {
  const { districtName } = useParams();
  return <DistrictDashboard districtName={districtName} />;
};

export default function App() {
  return (
    <Routes>
      {/* <Route path="/FilmClubUI" element={<FilmClubUI />} /> */}
      <Route path="/location/:category/:id" element={<LocationDetail />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/apply-noc" element={<ShootingPermissionForm />} />
      <Route path="/dashboard" element={<DashboardMM />} />
      <Route path="/dashboard-user" element={<DasboardUser />} />
      {/* <Route path="/districts" element={<DistrictList />} /> */}

      <Route path="/district/:districtName" element={<DistrictDashboardWrapper />} />
      <Route path="/filmclub/cine-samvad" element={<CineSamvad />} />
     <Route path="/filmclub/coffee-with-film" element={<CoffeeWithFilm />} />

      <Route path="/notice" element={<Notice />} />

    </Routes>
  );
}
