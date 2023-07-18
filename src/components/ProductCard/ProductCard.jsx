import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <div className="images">
          <img src={item.img} alt="image1" />
          <img src={item.img2} alt="image2" />
        </div>
        <div className="infos">
          <h2>{item.title}</h2>
          <div className="prices">
            <h3>{item.oldPrice}</h3>
            <h3>{item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
