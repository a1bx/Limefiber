import React from 'react'
import Contact from '../assets/contact.svg'
import Vector9 from '../assets/vector9.svg'
import Ellipse16 from '../assets/ellipse16.svg'

const contact = () => {
  return (
    <div className='flex'>
        <div className='flex gap-3 p-4 relative'>
        <img src={Ellipse16} alt="" className='absolute w-[479px] h-[600px] left-20 ml-10 top-16' />
        <img src={Vector9} alt="" className=' w-[600px] h-[500px] ml-20 top-20 absolute' />
        <img className="w-[700.95px] h-[705.92px] relative" src={Contact}/>
        
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
         <button className="w-[207px] h-[66px] bg-green text-white rounded-[10px] mt-4" >Explore more</button>
        </div>
    </div>
  )
}

export default contact
