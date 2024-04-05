import {useState} from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from './navbar';
import Search from '../assets/search.svg';
import Footer from './footer';
import { AiOutlineRight,AiOutlineDown } from 'react-icons/ai';
import Livechat from '../assets/livechat.svg';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  // const [rememberEmail, setRememberEmail] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const handleRememberEmailChange = () => {
  //   setRememberEmail(!rememberEmail);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Implement your submission logic here
  //   console.log("Submitted!");
  // };
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 md:p-10 gap-8">
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
        <div className="bg-white rounded-lg p-6">
          <p className='font-Baloo font-bold text-2xl'>Support & Contact</p>
          <hr className="my-3 w-1/3 border border-gray" />
          <h2 className="text-xl mb-8 font-Baloo">Contact Information</h2>
          <div className=" mb-4 grid md:grid-cols-2">
            <FaMapMarkerAlt className="text-gray mr-2" style={{ fontSize: "1.8em"}}/>
            <p className="font-black mb-4 font-Baloo">Address</p>
            <p className='text-start mt-4'>0000 Road,  Nairobi 00100, Kenya</p>
            <input
            type="email"
            placeholder="Enter your name"
            value={email}
            onChange={handleEmailChange}
            className="border-0 border-b-2 px-3 py-2 mb-2 w-full"
          />
            {/* <input></input> */}
          </div>
          <div className="mb-4 grid md:grid-cols-2">
            <FaPhone className="text-gray mr-2" style={{ fontSize: "1.8em"}}/>
            <p className="font-black mb-4 font-Baloo">Phone</p>
            <p>Mobile: 0000 1111 2222</p>
            <p>Hotline: 0000 3333 4444</p>
            <input
            type="email"
            placeholder="Enter your message"
            value={email}
            onChange={handleEmailChange}
            className="border-0 border-b-2 px-3 py-2 mb-2"
          />
          </div>
          <div className="mt-4">
            <FaEnvelope className="text-gray mr-2" style={{ fontSize: "1.8em"}} />
            <p className="font-black mb-4 font-Baloo">Email Address</p>
            <p>abc@gmail.com</p>
            <p>giftly_xyz@gmail.com</p>
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="border-0 border-b-2 px-3 py-2 mb-2 basis-1/2"
          />
          </div>
        </div>
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 font-Baloo">FAQs</h2>
          <div className="mb-4 mt-10 shadow-lg rounded-md p-4">
            <h3 className="text-lg  mb-2 font-semibold font-Baloo">What is Limefiber?
            </h3>
            <div className="ml-[34vh] top-[100vh]" style={{ borderRadius: '50%', backgroundColor: 'red', display: 'inline-block', padding: '0.5em' }}>
      <AiOutlineDown style={{ fontSize: '1.2em', color: 'white' }} /></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.</p>
          </div>
          <div className='mb-4 shadow-lg rounded-md p-4'>
            <h3 className="text-lg font-semibold mb-2 font-Baloo">Is Limefiber the best
            <AiOutlineRight style={{ fontSize: "1.2em", color:"red" }}/></h3>
            <p>Home Service fiber?</p>
          </div>
          <div className='mb-4 shadow-lg rounded-md p-4'>
            <h3 className="text-lg font-normal mb-2 font-Baloo">What are the discount sales on the LimeFiber products?
            <AiOutlineRight style={{ fontSize: "1.2em", color:"red" }}/>
            </h3>
          </div>
          <div className='mb-4 shadow-lg rounded-md p-4'>
            <h3 className="text-lg font-normal mb-2 font-Baloo">Does the LimeFiber coverage cover majority of the region?b
            <AiOutlineRight style={{ fontSize: "1.2em", color:"red" }}/></h3>
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
        <div className='mb-6'>
        <h3 classname="mt-4">Try our <span class="text-green">Lime</span><span class="text-red">Line</span> ChatBot!</h3>
        </div>
        <div className='flex justify-center'>
        <button className='flex justify-center bg-white border border-green py-2 px-2 rounded-lg mb-4'>Get started <AiOutlineRight style={{ fontSize: "1em", color:"green" }} /></button>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
