import React from "react";
import Chooseadd from "./Chooseadd";
import Confirmmobileno from "./Confirmmobileno";
import Paymentmethod from "./Paymentmethod";
import Orderdetails from "./Orderdetails";
function Buynow() {
  return (
    <div
      style={{
        margin: "auto 2rem",
        backgroundColor: "#fffff4",
        padding: "1rem 1.5rem",
        textAlign: "center",
      }}
    >
      <h4 style={{ marginBottom: "1.5rem" }}>
        Follow the steps given below to place an order
      </h4>
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <p
            style={{ color: "#0ab68b", fontSize: "2.5rem" }}
            className="fa fa-map-marker-alt"
          ></p>
          <p style={{ color: "darkslategrey" }}>1) choose your address</p>
        </div>
        <div className="col-md-4 col-sm-4">
          <p
            style={{ color: "#0ab68b", fontSize: "2.5rem" }}
            className="fa fa-mobile"
          ></p>
          <p style={{ color: "darkslategrey" }}>
            2) confirm your mobile number
          </p>
        </div>
        <div className="col-md-4 col-sm-4">
          <p
            style={{ color: "#0ab68b", fontSize: "2.5rem" }}
            className="fa fa-rupee-sign"
          ></p>
          <p style={{ color: "darkslategrey" }}>3) choose the way of payment</p>
        </div>
      </div>
    </div>
  );
}
export default Buynow;
