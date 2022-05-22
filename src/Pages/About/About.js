import React from "react";
import about from "../../images/about/about.png";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="row about">
        <div className="col-md-6">
          <div className="about-content">
            <h1>
              High-Quality <br />
              Legal <span className="text-danger">service</span>
            </h1>
            <p className="pt-3 about-text">
              I have a loyalty that runs in my bloodstream, when I lock into
              someone or something, you can't get me away from it because I
              commit that thoroughly.
            </p>
            <button className="btn btn-success mt-3">More About..</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-img">
            <img className="img-fluid" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
