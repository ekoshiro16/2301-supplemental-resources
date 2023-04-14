import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setSelectedSection(undefined);
    props.setCurrentPage(undefined);
  };

  return (
    <header>
      <nav>
        <Link onClick={handleClick} to="/">
          2301 JavaScript Resources
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
