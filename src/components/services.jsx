import React from 'react';
import ServiceIcon1 from '../assets/serviceicon1.svg';
import ServiceIcon2 from '../assets/servIcon2.svg';
import PremIcon from '../assets/premium.svg';
import ProIcon from '../assets/pro.svg';

const Services = () => {
  return (
    <div className=' ml-10 relative bg-lightgreen mt-20 w-[1293px] h-[594px] bg-green-50 rounded-tr-[400px] rounded-bl-[400px]'>
      <div className="" />
      <div className="text-center text-zinc-500 text-sm font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px]">SERVICES & PRODUCTS</div>
      <div className="text-center">
        <span className="text-black text-[45px] font-semibold font-['Baloo Da 2'] leading-[47.83px]">LimeFiber<br/>
        </span>
        <span className="text-[45px] font-normal font-['Baloo Da 2'] leading-[47.83px]">Services and Packages</span>
      </div>

      
      <div className="flex gap-2 p-4 mt-8 ml-40 relative z-10">
        
        <div className="w-[308px] h-48 bg-white rounded-[10px] shadow">
          <img src={ServiceIcon1} alt="Icon 1" className="w-[52px] h-12 bg-red rounded-[10px]" />
          <div className="font-semibold font-['Baloo Da 2'] tracking-wide">BASIC PACKAGE</div>
          <p className="text-sm max-w-full p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>

        
        <div className="w-[308px] h-48 bg-white rounded-[10px] shadow">
          <img src={ServiceIcon2} alt="Icon 1" className="w-[52px] h-12 bg-red rounded-[10px]" />
          <div className="font-semibold font-['Baloo Da 2'] leading-snug tracking-wide">STANDARD PACKAGE</div>
          <p className="text-sm max-w-full p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>

       
        <div className="w-[308px] h-48 bg-white rounded-[10px] shadow">
          <img src={PremIcon} alt="Icon 1" className="w-[52px] h-12 bg-red rounded-[10px]" />
          <div className="font-semibold font-['Baloo Da 2'] leading-snug tracking-wide">PREMIUM PACKAGE</div>
          <p className="text-sm max-w-full p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>

        <div className="w-[308px] h-48 bg-white rounded-[10px] shadow">
          <img src={ProIcon} alt="Icon 1" className="w-[52px] h-12 bg-red rounded-[10px]" />
          <div className="font-semibold font-['Baloo Da 2'] leading-snug tracking-wide">PRO PACKAGE</div>
          <p className="text-sm max-w-full p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
