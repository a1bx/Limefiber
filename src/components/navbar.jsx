import React,{useState} from 'react'
import Logo from '../assets/logo.png';
import NavLinks from './navlinks';
import { Link } from "react-scroll";
import ProfileIcon from '../assets/profileIcon.svg';
import Menu from '../assets/menu.svg';

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const links = [
        {
          id: '/',
          link: "Home",
        },
        {
          id: 'Products',
          link: "Products",
        },
        {
          id: 3,
          link: "About Us",
        },
        {
          id: 4,
          link: "Contacts",
        },
      ];
  return (
    <div className="md:ml-20 ml-10 mx-auto flex justify-between items-center max-w-full overflow-x-hidden">
      <img src={Logo} alt="" className="w-[130px] md:w-[150px] mt-4" />
      <div className="ml-[300px] gap-8 mx-auto flex justify-between items-center hidden md:block">
        <ul className="flex space-x-6">
          {links.map(({ id, link }) => (
            <li key={id} className="hover:text-red cursor-pointer">
              <Link to={`/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="hover:text-red"></div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <NavLinks
                key={id}
                link={link}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              />
            ))}
          </ul>
        )}
      </div>
      <div className="mr-10 hidden md:block">
        <button className="px-4 py-2 rounded-md hover:bg-green hover-text-white">
          Log in
        </button>
        <button className="px-4 py-2 rounded-md bg-green hover:bg-green hover-text-white text-white">
          Sign up
        </button>
      </div>
      <div className="mr-10 md:hidden flex gap-10">
        <img src={ProfileIcon} alt="" />
        <img src={Menu} alt="" />
        {/* <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          width="24"
          height="24"
          color="#000000"
        >
          <defs>
            <style>{`.cls-6374f8d9b67f094e4896c670-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}`}</style>
          </defs>
          <circle
            className="cls-6374f8d9b67f094e4896c670-1"
            cx="12"
            cy="7.25"
            r="5.73"
          ></circle>
          <path
            className="cls-6374f8d9b67f094e4896c670-1"
            d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
          ></path>
        </svg> */}
        {/* <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          width="24"
          height="24"
          color="#000000"
        >
          <defs>
            <style>{`.cls-6374f8d9b67f094e4896c63e-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}`}</style>
          </defs>
          <line
            className="cls-6374f8d9b67f094e4896c63e-1"
            x1="0.5"
            y1="2.42"
            x2="23.5"
            y2="2.42"
          ></line>
          <line
            className="cls-6374f8d9b67f094e4896c63e-1"
            x1="0.5"
            y1="12"
            x2="23.5"
            y2="12"
          ></line>
          <line
            className="cls-6374f8d9b67f094e4896c63e-1"
            x1="0.5"
            y1="21.58"
            x2="23.5"
            y2="21.58"
          ></line>
        </svg> */}
      </div>
    </div>
  );
}

export default Navbar
