// import React from 'react'
// import { useState, useEffect } from 'react';

// const Typewriter = ({ text, value }) => {
//   const [currentText, setCurrentText] = useState('');
//   const [index, setIndex] = useState(0);

//   if (value === 1) {
//     useEffect(() => {
//       const interval = setInterval(() => {
//         if (index < text.length) {
//           setCurrentText(currentText + text[index]);
//           setIndex(index + 1);
//         } else {
//           clearInterval(interval);
//         }
//       }, 50);

//       return () => clearInterval(interval);
//     }, [text, index]);
//   }
//   else if (value === 0){
//     const words = text.split(' '); // Split the text into an array of words

//     const interval = setInterval(() => {
//       if (index < words.length) { // Check if there are more words to display
//         setCurrentText(currentText + words[index] + ' '); // Append the next word with a space
//         setIndex(index + 1);
//       } else {
//         clearInterval(interval); // Stop when all words have been displayed
//       }
//     }, 1000);
//   }

//   return <span>{currentText}</span>;
// };


// export default Typewriter




import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, value }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (value === 1) {
      const interval = setInterval(() => {
        if (index < text.length) {
          setCurrentText((prevText) => prevText + text[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (value === 0) {
      const words = text.split(' '); // Split the text into an array of words

      const interval = setInterval(() => {
        if (index < words.length) {
          setCurrentText((prevText) => prevText + words[index] + ' '); // Append the next word with a space
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(interval); // Stop when all words have been displayed
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [text, index, value]);

  return <span>{currentText}</span>;
};

export default Typewriter;
