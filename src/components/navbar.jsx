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
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div className="hidden text-red text-lg font-normal font-['Baloo Da 2'] leading-7">
          Home
        </div>
        <div className="md:hidden w-80 h-[692px] relative bg-white rounded-[10px]">
          <div className="w-72 h-[0px] left-[16px] top-[480px] absolute border border-zinc-300"></div>
          <div className="w-[129px] h-[460px] left-[16px] top-[119px] absolute">
            <div className="left-0 top-[50px] absolute">
              <a
                href="#products"
                className="text-black text-xl font-normal font-['Baloo Da 2'] leading-relaxed"
              >
                Products
              </a>
            </div>
            <div className="left-0 top-[100px] absolute">
              <a
                href="about"
                className="text-black text-xl font-normal font-['Baloo Da 2'] leading-relaxed"
              >
                About
              </a>
            </div>
            <div className="left-0 top-[150px] absolute text-black text-xl font-normal font-['Baloo Da 2'] leading-relaxed">
              <a href="blog">Blog</a>
            </div>
            <div className="left-0 top-[196px] absolute text-black text-xl font-normal font-['Baloo Da 2'] leading-relaxed">
              Help
            </div>
            <div className="left-0 top-[246px] absolute text-black text-xl font-normal font-['Baloo Da 2'] leading-relaxed">
              Contact
            </div>
            <div className="left-0 top-[296px] absolute text-black text-xl font-normal font-['Baloo Da 2'] leading-relaxed">
              Search
            </div>
            <div className="left-0 top-0 absolute text-black text-xl font-normal font-['Baloo Da 2'] leading-relaxed">
              Home
            </div>
            <div className="w-[129px] h-[26px] left-0 top-[385px] absolute">
              <div className="left-[30px] top-0 absolute text-black text-lg font-normal font-['Baloo Da 2'] leading-relaxed">
                My account
              </div>
              <img
                className="w-5 h-5 left-[-0px] top-[1px] absolute border border-white"
                src={Account}
                alt=""
              />
            </div>
            <div className="w-[92px] h-[26px] left-0 top-[434px] absolute">
              <div className="left-[30px] top-0 absolute text-black text-lg font-normal font-['Baloo Da 2'] leading-relaxed">
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
              className="left-[30px] w-72 h-8 top-[6px] absolute text-sm font-normal font-['Baloo Da 2'] leading-tight border-none bg-gray rounded"
              type="text"
              placeholder="Search"
            />
            <img
              className="w-3 h-3 left-[10px] top-[10px] absolute"
              src={Search}
              alt=""
            />
          </div>
        </div>
        <div className="w-[188px] h-[49px] md:ml-[512px] top-[650px] p-6 ml-3 md:top-5 md:p-2 absolute">
          <button className="left-0 top-[10px] absolute text-black text-lg font-normal font-['Baloo Da 2'] leading-7 md:cursor-pointer">
            Log in
          </button>
          {/* ">
            <div className="w-[119px] h-[49px] left-0 top-0 absolute " />
            <button className="left-[30px] top-[10px] absolute text-white text-lg font-normal font-['Baloo Da 2'] leading-7">Sign up</button>
            </div> */}
          <button className="w-[119px] h-[49px] left-[69px] top-0 absolute bg-green cursor-pointer rounded-[10px] text-white">
            sign up
          </button>
        </div>
      </div>
      <div className="w-screen hidden h-[49px] md:block relative">
        <div className="h-[29px] left-0 top-[15px] absolute">
          <div className="left-0 top-0 absolute hover:text-red cursor-pointer text-lg font-normal font-['Baloo Da 2'] leading-7">
            <a href="#home">Home</a>
          </div>
          <div className="left-[87px] top-0 absolute text-black hover:text-red cursor-pointer text-lg font-normal font-['Baloo Da 2'] leading-7">
            <a href="#services">Services</a>
          </div>
          <div className="left-[199px] top-0 absolute text-black hover:text-red cursor-pointer text-lg font-normal font-['Baloo Da 2'] leading-7">
            <a href="#about">About Us</a>
          </div>
          <div className="left-[307px] top-0 absolute text-black hover:text-red cursor-pointer text-lg font-normal font-['Baloo Da 2'] leading-7">
            <a href="#contacts">Contacts</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;