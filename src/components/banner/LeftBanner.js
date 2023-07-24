import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaReact} from 'react-icons/fa'
import {SiTailwindcss,SiFigma,SiNextdotjs} from 'react-icons/di'
const LeftBanner = () => {
    const [text] = useTypewriter({
        words:['Web Developer', 'Full Stack Js Developer', 'Laravel Developer'],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
      })
  return (
    <div className='w-1/2 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
        <h1 className='text-6xl font-bold text-white'>
          Hi, I'm {" "}
          <span className='text-designColor capitalize'>Baderdine Ben Ibrahim</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>a{" "}  
        <span>
          {text}
          <Cursor 
             cursorBlinking="false"
             cursorStyle="|"
             cursorColor='#ff014f'
          />
        </span>
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
        👩‍💻 I am a web developer specializing in full-stack JavaScript and Laravel, with a passion for the cutting-edge technology of Web3.0. 🌐 My expertise lies in creating dynamic and interactive websites, using a combination of front-end and back-end technologies. 💻 From designing responsive user interfaces to building robust APIs and integrating blockchain functionality, I strive to deliver seamless web experiences. 🚀 With my skills in JavaScript, Laravel, and knowledge of Web3.0, I can bring your web projects to life and keep up with the latest advancements in the digital realm. 🌟
        </p>
      </div>
      <div className='flex justify-between'>
        <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
              Find me in
            </h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaFacebookF />
              </span>
              <span className='bannerIcon'>
                <FaTwitter />
              </span>
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
            </div>
        </div>
        <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
              Find me in
            </h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaFacebookF />
              </span>
              <span className='bannerIcon'>
                <FaTwitter />
              </span>
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
            </div>
        </div>
      </div>
     </div>
  )
}

export default LeftBanner