import React from "react";
import { Route, Routes } from "react-router";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ScrollProgress from "./Components/common/ScrollProgress";

const App = () => {
  return (
    <div>
      <div>
      <ScrollProgress />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </div>
  );
};

export default App;
