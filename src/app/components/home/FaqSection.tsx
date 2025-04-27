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
        } flex items-stretch gap-5 flex-wrap justify-between pt-[23px] pb-[37px] px-[47px] rounded-lg max-md:max-w-full max-md:px-5 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md`}
        onClick={onClick}
      >
        <div className={`${isOpen ? 'font-bold' : 'font-normal'} transition-all duration-300`}>
          {question}
        </div>
        <div className='font-bold transition-transform duration-300 transform'>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {answer && (
          <div className='text-primary-800 font-sans leading-7 ml-11 mr-[45px] mt-[23px] max-md:max-w-full max-md:mr-2.5 transform transition-all duration-300 ease-in-out'>
            {answer}
          </div>
        )}
      </div>
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
    <section className="w-full px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className='self-center flex flex-col items-center mb-12'>
          <h2 className='text-primary-900 text-3xl md:text-4xl font-heading leading-tight text-center'>
            Frequently asked questions
          </h2>
          <p className='text-primary-800 text-base font-sans leading-loose mt-4'>
            Whats happening around the World.
          </p>
        </div>
        <div className='w-full max-w-4xl mx-auto'>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
          <div className='flex items-center gap-5 justify-center mt-8'>
            <button
              className='bg-secondary-custom text-primary-900 font-bold px-6 py-3 rounded-lg hover:bg-secondary-200 transition-all duration-300 ease-in-out hover:shadow-md'
              onClick={() => console.log('Contact Now clicked')}
            >
              Contact Now
            </button>
            <button
              className='border border-secondary-200 p-3 rounded-lg hover:bg-secondary-50 transition-all duration-300 ease-in-out hover:shadow-md'
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
              className='text-primary-900 text-sm font-bold hover:text-primary-700 transition-all duration-300 ease-in-out'
              onClick={() => console.log('Book a Demo clicked')}
            >
              Book a Demo Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
