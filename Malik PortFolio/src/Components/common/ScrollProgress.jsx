import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Amount scrolled from the top
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ScrollProgress;
