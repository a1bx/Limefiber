import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from './navbar';
import Search from '../assets/search.svg';
import Footer from './footer';
// import { AIOutlineRight } from 'react-icons/ai';
import Livechat from '../assets/livechat.svg';

const ContactPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-72 h-8 left-[16px] relative md:hidden">
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
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className='font-Baloo font-bold text-2xl'>Support & Contact</p>
          <hr className="my-3 w-1/3 border border-gray" />
          <h2 className="text-xl mb-4 font-Baloo">Contact Information</h2>
          <div className=" mb-4">
            <FaMapMarkerAlt className="text-gray-600 mr-2" />
            <p className="font-black mb-4 font-Baloo">Address</p>
            <p className='text-start mt-4'>0000 Road,  Nairobi 00100, Kenya</p>
            {/* <input></input> */}
          </div>
          <div className="mb-4">
            <FaPhone className="text-gray-600 mr-2" />
            <p className="font-black mb-4 font-Baloo">Phone</p>
            <p>Mobile: 0000 1111 2222</p>
            <p>Hotline: 0000 3333 4444</p>
          </div>
          <div className="mt-4">
            <FaEnvelope className="text-gray-600 mr-2" />
            <p className="font-black mb-4 font-Baloo">Email Address</p>
            <p>abc@gmail.com</p>
            <p>giftly_xyz@gmail.com</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 font-Baloo">FAQs</h2>
          <div className="mb-4 shadow-lg rounded-md p-4">
            <h3 className="text-lg  mb-2 font-semibold font-Baloo">What is Limefiber?</h3>
            {/* <AiOutlineDown/> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.</p>
            {/* <AIOutlineRight/> */}
          </div>
          <div className='mb-4 shadow-lg rounded-md p-4'>
            <h3 className="text-lg font-semibold mb-2 font-Baloo">Is Limefiber the best </h3>
            <p>Home Service fiber?</p>
          </div>
        </div>
      </div>
      <div className="mt-8 ml-4">
        <h2 className="text-xl font-bold mb-4 font-Baloo">Live Chat</h2>
        {/* live chat*/}
        <div className='flex justify-center'>
        <img src={Livechat} alt=""/>
        </div>
        <p className='text-xs mt-10 mb-4'>Question? Complaints? Concerns?</p>
        <hr className="my-3 w-1/3 border border-gray mb-4" />
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
