import React, { useEffect, useState, useContext } from "react";
import "../../../css/dashboard-css/addresses.css";
import axios from "axios";
import Emptyaddresses from "./Emptyaddresses";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Addressprovider } from "./Addresscontext";
import Addaddresses from "./Addaddresses";
function Addresses() {
  const [addresses, setaddresses] = useState([]);
  const obj = useContext(Addressprovider);
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

  function addonemore() {
    obj.addonemore();
  }
  const addresseslist = addresses.map((address) => {
    return (
      <div style={{ marginTop: "1rem" }}>
        <Card>
          <Card.Header as="h5">
            Your address
            <Button
              className="deletebutton"
              variant="outline-danger"
              onClick={(event) => {
                event.preventDefault();
                const addresstobedeleted = {
                  id: address._id,
                };
                if (window.confirm("are you sure?")) {
                  obj.deleteaddress(addresstobedeleted);
                }
              }}
            >
              DELETE
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
    <div>
      {(() => {
        if (addresses.length === 0) {
          return <Emptyaddresses />;
        } else {
          return (
            <div>
              <div>
                {(() => {
                  if (obj.isaddonemore === true) {
                    return <Addaddresses />;
                  } else {
                    return (
                      <button
                        className="btn btn-outline-dark"
                        onClick={addonemore}
                      >
                        ADD NEW ADDRESSES
                      </button>
                    );
                  }
                })()}
              </div>
              {addresseslist}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Addresses;
