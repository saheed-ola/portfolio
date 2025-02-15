import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter,FaLinkedin,FaReact} from 'react-icons/fa';
import {SiTailwindcss, SiFigma, SiNextdotjs} from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Mechatronics Engineer.', 'CAD Model Designer.', 'Full-Stack Developer.', 'Techpreneur.'],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 20,
        delaySpeed: 200,
      })

  return (
       <div className='w-1/2 flex flex-col gap-20'>
           <div className='flex flex-col gap-5'>
               <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
               <h1 className='text-5xl font-bold text-white'>Hi, I'm <span className='text-designColor capitalize'>ABUBAKAR Saheed Olamide</span></h1>
               <h1 className='text-4xl font-bold text-white'>a <span>{text}</span>
               <Cursor 
               className='inline'
               cursorBlinking = "false"
               cursorStyle = "|"
               cursorColor= "#ff014f"/>
               </h1>
              
               <p className='text-base font-bodyFont leading-6 tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui corrupti nemo id inventore libero sunt maiores doloremque quasi fuga nisi repellat debitis laboriosam labore optio dignissimos ad, consequuntur sequi ea!</p>
           </div>
           <div className='flex justify-between'>
               <div>
                   <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                   <div className='flex gap-4'>
                       <span className='bannerIcon'><FaFacebookF/></span>
                       <span className='bannerIcon'>
                           <FaTwitter/>
                       </span>
                       <span className='bannerIcon'><FaLinkedin/></span>
                   </div>
               </div>
               <div>
                   <h2 className='text-base uppercase font-titleFont mb-4'>BEST SKILL ON</h2>
                   <div className='flex gap-4'>
                       <span className='bannerIcon'><FaReact/></span>
                       <span className='bannerIcon'>
                           <SiNextdotjs/>
                       </span>
                       <span className='bannerIcon'><SiTailwindcss/></span>
                       <span className='bannerIcon'><SiFigma/></span>
                   </div>
               </div>
           </div>
       </div>
  )
}

export default LeftBanner