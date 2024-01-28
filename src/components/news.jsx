import React, { useState } from 'react';
import Newspic1 from '../assets/newsPic1.svg';
import Newspic2 from '../assets/news2.svg';
import Newspic3 from '../assets/news3.svg';
import ArrowRight from '../assets/arrowright.svg';

const News = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0); 
  // const images = [Newspic1, Newspic2, Newspic3];

  // const images = [News1, News2, News3];

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
    const images = [Newspic1, Newspic2, Newspic3];
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleImageChange = (index) => {
      setCurrentImage(images[index]);
      setActiveIndex(index);
    };
  
    const handleSwipe = (direction) => {
      const newIndex = direction === 'next' ? (activeIndex + 1) % images.length : (activeIndex - 1 + images.length) % images.length;
      handleImageChange(newIndex);
    };

  return (
    <div className="sm:h-[600px] max-w-[100%] sm:overflow-x-hidden w-screen sm:bg-lightgreen sm:mr-40 sm:relative">
      <div className="sm:flex flex-col sm:flex-row sm:justify-start ">
        <div className="sm:w-1/2 p-2 sm:ml-2 gap-4">
          <div className='sm:flex sm:ml-10'>
            <div className="text-center text-[9px] font-normal font-['Baloo Da 2'] leading-7 tracking-[4.05px] sm:mt-40">BLOG & NEWS</div>
            <div className="hidden sm:text-[40px] sm:font-semibold sm:font-['Baloo Da 2'] sm:leading-[48px]">
              News
            </div>
            <div className="sm:hidden text-center text-black text-[17px] font-normal font-['Baloo Da 2'] leading-7">
        LimeFiber News and Stories
            </div> 
          </div>
          <div className="hidden sm:flex ml-10 mt-4 w-[368px] ml:10 text-base font-['Baloo Da 2'] leading-normal">LimeFiber expands operations in Northern Kenya,  Western Kenya and more!</div>
          <div className='hidden sm:flex sm:ml-10'>
          <button className="w-[162px] h-[49px] bg-green text-white sm:w-[140px] sm:px-2 rounded-md hover:bg-green hover:text-white mt-10 py-2">
            Learn more
          </button>
          </div>
        </div>
        <div className='sm:hidden'>
        <div className="flex justify-center sm:ml-[500px] mt-4 p-2" onClick={() => handleSwipe('next')} style={{ cursor: 'pointer' }}>
         <img className="w-[277px] h-[385px] ml-30" src={currentImage} alt="News Pic" />
       </div>
       <div className="mt-4 flex justify-center p-2 sm:ml-40">
         {images.map((image, index) => (
           <label key={index} className={`mx-1 cursor-pointer ${activeIndex === index ? 'active' : ''}`}>
             <input
               type="radio"
               name="newsImage"
               onChange={() => handleImageChange(index)}
               checked={activeIndex === index}
             />
             <span
                  className={`indicator [${
                    index === currentImage ? 277:385}px]"bg-red" : ""
                  }`}
                ></span>
            </label>
               ))}
        </div>
           <div className='sm:hidden flex justify-center'>
          <button className="w-[101px] bg-green text-white sm:px-4 rounded-md hover:bg-green hover:text-white mt-10 py-2">
            Learn more
          </button>
          </div>
          </div>

        <div className="hidden sm:flex justify-center gap-1 p-4 relative mt-10">
          <div className="sm:mt-[470px]   absolute">
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
                index === currentImageIndex ? 380 : 300
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
            className="cursor-pointer flex mr-20"
          />
        </div>
    </div>
  </div>
  );
};

export default News;