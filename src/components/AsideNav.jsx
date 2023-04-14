// Dependency imports
import { useState } from "react";

// Module imports
import totoro from "../assets/totoro.gif";
import sootSprites from "../assets/sootSprites.gif";
import spiritedAwayPuppy from "../assets/spiritedAwayPuppy.gif";

const AsideNav = (props) => {
  const { sections, selectedSection, setCurrentPage, setSelectedSection } =
    props;
  const [currentGif, setCurrentGif] = useState(0);

  const gifs = [totoro, sootSprites, spiritedAwayPuppy];

  const handleGifClick = () => {
    setCurrentGif((prevIdx) => (prevIdx + 1) % gifs.length);
  };

  return (
    <aside id="main-aside-cont">
      <nav id="main-aside-nav">
        {sections.map((section, index) => (
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
        ))}
      </nav>
      <img onClick={handleGifClick} id="cute-gif" src={gifs[currentGif]} />
    </aside>
  );
};

export default AsideNav;
