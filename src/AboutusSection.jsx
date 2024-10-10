import React from "react";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-50 pt-7 p-2 pb-7 md:pt-16">
      {/* Button and Text Section */}
      <div className="text-center w-full mb-8 block md:flex md:justify-between md:p-6">
        <div className="md:w-1/6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-sm md:text-base mb-4">
            More About Us
          </button>
        </div>

        <div className="md:w-[70%]">
          <p className="text-gray-700 text-start text-sm md:text-base ">
            Pulvinar nunc eget tincidunt id urna diam scelerisque cursus.
            Quisnunc pharetra arcu lectus nisi. Risus hendrerit consequat
            aliqueterat ullamcorper diam. Tortor vulputate sed maecenas rhoncus
            viverra purus.
          </p>
        </div>
      </div>

      {/* Rectangle Section */}
      <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-800 rounded-lg"></div>
    </div>
  );
};

export default AboutUsSection;
