'use client';

import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <div className='flex gap-[40px_80px] text-sm text-[rgba(19,17,38,1)] font-bold whitespace-nowrap flex-wrap mt-[109px] max-md:max-w-full max-md:mt-10'>
        <Link href='/' className='hover:text-[#3C3679] transition-colors'>
          Home
        </Link>
        <Link href='/about' className='hover:text-[#3C3679] transition-colors'>
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
        <Link
          href='/contact'
          className='hover:text-[#3C3679] transition-colors'
        >
          Contact
        </Link>
      </div>
      <div className='border self-center w-[1280px] shrink-0 max-w-full h-px mt-16 border-black border-solid max-md:mt-10' />
      <div className='self-center flex w-full max-w-[1279px] items-stretch gap-5 flex-wrap justify-between mt-[35px] max-md:max-w-full'>
        <div className='gap-[40px_80px] text-sm text-[rgba(19,17,38,1)] font-normal'>
          All rights reserved ® uifry.com | Terms and conditions apply!
        </div>
        <div className='flex gap-5'>
          {[...Array(5)].map((_, index) => (
            <a
              key={index}
              href='#'
              className='aspect-[1] bg-gray-200 w-8 h-8 rounded-full shrink-0 flex items-center justify-center'
              aria-label={`Social media link ${index + 1}`}
            >
              <span className='text-gray-500 text-xs'>{index + 1}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
