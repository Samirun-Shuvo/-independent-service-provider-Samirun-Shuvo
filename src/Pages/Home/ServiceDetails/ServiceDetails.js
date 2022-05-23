import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div className="container">
      <div className="text-center">
        <h5 className="mt-5 text-primary">Service Details:{serviceId}</h5>
        <button className="btn btn-primary">Service Checked Out</button>
      </div>
    </div>
  );
};

export default ServiceDetails;
