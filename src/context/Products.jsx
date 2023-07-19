import React, { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocumentsProducts } from "../utils/firebase/firebase";

export const ProductsContext = createContext({
    productsMap: {},
});

export const ProductsProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState({});

  useEffect(() => {
    const getProductsMap = async () => {
      const categoryMap = await getCategoriesAndDocumentsProducts();
      setProductsMap(categoryMap);
    };

    getProductsMap();
  }, []);

  const value = { productsMap };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};