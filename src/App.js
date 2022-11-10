import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";

import "./assets/styles/index.css";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Commands from "./pages/Commands";
import Support from "./pages/Support";
import Error from "./components/Error/Error";
import Articles from "./pages/Articles";

function App() {
  AOS.init({
    duration: 2000,
  });

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/news" element={<Articles />} />
        <Route path="/support" element={<Support />} />
        <Route path="/404" element={<Error error="404" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
