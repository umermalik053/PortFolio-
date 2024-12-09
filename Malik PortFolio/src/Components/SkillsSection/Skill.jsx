import React, { useState } from 'react'
import SkillCard from '../common/SkillCard'
import { skillData } from '../../utils/Index'

const Skill = () => {
  const [more , setmore] = useState(false)
  const handleToggleMore = () => {
    setmore(!more)
  }
  return (
    <div className='w-[100%] h-auto bg-[#0D0D0D] overflow-auto'>
      <h1 className="flex font-bold text-[26px] sm:text-[35px] md:text-[40px] lg:text-[45px] text-[#34D399] justify-center">Skills</h1>
         <div className="mt-9 gap-5 mb-7 flex flex-wrap max-w-[1200px] mx-auto px-2">
          {
            skillData.slice(0,6).map((items ,index)=>{
              return(
                    <SkillCard key={index} data={items}/>
              )
            })
          }
          {
            more && skillData.slice(6).map((items ,index)=>{
              return(
                    <SkillCard key={index + 6} data={items}/>
              )
            })
          }
        
         </div>
         <div class="flex items-center justify-center">
          <button onClick={handleToggleMore} class="px-4 mt-5 py-2 border-2 border-white text-white font-semibold rounded-full shadow-md transform transition-transform duration-150 active:scale-95 hover:border-[#34D399] hover:text-[#34D399] ">
            {
              more? "Show Less" : "View More"
            }
          </button>
        </div>
    </div>
  )
}

export default Skill
