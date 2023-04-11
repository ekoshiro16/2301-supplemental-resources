// Dependency imports
import React, { useState } from "react";
// Module imports
import { AsideNav, BigONotation } from "./index";

const Homepage = () => {
  const [selectedSection, setSelectedSection] = useState("section1");

  const sections = [
    "Big O Notation",
    "Strings",
    "Arrays",
    "Objects",
    "In Place Algorithms",
    "Recursion",
    "Stacks",
    "Queues",
    "Linked Lists",
    "Trees",
    "Binary Search Trees",
    "BFS & DFS Operations",
    "Graphs",
  ];

  return (
    <>
      <main>
        <AsideNav
          sections={sections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <div className="content">
          {/* {selectedSection === "section1" && (
            <div id="section1" className="content">
              Content for Section 1
            </div>
          )}
          {selectedSection === "section2" && (
            <div id="section2" className="content">
              Content for Section 2
            </div>
          )}
          {selectedSection === "section3" && (
            <div id="section3" className="content">
              Content for Section 3
            </div>
          )} */}
          <BigONotation />
        </div>
      </main>
    </>
  );
};

export default Homepage;
