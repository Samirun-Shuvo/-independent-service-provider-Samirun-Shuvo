import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef =useRef('');
    const passwordRef =useRef('');
    const navigate =useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
    }
    const navigateRegister=event=>{
        navigate('/register');
    }

  return (
    <div className="container">
      <h2 className="text-secondary mt-5 text-center">Log-In Please</h2>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="name@example.com" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn mx-auto w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-center mt-2">Are you new here? <Link to='/register' onClick={navigateRegister} className="text-primary text-decoration-none">Please Resister</Link></p>
    </div>
  );
};

export default Login;
