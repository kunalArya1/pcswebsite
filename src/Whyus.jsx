import React from "react";

const WhyRobokido = () => {
  return (
    <section className="bg-blue-100 py-10 px-5 md:px-20 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-9">
        {/* Left Section (Images) */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mb-10 lg:mb-0">
          <div className="bg-gray-800 h-48 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://miro.medium.com/v2/resize:fit:1152/1*kUE6vhuNe3zxUP7BK_mB4Q.jpeg"
              alt=""
            />
          </div>
          <div className="bg-gray-800 h-48 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://media.licdn.com/dms/image/v2/D5612AQE6Wkf4t6w90Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720962680468?e=1734566400&v=beta&t=7e9fphHT5-VqYHd42C8PtyKZ32k1tiLiuGBx321rLv4"
              alt=""
            />
          </div>

          <div className="bg-gray-800 h-48 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsb2ZmaWNlMTVfYV9taW5pbWFsX2FuZF9sZXNzX2RldGFpbF9pbGx1c3RyYXRpb25fb2ZfYV9sb19jZDcwMDZlNi0wOWExLTQ2ZGEtOTljMi0wMmU2YTg4OTg2N2VfMS5qcGc.jpg"
              alt=""
            />
          </div>
          <div className="bg-gray-800 h-48 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png"
              alt=""
            />
          </div>
        </div>

        {/* Right Section (Text) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-blue-500 uppercase font-semibold">
            Why Choose Us
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
            Why Coding Secret is the Perfect Choice
          </h2>
          <p className="text-gray-600 mt-4">
            Helping students across India, from villages to cities, succeed in
            web development.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">➔</span>
              <span className="text-gray-800 font-medium">
                Student-Centric Approach
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
                Live Project Experience
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">➔</span>
              <span className="text-gray-800 font-medium">
                Instructor From MN'C
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-red-400 text-white px-6 py-3 rounded-full hover:bg-red-500">
              Explore Our Courses
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
