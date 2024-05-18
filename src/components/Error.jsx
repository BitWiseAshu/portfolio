// Error.js

import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex md:items-center justify-center min-h-screen lg:bg-[#111827] ">
      <div className="max-w-md w-full p-8 bg-white shadow-lg md:rounded-2xl bg-[#374151] font-serif ">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1f2937]">Oops! Page Not Found</h1>
        <p className="text-lg md:text-xl text-center mb-6 text-[#1f2937]">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="block bg-[#3b82f6] hover:bg-[#1f2937] hover:text-[#1f2937] text-white font-bold py-2 px-4 rounded transition duration-300 text-center hover:underline">Go back to Home</Link>
      </div>
    </div>
  );
}

export default Error;
 