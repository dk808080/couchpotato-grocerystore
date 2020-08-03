import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function Navigation() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/allproducts">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="FOOD"
              id="basic-nav-dropdown"
              style={{ margin: "20px" }}
            >
              <NavDropdown.Item href="/food-beverages">
                Beverages
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/food-dairy">Dairy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/food-fruits">Fruits</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/food-vegetables">
                Vegetables
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="GROCERY"
              id="basic-nav-dropdown"
              style={{ margin: "20px" }}
            >
              <NavDropdown.Item href="/grocery-edibleoils">
                Edible oils
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/grocery-flours">Flours</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/grocery-grains">Grains</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/grocery-spices">Spices</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="WINTER SPECIAL"
              id="basic-nav-dropdown"
              style={{ margin: "20px" }}
            >
              <NavDropdown.Item href="/winter-winter">
                Winter special
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="FESTIVAL"
              id="basic-nav-dropdown"
              style={{ margin: "20px" }}
            >
              <NavDropdown.Item href="/festival-diwali">
                Diwali special
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/festival-rakhi">
                Rakhi special
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;
