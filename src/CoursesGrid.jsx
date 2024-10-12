import React from "react";

const CourseCard = ({
  title,
  price,
  ageRange,
  modules,
  duration,
  rating,
  reviews,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Video or Image Placeholder */}
      <div className="relative">
        <div className="bg-gray-800 h-48 flex items-center justify-center">
          <button className="bg-black text-white rounded-full p-2">▶</button>
        </div>
        <span className="absolute top-2 right-2 bg-purple-300 text-purple-900 px-3 py-1 text-sm font-semibold rounded-lg">
          ${price}
        </span>
      </div>

      {/* Course Details */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">
          Age {ageRange} • {modules} Modules • {duration}
        </p>

        {/* Rating Section */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-sm text-gray-600">
            {rating} ({reviews} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

const CoursesGrid = () => {
  const courses = [
    {
      title: "Basic Robotics",
      price: "49.99",
      ageRange: "6-8",
      modules: "25",
      duration: "24 Hr 40 Mins",
      rating: "5.0",
      reviews: "2k",
    },
    {
      title: "Coding Adventures",
      price: "89.99",
      ageRange: "9-11",
      modules: "12",
      duration: "24 Hr 40 Mins",
      rating: "5.0",
      reviews: "1.9k",
    },
    {
      title: "RoboExplorers",
      price: "69.99",
      ageRange: "8-10",
      modules: "25",
      duration: "24 Hr 40 Mins",
      rating: "5.0",
      reviews: "2k",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-5 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesGrid;
