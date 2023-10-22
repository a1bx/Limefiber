import React from 'react'
import Contact from '../assets/contact.svg'

const contact = () => {
  return (
    <div className='flex'>
        <div className='flex gap-3 p-4 relative'>
        <img className="w-[659.95px] h-[605.92px]" src={Contact}/>
        
        </div>
        <div className="w-1/2 p-8 mt-10">

        <div className="text-center text-sm mt-10 font-['Baloo Da 2'] leading-7 tracking-[6.30px]">SUPPORT & CONTACT  
        </div>
           <div>
            <span className="text-black text-[45px] font-semibold font-['Baloo Da 2'] leading-[47.83px]">Contact LimeFiber<br/>
            </span>
            <span className="text-black text-[40px] font-normal font-['Baloo Da 2'] leading-[47.83px]">The best Home Fiber service
           </span>
         </div>
         <div className="mt-4 w-[515px] h-[82px] text-black text-opacity-70 text-[17px] font-normal font-['Baloo Da 2'] leading-[24.87px] tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
         </div>
         <div className="w-[515px] h-[82px] text-black text-opacity-70 text-[17px] font-normal font-['Baloo Da 2'] leading-[24.87px] tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.
         </div>
         <button className="w-[207px] h-[66px] bg-green text-white rounded-[10px]" >Explore more</button>
        </div>
    </div>
  )
}

export default contact
