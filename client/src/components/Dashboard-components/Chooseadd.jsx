import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
function Chooseadd() {
  const [addresses, setaddresses] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/bodyaddresses")
      .then((res) => {
        const myadd = [];
        res.data.map((add) => {
          if (add.emailid == localStorage.getItem("emailid")) {
            myadd.push(add);
          }
        });
        setaddresses(myadd);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const addresseslist = addresses.map((address) => {
    return (
      <div style={{ marginTop: "0.3rem" }}>
        <Card>
          <Card.Header as="h5">
            Your address
            <Button
              href="#"
              style={{
                marginLeft: "2rem",
                fontSize: "15px",
                backgroundColor: "darkslategrey",
              }}
              onClick={(event) => {
                event.preventDefault();
                if (
                  window.confirm(
                    "are you sure that you want to get your products delivered to this address?"
                  )
                ) {
                  history.push("/confirmmobileno");
                }
              }}
            >
              Choose this address and go to step 2
            </Button>
          </Card.Header>

          <Card.Body className="row">
            <Card.Title
              className="col-md-6"
              style={{
                paddingBottom: "1rem",
              }}
            >
              Name : {address.name}
            </Card.Title>

            <Card.Text
              className="col-md-6"
              style={{
                fontSize: "large",
                paddingBottom: "1rem",
              }}
            >
              Mobile number : {address.phonenumber}
            </Card.Text>

            <Card.Text
              className="col-md-12"
              style={{
                fontSize: "large",
                paddingBottom: "1rem",
              }}
            >
              Address : {address.address}
            </Card.Text>

            <Card.Text
              className="col-md-6"
              style={{
                fontSize: "large",
                paddingBottom: "1rem",
              }}
            >
              City : {address.city}
            </Card.Text>
            <Card.Text
              className="col-md-6"
              style={{
                fontSize: "large",
                paddingBottom: "1rem",
              }}
            >
              Zip : {address.zip}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <div
      style={{
        backgroundColor: "#ffe3b3",
        border: "1px solid darkslategrey",
        margin: "0 3rem",
        padding: "1rem 0",
        textAlign: "center",
      }}
    >
      <h4 style={{ marginTop: "1rem", fontFamily: "cursive" }}>
        1) Choose your delivery address
      </h4>
      <div style={{ padding: "1.5rem" }}>{addresseslist}</div>
      <div>
        <strong>
          To add an address or a new address{" "}
          <a
            href="/addresses"
            style={{ color: "#aa3939", textDecoration: "underline" }}
          >
            Click here
          </a>{" "}
        </strong>
      </div>
    </div>
  );
}
export default Chooseadd;
