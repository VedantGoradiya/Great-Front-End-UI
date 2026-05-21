import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { data } from "./constants/fileSystem";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import JobBoard from "./Pages/Job-Board/JobBoard";
import ProgressBar from "./Pages/Progress-Bar/progressBar";
import ProgressBar2 from "./Pages/Progress-Bar/progressBar2";
import ProgressBar3 from "./Pages/Progress-Bar/progressBar3";
import ProgressBar4 from "./Pages/Progress-Bar/progressBar4";
import StarRating from "./Pages/Star-Rating/StarRating";
import TrafficLight from "./Pages/Traffin-Light/TrafficLight";
import FileSystem from "./Pages/File-Exp/FileSystem";
import TicTac from "./Pages/Tic-Tac-Toe/TicTac";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobBoard" element={<JobBoard />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/progress-bar2" element={<ProgressBar2 />} />
        <Route path="/progress-bar3" element={<ProgressBar3 />} />
        <Route path="/progress-bar4" element={<ProgressBar4 />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/traffic-light" element={<TrafficLight />} />
        <Route path="/file-system" element={<FileSystem data={data} />} />
        <Route path="/tictac" element={<TicTac />} />
      </Routes>
    </div>
  );
}

export default App;
