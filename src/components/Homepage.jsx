// Dependency imports
import React, { useState } from "react";
import { render } from "react-dom";
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

  const renderSelectedContent = (value) => {
    switch (value) {
      case "Big O Notation":
        return <BigONotation />;
      default:
        return <div>No content selected.</div>;
    }
  };

  return (
    <>
      <main>
        <AsideNav
          sections={sections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <div className="content">{renderSelectedContent(selectedSection)}</div>
      </main>
    </>
  );
};

export default Homepage;
