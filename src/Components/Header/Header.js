import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            {/* in place opf link use navlink so that it will be in the active state */}
            <NavLink className="nav-link" to="/Patient">
              Patient
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Administrator">
              Administer Vaccinations of Patient
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
