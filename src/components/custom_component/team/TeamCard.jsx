import React from 'react';
import { HumanImageComponent } from './Test';

const TeamCard = ({ image }) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[416px] h-[520px] flex flex-col gap-5 justify-center items-center'>
        {/* Profile Container */}
        <div className='relative flex items-center justify-center '>
          <HumanImageComponent image={image} />
        </div>
        {/* Name */}
        <h1 className='text-[#000B47] text-center font-extrabold font-serif text-3xl'>
          Dr. John Doe
        </h1>
        {/* Designation */}
        <h6 className='text-[#0EA0FF] text-center'>Associate Professor</h6>
      </div>
    </div>
  );
};

export default TeamCard;
