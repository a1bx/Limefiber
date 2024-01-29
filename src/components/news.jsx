import React, { useState } from 'react';
import Newspic1 from '../assets/newsPic1.svg';
import Newspic2 from '../assets/news2.svg';
import Newspic3 from '../assets/news3.svg';
import ArrowRight from '../assets/arrowright.svg';
import Arrow from '../assets/newsarrow.svg';

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

    const handleExpansionClick = () => {
      // Handle click action for the expansion plan section
      // For example, you can navigate to a specific page
      // or perform any other desired action.
      console.log('Expansion section clicked');
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
        {/* <div className="flex justify-center sm:ml-[500px] mt-4 p-2" onClick={() => handleSwipe('next')} style={{ cursor: 'pointer' }}>
         <img className="w-[404px] h-[582px] ml-30" src={currentImage} alt="News Pic" />
       </div> */}
          <div className="flex justify-center sm:ml-[500px] relative h-[570px] p-4" onClick={() => handleSwipe('next')} style={{ cursor: 'pointer' }}>
             <img className="w-[380px] h-[582px] left-0 top-0 flex justify-center" src={currentImage} alt='news pic' />
               <div className="w-12 left-[241px] top-[500px] absolute">
                <div className="w-12 h-12 left-0 top-0 absolute bg-red" />
                <img className="w-[30.09px] h-[25.09px] top-2 left-2 relative" src={Arrow} alt='' />
               </div>
               <div className="w-[217px] h-[130px] left-[24px] top-[428px] absolute mb-">
        <button
          onClick={handleExpansionClick}
          className="w-[217px] h-[130px] left-0 top-0 relative bg-white bg-opacity-70 backdrop-blur-[3px]"
        >
          <div className="w-[172px] h-6 left-[32px] top-[32px] absolute justify-start items-center gap-2 inline-flex">
            <p className="text-zinc-600 text-base font-medium font-['Baloo Da 2'] leading-normal">01</p>
            <p className="text-zinc-600 text-base font-medium font-['Baloo Da 2'] leading-normal">Expansion plans</p>
          </div>
          <p className="left-[32px] top-[64px] absolute text-[28px] font-semibold font-['Baloo Da 2'] leading-[33.60px]">LimeFiber Ke</p>
        </button>
      </div>
          </div>
       <div className="mt-8 flex justify-center p-2 sm:ml-40">
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
          <button className="w-[101px] bg-green text-white sm:px-4 rounded-md hover:bg-green hover:text-white mt-8 py-4">
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