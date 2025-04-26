'use client';

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className='flex w-full max-w-[1079px] flex-col items-stretch font-bold mr-20 mt-[30px] max-md:max-w-full max-md:mr-2.5'>
      <div className='flex w-full items-stretch gap-5 text-sm flex-wrap justify-between max-md:max-w-full'>
        <div className='flex gap-[40px_80px] text-primary-900 whitespace-nowrap my-auto'>
          <Link href='/' className='hover:text-primary-700 transition-colors'>
            Home
          </Link>
          <Link
            href='/about'
            className='hover:text-primary-700 transition-colors'
          >
            About
          </Link>
          <Link
            href='/pricing'
            className='hover:text-primary-700 transition-colors'
          >
            Pricing
          </Link>
          <Link href='/blog' className='hover:text-primary-700 transition-colors'>
            Blog
          </Link>
        </div>
        <button
          className='bg-secondary-custom gap-2 text-primary-900 px-6 py-4 rounded-lg max-md:px-5 hover:bg-secondary-200 transition-colors animate-fade-in'
          onClick={() => console.log('Contact button clicked')}
        >
          Contact Now
        </button>
      </div>
      <div className='text-primary-800 text-[13px] self-center mt-[55px] max-md:mt-10'>
        New visitors
      </div>
    </div>
  );
};

export default Navbar;
