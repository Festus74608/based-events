import React, { useState } from 'react';
import { Image } from 'lucide-react';
import Header from '@/components/Header';
import 'react-phone-input-2/lib/style.css'; // Import the library's CSS
import PhoneInput from 'react-phone-input-2'; // Import PhoneInput component

const CreateEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ eventName, eventDate, eventVenue, phoneNumber });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Create event<br />happening soon!
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-2/3">
            <div className="space-y-6">
              <div>
                <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-1">Name of Event:</label>
                <input
                  type="text"
                  id="eventName"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Date:</label>
                <input
                  type="date"
                  id="eventDate"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="eventVenue" className="block text-sm font-medium text-gray-700 mb-1">Venue:</label>
                <input
                  type="text"
                  id="eventVenue"
                  value={eventVenue}
                  onChange={(e) => setEventVenue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Phone Number Section */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-black mb-1">Phone Number:</label>
                <PhoneInput
                  country={'us'} // Default country
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  inputStyle={{ width: '100%' }} // Style to match the form inputs
                  inputProps={{
                    name: 'phone',
                    required: true,
                  }}
                  className="text-black"
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Submit
              </button>
            </div>
          </form>

          {/* Image Upload Section */}
          <div className="w-full md:w-1/3 bg-blue-50 rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4">
              <Image size={48} className="text-gray-400" />
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition duration-300">
              Upload Template
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateEventPage;
