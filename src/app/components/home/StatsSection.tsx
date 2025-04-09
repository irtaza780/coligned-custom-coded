'use client';

import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <div className='flex w-full max-w-[1260px] items-stretch gap-[40px_88px] mt-[146px] max-md:max-w-full max-md:mt-10'>
      <div className='flex flex-col items-stretch my-auto max-md:max-w-full'>
        <h2 className='text-[rgba(32,28,68,1)] text-[38px] font-bold leading-[46px] max-md:max-w-full'>
          Let your business thrive under our supervision
        </h2>
        <p className='text-[rgba(19,17,38,1)] text-base font-normal leading-7 mt-10 max-md:max-w-full'>
          Launch a business today with our help and get it done with amazing
          launch features, websites and more with uifry. We help business like
          yours thrive every day and beyond.
          <br />
          <br />
        </p>
        <div className='flex gap-[30px] flex-wrap mt-10 max-md:max-w-full'>
          <div className='flex items-center gap-5'>
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
            <div className='text-[rgba(19,17,38,1)] text-base font-bold leading-[26px] w-[163px] my-auto'>
              <span className='text-2xl text-[rgba(19,17,38,1)]'>100+ </span>
              <br />
              <span className='text-[rgba(19,17,38,1)]'>
                Successfull Projects
              </span>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <div className='bg-[rgba(250,224,225,1)] self-stretch flex min-h-[50px] items-center gap-2 w-12 h-[49px] my-auto px-3 py-[13px] rounded-[5px]'>
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
            <div className='text-[rgba(19,17,38,1)] text-base font-bold leading-[26px] w-[163px] my-auto'>
              <span className='text-2xl text-[rgba(19,17,38,1)]'>978+ </span>
              <br />
              <span className='text-[rgba(19,17,38,1)]'>Clients Today</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-5 mt-10'>
          <button
            className='bg-[rgba(250,224,225,1)] self-stretch gap-2 text-sm text-[rgba(19,17,38,1)] font-bold my-auto px-6 py-4 rounded-[5px] max-md:px-5 hover:bg-[#f8d0d2] transition-colors'
            onClick={() => console.log('Contact Now clicked')}
          >
            Contact Now
          </button>
          <button
            className='border self-stretch flex min-h-[50px] items-center gap-2 w-12 my-auto px-3 py-[13px] rounded-[5px] border-[rgba(250,224,225,1)] border-solid hover:bg-[#faf5f5] transition-colors'
            aria-label='See more'
            onClick={() => console.log('Arrow button clicked')}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3.5 12H20.33'
                stroke='#292D32'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            className='text-[rgba(19,17,38,1)] text-sm font-bold leading-7 self-stretch my-auto hover:text-[#3C3679] transition-colors'
            onClick={() => console.log('Book a Demo clicked')}
          >
            Book a Demo Today
          </button>
        </div>
      </div>
      <div className='bg-[rgba(246,246,249,1)] grow shrink basis-auto pl-[55px] rounded-[5px] max-md:max-w-full'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
          <div className='w-[66%] max-md:w-full max-md:ml-0'>
            <div className='flex flex-col relative aspect-[0.591] mt-[-46px] grow text-[10px] text-[rgba(19,17,38,1)] font-medium whitespace-nowrap tracking-[0.1px] leading-[30px] pt-[467px] pb-[77px] px-[70px] max-md:pl-5 max-md:pt-[100px]'>
              <div className='absolute h-full w-full inset-0 bg-gray-200 flex items-center justify-center'>
                <span className='text-gray-500'>Stats Chart</span>
              </div>
              14%
            </div>
          </div>
          <div className='w-[34%] ml-5 max-md:w-full max-md:ml-0'>
            <div className='z-10 flex mr-[-68px] flex-col text-[rgba(19,17,38,1)] font-semibold mt-[286px] max-md:mt-10'>
              <div className='text-[rgba(32,28,68,1)] text-lg self-stretch'>
                <span className='font-sans capitalize'>C</span>
                <span className='font-sans text-[rgba(32,28,68,1)]'>
                  LIENTS
                </span>
                <span className='font-sans'> File Scanning</span>
              </div>
              <div className='text-[15px] mt-4'>
                <span className='font-sans'>Total C</span>
                <span className='font-sans lowercase text-[rgba(19,17,38,1)]'>
                  LIENTS
                </span>
              </div>
              <div className='text-[22px] leading-none mt-[38px]'>$897,543</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-[rgba(19,17,38,1)] text-[10px] font-medium leading-[30px] tracking-[0.1px] text-right mt-[421px] max-md:mt-10'>
        $5M
      </div>
    </div>
  );
};

export default StatsSection;
