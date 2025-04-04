import { Phone } from 'lucide-react';
import React from 'react';
import { FaPhone } from 'react-icons/fa6';

const Available = () => {
  return (
    <div>
      <div className='w-10/12 mx-auto mt-52'>
        {' '}
        <div className='flex flex-col w-full'>
          <div
            style={{
              backgroundImage: "url('/cta-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className='w-full bg-[#1AA1F1] text-white  rounded-3xl'
          >
            <div className='grid grid-cols-12 relative gap-4'>
              <div className=' col-span-7 px-16 py-24 w-full flex items-center justify-between'>
                <div className='bg-white p-6  rounded-full w-fit'>
                  <div className='border border-[#16A4FF] rounded-full p-6'>
                    <Phone className=' h-14 w-14 text-[#16A4FF]' />
                  </div>
                </div>
                <div className='text-white font-bold'>
                  <h3 className='text-3xl'>Available 24/7</h3>
                  <h1 className='font-extrabold mt-5 text-5xl'>
                    (208) 555-0112
                  </h1>
                </div>
              </div>
              <div className='col-span-5 absolute right-0 bottom-0'>
                <img src='./cta-2.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
