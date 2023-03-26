import React from "react";
import "./Sessions.css";
import AmoghLila from "./images/amoghLilaPrabhu.jpg";
import radheShyam from "./images/radheShyam.jpg";

const Skills = () => {
  return (
    <div className="sessionsContainer">
      <div>
        <img src={AmoghLila} alt="img1" />
        <h1>Amogh Lila Prabhu Ji</h1>
        <p>
        Vice President ISKCON Dwarka, Delhi <br/>
        Motivation Speaker, Guest Speaker at IIM Ahmedabad
        </p>
        <a href="https://calendly.com/shyam88"><button>Book session</button></a>
      </div>
      <div>
        <img src={radheShyam} alt="img2" />
        <h1>RadheShyam Prabhu Ji</h1>
        <p>
        president ISKCON Pune NVCC
        </p>
        <a href="https://calendly.com/shyam88"><button>Book session</button></a>
      </div>
    </div>
  );
};

export default Skills;
