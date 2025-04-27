'use client';

import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <h2 className="text-primary-900 text-3xl md:text-4xl font-bold leading-tight">
              Let your business thrive under our supervision 
            </h2>
            <p className="text-primary-800 text-base md:text-lg mt-6 md:mt-8">
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business like
              yours thrive every day and beyond.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-12">
              {/* Stat 1 */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-[rgba(250,224,225,1)] p-3 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-900">100+</div>
                  <div className="text-sm text-primary-800">Successful Projects</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-[rgba(250,224,225,1)] p-3 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-900">978+</div>
                  <div className="text-sm text-primary-800">Clients Today</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-12">
              <button
                className="bg-[rgba(250,224,225,1)] text-primary-900 font-bold px-6 py-3 rounded-lg hover:bg-[#f8d0d2] transition-colors"
                onClick={() => console.log('Contact Now clicked')}
              >
                Contact Now
              </button>
              <button
                className="border border-[rgba(250,224,225,1)] p-3 rounded-lg hover:bg-[#faf5f5] transition-colors"
                aria-label="See more"
                onClick={() => console.log('Arrow button clicked')}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="text-primary-900 text-sm font-bold hover:text-[#3C3679] transition-colors"
                onClick={() => console.log('Book a Demo clicked')}
              >
                Book a Demo Today
              </button>
            </div>
          </div>

          {/* Right Column - Stats Chart */}
          <div className="bg-[rgba(246,246,249,1)] rounded-lg p-6 md:p-8 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Chart Area */}
              <div className="md:col-span-2">
                <div className="relative aspect-[4/3] bg-white rounded-lg shadow-sm p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Stats Chart</span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-sm font-medium">
                    14%
                  </div>
                </div>
              </div>

              {/* Stats Info */}
              <div className="flex flex-col justify-center">
                <div className="text-primary-900 text-lg font-semibold">
                  <span className="capitalize">C</span>
                  <span>LIENTS</span>
                  <span> File Scanning</span>
                </div>
                <div className="text-sm mt-4">
                  <span>Total C</span>
                  <span className="lowercase">LIENTS</span>
                </div>
                <div className="text-2xl font-bold mt-6">$897,543</div>
                <div className="text-xs font-medium mt-2 text-right">$5M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
