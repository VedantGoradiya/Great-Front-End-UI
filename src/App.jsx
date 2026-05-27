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
import TransferList from "./Pages/Transfer-List/TransferList";
import DataTable from "./Pages/DataTable/DataTable";
import UndoCounter from "./Pages/UndoCounter/UndoCounter";
import UserDB from "./Pages/UserDB/UserDB";
import WackAMole from "./Pages/WackAMole/WackAMole";
import PixelArt from "./Pages/PixelArt/PixelArt";
import Histogram from "./Pages/Histogram/Histogram";
import AuthCode from "./Pages/AuthCode/AuthCode";

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
        <Route path="/transferList" element={<TransferList />} />
        <Route path="/data-table" element={<DataTable />} />
        <Route path="/undo-counter" element={<UndoCounter />} />
        <Route path="/user-DB" element={<UserDB />} />
        <Route path="/whackAMole" element={<WackAMole />} />
        <Route path="/PixelArt" element={<PixelArt />} />
        <Route path="/Histogram" element={<Histogram />} />
        <Route path="/AuthCode" element={<AuthCode />} />
      </Routes>
    </div>
  );
}

export default App;
