import React from 'react';
import Icon1 from '../assets/iconbox1.svg';
import Icon2 from '../assets/iconbox2.svg';
import Icon3 from '../assets/iconbox3.svg';
import Icon from '../assets/icon.svg';
import Map from '../assets/map.svg';
// import { Divider } from '@material-ui/core';
// import {RxDividerVertical} from './rxdividervertical';

const Value = () => {
  return (
    <div className="mt-10 max-w-full overflow-hidden">
      <div className="text-center text-zinc-500 text-xs font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px] mb-2">
        VALUE PROPOSITION
      </div>
      <h1 className="text-center text-2xl md:text-4xl font-semibold font-['Baloo Da 2']">
        LimeFiber Vision and Goals
      </h1>
      <div className="flex flex-col sm:flex-row md:mx-20 mx-auto gap-4 p-5 mt-8 justify-items-center">
        <div className="w-full md:w-[352px] h-[380px] md:h-[508px] bg-white rounded-[28px]">
          <img
            src={Icon1}
            alt="Icon 1"
            className="w-[65px] h-[65px] mx-auto mb-2"
          />
          <h2 className="font-semibold text-[20px] md:text-[23px] lg:text-[26px] text-center font-['Baloo Da 2'] leading-7">
            Unlimited Internet
          </h2>
          <p
            className="text-base max-w-full my-10 md:mb-0 md:mt-10 p-0 md:p-10 text-center"
            style={{ color: "#707070" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
            laoreet dolor nec imperdiet.
          </p>
          <div className="flex place-items-center">
          <button className="ml-28 md:ml-20 px-4 py-2 place-self-center rounded-md bg-green hover:bg-green hover:text-white text-white">
            Learn More
          </button>
          </div>
        </div>

        <div
          className="hidden sm:block w-[86.01px] h-[0px]  rotate-[89.33deg] border mt-60"
          // style={{ borderColor: "#D8D8D8" }}
        ></div>

        <div className="w-full md:w-[352px] h-[380px] md:h-[508px] bg-white rounded-[28px]">
          <img
            src={Icon2}
            alt="Icon 2"
            className="w-[65px] h-[65px] mx-auto mb-2"
          />
          <h2 className="font-semibold text-[20px] md:text-[23px] lg:text-[26px] text-center font-['Baloo Da 2'] leading-7">
            Simple and Secure
          </h2>
          <p
            className="text-base max-w-full my-10 md:mt-10 md:mb-0 p-0 md:p-10 text-center"
            style={{ color: "#707070" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
            laoreet dolor nec imperdiet.
          </p>
          <div className="flex place-self-center">
          <button className="ml-28 place-self-center md:ml-20 px-4 py-2 rounded-md bg-green hover:bg-green hover:text-white text-white">
            Learn More
          </button>
          </div>
        </div>

        <div
          className="hidden sm:block w-[86.01px] h-[0px] rotate-[89.33deg] border mt-60"
          style={{ borderColor: "#D8D8D8" }}
        ></div>

        <div className="w-full md:w-[352px] h-[380px] md:h-[508px]  bg-white rounded-[28px]">
          <img
            src={Icon3}
            alt="Icon 3"
            className="w-[65px] h-[65px] mx-auto mb-2  "
          />
          <h2 className="font-semibold text-[20px] md:text-[23px] lg:text-[26px] text-center font-['Baloo Da 2'] leading-7">
            Customer Support
          </h2>
          <p
            className="text-base max-w-full my-10 md:mb-0 md:mt-10 p-0 md:p-10 text-center"
            style={{ color: "#707070" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
            laoreet dolor nec imperdiet.
          </p>
          <button className="ml-28 md:ml-20 place-self-center mx-auto px-4 py-2 rounded-md bg-green hover:bg-green hover:text-white text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4 md:mt-10 relative max-w-full overflow-hidden">
        <div className="bg-white rounded p-2 md:p-10 ml-2 md:ml-10">
          <div className="text-sm font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px]">
            COVERAGE
          </div>
          <div className="text-[25px] font-medium font-['Baloo Da 2'] leading-loose">
            Check your Home Fiber Coverage
          </div>
          <div className="w-[322.05px] h-[131.77px] text-black text-opacity-60 text-xl font-normal font-['Baloo Da 2'] leading-relaxed mt-4">
            Find out if your area is Home Fiber Ready! To begin click the button
            below
          </div>

          <div className="flex md:grid-flow-col grid-flow-row px-2 py-2 gap-10 mt-2 md:mt-10 ">
            <button className="left-0 px-4 py-2 rounded-full border text-green hover:bg-green hover:text-white mt-4">
              Get started
            </button>
            <img
              src={Map}
              alt=""
              className="absolute md:relative h-[300px] opacity-40 md:opacity-100 right-[-120px] md:h-[60px] bottom-0 ml-10"
            />
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={Icon}
            alt="Icon 2"
            className="w-[687.53px] h-[405.44px] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Value;
