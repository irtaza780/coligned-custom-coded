'use client';

import React from 'react';

const SecondaryBenefitsSection: React.FC = () => {
  return (
    <div className='bg-[rgba(60,54,121,1)] flex w-full flex-col items-center justify-center mt-[102px] px-[70px] py-[93px] rounded-[5px] max-md:max-w-full max-md:mt-10 max-md:px-5'>
      <div className='bg-[rgba(60,54,121,1)] flex gap-[40px_60px] flex-wrap max-md:max-w-full'>
        <div className='flex min-w-60 items-center gap-5 w-[311px]'>
          <div className='bg-[rgba(250,224,225,1)] self-stretch flex min-h-[50px] items-center gap-2 w-[47px] my-auto pl-3 pr-[11px] py-[13px] rounded-[5px]'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7.75 11.9999L10.58 14.8299L16.25 9.16992'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='text-white text-base font-normal leading-7 self-stretch w-[244px] my-auto'>
            Super useful and easy to with over 100+ customisations!
          </div>
        </div>
        <div className='flex min-w-60 items-center gap-5'>
          <div className='bg-[rgba(243,222,179,1)] self-stretch flex min-h-[50px] items-center gap-2 w-[47px] my-auto pl-3 pr-[11px] py-[13px] rounded-[5px]'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7.75 11.9999L10.58 14.8299L16.25 9.16992'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='text-white text-base font-normal leading-7 self-stretch w-[251px] my-auto'>
            Super useful and easy to with over 100+ customisations!
          </div>
        </div>
        <div className='flex min-w-60 items-center gap-5 w-[311px]'>
          <div className='bg-[rgba(203,207,250,1)] self-stretch flex min-h-[50px] items-center gap-2 w-12 h-[49px] my-auto px-3 py-[13px] rounded-[5px]'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7.75 11.9999L10.58 14.8299L16.25 9.16992'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='text-white text-base font-normal leading-7 w-[231px] my-auto'>
            Super useful and easy to with over 100+ customisations!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBenefitsSection;
