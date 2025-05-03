'use client';

import React, { useState } from 'react';
import Image from 'next/image';
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');
    setFormData({ fullName: '', email: '' });
  };

  return (
    <div className='mt-[77px] max-md:max-w-full max-md:mr-0.5 max-md:mt-10'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-6/12 max-md:w-full max-md:ml-0'>
          <div className='text-base text-primary-800 font-sans leading-7 mt-8 max-md:max-w-full max-md:mt-10'>
            <h2 className='text-primary-900 text-[38px] font-heading leading-[46px] max-md:max-w-full'>
              Let your business thrive under our supervision
            </h2>
            <div className='mt-10 max-md:max-w-full'>
              <span className='text-primary-800'>
                Launch a business today with our help and get it done with
                amazing launch features, websites and more with uifry. We help
                business like yours thrive every day and beyond.
              </span>
              <br />
              <br />
              <span className='font-bold text-primary-800'>
                We are making every business grow!
              </span>
              <br />
              <br />
            </div>
            <form
              onSubmit={handleSubmit}
              className='w-[447px] max-w-full mt-10 rounded-lg'
            >
              <div className='border border-secondary-200 flex w-full gap-5 pl-4 pr-[103px] py-4 rounded-lg border-solid max-md:pr-5'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <input
                  type='text'
                  name='fullName'
                  placeholder='Full Name'
                  value={formData.fullName}
                  onChange={handleChange}
                  className='bg-transparent outline-none flex-1'
                  required
                />
              </div>
              <div className='border border-secondary-200 flex w-full gap-5 mt-4 pl-4 pr-[103px] py-4 rounded-lg border-solid max-md:pr-5'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='bg-transparent outline-none flex-1'
                  required
                />
              </div>
              <div className='flex w-full max-w-[447px] items-center gap-5 text-sm font-bold mt-4 max-md:max-w-full'>
                <button
                  type='submit'
                  className='justify-center items-center bg-secondary-custom self-stretch flex min-w-60 w-[447px] gap-2 my-auto px-6 py-[18px] rounded-lg max-md:px-5 hover:bg-secondary-200 transition-colors animate-fade-in'
                >
                  <span className='self-stretch my-auto'>Contact Now</span>
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
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='w-6/12 ml-5 max-md:w-full max-md:ml-0'>
          <div className='aspect-[1.08] bg-secondary-50 w-full grow rounded-lg max-md:max-w-full max-md:mt-10 flex items-center justify-center shadow-soft'>
            <Image src="/img/presenting.svg" alt="Contact" width={500} height={500} />
            {/* <span className='text-primary-700'>Contact Image</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
