import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import payment from "../../assets/images/payment.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      {/* Top */}
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
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
        </div>
        <div className="item">
          <h1>Links</h1>
          <p>Homepage</p>
          <p>About</p>
          <p>Contact</p>
          <p>Stores</p>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Welcome to ModaMix, your ultimate destination for fashion-forward
            clothing! At ModaMix, we believe that style knows no boundaries. We
            curate a diverse collection of trendy and timeless pieces, carefully
            selected to cater to every individual's unique fashion preferences.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>New York City, USA</p>
          <p>85 Briston Mint Street, London, E1 8LG, USA</p>
          <p>modamix@help.com</p>
          <p>+800 123-45678</p>
        </div>
      </div>
      {/* Bottom */}
      <div className="bottom">
        <div className="footer-bottom">
          <div className="footer-bottom-logo">
            <img src={logo} alt="logo" />
          </div>
          <p>© Copyright 2023 | All Rights Reserved</p>
        </div>
        <div className="footer-bottom-payment">
          <img src={payment} alt="payment_methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
