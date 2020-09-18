import React from "react";

// stateless functional component
const NavBar = ({ totalCounters }) => {
  // console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Different products in basket:{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
