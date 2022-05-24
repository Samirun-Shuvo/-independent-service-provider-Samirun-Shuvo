import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth);
  }
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
              <Nav.Link as={Link} to="/home" className="text-light text-bold">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light text-bold">About</Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-light text-bold">Services</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="text-light text-bold">Blogs</Nav.Link>
            </Nav>
            <Nav>
              {
                user ?
                <Nav.Link as={Link} to="/login">
                  <button onClick={handleSignOut} className="btn btn-light">Sign out</button>
              </Nav.Link>
                :
                <Nav.Link as={Link} to="/login">
                  <button className="btn btn-light">Log in</button>
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
