import React from "react";
import "./Home.css";
import Panda from "../../panda.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="girlAnimation">
        <Lottie animationData={Panda} loop={true} />
      </div>
      <h1>MIND DOC</h1>
      <p>
        Your mind's best buddy to look after your mental health, anywhere you go!
      </p>
    </div>
  );
};

export default About;
