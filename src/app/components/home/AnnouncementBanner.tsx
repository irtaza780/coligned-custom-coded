'use client';

import React from 'react';

interface AnnouncementBannerProps {
  text: string;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ text }) => {
  return (
    <div className='bg-[#3C3679] w-full text-sm text-white font-bold pt-[13px] pb-[22px] px-[70px] max-md:max-w-full max-md:px-5 text-center'>
      {text}
    </div>
  );
};

export default AnnouncementBanner;
