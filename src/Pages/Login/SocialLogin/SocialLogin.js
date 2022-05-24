import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;
  if (error) {
  errorElement = <p className="text-danger">Error: {error.message}</p>
  }
  if (user) {
    navigate('/home');
  }
  return (
    <div className="container">
      <div className="mb-5 pb-5">
      <div className="d-flex">
        <div className="w-50 bg-danger mt-4" style={{height:'1px'}}></div>
        <p className="p-2 fw-bold text-danger">Or</p>
        <div className="w-50 bg-danger mt-4" style={{height:'1px'}}></div>
      </div>
      {errorElement}
      <div>
        <button onClick={()=>signInWithGoogle()} className="btn btn-success d-block mx-auto mb-1"><i className="bi bi-google text-light"></i><span className="m-1">Sign with Google</span></button>
      </div>
      </div>
    </div>
  );
};

export default SocialLogin;
