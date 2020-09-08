import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Weblogo from "./Weblogo";
import swal from "sweetalert";
import "../css/login-signup.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  function validate(event) {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    axios
      .post("/api/validateuser", user)
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
  return (
    <div className="login-form">
      <Weblogo />
      <Form onSubmit={validate}>
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

        <Button
          style={{ backgroundColor: "#028174", border: "none" }}
          type="submit"
          size="lg"
          block
        >
          Login
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
            Forgot{" "}
            <a
              href="#"
              style={{ textDecoration: "underline", color: "#028174" }}
            >
              {" "}
              password?
            </a>
          </span>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            Don't have any account{" "}
            <a
              href="/signup"
              style={{ textDecoration: "underline", color: "#028174" }}
            >
              {" "}
              Signup
            </a>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
