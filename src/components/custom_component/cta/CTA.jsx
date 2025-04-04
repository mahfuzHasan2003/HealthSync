import React from 'react';
import CtaSection from './CtaSection';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaAward } from 'react-icons/fa';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import { FaHandsHelping } from 'react-icons/fa';

const CTA = () => {
  return (
    <div className='bg-[#13A3FF] my-20 py-12'>
      <div className='w-10/12 mx-auto'>
        <div className='w-full flex justify-between items-center '>
          <CtaSection
            count={250}
            icon={<FaUserDoctor className='text-6xl text-white' />}
            title='Qualified Doctors'
          />
          <div className='w-[2px] h-[80px] bg-gray-200'></div>
          <CtaSection
            count={3020}
            icon={<MdOutlineEmojiPeople className='text-6xl text-white' />}
            title='Satisfied Clients'
          />
          <div className='w-[2px] h-[80px] bg-gray-200'></div>

          <CtaSection
            count={25}
            icon={<FaAward className='text-6xl text-white' />}
            title='Award Winning'
          />
          <div className='w-[2px] h-[80px] bg-gray-200'></div>

          <CtaSection
            count={'24 / 7'}
            icon={<FaHandsHelping className='text-6xl text-white' />}
            title='Client Support'
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
