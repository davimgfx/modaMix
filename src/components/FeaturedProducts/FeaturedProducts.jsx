import { AddShoppingCart, Favorite } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type, description, productsMap, showTrending }) => {
  const [itemCard, setItemCard] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [treadingProducts, setTreadingProducts] = useState([]);
  const categoryItems = ["accessories", "children", "men", "woman"]

  useEffect(() => {
    const getItemCard = Object.values(productsMap);
    setItemCard(getItemCard);
    setFeaturedProducts(getItemCard);

    const trendingItemsMap = getItemCard.map((subArray) =>
      subArray.filter((item) => item.isTrending)
    );

    setTreadingProducts(trendingItemsMap);
  }, [productsMap]);

 const productsToRender = showTrending
    ? treadingProducts.map((array) => array[0])
    : featuredProducts.map((array) => array[0]);

  console.log(itemCard)

  const stylesIcons = {
    border: "1px solid #34435C64",
    padding: "0.5rem",
    borderRadius: "0.3rem",
    cursor: "pointer",
    fontSize: "3.1rem",
  };

 
  return (
    <div className="featured-products">
      <div className="top">
        <h1>{type} Products</h1>
        <p>{description}</p>
      </div>
      <div className="bottom">
        {productsToRender.length > 0 &&
          productsToRender.map((item) => 
          (
            <div key={item.id} className="product-card">
            <Link to={`/product/${item.id}`}>
                <img src={item.imageUrl} alt="imgCard" />
              </Link>
              <div className="product-card-text">
                <div>
                  <h2>{item.name}</h2>
                
                  {item.offer.available ? (
                    <div className="price-with-sale">
                      <h2 className="old-price">$ {item.price}</h2>
                      <h2>$ {item.offer.price}</h2>
                    </div>
                  ) : (
                    <h2>$ {item.price}</h2>
                  )}
                </div>
                <div className="product-card-buttons">
                  <AddShoppingCart sx={stylesIcons} size="large" />
                  <Favorite sx={stylesIcons} size="large" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
