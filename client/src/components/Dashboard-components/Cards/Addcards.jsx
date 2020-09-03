import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Grid, Row, Col } from "react-bootstrap";
import "../../../css/dashboard-css/cards.css";
import axios from "axios";
import { Cardprovider } from "./Cardcontext";
function Addcards() {
  const [name, setname] = useState("");
  const [cardnumber, setcardnumber] = useState("");

  const [valid, setvalid] = useState("");
  const [cardname, setcardname] = useState("");

  const obj = useContext(Cardprovider);

  function cancelClick(event) {
    event.preventDefault();
    obj.cancelClick();
  }
  function save(event) {
    event.preventDefault();
    var newcard = {
      emailid: localStorage.getItem("emailid"),
      name: name,
      cardnumber: cardnumber,
      valid: valid,
      cardname: cardname,
    };
    obj.savecard(newcard);
  }

  return (
    <div>
      <div className="sec-addcard">
        <h1>Add new card</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxlength="19"
                placeholder="Enter card number"
                value={cardnumber}
                onChange={(e) => {
                  setcardnumber(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="text"
                placeholder="Name on card"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control
                type="text"
                placeholder="Valid thru"
                value={valid}
                onChange={(e) => {
                  setvalid(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Control
                type="text"
                placeholder="Name this card for future use"
                value={cardname}
                onChange={(e) => {
                  setcardname(e.target.value);
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
export default Addcards;
