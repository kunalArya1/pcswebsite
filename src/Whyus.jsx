import React from "react";

const WhyRobokido = () => {
  return (
    <section className="bg-blue-100 py-10 px-5 md:px-20 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section (Images) */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mb-10 lg:mb-0">
          <div className="bg-gray-800 h-48 rounded-lg"></div>
          <div className="bg-gray-800 h-48 rounded-lg"></div>
          <div className="bg-gray-800 h-48 rounded-lg"></div>
          <div className="bg-gray-800 h-48 rounded-lg"></div>
        </div>

        {/* Right Section (Text) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-blue-500 uppercase font-semibold">
            Why Choose Us
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
            Why Robokido is the Perfect Choice
          </h2>
          <p className="text-gray-600 mt-4">
            Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac
            in ultrices sed dictumst.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">➔</span>
              <span className="text-gray-800 font-medium">
                Child-Centric Approach
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">➔</span>
              <span className="text-gray-800 font-medium">
                Hands-On Learning
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">➔</span>
              <span className="text-gray-800 font-medium">
                STEM Skill Development
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">➔</span>
              <span className="text-gray-800 font-medium">
                Experienced Educators
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-red-400 text-white px-6 py-3 rounded-full hover:bg-red-500">
              Explore Worldwide Tutors
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
              Enroll Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRobokido;
