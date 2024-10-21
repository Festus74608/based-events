import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const OnchainPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className=''></div>
        <div className="p-10">
          <div className="bg-blue-600 absolute top-0 left-0 w-1/3 h-2 rounded-tl-lg"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 w-full">Just getting started onchain?</h2>
          <div className="space-y-4">
            <Link href="https://www.base.org/names">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
              <span>Get Your Basename</span>
            </button>
            </Link>
            <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-50 transition duration-300">
              Latest Event On Base
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnchainPopup;