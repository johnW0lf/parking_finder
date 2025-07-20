import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import TimeSet from "./TimeSet";
import End from "./End";
import Home from "./Home";
import Details from "./Details";
import Intro from "./Intro";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/choose" element={<TimeSet />} />
        <Route path="/" element={<Intro />} />
        <Route path="*" element={<End />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/home/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
