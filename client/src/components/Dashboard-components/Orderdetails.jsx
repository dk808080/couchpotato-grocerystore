import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function Orderdetails() {
  const [items, setitems] = useState([]);
  let sum = 0;
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/bodycart")
      .then((res) => {
        const myorder = [];
        res.data.map((order) => {
          if (order.emailid == localStorage.getItem("emailid")) {
            myorder.push(order);
          }
        });

        setitems(myorder);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function order(event) {
    event.preventDefault();

    if (window.confirm("If you want to place this order then press OK")) {
      history.push("/chooseaddress");
    }
  }
  items.forEach((item) => {
    let str = item.price.slice(1);
    let num = parseInt(str);
    sum = sum + num;
  });
  const itemslist = items.map((item) => {
    return (
      <div
        className="col-md-4"
        style={{
          border: "1.5px solid #051a15",
        }}
      >
        <div class="row no-gutters">
          <div className="col-md-4">
            <img
              src={item.image}
              className="card-img"
              alt="..."
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body productcardbody">
              <h5 class="card-title">{item.productName}</h5>
              <hr />
              <p className="card-text">{item.quantity}</p>
              <hr />
              <p class="card-text">{item.price}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        backgroundColor: "#ffe3b3",
        border: "1px solid darkslategrey",
        padding: "1rem 0",
        margin: "0 3rem",
        textAlign: "center",
      }}
    >
      <h4 style={{ marginTop: "1rem", fontFamily: "cursive" }}>
        Your order details
      </h4>

      <div
        className="card mb-3"
        style={{ marginBottom: "1rem", padding: "1.5rem" }}
      >
        <div className="row no-gutters">{itemslist}</div>
      </div>
      <div
        style={{ fontFamily: "cursive", fontSize: "1.5rem", margin: "1rem" }}
      >
        Total price you need to pay : ₹{sum}
      </div>
      <div style={{ margin: "0.5rem" }}>
        <Button
          href="#"
          style={{
            marginLeft: "1.5rem",
            fontSize: "15px",
            backgroundColor: "#07362b",
            border: "1px solid black",
          }}
          onClick={order}
        >
          Proceed to place the order ang go to step 1
        </Button>
      </div>
    </div>
  );
}
export default Orderdetails;
