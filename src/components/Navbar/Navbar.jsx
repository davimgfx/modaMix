import {
  Favorite,
  KeyboardArrowDown,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const stylesIcons = {
    border: "1px solid #34435C64",
    padding: "0.5rem",
    borderRadius: "0.3rem",
    cursor: "pointer",
    fontSize: "3.1rem",
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* left side navbar */}
        <div className="navbar-infos-left">
          <div className="navbar-div-logo">
            <Link to="/">
              <img src={logo} alt="logo" className="navbar-logo" />
            </Link>
          </div>

          <div className="navbar-links">
            <Link to="/products/1" className="link">
              <p>Women</p>
            </Link>
            <Link to="/products/2" className="link">
              <p>Mens</p>
            </Link>
            <Link to="/products/3" className="link">
              <p>Children</p>
            </Link>
            <Link to="/products/4" className="link">
              <p>Accessories</p>
            </Link>
            <div
              className={`navbar-links-more`}
              onClick={() => setIsOpenModal(!isOpenModal)}>
              <p>More</p>
              <div className={` ${isOpenModal ? "arrowUp" : "arrowDown"}`}>
                <KeyboardArrowDown />
              </div>

              <div className={` ${isOpenModal ? "navbar-link-modal" : "none"}`}>
                <p>HomePage</p>
                <p>About</p>
                <p>Contact</p>
                <p>Stores</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side navbar */}
        <div>
          <ul className="navbar-icons-right">
            <Favorite sx={stylesIcons} size="large" />
            <div className="navbar-search-bar">
              <Search size="large" />
              <input
                type="text"
                placeholder="Search products..."
                className="navbar-search-bar-input"
              />
            </div>
            <ShoppingCart sx={stylesIcons} size="large" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
