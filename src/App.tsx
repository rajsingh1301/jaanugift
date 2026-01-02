import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countdown from "./pages/Countdown";
import Birthday from "./pages/Birthday";
import Story from "./pages/Story";
import Final from "./pages/Final";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/story" element={<Story />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
