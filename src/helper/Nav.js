import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar(props) {
  console.log(props)
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">JB BIO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#products">Catalogue</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
