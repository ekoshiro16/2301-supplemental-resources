// Dependency imports
import React, { createElement, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Module imports
import { Homepage, Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(createElement(App));
