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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="overflow-hidden w-[1440px] h-[3604px] relative">
        <img className="w-[1248px] top-[2709px] left-[87px] absolute h-px object-cover" alt="Line" src={Line} />
        <div className="relative md:absolute w-[1128px] h-[1503px] top-[1135px] left-[179px]">
          <div className="absolute w-[163px] top-[661px] left-[760px] [font-family:'Baloo_Da_2-Medium',Helvetica] font-medium text-light-colorsblack-light text-[38px] tracking-[0] leading-[43px] whitespace-nowrap">
            Products
          </div>
          <div className="absolute w-[194px] top-[1168px] left-[143px] [font-family:'Baloo_Da_2-Medium',Helvetica] font-medium text-light-colorsblack-light text-[38px] tracking-[0] leading-[43px] whitespace-nowrap">
            Services
          </div>
          <p className="absolute w-[500px] top-[168px] left-0 [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-[#6f6f6f] text-[17px] text-center tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
            adipiscing iaculis semper.
          </p>
          <p className="top-[731px] left-[605px] absolute w-[500px] [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-[#6f6f6f] text-[17px] text-center tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
            adipiscing iaculis semper.
          </p>
          <p className="top-[1241px] left-0 absolute w-[500px] [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-[#6f6f6f] text-[17px] text-center tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
            adipiscing iaculis semper.
          </p>
          <div className="absolute w-[164px] h-[49px] top-[1345px] left-[144px]">
            <div className="absolute w-[81px] top-[13px] left-[30px] [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-[#75a774] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              View more
            </div>
            <button className="all-[unset] box-border absolute w-[164px] h-[49px] top-0 left-0">
              <div className="relative w-[162px] h-[49px] bg-[#75a774] rounded-[10px]">
                <div className="absolute w-[94px] top-[11px] left-[34px] [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                  View More
                </div>
                <AiOutlineRight className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[117px]" color="white" />
              </div>
            </button>
            <AiOutlineRight className="!top-[19px] !left-[133px] !absolute !w-[21px] !h-[18px]" color="#75A774" />
          </div>
          <div className="absolute w-[164px] h-[49px] top-[835px] left-[750px]">
            <button className="all-[unset] box-border absolute w-[164px] h-[49px] top-0 left-0">
              <div className="relative w-[162px] h-[49px] bg-[#75a774] rounded-[10px]">
                <div className="absolute w-[94px] top-[11px] left-[34px] [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                  View More
                </div>
                <AiOutlineRight className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[117px]" color="white" />
              </div>
            </button>
            <AiOutlineRight className="!top-[20px] !left-[126px] !absolute !w-[21px] !h-[18px]" color="#75A774" />
          </div>
          <img
            className="top-0 left-[601px] absolute w-[509px] h-[430px] object-cover"
            alt="Rectangle"
            src={Bundled}
          />
          <img
            className="top-[536px] left-0 absolute w-[509px] h-[430px] object-cover"
            alt="Rectangle"
            src={Router}
          />
          <img
            className="top-[1073px] left-[605px] absolute w-[509px] h-[430px] object-cover"
            alt="Rectangle"
            src={Services}
          />
          <div className="absolute w-[320px] top-[95px] left-[95px] [font-family:'Baloo_Da_2-Medium',Helvetica] font-medium text-light-colorsblack-light text-[38px] tracking-[0] leading-[43px] whitespace-nowrap">
            Bundled packages
          </div>
          <button className="all-[unset] box-border absolute w-[164px] h-[49px] top-[295px] left-[169px]">
            <div className="relative w-[162px] h-[49px] bg-[#75a774] rounded-[10px]">
              <div className="absolute w-[94px] top-[11px] left-[34px] [font-family:'Baloo_Da_2-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                View More
              </div>
              <AiOutlineRight className="absolute w-[21px] h-[18px] top-[16px] left-[117px]" color="white" />
            </div>
          </button>
        </div>
        <div className="relative h-[50vh] md:h-[90vh] bg-cover bg-center flex items-center text-white">
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
    </div>
    <div className="absolute inset-0">
        <img
        src={slides[currentSlide]}
        className="object-cover w-screen h-full p-2"
        alt="Banner"
        />
    </div>
    {/* < className="mt-80 flex items-center justify-center absolute ml-40"> */}
    <button onClick={handlePrev} className="bg-white rounded h-20 bottom-[40vh] p-2 right-[170vh] mt-80 flex items-center justify-center absolute ml-40">
        <AiOutlineLeft style={{ fontSize: "2em", color: "#75A774" }} />
    </button>
    <button onClick={handleNext} className="bg-white rounded h-20 bottom-[40vh] p-2 left-[150vh] mt-80 flex items-center justify-center absolute ml-40">
        <AiOutlineRight style={{ fontSize: "2em", color: "#75A774" }} />
    </button>

</div>
        <div className="absolute w-[1170px] top-[2796px] left-[144px] grid grid-cols-2 gap-4">
          <div className="relative w-[327px] h-[302px]">
            <button className="px-4 py-2 font-Baloo rounded-full border text-green hover:bg-green hover:text-white mt-4 !h-[51px] !absolute !left-[2px] !w-[133px] !top-[246px]">
              Get started
            </button>
            <div className="absolute w-[327px] h-[234px] top-0 left-0">
              <p className="absolute w-[304px] top-0 left-0 font-Baloo_Da_2-Medium font-medium text-black text-[25px] tracking-[0] leading-[32px]">
                Check your Home Fiber Coverage
              </p>
              <p className="absolute w-[322px] top-[103px] left-px font-Baloo_Da_2-Regular font-normal text-[#00000094] text-[20px] tracking-[0] leading-[26px]">
                Find out if your area is Home Fiber Ready! To begin click the button below
              </p>
            </div>
            <img className="absolute w-[67px] h-[68px] top-[234px] left-[200px] object-cover cursor-pointer" src={Map} />
          </div>
          <div className="relative">
            <img className="w-[687.53px] h-[405.44px] rounded-[10px]" src={Icon} alt="Icon 2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;