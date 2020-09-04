import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./NavHeader.module.css";

const NavHeader = (props) => {
  return (
    <>
      <Navbar className={styles.navbar} expand="lg" fixed="top" bg="light">
        <div class="container">
          <Navbar.Brand href="">{props.home}</Navbar.Brand>
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
                <Nav.Link href="mailto:me@jorgesaldivar.com">
                  {props.contact}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="https://github.com/jorgesaldivar/my-website-reactjs"
                  target="_blank"
                >
                  {props.source}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavHeader;
