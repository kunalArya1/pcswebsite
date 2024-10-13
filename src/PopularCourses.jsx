import React from "react";

const PopularCourses = () => {
  return (
    <section className="bg-white py-10 px-5 md:px-20 lg:px-32">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section (Text) */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-gray-600">
            Our most popular course, the MERN stack, offers in-depth training in
            MongoDB, Express, React, and Node.js. With hands-on projects and
            real-world examples, students master both frontend and backend
            development.
          </p>
        </div>

        {/* Right Section (Button) */}
        <div className="mt-6 lg:mt-0">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
