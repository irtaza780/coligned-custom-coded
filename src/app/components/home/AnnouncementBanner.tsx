'use client';

import React from 'react';

interface AnnouncementBannerProps {
  text: string;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ text }) => {
  return (
    <div className='bg-primary-custom w-full text-sm text-primary-50 font-bold pt-[13px] pb-[22px] px-[70px] max-md:max-w-full max-md:px-5 text-center animate-fade-in'>
      {text}
    </div>
  );
};

export default AnnouncementBanner;
