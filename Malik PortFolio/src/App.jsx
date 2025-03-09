import React from "react";
import { Route, Routes } from "react-router";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ScrollProgress from "./Components/common/ScrollProgress";
import Project from "./Pages/Project";
import Services from "./Pages/Services";

const App = () => {
  return (
    <div>
      <div>
      <ScrollProgress />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </div>
  );
};

export default App;
