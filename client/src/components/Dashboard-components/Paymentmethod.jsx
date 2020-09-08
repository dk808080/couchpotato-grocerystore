import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function Paymentmethod() {
  const history = useHistory();
  const [items, setitems] = useState([]);
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

  return (
    <div
      style={{
        backgroundColor: "#ffe3b3",
        border: "1px solid darkslategrey",
        margin: "0rem 3rem",
        padding: "1rem 0",
        textAlign: "center",
      }}
    >
      <h4 style={{ marginTop: "1rem", fontFamily: "cursive" }}>
        3) Choose the way of payment
      </h4>
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#fffff4",
          margin: "1rem 4rem",
        }}
      >
        <div style={{ margin: "1.5rem", fontSize: "1.2rem" }}>
          As of now we only have the option of cash on delivery...
          <br />
          please proceed with the cash on delivery payment method and place your
          order.
        </div>
        <Button
          href="#"
          style={{
            marginLeft: "1.5rem",
            fontSize: "15px",
            backgroundColor: "darkred",
            border: "1px solid black",
          }}
          onClick={(event) => {
            event.preventDefault();
            if (
              window.confirm("If you want to place this order then press OK")
            ) {
              const orders = {
                items: items,
              };
              axios
                .post("/api/ordertheitems", orders)
                .then((res) => {
                  console.log(res);
                  swal(
                    "order placed",
                    "your order has been placed successfully",
                    "success"
                  );
                  history.push("/home");
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }}
        >
          PLACE THE ORDER
        </Button>
      </div>
    </div>
  );
}
export default Paymentmethod;
