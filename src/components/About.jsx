import React from 'react'
import male from '../assets/male_image.png'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex justify-around lg:gap-[1rem] md:gap-[2rem] w-full max-[500px]:flex-col'>
      <div className='left xl:w-[50rem] lg:w-[55rem] md:w-[25rem] '>

        <div className='flex lg:flex-row items-center p-[2rem] gap-[2rem] lg:mb-[3rem] xl:mb-5 md:flex-col max-[600px]:flex-col max-[500px]:m-[0rem]'>
          <div className='lg:w-[15rem] md:w-[22rem] max-[500px]:w-[20rem] max-[330px]:w-[15rem]'>
            <img src={male} alt="My Image" />
          </div>
          <div className='space-y-[2rem] lg:space-y-[2rem] md:space-y-[1rem] max-[500px]:space-y-2'>
            <p> <span className='font-bold text-textColor max-[330px]:text-[0.8rem]'> Name:   </span> <span className='text-stone max-[330px]:text-[0.8rem]'>Om Nath Dixit</span></p>
            <p> <span className='font-bold text-textColor max-[330px]:text-[0.8rem]'> Profile:</span> <span className='text-stone max-[330px]:text-[0.8rem]'>Web Developer</span></p>
            <p> <span className='font-bold text-textColor max-[330px]:text-[0.8rem]'> Email:  </span> <span className='text-stone max-[330px]:text-[0.8rem]'>omnathdixit7033@gmail.com</span></p>
            <p> <span className='font-bold text-textColor max-[330px]:text-[0.8rem]'> Phone:  </span> <span className='text-stone max-[330px]:text-[0.8rem]'>+91 7033004295</span></p>
          </div>
        </div>

        <div className=' flex flex-col space-y-5 pl-[2rem] pb-[2rem] ml-[2rem] lg:w-[33rem] lg:mt-[3rem] xl:w-[45rem] xl:mt-0 max-[500px]:p-[1rem] max-[380px]:text-[0.7rem]'>
          <p className='text-[2rem] font-semibold text-aboutColor2 underline max-[500px]:font-serif max-[500px]:text-center max-[330px]:text-[1.5rem]'>Skills</p>
          <div className='space-y-[1rem] max-[500px]:space-y-3 max-[500px]:font-serif '>
            <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
              <p className='font-bold text-aboutColor'>HTML, CSS, JavaScript</p>
              <div>
                <ProgressBar completed={80} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
            <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
              <p className='font-bold text-aboutColor'>Data Structures and Algorithm in Java</p>
              <div>
                <ProgressBar completed={90} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
            <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
              <p className='font-bold text-aboutColor'>React Js, Tailwind CSS</p>
              <div>
                <ProgressBar completed={85} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
            <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
              <p className='font-bold text-aboutColor'>Node js, Express js</p>
              <div>
                <ProgressBar completed={70} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
            <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
              <p className='font-bold text-aboutColor'>GIT/GitHub, MongoDB, Postman</p>
              <div>
                <ProgressBar completed={80} bgColor="grey" animateOnRender={true} />
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className='right space-y-5 lg:w-[35rem] lg:ml-[2rem] md:ml-[1rem] lg:mt-0 md:mt-[2rem] max-[500px]:p-[2rem]'>
        <div className='space-y-5 md:w-[25rem] lg:w-[35rem] lg:pr-[2rem]'>
          <h2 className='font-bold text-[2rem] text-textColor underline font-serif max-[500px]:text-center max-[500px]:font-serif max-[380px]:text-[1.5rem]'>About Me</h2>
          <p className='font-serif max-[380px]:text-[0.8rem] max-[330px]:text-justify text-justify'>
            Welcome to my corner of the web! I'm Om Nath Dixit, a dedicated web developer with a thirst for knowledge and a passion for crafting digital experiences. Currently, I'm on a journey to earn my Bachelor of Technology in Computer Science and Engineering, where I'm honing my skills and expanding my horizons in the world of technology.
          </p>

          <p className='font-serif max-[380px]:text-[0.8rem] max-[330px]:text-justify text-justify'>
            My fascination with web development stems from its limitless potential to bring ideas to life and make an impact on people's lives. With every line of code I write, I strive to create websites that are not only visually stunning but also intuitive and user-friendly.
          </p>

        </div>

        <div className='space-y-3 lg:space-y-3 lg:pr-[2rem]'>
          <h1 className='font-bold text-[2rem] text-textColor underline font-serif lg:mt-0 md:mt-[5rem] max-[500px]:font-serif max-[500px]:text-center max-[380px]:text-[1.5rem]'>Education</h1>

          <div className='space-y-5 '>
            <div className='space-y-1 max-[380px]:text-[0.8rem]'>
              <h3 className='font-bold text-[1.2rem] text-aboutColor2'>Amity University, Uttar Pradesh (2021-2025)</h3>
              <p className='font-bold  text-aboutColor'>Bachelor's in Technology, Computer Science and Engineering</p>
              <p className='text-justify font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className='space-y-1  max-[380px]:text-[0.8rem]'>
              <h3  className='font-bold text-[1.2rem]  text-aboutColor2'>SBDPR College, Saran (2019 - 2021)</h3>
              <p className='font-bold  text-aboutColor'>Senior Secondary School</p>
              <p className='text-justify font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='md:hidden m-[1rem] mt-0 text-center'>
        <Link to='/contact'>
          <button className='font-semibold font-serif text-[1rem] bg-bgColor w-[10rem]  p-[0.5rem] rounded-xl hover:bg-hoverColor'>Contact Me</button>
        </Link>
      </div>
    </div>
  )
}

export default About