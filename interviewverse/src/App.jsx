import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Interview from "./pages/Interview";
import Feedback from "./pages/Feedback";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;