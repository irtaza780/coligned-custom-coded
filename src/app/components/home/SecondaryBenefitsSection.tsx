'use client';

import React from 'react';

const SecondaryBenefitsSection: React.FC = () => {
  return (
    <div className='bg-primary-custom flex w-full flex-col items-center justify-center mt-[102px] px-[70px] py-[93px] rounded-lg max-md:max-w-full max-md:mt-10 max-md:px-5 shadow-soft'>
      <div className='bg-primary-custom flex gap-[40px_60px] flex-wrap max-md:max-w-full'>
        <div className='flex min-w-60 items-center gap-5 w-[311px]'>
          <div className='bg-secondary-custom self-stretch flex min-h-[50px] items-center gap-2 w-[47px] my-auto pl-3 pr-[11px] py-[13px] rounded-lg'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7.75 11.9999L10.58 14.8299L16.25 9.16992'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='text-primary-50 text-base font-sans leading-7 self-stretch w-[244px] my-auto'>
            Super useful and easy to with over 100+ customisations!
          </div>
        </div>
        <div className='flex min-w-60 items-center gap-5'>
          <div className='bg-secondary-200 self-stretch flex min-h-[50px] items-center gap-2 w-[47px] my-auto pl-3 pr-[11px] py-[13px] rounded-lg'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7.75 11.9999L10.58 14.8299L16.25 9.16992'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='text-primary-50 text-base font-sans leading-7 self-stretch w-[251px] my-auto'>
            Super useful and easy to with over 100+ customisations!
          </div>
        </div>
        <div className='flex min-w-60 items-center gap-5 w-[311px]'>
          <div className='bg-secondary-300 self-stretch flex min-h-[50px] items-center gap-2 w-12 h-[49px] my-auto px-3 py-[13px] rounded-lg'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7.75 11.9999L10.58 14.8299L16.25 9.16992'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='text-primary-50 text-base font-sans leading-7 w-[231px] my-auto'>
            Super useful and easy to with over 100+ customisations!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBenefitsSection;
