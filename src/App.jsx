// Dependency imports
import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
// Module imports
import { Homepage } from "./components";

const App = () => {
  return (
    <div className="app">
      <Homepage />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(createElement(App));
