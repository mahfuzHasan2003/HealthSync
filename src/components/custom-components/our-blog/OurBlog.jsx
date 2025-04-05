import React from 'react';
import ComponentHeader from '../component-header';
import Article from './Article';

const OurBlog = () => {
  return (
    <div className='w-10/12 mx-auto overflow-hidden pb-20'>
      <div>
        <ComponentHeader title='Our Blog' description='Latest Post & Article' />
      </div>
      <div className='flex justify-between items-center gap-4 w-full '>
        <Article
          image={'./img-1.webp'}
          date={'Sep 03, 2025'}
          name={'Anne Williamson'}
          title={'Tips for Orthopedic Surgery Patients'}
          speciality={'Orthopedic'}
        />
        <Article
          image={'./img-2.webp'}
          date={'Sep 03, 2025'}
          name={'Anne Williamson'}
          title={'Tips for Orthopedic Surgery Patients'}
          speciality={'Orthopedic'}
        />
        <Article
          image={'./img-3.webp'}
          date={'Sep 03, 2025'}
          name={'Anne Williamson'}
          title={'Tips for Orthopedic Surgery Patients'}
          speciality={'Orthopedic'}
        />
      </div>
    </div>
  );
};

export default OurBlog;
