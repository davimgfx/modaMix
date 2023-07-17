import {
  Favorite,
  KeyboardArrowDown,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logov2.png";
import "./Navbar.scss";
const Navbar = () => {
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
              <p>Womens</p>
            </Link>
            <Link to="/products/2" className="link">
              <p>Mens</p>
            </Link>
            <Link to="/products/3" className="link">
              <p>Children</p>
            </Link>
            <Link to="/products/4" className="link">
              <p>Acessories</p>
            </Link>
            <div className="navbar-links-more">
              <p>More</p>
              <KeyboardArrowDown />
            </div>
          </div>
        </div>

        {/* right side navbar */}
        <div>
          <ul className="navbar-icons-right">
            <Favorite sx={stylesIcons} size="large" />
            <div className="navbar-search-bar">
              <Search size="large" />
              <input type="text" placeholder="Search products..." />
            </div>
            <ShoppingCart sx={stylesIcons} size="large" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
