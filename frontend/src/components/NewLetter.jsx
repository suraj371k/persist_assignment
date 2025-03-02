import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-lg md:text-xl font-semibold text-gray-300 mb-4">
          Sign up to get notified first about new Startupathon projects and receive updates through our newsletter.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-semibold cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
