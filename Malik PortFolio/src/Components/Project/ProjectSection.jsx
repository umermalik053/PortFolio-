import React, { useState } from "react";
import ProjectCard from "../common/ProjectCard";
import { projects } from "../../utils/Index";

const ProjectSection = () => {
  const [more , setmore] = useState(false)
  const handleToggleMore = () => {
    setmore(!more)
  }
 
  return (
    <div>
      <div className="w-[100%] h-auto pb-6  bg-[#0D0D0D] overflow-auto">
        <h1 className="flex font-bold mt-5 text-[26px] sm:text-[35px] md:text-[40px] lg:text-[45px] text-[#F5F2F2] justify-center">
          Projects
        </h1>
        <div className="max-w-[1200px] my-5 mx-auto flex flex-wrap justify-between px-4 gap-6 mt-6 lg:mt-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          {more &&  projects.slice(3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

        </div>
        <div class="flex items-center justify-center">
          <button onClick={handleToggleMore} class="px-4 mt-5 py-2 border-2 border-white text-white font-semibold rounded-full shadow-md transform transition-transform duration-150 active:scale-95 hover:border-[#34D399] hover:text-[#34D399] ">
            {
              more? "Show Less" : "View More"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
