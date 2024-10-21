import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import OnchainPopup from './OnchainPopup';
import Link from 'next/link';

const MainContent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="bg-blue-50 min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 italic mb-2">
                Base Is For Everyone.
              </h1>
              <p className='text-blue-600 text-3xl sm:text-4xl mb-4'>Bring Your Event <br />Onchain</p>
              <p className="text-xl text-gray-600 my-8 w-full md:w-[400px]">
                Customize Your Profile Picture For The Next
                Event And Show The World
              </p>
              <Link href="/events">
              <button className="bg-blue-600 text-white md:my-0 my-5 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                Explore Events
              </button>
              </Link>
            </div>

            {/* Right side content */}
            <div className="lg:w-1/2 relative">
              <Image src="/Hero.svg" width={513} height={549} alt="Hero image" />
            </div>
          </div>
        </div>
      </div>

      {showPopup && <OnchainPopup />}
    </div>
  );
};

export default MainContent;