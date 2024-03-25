import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Banner3 from '../assets/banner3.svg';
import Blogs from '../assets/blogs2.svg';
import Blogs3 from '../assets/blogs3.svg';
import Icon from '../assets/icon.svg';
import { AiOutlineRight } from 'react-icons/ai';

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
  {
    id: 4,
    title: 'Top trends from spring',
    imageUrl: Icon,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

const BlogsPage = () => {
  const topicsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = trendingTopics.slice(indexOfFirstTopic, indexOfLastTopic);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="bg-white p-4">
        <h1 className="text-3xl font-bold font-Baloo mb-4 pl-4 text-center">Trendy Topics on Home Fiber Technology</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 justify-items-center">
          {currentTopics.map((topic) => (
            <div key={topic.id} className="p-4 rounded">
              <img src={topic.imageUrl} alt="Topic" className="mb-4 w-full md:w-full h-auto md:h-48 lg:h-80 object-contain" />
              <h2 className="text-lg font-bold font-Baloo mb-2">{topic.title}</h2>
              <p>{topic.content}</p>
              <a href="#" className="text-green mt-2 font-Baloo inline-block">Read More</a>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center mb-8">
          {Array.from({ length: Math.ceil(trendingTopics.length / topicsPerPage) }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)} className={`bg-green hover:bg-lightgreen hover:text-green text-white py-2 px-4 rounded ${currentPage === i + 1 ? 'bg-green' : ''}`}>
              {i + 1}
            </button>
          ))}
          <button className="ml-4 bg-green hover:bg-lightgreen hover:text-green text-white py-2 px-4 rounded">
          <AiOutlineRight/>
        </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogsPage;
