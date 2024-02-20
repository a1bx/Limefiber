import React from "react";
import User1 from "../assets/user1.svg";
import User2 from "../assets/user2.svg";
import User3 from "../assets/user3.svg";
import User4 from "../assets/user4.svg";

const About = () => {
  return (
    <div
      name="about"
      className="p-2 mt-screen h-[1150px] md:h-[650px] relative max-w-full overflow-hidden"
    >
      <div className="text-center text-zinc-500 text-sm font-normal mb-10 font-['Baloo Da 2'] leading-7 tracking-[6.30px]">
        TESTIMONIALS
      </div>
      <h1 className="text-center text-black text-[28px] md:text-[38px] font-normal font-Baloo-Da-2 leading-7 mt-4">
        What our customers are saying about us!
      </h1>
      <div className="grid grid-row md:grid-cols-2 md:gap-y-2 md:gap-x-20 gap-5 md:ml-60 justify justify-items-center mr-40">
        <div className="w-[470px] h-[237px] pl-[35px] pr-7 pt-[35px] pb-[23px] justify-end items-start gap-[30px] inline-flex">
          <img className="w-[70px] h-[70px] rounded-[10px]" src={User1} alt=""/>
          <div className="w-[307px] relative">
            <p className="w-[230px] left-0 top-0 absolute text-[14px] font-normal font-['Baloo Da 2'] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
              laoreet dolor nec imperdiet.
            </p>
            <p className="left-0 top-[145px] absolute opacity-30  text-xs font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">
              user_12345678
            </p>
          </div>
        </div>
        <div className="w-[470px] h-[237px] relative gap-[30px]">
          <div className="w-[470px] h-[237px] left-0 top-0 absolute opacity-10 rounded-[10px] border-2 border-white" />
          <img
            className="w-[70px] h-[70px] left-[300px] md:left-[35px] top-[36px] absolute rounded-[10px]"
            src={User2}
            alt=""
          />
          <div className="h-[179px] md:left-[135px] left-[35px] p-4 top-[35px] absolute">
            <p className="w-[230px] left-0 top-0 absolute text-[14px] font-normal text-end sm:text-start font-['Baloo Da 2'] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
              laoreet dolor nec imperdiet.
            </p>
            <p className="left-0 mt-4 top-[145px] absolute opacity-30 text-xs font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">
              USER123456
            </p>
          </div>
        </div>
        {/* <div className="w-[470px] h-[237px] relative">
    <div className="w-[470px] h-[237px] left-0 top-0 absolute opacity-10 rounded-[10px] border-2 border-white" />
    <div className="h-[179px] left-[135px] top-[35px] absolute">
        <div className="w-[307px] left-0 top-0 absolute text-neutral-500 text-sm font-normal font-['Baloo Da 2'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</div>
        <div className="left-0 top-[153px] absolute opacity-30 text-neutral-500 text-sm font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">USER123456</div>
    </div>
    <img className="w-[70px] h-[70px] left-[35px] top-[36px] absolute rounded-[10px]" src={User2} alt="" />
</div> */}
        {/* <div className="w-[470px] h-[237px] pl-7 pr-[140px] pt-[47px] pb-[13px] justify-start items-start gap-[3px] inline-flex">
            <div className="w-[229px] h-[177px] relative">
              <div className="w-[207px] left-0 top-0 absolute text-right text-neutral-500 text-xs font-normal font-['Baloo Da 2'] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
                </div>
                <div className="w-[115px] left-[114px] top-[151px] absolute opacity-30 text-neutral-500 text-[10px] font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">
                  user_12345678
                  </div>
            </div>
            <img
            className="w-[70px] h-[70px] left-[350px] md:left-[35px] top-[36px] absolute rounded-[10px]"
            src={User2}
            alt=""
          />
        </div> */}
        <div className="w-[470px] h-[237px] relative">
          <div className="w-[470px] h-[237px] left-0 top-0 absolute opacity-10 rounded-[10px] border-2 border-white" />
          <div className="h-[179px] left-[135px] top-[35px] absolute">
            <div className="w-[230px] left-0 top-0 absolute text-[14px]  font-normal font-['Baloo Da 2'] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
              laoreet dolor nec imperdiet.
            </div>
            <div className="left-0 top-[145px] absolute opacity-30 text-xs font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">
              user_starlord
            </div>
          </div>
          <img
            className="w-[70px] h-[70px] left-[35px] top-[36px] absolute rounded-[10px]"
            src={User3}
            alt=""
          />
        </div>
        <div className="w-[470px] h-[237px] relative gap-[30px]">
          <div className="w-[470px] h-[237px] left-0 top-0 absolute opacity-10 rounded-[10px] border-2 border-white" />
          <img
            className="w-[70px] h-[70px] left-[300px] md:left-[35px] top-[36px] absolute rounded-[10px]"
            src={User4}
            alt=""
          />
          <div className="h-[179px] md:left-[135px] left-[35px] p-4 top-[35px] absolute">
            <p className="w-[230px] left-0 top-0 absolute text-[14px] text-end sm:text-start font-normal font-['Baloo Da 2'] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
              laoreet dolor nec imperdiet.
            </p>
            <p className="left-0 mt-4 top-[145px] absolute opacity-30 text-xs font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">
              USER123456
            </p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default About;


