import React from 'react';
import User1 from '../assets/user1.svg';

const About = () => {

  return (
    <div className="p-4 mt-20">
      <h1 className="text-3xl font-extrabold text-center mb-8">What our customers are saying about us!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div   className="bg-white shadow-md rounded p-4">
            <img
              src={User1}
              alt= ''
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <h2 className="font-semibold text-lg text-center"> Elon gated </h2>
            <p className="text-sm max-w-full mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet. </p>
          </div>
          <div   className="bg-white shadow-md rounded p-4">
            <img
              src={User1}
              alt= ''
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <h2 className="font-semibold text-lg text-center"> Elon gated </h2>
            <p className="text-sm max-w-full mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet. </p>
          </div>
          <div   className="bg-white shadow-md rounded p-4">
            <img
              src={User1}
              alt= ''
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <h2 className="font-semibold text-lg text-center"> Elon gated </h2>
            <p className="text-sm max-w-full mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet. </p>
          </div>
          <div   className="bg-white shadow-md rounded p-4">
            <img
              src={User1}
              alt= ''
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <h2 className="font-semibold text-lg text-center"> Elon gated </h2>
            <p className="text-sm max-w-full mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet. </p>
          </div>
      </div>
    </div>
  );
};

export default About;

