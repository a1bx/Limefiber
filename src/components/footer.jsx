import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='mt-20 justify-between'>
      <footer className="p-2 text-base-content rounded flex">
      <img src={Logo} alt="" />
      <div className="w-[369px] h-[32.17px] text-neutral-500 text-base font-normal font-['Baloo Da 2'] leading-relaxed mt-20">© 2023 LimeFiber. All rights reserved.</div>
        <div className="flex gap-4 ">
          <a href='contact' className="link link-hover hover:text-red">CONTACT</a>
          <a href='about' className="link link-hover hover:text-red">ABOUT US</a>
          <div className="text-neutral-500 text-base font-normal font-['Baloo Da 2'] leading-[27px] hover:text-red">TERMS OF SERVICES</div>
        </div>
        
        
        <div>
        
          <div className="flex gap-1 mt-10">
            
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M6.179 2h11.642c2.589 0 4.179 2.344 4.179 5v12c0 2.656-1.59 5-4.179 5h-11.642c-2.588 0-4.179-2.344-4.179-5v-12c0-2.656 1.591-5 4.179-5zm5.821 2.67c-2.4 0-4.464 2.12-4.464 5.072s2.065 5.072 4.464 5.072 4.464-2.12 4.464-5.072-2.064-5.072-4.464-5.072zm0 1.223c1.922 0 3.5 1.713 3.5 3.849s-1.578 3.849-3.5 3.849-3.5-1.713-3.5-3.849 1.578-3.849 3.5-3.849zm-3.956 8.123h1.862v-6.166h-1.862v6.166zm-.93-6.67h3.722c.515 0 .95-.406.95-.945 0-.539-.435-.945-.95-.945h-3.722c-.515 0-.95.406-.95.945 0 .539.435.945.95.945z"></path></svg></a>
          </div>
        </div>
        <div className=" text-base font-normal font-['Baloo Da 2'] leading-[27px]">Subscribe to our newsletters</div>
        <div className="w-[396px] h-[0px] border border-black"></div>
      </footer>
    </div>
  );
};

export default Footer;

