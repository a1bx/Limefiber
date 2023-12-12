import React, { useState } from 'react';
import News1 from '../assets/newsimage1.svg';
import News2 from '../assets/news2.svg';
import News3 from '../assets/news3.svg';
import ArrowRight from '../assets/arrowright.svg';

const News = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);

  const images = [News1, News2, News3];

  const changeImage = (index) => {
    setPrevImageIndex(currentImageIndex);
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setPrevImageIndex(currentImageIndex);
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  return (
    <div className="h-[650px] max-w-[100%] md:overflow-x-hidden w-screen bg-lightgreen mr-40 relative">
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 p-8 ml-20">
          <div className='mb-96 md:mb-0'>
            <div className="mt-40 text-sm font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px]">
              BLOG & NEWS
            </div>
            <div className="text-[40px] font-semibold font-['Baloo Da 2'] leading-[48px]">
              News
            </div>
          </div>
          <div className="mt-4 font-['Baloo Da 2'] leading-normal">
            LimeFiber expands operations in Northern Kenya, Western Kenya, and
            more!
          </div>
          <button className="bg-green text-white px-4 rounded-md hover:bg-green hover:text-white mt-4 py-2">
            Learn more
          </button>
        </div>

        <div className="flex gap-3 p-4 relative ">
          <div className="mt-[569px] ml-[500px] absolute">
            {images.map((image, index) => (
              <label key={index} className="cursor-pointer p-2">
                <input
                  type="radio"
                  name="image-radio"
                  checked={index === currentImageIndex}
                  onChange={() => changeImage(index)}
                />
                <span
                  className={`indicator ${
                    index === currentImageIndex ? "bg-red" : ""
                  }`}
                ></span>
              </label>
            ))}
          </div>
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-full h-[${
                index === currentImageIndex ? 500 : 400
              }px] p-4 mt-5 cursor-pointer`}
              src={image}
              alt={`News ${index + 1}`}
              style={{
                transform: `scale(${index === currentImageIndex ? 1.2 : 1})`,
                transition: "transform 0.8s ease",
              }}
              onClick={() => changeImage(index)}
            />
          ))}
          <img
            src={ArrowRight}
            alt="Arrow Right"
            onClick={nextImage}
            className="cursor-pointer mr-24  "
          />
        </div>
      </div>
    </div>
  );
};

export default News;
