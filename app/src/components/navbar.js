import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      role="navigation"
      aria-label="main navigation"
    >
      <div>
        <div>
          <a
            role="button"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div>
          <div>
            <NavLink activeClassName="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              activeClassName="is-active"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;