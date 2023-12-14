import React from 'react';
import Learn from '../assets/learn.svg';
import People from '../assets/People1.png';
// import { Link } from 'react-router-dom';
// import Ellipse1 from '../assets/ellipse1.svg';
// import Arrow from '../assets/arrowdown.svg';
// import Arrow1 from '../assets/arrowup.svg';
// import { Navigate } from 'react-router-dom';
import Banner from '../assets/banner.svg';

const Home = () => {
  return (
    <>
      <div className="ml-2 h-[680px] p-4 hidden lg:block">
        <link rel="home" href="" />
        {/* <Navigate to='/home' /> */}
        <div className="flex flex-col w-full lg:flex-row mt-10">
          <div>
            <div className="text text-5xl font-semibold font-['Baloo Da 2'] leading-[81px] mb-2 p-10 ml-10">
              We provide Home Fiber Internet, quick and <br></br>reliable!
              <p className="w-[555px] h-[62px] text-black text-lg font-normal font-['Baloo Da 2'] leading-7 mt-4 ">
                Our goal is to provide unlimited internet and offer a simple,
                stable browsing experience.
              </p>
            </div>
            <div className="ml-10 p-10 grid grid-cols-4 mt-10">
              <button className="bg-green text-white rounded-md hover:text-white">
                Get Started
              </button>
              <div className="w-[169px] h-[60px] left-[50px] relative">
                <div className="w-[94px] left-[50px] top-[15px] absolute text-black text-lg font-semibold font-['Baloo Da 2'] leading-7">
                  Learn More
                </div>
                <div className="w-[60px] h-[60px] left-0 top-0 absolute">
                  <img
                    className="w-[30px] h-[60px] left-0 top-0 absolute"
                    src={Learn}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-2/3 items-start">
            <img className="w-auto h-auto relative" src={People} />
          </div>
        </div>
      </div>
      <img src={Banner} className='block md:hidden rounded w-[95%] mt-10 h-[300px] mx-auto' />
      <div className="ml-5 sm:hidden p-2 grid grid-flow-row mx-auto">
              <p className="text-black font-normal font-['Baloo Da 2'] text-base max-w-full my-10 md:mb-0 md:mt-10 p-0 md:p-10 text-center">
                Our goal is to provide unlimited internet and offer a simple,
                stable browsing experience.
              </p>
              <div className="w-[169px] h-[60px] justify-center place-items-center mt-2 relative">
                <div className="w-[94px] left-[50px] top-[15px] absolute text-black text-lg font-semibold font-['Baloo Da 2'] leading-7">
                  Learn More
                </div>
                <div className="w-[60px] h-[60px] left-0 top-0 absolute">
                  <img
                    className="w-[30px] h-[60px] left-0 top-0 absolute"
                    src={Learn}
                  />
                </div>
              </div>
            </div>
    </>
  );
}

export default Home;
