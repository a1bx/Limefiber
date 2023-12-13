import React from "react";
import Contact from "../assets/contact.svg";
import Vector9 from "../assets/vector9.svg";
import Ellipse16 from "../assets/ellipse16.svg";

const contact = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 md:mt-[-60px] relative">
      <div className="flex gap-3 p-4 absolute top-40 md:top-0 mt-2 mb-5 md:mt-0 md:relative ml-10">
        <img
          src={Ellipse16}
          alt=""
          className="absolute w-3/4 md:w-[459px] md:h-[700px] md:left-10 ml-10 top-8 md:top-14"
        />
        <img
          src={Vector9}
          alt=""
          className=" w-3/4 md:w-[550px] md:h-[500px] mt-10 ml-5 md:ml-20 top-5 md:top-20 absolute"
        />
        <img
          className="w-5/6 md:w-[780.95px] md:h-[770.92px] relative"
          src={Contact}
          alt=""
        />
      </div>
      <div className="md:w-1/2 w-[100%] p-8 md:mt-20 text-center md:text-left">
        <div className="mb-96 md:mb-0">
          <div className="text-sm mt-10 font-light font-['Baloo Da 2'] leading-7 tracking-[6.30px]">
            SUPPORT & CONTACT
          </div>
          <div>
            <span className="text-black text-[28px] md:text-[38px] font-semibold font-['Baloo Da 2'] leading-[47.83px] mt-2">
              Contact LimeFiber
              <br />
            </span>
            <span className="text-black text-[28px] md:text-[38px] font-normal font-['Baloo Da 2'] leading-[47.83px] mt-4">
              The best Home Fiber service
            </span>
          </div>
        </div>
        <div className="md:mt-20 mt-10 md:w-[515px] w-[100%] h-[82px] text-black text-opacity-60 text-[14px] font-normal font-['Baloo Da 2'] leading-[24.87px] tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
          mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet
          dolor nec imperdiet.
        </div>
        <div className="w-[100%] h-[82px] text-black text-opacity-60 text-[14px] font-normal font-['Baloo Da 2'] leading-[24.87px] tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
          mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet
          dolor nec imperdiet.
        </div>
        <button className="w-[207px] h-[66px] bg-green text-white rounded-[10px] mt-4">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default contact;
