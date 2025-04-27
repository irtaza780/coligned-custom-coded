'use client';

import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <div className='w-full max-w-[1207px] mt-[88px] max-md:max-w-full max-md:mt-10'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-6/12 max-md:w-full max-md:ml-0'>
          <div className='flex grow items-stretch gap-2 flex-wrap max-md:max-w-full max-md:mt-10'>
            <div className='aspect-[0.83] bg-secondary-custom w-full grow shrink-0 basis-0 max-md:max-w-full flex items-center justify-center rounded-lg shadow-soft'>
              <span className='text-primary-700'>Feature Image</span>
            </div>
            <div className='mt-[387px] max-md:mt-10'>
              <div className='flex items-stretch gap-[9px]'>
                <div className='bg-secondary-custom flex w-[19px] shrink-0 h-[46px] rounded-sm' />
                <div className='bg-secondary-custom flex w-[19px] shrink-0 h-[46px] rounded-sm' />
              </div>
              <div className='flex items-stretch gap-[19px] text-xs text-primary-900 font-medium whitespace-nowrap mt-1 max-md:mr-[7px]'>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-6/12 ml-5 max-md:w-full max-md:ml-0'>
          <div className='flex w-full flex-col items-stretch mt-[45px] max-md:max-w-full max-md:mt-10'>
            <h2 className='text-primary-900 text-[38px] font-heading leading-[46px] max-md:max-w-full'>
              Let your business thrive under our supervision
            </h2>
            <p className='text-primary-900 text-base font-sans leading-7 mt-10 max-md:max-w-full'>
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
              <div className='flex w-full items-stretch gap-5 flex-wrap rounded-lg max-md:max-w-full'>
                <div className='items-center bg-secondary-custom flex min-h-[50px] gap-2 pl-3 pr-[11px] py-[13px] rounded-lg'>
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
                <div className='text-primary-900 text-base font-sans leading-loose grow shrink w-[454px] basis-auto my-auto max-md:max-w-full'>
                  Super useful and easy to use interface
                </div>
              </div>
              <div className='flex w-full items-stretch gap-5 flex-wrap mt-3 rounded-lg max-md:max-w-full'>
                <div className='items-center bg-secondary-custom flex min-h-[50px] gap-2 pl-3 pr-[11px] py-[13px] rounded-lg'>
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
                <div className='text-primary-900 text-base font-sans leading-loose grow shrink w-[454px] basis-auto my-auto max-md:max-w-full'>
                  Easiest way to grow your business in days
                </div>
              </div>
            </div>
            <button
              className='items-center bg-secondary-custom flex gap-5 text-sm text-primary-900 font-bold mt-10 rounded-lg hover:bg-secondary-200 transition-colors animate-fade-in'
              onClick={() => console.log('Contact Now clicked')}
            >
              <div className='bg-secondary-custom self-stretch flex gap-2 my-auto px-6 py-4 max-md:px-5'>
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
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.5 12H20.33'
                    stroke='currentColor'
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
