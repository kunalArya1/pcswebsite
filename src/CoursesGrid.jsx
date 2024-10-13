import React from "react";
import backend from "./assets/Backend-Development.jpg";

const CourseCard = ({
  title,
  price,
  ageRange,
  modules,
  duration,
  rating,
  reviews,
  imglink,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Video or Image Placeholder */}
      <div className="relative">
        <div className="bg-gray-800 h-48 flex items-center justify-center">
          <img className="h-full w-full object-cover " src={imglink} alt="" />
        </div>
        {/* <span className="absolute top-2 right-2 bg-purple-300 text-purple-900 px-3 py-1 text-sm font-semibold rounded-lg">
          ${price}
        </span> */}
      </div>

      {/* Course Details */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {/* <p className="text-gray-600 mt-2">
          Age {ageRange} • {modules} Modules • {duration}
        </p> */}

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
      title: "MERN Stack",
      price: "49.99",
      ageRange: "6-8",
      modules: "25",
      duration: "24 Hr 40 Mins",
      rating: "4.8",
      reviews: "500+",
      imglink:
        "https://nitsantech.com/fileadmin/ns_theme_ns2019/blog/_live/What_is_the_MERN_stack_and_how_do_I_use_it_/What_is_the_MERN_stack_and_how_do_I_use_it.jpg",
    },
    {
      title: "Frontend Development",
      price: "89.99",
      ageRange: "9-11",
      modules: "12",
      duration: "24 Hr 40 Mins",
      rating: "4.9",
      reviews: "700+",
      imglink:
        "https://media.licdn.com/dms/image/v2/D5612AQHHRul9Hp59ew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699945474790?e=2147483647&v=beta&t=pmd8l84uu5Mw_jhSUF-a7DaneZVAKwx8-51RXry1OBo",
    },
    {
      title: "Backend Development",
      price: "69.99",
      ageRange: "8-10",
      modules: "25",
      duration: "24 Hr 40 Mins",
      rating: "4.8",
      reviews: "650+",
      imglink:
        "https://i.pinimg.com/736x/c0/2d/73/c02d737b627c8346adddd33fbcfb442e.jpg",
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
