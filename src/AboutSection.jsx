import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-pink-500 text-start font-semibold uppercase mb-2">
            About Robokido
          </p>
          <h2 className="text-3xl md:text-5xl text-start font-bold leading-tight mb-4">
            Empowering Young Minds through <br /> Robotic Education
          </h2>
        </div>

        <div className=" w-full h-[1px] bg-gray-300 mb-9"></div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-200 rounded-full p-4 mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927C9.369 1.163 10.631 1.163 10.951 2.927l.417 2.451a1.564 1.564 0 001.154 1.22l2.447.356c1.794.261 2.547 2.464 1.229 3.734l-1.77 1.725a1.564 1.564 0 00-.45 1.385l.417 2.451c.32 1.765-1.462 3.124-2.964 2.29l-2.2-1.156a1.564 1.564 0 00-1.455 0l-2.2 1.156c-1.502.834-3.284-.525-2.964-2.29l.417-2.451a1.564 1.564 0 00-.45-1.385L3.102 10.68c-1.318-1.27-.565-3.473 1.229-3.734l2.447-.356a1.564 1.564 0 001.154-1.22l.417-2.451z" />
              </svg>
            </div>
            <h3 className="font-bold text-start text-xl mb-2">
              Hands-On Learning
            </h3>
            <p className="text-gray-600 text-start">
              Tellus tristique habitant non orci ante ipsum quis. Donec etiam
              hac in ultrices sed dictumst.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-200 rounded-full p-4 mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16 3.5V5a1 1 0 01-1 1H5a1 1 0 01-1-1V3.5a1 1 0 011-1h10a1 1 0 011 1zM4 7v5a1 1 0 001 1h10a1 1 0 001-1V7H4zm2 2h2v2H6V9zm6 0h2v2h-2V9z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-start">STEM Focus</h3>
            <p className="text-gray-600 text-start">
              Tellus tristique habitant non orci ante ipsum quis. Donec etiam
              hac in ultrices sed dictumst.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-200 rounded-full p-4 mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927C9.369 1.163 10.631 1.163 10.951 2.927l.417 2.451a1.564 1.564 0 001.154 1.22l2.447.356c1.794.261 2.547 2.464 1.229 3.734l-1.77 1.725a1.564 1.564 0 00-.45 1.385l.417 2.451c.32 1.765-1.462 3.124-2.964 2.29l-2.2-1.156a1.564 1.564 0 00-1.455 0l-2.2 1.156c-1.502.834-3.284-.525-2.964-2.29l.417-2.451a1.564 1.564 0 00-.45-1.385L3.102 10.68c-1.318-1.27-.565-3.473 1.229-3.734l2.447-.356a1.564 1.564 0 001.154-1.22l.417-2.451z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-start">
              Robotics Basics
            </h3>
            <p className="text-gray-600 text-start">
              Tellus tristique habitant non orci ante ipsum quis. Donec etiam
              hac in ultrices sed dictumst.
            </p>
          </div>
        </div>
        <div className=" w-full h-[1px] bg-gray-400 mt-9"></div>
      </div>
    </section>
  );
};

export default AboutSection;
