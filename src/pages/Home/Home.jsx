import React, {useEffect, useState, useContext} from "react";
import { Categories, FeaturedProducts, Slider } from "../../components";
import PRODUCT_DATA  from "../../utils/data/Products" 
import { addCollectionAndDocuments } from "../../utils/firebase/firebase"
import { ProductsContext } from "../../context/Products";

const Home = () => {
  // add the products
  // useEffect(() => {
  //   addCollectionAndDocuments("products", PRODUCT_DATA)
  // }, [])

   //Render the products
   const { productsMap } = useContext(ProductsContext);


  return (
    <section id="home" className="home">
      <Slider />
      <FeaturedProducts
        type="Featured"
        description="Our featured products showcase the very best of what our ecommerce store has to offer. Carefully selected and curated, these products represent the pinnacle of quality, innovation, and style. From cutting-edge technology to timeless classics, our featured products are designed to captivate and exceed your expectations. "
        productsMap={productsMap}
        showTrending={false}
        
      />
      <Categories />
      <FeaturedProducts
        type="Treading"
        description="Our trending products are the hottest and most sought-after items in the market right now. These products are riding the wave of popularity, capturing the attention of customers everywhere. From fashion-forward apparel to must-have gadgets, our trending products encompass the latest trends and styles that are shaping the industry."
        productsMap={productsMap}
        showTrending={true}
      />
    </section>
  );
};

export default Home;
