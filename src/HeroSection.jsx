import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:pl-2 md:pr-2">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 ">
          <p className="text-pink-500 font-semibold uppercase tracking-wide mb-2 p-[6px] md:p-[2px]">
            Robokido - Robotic Course for Kids
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-9 mb-4 pl-[6px]">
            Where Learning  <br />Meets Fun and <br /> Innovation
          </h1>
          <p className="text-gray-600 mb-8 pl-[6px]">
            Tellus tristique habitant non orci ante ipsum quis. <br /> Donec etiam hac
            in ultrices sed dictumst.
          </p>

          <div className="flex space-x-4 mb-8 pl-[6px]">
            <a
              href="#"
              className="bg-blue-500 text-white py-3 px-6 rounded-md shadow hover:bg-blue-600"
            >
              Explore The Course
            </a>
            <a
              href="#"
              className="text-blue-500 py-3 px-6 border border-blue-500 rounded-md hover:bg-blue-50"
            >
              Try Demo
            </a>
          </div>

          <p className="text-gray-400 text-sm mb-2 pl-[6px]">
            Trusted by several unicorn companies
          </p>
          <div className="flex space-x-4 pl-[6px]">
            <img
              src="/ultra_logo.png"
              alt="Ultra Logo"
              className="w-16 h-auto"
            />
            <img src="/qc_logo.png" alt="QC Logo" className="w-16 h-auto" />
            <img
              src="/xr2_logo.png"
              alt="Power XR2 Logo"
              className="w-16 h-auto"
            />
            <img
              src="/other_logo.png"
              alt="Other Logo"
              className="w-16 h-auto"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="text-blue-500 font-bold">How it Works</div>
              <button className="text-blue-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9.5l5 5V5l-5 5z" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mt-2">
              Egestas leo dui convallis non nisl sit consectetur. Leo egestas
              mollis.
            </p>
          </div>

          <div className="bg-black text-white p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="font-bold text-xl">4.8 ⭐</div>
              <span>High-rated</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 h-32"></div>
          <div className="bg-gray-800 rounded-lg p-4 h-32"></div>

          <div className="bg-green-100 p-4 rounded-lg">
            <div className="font-bold text-lg flex items-center space-x-2">
              <span className="text-xl">🌐</span>
              <span>Language :</span>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>English</li>
              <li>German</li>
              <li>Spanish</li>
            </ul>
            <a href="#" className="text-red-500 font-bold block mt-4">
              30+ More
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="font-bold text-xl">30K +</div>
            <p className="text-gray-600">Happy Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
