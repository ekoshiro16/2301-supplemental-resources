import React, { useState } from "react";

const Homepage = () => {
  const [selectedSection, setSelectedSection] = useState("section1");

  //   const scrollToSection = (sectionId) => {
  //     const targetSection = document.getElementById(sectionId);
  //     targetSection?.scrollIntoView({ behavior: "smooth" });
  //     setSelectedSection(sectionId);
  //   };

  return (
    <>
      <header>
        <nav>
          <a href="#">Logo</a>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </nav>
      </header>
      <main>
        <aside>
          <nav>
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
        </aside>
        <div className="content">
          {/* <section id="section1">
            <h2>Section 1</h2>
            <p>Content for section 1.</p>
          </section>
          <section id="section2">
            <h2>Section 2</h2>
            <p>Content for section 2.</p>
          </section>
          <section id="section3">
            <h2>Section 3</h2>
            <p>Content for section 3.</p>
          </section> */}
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
