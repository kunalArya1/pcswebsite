import React from "react";
import {
  FaSchool,
  FaVideo,
  FaHome,
  FaSun,
  FaTrophy,
  FaLaptop,
} from "react-icons/fa"; // Example icons

const programs = [
  {
    title: "After School",
    description:
      "Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac in ultrices sed dictumst.",
    icon: <FaSchool size={30} />,
  },
  {
    title: "Virtual Programs",
    description:
      "Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac in ultrices sed dictumst.",
    icon: <FaVideo size={30} />,
  },
  {
    title: "Homeschooling",
    description:
      "Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac in ultrices sed dictumst.",
    icon: <FaHome size={30} />,
  },
  {
    title: "Summer Camps",
    description:
      "Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac in ultrices sed dictumst.",
    icon: <FaSun size={30} />,
  },
  {
    title: "Competitions",
    description:
      "Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac in ultrices sed dictumst.",
    icon: <FaTrophy size={30} />,
  },
  {
    title: "Online Course",
    description:
      "Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac in ultrices sed dictumst.",
    icon: <FaLaptop size={30} />,
  },
];

const ProgramCards = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center mb-4 text-purple-500">
              {program.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {program.title}
            </h3>
            <p className="text-gray-600 mb-4">{program.description}</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramCards;
