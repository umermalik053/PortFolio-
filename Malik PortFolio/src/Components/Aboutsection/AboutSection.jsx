import React from "react";

const AboutSection = () => {
  return (
    <div className="w-[100%]  h-auto  bg-[#0D0D0D] text-[white] py-7  ">
      <h1 className="flex font-bold text-[26px] sm:text-[35px] md:text-[40px] lg:text-[45px] text-[#34D399] justify-center">About Me</h1>
      <div className="max-w-[1200px] mx-auto mt-9 ">
        <div className=" w-[250px] rounded-full mx-auto hidden sm:block">
          <img className="rounded-full" src="/assets/img/img3.png" alt="" />
          
          
          <h2 className="text-3xl font-bold text-[#34D399] mt-[40px] text-center ">
            Umer Malik
          </h2>
          <h3 className="text-2xl font-bold text-[#b3b3b3] mt-[10px]  text-center">
            Frontend Developer
          </h3>
        </div>
        <div className="">
          <p className="flex text-[16px] sm:text-[18px] mx-auto mt-[20px] leading-9 justify-center text-center w-[70%]">
            Hello! I’m a frontend developer specializing in creating responsive,
            user-centric web applications. With a solid foundation in HTML, CSS,
            and JavaScript, alongside experience in frameworks like React, I am
            dedicated to building websites that offer both aesthetic appeal and
            functionality.
          </p>
        </div>
      </div>
        
      </div>
   
  );
};

export default AboutSection;
