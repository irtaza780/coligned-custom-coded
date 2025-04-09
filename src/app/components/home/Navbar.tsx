'use client';

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className='flex w-full max-w-[1079px] flex-col items-stretch font-bold mr-20 mt-[30px] max-md:max-w-full max-md:mr-2.5'>
      <div className='flex w-full items-stretch gap-5 text-sm flex-wrap justify-between max-md:max-w-full'>
        <div className='flex gap-[40px_80px] text-[#201C44] whitespace-nowrap my-auto'>
          <Link href='/' className='hover:text-[#3C3679] transition-colors'>
            Home
          </Link>
          <Link
            href='/about'
            className='hover:text-[#3C3679] transition-colors'
          >
            About
          </Link>
          <Link
            href='/pricing'
            className='hover:text-[#3C3679] transition-colors'
          >
            Pricing
          </Link>
          <Link href='/blog' className='hover:text-[#3C3679] transition-colors'>
            Blog
          </Link>
        </div>
        <button
          className='bg-[#FAE0E1] gap-2 text-[#131126] px-6 py-4 rounded-[5px] max-md:px-5 hover:bg-[#f8d0d2] transition-colors'
          onClick={() => console.log('Contact button clicked')}
        >
          Contact Now
        </button>
      </div>
      <div className='text-[rgba(19,17,38,1)] text-[13px] self-center mt-[55px] max-md:mt-10'>
        New visitors
      </div>
    </div>
  );
};

export default Navbar;
