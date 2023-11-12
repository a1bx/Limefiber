import {useRef} from 'react';
import ServiceIcon1 from '../assets/serviceicon1.svg';
import Ellipse13 from '../assets/ellipse13.svg';
import { AiOutlineRight, AiOutlineLeftCircle,AiOutlineRightCircle} from "react-icons/ai";
 

const Services = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 100;
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  return (
  <div className='relative mt-20'>
      <img src={Ellipse13} alt="" className='absolute top-20 right-2 w-[820px] h-[594px]' />
    <div className=' ml-10 relative bg-lightgreen mt-20 w-[1592px] h-[594px] rounded-tr-[400px] rounded-bl-[400px]'>
      <div className="relative" />
       <div className="text-center text-zinc-500 text-sm font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px] p-4">SERVICES & PRODUCTS</div>
       <div className="text-center p-4">
        <span className="text-black text-[45px] font-semibold font-['Baloo Da 2'] leading-[47.83px]">LimeFiber<br/>
        </span>
        <span className="text-[45px] font-normal font-['Baloo Da 2'] leading-[47.83px]">Services and Packages</span>
      </div>
      
      
      <div className='flex '>
      <div className="flex gap-4 p-2 mt-8 ml-60 relative z-10">
        <button className='flex size-auto place-items-center mt-[200px]' onClick={scrollLeft}>
        <AiOutlineLeftCircle style={{ fontSize: '2em' }}/>
        <AiOutlineRightCircle style={{ fontSize: '2em' }}/>
          </button>
        <div className="w-[380px] h-50 bg-white rounded-[10px] p-2 ml-10">
          <img src={ServiceIcon1} alt="Icon 1" className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2" />
          <div className="font-semibold font-['Baloo Da 2'] tracking-wide ml-4 mt-2">BASIC PACKAGE</div>
          <p className="text-sm max-w-full p-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>
        <div className="w-[380px] h-50 bg-white rounded-[10px] p-2 ml-10">
          <img src={ServiceIcon1} alt="Icon 1" className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2" />
          <div className="font-semibold font-['Baloo Da 2'] tracking-wide ml-4 mt-2">BASIC PACKAGE</div>
          <p className="text-sm max-w-full p-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>
        <div className="w-[380px] h-50 bg-white rounded-[10px] p-2 ml-10">
          <img src={ServiceIcon1} alt="Icon 1" className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2" />
          <div className="font-semibold font-['Baloo Da 2'] tracking-wide ml-4 mt-2">BASIC PACKAGE</div>
          <p className="text-sm max-w-full p-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>
        <div className="w-[380px] h-50 bg-white rounded-[10px] p-2 ml-10">
          <img src={ServiceIcon1} alt="Icon 1" className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2" />
          <div className="font-semibold font-['Baloo Da 2'] tracking-wide ml-4 mt-2">BASIC PACKAGE</div>
          <p className="text-sm max-w-full p-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>
      </div>
      </div> 
      <div className="text-green text-lg font-normal font-['Baloo Da 2'] leading-7 text-center mt-10 cursor-pointer relative flex items-center ml-[700px]">See More Services and Products <AiOutlineRight/></div>
    </div> 
  </div>
  );
}

export default Services;
