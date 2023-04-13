// Dependency imports
import { useEffect, useRef, useState } from "react";
// Module imports
import { AsideNav, BigONotation, BigONotationTwo } from "./index";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSection, setSelectedSection] = useState("section1");

  const contentRef = useRef(null);

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

  // Hooks
  useEffect(() => {
    scrollBackToTop();
  }, [currentPage]);

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

    if (nextPageContent) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollBackToTop();
    }
  };

  const handlePreviousPage = () => {
    const prevPageContent = sectionContent.find(
      (content) =>
        content.section === selectedSection && content.page === currentPage - 1
    );

    if (prevPageContent) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollBackToTop();
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

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
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
            <div className="double-bttn-cont">
              <button
                className="prev-next-bttn"
                onClick={handlePreviousPage}
                disabled={!hasPreviousContent}
              >
                &#8592;
              </button>
              <button
                className="prev-next-bttn"
                onClick={handleNextPage}
                disabled={!hasNextContent}
              >
                &#8594;
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Homepage;
