// import React from 'react'
// import male from '../assets/male_image.png'
// import ProgressBar from "@ramonak/react-progress-bar";
// import { Link } from 'react-router-dom'
// import myImg from '../assets/Ashu.jpg'

// const About = () => {
//   return (
//     <div className='flex justify-around lg:gap-[1rem] md:gap-[2rem] w-full max-[767px]:flex-col'>
//       <div className='left xl:w-[50rem] lg:w-[55rem] md:w-[25rem]  lg:ml-[1rem] xl:ml-0'>

//         <div className='flex lg:flex-row items-center p-[2rem] gap-[2rem] xl:gap-[5rem] lg:mb-[3rem] xl:mb-5 md:flex-col max-[500px]:flex-col max-[500px]:m-[0rem]'>
//           <div className='lg:w-[18rem] xl:w-[12rem] md:w-[14rem] max-[500px]:w-[20rem] max-[330px]:w-[15rem] animate-fade-left animate-duration-[2s] ml-[2rem]'>
//             <img src={myImg} alt="My Image" className='rounded-[8rem]'/>
//           </div>
//           <div className='space-y-[1.5rem] lg:space-y-[2rem] md:space-y-[1rem] max-[500px]:space-y-2 animate-fade-left animate-duration-[2s] md:ml-[2rem] lg:ml-0'>
//             <p> <span className='font-bold text-textColor max-[330px]:text-[0.8rem]'> Name:   </span> <span className='text-stone max-[330px]:text-[0.8rem]'>Om Nath Dixit</span></p>
//             <p> <span className='font-bold text-textColor max-[330px]:text-[0.8rem]'> Profile:</span> <span className='text-stone max-[330px]:text-[0.8rem]'>Web Developer</span></p>
//             <p> <span className='font-bold text-textColor max-[330px]:text-[0.8rem]'> Email:  </span> <span className='text-stone max-[330px]:text-[0.8rem]'>omnathdixit7033@gmail.com</span></p>
//             <p> <span className='font-bold text-textColor max-[330px]:text-[0.8rem]'> Phone:  </span> <span className='text-stone max-[330px]:text-[0.8rem]'>+91 7033004295</span></p>
//           </div>
//         </div>

//         <div className=' flex flex-col space-y-5 pl-[2rem] pb-[2rem] ml-[2rem] lg:w-[33rem] lg:mt-[3rem] xl:w-[45rem] xl:mt-0 max-[767px]:p-[1rem] max-[380px]:text-[0.7rem]'>
//           <p className='text-[2rem] font-semibold text-aboutColor2 underline max-[500px]:text-center max-[330px]:text-[1.5rem] font-serif'>Skills</p>
//           <div className='space-y-[1rem] max-[500px]:space-y-3 max-[767px]:font-serif '>
//             <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
//               <p className='font-bold text-aboutColor'>HTML, CSS, JavaScript</p>
//               <div>
//                 <ProgressBar completed={80} bgColor="Orange" animateOnRender={true} />
//               </div>
//             </div>
//             <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
//               <p className='font-bold text-aboutColor'>Data Structures and Algorithm in Java</p>
//               <div>
//                 <ProgressBar completed={90} bgColor="Orange" animateOnRender={true} />
//               </div>
//             </div>
//             <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
//               <p className='font-bold text-aboutColor'>React Js, Tailwind CSS</p>
//               <div>
//                 <ProgressBar completed={85} bgColor="Orange" animateOnRender={true} />
//               </div>
//             </div>
//             <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
//               <p className='font-bold text-aboutColor'>Node js, Express js</p>
//               <div>
//                 <ProgressBar completed={70} bgColor="Orange" animateOnRender={true} />
//               </div>
//             </div>
//             <div className='space-y-[0.5rem] max-[500px]:space-y-0'>
//               <p className='font-bold text-aboutColor'>GIT/GitHub, MongoDB, Postman</p>
//               <div>
//                 <ProgressBar completed={80} bgColor="Orange" animateOnRender={true} />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>


//       <div className='right space-y-5 lg:w-[26rem] xl:w-[35rem] lg:ml-[2rem] md:ml-[1rem] lg:mt-0 md:mt-[2rem] max-[500px]:p-[2rem] max-[767px]:p-[3rem] '>
//         <div className='space-y-5 lg:w-[35rem] lg:pr-[2rem] '>
//           <h2 className='font-bold text-[2rem] text-textColor underline font-serif max-[500px]:text-center max-[500px]:font-serif max-[380px]:text-[1.5rem]'>About Me</h2>
//           <p className='font-serif max-[380px]:text-[0.8rem] max-[330px]:text-justify text-justify lg:w-[25rem] xl:w-[32rem] md:w-[25rem]'>
//             Welcome to my corner of the web! I'm Om Nath Dixit, a dedicated web developer with a thirst for knowledge and a passion for crafting digital experiences. Currently, I'm on a journey to earn my Bachelor of Technology in Computer Science and Engineering, where I'm honing my skills and expanding my horizons in the world of technology.
//           </p>

//           <p className='font-serif max-[380px]:text-[0.8rem] max-[330px]:text-justify text-justify lg:w-[25rem] xl:w-[32rem] md:w-[25rem]'>
//             My fascination with web development stems from its limitless potential to bring ideas to life and make an impact on people's lives. With every line of code I write, I strive to create websites that are not only visually stunning but also intuitive and user-friendly.
//           </p>

//           <p className='font-serif max-[380px]:text-[0.8rem] max-[330px]:text-justify text-justify lg:w-[25rem] xl:w-[32rem] md:w-[25rem]'>
//           From crafting snazzy interfaces to untangling the backend mysteries, I'm your go-to guy for all things web-related. When I'm not glued to my screen, you'll probably catch me geeking out over the latest tech trends or brainstorming over a steaming cup of coffee.
//           </p>

