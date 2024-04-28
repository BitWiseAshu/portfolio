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
          <p className='text-[2rem] font-semibold'>Skills</p>
          <div className='space-y-[1rem]'>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold'>HTML, CSS, JavaScript</p>
              <div>
                <ProgressBar completed = {80} bgColor = "grey" animateOnRender = {true} />
              </div>
            </div>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold'>Data Structures and Algorithm in Java</p>
              <div>
                <ProgressBar completed = {90} bgColor = "grey" animateOnRender = {true} />
              </div>
            </div>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold'>React Js, Tailwind CSS</p>
              <div>
                <ProgressBar completed = {85} bgColor = "grey" animateOnRender = {true} />
              </div>
            </div>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold'>Node js, Express js</p>
              <div>
                <ProgressBar completed = {70} bgColor = "grey" animateOnRender = {true} />
              </div>
            </div>
            <div className='space-y-[0.5rem]'>
              <p className='font-bold'>GIT/GitHub, MongoDB, Postman</p>
              <div>
                <ProgressBar completed = {80} bgColor = "grey" animateOnRender = {true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-5 w-[35rem] items-center'>
        <h2 className='font-bold text-[2rem] text-textColor'>About Me</h2>
        <p>
          Welcome to my corner of the web! I'm Om Nath Dixit, a dedicated web developer with a thirst for knowledge and a passion for crafting digital experiences. Currently, I'm on a journey to earn my Bachelor of Technology in Computer Science and Engineering, where I'm honing my skills and expanding my horizons in the world of technology.
        </p>

        <p>
          My fascination with web development stems from its limitless potential to bring ideas to life and make an impact on people's lives. With every line of code I write, I strive to create websites that are not only visually stunning but also intuitive and user-friendly.
        </p>

        <p>
          Driven by a curiosity to explore new technologies and a determination to overcome challenges, I'm constantly seeking opportunities to learn and grow. Whether it's mastering the latest frontend frameworks or delving into backend development, I embrace each new challenge with enthusiasm and a willingness to push boundaries.
        </p>

        <p>
          Beyond the realm of coding, I find joy in the simple pleasures of life—whether it's spending time in nature, immersing myself in a good book, or pursuing creative endeavors. I believe in the power of balance and strive to maintain harmony between my professional and personal pursuits.
        </p>

        <p>
          I'm excited to connect with fellow enthusiasts, collaborators, and potential clients who share my passion for innovation and excellence. Let's embark on this journey together and create something extraordinary.
        </p>

        <p className='font-bold'>
          Thank you for stopping by—I look forward to connecting with you!
        </p>
      </div>
    </div>
  )
}

export default About
