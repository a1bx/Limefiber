import {useState,useEffect} from 'react';
import Learn from '../assets/learn.svg';
import People from '../assets/People1.png';
import Banner1 from '../assets/banner.svg'; 
import Banner2 from '../assets/banner2.svg';
import Banner3 from '../assets/banner3.svg';

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(Banner1);
  const [isAutoChangeEnabled, setIsAutoChangeEnabled] = useState(true);

  useEffect(() => {
    let bannerInterval;

    if (isAutoChangeEnabled) {
      bannerInterval = setInterval(() => {
        setCurrentBanner((prevBanner) => {
          if (prevBanner === Banner1) {
            return Banner2;
          } else if (prevBanner === Banner2) {
            return Banner3;
          } else {
            return Banner1;
          }
        });
      }, 5000);
    }

    return () => clearInterval(bannerInterval);
  }, [isAutoChangeEnabled]);

  // const handleToggleAutoChange = () => {
  //   setIsAutoChangeEnabled((prevValue) => !prevValue);
  // };

  const handleChangeBanner = (newBanner) => {
    setCurrentBanner(newBanner);
    setIsAutoChangeEnabled(false); // Stop auto-change when user manually changes the banner
  };
  return (
    <>
      <div className="ml-2 h-[680px] p-4 hidden lg:block">
        <link rel="home" href="" />
        {/* <Navigate to='/home' /> */}
        <div className="flex flex-col w-full lg:flex-row">
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
                    alt='Learn More'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-2/3 items-start">
            <img className="w-auto h-auto" src={People} alt='' />
          </div>
        </div>
      </div>
      {/* <img src={People1} className='block md:hidden rounded w-[95%] mt-10 h-[300px] mx-auto' /> */}
      {/* <div className="hero-section sm:hidden relative">
        <img
          src={currentBanner}
          className=" object-cover w-full h-full p-2 rounded-none"
          alt="Banner"
        />
      </div> */}
      
      <div className="lg:hidden hero-section relative h-[400px] bg-cover bg-center flex items-center text-white">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="text-center z-10">
        <div className="w-[210px] text-white text-xl font-medium font-['Baloo Da 2'] capitalize leading-relaxed mt-20">Get started with LimeFiber</div>
            <button className="w-[90px] border py-3 font-normal font-['Baloo Da 2'] leading-tight rounded-sm mt-10">
            Get Started
            </button>
        </div>
        
        <div className="absolute inset-0">
        <img
          src={currentBanner}
          className="object-cover w-full h-full p-2 rounded"
          alt="Banner"
        />
        </div>
        <div className="mt-80 flex items-center justify-center absolute ml-40">
          <div className="radio-buttons flex gap-2 mt-2">
            <label>
              <input
                type="radio"
                value={Banner1}
                checked={currentBanner === Banner1}
                onChange={() => handleChangeBanner(Banner1)}
              />
            </label>
            <label>
              <input
                type="radio"
                value={Banner2}
                checked={currentBanner === Banner2}
                onChange={() => handleChangeBanner(Banner2)}
              />
            </label>
            <label>
              <input
                type="radio"
                value={Banner3}
                checked={currentBanner === Banner3}
                onChange={() => handleChangeBanner(Banner3)}
              />
            </label>
          </div>
        </div>
      </div>

      
      <div className="ml-5 sm:hidden p-2 grid grid-flow-row mx-2">
              <p className="text-black font-normal font-['Baloo Da 2'] text-base max-w-full my-10 md:mb-0 md:mt-10 p-0 md:p-10 text-center">
                Our goal is to provide unlimited internet and offer a simple,
                stable browsing experience.
              </p>
              <div className="w-[169px] h-[60px] place-self-center mt-2 relative">
                <div className="w-[94px] left-[50px] top-[15px] absolute text-black text-lg font-semibold font-['Baloo Da 2'] leading-7">
                  Learn More
                </div>
                <div className="w-[60px] h-[60px] left-0 top-0 absolute">
                  <img
                    className="w-[30px] h-[60px] left-0 top-0 absolute"
                    src={Learn}
                    alt='Learn More'
                  />
                </div>
              </div>
            </div>
    </>
  );
}

export default Home;