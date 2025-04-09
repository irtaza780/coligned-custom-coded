'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className='w-full max-md:max-w-full' aria-labelledby='hero-heading'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-6/12 max-md:w-full max-md:ml-0'>
          <div className='flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10'>
            <h1
              id='hero-heading'
              className='text-[#201C44] text-[54px] font-bold leading-[62px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]'
            >
              Launch a software businesses website today with us!
            </h1>
            <p className='text-[#131126] text-base font-normal leading-7 mt-10 max-md:max-w-full'>
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond.
            </p>
            <div className='flex items-center gap-5 mt-10'>
              <button
                className='bg-[#FAE0E1] self-stretch gap-2 text-sm text-[#131126] font-bold my-auto px-6 py-4 rounded-[5px] max-md:px-5 hover:bg-[#f8d0d2] transition-colors'
                onClick={() => console.log('Contact Now clicked')}
              >
                Contact Now
              </button>
              <button
                className='items-center border border-[#FAE0E1] self-stretch flex min-h-[50px] gap-2 w-12 h-[49px] my-auto px-3 py-[13px] rounded-[5px] border-solid hover:bg-[#faf5f5] transition-colors'
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
                className='text-[#131126] text-base font-bold leading-7 self-stretch my-auto hover:text-[#3C3679] transition-colors'
                onClick={() => console.log('Book a Demo clicked')}
              >
                Book a Demo Today
              </button>
            </div>
            <div className='flex w-[300px] max-w-full items-stretch gap-5 mt-10 rounded-[5px]'>
              <div className='items-center bg-[#FAE0E1] flex min-h-[50px] gap-2 w-[49px] h-[49px] px-3 py-[13px] rounded-[5px]'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
                    fill='#3C3679'
                    stroke='#3C3679'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <p className='text-[#131126] text-base font-normal leading-loose grow shrink w-[222px] my-auto'>
                Rated 4.9 out of 1200 reviews
              </p>
            </div>
          </div>
        </div>
        <div className='w-6/12 ml-5 max-md:w-full max-md:ml-0'>
          <div className='flex grow items-stretch flex-wrap max-md:max-w-full max-md:mt-10'>
            <div className='z-10 mt-3.5 max-md:-mr-2.5'>
              <div className='flex items-stretch gap-[5px] text-[rgba(19,17,38,1)] whitespace-nowrap'>
                <div className='text-[19px] font-bold grow'>84%</div>
                <div className='text-[9px] font-semibold mt-[11px]'>+0.4%</div>
              </div>
              <div className='flex w-full flex-col mt-7 pl-1 pr-4'>
                <div className='flex gap-[7px]'>
                  <div className='bg-[rgba(250,224,225,1)] flex w-[15px] shrink-0 h-[19px] mt-[13px] rounded-[1px]' />
                  <div className='bg-[rgba(250,224,225,1)] flex w-[15px] shrink-0 h-[13px] mt-[19px] rounded-[1px]' />
                  <div className='bg-[rgba(250,224,225,1)] self-stretch flex w-[15px] shrink-0 h-8 rounded-[1px]' />
                </div>
                <div className='flex items-stretch gap-3 text-[10px] text-[rgba(32,28,68,1)] font-medium whitespace-nowrap'>
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                </div>
              </div>
            </div>
            <div className='bg-[rgba(250,224,225,1)] flex flex-col grow shrink-0 basis-0 w-fit pr-20 pt-[49px] pb-[476px] rounded-[5px] max-md:max-w-full max-md:pb-[100px]'>
              <div className='flex items-stretch gap-1.5'>
                <div className='bg-[rgba(250,224,225,1)] flex w-4 shrink-0 h-[23px] mt-[26px] rounded-[1px]' />
                <div className='bg-[rgba(60,54,121,1)] flex w-[15px] shrink-0 h-[49px] rounded-[1px]' />
                <div className='bg-[rgba(250,224,225,1)] flex w-[15px] shrink-0 h-[37px] mt-3 rounded-[1px]' />
                <div className='bg-[rgba(250,224,225,1)] flex w-[15px] shrink-0 h-[37px] mt-3 rounded-[1px]' />
              </div>
              <div className='flex items-stretch gap-4 text-[10px] text-[rgba(32,28,68,1)] font-medium whitespace-nowrap'>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
