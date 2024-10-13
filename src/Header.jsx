import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav className="bg-white shadow-md ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-black">Prefer</span>
          <span className="text-2xl font-bold text-blue-500">Coding.</span>
        </div>

        {/* Links - Hidden on small screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-black hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            About Us
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Courses
          </a>

          <a href="#" className="text-black hover:text-blue-500">
            Contact Us
          </a>
        </div>

        {/* Call Us Button */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="flex flex-col text-right">
            <span className="text-sm text-gray-500">Need Help?</span>
            <a href="#" className="font-bold text-black">
              Call Us!
            </a>
          </div>
          <div className="bg-blue-500 rounded-full p-2">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.71 2.71a1 1 0 011.42 0L6.41 5.41a1 1 0 010 1.42l-.95.95a16.06 16.06 0 006.36 6.36l.95-.95a1 1 0 011.42 0l2.7 2.7a1 1 0 010 1.42l-2 2a3.78 3.78 0 01-3.33 1.05A18.11 18.11 0 012.64 8.62 3.78 3.78 0 013.69 5.3l2-2a1 1 0 011.02-.26z" />
            </svg>
          </div>
        </div>

        {/* Hamburger Menu - Visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute bg-white  pb-20 w-full`}
      >
        <div className="flex flex-col space-y-4 text-center">
          <a href="#" className="text-black hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            About Us
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Courses
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Programs
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            Contact Us
          </a>
          <a href="#" className="font-bold text-black">
            Call Us!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
