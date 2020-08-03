import React from "react";
import "../../css/allproducts.css";
import spices from "../../data/grocery/spices-data.json";
import Navigation from "./../Homepage-components/Navigation";
import Product from "./../Product";
function Spices() {
  function createproduct(product) {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 eachproduct">
        <Product
          key={product.id}
          image={product.image}
          productName={product.productName}
          quantity={product.quantity}
          price={product.price}
        />
      </div>
    );
  }
  return (
    <div className="allprod">
      <Navigation />
      <h1 style={{ marginTop: "1rem" }}>Spices</h1>
      <div className="row">{spices.map(createproduct)}</div>
    </div>
  );
}

export default Spices;
