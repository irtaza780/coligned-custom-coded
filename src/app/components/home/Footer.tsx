'use client';

import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center px-4 mt-[109px] max-md:mt-10">
      {/* Top Links */}
      <div className="flex flex-wrap justify-center gap-8 text-sm text-[rgba(19,17,38,1)] font-bold whitespace-nowrap w-full max-w-[1280px]">
        <Link href="/" className="hover:text-[#3C3679] transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#3C3679] transition-colors">
          About
        </Link>
        <Link href="/pricing" className="hover:text-[#3C3679] transition-colors">
          Pricing
        </Link>
        <Link href="/blog" className="hover:text-[#3C3679] transition-colors">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-[#3C3679] transition-colors">
          Contact
        </Link>
      </div>

      {/* Divider Line */}
      <div className="border-t border-black w-full max-w-[1280px] mt-16 max-md:mt-10" />

      {/* Bottom Section */}
      <div className="flex w-full max-w-[1280px] flex-wrap justify-between items-center mt-9 gap-6 max-md:flex-col max-md:text-center">
        {/* Rights Text */}
        <div className="text-sm text-[rgba(19,17,38,1)] font-normal">
          All rights reserved ® uifry.com | Terms and conditions apply!
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          {[...Array(5)].map((_, index) => (
            <a
              key={index}
              href="#"
              className="aspect-square bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center"
              aria-label={`Social media link ${index + 1}`}
            >
              <span className="text-gray-500 text-xs">{index + 1}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
