import {useRef} from 'react';
import ServiceIcon1 from '../assets/serviceicon1.svg';
import Ellipse13 from '../assets/ellipse13.svg';
import { AiOutlineRight, AiOutlineLeftCircle,AiOutlineRightCircle} from "react-icons/ai";
 

const Services = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.clientWidth;
      scrollRef.current.scrollLeft -= cardWidth;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.clientWidth;
      scrollRef.current.scrollLeft += cardWidth;
    }
  };

  return (
    <div
      name="services"
      className="relative mt-20 max-w-[100%] overflow-x-hidden"
    >
      <img
        src={Ellipse13}
        alt=""
        className="absolute top-1 md:top-16 left-1/2 w-[820px] h-[300px]"
      />
      <div className=" ml-5 relative bg-lightgreen w-[100%] md:w-[90%] p-5  h-[610px] rounded-tr-[400px] md:rounded-bl-[400px]">
        <div className="text-center text-zinc-500 text-xs font-light font-['Baloo Da 2'] leading-7 tracking-[6.30px] p-0 md:p-0">
          SERVICES & PRODUCTS
        </div>
        <div className="text-center p-4">
          <span className="text-blacktext-[24px]  md:text-[38px] font-semibold font-['Baloo Da 2'] leading-[47.83px]">
            LimeFiber
            <br />
          </span>
          <span className=" text-[20px] md:text-[32px] font-normal font-['Baloo Da 2'] leading-[47.83px]">
            Services and Packages
          </span>
        </div>

        <div className="flex ">
          <div className="flex gap-2 md:gap-4 p-2 md:mt-8 ml-2 md:ml-20 relative z-10">
            <button
              className="hidden md:block  size-auto place-items-center mt-[200px] opacity-30"
              onClick={scrollLeft}
            >
              <AiOutlineLeftCircle style={{ fontSize: "2em" }} />
            </button>
            <button
              className="hidden md:block size-auto place-items-center mt-[200px]"
              onClick={scrollRight}
            >
              <AiOutlineRightCircle style={{ fontSize: "2em" }} />
            </button>
            <div className="relative flex scroll-smooth p-2" ref={scrollRef}>
            <div className="w-[300px] md:w-[380px] h-50 bg-white rounded-[10px] p-2 md:ml-10 hover:scale-105">
              <img
                src={ServiceIcon1}
                alt="Icon 1"
                className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2"
              />
              <div className="font-semibold font-['Baloo Da 2'] tracking-wide ml-4 mt-2">
                BASIC PACKAGE
              </div>
              <p className="text-sm max-w-full p-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui mi, bibendum eu erat id, ultricies semper metus. Nunc
                dapibus laoreet dolor nec imperdiet.
              </p>
            </div>
            <div className="w-[300px] md:w-[380px] h-50 bg-white rounded-[10px] p-2 ml-10 hover:scale-105">
              <img
                src={ServiceIcon1}
                alt="Icon 1"
                className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2"
              />
              <div className="font-semibold font-['Baloo Da 2'] tracking-wide ml-4 mt-2">
                BASIC PACKAGE
              </div>
              <p className="text-sm max-w-full p-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui mi, bibendum eu erat id, ultricies semper metus. Nunc
                dapibus laoreet dolor nec imperdiet.
              </p>
            </div>
            <div className="w-[380px] h-50 bg-white rounded-[10px] p-2 ml-10 hover:scale-105">
              <img
                src={ServiceIcon1}
                alt="Icon 1"
                className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2"
              />
              <div className="font-semibold font-['Baloo Da 2'] tracking-wide ml-4 mt-2">
                BASIC PACKAGE
              </div>
              <p className="text-sm max-w-full p-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui mi, bibendum eu erat id, ultricies semper metus. Nunc
                dapibus laoreet dolor nec imperdiet.
              </p>
            </div>
            <div className="w-[300px] md:w-[380px] h-50 bg-white rounded-[10px] p-2 ml-10 hover:scale-105">
              <img
                src={ServiceIcon1}
                alt="Icon 1"
                className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2"
              />
              <div className="font-semibold font-['Baloo Da 2'] tracking-wide ml-4 mt-2">
                BASIC PACKAGE
              </div>
              <p className="text-sm max-w-full p-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui mi, bibendum eu erat id, ultricies semper metus. Nunc
                dapibus laoreet dolor nec imperdiet.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="text-green text-lg font-normal font-['Baloo Da 2'] leading-7 text-center mt-8 cursor-pointer relative flex justify-center ml-4">
          See More Services and Products <AiOutlineRight className='mt-2'/>
        </div>
        
      </div>
    </div>
  );
}

export default Services;
