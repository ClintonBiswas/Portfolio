import React from "react";
import NavBar from "./Navigation/NavBar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Navigation/Pages/Home";
import About from "./Navigation/Pages/About";
import Service from "./Navigation/Pages/Service";
import Blog from "./Navigation/Pages/Blog";
import Contact from "./Navigation/Pages/Contact";
import SimpleSlider from "./other/Sliderss";
import Footer from "./other/Footer";
import Resume from "./Navigation/Pages/Skill";

const MainComponent = () => {
  return (
    <>
      {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
      <NavBar />
      <Home />
      <About />
      <Resume />
      <SimpleSlider />
      <Service />
      <Blog />
      <Contact />

      <Footer />
    </>
  );
};

export default MainComponent;
