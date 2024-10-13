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
import WhyRobokido from "./Whyus";
import PopularCourses from "./PopularCourses";
import CoursesGrid from "./CoursesGrid";
import RoboticPrograms from "./OurProgram";
import ProgramCards from "./ProgramCard";
import ExplorePrograms from "./ExplorePrograms";
import InstructorsSection from "./InstructionSection";
import InstructorsGrid from "./InstructorGrid";
import LearningSection from "./LearningSection";
import Footer from "./Footer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="pl-6 pr-6  md:pl-14 md:pr-14">
        <Header />
        <HeroSection />
        <AboutSection />
        {/* <AboutUsSection /> */}
        <WhyRobokido />
        <PopularCourses />
        <CoursesGrid />
        {/*<RoboticPrograms />
        <ProgramCards />
        <ExplorePrograms /> */}
        <InstructorsSection />
        <InstructorsGrid />
        {/* <LearningSection /> */}
        <Footer />
      </div>
    </>
  );
}

export default Navbar;
