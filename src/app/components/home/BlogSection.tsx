'use client';

import React from 'react';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, category, title }) => {
  return (
    <div className='min-w-60 w-[410px]'>
      <div className='aspect-[1.52] bg-gray-200 w-[410px] max-w-full rounded-[5px] flex items-center justify-center'>
        <span className='text-gray-500'>{image}</span>
      </div>
      <div className='w-full max-w-[410px] mt-5'>
        <div className='text-[rgba(19,17,38,1)] text-base font-normal leading-loose'>
          {category}
        </div>
        <h3 className='text-[#201C44] text-2xl font-bold leading-8 mt-[26px]'>
          {title}
        </h3>
        <button
          className='border flex min-h-[50px] w-12 items-center gap-2 mt-[26px] px-3 py-[13px] rounded-[5px] border-[rgba(250,224,225,1)] border-solid hover:bg-[#faf5f5] transition-colors'
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
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: 'Blog Image 1',
      category: 'Growth',
      title: '15 ways to grow your saas in 21 days with no money'
    },
    {
      image: 'Blog Image 2',
      category: 'Career',
      title: 'Why everyone is moving today to subscribtions'
    },
    {
      image: 'Blog Image 3',
      category: 'Design',
      title: '9 ways to make it quick and never look back again in your life'
    }
  ];

  return (
    <>
      <div className='self-center flex flex-col items-center mt-[91px] max-md:max-w-full max-md:mt-10'>
        <h2 className='text-[rgba(32,28,68,1)] text-[38px] font-bold leading-[1.2] text-center max-md:max-w-full'>
          Our latest updates for you here!
        </h2>
        <p className='text-[rgba(19,17,38,1)] text-base font-normal leading-loose mt-[11px]'>
          Whats heppening around the World.
        </p>
      </div>
      <div className='flex gap-5 flex-wrap mt-[52px] max-md:mr-1 max-md:mt-10 justify-center'>
        {blogPosts.map((post, index) => (
          <BlogCard
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
