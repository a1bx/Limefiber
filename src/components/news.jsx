import React from 'react';
import News1 from '../assets/newsimage1.svg';
import News2 from '../assets/news2.svg';
import ArrowRight from '../assets/arrowright.svg'; 

const News = () => {
  return (
    <div className="h-[600px] bg-lightgreen">
      <div className="flex">
        <div className="w-1/2 p-8">
          <div className="text-center text-zinc-500 text-sm font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px]">BLOG & NEWS</div>
          <div className="text-black text-[40px] font-semibold font-['Baloo Da 2'] leading-[48px]">News</div>
          <div className="mt-4 font-['Baloo Da 2'] leading-normal">
            LimeFiber expands operations in Northern Kenya, Western Kenya and more!
          </div>
          <button className="bg-green text-white px-4 rounded-md hover:bg-green hover:text-white mt-4 py-2">Learn more</button>
        </div>

        <div className="flex gap-3 p-4 relative">
          <img className="w-full h-[486px]" src={News1} alt="" />
          <div>
          <img className="w-full h-[386px]" src={News2} alt="" />
          <div className='flex'>
          <input type="radio" name="radio-8" className="radio radio-error p-2 border-red" checked />
          <input type="radio" name="radio-8" className="radio radio-error" />
          </div>
          </div>
          
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
            <img src={ArrowRight} alt="Arrow Right" />
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default News;
