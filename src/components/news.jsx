import React, { useState } from 'react';
import News1 from '../assets/newsimage1.svg';
import News2 from '../assets/news2.svg';
import News3 from '../assets/news3.svg';
import ArrowRight from '../assets/arrowright.svg';

const News = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [News1, News2,  News3];

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // const prevImage = () => {
  //   if (currentImageIndex > 0) {
  //     setCurrentImageIndex(currentImageIndex - 1);
  //   }
  // };

  return (
    <div className="h-[700px] w-screen bg-lightgreen mt-20">
      <div className="flex mr-[200px]">
        <div className="w-1/2 p-8">
          <div className="ml-40 text-zinc-500 text-sm font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px] mt-40">
            BLOG & NEWS
          </div>
          <div className="text-black text-[40px] font-semibold font-['Baloo Da 2'] leading-[48px] ml-40">
            News
          </div>
          <div className="mt-4 font-['Baloo Da 2'] leading-normal ml-40">
            LimeFiber expands operations in Northern Kenya, Western Kenya and more!
          </div>
          <button className="bg-green ml-40 text-white px-4 rounded-md hover:bg-green hover:text-white mt-4 py-2">
            Learn more
          </button>
        </div>
        <div className="radio-buttons absolute flex ml-[980px] mt-[650px] mr-10">
          <div className="w-[27px] h-[27px] relative">
            <div className="w-[27px] h-[27px] left-0 top-0 absolute opacity-70 rounded-full border border-red" />
            <div className="w-[11px] h-[11px] left-[8px] top-[8px] absolute bg-red rounded-full border border-red" />
          </div>
          <div className="w-[27px] h-[27px] ml-2 relative">
            <div className="w-[27px] h-[27px] top-0 absolute opacity-70 rounded-full" />
            <div className="w-[11px] h-[11px] left-[8px] top-[8px] absolute bg-gray rounded-full border border-red" />
          </div>
          <div className="w-[27px] h-[27px] relative">
            <div className="w-[27px] h-[27px] left-0 top-0 absolute opacity-70 rounded-full" />
            <div className="w-[11px] h-[11px] left-[8px] top-[8px] absolute bg-gray rounded-full border border-red" />
          </div>
          <div className="w-[27px] h-[27px] relative">
            <div className="w-[27px] h-[27px] left-0 top-0 absolute opacity-70 rounded-full" />
            <div className="w-[11px] h-[11px] left-[8px] top-[8px] absolute bg-gray rounded-full border border-red" />
          </div>
        </div>

        <div className="flex gap-3 p-4 relative ml-60">
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-full h-[${index === currentImageIndex ? 556 : 486}px]`}
              src={image}
              alt={`News ${index + 1}`}
            />
          ))}
          <img
            src={ArrowRight}
            alt="Arrow Right"
            onClick={nextImage}
            className="cursor-pointer"
          />
        </div>
      </div> 
    </div>
  );
};

export default News;
