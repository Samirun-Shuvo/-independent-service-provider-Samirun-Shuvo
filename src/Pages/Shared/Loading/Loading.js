import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="container">
      <div style={{height:'400px'}} className="w-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default Loading;
