import React, { useState } from 'react';
import Menu from '../assets/menu.svg';
import Logo from '../assets/logo.png';
import ProfileIcon from '../assets/profileIcon.svg';
import Logout from '../assets/logout.svg';
import Search from '../assets/search.svg';
import Account from '../assets/account.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 md:flex ">
      <div className="container flex relative items-center justify-between gap-10">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="logo"
            className="w-[82px] h-[35px] md:w-[292px] md:h-[130px] md:ml-10 md:p-2 md:mr-[100px] cursor-pointer relative"
          />
        </div>
        <img src={ProfileIcon} alt="" className="md:hidden" />
        <div className="md:hidden flex gap-10">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <img src={Menu} alt="" />
          </button>
        </div>
      </div>
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`}
      >
        {/* <div className="hidden text-red text-lg font-normal font-['Baloo Da 2'] leading-7">
          Home
        </div> */}
        <div className="md:hidden w-80 h-[692px] relative bg-white rounded-[10px]">
          <div className="w-72 h-[0px] left-[16px] top-[480px] absolute border border-zinc-300"></div>
          <div className="w-[129px] h-[460px] left-[16px] top-[119px] absolute">
            <div className="left-0 top-[50px] absolute">
              <a
                href="products"
                className="text-black text-xl font-normal font-Baloo leading-relaxed"
              >
                Products
              </a>
            </div>
            <div className="left-0 top-[100px] absolute">
              <a
                href="about"
                className="text-black text-xl font-normal font-Baloo leading-relaxed"
              >
                About
              </a>
            </div>
            <div className="left-0 top-[150px] absolute text-black text-xl font-normal font-Baloo leading-relaxed">
              <a href="blogs">Blog</a>
            </div>
            <div className="left-0 top-[196px] absolute text-black text-xl font-normal font-Baloo leading-relaxed">
              Help
            </div>
            <div className="left-0 top-[246px] absolute text-black text-xl font-normal font-Baloo leading-relaxed">
            <a
                href="contactpage"
                className="text-black text-xl font-normal font-Baloo leading-relaxed"
              >
                Contact
              </a>
            </div>
            <div className="left-0 top-[296px] absolute text-black text-xl font-normal font-Baloo leading-relaxed">
              Search
            </div>
            <div className="left-0 top-0 absolute text-black text-xl font-normal font-Baloo leading-relaxed">
            <a
                href="/"
                className="text-black text-xl font-normal font-Baloo leading-relaxed"
              >
                Home
              </a>
            </div>
            <div className="w-[129px] h-[26px] left-0 top-[385px] absolute">
              <div className="left-[30px] top-0 absolute text-black text-lg font-normal font-Baloo leading-relaxed">
                My account
              </div>
              <img
                className="w-5 h-5 left-[-0px] top-[1px] absolute border border-white"
                src={Account}
                alt=""
              />
            </div>
            <div className="w-[92px] h-[26px] left-0 top-[434px] absolute">
              <div className="left-[30px] top-0 absolute text-black text-lg font-normal font-Baloo leading-relaxed">
                Logout
              </div>
              <img
                className="w-[18px] h-[18px] left-0 top-[4px] absolute border border-white"
                src={Logout}
                alt=""
              />
            </div>
          </div>
          <div className="w-[53.76px] h-4 left-[250px] top-[16px] absolute"></div>
          <div className="w-72 h-8 left-[16px] top-[48px] absolute">
            {/* <div className="w-72 h-8 left-0 top-0 absolute bg-gray rounded" /> */}
            <input
              className="left-[30px] w-72 h-8 top-[6px] absolute text-sm font-normal font-Baloo leading-tight border-none bg-gray rounded"
              type="text"
              placeholder="Search"
            />
            <img
              className="w-3 h-3 left-[10px] top-[1rem] absolute"
              src={Search}
              alt=""
            />
          </div>
        </div>
        <div className="hidden md:flex space-x-8 justify-center md:mr-10">
          <a href="/" className="text-black hover:text-red text-lg font-normal font-Baloo">Home</a>
          <a href="#services" className="text-black hover:text-red text-lg font-normal font-Baloo">Services</a>
          <a href="#about" className="text-black hover:text-red text-lg font-normal font-Baloo">About Us</a>
          <a href="#contacts" className="text-black hover:text-red text-lg font-normal font-Baloo">Contacts</a>
        </div>
        <div className="hidden md:flex space-x-4 items-center justify-center ml-auto">
          <button className="text-black hover:text-red text-lg mb-6 w-[60px] h-[50px] font-normal font-Baloo">Log in</button>
          <button className="bg-green w-[100px] h-[50px] mb-6 text-white rounded-[10px] px-4 py-2 font-Baloo hover:text-red">Sign up</button>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;