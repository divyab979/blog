import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiPenTool, FiTwitch, FiTwitter } from 'react-icons/fi'

export const NavBar = () => {
  return (
    <div className='w-full h-[15%] mt-[5%] text-white'>
     

      <div className='lg:ml-[7%] lg:mt-[-6%] flex hover:text-teal-800 lg:w-[17%]'>
        <a href='/' className='cursor-pointer flex'>
          <p> <FiPenTool className='text-5xl' /></p>
          <h1 className=' text-5xl font-thin '>
            Test <span className='font-capra'>BLOG</span>

          </h1>
        </a>
      </div>
      <div className='text-white lg:ml-[30%] lg:mt-[-2%] text-2xl lg:gap-[8%] flex'>
        <a href='/'> <p className='hover:text-teal-800'>Home</p></a>
        <a href='#'> <p className='hover:text-teal-800'>Features</p></a>
        <a href='/categoriespage'> <p className='hover:text-teal-800'>Categories</p></a>
        <div className='relative group w-[20%] h-screen '>
          <button className=' hover:text-teal-800'>
            ...
          </button>
          <div className='absolute hidden group-hover:block origin-top top-8 text-black'>
            <ul className='bg-white w-[100%] lg:p-4 '>
              <li className='hover:text-teal-800 lg:text-sm mt-[3%]  cursor-pointer flex'>About us</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Webinar</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Know Our Story</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Newsletter</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Contact Us</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Privacy Policy</li>

            </ul>
          </div>
        </div>
        <div className='flex justify-end gap-[20%] cursor-pointer'>
          <p className='hover:text-teal-800'><FiLinkedin/></p>
          <p className='hover:text-teal-800'><FiInstagram/></p>
          <p className='hover:text-teal-800'><FiFacebook/></p>
          <p className='hover:text-teal-800'><FiTwitter/></p>
        </div>
      </div>
      

    </div>
  )
}
