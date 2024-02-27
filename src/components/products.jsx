import React, { useState } from 'react';
import Banner1 from '../assets/banner.svg';
import Banner2 from '../assets/banner2.svg';
import Banner3 from '../assets/banner3.svg';
import Line2 from '../assets/Icon color.svg';
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';

const ProductsCarousel = () => {
  const slides = [Banner2, Banner3, Banner1];
  const [currentSlide, setCurrentSlide] = useState(0);

const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
};

const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
};

//   const handleChangeBanner = (banner) => {
//     const index = slides.findIndex((slide) => slide === banner);
//     setCurrentSlide(index);
//   };

return (
<div className="hero-section relative h-[40vh] md:h-[90vh] bg-cover bg-center flex items-center text-white">
    <div className="text-center z-10">
    <div className="absolute top-20 p-4 md:top-[242px] md:left-[747px] font-baloo font-medium text-white text-[20px] md:text-[45px] tracking-[0] leading-[43px] whitespace-nowrap">
        LimeFiber Products and Services
        </div>
        <div className="md:w-[419px] h-px">
            <img className="absolute w-[30vh] left-10 md:w-[419px] h-px md:top-[322px] md:left-[847px] object-cover" alt="Line" src={Line2} />
        </div>
        <div className="md:w-[587px] md:h-[117px]">
            <p className="absolute md:w-[587px] md:top-[350px] md:left-[780px] font-baloo font-normal text-white p-4 text-[14px] md:text-[23px] text-center tracking-[0] leading-[normal] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.
            </p>
        </div>
    </div>
    <div className="absolute inset-0">
        <img
        src={slides[currentSlide]}
        className="object-cover w-screen h-full p-2"
        alt="Banner"
        />
    </div>
    <div className="mt-80 flex items-center justify-center absolute ml-40">
        <button onClick={handlePrev} className="mr-2"><AiOutlineLeft style={{ fontSize: "2em", right:'50em'}}/></button>
        <button onClick={handleNext}><AiOutlineRight style={{ fontSize: "2em" }}/></button>
    </div>
</div>
);
};

export default ProductsCarousel;
