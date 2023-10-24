import React,{useState} from 'react'
import Logo from '../assets/logo.png';
import NavLinks from './navlinks';
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const links = [
        {
          id: 1,
          link: "Home",
        },
        {
          id: 2,
          link: "Services",
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
    
    <div className="ml-20  mx-auto flex justify-between items-center">
      <img src={Logo} alt="" className='' />
        <div className="ml-[500px] gap-8 mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
            {links.map(({ id, link }) => (
              <li key={id} className="hover:text-red cursor-pointer">
                <Link to={`/${link}`}>{link}</Link>
              </li>
            ))} 
            </ul>
            <div
             onClick={() => setNav(!nav)}
             className="hover:text-red"
            >
            </div>
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
            <div className="mr-10">
          <button className="px-4 py-2 rounded-md hover:bg-green hover-text-white">Log in</button>
          <button className="px-4 py-2 rounded-md bg-green hover:bg-green hover-text-white text-white">Sign up</button>
        </div>
      </div>
  )
}

export default Navbar
