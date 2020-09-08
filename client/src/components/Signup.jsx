import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Weblogo from "./Weblogo";
import "../css/login-signup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [password, setpassword] = useState("");
  const [confpass, setconfpass] = useState("");
  const history = useHistory();

  function signup(event) {
    event.preventDefault();
    if (confpass != password) {
      alert("mismatch password");
    } else {
      const user = {
        name: name,
        email: email,
        mobileno: mobileno,
        password: password,
      };
      axios
        .post("/api/signupuser", user)
        .then((res) => {
          alert(res.data);
          localStorage.setItem("loggedin", "loggedin");
          localStorage.setItem("emailid", email);
          history.push("/home");
          window.location.reload(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="login-form">
      <Weblogo />
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className="loginfield"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="loginfield"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicMobileno">
          <Form.Label>Mobile number</Form.Label>
          <Form.Control
            className="loginfield"
            type="text"
            placeholder="Enter your mobile number"
            value={mobileno}
            maxlength="10"
            onChange={(e) => {
              setmobileno(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="loginfield"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className="loginfield"
            type="password"
            placeholder="Confirm your Password"
            value={confpass}
            onChange={(e) => {
              setconfpass(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          style={{ backgroundColor: "#028174", border: "none" }}
          type="submit"
          size="lg"
          block
          onClick={signup}
        >
          Signup
        </Button>
        <div className="innercontainer-login-form">
          <Button
            className="cancel-button"
            variant="danger"
            type="button"
            onClick={() => {
              window.location.reload(true);
            }}
          >
            Cancle
          </Button>
          <span>
            Already have an account{" "}
            <a
              href="/login"
              style={{ textDecoration: "underline", color: "#028174" }}
            >
              {" "}
              Login
            </a>
          </span>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
