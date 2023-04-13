// Dependency imports
import { useEffect, useRef, useState } from "react";
// Module imports
import {
  AsideNav,
  BigONotation,
  BigONotationTwo,
  BigONotationThree,
  BigONotationFour,
  Strings,
} from "./index";

const Homepage = () => {
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
    {
      section: "Big O Notation",
      content: <BigONotationThree />,
      page: 3,
    },
    {
      section: "Big O Notation",
      content: <BigONotationFour />,
      page: 4,
    },
    {
      section: "Strings",
      content: <Strings />,
      page: 1,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const contentRef = useRef(null);

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

  const renderPaginationButtons = () => {
    const pageCount = sectionContent.filter(
      (content) => content.section === selectedSection
    ).length;

    const buttons = [];

    for (let i = 1; i <= pageCount; i++) {
      buttons.push(
        <button
          key={`pagination-btn-${i}`}
          onClick={() => handlePageJump(i)}
          disabled={currentPage === i}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    return buttons;
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

  const handlePageJump = (page) => {
    setCurrentPage(page);
  };

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
          {selectedSection && (
            <div className="double-bttn-cont">
              <button
                className="prev-next-bttn"
                onClick={handlePreviousPage}
                disabled={!hasPreviousContent}
              >
                &#8592;
              </button>

              <div className="ellipsis-pagination-cont">...</div>
              <div className="pagination-buttons-cont">
                {renderPaginationButtons()}
              </div>

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
