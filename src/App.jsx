import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import AboutUsSection from "./AboutusSection";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:pl-14 md:pr-14">
        <Header />
        <HeroSection />
        <AboutSection />
        <AboutUsSection />
      </div>
    </>
  );
}

export default Navbar;
