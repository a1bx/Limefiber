import {useState} from "react";
import Banner2 from "../assets/banner2.svg";
import Banner3 from "../assets/banner3.svg";
import Banner1 from "../assets/banner.svg";
import Services from "../assets/services.svg";
import Bundled from "../assets/bundledpackage.svg";
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
import Icon from "../assets/icon.svg";
import Router from "../assets/router.svg";
import Line from "../assets/Icon color.svg";
import Map from "../assets/map.svg";
import Navbar from "./navbar";
import Footer from "./footer";

const Products = () => {
    const slides = [Banner2, Banner3, Banner1];
    const [currentSlide, setCurrentSlide] = useState(0);
  
  const handlePrev = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };
  
  const handleNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };
  return (
    <div className="bg-white w-full overflow-x-hidden">
      
      <div className="md:w-full md:px-10 md:h-[400vh]">
        <Navbar/>
        <div className="relative md:flex h-[50vh] md:h-[90vh] bg-cover bg-center flex items-center text-white">
          <div className="text-center z-10">
            <div className="absolute top-20 p-4 md:top-[242px] md:left-[747px] font-baloo font-medium text-white text-[20px] md:text-[45px] tracking-[0] leading-[43px] whitespace-nowrap">
        LimeFiber Products and Services
        </div>
        <div className="md:w-[419px] h-px">
            <img className="absolute w-[30vh] left-10 md:w-[419px] h-px md:top-[322px] md:left-[847px] object-cover" alt="Line" src={Line} />
        </div>
        <div className="md:w-[587px] md:h-[117px]">
            <p className="absolute md:w-[587px] md:top-[350px] md:left-[780px] font-baloo font-normal text-white p-4 text-[14px] md:text-[23px] text-center tracking-[0] leading-[normal] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.
            </p>
        </div>
        {/* <button>Learn more</button> */}
        </div>
        <div className="absolute inset-0">
        <img
        src={slides[currentSlide]}
        className="object-cover w-screen h-full p-2"
        alt="Banner"
        />
        </div>
    {/* < className="mt-80 flex items-center justify-center absolute ml-40"> */}
    <button onClick={handlePrev} className="bg-white hidden rounded h-20 bottom-[40vh] p-2 right-[170vh] mt-80 md:flex items-center justify-center absolute ml-40">
        <AiOutlineLeft style={{ fontSize: "2em", color: "#75A774" }} />
    </button>
    <button onClick={handleNext} className="bg-white hidden rounded h-20 bottom-[40vh] p-2 left-[151vh] mt-80 md:flex items-center justify-center absolute ml-40">
        <AiOutlineRight style={{ fontSize: "2em", color: "#75A774" }} />
    </button>
    </div>
        
        <div className="relative">
          
          {/* bundled packages */}
          <div className="absolute md:grid mt-10 content-center md:top-[10vh] ">
          <img
            className="p-4 w-full mt-2 md:absolute md:left-[96vh] md:w-[509px] md:h-[430px]"
            alt="Rectangle"
            src={Bundled}
          />
          <p className="relative text-center text-[24px] md:w-[320px] md:top-[18vh] md:left-[39vh] font-Baloo font-medium md:text-[38px]">
            Bundled packages
          </p>
          <p className="relative p-2 md:w-[500px] md:top-[20vh] md:left-[25vh] font-Baloo font-normal text-[#6f6f6f] text-[17px] text-center tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
            adipiscing iaculis semper.
          </p>
          <div className="flex justify-center">
          <button className="mt-10 md:top-[295px] md:left-[45vh] relative md:absolute w-[162px] h-[49px] bg-green rounded-2xl md:rounded-lg">
              <p className="absolute w-[94px] top-[11px] left-[34px] [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                View More
              </p>
              <AiOutlineRight className="absolute w-[21px] h-[18px] top-[17px] left-[127px]" color="white" />
          </button>
          </div>
          </div>

          {/* products */}
          <div className="md:absolute md:top-[15vh]">
          <p className="relative md:absolute md:w-[163px] md:top-[80vh] top-[123vh] md:left-[110vh] font-Baloo text-[24px] font-medium text-center md:text-[38px] tracking-[0] leading-[43px]  ">
            Products
          </p>
          <p className="relative p-2 top-[124vh] md:top-[731px] md:left-[90vh] md:absolute md:w-[500px] font-Baloo font-normal text-[#6f6f6f] text-[17px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
            adipiscing iaculis semper.
          </p>
          <div className="flex justify-center">
            <button className="top-[129vh] md:absolute relative w-[164px] h-[49px] md:left-[110vh] md:top-[835px] bg-green rounded-2xl">
                <p className="absolute w-[94px] top-[11px] left-[34px] [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                  View More
                </p>
                <AiOutlineRight className="absolute w-[21px] h-[18px] top-[17px] left-[127px]" color="white" />
              </button>
            </div>
            <img
            className="top-[83vh] h-[3/4] w-full p-4 md:left-24 absolute md:relative md:w-[66vh] md:top-[67vh] md:h-full object-cover"
            alt="Rectangle"
            src={Router}
          />
          
          </div>

          {/* services */}
          <div className="md:absolute md:top-[15vh]">
          <p className="relative text-center top-[178vh] md:w-[194px] md:top-[150vh] md:left-[43vh] font-Baloo font-medium text-light-colorsblack-light text-[24px] md:text-[38px] tracking-[0] leading-[43px] whitespace-nowrap">
            Services
          </p>
          <p className="top-[179vh] p-2 md:top-[154vh] md:left-[22vh] relative md:w-[500px] font-Baloo font-normal text-[#6f6f6f] text-[17px] text-center tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
            adipiscing iaculis semper.
          </p>
          <div className="flex justify-center">
              <button className="relative top-[184vh] w-[162px] h-[49px] bg-green rounded-2xl md:top-[155vh] md:left-[24vh]">
                <p className="absolute w-[94px] top-[11px] left-[34px] font-Baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                  View More
                </p>
                <AiOutlineRight className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[117px]" color="white" />
              </button>
            </div>
              <img
            className="md:top-[1073px] w-full p-4 top-[157vh] md:left-[95vh] absolute md:w-[509px] md:h-[430px] object-cover"
            alt="Rectangle"
            src={Services}
          />
          </div>
          
        </div>
        <img className="md:w-[162vh] md:top-[320vh] md:left-[87px] absolute h-px object-cover" alt="Line" src={Line} />
        <div className="w-full md:absolute relative overflow-x-hidden top-[190vh] p-4 md:w-[162.5vh] md:top-[330vh] md:left-[10vh] grid grid-cols-2 gap-4">
          <div className="relative w-[327px] h-[302px]">
            <button className="px-4 py-2 font-Baloo rounded-full border text-green hover:bg-green hover:text-white mt-4 !h-[51px] !absolute !left-[2px] !w-[133px] !top-[246px]">
              Get started
            </button>
            <div className="absolute w-[327px] h-[234px] top-0 left-0">
              <p className="absolute w-[304px] top-0 left-0 font-Baloo font-medium text-black text-[25px] tracking-[0] leading-[32px]">
                Check your Home Fiber Coverage
              </p>
              <p className="absolute w-[322px] top-[103px] left-px font-Baloo font-normal text-[20px] tracking-[0] leading-[26px]">
                Find out if your area is Home Fiber Ready! To begin click the button below
              </p>
            </div>
            <img className="absolute md:relative h-[300px] md:top-[260px] opacity-40 md:opacity-100 right-[-160px] md:h-[60px] bottom-0 ml-10" src={Map} alt=''/>
          </div>
          <div className="relative">
            <img className="hidden md:block w-[687.53px] h-[405.44px] rounded-[10px]" src={Icon} alt="Icon 2" />
          </div>
        </div>
        <div className="md:hidden relative top-[200vh] w-full md:bottom-[-0vh]">
        <Footer/>
        </div>
        
      </div>
      <div className="hidden md:block">
      <Footer/>
      </div>
      
    </div>
  );
};
export default Products;