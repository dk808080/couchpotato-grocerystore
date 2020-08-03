import React from "react";
import "../../css/allproducts.css";
import beverages from "../../data/food/beverages-data.json";
import Navigation from "./../Homepage-components/Navigation";
import Product from "./../Product";
function Beverages() {
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
      <h1 style={{ marginTop: "1rem" }}>Beverages</h1>
      <div className="row">{beverages.map(createproduct)}</div>
    </div>
  );
}

export default Beverages;
