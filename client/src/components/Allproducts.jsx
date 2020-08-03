import React from "react";
import "../css/allproducts.css";
import allproducts from "../data/allproducts-data.json";
import Product from "./Product";
import Navigation from "./Homepage-components/Navigation";
function Allproducts() {
  function createproduct(product) {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 eachproduct">
        <Product
          key={product.id}
          image={product.image}
          productName={product.productName}
          quantity={product.quantity}
          price={product.price}
          details={product.description}
        />
      </div>
    );
  }
  return (
    <div className="allprod">
      <Navigation />
      <h1 style={{ marginTop: "1rem" }}>All Products</h1>
      <div className="row">{allproducts.map(createproduct)}</div>
    </div>
  );
}

export default Allproducts;
