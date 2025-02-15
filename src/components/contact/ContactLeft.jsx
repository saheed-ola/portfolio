import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { contactImg } from '../../assets'

const ContactLeft = () => {
  return (
            <div className='w-[35%] h-full bg-white p-8 shadow-shadowOne flex flex-col gap-8 justify-center'>
            <img className='w-full h-64 object-cover rounded-lg mb-2'
                src= { contactImg } alt="Contact Img" 
                />
                <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-black'>Techi-Fi Solutions</h3>
                <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                <p className='text-base text-gray-400 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique ipsam odio facilis quia ratione perspiciatis dolorum </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone:<span className='text-lightText'>+234 8147284999</span>
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email:{''}<span className='text-lightText'>abubakar.saheed50@gmail.com</span>
                </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me on</h2>
                    <div className='flex gap-4'>
                    <span className='bannerIcon'><FaFacebookF/></span>
                    <span className = 'bannerIcon' ><FaTwitter/></span>
                    <span className = 'bannerIcon'><FaLinkedin/></span>
                </div>
            </div>
                
        </div>
  )
}

export default ContactLeft