import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo/logo.png';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <img src={logo} style={{height:'30px', width:'50px'}} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="text-light text-bold">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light text-bold">About</Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-light text-bold">Services</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="text-light text-bold">Blogs</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                  <button className="btn btn-light">Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
