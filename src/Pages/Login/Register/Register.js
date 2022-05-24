import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const navigateLogin = (event) => {
    navigate("/login");
  };
  if (loading||updating) {
    return <Loading></Loading>
  }
  if (user) {
    console.log("user", user);
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree =event.target.terms.checked;
    // console.log(name,email,password);
    // if (agree) {
    //   createUserWithEmailAndPassword(email, password);
    // }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto">
        <h2 className="text-secondary mt-5 text-center">Please Register</h2>
        <Form onSubmit={handleRegister} className="w-100 mx-auto">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              className={agree ? "text-primary" : "text-dark"}
              onClick={() => setAgree(!agree)}
              name="terms"
              type="checkbox"
              label="Accept terms and conditions"
            />
          </Form.Group>
          <Button
            disabled={!agree}
            className="btn mx-auto w-100"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Form>
        <p className="text-center mt-2">
          Are you new here?
          <Link
            to="/login"
            onClick={navigateLogin}
            className="text-primary text-decoration-none"
          >
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
