import { Link } from "react-router-dom";

const Navbar = (props) => {
  const {
    jsSections,
    reactSections,
    setCurrentPage,
    setSelectedCategory,
    setSelectedSection,
  } = props;

  const handleJsClick = (e) => {
    e.preventDefault();
    setSelectedSection(jsSections[0]);
    setCurrentPage(1);
    setSelectedCategory("JavaScript");
  };

  const handleReactClick = (e) => {
    e.preventDefault();
    setSelectedSection(reactSections[0]);
    setCurrentPage(1);
    setSelectedCategory("React");
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setSelectedSection(undefined);
    setCurrentPage(undefined);
    setSelectedCategory("JavaScript");
  };

  return (
    <header>
      <nav id="main-navbar">
        <div id="site-navbar-section">
          <Link to="/" onClick={handleHomeClick}>
            2301
          </Link>
        </div>
        <div id="main-navbar-content">
          <Link onClick={handleJsClick} to="/">
            JavaScript Resources
          </Link>
          <Link onClick={handleReactClick} to="/">
            React Resources
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
