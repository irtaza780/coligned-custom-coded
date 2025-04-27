'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
// import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-4 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo or Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary-900">
              Coligned
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary-900 hover:text-primary-700 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-primary-900 hover:text-primary-700 transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-primary-900 hover:text-primary-700 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-primary-900 hover:text-primary-700 transition-colors">
              Blog
            </Link>
            <button
              className="bg-secondary-custom text-primary-900 px-6 py-2 rounded-lg hover:bg-secondary-200 transition-colors animate-fade-in"
              onClick={() => console.log('Contact button clicked')}
            >
              Contact Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-primary-900"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <Image 
                  src="/icon/menu.svg" 
                  alt="Menu" 
                  width={24} 
                  height={24} 
                  className="text-primary-900"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-lg mt-2">
            <Link 
              href="/" 
              className="block px-3 py-2 text-primary-900 hover:text-primary-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-primary-900 hover:text-primary-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/pricing" 
              className="block px-3 py-2 text-primary-900 hover:text-primary-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/blog" 
              className="block px-3 py-2 text-primary-900 hover:text-primary-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <button
              className="w-full text-left px-3 py-2 bg-secondary-custom text-primary-900 rounded-lg hover:bg-secondary-200 transition-colors animate-fade-in"
              onClick={() => {
                console.log('Contact button clicked');
                setIsMenuOpen(false);
              }}
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
