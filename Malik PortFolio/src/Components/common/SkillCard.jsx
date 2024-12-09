import React from 'react'

const SkillCard = ({data}) => {
   
    const {title,category,image,progress} = data
  return (
    <>
     <div className="bg-gray-300 w-[370px] h-[170px] m-auto p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
  <div className="flex gap-5 items-center">
    <div className="w-[100px] h-[100px]">
      <img
        className="w-full h-full rounded-full border-4 border-gray-200 shadow-sm object-cover"
        src={image}
        alt="Skill"
      />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-500">{category}</p>
    </div>
  </div>
  <div className="w-full bg-gray-200 rounded-lg h-6 overflow-hidden shadow-inner mt-4">
    <div
      className={`bg-[#34D399] h-full transition-all duration-500`}
      style={{ width: `${progress}%` }}
    >
      <span className="text-white text-xs font-bold flex items-center justify-center h-full">
        {progress}%
      </span>
    </div>
  </div>
</div>

    </>
  )
}

export default SkillCard
