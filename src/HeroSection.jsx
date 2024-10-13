import React from "react";
import codedam from "./assets/ee7457d7-39fb-4b8b-9b70-c54de2419697_350x200-removebg-preview.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:pl-2 md:pr-2">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 ">
          <p className="text-pink-500 font-semibold uppercase tracking-wide mb-2 p-[6px] md:p-[2px] text-center md:text-left">
            Prefer - Web Development Secret's
          </p>
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold leading-9 mb-4 pl-[6px]">
            <span className=" text-blue-600">Where</span> Learning <br />
            Meets Fun and <br />{" "}
            <span className="text-blue-600">Innovation</span>{" "}
          </h1>
          <p className="text-gray-600 mb-8 pl-[6px]">
            Elevate your Web Development skills and unlock new career
            <br /> opportunities with expert-led full stack training.
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
              Contact Us
            </a>
          </div>

          <p className="text-gray-400 text-sm mb-2 pl-[6px]">
            Trusted by several Education companies
          </p>
          <div className="flex space-x-4 pl-[6px]">
            <img
              src="https://miro.medium.com/v2/resize:fit:730/1*LXWUrv9m4aqDmJFuD27KfQ.jpeg"
              alt="Ultra Logo"
              className="w-24 h-auto"
            />
            <img
              src="https://classplusapp.com/growth/wp-content/uploads/2022/07/rsz_classplus-logo.png"
              alt="QC Logo"
              className="w-24 h-auto"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="text-blue-500 font-bold">Mission</div>
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
            <p className="text-gray-600 mt-2 text-sm">
              Helping students across India, from villages to cities, succeed in
              web development.
            </p>
          </div>

          <div className="bg-black text-white p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="font-bold text-xl">4.8 ⭐</div>
              <span>High-rated</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg  h-32">
            <img
              className=" h-full w-full object-cover rounded-lg"
              src="https://jaro-website.s3.ap-south-1.amazonaws.com/2024/03/Features-of-Mern-stack-development-services-You-Should-Know-768x397-1.png"
              alt=""
            />
          </div>
          <div className="bg-gray-800 rounded-lg  h-32">
            <img
              className=" h-full w-full object-cover rounded-lg"
              src="https://thumbs.dreamstime.com/b/excited-woman-female-latino-student-girl-hispanic-user-business-win-laptop-online-achieve-victory-computer-bet-good-result-champ-321549194.jpg"
              alt=""
            />
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <div className="font-bold text-lg flex items-center space-x-2">
              <span className="text-xl">🌐</span>
              <span>Courses :</span>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>MERN Stack Development</li>
            </ul>
            <a href="#" className="text-red-500 font-bold block mt-4">
              5+ More
            </a>
          </div>

          <div className="bg-gray-300 p-4 rounded-lg">
            <div className="font-bold text-xl">3K +</div>
            <p className="text-gray-600">Happy Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
