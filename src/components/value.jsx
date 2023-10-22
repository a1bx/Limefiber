import React from 'react';
import Icon1 from '../assets/iconbox1.svg';
import Icon2 from '../assets/iconbox2.svg';
import Icon3 from '../assets/iconbox3.svg';
import Icon from '../assets/icon.svg';
import Map from '../assets/map.svg';

const Value = () => {
  return (
    <div className='mt-20'>
      <h1 className="text-center text-xl font-extrabold">
        LimeFiber Vision and Goals
      </h1>
      {/* Updated Lorem Ipsum Cards */}
      <div className="grid grid-cols-3 gap-1 p-4 mt-8 justify-items-center">
        {/* Card 1 */}
        <div className="shadow-md rounded w-[300px] h-[408px]">
          <img src={Icon1} alt="Icon 1" className="w-8 h-8 mx-auto mb-2" />
          <h2 className="font-semibold text-lg text-center">Unlimited Internet</h2>
          <p className="text-sm max-w-full mt-10 p-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
          <button className='ml-20 px-4 py-2 rounded-md bg-green hover:bg-green hover:text-white'>Learn More</button>
        </div>
        
        {/* Card 2 */}
        <div className="shadow-md rounded w-[300px] h-[408px]">
          <img src={Icon2} alt="Icon 2" className="w-8 h-8 mx-auto mb-2" />
          <h2 className="font-semibold text-lg text-center">Simple and Secure</h2>
          <p className="text-sm max-w-full mt-10 p-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
          <button className='ml-20 px-4 py-2 rounded-md bg-green hover:bg-green hover:text-white'>Learn More</button>
        </div>

        {/* Card 3 */}
        <div className="shadow-md rounded w-[300px] h-[408px]">
          <img src={Icon3} alt="Icon 3" className="w-8 h-8 mx-auto mb-2" />
          <h2 className="font-semibold text-lg text-center">Customer Support</h2>
          <p className="text-sm max-w-full mt-10 p-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
          <button className='ml-20 px-4 py-2 rounded-md bg-green hover:bg-green hover:text-white'>Learn More</button>
        </div>
      </div>

      {/* Grid of Content with Lorem Ipsum Paragraph and Icon */}
      <div className="grid grid-cols-2 gap-4 p-4 mt-10">
        {/* Content 1 */}
        <div className="bg-white rounded p-4">
          <h2 className="font-semibold text-lg">Check your Home Fiber Coverage</h2>
          <p className="text-sm max-w-full mt-4">
          Find out if your area is Home Fiber Ready! To begin click the button below
          </p>
          <div className='flex grid-flow-col px-2 py-2 gap-4 mt-10'>
          <button className='ml-20 px-4 py-2 rounded-full border hover:bg-green hover:text-white mt-10'>Get started</button>
          <img src={Map} alt="" />
          </div>
        </div>

        {/* Content 2 */}
        <div >
          <img src={Icon} alt="Icon 2" className="w-[687.53px] h-[405.44px] rounded-[10px]" />
           
        </div>
      </div>
    </div>
  );
};

export default Value;
