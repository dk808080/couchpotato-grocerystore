import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import "../../css/dashboard-css/sidemenu.css";
import axios from "axios";

function Sidemenu() {
  const history = useHistory();
  function logout(event) {
    event.preventDefault();
    axios
      .get("/api/logout")
      .then((res) => {
        if (window.confirm(res.data)) {
          localStorage.removeItem("loggedin");
          localStorage.removeItem("emailid");
          history.push("/");
          window.location.reload(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div style={{ marginTop: "5rem" }} id="sideMenu">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/home" style={{ marginLeft: "1.5rem" }}>
          <i
            class="fas fa-user-circle fa-3x"
            style={{ marginLeft: "2rem" }}
          ></i>
          <h5>Hello friend</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/dashboard" className="sideMenu-item ">
              Personal information
            </Nav.Link>
            <Nav.Link href="/addresses" className="sideMenu-item">
              Manage addresses
            </Nav.Link>
            <Nav.Link href="/cards" className="sideMenu-item">
              Saved cards
            </Nav.Link>
            <Nav.Link href="/notifications" className="sideMenu-item">
              All notifications
            </Nav.Link>

            <Nav.Link href="/cart" className="sideMenu-item">
              Your cart
            </Nav.Link>
            <Nav.Link href="/orders" className="sideMenu-item">
              Your orders
            </Nav.Link>
            <Nav.Link href="/reviews" className="sideMenu-item">
              Reviews
            </Nav.Link>
            <Nav.Link className="sideMenu-item" onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Sidemenu;
