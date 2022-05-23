import React from "react";
import about from "../../images/about/about.png";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="row about">
        <div className="col-md-6">
          <div className="about-content">
            <h1>Hello, i am</h1>
            <h1>
              Md. Samirun Shuvo <br />
              I'm a <span className="text-danger">Lowyer</span>
            </h1>
            <h5>
              One of my life goals is to serve as a role model for those I'm
              managing.
            </h5>
            <p className="pt-3 about-text">
              I have a loyalty that runs in my bloodstream, when I lock into
              someone or something, you can't get me away from it because I
              commit that thoroughly. <br />
              The right to practice law comes with obligations. Honesty to your
              client and to the court is an absolute requirement. Your
              reputation is critically important. The practice of law is hard.
              There are always people to turn to for advice and assistance.
            </p>
            <button className="btn btn-success mt-3">More About..</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-img mb-5 pb-3">
            <img className="img-fluid" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
