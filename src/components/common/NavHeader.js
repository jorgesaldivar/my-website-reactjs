import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./NavHeader.module.css";
import Container from "react-bootstrap/Container";

const NavHeader = ({ navHeader }) => {
  return (
    <>
      <Navbar className={styles.navbar} expand="lg" fixed="top" bg="light">
        <Container>
          <Navbar.Brand href="/" onClick={(event) => event.preventDefault()}>
            {navHeader.home}
          </Navbar.Brand>
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
                  {navHeader.contact}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="https://github.com/jorgesaldivar/my-website-reactjs"
                  target="_blank"
                >
                  {navHeader.source}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavHeader;
