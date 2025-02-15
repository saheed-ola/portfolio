import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { logo } from '../../assets/index'

const Footer = () => {
  return (
    <div className='w-full py-20 h-auto border-b-black grid grid-cols-4 gap-8 '>
        <div className='w-full h-full flex flex-col gap-8'>
            <img className='w-32' src={logo} alt="logo" />
            <div>
                <span className='bannerIcon'><FaFacebookF/></span>
                <span className = 'bannerIcon' ><FaTwitter/></span>
                <span className = 'bannerIcon'><FaLinkedin/></span>
            </div>
        </div>
        <div className='w-full h-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>
                Quick Link  
            </h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium py-4 overflow-hidden'>
                <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>About <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li>  
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Portfolio<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Services<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Blog<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li>  
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Contact<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li>             
            </ul>
        </div>
        <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>
                resources  
            </h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium py-4 overflow-hidden'>
                <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>System status<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Terms of Service<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Pricing<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Over Right<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li>               
            </ul>
        </div>
        <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>
                developers  
            </h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium py-4 overflow-hidden'>
                <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Documenetation<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>API Reference<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Support<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li> 
              <li><span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>Open Source<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] left-0 group-hover:translate-x-0  transition-transform duration-300'></span> 
                </span>
              </li>               
            </ul>
        </div>
        <div className='w-full h-full'></div>
    </div>
  )
}

export default Footer