'use client';
import React from 'react';
import ComponentHeader from '../component-header';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div className=' pb-5'>
      {' '}
      <div className='w-10/12 mx-auto  '>
        <div>
          <ComponentHeader
            title='Testimonial'
            description='Our Patients Say About Us'
          />
        </div>
        <div>
          <Swiper
            autoplay={{
              delay: 2500,
            }}
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div
                style={{
                  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                }}
                className='p-10 bg-gray-50 rounded-2xl'
              >
                <div className='mb-7'>
                  <div className='flex items-center gap-1 text-xl'>
                    <FaStar className='text-[#000B47]' />

                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                  </div>
                </div>
                <div>
                  <p className='text-[#7E7E7E] text-xl leading-9'>
                    Purus egeto consectur massa amert. Hactor bodiam suspendie
                    faucibus posuere dignissim amet to atthe. Vitaer of
                    sollicitudin mauris erat odio maecenas mattis praesent.Eget
                    vitaoe.
                  </p>
                </div>
                <div className='mt-7 flex items-center gap-5'>
                  <div>
                    <img
                      className='w-20 h-20 rounded-full'
                      src='./1 (3).jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <h1 className='text-[#000B47] text-6xl font-medium font-serif'>
                      John Doe
                    </h1>
                    <p className='text-[#7E7E7E] mt-2 text-xl'>
                      Managing Director
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                }}
                className='p-10 bg-gray-50 rounded-2xl'
              >
                <div className='mb-7'>
                  <div className='flex items-center gap-1 text-xl'>
                    <FaStar className='text-[#000B47]' />

                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                  </div>
                </div>
                <div>
                  <p className='text-[#7E7E7E] text-xl leading-9'>
                    Purus egeto consectur massa amert. Hactor bodiam suspendie
                    faucibus posuere dignissim amet to atthe. Vitaer of
                    sollicitudin mauris erat odio maecenas mattis praesent.Eget
                    vitaoe.
                  </p>
                </div>
                <div className='mt-7 flex items-center gap-5'>
                  <div>
                    <img
                      className='w-20 h-20 rounded-full'
                      src='./2 (3).jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <h1 className='text-[#000B47] text-6xl font-medium font-serif'>
                      Minhaj Uddin{' '}
                    </h1>
                    <p className='text-[#7E7E7E] mt-2 text-xl'>
                      Content Writer
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>{' '}
            <SwiperSlide>
              <div
                style={{
                  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                }}
                className='p-10 bg-gray-50 rounded-2xl'
              >
                <div className='mb-7'>
                  <div className='flex items-center gap-1 text-xl'>
                    <FaStar className='text-[#000B47]' />

                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                    <FaStar className='text-[#000B47]' />
                  </div>
                </div>
                <div>
                  <p className='text-[#7E7E7E] text-xl leading-9'>
                    Purus egeto consectur massa amert. Hactor bodiam suspendie
                    faucibus posuere dignissim amet to atthe. Vitaer of
                    sollicitudin mauris erat odio maecenas mattis praesent.Eget
                    vitaoe.
                  </p>
                </div>
                <div className='mt-7 flex items-center gap-5'>
                  <div>
                    <img
                      className='w-20 h-20 rounded-full'
                      src='./3 (2).jpg'
                      alt=''
                    />
                  </div>
                  <div>
                    <h1 className='text-[#000B47] text-6xl font-medium font-serif'>
                      Cristin Watson{' '}
                    </h1>
                    <p className='text-[#7E7E7E] mt-2 text-xl'>
                      Content Writer
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
