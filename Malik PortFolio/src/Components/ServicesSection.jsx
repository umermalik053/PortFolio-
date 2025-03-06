import React from 'react'

const ServicesSection = () => {
  return (
    <div>
         <section id="services" className="py-16 px-3 bg-[#0D0D0D] ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#34D399] mb-8">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Web Development Card */}
          <div className="bg-[#0A0E16] p-6 rounded-lg shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-800">
            <div className="text-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#34D399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9V3H7a2 2 0 00-2 2v14a2 2 0 002 2h7a2 2 0 002-2V5a2 2 0 00-2-2h-3V9H10z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#34D399] mb-2">Web Development</h3>
            <p className="text-sm text-gray-400">I create responsive, clean, and dynamic websites using the latest technologies. I specialize in front-end and back-end development.</p>
          </div>

          {/* UI/UX Design Card */}
          <div className="bg-[#0A0E16] p-6 rounded-lg shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-800">
            <div className="text-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#34D399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10M7 12h10m-5 5h5m-5 0H7m12 0a2 2 0 010 4h-4a2 2 0 010-4h4zm0-12a2 2 0 010 4h-4a2 2 0 010-4h4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#34D399] mb-2">UI/UX Design</h3>
            <p className="text-sm text-gray-400">I design user-friendly and intuitive user interfaces that provide an excellent user experience for websites and apps.</p>
          </div>

          {/* Digital Marketing Card */}
          <div className="bg-[#0A0E16] p-6 rounded-lg shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-800">
            <div className="text-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#34D399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4M6 12h12M6 12l2-2l4 4"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#34D399] mb-2">Digital Marketing</h3>
            <p className="text-sm text-gray-400">I offer digital marketing services such as SEO, content strategy, and social media management to help grow your business online.</p>
          </div>

        </div>
      </div>
    </section>
      
    </div>
  )
}

export default ServicesSection
