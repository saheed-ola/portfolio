import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from './ResumeCard'

const Achievements = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration: 0.5}}}
    
        className='w-full flex gap-20'
    
    >
         
     <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
            {/* <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p> */}
            <h2 className='text-4xl font-bold'>Company Experience</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-1-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard 
                title="Lorem ipsium ldolor sit amet." 
                subTitle = "lorem ipsum dolaor sit amet alternative."
                result= "Success"
                des = "The training provided by this institution prepared me in order to work in various sectors of the economy and areas of culture"/>
        </div>
     </div>
    </motion.div>
  )
}

export default Achievements