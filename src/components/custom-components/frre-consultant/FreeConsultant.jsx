import React from 'react';

const FreeConsultant = () => {
  return (
    <div className='w-10/12 mx-auto'>
      {' '}
      <div className='flex flex-col w-full'>
        <div
          style={{
            backgroundImage: "url('/cta-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className='w-full bg-[#1AA1F1] text-white p-8 md:p-16 rounded-3xl'
        >
          <h1 className='text-4xl font-serif md:text-6xl font-bold mb-4'>
            Get A Free Consultation
          </h1>
          <p className='text-xl mb-8'>
            Drop us a line! We are here to answer your questions 24/7
          </p>

          <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
            <input
              type='text'
              placeholder='Your Name*'
              className='w-full flex-1 px-6 py-4 rounded-full bg-[#4BB6F5] text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-white'
            />
            <input
              type='email'
              placeholder='Your Email*'
              className='w-full  flex-1 px-6 py-4 rounded-full bg-[#4BB6F5] text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-white'
            />
            <input
              type='text'
              placeholder='Your Company*'
              className='w-full flex-1 px-6 py-4 rounded-full bg-[#4BB6F5] text-white placeholder-white border-none focus:outline-none focus:ring-2 focus:ring-white'
            />
            <button className='w-full md:w-auto whitespace-nowrap px-8 py-4 bg-white text-[#1AA1F1] font-medium rounded-full hover:bg-opacity-90 transition-colors'>
              Free Consultancy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultant;
