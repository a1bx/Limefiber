import React, { useState } from 'react';
import News1 from '../assets/newsimage1.svg';
import News2 from '../assets/news2.svg';
import News3 from '../assets/news3.svg';
import ArrowRight from '../assets/arrowright.svg';
import Indicator from '../assets/indicator.svg';

const News = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [News1, News2,  News3];

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="h-[650px] w-screen bg-lightgreen mt-20 mr-40">
      <div className="flex">
        <div className="w-1/2 p-8">
          <div className="ml-40 text-sm font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px] mt-40">
            BLOG & NEWS
          </div>
          <div className="text-[40px] font-semibold font-['Baloo Da 2'] leading-[48px] ml-40">
            News
          </div>
          <div className="mt-4 font-['Baloo Da 2'] leading-normal ml-40">
            LimeFiber expands operations in Northern Kenya, Western Kenya and more!
          </div>
          <button className="bg-green ml-40 text-white px-4 rounded-md hover:bg-green hover:text-white mt-4 py-2">
            Learn more
          </button>
        </div>
        

        <div className="flex gap-3 p-4 relative ">
        <img src={Indicator} alt="" className='mt-[569px] ml-[500px] absolute' />
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-full  h-[${index === currentImageIndex ? 556 : 486}px]`}
              src={image}
              alt={`News ${index + 1}`}
            />
          ))}
          <img
            src={ArrowRight}
            alt="Arrow Right"
            onClick={nextImage}
            className="cursor-pointer mr-20"
          />
          
        </div>
      </div>
    </div>
  );
};

export default News;