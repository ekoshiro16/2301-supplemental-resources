// Dependency imports
import { useEffect, useRef, useState } from "react";
// Module imports
import {
  Arrays,
  ArraysTwo,
  AsideNav,
  BigONotation,
  BigONotationTwo,
  BigONotationThree,
  BigONotationFour,
  Components,
  ComponentsTwo,
  ComponentsThree,
  InPlaceAlgos,
  Navbar,
  Objects,
  ObjectsTwo,
  ObjectsThree,
  Recursion,
  RecursionTwo,
  RecursionThree,
  RecursionFour,
  RecursionFive,
  Strings,
  StringsTwo,
  ObjectsFour,
} from "./index";

const Homepage = () => {
  const jsSections = [
    "Big O Notation",
    "In Place Algorithms",
    "Strings",
    "Arrays",
    "Objects",
    "Recursion",
    "Stacks",
    "Queues",
    "Linked Lists",
  ];

  const reactSections = [
    "Components",
    "JSX",
    "Props",
    "State",
    "Hooks",
    "useState",
    "useEffect",
    "Conditional Rendering",
    "Lists & Keys",
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
    {
      section: "Strings",
      content: <StringsTwo />,
      page: 2,
    },
    {
      section: "Arrays",
      content: <Arrays />,
      page: 1,
    },
    {
      section: "Arrays",
      content: <ArraysTwo />,
      page: 2,
    },
    {
      section: "Objects",
      content: <Objects />,
      page: 1,
    },
    {
      section: "Objects",
      content: <ObjectsTwo />,
      page: 2,
    },
    {
      section: "Objects",
      content: <ObjectsThree />,
      page: 3,
    },
    {
      section: "Objects",
      content: <ObjectsFour />,
      page: 4,
    },
    {
      section: "In Place Algorithms",
      content: <InPlaceAlgos />,
      page: 1,
    },
    {
      section: "Recursion",
      content: <Recursion />,
      page: 1,
    },
    {
      section: "Recursion",
      content: <RecursionTwo />,
      page: 2,
    },
    {
      section: "Recursion",
      content: <RecursionThree />,
      page: 3,
    },
    {
      section: "Recursion",
      content: <RecursionFour />,
      page: 4,
    },
    {
      section: "Recursion",
      content: <RecursionFive />,
      page: 5,
    },

    // React Content
    {
      section: "Components",
      content: <Components />,
      page: 1,
    },
    {
      section: "Components",
      content: <ComponentsTwo />,
      page: 2,
    },
    {
      section: "Components",
      content: <ComponentsThree />,
      page: 3,
    },
  ];

  const [currentPage, setCurrentPage] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState("JavaScript");
  const [selectedSection, setSelectedSection] = useState(undefined);

  const contentRef = useRef(null);

  // Hooks
  useEffect(() => {
    scrollBackToTop();
  }, [currentPage]);

  const renderSelectedContent = (value) => {
    const filteredContent = sectionContent.find(
      (content) => content.section === value && content.page === currentPage
    );

    if (filteredContent && filteredContent?.content) {
      return filteredContent.content;
    } else if (selectedSection && !filteredContent) {
      return <div>🚧 Under construction! 🚧</div>;
    } else {
      return (
        <div>
          <h2>welcome!</h2>
          <p>
            {" "}
            hey everybody. here you can find a bunch of my recommended coding
            resources, both stuff i've written myself or stuff i've found
            online.
          </p>
          <p>
            if you notice any mistakes or typos or anything like that, just send
            me a message on my alumni coding discord and let me know, and i'll
            find a time to fix it up. hope you all find this site helpful
            otherwise!
          </p>
          <p>peace ✌️ -elle</p>
        </div>
      );
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
      <Navbar
        jsSections={jsSections}
        reactSections={reactSections}
        setCurrentPage={setCurrentPage}
        setSelectedSection={setSelectedSection}
        setSelectedCategory={setSelectedCategory}
      />
      <main>
        <AsideNav
          jsSections={jsSections}
          reactSections={reactSections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          setCurrentPage={setCurrentPage}
          selectedCategory={selectedCategory}
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
