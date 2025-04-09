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
    <div className='w-full text-base rounded-[5px] max-md:max-w-full mb-5'>
      <div
        className={`${
          isOpen
            ? 'bg-[rgba(60,54,121,1)] text-white'
            : 'border border-[rgba(19,17,38,1)] border-solid text-[rgba(19,17,38,1)]'
        } flex items-stretch gap-5 flex-wrap justify-between pt-[23px] pb-[37px] px-[47px] rounded-[5px] max-md:max-w-full max-md:px-5 cursor-pointer`}
        onClick={onClick}
      >
        <div className={`${isOpen ? 'font-bold' : 'font-normal'}`}>
          {question}
        </div>
        <div className='font-bold'>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && answer && (
        <div className='text-[rgba(19,17,38,1)] font-normal leading-7 ml-11 mr-[45px] mt-[23px] max-md:max-w-full max-md:mr-2.5'>
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
        <h2 className='text-[rgba(32,28,68,1)] text-[38px] font-bold leading-[1.2] text-center max-md:max-w-full'>
          Frequently asked questions
        </h2>
        <p className='text-[rgba(19,17,38,1)] text-base font-normal leading-loose mt-[11px]'>
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
        <div className='flex items-center gap-5 justify-center mt-5 rounded-[5px] cursor-pointer'>
          <button
            className='bg-[rgba(250,224,225,1)] self-stretch gap-2 text-sm text-[rgba(19,17,38,1)] font-bold my-auto px-6 py-4 rounded-[5px] max-md:px-5 hover:bg-[#f8d0d2] transition-colors cursor-pointer'
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
    </>
  );
};

export default FaqSection;
