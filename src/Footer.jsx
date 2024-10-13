import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4 md:px-0 lg:px-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col  md:flex-row gap-[30%] mt-8 md:mt-0 md:space-x-12 space-y-6 md:space-y-0">
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Courses
                </a>
              </li>
              <li></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Courses</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  MERN Stack
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Backend Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Subscribe To Newsletter</h3>
            <form className="mt-2 flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-md mb-2"
              />
              <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            Feel free to call us. Our team will be happy to help answer your
            queries
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-600 text-sm mb-1">
              <a href="tel:+916263873264" className="hover:underline">
                +91 6263873264
              </a>
            </p>
            <div className="flex space-x-3 text-gray-600">
              <a href="/" aria-label="Facebook" className="hover:text-gray-800">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" aria-label="Twitter" className="hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" aria-label="LinkedIn" className="hover:text-gray-800">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="/"
                aria-label="Instagram"
                className="hover:text-gray-800"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Prefer Coding Secret</p>
          <p className="flex space-x-4 mt-2 md:mt-0">
            <a href="/" className="hover:underline">
              Terms of Use
            </a>
            <a href="/" className="hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>Design by SecretCodeWave</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
