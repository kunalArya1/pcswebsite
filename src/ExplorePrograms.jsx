import React from "react";

const ExplorePrograms = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Descriptive Text */}
        <p className="text-gray-600 mb-8">
          Pulvinar nunc eget tincidunt id urna diam scelerisque cursus. Quis
          nunc pharetra arcu lectus nisl. Tortor vulputate sed maecenas rhoncus
          viverra purus.
        </p>

        {/* Call to Action Button */}
        <a
          href="#"
          className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Explore All Programs
        </a>
      </div>
    </section>
  );
};

export default ExplorePrograms;
