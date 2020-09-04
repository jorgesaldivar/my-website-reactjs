import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavHeader.css";

const NavHeader = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" bg="light">
        <div class="container">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggle"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="#home">CONTACT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">SOURCE CODE</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavHeader;
