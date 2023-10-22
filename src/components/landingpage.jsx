import React from 'react'
import Logo from '../assets/logo.png'
import Learn from '../assets/learn.svg'
import People from '../assets/people.svg'

const Landingpage = () => {
  return (
    <div className="ml-2 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <img src={Logo} alt="" />
        <ul className="flex space-x-6">
          <li><a href="home" className=" hover:text-red">Home</a></li>
          <li><a href="services" className=" hover:text-red">Services</a></li>
          <li><a href="about" className=" hover:text-red">About</a></li>
          <li><a href="contact" className=" hover:text-red">Contact</a></li>
        </ul>
        <div className="space-x-4 ">
          <button className="px-4 py-2 rounded-md hover:bg-green hover:text-white">Log in</button>
          <button className="px-4 py-2 rounded-md hover:bg-green hover:text-white">Sign up</button>
        </div>
      </div>

      <div className="flex flex-col w-full lg:flex-row mt-10">
         <div>
         <div>
      <h1 className="text-5xl font-bold">We provide home fiber internet, quick and reliable!</h1>
      <p className="py-6">Our goal is to provide unlimited internet and offer a simple, stable browsing experience</p>

      <div className='flex grid-flow-col px-2 py-2 gap-4 mt-10'>
      <button className="bg-green text-white px-4 rounded-md hover:bg-green hover:text-white mt-4 py-2">Get Started</button>
      <img className="mt-4" src={Learn} alt="" /> 
      <p className='' >Learn More</p>
      </div>

        </div>
        </div> 
         <img className="w-2/3 ml-11" src={People} alt=''/>
      </div>
    </div>
  )
}

export default Landingpage
