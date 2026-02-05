import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex justify-center px-3 py-2 bg-gray-50">
      <div className="w-full max-w-7xl border-4 border-green-800 rounded-2xl overflow-hidden">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-28 sm:h-36 md:h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
