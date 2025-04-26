import React from 'react';

interface BenefitItemProps {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, text, bgColor }) => {
  return (
    <div className='flex min-w-60 items-center gap-5 w-[311px]'>
      <div
        className={`items-center ${bgColor} self-stretch flex min-h-[50px] gap-2 w-[47px] my-auto pl-3 pr-[11px] py-[13px] rounded-lg`}
      >
        {icon}
      </div>
      <div className='text-primary-50 text-base font-sans leading-7 self-stretch w-[244px] my-auto'>
        {text}
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const checkIcon = (
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
  );

  const timeIcon = (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );

  const uploadIcon = (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9 17V11L7 13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 11L11 13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 10H18C15 10 14 9 14 6V2L22 10Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );

  return (
    <div className='bg-primary-custom flex w-full flex-col items-center justify-center mt-[101px] px-[70px] py-[93px] rounded-lg max-md:max-w-full max-md:mt-10 max-md:px-5 shadow-soft'>
      <div className='bg-primary-custom flex gap-[40px_60px] flex-wrap rounded-lg max-md:max-w-full'>
        <BenefitItem
          icon={checkIcon}
          text='Super useful and easy to with over 100+ customisations!'
          bgColor='bg-secondary-custom'
        />
        <BenefitItem
          icon={timeIcon}
          text='Super useful and easy to with over 100+ customisations!'
          bgColor='bg-secondary-200'
        />
        <BenefitItem
          icon={uploadIcon}
          text='Super useful and easy to with over 100+ customisations!'
          bgColor='bg-secondary-300'
        />
      </div>
    </div>
  );
};

export default BenefitsSection;
