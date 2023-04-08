import React, { useState } from "react";
// Module imports
import totoro from "../assets/totoro.gif";
import sootSprites from "../assets/sootSprites.gif";
import spiritedAwayPuppy from "../assets/spiritedAwayPuppy.gif";

const Homepage = () => {
  const [selectedSection, setSelectedSection] = useState("section1");
  const [currentGif, setCurrentGif] = useState(0);

  const gifs = [totoro, sootSprites, spiritedAwayPuppy];

  const handleGifClick = () => {
    setCurrentGif((prevIdx) => (prevIdx + 1) % gifs.length);
  };

  return (
    <>
      <main>
        <aside id="main-aside-cont">
          <nav id="main-aside-nav">
            <a
              href="#section1"
              onClick={() => setSelectedSection("section1")}
              className={selectedSection === "section1" ? "active" : ""}
            >
              Section 1
            </a>
            <a
              href="#section2"
              onClick={() => setSelectedSection("section2")}
              className={selectedSection === "section2" ? "active" : ""}
            >
              Section 2
            </a>
            <a
              href="#section3"
              onClick={() => setSelectedSection("section3")}
              className={selectedSection === "section3" ? "active" : ""}
            >
              Section 3
            </a>
            <a
              href="#section1"
              onClick={() => setSelectedSection("section1")}
              className={selectedSection === "section1" ? "active" : ""}
            >
              Section 1
            </a>
            <a
              href="#section2"
              onClick={() => setSelectedSection("section2")}
              className={selectedSection === "section2" ? "active" : ""}
            >
              Section 2
            </a>
            <a
              href="#section3"
              onClick={() => setSelectedSection("section3")}
              className={selectedSection === "section3" ? "active" : ""}
            >
              Section 3
            </a>
            <a
              href="#section1"
              onClick={() => setSelectedSection("section1")}
              className={selectedSection === "section1" ? "active" : ""}
            >
              Section 1
            </a>
            <a
              href="#section2"
              onClick={() => setSelectedSection("section2")}
              className={selectedSection === "section2" ? "active" : ""}
            >
              Section 2
            </a>
            <a
              href="#section3"
              onClick={() => setSelectedSection("section3")}
              className={selectedSection === "section3" ? "active" : ""}
            >
              Section 3
            </a>
          </nav>
          <img onClick={handleGifClick} id="cute-gif" src={gifs[currentGif]} />
        </aside>
        <div className="content">
          {selectedSection === "section1" && (
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
          )}
        </div>
      </main>
    </>
  );
};

export default Homepage;
