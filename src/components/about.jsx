import React from 'react';
import User1 from '../assets/user1.svg';
import User2 from '../assets/user2.svg';
import User3 from '../assets/user3.svg';
import User4 from '../assets/user4.svg';

const About = () => {

  return (
    <div
    name='about'
     className="p-4 mt-20">
      <div className="text-center text-zinc-500 text-sm font-normal font-['Baloo Da 2'] leading-7 tracking-[6.30px]">TESTIMONIALS</div>
      <h1 className="text-center text-black text-[45px] font-normal font-['Baloo Da 2'] leading-7">What our customers are saying about us!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="w-[470px] h-[237px] pl-[35px] pr-7 pt-[35px] pb-[23px] justify-end items-start gap-[30px] inline-flex">
           <img className="w-[70px] h-[70px] rounded-[10px]" src= {User1} />
           <div className="w-[307px] relative">
            <div className="w-[307px] left-0 top-0 absolute text-neutral-500 text-lg font-normal font-['Baloo Da 2'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
            </div>
              <div className="left-0 top-[153px] absolute opacity-30 text-neutral-500 text-sm font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">user_12345678
             </div>
           </div>
        </div>
        <div className="w-[470px] h-[237px] relative">
           <div className="w-[470px] h-[237px] left-0 top-0 absolute opacity-10 rounded-[10px] border-2 border-white" />
             <div className="h-[179px] left-[135px] top-[35px] absolute">
              <div className="w-[307px] left-0 top-0 absolute text-neutral-500 text-lg font-normal font-['Baloo Da 2'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
              </div>
            <div className="left-0 top-[153px] absolute opacity-30 text-neutral-500 text-sm font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">USER123456
            </div>
           </div>
         <img className="w-[70px] h-[70px] left-[35px] top-[36px] absolute rounded-[10px]" src= {User2} />
        </div>
        <div className="w-[470px] h-[237px] relative">
            <div className="w-[470px] h-[237px] left-0 top-0 absolute opacity-10 rounded-[10px] border-2 border-white" />
            <div className="h-[179px] left-[135px] top-[35px] absolute">
              <div className="w-[307px] left-0 top-0 absolute text-neutral-500 text-lg font-normal font-['Baloo Da 2'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
              </div>
              <div className="left-0 top-[153px] absolute opacity-30 text-neutral-500 text-sm font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">user_starlord
             </div>
        </div>
    <img className="w-[70px] h-[70px] left-[35px] top-[36px] absolute rounded-[10px]" src={User3} />
</div> 
<div className="w-[470px] h-[237px] relative">
    <div className="w-[470px] h-[237px] left-0 top-0 absolute opacity-10 rounded-[10px] border-2 border-white" />
    <div className="h-[179px] left-[135px] top-[35px] absolute">
        <div className="w-[307px] left-0 top-0 absolute text-neutral-500 text-lg font-normal font-['Baloo Da 2'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</div>
        <div className="left-0 top-[153px] absolute opacity-30 text-neutral-500 text-sm font-bold font-['Baloo Da 2'] uppercase leading-relaxed tracking-widest">user_222222</div>
    </div>
    <img className="w-[70px] h-[70px] left-[35px] top-[36px] absolute rounded-[10px]" src={User4} />
</div>
    </div>       
      </div>
  );
};

export default About;