//         </div>

//         <div className='space-y-3 lg:space-y-3 lg:pr-[2rem]'>
//           <h1 className='font-bold text-[2rem] text-textColor underline font-serif lg:mt-0 md:mt-[5rem] max-[500px]:font-serif max-[500px]:text-center max-[380px]:text-[1.5rem]'>Education</h1>

//           <div className='space-y-5 md:w-[25rem] lg:w-[25rem] xl:w-[32rem]'>
//             <div className='space-y-1 max-[380px]:text-[0.8rem]'>
//               <h3 className='font-bold text-[1.2rem] text-aboutColor2'>Amity University, Uttar Pradesh (2021-2025)</h3>
//               <p className='font-bold  text-aboutColor'>Bachelor's in Technology, Computer Science and Engineering</p>
//               <p className='text-justify font-serif' >Currently, I'm a tech enthusiast enrolled in the Bachelor of Technology (B.Tech.) program in Computer Science and Engineering at Amity University, Uttar Pradesh. My passion lies in unraveling the intricacies of technology, with a particular focus on web development. I'm dedicated to leveraging my education to drive innovation and create impactful solutions in the ever-evolving tech sphere.</p>
//             </div>

            
//           </div>
//         </div>
//       </div>

//       <div className='md:hidden m-[1rem] mt-0 text-center'>
//         <Link to='/contact'>
//           <button className='font-semibold font-serif text-[1rem] bg-bgColor w-[10rem]  p-[0.5rem] rounded-xl hover:bg-hoverColor'>Contact Me</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default About




import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import myImg from '../assets/Ashu.jpg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 w-full p-6 bg-gradient-to-br from-[#F3F4F6] via-[#FFFFFF] to-[#E5E7EB]">
      {/* Left Section */}
      <div className="left w-full md:w-1/2 flex flex-col gap-10 items-center md:items-start animate-fade-in">

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center p-6 gap-8 bg-[#FFFFFF] shadow-lg rounded-lg w-full hover:shadow-2xl transition-shadow duration-3000 ease-in-out transform hover:scale-105">
          <div className="w-40 h-40 md:w-36 lg:w-44 xl:w-48 md:h-36 lg:h-44 xl:h-48 rounded-full overflow-hidden border-4 border-[#6366F1] hover:border-[#4F46E5] transition-transform duration-500">
            <img src={myImg} alt="Om Nath Dixit" className="w-full h-full object-cover transition-transform duration-3000 ease-in-out transform hover:scale-125" />
          </div>

          <div className="text-lg space-y-4 text-[#4B5563] md:text-left text-center">
            <p><span className="font-bold text-[#1F2937]">Name:</span> Om Nath Dixit</p>
            <p><span className="font-bold text-[#1F2937]">Profile:</span> Web Developer</p>
            <p><span className="font-bold text-[#1F2937]">Email:</span> omnathdixit7033@gmail.com</p>
            <p><span className="font-bold text-[#1F2937]">Phone:</span> +91 7033004295</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full bg-[#FFFFFF] p-6 shadow-md rounded-lg">
          <h2 className="text-2xl  text-[#1F2937] mb-6 text-center underline font-bold">Skills</h2>
          <div className="space-y-6">
            {[
              { skill: 'HTML, CSS, JavaScript', level: 80 },
              { skill: 'Data Structures and Algorithms in Java', level: 90 },
              { skill: 'React Js, Tailwind CSS', level: 85 },
              { skill: 'Node.js, Express.js', level: 70 },
              { skill: 'Git, GitHub, MongoDB, Postman', level: 80 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="font-semibold text-[#374151]">{item.skill}</p>
                <ProgressBar completed={item.level} bgColor="#4F46E5" animateOnRender={true} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Right Section */}
      <div className="right w-full md:w-1/2 space-y-10 p-6 bg-gradient-to-r from-[#EEF2FF] to-[#FFFFFF] shadow-lg rounded-lg animate-fade-in">
        {/* About Me Section */}
        <div className="space-y-6">
          <h2 className="font-bold text-2xl text-[#1F2937] underline text-center">About Me</h2>
          <p className="text-base text-[#4B5563] text-justify leading-relaxed font-semibold">
            Welcome to my corner of the web! I'm Om Nath Dixit, a dedicated web developer with a passion for crafting digital experiences. Currently, I'm pursuing my Bachelor of Technology in Computer Science, honing my skills and expanding my horizons in the tech world.
          </p>
          <p className="text-base text-[#4B5563] text-justify leading-relaxed font-semibold">
            I strive to create websites that are not only visually stunning but also intuitive and user-friendly. I enjoy working on both the frontend and backend, bringing ideas to life through code.
          </p>
          <p className="text-base text-[#4B5563] text-justify leading-relaxed font-semibold">
            When I'm not coding, you'll probably find me exploring the latest tech trends or enjoying a cup of coffee while brainstorming new ideas.
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h2 className="font-bold text-2xl text-[#1F2937] underline text-center">Education</h2>
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-[#4338CA]">Amity University, Uttar Pradesh (2021-2025)</h3>
            <p className="font-semibold text-[#374151]">Bachelor of Technology, Computer Science and Engineering</p>
            <p className="text-[#4B5563] leading-relaxed">
              I'm currently pursuing my B.Tech in Computer Science and Engineering at Amity University. I'm passionate about technology, especially web development, and am dedicated to creating impactful solutions.
            </p>
          </div>
        </div>

        {/* Contact Me Button */}
        <div className="text-center">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#6366F1] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-bounce">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;