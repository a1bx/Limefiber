import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Banner3 from '../assets/banner3.svg';
import ProfilePic1 from '../assets/user1.svg';
import ProfilePic2 from '../assets/user4.svg';
import { BsFillReplyFill } from "react-icons/bs";


const Blog = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rememberEmail: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, send the data to a backend server
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      rememberEmail: false
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-4">
        <h1 className="md:text-3xl text-xl font-bold text-center mb-6 font-Baloo">Trendy Topics on Home Fiber Technology</h1>
        <img src={Banner3} alt="Blog" className="mb-4 w-full object-cover rounded-lg md:w-screen md:h-[69vh] lg:px-20" />
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-lg font-semibold mb-2 font-Baloo">Title of the Blog</div>
            <div className="text-gray-600 mb-4 font-Baloo">Author Name</div>
            <p className="text-gray-800 font-Baloo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit arcu quis nisi finibus, vel sollicitudin nisi tincidunt. Integer vestibulum interdum ligula, nec varius felis interdum eu. Sed sollicitudin, ligula eu convallis consequat, arcu elit vestibulum mi, a commodo nulla tellus vel purus. Donec sollicitudin bibendum ex, ac tincidunt orci fermentum sit amet. Nulla facilisi. Nullam non felis dui.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-Baloo">Comments</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <img src={ProfilePic1} alt="Profile 1" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold font-Baloo">John Doe</div>
                  <div className='justify-item-end ml-20 mb-10' ><BsFillReplyFill /></div>
                  <p className="text-gray-800 font-Baloo">Great blog post!</p>
                </div>
              </div>
              <div className="ml-12 flex space-x-4">
                <img src={ProfilePic2} alt="Profile 2" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold font-Baloo">Jane Smith</div>
                  <p className="text-gray-800 font-Baloo">Thanks, John! I agree.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold font-Baloo mb-4">Leave a Comment</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2  border-bottom rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 font-Baloo rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 font-Baloo rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Phone"
              />
              <label className="ml-4 flex items-center">
                <input
                  type="checkbox"
                  name="rememberEmail"
                  checked={formData.rememberEmail}
                  onChange={handleChange}
                  className="form-checkbox h-3 w-3 text-green"
                />
                <span className="ml-2 font-Baloo text-xs">Remember Email</span>
              </label>
              <button
                type="submit"
                className="bg-green text-white font-semibold py-2 px-4 rounded hover:bg-lightgreen font-Baloo focus:outline-none focus:bg-green"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
