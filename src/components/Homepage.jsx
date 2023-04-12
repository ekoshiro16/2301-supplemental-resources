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
    const nextPageContent = sectionContent.find(
      (content) =>
        content.section === selectedSection && content.page === currentPage + 1
    );

    if (nextPageContent) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    const prevPageContent = sectionContent.find(
      (content) =>
        content.section === selectedSection && content.page === currentPage - 1
    );

    if (prevPageContent) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const hasNextContent = sectionContent.some(
    (content) =>
      content.section === selectedSection && content.page === currentPage + 1
  );

  const hasPreviousContent = sectionContent.some(
    (content) =>
      content.section === selectedSection && content.page === currentPage - 1
  );

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
              <button
                onClick={handlePreviousPage}
                disabled={!hasPreviousContent}
              >
                Previous
              </button>
              <button onClick={handleNextPage} disabled={!hasNextContent}>
                Next
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Homepage;
