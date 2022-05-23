import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = (event) => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;

    console.log(name,email,password);
  };
  return (
    <div className="container">
      <h2 className="text-secondary mt-5 text-center">Please Register</h2>
      <Form onSubmit={handleRegister} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="name@example.com" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn mx-auto w-100" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="text-center mt-2">
        Are you new here?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-primary text-decoration-none"
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
