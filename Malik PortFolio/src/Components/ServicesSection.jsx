import React from "react";

const ServicesSection = () => {
  return (
    <div>
      <section id="services" className="py-16 px-3 bg-[#0D0D0D] ">
        <div className="container mx-auto text-center">
          <h1 className="flex mb-6 font-bold text-[26px] sm:text-[35px] md:text-[40px] lg:text-[45px] text-[#F5F2F2] justify-center">
            Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Web Development Card */}
            <div className="bg-[#0A0E16] p-6 rounded-lg shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-800">
              <div className="text-center mb-6">
              <img
                  className="h-20 w-20 mx-auto "
                  src="/assets/img/responsive.png"
                  alt=""
                />
              
              </div>
              <h3 className="text-2xl font-semibold text-[#34D399] mb-2">
                Responsive Web Design
              </h3>
              <p className="text-sm text-gray-400">
                I craft mobile-first, adaptive websites that offer seamless user
                experiences across all devices. Using HTML5, CSS3, and modern
                design techniques, I ensure your site looks great and performs
                optimally on any screen size.
              </p>
            </div>

            {/* UI/UX Design Card */}
            <div className="bg-[#0A0E16] p-6 rounded-lg shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-800">
              <div className="text-center mb-6">
              <img
                  className="h-20 w-20 mx-auto "
                  src="/assets/img/uiux.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#34D399] mb-2">
                UI/UX Design
              </h3>
              <p className="text-sm text-gray-400">
                I design intuitive, user-centered interfaces that enhance
                usability and engagement. By focusing on seamless navigation,
                visually appealing layouts, and interactive elements, I create
                experiences that delight users and drive conversions
              </p>
            </div>

            {/* Digital Marketing Card */}
            <div className="bg-[#0A0E16] p-6 rounded-lg shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-800">
              <div className="text-center mb-6">
              <img
                  className="h-20 w-20 mx-auto "
                  src="/assets/img/spa.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#34D399] mb-2">
              Single Page Applications (SPA)
              </h3>
              <p className="text-sm text-gray-400">
                I build fast, dynamic web applications that load content without
                page reloads. Using frameworks like React, I create
                seamless, interactive experiences that feel like native apps,
                enhancing user engagement and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
