import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

function Navreview() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#ffe3b3" }}>
        <Navbar.Brand href="/reviews" style={{ marginLeft: "1rem" }}>
          Reviews
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link href="/addreview" style={{ margin: "auto 4rem" }}>
            Add your review
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navreview;
