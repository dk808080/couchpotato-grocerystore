import React from "react";
import "../../css/allproducts.css";
import flours from "../../data/grocery/flours-data.json";
import Navigation from "./../Homepage-components/Navigation";
import Product from "./../Product";
function Flours() {
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
      <h1 style={{ marginTop: "1rem" }}>Flours</h1>
      <div className="row">{flours.map(createproduct)}</div>
    </div>
  );
}

export default Flours;
