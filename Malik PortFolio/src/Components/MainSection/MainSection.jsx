import React from "react";
import Header from "../Header/Header";
import MainStyle from "./MainSection.module.css";
// import Footer from '../Footer/Footer'
import { TypeAnimation } from "react-type-animation";
import Button from "../common/Button";
const MainSection = () => {
  const resumeLink = "https://drive.google.com/file/d/1BhbBlvSVWTLp87_OkiX3QWqMGSorlvlv/view?usp=sharing"
  return (
    <div>
      <div className={MainStyle.MainWrapper}>
        <Header />

        <div className={MainStyle.MainSection2}>
          <div className={MainStyle.MainContent}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Welcome To My Portfolio!",
                1500,
                "I'm Umar Malik",
                1500,

                "I'm a Website Developer",
                1500,
                "I'm a Frontend Developer",
                1500,
              ]}
              speed={25}
              wrapper="span"
              repeat={Infinity}
              className={MainStyle.TypeText}
              // style={{ width: "96%", color: "#34D399", fontSize: "3em"}}
            />
            <p className={MainStyle.tagline}>
            Creating Seamless Digital Experiences
            </p>
            <p className={MainStyle.IntroText}>
              Hi, I'm Umar Malik, a Frontend Developer specializing in
              responsive, user-focused design. I turn ideas into engaging,
              interactive web pages that look great on any device.
            </p>
            <Button link={resumeLink}  text="Download CV" />
          </div>
          <div className={MainStyle.img}>
            <img
              width={500}
              height={500}
              src="/assets/img/img2.PNG"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
