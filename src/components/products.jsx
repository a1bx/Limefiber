import React from "react";
import { Carousel } from "@material-tailwind/react";
import Banner2 from "../assets/banner2.svg";
// import Banner1 from "../assets/banner.svg";
// import Banner3 from "../assets/banner3.svg";
import WhiteArrow from "../assets/arrowright.svg"
import coverage from "../assets/icon.svg";
import Map from "../assets/map.svg";
// import Line14 from "../assets/line-14-1.svg";
// import Line2 from "../assets/services-carousel-line.png";
import Rectangle11 from "../assets/router.svg";
import Rectangle13 from "../assets/banner2.svg";
// import Rectangle15 from "../assets/rectangle-15.png";

function Products () {
    return (
        <>
            {/* <Navbar/> */}
            <Carousel className="top-[30px]">
                <div>
                    <img src={Banner2} alt="carousel 1" className="h-full w-full" />
                    <div className="absolute top-[242px] left-[747px] font-baloo font-medium text-white text-[45px] tracking-[0] leading-[43px] whitespace-nowrap">
                        LimeFiber Products and Services
                    </div>
                    {/* <div className="w-[419px] h-px">
                        <img className="absolute w-[419px] h-px top-[322px] left-[847px] object-cover" alt="Line" src={Line2} />
                    </div> */}
                    <div className="w-[587px] h-[117px]">
                        <p className="absolute w-[587px] top-[350px] left-[780px] font-baloo font-normal text-white text-[23px] text-center tracking-[0] leading-[normal] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                    </div>
                    <button className="absolute w-[184px] h-[49px] top-[485px] left-[985px] all-[unset] border border-solid border-white rounded-[8px]">
                        <div className="relative w-[182px] h-[49px] ">
                            <div className="absolute w-[104px] top-[11px] left-[34px] font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                                Explore More
                            </div>
                            <img
                                className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[142px]"
                                alt="white-arrow"
                                src={WhiteArrow}
                            />
                        </div>
                    </button>
                </div>

                <div>
                    <img src={Banner2} alt="carousel 2" className="h-full w-full" />
                    <div className="absolute top-[242px] left-[747px] font-baloo font-medium text-white text-[45px] tracking-[0] leading-[43px] whitespace-nowrap">
                        LimeFiber Products and Services
                    </div>
                    {/* <div className="w-[419px] h-px">
                        <img className="absolute w-[419px] h-px top-[322px] left-[847px] object-cover" alt="Line" src={Line2} />
                    </div> */}
                    <div className="w-[587px] h-[117px]">
                        <p className="absolute w-[587px] top-[350px] left-[780px] font-baloo font-normal text-white text-[23px] text-center tracking-[0] leading-[normal] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                    </div>
                    <button className="absolute w-[184px] h-[49px] top-[485px] left-[985px] all-[unset] border border-solid border-white rounded-[8px]">
                        <div className="relative w-[182px] h-[49px] ">
                            <div className="absolute w-[104px] top-[11px] left-[34px] font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                                Explore More
                            </div>
                            <img
                                className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[142px]"
                                alt="white-arrow"
                                src={WhiteArrow}
                            />
                        </div>
                    </button>
                </div>

                <div>
                    <img src={Banner2} alt="carousel 3" className="h-full w-full" />
                    <div className="absolute top-[242px] left-[747px] font-baloo font-medium text-white text-[45px] tracking-[0] leading-[43px] whitespace-nowrap">
                        LimeFiber Products and Services
                    </div>
                    {/* <div className="w-[419px] h-px">
                        <img className="absolute w-[419px] h-px top-[322px] left-[847px] object-cover" alt="Line" src={Line2} />
                    </div> */}
                    <div className="w-[587px] h-[117px]">
                        <p className="absolute w-[587px] top-[350px] left-[780px] font-baloo font-normal text-white text-[23px] text-center tracking-[0] leading-[normal] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                    </div>
                    <button className="absolute w-[184px] h-[49px] top-[485px] left-[985px] all-[unset] border border-solid border-white rounded-[8px]">
                        <div className="relative w-[182px] h-[49px] ">
                            <div className="absolute w-[104px] top-[11px] left-[34px] font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                                Explore More
                            </div>
                            <img
                                className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[142px]"
                                alt="white-arrow"
                                src={WhiteArrow}
                            />
                        </div>
                    </button>
                </div>
            </Carousel>

            <div className="absolute w-[1128px] h-[1503px] top-[1135px] left-[179px]">
                <div className="absolute w-[320px] top-[95px] left-[95px] font-baloo font-medium text-light-colorsblack-light text-[38px] tracking-[0] leading-[43px] whitespace-nowrap">
                    Bundled packages
                </div>
                <p className="absolute w-[500px] top-[168px] left-0  font-baloo font-normal text-[#6f6f6f] text-[17px] text-center tracking-[0] leading-[normal]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
                    adipiscing iaculis semper.
                </p>
                <img
                    className="top-0 left-[601px] absolute w-[509px] h-[430px] object-cover"
                    alt="Rectangle"
                    src={Rectangle11}
                />
                <button className="absolute w-[164px] h-[49px] top-[285px] left-[159px] all-[unset] box-border">
                    <div className="relative w-[172px] h-[49px] bg-[#75a774] rounded-[10px]">
                        <div className="absolute w-[94px] top-[11px] left-[34px] font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                            View More
                        </div>
                        <img
                            className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[122px]"
                            alt="white-arrow"
                            src={WhiteArrow}
                        />
                    </div>
                </button>

                <div className="absolute w-[163px] top-[661px] left-[790px] font-baloo font-medium text-light-colorsblack-light text-[38px] tracking-[0] leading-[43px] whitespace-nowrap">
                    Products
                </div>
                <p className="top-[731px] left-[615px] absolute w-[500px] font-baloo font-normal text-[#6f6f6f] text-[17px] text-center tracking-[0] leading-[normal]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
                    adipiscing iaculis semper.
                </p>
                <div className="absolute w-[164px] h-[49px] top-[555px] left-[620px]">
                    <button className="absolute w-[164px] h-[49px] top-[295px] left-[159px] all-[unset] box-border">
                        <div className="relative w-[172px] h-[49px] bg-[#75a774] rounded-[10px]">
                            <div className="absolute w-[94px] top-[11px] left-[34px] font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                                View More
                            </div>
                            <img
                                className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[122px]"
                                alt="white-arrow"
                                src={WhiteArrow}
                            />
                        </div>
                    </button>
                </div>
                <img
                    className="top-[536px] left-0 absolute w-[509px] h-[430px] object-cover"
                    alt="Rectangle"
                    src={Rectangle13}
                />

                <div className="absolute w-[194px] top-[1168px] left-[185px] font-baloo font-medium text-light-colorsblack-light text-[38px] tracking-[0] leading-[43px] whitespace-nowrap">
                    Services
                </div>
                <p className="top-[1241px] left-0 absolute w-[500px] font-baloo font-normal text-[#6f6f6f] text-[17px] text-center tracking-[0] leading-[normal]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum
                    adipiscing iaculis semper.
                </p>
                <button className="absolute w-[164px] h-[49px] top-[1365px] left-[165px] all-[unset] box-border">
                    <div className="relative w-[172px] h-[49px] bg-[#75a774] rounded-[10px]">
                        <div className="absolute w-[94px] top-[11px] left-[34px] font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                            View More
                        </div>
                        <img
                            className="!absolute !w-[21px] !h-[18px] !top-[16px] !left-[122px]"
                            alt="white-arrow"
                            src={WhiteArrow}
                        />
                    </div>
                </button>
                {/* <img
                    className="top-[1073px] left-[605px] absolute w-[509px] h-[430px] object-cover"
                    alt="Rectangle"
                    src={Rectangle15}
                /> */}
            </div>

            {/* <img className="w-[1248px] top-[2709px] left-[87px] absolute h-px object-cover" alt="Line" src={Line14}/> */}
            <div className="bg-white flex flex-row justify-center w-full">
                <div className="bg-white overflow-hidden w-[1440px] ">
                    <div className="absolute w-[1170px] h-[405px] top-[2787px] left-[160px]">
                        <img className="absolute w-[688px] h-[405px] top-0 left-[482px]" alt="Coverage" src={coverage}/>
                        <button className="!h-[51px] !absolute !left-[2px] !w-[133px] !top-[320px] text-[#75a774] rounded-[100px] border-2 border-solid border-[#75a774] hover:bg-[#75a774] hover:text-white font-baloo text-lg">Get Started</button>
                        <div className="w-[327px] h-[234px] top-[74px] absolute left-0">
                            <p className="absolute w-[304px] top-0 left-0 font-baloo font-medium text-black text-[25px] tracking-[0] leading-[32px]">
                                Check your Home Fiber Coverage
                            </p>
                            <p className="absolute w-[322px] top-[103px] left-px font-baloo font-normal text-[#00000094] text-[20px] tracking-[0] leading-[26px]">
                                Find out if your area is Home Fiber Ready! To begin click the button below
                            </p>
                        </div>

                    </div>
                    <img
                        className="absolute w-[67px] h-[68px] top-[3095px] left-[372px] object-cover"
                        alt="Map"
                        src={Map}
                    />
                </div>
            </div>

        </>
    )
}

export default Products;