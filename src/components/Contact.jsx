import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faSquarePhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Resume from '../assets/Resume.pdf';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import validator from 'validator';
import Typewriter from './Typewriter';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  // Handle form submission
  const handleSubmit = async(e) => {
    
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    if (formData.name === '' || formData.email === '' || formData.message === '') {
      // alert('Please fill in all fields');
      showToastMessage(null, "Please fill in all fields");
      return;
    }

    // console.log(data.get('email'));
    const emailValid = data.get('email');
    if (!validator.isEmail(emailValid)) {
      // alert('Please enter a valid email address');
      showToastMessage(null, "Please enter a valid email address");
      setFormData({
        name: formData.name,
        email: '',
        message: formData.message
      });

      return;
    }

    const sheet_url = "https://script.google.com/macros/s/AKfycbxasqtUFERuFJcodCSIx8BS2pjz2rAOkzv7DVr6fkso8YRcQ8RuVdl2_eOp4F46Sd7u/exec";

    try {
      await fetch(sheet_url, {
        method: 'POST',
        body: data,
        // muteHttpExceptions: true
      });

      // alert('Message sent successfully');
      showToastMessage("Message sent successfully", null);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } 
    catch (error) {
      console.error(error); 
      alert('An error occurred while sending the message');
    }

  };

  
  const handleDownloadResume = () => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1O39Sler6UZhTGKGki-cdhcXpD9x3QGML';
    // Specify the file name for download
    const fileName = 'Omnath_Dixit_Resume.pdf';
    // Create a temporary anchor element
    const link = document.createElement('a');
    // Set the href and download attributes
    link.href = resumeUrl;
    link.download = fileName;
    // Simulate a click event to trigger the download
    document.body.appendChild(link);
    link.click();
    // Remove the temporary anchor element
    document.body.removeChild(link);
  };


  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=61552071133644';
  };
  
  const handleLinkedinClick = () => {
    window.location.href = 'https://www.linkedin.com/in/omnath-dixit-271415237/';
  };
  
  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/om_dixit00/';
  };
  
  const handleGithubClick = () => {
    window.location.href = 'https://github.com/BitWiseAshu';
  };

  const showToastMessage = (successMessage, errorMessage) => {
    if (successMessage) {
      toast.success(successMessage, {
        position: 'top-center',
        closeButton: ({ closeToast }) => (
          <FontAwesomeIcon icon={faTimes} style={{ color: 'white', cursor: 'pointer', fontSize: '1.5rem' }} onClick={closeToast} />
        ),
        style: {
          background: '#90EE90',
          color: 'white',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }
      });
    }
  
    if (errorMessage) {
      toast.error(errorMessage, {
        position: 'top-center',
        closeButton: ({ closeToast }) => (
          <FontAwesomeIcon icon={faTimes} style={{ color: 'white', cursor: 'pointer', fontSize: '1.5rem' }} onClick={closeToast} />
        ),
        style: {
          background: 'red',
          color: 'white',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }
      });
    }
  };

  return (
    <div className='flex justify-around m-[1rem] p-[2rem] items-center lg:ml-[5rem] lg:gap-[3rem] xl:gap-[0rem] md:ml-[3rem] max-[700px]:flex-col max-[700px]:gap-[2rem] max-[700px]:p-0 max-[400px]:m-0'>
      <div className='left w-[21rem] space-y-[3rem] max-[700px]:p-[3rem] max-[700px]:pt-0 max-[700px]:w-[25rem] max-[400px]:p-0 max-[400px]:w-[20rem] max-[330px]:w-[18rem]  max-[330px]:ml-[2rem] max-[400px]:space-y-10 max-[400px]:mt-[1rem] xl:ml-[3rem] xl:mr-0'>
        <h1 className='font-bold text-[3rem] font-serif lg:text-[2.5rem] md:text-[2rem] max-[400px]:text-[2.5rem]'>Contact Me</h1>

        <div className='space-y-[1.5rem]'>
          <div className='flex space-x-3 items-center font-serif'>
            <FontAwesomeIcon icon={faPaperPlane} size="2xl" style={{color: "#ea1010",}}/>
            <Typewriter text="omnathdixit7033@gmail.com" value={1}/>
          </div>

          <div className='flex space-x-3 items-center font-serif'>
            <FontAwesomeIcon icon={faSquarePhone} size="2xl" style={{color: "#da1010",}} />
            <Typewriter text="+91 7033004295" value={1}/>
          </div>
        </div>

        <div className='space-y-[1rem]'>
          <p className='font-semibold text-xl font-serif'>Follow Me</p>
          <div className='flex space-x-6'>
            <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#3b5998",}} onClick={handleFacebookClick} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
            <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#0e76a8",}} onClick={handleLinkedinClick} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
            <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#e4405f",}} onClick={handleInstagramClick} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
            <FontAwesomeIcon icon={faGithub} size="2xl"style={{color: "#211FF0",}} onClick={handleGithubClick} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
          </div>
        </div>
        
        <div>
          <button className='mt-[1rem] bg-bgColor p-[1rem] rounded-[1rem] text-[1.2rem] hover:bg-hoverColor transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-serif max-[400px]:text-[1rem]' onClick={handleDownloadResume}>Download Resume</button>
        </div>
      </div>


      <div className='md:ml-[3rem] lg:ml-10 max-[400px]:mt-[2rem]'>
        <form className='space-y-[1.5rem] lg:w-[35rem] xl:w-[40rem] md:w-[25rem] lg:ml-0 md:ml-[3rem] max-[700px]:w-[25rem] max-[700px]:pl-[2rem] max-[400px]:pl-0 max-[400px]:w-[20rem] max-[330px]:w-[18rem]  max-[330px]:ml-[2rem] max-[400px]:mb-[2rem] max-[400px]:space-y-[1rem]'>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Your Name'
              className='p-[1rem] w-[90%] rounded-[0.5rem]  bg-textBg'
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Your Email'
              className='p-[1rem] w-[90%] rounded-[0.5rem]  bg-textBg'
              required
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              cols={90}
              rows={7}
              placeholder='Your Message'
              className='p-[1rem] w-[90%] rounded-[0.5rem] bg-textBg'
              required
            />
          </div>

          <div>
            <button className='w-[10rem] mt-[1rem] bg-bgColor p-[0.5rem] text-[1.2rem] rounded-[0.5rem] hover:bg-hoverColor transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-serif max-[400px]:text-[1rem] max-[400px]:w-[8rem] max-[400px]:mt-[0.5rem]' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Contact
