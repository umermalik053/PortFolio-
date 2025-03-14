import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer class="bg-[#0D0D0D] py-10 shadow-sm shadow-slate-50">
    //   <div class="container mx-auto px-6 md:px-12">
    //     {/* <!-- Footer Top Section --> */}
    //     <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       <div>
    //         <h3 class="text-2xl font-semibold mb-4 text-[#F5F2F2]">
    //           &lt;dev<span class="text-[#34D399]">folio/&gt;</span>
    //         </h3>
    //         <p class="text-sm text-[#9e9e9e]" >
    //           I am a passionate developer with a focus on creating clean,
    //           user-friendly, and scalable web applications. Welcome to my
    //           portfolio!
    //         </p>
    //       </div>
    //       <div>
    //         <h3 class="text-2xl font-semibold mb-4 text-[#efefef]">Quick Links</h3>
    //         <ul class="space-y-2 text-sm">
    //           <li>
    //             <a href="#about" class="text-gray-600 hover:text-[#34D399]">
    //               About Me
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#projects" class=" text-gray-600 hover:text-[#34D399]">
    //               Projects
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#contact" class="text-gray-600 hover:text-[#34D399]">
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 class="text-2xl font-semibold mb-4 text-[#efefef]">Connect with Me</h3>
    //         <div class="flex space-x-4">
             
    //         </div>
    //       </div>
    //     </div>

    //     {/* <!-- Footer Bottom Section --> */}
    //     <div class="text-center mt-8 border-t border-gray-700 pt-4">
    //       <p class="text-sm">
    //         &copy; 2025 <span className="text-[#34D399]">devfolio</span>. All Rights
    //         Reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-[#0d0d0d] py-10 shadow-sm shadow-slate-50">
  <div className="container mx-auto px-6 md:px-12">
  {/* Footer Top Section */} 
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#F5F2F2]">
          &lt;dev<span className="text-[#34D399]">folio/&gt;</span>
        </h3>
        <p className="text-sm text-[#9e9e9e]">
          I am a passionate developer with a focus on creating clean,
          user-friendly, and scalable web applications. Welcome to my portfolio!
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#efefef]">
          Quick Links
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to={"/about"} className="text-gray-600 hover:text-[#34D399]">
              About Me
            </Link>
          </li>
          <li>
            <Link  to={"/project"} className=" text-gray-600 hover:text-[#34D399]">
              Projects
            </Link>
          </li>
          <li>
            <Link  to={"/services"} className="text-gray-600 hover:text-[#34D399]">
              Services
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#efefef]">
          Connect with Me
        </h3>
        <div className="flex space-x-4 items-center">
          <a href="https://www.linkedin.com/in/umermalikdeveloper098/" target="_blank" ><img className="h-16 w-16 " src="/assets/img/linkedin.png" alt="" srcset="" /></a>
          <a href="https://www.instagram.com/umermalikdev/" target="_blank"><img className="h-12 w-12 " src="/assets/img/insta.png" alt="" srcset="" /></a>
          <a href="https://github.com/umermalik053" target="_blank"><img className="h-12 w-12 " src="/assets/img/github.png" alt="" srcset="" /></a>
        </div>
      </div>
    </div>
    {/* Footer Bottom Section */}
    <div className="text-center mt-8 border-t border-gray-700 pt-4">
      <p className="text-sm">
        © 2025 <span className="text-[#34D399]">devfolio</span>. All Rights
        Reserved.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
