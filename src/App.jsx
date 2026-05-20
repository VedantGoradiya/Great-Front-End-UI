import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import JobBoard from "./Pages/Job-Board/JobBoard";
import ProgressBar from "./Pages/Progress-Bar/progressBar";
import ProgressBar2 from "./Pages/Progress-Bar/progressBar2";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobBoard" element={<JobBoard />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/progress-bar2" element={<ProgressBar2 />} />
      </Routes>
    </div>
  );
}

export default App;
