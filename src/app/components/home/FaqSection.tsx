'use client';

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer?: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick
}) => {
  return (
    <div className='w-full text-base rounded-lg max-md:max-w-full mb-5'>
      <div
        className={`${
          isOpen
            ? 'bg-primary-custom text-primary-50'
            : 'border border-primary-800 border-solid text-primary-800'
        } flex items-stretch gap-5 flex-wrap justify-between pt-[23px] pb-[37px] px-[47px] rounded-lg max-md:max-w-full max-md:px-5 cursor-pointer`}
        onClick={onClick}
      >
        <div className={`${isOpen ? 'font-bold' : 'font-normal'}`}>
          {question}
        </div>
        <div className='font-bold'>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && answer && (
        <div className='text-primary-800 font-sans leading-7 ml-11 mr-[45px] mt-[23px] max-md:max-w-full max-md:mr-2.5'>
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is the best way to create a saas business today?',
      answer:
        'Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.\n\nLaunch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.'
    },
    {
      question: 'What is the best way to create a saas business today?',
      answer:
        'Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.'
    },
    {
      question: 'What is the best way to create a saas business today?',
      answer:
        'Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.'
    },
    {
      question: 'What is the best way to create a saas business today?',
      answer:
        'Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.'
    },
    {
      question: 'What is the best way to create a saas business today?',
      answer:
        'Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.'
    }
  ];

  return (
    <>
      <div className='self-center flex flex-col items-center mt-[178px] max-md:max-w-full max-md:mt-10'>
        <h2 className='text-primary-900 text-[38px] font-heading leading-[1.2] text-center max-md:max-w-full'>
          Frequently asked questions
        </h2>
        <p className='text-primary-800 text-base font-sans leading-loose mt-[11px]'>
          Whats happening around the World.
        </p>
      </div>
      <div className='self-center flex w-full max-w-[1064px] flex-col items-center justify-center mt-[43px] max-md:max-w-full max-md:mt-10'>
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          />
        ))}
        <div className='flex items-center gap-5 justify-center mt-5 rounded-lg cursor-pointer'>
          <button
            className='bg-secondary-custom self-stretch gap-2 text-sm text-primary-900 font-bold my-auto px-6 py-4 rounded-lg max-md:px-5 hover:bg-secondary-200 transition-colors cursor-pointer animate-fade-in'
            onClick={() => console.log('Contact Now clicked')}
          >
            Contact Now
          </button>
          <button
            className='border self-stretch flex min-h-[50px] items-center gap-2 w-12 my-auto px-3 py-[13px] rounded-lg border-secondary-200 border-solid hover:bg-secondary-50 transition-colors'
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
          </button>
          <button
            className='text-primary-900 text-sm font-bold leading-7 self-stretch my-auto hover:text-primary-700 transition-colors'
            onClick={() => console.log('Book a Demo clicked')}
          >
            Book a Demo Today
          </button>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
