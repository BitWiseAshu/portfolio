import React from 'react'
import developerPic from '../assets/Developer.png'

const Home = () => {
  return (
    <>
      <div className='flex m-[4rem] justify-around'>
        <div className='left flex flex-col gap-[20px] w-[30rem] mr-[20rem]'>
            <p className='font-bold text-[2rem]'>Hello It's Me</p>
            <p className='font-extrabold text-[2.2rem]'>Om Nath Dixit</p>
            <p className='font-bold text-[2rem]'>And I am a <span className='text-[blue]'>Web Developer</span></p>
            <p className='text-justify mt-[3rem]'>Hey there! I'm Om Nath Dixit, a driven student of Computer Science with a deep passion for web development. As I navigate through my academic journey, I'm continually refining my skills and exploring the ever-evolving landscape of web technologies.</p>
        </div>

        <div className='right w-[25rem]'>
            <img src={developerPic} alt="developer" />
        </div>
      </div>
    </>
  )
}

export default Home



// import React from 'react';
// import developerPic from '../assets/Developer.png';

// const Home = () => {
//   return (
//     <div className='container mx-auto px-4 py-8 flex flex-col items-center lg:flex-row lg:justify-around'>
//       <div className='mb-8 lg:mr-8 lg:max-w-md'>
//         <img src={developerPic} alt="developer" className='w-full' />
//       </div>
//       <div className='text-center lg:text-left lg:max-w-lg'>
//         <p className='font-bold text-2xl'>Hello, It's Me</p>
//         <p className='font-extrabold text-3xl'>Om Nath Dixit</p>
//         <p className='font-bold text-2xl'>And I am a <span className='text-blue-500'>Web Developer</span></p>
//         <p className='text-lg mt-6'>Hey there! I'm Om Nath Dixit, a driven student of Computer Science with a deep passion for web development. As I navigate through my academic journey, I'm continually refining my skills and exploring the ever-evolving landscape of web technologies.</p>
//       </div>
//     </div>
//   );
// }

// export default Home;