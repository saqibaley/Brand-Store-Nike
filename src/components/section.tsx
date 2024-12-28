// import React from "react";
import ShoeImage from "../assets/shoe_image.png";
import flipKart from "../assets/flipkart.png";
import amazonImg from "../assets/amazon.png";

export default function Section() {
  return (
    <div className="container mx-auto px-4">
      <div className="section flex flex-col-reverse md:flex-row items-center justify-center p-6 md:p-10 gap-8">
        {/* Left Side */}
        <div className="leftSide flex flex-col gap-4 text-center md:text-left">
          <div className="mainText text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight space-y-2">
            <span>YOUR FEET</span> <br />
            <span>DESERVE</span>
            <br />
            <span> THE BEST</span>
          </div>
          <div className="paragraphSection">
            <p className="text-xs xs:text-base text-gray-600 mx-auto md:mx-0 md:w-[55%] w-full">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="buttonSection flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-customRed text-white font-semibold px-4 py-1 rounded-md hover:bg-red-600 transition">
              Shop Now
            </button>
            <button className="text-gray-800 font-semibold px-4 py-1 rounded-md hover:bg-gray-200 transition border-2 border-black-100">
              Category
            </button>
          </div>

          {/* storeSections */}
          <div className="storeContainer flex flex-col gap-2 items-start">
            <div className="text-gray-600 text-sm text-left">
              Also Available on
            </div>
            <div className="flex flex-row gap-2">
              <img src={flipKart} alt="Flipkart" className="w-6" />
              <img src={amazonImg} alt="Amazon" className="w-6" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="rightSide flex justify-center md:justify-end">
          <img
            src={ShoeImage}
            alt="Red Nike Shoes"
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
