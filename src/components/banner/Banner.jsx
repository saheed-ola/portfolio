import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'


const Banner = () => {
   
  return (
    <section id='home' className='w-full overflow-x-hidden bg-[#5483B3] px-10 pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont'>

    <LeftBanner/>
    <RightBanner/>
    </section>
  )
}

export default Banner