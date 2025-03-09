import React from "react";
import Header from "../Components/Header/Header";
import ServicesSection from "../Components/ServicesSection";
import Footer from "../Components/Footer/Footer";

const Services = () => {
  return (
    <>
      <div className="bg-[#0d0d0d] pt-[30px]">
        <Header />
      </div>
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Services;
