// import React from 'react'

// const Internship = ({ company, position, duration, description }) => {
//   return (
//     <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mb-4">
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800">{position}</h2>
//         <p className="text-sm text-gray-600">{company}</p>
//         <p className="text-sm text-gray-600">{duration}</p>
//         <p className="text-sm text-gray-700 mt-2">{description}</p>
//       </div>
//     </div>
//   )
// }

// export default Internship


// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";

// const Internship = ({ company, position, duration, description, offerLetter }) => {
//   const [showOffer, setShowOffer] = useState(false);

//   return (
//     <div className="max-w-lg mx-auto bg-[#9c8181] shadow-md rounded-md overflow-hidden mb-4">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-gray-800">{position}</h2>
//         <p className="text-sm text-gray-600">{company}</p>
//         <p className="text-sm text-gray-600">{duration}</p>
//         <p className="text-sm text-gray-700 mt-2">{description}</p>
//         <button
//           onClick={() => setShowOffer(!showOffer)}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           Show Offer Letter
//         </button>
//         <Transition
//           show={showOffer}
//           enter="transition-opacity duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="transition-opacity duration-300"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           {(ref) => (
//             <div ref={ref} className="mt-4 p-4 bg-gray-100 rounded-md">
//               <a href={offerLetter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                 View Offer Letter
//               </a>
//             </div>
//           )}
//         </Transition>
//       </div>
//     </div>
//   );
// };

// export default Internship;






import React from "react";

const Internship = ({ company, position, duration, description, offerLetter }) => {

  return (
    <div className="max-w-lg mx-auto bg-[#b4b5c1] rounded-xl overflow-hidden mb-4 max-[767px]:bg-[#fff] shadow-xl hover:shadow-[#94a3b8]">
      <div className="p-4 space-y-[1.2rem]">
        <h2 className="text-2xl font-semibold text-[#2d3748] font-serif">{position}</h2>
        <p className=" text-[#202937] font-serif">{company}</p>
        <p className=" text-[#202937] font-serif">{duration}</p>
        <p className=" text-[#202937] font-serif mt-2">{description}</p>
        <a
          href={offerLetter}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 text-center hover:underline hover:text-[#334271] hover:text-[1.2rem] hover:font-serif"
        >
         { "Show Offer Letter" ? "View Offer Letter" : "Offer Letter Not Available"}
        </a>
      </div>
    </div>
  );
};

export default Internship;
