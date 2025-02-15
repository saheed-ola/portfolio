import React from 'react'
import { HiArrowRight } from 'react-icons/hi';

const Card = ({title, des, icon}) => {
  return (
    <div className='w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from bg-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
        <div className='h-72 overflow-y-hidden'>
           <div className='flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform  duration-500'>
            <div className='W-10 h-8 flex-col justify-between'>
                {icon ?(<span className='text-5xl text-designColor'>{icon}</span>):(
                    <>
                        <span className='w-10 h-[2px] rounded-lg bg-designColor block mt-1'></span>
                        <span className='w-10 h-[2px] rounded-lg bg-designColor block mt-1'></span>
                        <span className='w-10 h-[2px] rounded-lg bg-designColor block mt-1'></span>
                        <span className='w-10 h-[2px] rounded-lg bg-designColor block mt-1'></span>
                    </>
                ) }

                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-2xl font-titleFontfont-bold text-gray-300'>{title}</h2>
                    <p className=''>{des}</p>
                    <span className='text-2xl text-designColor'><HiArrowRight/></span>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Card