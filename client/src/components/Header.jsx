import React from "react";
import * as ReactBootStrap from "react-bootstrap";
//import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Header() {
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
    <div>
      {(() => {
        if (localStorage.getItem("loggedin")) {
          return (
            <ReactBootStrap.Navbar
              collapseOnSelect
              expand="lg"
              fixed="top"
              style={{
                backgroundColor: "#0ab68b",
              }}
            >
              <ReactBootStrap.Navbar.Brand href="/home">
                <img
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "100%",
                    border: "1.5px solid darkslategrey",
                  }}
                  src={process.env.PUBLIC_URL + "images/logo.jfif"}
                  alt="logo image"
                />
              </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                  <ReactBootStrap.Form inline>
                    <ReactBootStrap.FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <ReactBootStrap.Button
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#0ab68b",
                        color: "#000",
                      }}
                    >
                      Search
                    </ReactBootStrap.Button>
                  </ReactBootStrap.Form>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <ReactBootStrap.NavDropdown
                    title="My Account"
                    id="collasible-nav-dropdown"
                    style={{ color: "#000" }}
                  >
                    <ReactBootStrap.NavDropdown.Item href="/dashboard">
                      <i
                        className="fas fa-tachometer-slowest"
                        style={{ paddingRight: "10px" }}
                      ></i>
                      your dashboard
                    </ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="/helpnfaq">
                      <i
                        className="fas fa-question-circle"
                        style={{ paddingRight: "10px" }}
                      ></i>
                      help & FAQ
                    </ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item onClick={logout}>
                      <i
                        className="fas fa-sign-out-alt"
                        style={{ paddingRight: "10px" }}
                      ></i>
                      Logout
                    </ReactBootStrap.NavDropdown.Item>
                  </ReactBootStrap.NavDropdown>
                  <ReactBootStrap.Nav.Link href="/cart">
                    <i
                      className="fa fa-shopping-cart fa-2x"
                      style={{ marginLeft: "2rem" }}
                    >
                      {" "}
                    </i>
                  </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
          );
        } else {
          return (
            <ReactBootStrap.Navbar
              collapseOnSelect
              expand="lg"
              fixed="top"
              style={{
                backgroundColor: "#0ab68b",
              }}
            >
              <ReactBootStrap.Navbar.Brand href="/home">
                <img
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "100%",
                  }}
                  src={process.env.PUBLIC_URL + "images/logo.jfif"}
                  alt="logo image"
                />
              </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                  <ReactBootStrap.Form inline>
                    <ReactBootStrap.FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <ReactBootStrap.Button
                      style={{
                        border: "1px solid #fff",
                        backgroundColor: "#0ab68b",
                        color: "#000",
                      }}
                    >
                      Search
                    </ReactBootStrap.Button>
                  </ReactBootStrap.Form>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                  <ReactBootStrap.NavDropdown
                    title="My Account"
                    id="collasible-nav-dropdown"
                    style={{ color: "#000" }}
                  >
                    <ReactBootStrap.NavDropdown.Item href="/signup">
                      <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                      Sign Up
                    </ReactBootStrap.NavDropdown.Item>

                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="/login">
                      <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                    </ReactBootStrap.NavDropdown.Item>
                  </ReactBootStrap.NavDropdown>
                  <ReactBootStrap.Nav.Link href="/cart">
                    <i
                      className="fa fa-shopping-cart fa-2x"
                      style={{ marginLeft: "2rem" }}
                    >
                      {" "}
                    </i>
                  </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
          );
        }
      })()}
    </div>
  );
}

export default Header;
