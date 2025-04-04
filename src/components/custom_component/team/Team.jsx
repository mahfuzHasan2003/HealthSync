import React from 'react';
import ComponentHeader from '../ComponentHeader';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <div className='w-10/12 mx-auto overflow-hidden'>
      <div>
        <ComponentHeader title='Our Team' description='Meet Our Specialists' />
      </div>
      <div className='flex justify-between items-center gap-4 w-full '>
        <TeamCard image={'./1.png'} />
        <TeamCard image={'./2.png'} />
        <TeamCard image={'./3.png'} />
      </div>
    </div>
  );
};

export default Team;
