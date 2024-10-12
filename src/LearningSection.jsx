import React from "react";

const LearningSection = () => {
  return (
    <section className="bg-purple-200 py-12 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-sm font-semibold text-white mb-2 uppercase">
            Learning Methods
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Access to Learn <br /> Anytime, Anywhere
          </h2>
          <p className="text-white mb-6">
            Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac
            in ultrices sed dictumst.
          </p>

          {/* Feature Points */}
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-white">
              <span className="bg-white rounded-full p-2 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m-4 4h4a1 1 0 100-2h-4a1 1 0 100 2zM9 4h6v4m-6 4h1m1 4h-2m-1 4h6v-2H7z"
                  />
                </svg>
              </span>
              <span>World Class</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="bg-white rounded-full p-2 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l6-6m6 6l6 6M3 12l6 6m6-6l6-6"
                  />
                </svg>
              </span>
              <span>Easy Learning</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="bg-white rounded-full p-2 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h-1v4H8m-4 6h8m0 0h5v-5h-5v5z"
                  />
                </svg>
              </span>
              <span>Flexible</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <span className="bg-white rounded-full p-2 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 20h14l-3-6h-8a5 5 0 100-10h-4v16h1z"
                  />
                </svg>
              </span>
              <span>Affordable</span>
            </li>
          </ul>

          {/* Enroll Button */}
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Enroll Now!
          </button>
        </div>

        {/* Right Section - Image Placeholder */}
        <div className="relative flex justify-center">
          <div className="bg-gray-800 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-md"></div>

          {/* Badge */}
          <div className="absolute bottom-4 left-0 bg-red-400 text-white font-semibold px-4 py-2 rounded-lg shadow-lg">
            <span className="text-2xl">12 +</span> <br />
            <span className="text-sm">Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
