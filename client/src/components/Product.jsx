import React from "react";
import "../css/allproducts.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getServerUrl from "../utils/getServerUrl";

function Product(props) {
  const navigate = useNavigate();
  return (
    <div className="card mb-3" style={{ backgroundColor: "#f5f5f2" }}>
      <div className="row no-gutters">
        <div className="col-md-5">
          <img
            src={props.image}
            className="card-img"
            alt="..."
            style={{ height: "100%" }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body productcardbody">
            <h5 class="card-title">{props.productName}</h5>
            <hr />
            <p className="card-text">{props.quantity}</p>
            <hr />
            <p class="card-text">{props.price}</p>
            <hr />
            <a className="card__link" href="#">
              <span>
                Detail <i class="emoji-right">👉</i>
              </span>
            </a>

            <a
              href="#"
              class="btn btn-dark"
              onClick={(event) => {
                const product = {
                  emailid: localStorage.getItem("emailid"),
                  image: props.image,
                  productName: props.productName,
                  quantity: props.quantity,
                  price: props.price,
                  details: props.details,
                };
                event.preventDefault();
                axios
                  .post(`${getServerUrl()}/api/addtocart`, product)
                  .then((res) => {
                    alert(res.data);
                    navigate("/cart");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              style={{
                color: "#ffffff",
                width: "100%",
                margin: "0.3rem 0 0 0",
              }}
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
