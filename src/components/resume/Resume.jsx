import React, {useState} from 'react'
import Title from '../layouts/Title';
import ResumeCard from './ResumeCard';
import Education from './Education';
import Skills from './Skills';
import Achievements from './Achievements';
import Experience from './Experience';

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);
  return (
    <section id = "resume" className=' w-full bg-[#5483B3] py-20 border-b-[1px] border-b-black'>
        <div className='w-[90%] mx-auto'>

            
         <div className='flex justify-center items-center text-center '>
            <Title
            title = "5+ YEARS OF EXPERIENCE" 
            des = "MY RESUME"/>
        </div>
        <div>
            <ul className='w-full rounded-xl grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4'>
                <li onClick={()=>
                     setEducationData(true) & 
                     setSkillData(false) & 
                     setExperienceData(false) &
                     setAchievementData(false)}
                      className={`${educationData ? "border-white rounded-lg" : "border-transparent "} resumeLi rounded-xl`}
                     >
                        Education</li>
                <li onClick={()=> 
                    setEducationData(false) &
                     setSkillData(true) & 
                     setEducationData(false) & 
                     setAchievementData(false)}  
                     className={`${skillData ? "border-white rounded-lg" : "border-transparent "} resumeLi rounded-xl`}
                     >
                        Professional Skill
                </li>
                <li onClick={()=> 
                    setEducationData(false) & 
                    setSkillData(false) & 
                    setExperienceData(true) & 
                    setAchievementData(false)} 
                    className={`${experienceData ? "border-white rounded-lg" : "border-transparent "} resumeLi rounded-xl`}
                    >
                        Experience
                </li>
                <li onClick={()=> 
                    setEducationData(false) & 
                    setSkillData(false) & 
                    setExperienceData(false) & 
                    setAchievementData(true)} 
                    className={`${achievementData ? "border-white rounded-lg" : "border-transparent "} resumeLi rounded-xl`}
                    >
                    Achievement
                </li>
            </ul>
        </div>
        {
            educationData && <Education/>
        }
        {
            skillData && <Skills/>
        }
        {
            experienceData && <Experience/>
        }
        {
            achievementData && <Achievements/>
        }
        {/* <Education/> */}
        {/* <Skills/> */}
        {/* <Achievements/> */}
        {/* <Experience/> */}
        </div>
    </section>
  )
}

export default Resume