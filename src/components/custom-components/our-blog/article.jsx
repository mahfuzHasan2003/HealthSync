import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const Article = ({ image, date, name, title, speciality }) => {
  return (
    <div className='relative  shadow-lg rounded-bl-3xl rounded-br-3xl'>
      <div className='rounded-3xl relative overflow-hidden'>
        <img
          src={image}
          alt='Article Image'
          className='w-full h-[300px] object-cover'
        />
        <div className='absolute inset-0 p-5'>
          <p className='text-white w-fit rounded-full px-3 py-1 bg-[#0080D2] font-medium font-serif '>
            {speciality}
          </p>
        </div>
      </div>
      <div className='p-5'>
        <div className='flex gap-5 text-xl font-medium text-gray-500 justify-start items-center'>
          <h4>{date}</h4>
          <h4>.</h4>
          <h4>{name}</h4>
        </div>
        <h1 className='text-[#000B47] leading-12 text-3xl font-bold font-serif mt-5 mb-10'>
          {title}
        </h1>
        <div className='bg-[#0080D2] z-20 absolute -bottom-7 left-10  rounded-full p-5 w-fit'>
          <HiArrowLongRight className='text-2xl text-white' />
        </div>
        <div className=' absolute left-1.5 -bottom-0 z-10'>
          <img src='./common-shape-blog.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Article;
