import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Banner3 from '../assets/banner3.svg';
import Blogs from '../assets/blogs2.svg';
import Blogs3 from '../assets/blogs3.svg';

const trendingTopics = [
  {
    id: 1,
    title: 'Top trends from spring',
    imageUrl: Banner3,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 2,
    title: 'Top trends from spring',
    imageUrl: Blogs,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 3,
    title: 'Top trends from spring',
    imageUrl: Blogs3,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

const BlogsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white p-4">
      <h1 className="text-2xl font-bold font-Baloo mb-4 pl-4">Trendy Topics on Home Fiber Technology</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingTopics.map((topic) => (
          <div key={topic.id} className="p-4 rounded">
            <img src={topic.imageUrl} alt="Topic" className="mb-4 w-full" />
            <h2 className="text-lg font-bold font-Baloo mb-2">{topic.title}</h2>
            <p>{topic.content}</p>
            <a href="#" className="text-green mt-2 font-Baloo inline-block">Read More</a>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center mb-8">
        <button className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Previous
        </button>
        <button className="ml-4 bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
      {/* <div className="text-lg font-bold font-Baloo mb-2 pl-4">Categories</div>
        <div className="flex flex-wrap gap-2 pl-4">
          {categories.map((category, index) => (
            <button key={index} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">{category}</button>
          ))}
        </div> */}
      <Footer/>
    </div>
    </>
  );
};

export default BlogsPage;

