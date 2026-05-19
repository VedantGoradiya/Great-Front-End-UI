import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import JobBoard from "./Pages/Job-Board/JobBoard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobBoard" element={<JobBoard />} />
      </Routes>
    </div>
  );
}

export default App;
