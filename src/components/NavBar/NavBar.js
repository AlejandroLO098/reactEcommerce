import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaShippingFast } from "react-icons/fa";

import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            A.B. Games
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                to="/about"
                activeclassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                to="/products"
                activeclassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                activeclassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="#"
                activeclassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <FaShoppingCart />
              </a>
            </li>
            <li className="nav-item">
              <a
                to="#"
                activeclassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <FaShippingFast />
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
