import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/bodyorders")
      .then((res) => {
        const myorders = [];
        res.data.map((order) => {
          if (order.emailid == localStorage.getItem("emailid")) {
            myorders.push(order);
          }
        });

        setitems(myorders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map((item) => {
    return (
      <div className="col-md-12">
        <div className="row no-gutters">
          <div class="col-md-3">
            <img
              src={item.image}
              className="img-fluid card-img-top"
              alt="product"
            ></img>
          </div>
          <div class="col-md-4" style={{ marginLeft: "1rem" }}>
            <div className="card-body">
              <h5 className="card-title">{item.productName}</h5>
              <hr />
              <h6 className="card-subtitle mb-2 text-muted">{item.quantity}</h6>
              <hr />
              <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              margin: "1rem",
              borderLeft: "1px solid darkslategrey",
              paddingLeft: "1rem",
              textAlign: "center",
            }}
          >
            <h4 style={{ marginBottom: "1.5rem" }}>
              Status : <strong>On the way</strong>
            </h4>
            <i
              class="fal fa-truck"
              style={{ fontSize: "4rem", color: "#aa3939" }}
            ></i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {(() => {
        if (items.length === 0) {
          return (
            <div className="sec-cart">
              <h3>You haven't ordered anything from Couch Potato yet ☹</h3>
              <p>
                Give it a try now <a href="/allproducts">Shop now</a>
              </p>
              <img
                src="data:image/jpeg;base64,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"
                alt="cart photo"
              />
            </div>
          );
        } else {
          return (
            <div>
              <div
                style={{
                  margin: "auto 4rem",
                  backgroundColor: "#fffff4",
                  padding: "1rem 3rem",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: "1rem",
                    color: "darkslategray",
                  }}
                >
                  Your orders
                </h1>
                <div className="card" style={{ marginBottom: "1rem" }}>
                  <div className="row no-gutters">{itemslist}</div>
                </div>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Orders;
