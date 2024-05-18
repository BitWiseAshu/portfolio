import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import developerPic from '../assets/Developer.png';
import maleImg from '../assets/maleImg.jpg'
import myImg from '../assets/Ashu.jpg'

const Home = () => {
  return (
    <>
      <div className='flex m-[2rem] justify-around md:gap-[2rem] lg:gap-0 max-[767px]:flex-col-reverse max-[767px]:w-[25rem] max-[767px]:m-0 max-[767px]:p-[2rem] max-[400px]:w-[20rem] max-[350px]:w-[18rem]'>
        <div className='left flex flex-col gap-[20px] lg:w-[30rem] lg:mr-[20rem] md:w-[22rem] font-serif max-[767px]:w-[22rem] max-[400px]:w-[18rem]'>
          <p className='font-bold text-[2rem] max-[430px]:text-[1.5rem] max-[500px]:mt-[1.5rem] animate-fade-up animate-delay-[0.75s] animate-once'>Hello It's Me</p>
          <p className='font-extrabold text-[2.2rem] max-[430px]:text-[1.5rem] animate-fade-up animate-delay-[0.75s] animate-once'>Om Nath Dixit</p>
          <p className='font-bold text-[2rem] max-[430px]:text-[1.6rem] animate-fade-up animate-delay-[0.75s] animate-once'>And I am a <span className='text-[blue] '>Web Developer</span></p>
          <p className='text-justify mt-[3rem] max-[350px]:pr-[1rem] animate-fade-up animate-delay-[0.75s] animate-once'>Hey there! I'm Om Nath Dixit, a driven student of Computer Science with a deep passion for web development. As I navigate through my academic journey, I'm continually refining my skills and exploring the ever-evolving landscape of web technologies.</p>
          {/* Wrap the button with Link */} 

          <div className='space-x-10 flex xl:flex-row lg:flex-col xl:gap-0 md:gap-2 md:flex-col max-[767px]:flex-col max-[767px]:gap-3 animate-fade-up animate-delay-[0.75s] animate-once'>
            <Link to='/contact'>
              {/* <button className='font-semibold text-[1.5rem] bg-bgColor w-[10rem]  p-[0.5rem] rounded-xl hover:bg-hoverColor font-serif'>Contact Me</button> */}
              <button className="group relative inline-flex text-[1.2rem] items-center justify-start p-[0.5rem] overflow-hidden  bg-indigo-50 py-3 pl-6 pr-16 font-semibold text-indigo-600 transition-all duration-150 ease-in-out hover:pl-16 hover:pr-6 hover:bg-[#6b61de] bg-[#7b5ebd] rounded-xl">
                <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                <span className="absolute right-0 pr-7 duration-200 ease-out group-hover:translate-x-12">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute left-0 -translate-x-12 pl-7 duration-200 ease-out group-hover:translate-x-0">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#af9b9b]">Contact Me</span>
              </button>
            </Link>

            <Link to='/internship'>
              <button className="group relative inline-flex text-[1.2rem] items-center justify-start p-[0.5rem] overflow-hidden  bg-indigo-50 py-3 pl-6 pr-16 font-semibold text-indigo-600 transition-all duration-150 ease-in-out hover:pl-16 hover:pr-6 hover:bg-[#6b61de] bg-[#7b5ebd] rounded-xl lg:start-[-2.5rem] xl:start-0 md:start-[-2.5rem] max-[767px]:ml-[-2.5rem]">
                <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                <span className="absolute right-0 pr-7 duration-200 ease-out group-hover:translate-x-12">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute left-0 -translate-x-12 pl-7 duration-200 ease-out group-hover:translate-x-0">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#af9b9b]">InternShip's</span>
              </button>
            </Link>

          </div>
        </div>

        <div className='right w-[20rem] xl:w-[23rem] lg:w-[30rem] md:w-[20rem] max-[767px]:w-[20rem] max-[350px]:w-[15rem] max-[400px]:w-[18rem] animate-fade-up animate-delay-[0.75s] animate-once'>
          <img src={myImg} alt="developer" className='max-[767px]:rounded-[10rem] rounded-[3rem] md:ml-[5rem]  lg:ml-0 lg:pr-[1rem]'/>
        </div>
      </div>
    </>
  )
}

export default Home;