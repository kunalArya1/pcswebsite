import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">
            Robo<span className="text-blue-600">Kido</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Pulvinar nunc eget tincidunt id urna diam scelerisque cursus. Quis
            nunc pharetra arcu lectus nisl. Risus hendrerit consequat aliquet
            erat ullamcorper diam. Tortor vulputate sed maecenas rhoncus viverra
            purus.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-8 md:mt-0 md:space-x-12 space-y-6 md:space-y-0">
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
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Programs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Courses</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Basic Robotic
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Robo Explorers
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Coding Adventures
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Tech Builders
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
            Feel free to call us in working hours Mon - Fri (8:00 - 16:00). Our
            team will be happy to help answer your queries
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-600 text-sm mb-1">
              <a href="tel:+1333000000" className="hover:underline">
                +1 (333) 000-0000
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
          <p>© 2023 Robokido</p>
          <p className="flex space-x-4 mt-2 md:mt-0">
            <a href="/" className="hover:underline">
              Terms of Use
            </a>
            <a href="/" className="hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>Design by TokoTema</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
