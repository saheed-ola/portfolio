import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration: 0.5}}} className='w-full flex gap-20'>
    <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
            <h2 className='text-4xl font-bold'>Educational Quality</h2>
        </div>
            <div className='mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard 
                title="B.Eng in Mechatronics Engineering" 
                subTitle = "Federal University Oye-Ekiti (2016-2023)"
                result= "4.19/5"
                des = "The training provided by this institution prepared me in order to work in various sectors of the economy and areas of culture"/>
                <ResumeCard
                title="West African Examination Council"
                subTitle = "Federal Government College, Ogbomosho (2013-2015) "
                result ="Credit "
                des = "Secondary Education or post-primary education covers two phases on the international standard classification of Education scale."/>
                <ResumeCard
                title = "Basic Education Certification "
                subTitle = "Bashorun Junior High School (2010-2013)"
                result = "Distinction "
                des = "Secondary Education or post-primary education covers two phases on the international standard classification of Education scale."/>
          </div>
    </div>
    <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
            <h2 className='text-4xl font-bold'>Job Experience</h2>
        </div>
            <div className='mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard 
                title="B.Eng in Mechatronics Engineering" 
                subTitle = "Federal University Oye-Ekiti (2016-2023)"
                result= "4.19/5"
                des = "The training provided by this institution prepared me in order to work in various sectors of the economy and areas of culture"/>
                <ResumeCard
                title="West African Examination Council"
                subTitle = "Federal Government College, Ogbomosho (2013-2015) "
                result ="Credit "
                des = "Secondary Education or post-primary education covers two phases on the international standard classification of Education scale."/>
                <ResumeCard
                title = "Basic Education Certification "
                subTitle = "Bashorun Junior High School (2010-2013)"
                result = "Distinction "
                des = "Secondary Education or post-primary education covers two phases on the international standard classification of Education scale."/>
          </div>
    </div>

</motion.div>
  )
}

export default Education