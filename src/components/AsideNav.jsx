// Dependency imports
import { useState } from "react";

// Module imports
import totoro from "../totoro.gif";
import sootSprites from "../sootSprites.gif";
import spiritedAwayPuppy from "../spiritedAwayPuppy.gif";

const AsideNav = (props) => {
  const {
    jsSections,
    reactSections,
    selectedSection,
    setCurrentPage,
    setSelectedSection,
    selectedCategory,
  } = props;
  const [currentGif, setCurrentGif] = useState(0);

  const gifs = [totoro, sootSprites, spiritedAwayPuppy];

  const handleGifClick = () => {
    setCurrentGif((prevIdx) => (prevIdx + 1) % gifs.length);
  };

  const renderNavButtons = () => {
    if (selectedCategory === "JavaScript") {
      const buttons = jsSections.map((section, idx) => {
        return (
          <a
            key={idx}
            href={`#${section}`}
            onClick={() => {
              setSelectedSection(section);
              setCurrentPage(1);
            }}
            className={selectedSection === section ? "active" : ""}
          >
            {section}
          </a>
        );
      });
      return buttons;
    } else if (selectedCategory === "React") {
      const buttons = reactSections.map((section, idx) => {
        return (
          <a
            key={idx}
            href={`#${section}`}
            onClick={() => {
              setSelectedSection(section);
              setCurrentPage(1);
            }}
            className={selectedSection === section ? "active" : ""}
          >
            {section}
          </a>
        );
      });
      return buttons;
    }
  };

  return (
    <aside id="main-aside-cont">
      <nav id="main-aside-nav">
        {/* {jsSections.map((section, index) => (
          <a
            key={index}
            href={`#${section}`}
            onClick={() => {
              setSelectedSection(section);
              setCurrentPage(1);
            }}
            className={selectedSection === section ? "active" : ""}
          >
            {section}
          </a>
        ))} */}
        {renderNavButtons()}
      </nav>
      <img onClick={handleGifClick} id="cute-gif" src={gifs[currentGif]} />
    </aside>
  );
};

export default AsideNav;
