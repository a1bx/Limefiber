import React from 'react'
import Icon1 from '../assets/iconbox1.svg';
// import Icon2 from '../assets/iconbox2.svg';
// import Icon3 from '../assets/iconbox3.svg';

const services = () => {
  return (
    <div className='mt-20'>
      <h1 className="text-center text-xl font-extrabold">
      LimeFiber Services and Packages
      </h1>
      {/* Updated Lorem Ipsum Cards */}
      <div className="grid grid-cols-4 gap-2 p-4 mt-8 ">
        {/* Card 1 */}
        <div className="shadow-md rounded w-[200px] h-[208px]">
          <img src={Icon1} alt="Icon 1" className="w-8 h-8 mx-auto mb-2" />
          <h2 className="font-semibold text-lg text-center">Unlimited Internet</h2>
          <p className="text-sm max-w-full p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>

        <div className="shadow-md rounded w-[200px] h-[208px]">
          <img src={Icon1} alt="Icon 1" className="w-8 h-8 mx-auto mb-2" />
          <h2 className="font-semibold text-lg text-center">Unlimited Internet</h2>
          <p className="text-sm max-w-full p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>
        <div className="shadow-md rounded w-[200px] h-[208px]">
          <img src={Icon1} alt="Icon 1" className="w-8 h-8 mx-auto mb-2" />
          <h2 className="font-semibold text-lg text-center">Unlimited Internet</h2>
          <p className="text-sm max-w-full p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>
        <div className="shadow-md rounded w-[200px] h-[208px]">
          <img src={Icon1} alt="Icon 1" className="w-8 h-8 mx-auto mb-2" />
          <h2 className="font-semibold text-lg text-center">Unlimited Internet</h2>
          <p className="text-sm max-w-full p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
          </p>
        </div>    
      </div>
    </div>
  )
}

export default services
