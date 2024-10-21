import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Header from '@/components/Header';

const EventCard = ({ title, dateRange, location }) => (
  <div className="flex flex-col">
    <div className="w-full aspect-square rounded-lg overflow-hidden mb-2">
      <div className="w-full h-full bg-gradient-to-b from-teal-500 via-green-500 to-yellow-400 flex items-center justify-center p-4">
        <p className="text-white text-center font-bold">
          I AM PARTICIPATING IN BASED AFRICAN BUILDATHON
        </p>
      </div>
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{dateRange}</p>
    <p className="text-sm text-gray-600">{location}</p>
  </div>
);

const EventSelectionPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6 mb-8 ">
          <div className="relative w-full sm:w-64 sm:self-end pt-[] ">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2  border border-gray-300 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Select your event<br />and share
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            title="African Buildathon"
            dateRange="Oct 3rd - Oct 20th"
            location="Across Africa"
          />
          <EventCard
            title="African Buildathon"
            dateRange="Oct 3rd - Oct 20th"
            location="Across Africa"
          />
          <EventCard
            title="African Buildathon"
            dateRange="Oct 3rd - Oct 20th"
            location="Across Africa"
          />
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 hover:underline">see more template →</a>
        </div>
      </main>
    </div>
  );
};

export default EventSelectionPage;