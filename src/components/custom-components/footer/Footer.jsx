import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa6';
import { MdLocationCity, MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='bg-[#ECF7FF]'>
      <div className='flex justify-between gap-5 w-10/12 mx-auto py-20'>
        <div className='w-1/4'>
          <h1>
            <img src='./logo.18acd6f1.svg' alt='' />
          </h1>
          <p className='mt-10 text-[#767676]'>
            Mattis inelit neque quis donec eleifnd amet. Amet sed et cursus eu
            euismod. Egestas in morbi tristique.
          </p>
          <div className='flex gap-3 mt-10'>
            <div className=' p-3 w-fit bg-[#DDEEFB] rounded-full '>
              <FaFacebook className='text-xl text-[#000B47] cursor-pointer' />
            </div>
            <div className=' p-3 w-fit bg-[#DDEEFB] rounded-full '>
              <FaInstagram className='text-xl text-[#000B47] cursor-pointer' />
            </div>
            <div className=' p-3 w-fit bg-[#DDEEFB] rounded-full '>
              <FaLinkedin className='text-xl text-[#000B47] cursor-pointer' />
            </div>
            <div className=' p-3 w-fit bg-[#DDEEFB] rounded-full '>
              <FaTwitter className='text-xl text-[#000B47] cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='w-1/4'>
          <h1 className='text-[#000B47] font-bold font-serif text-5xl'>
            Quick Links
          </h1>
          <ul className='mt-10 flex flex-col gap-5 text-[#767676]'>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/about'>About Us</a>
            </li>
            <li>
              <a href='/services'>Services</a>
            </li>
            <li>
              <a href='/blog'>Latest News</a>
            </li>
            <li>
              <a href='/doctor'>Team</a>
            </li>
          </ul>
        </div>
        <div className='w-1/4'>
          <h1 className='text-[#000B47] font-bold font-serif text-5xl'>
            Useful Links
          </h1>
          <ul className='mt-10 flex flex-col gap-5 text-[#767676]'>
            <li>
              <a href='/home'>Projects</a>
            </li>
            <li>
              <a href='/about'>Shop</a>
            </li>
            <li>
              <a href='/services'>Cart</a>
            </li>
            <li>
              <a href='/blog'>Contact Us</a>
            </li>
            <li>
              <a href='/doctor'>FAQ</a>
            </li>
          </ul>
        </div>
        <div className='w-1/4'>
          <h1 className='text-[#000B47] font-bold font-serif text-5xl'>
            Contact Us
          </h1>
          <ul className='mt-10 flex flex-col gap-5 text-[#767676]'>
            <li className='flex gap-2 items-center'>
              <MdMail />
              medically@gmail.com{' '}
            </li>
            <li className='flex gap-2 items-center'>
              <FaPhone />
              (704) 555-0127 <br /> (208) 555-0112{' '}
            </li>
            <li className='flex gap-2 items-center'>
              <MdLocationCity />
              4517 Washington Ave. <br /> Manchter, Kentucky 495{' '}
            </li>
          </ul>
        </div>
      </div>
      <hr className='text-gray-200 w-10/12 mx-auto' />
      <div className='w-10/12 mx-auto py-5 flex justify-between items-center'>
        <div>
          <h3>
            <span className='text-[#46A4DF]'>
              Copyright © {new Date().getFullYear()} Medically by
            </span>{' '}
            wpOceans.{' '}
            <span className='text-[#46A4DF]'>All Rights Reserved.</span>
          </h3>
        </div>
        <div>
          <ul className='flex gap-5 text-[#46A4DF] '>
            <li>Privace & Policy</li>
            <li>Terms</li>
            <li>About us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
