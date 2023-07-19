import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsProvider } from "./context/Products";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductsProvider>
);
