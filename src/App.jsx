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
const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <VideoBackground />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/automotive" element={<AutomotiveGallery />} />
        <Route path="/news/portrait" element={<h2>hi portrait</h2>} />
        {/* Define other routes that you need */}
      </Routes>
    </>
  );
};



const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video-element">
        <source src="/fast_car.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1>PHOTOGRAPHER X GRAPHIC DESIGNER</h1>
        {/* <p>Some additional information</p> */}
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