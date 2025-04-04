import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

const OurPortfolio = () => {
  return (
    <div className='w-10/12 mx-auto my-20'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='bg-[#E6F5FF] font-serif font-medium text-xl mb-6 w-fit flex items-center justify-center text-[#0080D2] rounded-full'>
            <h4 className='px-6 text-xl py-2'> Our Portfolio</h4>{' '}
          </div>
          <h1 className='text-[#000B47] font-extrabold font-serif text-5xl'>
            All The Great Work <br /> That We Done
          </h1>
        </div>
        <div className='flex items-center justify-center bg-[#0FA0FF] rounded-full px-4 py-2 gap-5'>
          <h3 className='text-white text-xl font-medium'>See All Cases</h3>
          <span className='border border-white p-3 rounded-full'>
            <FaArrowRight className='text-white' />
          </span>
        </div>
      </div>
      <div className='flex gap-10 mt-12 justify-between items-center'>
        <div className='rounded-3xl relative group overflow-hidden'>
          <img
            className=' group-hover:scale-110 duration-500'
            src='./1 (2).jpg'
            alt=''
          />
          <div
            style={{
              background:
                'linear-gradient(140deg, rgba(14,159,255,0.36) 13.65%, rgba(1,118,195,0.18) 91.31%)',
            }}
            className='p-10 group-hover:transform translate-y-40 group-hover:translate-y-0 duration-300 backdrop-blur-[50px]  absolute left-5 bottom-5 right-5 rounded-2xl text-center'
          >
            <h1 className='text-white text-2xl font-bold'>Heart Institure </h1>
            <p className='text-xl text-white font-medium'>Treatment</p>
          </div>
        </div>
        <div className='rounded-3xl relative group overflow-hidden'>
          <img
            className=' group-hover:scale-110 duration-500'
            src='./3 (1).jpg'
            alt=''
          />
          <div
            style={{
              background:
                'linear-gradient(140deg, rgba(14,159,255,0.36) 13.65%, rgba(1,118,195,0.18) 91.31%)',
            }}
            className='p-10 group-hover:transform translate-y-40 group-hover:translate-y-0 duration-300 backdrop-blur-[50px]  absolute left-5 bottom-5 right-5 rounded-2xl text-center'
          >
            <h1 className='text-white text-2xl font-bold'>
              Orthopaedics Center{' '}
            </h1>
            <p className='text-xl text-white font-medium'>Treatment</p>
          </div>
        </div>
        <div className='rounded-3xl relative group overflow-hidden'>
          <img
            className=' group-hover:scale-110 duration-500'
            src='./2 (2).jpg'
            alt=''
          />
          <div
            style={{
              background:
                'linear-gradient(140deg, rgba(14,159,255,0.36) 13.65%, rgba(1,118,195,0.18) 91.31%)',
            }}
            className='p-10 group-hover:transform translate-y-40 group-hover:translate-y-0 duration-300 backdrop-blur-[50px]  absolute left-5 bottom-5 right-5 rounded-2xl text-center'
          >
            <h1 className='text-white text-2xl font-bold'>
              Neurology Services{' '}
            </h1>
            <p className='text-xl text-white font-medium'>Treatment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
