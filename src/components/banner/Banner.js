import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'
const Banner = () => {
  return (
    <section id="home" className='w-full py-20 flex items-center border-b-[1px] font-titleFont border-b-black'>
    {/* <div className='w-1/2 flex flex-col gap-20'>
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
          Lorem ipsum
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
     </div> */}
     <LeftBanner />
     <RightBanner />
    </section>
  )
}

export default Banner