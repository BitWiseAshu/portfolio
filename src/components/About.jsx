import React from 'react'
import male from '../assets/male_image.png'
import maleImg from '../assets/maleImg.jpg'

import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <div className='flex justify-around'>
      <div className='w-[50rem]'>
        <div className='flex items-center p-[2rem] gap-[2rem]'>
          <div className='w-[15rem]'>
            <img src={male} alt="My Image" />
          </div>
          <div className='space-y-[2rem]'>
            <p> <span className='font-bold text-textColor'> Name:   </span> <span className='text-stone'>Om Nath Dixit</span></p>
            <p> <span className='font-bold text-textColor'> Profile:</span> <span className='text-stone'>Web Developer</span></p>
            <p> <span className='font-bold text-textColor'> Email:  </span> <span className='text-stone'>omnathdixit7033@gmail.com</span></p>
            <p> <span className='font-bold text-textColor'> Phone:  </span> <span className='text-stone'>+91 7033004295</span></p>
          </div>
        </div>

        <div className=' flex flex-col space-y-5 pl-[2rem] pb-[2rem] ml-[2rem]'>
          <p className='text-[2rem] font-semibold text-aboutColor2 underline'>Skills</p>
          <div className='space-y-[1rem]'>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold text-aboutColor'>HTML, CSS, JavaScript</p>
              <div>
                <ProgressBar completed={80} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
            <div className='space-y-[0.5rem] '>
              <p className='font-bold text-aboutColor'>Data Structures and Algorithm in Java</p>
              <div>
                <ProgressBar completed={90} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold text-aboutColor'>React Js, Tailwind CSS</p>
              <div>
                <ProgressBar completed={85} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold text-aboutColor'>Node js, Express js</p>
              <div>
                <ProgressBar completed={70} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold text-aboutColor'>GIT/GitHub, MongoDB, Postman</p>
              <div>
                <ProgressBar completed={80} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-5 w-[35rem] items-center'>
        <div className='space-y-5'>
          <h2 className='font-bold text-[2rem] text-textColor underline font-serif'>About Me</h2>
          <p className='font-serif'>
            Welcome to my corner of the web! I'm Om Nath Dixit, a dedicated web developer with a thirst for knowledge and a passion for crafting digital experiences. Currently, I'm on a journey to earn my Bachelor of Technology in Computer Science and Engineering, where I'm honing my skills and expanding my horizons in the world of technology.
          </p>

          <p className='font-serif'>
            My fascination with web development stems from its limitless potential to bring ideas to life and make an impact on people's lives. With every line of code I write, I strive to create websites that are not only visually stunning but also intuitive and user-friendly.
          </p>

        </div>

        <div className='space-y-3'>
          <h1 className='font-bold text-[2rem] text-textColor underline font-serif'>Education</h1>

          <div className='space-y-5'>
            <div className='space-y-1'>
              <h3 className='font-bold text-[1.2rem] text-aboutColor2'>Amity University, Uttar Pradesh (2021-2025)</h3>
              <p className='font-bold  text-aboutColor'>Bachelor's in Technology, Computer Science and Engineering</p>
              <p className='text-justify font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className='space-y-1'>
              <h3  className='font-bold text-[1.2rem]  text-aboutColor2'>SBDPR College, Saran (2019 - 2021)</h3>
              <p className='font-bold  text-aboutColor'>Senior Secondary School</p>
              <p className='text-justify font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
