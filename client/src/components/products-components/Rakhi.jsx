import React from "react";
import "../../css/allproducts.css";
import rakhi from "../../data/festival/rakhi-data.json";
import Navigation from "./../Homepage-components/Navigation";
import Product from "./../Product";
function Rakhi() {
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
      <h1 style={{ marginTop: "1rem" }}>Rakhi specials</h1>
      <div className="row">{rakhi.map(createproduct)}</div>
    </div>
  );
}

export default Rakhi;
