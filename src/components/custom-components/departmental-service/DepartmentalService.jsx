import React from 'react';
import ComponentHeader from '../component-header';
import { MdArrowRightAlt } from 'react-icons/md';
import { RiToothLine } from 'react-icons/ri';
import { LiaMortarPestleSolid } from 'react-icons/lia';
import { LuBone } from 'react-icons/lu';

const DepartmentalService = () => {
  return (
    <div className='bg-[#EBF7FF] py-20 my-20'>
      <div className='w-10/12 mx-auto overflow-hidden '>
        <div>
          <ComponentHeader
            title='Departmental Services'
            description='Our Medical Services'
          />
        </div>
        <div className='mt-36 flex gap-10 justify-between'>
          <div className='w-1/3 relative bg-white rounded-2xl shadow-sm px-7 pb-9 pt-24 flex flex-col items-center justify-center gap-7'>
            <div className='absolute z-10 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#0EA1FF] rounded-full w-24 h-24 flex items-center justify-center'>
              <RiToothLine className='text-white text-5xl' />
            </div>
            <div className='absolute top-6 -translate-x-1/2 left-1/2 -translate-y-1/2'>
              <img src='./common-shape-black.png' alt='' />
            </div>
            <h1 className='text-[#000B47] font-bold font-serif text-6xl'>
              Dental Care
            </h1>
            <p className='text-[#767676] text-center'>
              We have more doctor for your dental illness. We are here for your
              better treatment
            </p>
            <div className='flex items-center justify-center gap-2'>
              <MdArrowRightAlt className='text-[#0080D2] text-2xl hover:text-[#000B47] hover:duration-500 hover:translate-x-1 cursor-pointer' />
            </div>
          </div>
          <div className='w-1/3 relative bg-white rounded-2xl shadow-sm px-7 pb-9 pt-24 flex flex-col items-center justify-center gap-7'>
            <div className='absolute z-10 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#0EA1FF] rounded-full w-24 h-24 flex items-center justify-center'>
              <LiaMortarPestleSolid className='text-white text-5xl' />
            </div>
            <div className='absolute top-6 -translate-x-1/2 left-1/2 -translate-y-1/2'>
              <img src='./common-shape-black.png' alt='' />
            </div>
            <h1 className='text-[#000B47] font-bold font-serif text-6xl'>
              Pharmacology
            </h1>
            <p className='text-[#767676] text-center'>
              We have more doctor for your dental illness. We are here for your
              better treatment
            </p>
            <div className='flex items-center justify-center gap-2'>
              <MdArrowRightAlt className='text-[#0080D2] text-2xl hover:text-[#000B47] hover:duration-500 hover:translate-x-1 cursor-pointer' />
            </div>
          </div>
          <div className='w-1/3 relative bg-white rounded-2xl shadow-sm px-7 pb-9 pt-24 flex flex-col items-center justify-center gap-7'>
            <div className='absolute z-10 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#0EA1FF] rounded-full w-24 h-24 flex items-center justify-center'>
              <LuBone className='text-white text-5xl' />
            </div>
            <div className='absolute top-6 -translate-x-1/2 left-1/2 -translate-y-1/2'>
              <img src='./common-shape-black.png' alt='' />
            </div>
            <h1 className='text-[#000B47] font-bold font-serif text-6xl'>
              Orthopedic{' '}
            </h1>
            <p className='text-[#767676] text-center'>
              We have more doctor for your dental illness. We are here for your
              better treatment
            </p>
            <div className='flex items-center justify-center gap-2'>
              <MdArrowRightAlt className='text-[#0080D2] text-2xl hover:text-[#000B47] hover:duration-500 hover:translate-x-1 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentalService;
