"use client";

import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export default function Booking() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = [
    {
      title: "Paris",
      country: "France",
      visitors: 32000,
      imageUrl: "/card_1.png",
    },
    {
      title: "Tokyo",
      country: "Japan",
      visitors: 28000,
      imageUrl: "/card_2.png",
    },
    {
      title: "New York",
      country: "USA",
      visitors: 40000,
      imageUrl: "/card_3.png",
    },
    {
      title: "Sydney",
      country: "Australia",
      visitors: 25000,
      imageUrl: "/card_4.png",
    },
    // Add more destinations as needed
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Navigation Bar */}
        <div className="bg-white mt-10 mx-8 p-5 rounded-xl shadow-lg flex flex-wrap justify-around items-center mb-8 space-y-4 md:space-y-0 md:flex-row">
          <div className="flex flex-col items-center">
            <img
              src={`/travel.png`}
              alt="image"
              className="h-20 w-40 cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={`/hotel.png`}
              alt="image"
              className="h-20 w-40 cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={`/tour_guide.png`}
              alt="image"
              className="h-20 w-40 cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={`/transport.png`}
              alt="image"
              className="h-20 w-40 cursor-pointer"
            />
          </div>
        </div>

        {/* Section Title with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 mx-8">
          <div>
            <p className="text-lg font-bold">Where you want to go</p>
            <h2 className="text-3xl font-bold">Popular Destinations</h2>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="bg-white border-2 text-3xl border-black rounded-full hover:bg-gray-400 px-5 py-1"
            >
              <HiOutlineArrowNarrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-white border-2 text-3xl border-black rounded-full hover:bg-gray-400 px-5 py-1"
            >
              <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>

        {/* Destination Cards Section */}
        <div className="flex overflow-x-auto m-8 space-x-2 md:grid md:grid-cols-4 gap-0">
          {destinations.map((destination, index) => (
            <Link href={`/destination/${destination.title}`} key={index}>
              <div
                className={`min-w-[250px] h-[300px] bg-cover bg-center rounded-xl cursor-pointer ${
                  index === currentIndex ? "opacity-50" : "opacity-100"
                }`}
                style={{ backgroundImage: `url(${destination.imageUrl})` }}
              >
                <div className="flex flex-col justify-end h-full p-4 rounded-xl">
                  <h3 className="text-xl text-white">{destination.title}</h3>
                  <p className="text-white">{destination.country}</p>
                  <p className="text-white">
                    {destination.visitors} people want to visit
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
