import React from "react";
import "./FeaturedProducts.scss";
const FeaturedProducts = ({ type, description }) => {
  return (
    <div className="featured-products">
      <div className="top">
        <h1>{type} Products</h1>
        <p>{description}</p>
      </div>
      <div className="bottom">
        <p>Card</p>
        <p>Card</p>
        <p>Card</p>
        <p>Card</p>
      </div>
    </div>
  );
};

export default FeaturedProducts;
