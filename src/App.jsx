import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Navbar/Navbar";
// import NavbarHook from "./NavbarHook/NavbarHook";
import NavbarHook from "./Components/NavbarHook";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import News from "./Pages/News";
import AutomotiveGallery from "./Components/AutomotiveGallery";
import PortraitGallery from "./Components/PortraitGallery";
const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <VideoBackground />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<News />} />
        <Route path="/portfolio/automotive" element={<AutomotiveGallery />} />
        <Route path="/portfolio/portrait" element={<PortraitGallery />} />
        <Route path="/about" element={<div><h2>Photography</h2>
                    <h3 id="Phostext">I am Phos("light") Graphis("stylus") One who draws with light</h3>
                    <blockquote>
                        "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever ... It remembers little things, long after you have forgotten everything."
                        <span>-Aaron Siskind</span>
                    </blockquote></div>} />
        {/* Define other routes that you need */}
      </Routes>
    </>
  );
};



const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline className="video-element">
        <source src="/fast_car.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1>PHOTOGRAPHER X GRAPHIC DESIGNER</h1>
      </div>
    </div>
  );
};
const App = () => {
  // const location = useLocation()
  return (
    <Router>
      {/* <Navbar /> */}
      <NavbarHook />
      <main className="main-content">
      <AppContent />
      </main>
    </Router>
  );
};

export default App;