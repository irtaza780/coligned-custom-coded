'use client';

import React from 'react';
import Image from 'next/image';
interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  src: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, category, title, src }) => {
  return (
    <div className='min-w-60 w-[410px]'>
      <div className='aspect-[1.52] bg-secondary-100 w-[410px] max-w-full rounded-lg flex items-center justify-center'>
        <Image src={src} alt={title} width={500} height={500} />
      </div>
      <div className='w-full max-w-[410px] mt-5'>
        <div className='text-primary-800 text-base font-sans leading-loose'>
          {category}
        </div>
        <h3 className='text-primary-900 text-2xl font-heading leading-8 mt-[26px]'>
          {title}
        </h3>
        <button
          className='border flex min-h-[50px] w-12 items-center gap-2 mt-[26px] px-3 py-[13px] rounded-lg border-secondary-200 border-solid hover:bg-secondary-50 transition-colors'
          aria-label='Read more'
          onClick={() => console.log(`Read more about: ${title}`)}
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
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: 'Blog Image 1',
      category: 'Growth',
      src: '/img/blog1.svg',
      title: '15 ways to grow your saas in 21 days with no money'
    },
    {
      image: 'Blog Image 2',
      category: 'Career',
      src: '/img/blog2.svg',
      title: 'Why everyone is moving today to subscribtions'
    },
    {
      image: 'Blog Image 3',
      category: 'Design',
      src: '/img/blog3.svg',
      title: '9 ways to make it quick and never look back again in your life'
    }
  ];

  return (
    <>
      <div className='self-center flex flex-col items-center mt-[91px] max-md:max-w-full max-md:mt-10'>
        <h2 className='text-primary-900 text-[38px] font-heading leading-[1.2] text-center max-md:max-w-full'>
          Our latest updates for you here!
        </h2>
        <p className='text-primary-800 text-base font-sans leading-loose mt-[11px]'>
          Whats heppening around the World.
        </p>
      </div>
      <div className='flex gap-5 flex-wrap mt-[52px] max-md:mr-1 max-md:mt-10 justify-center'>
        {blogPosts.map((post, index) => (
          <BlogCard
            src={post.src}
            key={index}
            image={post.image}
            category={post.category}
            title={post.title}
          />
        ))}
      </div>
    </>
  );
};

export default BlogSection;
