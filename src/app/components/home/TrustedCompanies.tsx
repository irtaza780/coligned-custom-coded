'use client';

import React from 'react';

const TrustedCompanies: React.FC = () => {
  return (
    <div className='border border-[#D0D0D0] mt-[74px] px-[63px] py-11 rounded-[5px] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-[19%] max-md:w-full max-md:ml-0'>
          <h2 className='text-[rgba(19,17,38,1)] text-lg font-bold leading-7 max-md:mt-10'>
            Trusted by over 100+ businesses worldwide!
          </h2>
        </div>
        <div className='w-[81%] ml-5 max-md:w-full max-md:ml-0'>
          <div className='flex gap-[40px_90px] flex-wrap rounded-[5px] max-md:max-w-full max-md:mt-10'>
            {/* Placeholder images for company logos */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className='aspect-[1] bg-gray-200 w-[63px] h-[63px] rounded-full shrink-0 flex items-center justify-center'
                aria-label={`Company logo ${index + 1}`}
              >
                <span className='text-gray-500 text-xs'>Logo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
