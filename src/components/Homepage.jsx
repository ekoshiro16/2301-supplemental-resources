// Dependency imports
import React, { useState } from "react";
import { render } from "react-dom";
// Module imports
import { AsideNav, BigONotation, BigONotationTwo } from "./index";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
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

  const sectionContent = [
    {
      section: "Big O Notation",
      content: <BigONotation />,
      page: 1,
    },
    {
      section: "Big O Notation",
      content: <BigONotationTwo />,
      page: 2,
    },
  ];

  const renderSelectedContent = (value) => {
    const filteredContent = sectionContent.find(
      (content) => content.section === value && content.page === currentPage
    );

    if (filteredContent) {
      return filteredContent.content;
    } else {
      return <div>No content selected.</div>;
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
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
        <div className="content">
          {renderSelectedContent(selectedSection)}
          {selectedSection === "Big O Notation" && (
            <>
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>
              <button onClick={handleNextPage}>Next</button>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Homepage;
