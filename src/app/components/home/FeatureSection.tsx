'use client';

import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <div className='w-full max-w-[1207px] mt-[88px] max-md:max-w-full max-md:mt-10'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-6/12 max-md:w-full max-md:ml-0'>
          <div className='flex grow items-stretch gap-2 flex-wrap max-md:max-w-full max-md:mt-10'>
            <div className='aspect-[0.83] bg-gray-200 w-full grow shrink-0 basis-0 max-md:max-w-full flex items-center justify-center'>
              <span className='text-gray-500'>Feature Image</span>
            </div>
            <div className='mt-[387px] max-md:mt-10'>
              <div className='flex items-stretch gap-[9px]'>
                <div className='bg-[rgba(250,224,225,1)] flex w-[19px] shrink-0 h-[46px] rounded-sm' />
                <div className='bg-[rgba(250,224,225,1)] flex w-[19px] shrink-0 h-[46px] rounded-sm' />
              </div>
              <div className='flex items-stretch gap-[19px] text-xs text-[rgba(32,28,68,1)] font-medium whitespace-nowrap mt-1 max-md:mr-[7px]'>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-6/12 ml-5 max-md:w-full max-md:ml-0'>
          <div className='flex w-full flex-col items-stretch mt-[45px] max-md:max-w-full max-md:mt-10'>
            <h2 className='text-[#201C44] text-[38px] font-bold leading-[46px] max-md:max-w-full'>
              Let your business thrive under our supervision
            </h2>
            <p className='text-[#201C44] text-base font-normal leading-7 mt-10 max-md:max-w-full'>
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond.
              <br />
              <br />
              We are making every business grow!
              <br />
              <br />
            </p>
            <div className='w-full max-w-[530px] mt-10 max-md:max-w-full'>
              <div className='flex w-full items-stretch gap-5 flex-wrap rounded-[5px] max-md:max-w-full'>
                <div className='items-center bg-[#FAE0E1] flex min-h-[50px] gap-2 pl-3 pr-[11px] py-[13px] rounded-[5px]'>
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
                <div className='text-[#201C44] text-base font-normal leading-loose grow shrink w-[454px] basis-auto my-auto max-md:max-w-full'>
                  Super useful and easy to use interface
                </div>
              </div>
              <div className='flex w-full items-stretch gap-5 flex-wrap mt-3 rounded-[5px] max-md:max-w-full'>
                <div className='items-center bg-[#FAE0E1] flex min-h-[50px] gap-2 pl-3 pr-[11px] py-[13px] rounded-[5px]'>
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
                <div className='text-[#201C44] text-base font-normal leading-loose grow shrink w-[454px] basis-auto my-auto max-md:max-w-full'>
                  Easiest way to grow your business in days
                </div>
              </div>
            </div>
            <button
              className='items-center bg-[#FAE0E1] flex gap-5 text-sm text-[#131126] font-bold mt-10 rounded-[5px] hover:bg-[#f8d0d2] transition-colors'
              onClick={() => console.log('Contact Now clicked')}
            >
              <div className='bg-[#FAE0E1] self-stretch flex gap-2 my-auto px-6 py-4 max-md:px-5'>
                <span>Contact Now</span>
                <svg
                  width='18'
                  height='18'
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
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
