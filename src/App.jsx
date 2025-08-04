// We'll rebuild the project structure from scratch, focusing on:
// - Intro animation: AUShAdi => औषधि with transition
// - Elegant, dark green/pleasant green palette
// - Smooth entry into homepage
// - Clean, organized components

// src/App.jsx
// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SurveyForm from "./components/SurveyForm";
import Footer from "./components/Footer";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-sans flex flex-col justify-between">
      {!introDone ? (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      ) : (
        <>
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/survey" element={<SurveyForm />} />
            </Routes>
          </div>
          <Footer /> {/* ✅ Add Footer here */}
        </>
      )}
    </div>
  );
}

export default App;
