import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Projects from "./routes/Projects";
import Team from "./routes/Team";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;