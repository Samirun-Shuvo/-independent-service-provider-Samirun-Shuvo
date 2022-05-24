import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const emailRef =useRef('');
    const passwordRef =useRef('');
    const navigate =useNavigate();

    const location =useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;
    if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>
    }
    if (user) {
      navigate(from, { replace: true });
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
    const navigateRegister=event=>{
        navigate('/register');
    }
    const resetPassword=async()=>{
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      alert('Sent email');
    }

  return (
    <div className="container">
      <div className="w-50 mx-auto">
      <h2 className="text-secondary mt-5 text-center">Log-In Please</h2>
      <Form onSubmit={handleSubmit} className='mb-2'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="name@example.com" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="password" required/>
        </Form.Group>
        <Button className="btn mx-auto w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {
        errorElement
      }
      <p className="text-center mt-2">Are you new here? <Link to='/register' onClick={navigateRegister} className="text-primary text-decoration-none">Please Resister</Link></p>
      <p className="text-center mt-2">Forget Password? <Link to='/register' onClick={resetPassword} className="text-primary text-decoration-none">Reset Password</Link></p>
      <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
