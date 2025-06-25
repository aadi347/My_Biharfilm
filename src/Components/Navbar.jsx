import React, { useState, useEffect } from "react";
import Logo1 from "/src/assets/Logo1.png";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);


  const navigate = useNavigate();

  // ✅ Custom smooth scroll with easing
  const scrollToElementSmoothly = (element, duration = 1200) => {
    const start = window.pageYOffset;
    const end = element.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easing = easeInOutQuad(progress);

      window.scrollTo(0, start + distance * easing);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // ✅ Updated scroll handler
  const handleLocationClick = (id) => {
    if (id === "notice") {
      navigate("/notice");
    } else {
      const section = document.getElementById(id);
      if (section) {
        scrollToElementSmoothly(section, 2200);
      }
      if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close mobile menu
    }
  };

useEffect(() => {
  setTimeout(() => setShowNavbar(true), 2000); // Delay show

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    // If at top of the page
    if (currentScrollPos === 0) {
      setNavbarVisible(true);
      setHasScrolled(false); // back to top, remove background
    } else {
      setNavbarVisible(isScrollingUp);
      setHasScrolled(true); // user has scrolled
    }

    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [prevScrollPos]);



  const menuItems = [
    { id: "home", label: "Home" },
    { id: "Shooting-location", label: "Shooting Location" },
    { id: "FilmClub", label: "Film Club" },
    { id: "Vr", label: "VR" },
    { id: "GoverningBody", label: "Governing Body" },
    { id: "FilmPolicy", label: "Film Policy" },
    { id: "notice", label: "Notice" },
    { id: "about", label: "About Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${
        showNavbar ? "opacity-100" : "opacity-0"
      } ${navbarVisible ? "transform-none" : "-translate-y-full"} group`}
    >
     <div className={`px-4 sm:px-6 lg:px-16 py-3 relative transition-colors duration-300 ${
      navbarVisible && hasScrolled ? "bg-white" : "bg-transparent"
      }`}
     >



        {/* Background hover bar */}
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 z-0 transition-opacity duration-300"></div>

        <div className="flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo1} alt="logo" className="h-16 w-24" />
          </div>

          {/* Desktop Menu */}
          <ul className={`hidden md:flex items-center gap-10 text-lg relative z-10 transition-colors duration-300 ${ navbarVisible && hasScrolled ? "text-black" : "text-white"} group-hover:text-black`}
          >

            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleLocationClick(item.id)}
                className="cursor-pointer hover:text-red-600 font-semibold transition"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col items-start gap-4 bg-black bg-opacity-80 text-white p-4 rounded-lg backdrop-blur-md">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleLocationClick(item.id)}
                className="cursor-pointer hover:text-red-600 font-semibold transition"
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
