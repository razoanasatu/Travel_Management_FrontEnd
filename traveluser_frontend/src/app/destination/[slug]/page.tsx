"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

export default function Destination() {
  return (
    <>
      <Navbar />
      <div>
        {/* Cover Image */}
        <div
          className="h-80 w-auto bg-cover bg-center"
          style={{ backgroundImage: "url(/card_1.png)" }}
        ></div>

        {/* Destination Title and Rating */}
        <div className="flex items-center justify-between mx-8 mt-6">
          {/* Destination Name */}
          <h1 className="text-left text-3xl font-semibold">Destination Name</h1>

          {/* Rating */}
          <div className="flex items-center text-yellow-400 ml-auto">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15l-5.56 3.48 1.06-6.17-4.49-4.38 6.17-.49L10 0l2.82 6.62 6.17.49-4.49 4.38 1.06 6.17z" />
            </svg>
            <span className="font-semibold text-lg text-black ml-1">4.5</span>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8 mx-6">
          <h2 className="text-2xl font-semibold">About This Destination</h2>
          <p className="mt-4 text-gray-700">
            This is a brief description of the destination. Here you can add
            details, history, or interesting facts to give the user more context
            about the place.
          </p>
        </div>

        {/* Small Gray Text */}
        <p className="text-xs text-gray-500 mx-6 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque urna at purus ullamcorper, a dictum lorem volutpat. Sed
          nec risus a purus eleifend accumsan.
        </p>

        {/* Book Now Button Section */}
        <div className="w-full flex justify-center mt-8 mb-8">
          <button className="bg-blue-800 text-white px-24 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-200">
            Book Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
