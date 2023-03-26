import React from "react";
import "./Result.css";
import Lottie from "lottie-react";
import Happy from "../../happy.json";
import Sad from "../../sad.json";
import img1 from "../../images/postTraumatic/kapal.jpg";
import img2 from "../../images/postTraumatic/konasana.jpg";

import img6 from "../../images/postTraumatic/tadasana.jpg";
const Result = ({ match }) => {
  const { type, result } = match.params;

  return (
    <div className="resultContainer">
      {result === "negative" && (
        <div className="positiveNews">
          <div className="animation">
            <Lottie loop={true} animationData={Happy} />
          </div>
          <h1>Congratulations, You are completely fine!</h1>
          <p>
            Everyone has some bad experiences in life, but time heals
            everything, cheers!{" "}
          </p>
        </div>
      )}
      {result === "positive" && (
        <div className="negativeNews">
          <div className="animation2">
            <Lottie loop={true} animationData={Sad} />
          </div>
          <h1>
            We are so sorry that you are facing hardships in life, but cheer up!
            <br />
            We are more than happy to help :)
          </h1>
          <div>
            <h1>What Bhagwat Gita says - </h1>
            <p>
              To overcome post traumatic stress disorder, one must develop a
              strong sense of detachment and cultivate positivity in life. One
              should focus on the present moment and not let the past events
              affect them. As it is said in Bhagavad Gita, "One who restrains
              his senses and fixes his consciousness upon Me(To krishna) is
              known as a man of steady intelligence" (BG 2.61). It is also
              important to engage in selfless service, yoga and meditation to
              calm the mind and bring peace within. "Yoga is the journey of the
              self, through the self, to the self" (BG 6.39). Remember, nothing
              in this world is permanent and everything is temporary. So, do not
              hold onto the memories which cause pain and only bring sadness.
              Focus on the blessings in life and be grateful for them. By doing
              so, one can overcome any trauma and live a peaceful life.
            </p>
          </div>
          <h1>Beneficial Yoga asanas</h1>
          <div className="imgContainer">
            <div>
              <img src={img1} alt="image" />
              <p>Kapal bharti</p>
            </div>
            <div>
              <img src={img2} alt="image" />
              <p>Konasana</p>
            </div>

            <div>
              <img src={img6} alt="image" />
              <p>Tadasana</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
