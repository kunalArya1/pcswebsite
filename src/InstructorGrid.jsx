import React from "react";
import kunalimg from "./assets/kunal.jpg";
import shravanimg from "./assets/shravani.jpg";

const instructors = [
  { name: "Aakarsh Sahu ", role: "Worked at DronaHQ" },
  { name: "Kunal Kumar Arya", role: "Working at TCS", imglink: kunalimg },
  { name: "Shravani Kuna", role: "Working at DevRabbit", imglink: shravanimg },
];

const InstructorCard = ({ name, role, imglink }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
    {/* Image placeholder */}
    <div className="bg-gray-800 w-full h-48 mb-4 rounded-md">
      <img
        className="h-full w-full object-fill rounded-lg"
        src={imglink}
        alt=""
      />
    </div>

    {/* Name and role */}
    <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
    <p className="text-sm text-gray-500 mb-6">{role}</p>

    {/* Say Hi section */}
    <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 rounded-full">
      <input
        type="text"
        placeholder="Say Hi!"
        className="bg-transparent text-gray-600 focus:outline-none w-full"
        disabled
      />
      <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
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
            d="M14.752 11.168l-9.63 4.81a1 1 0 01-1.356-1.33l1.086-3.619a1 1 0 00-.192-.902L2.754 7.121a1 1 0 01.566-1.726l3.906-.37a1 1 0 00.813-.495L10.5 1.929a1 1 0 011.812 0l2.46 4.602a1 1 0 00.813.495l3.906.37a1 1 0 01.566 1.726l-2.406 2.005a1 1 0 00-.192.902l1.086 3.619a1 1 0 01-1.356 1.33l-9.63-4.81z"
          />
        </svg>
      </button>
    </div>
  </div>
);

const InstructorsGrid = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} {...instructor} />
        ))}
      </div>
    </section>
  );
};

export default InstructorsGrid;
