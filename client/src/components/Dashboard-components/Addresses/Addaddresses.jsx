import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Grid, Row, Col } from "react-bootstrap";
import "../../../css/dashboard-css/addresses.css";
import axios from "axios";
import { Addressprovider } from "./Addresscontext";
function Addaddresses() {
  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [zip, setzip] = useState("");

  const obj = useContext(Addressprovider);

  function cancelClick(event) {
    event.preventDefault();
    obj.cancelClick();
  }
  function save(event) {
    event.preventDefault();
    var newaddress = {
      emailid: localStorage.getItem("emailid"),
      name: name,
      phonenumber: phonenumber,
      address: address,
      city: city,
      zip: zip,
    };
    obj.saveaddress(newaddress);
  }

  return (
    <div>
      <div className="sec-addaddress">
        <h1>Add new address</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Enter mobile number"
                value={phonenumber}
                onChange={(e) => {
                  setphonenumber(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => {
                  setcity(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{6}"
                placeholder="Enter zip"
                value={zip}
                onChange={(e) => {
                  setzip(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Form.Row>

          <Button variant="outline-dark" type="submit" onClick={save}>
            SAVE
          </Button>
          <Button variant="outline-danger" onClick={cancelClick}>
            CANCEL
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Addaddresses;
