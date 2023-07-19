import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components";
import "./Products.scss";
const Products = () => {
  const { categoryId } = useParams();
  const id = parseInt(categoryId);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <section id="products" className="products">
      <div className="products-categories-options">
        <div className="filterItem filterItem-by-price">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem filterItem-by-name">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc"> Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc"> Price (High first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="reset"
              value="reset"
              name="price"
              onChange={(e) => setSort(null)}
            />
            <label htmlFor="reset"> Reset Filters</label>
          </div>
        </div>
      </div>
      <div className="products-categories-products">
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </section>
  );
};

export default Products;
