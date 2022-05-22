import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="top-banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="banner-content">
              <h2 className="banner-text1">
               Introduce With Lowsight
              </h2>
              <h1 className="banner-text2">
                We are here to protect<br /> any kind of <span>Violance</span>
              </h1>
              <div className="my-3 banner-btn">
                <button className="btn btn-danger">Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
