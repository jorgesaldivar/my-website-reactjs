import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./NavHeader.module.css";

const NavHeader = (props) => {
  return (
    <>
      <Navbar className={styles.navbar} expand="lg" fixed="top" bg="light">
        <div class="container">
          <Navbar.Brand href="#home">{props.home}</Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggle"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className={styles.navbarCollapse}
            id="basic-navbar-nav"
          >
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="#home">{props.contact}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">{props.source}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavHeader;
