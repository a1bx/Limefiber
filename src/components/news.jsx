import React, { useState } from 'react';
import Newspic1 from '../assets/newsPic1.svg';
import Newspic2 from '../assets/news2.svg';
import Newspic3 from '../assets/news3.svg';
import ArrowRight from '../assets/arrowright.svg';
import Arrow from '../assets/newsarrow.svg';
import {Link} from "react-router-dom"
// import { Navigate } from 'react-router-dom';
// import Article from '../assets/article.svg';

const News = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Newspic1, Newspic2, Newspic3];

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // const handleExpansionClick = () => {
  //   Navigate('/blogs');
  // }

  return (
    <div className="sm:h-[600px] max-w-[100%] sm:overflow-x-hidden w-screen sm:bg-lightgreen sm:mr-40 sm:relative">
      <div className="sm:flex flex-col sm:flex-row sm:justify-start ">
        <div className="sm:w-1/2 p-2 sm:ml-2 gap-4">
          <div className='sm:flex sm:ml-10'>
            <div className="text-center text-[9px] font-normal font-['Baloo Da 2'] leading-7 tracking-[4.05px] sm:mt-40">BLOG & NEWS</div>
            <div className="hidden sm:text-[40px] sm:font-semibold sm:font-['Baloo Da 2'] sm:leading-[48px]">
              News
            </div>
            <div className="sm:hidden text-center text-black text-[17px] font-normal font-Baloo leading-7">
              LimeFiber News and Stories
            </div>
          </div>
          <div className="hidden sm:flex ml-10 mt-4 w-[368px] ml:10 text-base font-Baloo leading-normal">LimeFiber expands operations in Northern Kenya, Western Kenya and more!</div>
          <div className='hidden sm:flex sm:ml-10'>
            <button className="w-[162px] h-[49px] bg-green text-white font-Baloo sm:w-[140px] sm:px-2 rounded-md hover:bg-green hover:text-white mt-10 py-2">
            <Link to="/blogs"> Learn More</Link>
            </button>
          </div>
        </div>
        <div className='sm:hidden'>
          <div className="flex justify-center sm:ml-[500px] relative h-[570px] p-4" onClick={nextImage} style={{ cursor: 'pointer' }}>
            <img className="w-full h-full object-cover" src={images[currentImageIndex]} alt='news pic' />
            <div className="w-12 left-[241px] top-[490px] absolute">
              <div className="w-12 h-12 bg-red" />
              <a href="blogs"></a>
              <img className="w-[30.09px] h-[25.09px] bottom-9 left-2 relative" src={Arrow} alt='' />
            </div>
            <div className="w-[217px] h-[130px] left-[24px] top-[408px] absolute">
        <button
          // onClick={handleExpansionClick}
          className="w-[217px] h-[130px] left-0 top-0 relative bg-white bg-opacity-70 backdrop-blur-[3px]"
        >
          <div className="w-[172px] h-6 left-[32px] top-[32px] absolute justify-start items-center gap-2 inline-flex">
            <p className="text-base font-medium font-Baloo leading-normal">01</p>
            <p className="text-base font-medium font-Baloo leading-normal">Expansion plans</p>
          </div>
          <p className="left-[32px] top-[64px] absolute text-[28px] font-semibold font-Baloo leading-[33.60px]">LimeFiber Ke</p>
        </button>
      </div>
          </div>
          <div className="mt-8 flex justify-center p-2 sm:ml-40">
            {images.map((_, index) => (
              <label key={index} className={`mx-1 cursor-pointer ${currentImageIndex === index ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="newsImage"
                  onChange={() => changeImage(index)}
                  checked={currentImageIndex === index}
                />
                <div className={`indicator ${currentImageIndex === index ? 'bg-red' : ''}`}></div>
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
          <div className="sm:mt-[470px] absolute">
            {images.map((_, index) => (
              <label key={index} className="cursor-pointer p-2">
                <input
                  type="radio"
                  name="image-radio"
                  checked={index === currentImageIndex}
                  onChange={() => changeImage(index)}
                />
                <span className={`indicator ${currentImageIndex === index ? 'bg-red' : ''}`}></span>
              </label>
            ))}
            {/* <img src={Article} alt="" className='relative flex bottom-[10vh] right-[40vh]'/> */}
          </div>
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-full h-[${currentImageIndex === index ? 380 : 300}px] p-4 mt-8 cursor-pointer`}
              src={image}
              alt={`News ${index + 1}`}
              style={{
                transform: `scale(${currentImageIndex === index ? 1.2 : 1})`,
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
