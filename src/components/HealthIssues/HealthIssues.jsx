import React from "react";
import "./HealthIssues.css";
import { Link } from "react-router-dom";

const HealthIssues = () => {
  return (
    <div className="mentalIssuesContainer">
      <div className="card">
        <div className="card-content">
          <h1 className="card-title">POST TRAUMATIC STRESS DISORDER (PTSD)</h1>
          <p className="card-description">
            Post-traumatic stress disorder (PTSD) can happen after a person
            experiences a traumatic event, causing them to feel fearful,
            shocked, or helpless. It can have long-term effects, including
            flashbacks, difficulty sleeping, and anxiety.
          </p>
          <h1>Symptoms:</h1>
          <p className="card-description">
            <ol>
              <li>PTSD can affect children as well as adults</li>
              <li>Having trouble sleeping and upsetting nightmares</li>
              <li>
                Like adults,children with PTSD may also lose interest in
                activities
              </li>
            </ol>
          </p>
        </div>
        <Link to="test/postTraumatic">
          <button>Test Now</button>
        </Link>
      </div>
      <div className="card">
        <div className="card-content">
          <h1 className="card-title">OBSESSIVE COMPULSIVE DISORDER(OCD)</h1>
          <p className="card-description">
            Obsessive-compulsive disorder (OCD) is a mental health condition
            that involves distressing, intrusive, obsessive thoughts and
            repetitive, compulsive physical or mental acts. Approximately 2% of
            the population have OCD. Having OCD can significantly affect a
            person’s quality of life and their well-being.
          </p>
          <h1>Symptoms:</h1>
          <p className="card-description">
            <ol>
              <li>
                Fear of contamination by disease, infection or an unpleasant
                substance
              </li>
              <li>
                Thinking "neutralising" thoughts to counter the obsessive
                thoughts
              </li>
              <li>Repeating words in their head</li>
            </ol>
          </p>
        </div>
        <Link to="test/obsessive">
          <button>Test Now</button>
        </Link>
      </div>
      <div className="card">
        <div className="card-content">
          <h1 className="card-title">SCHIZOPHRENIA</h1>
          <p className="card-description">
            Schizophrenia is a serious mental disorder in which people interpret
            reality abnormally. Schizophrenia may result in some combination of
            hallucinations, delusions, and extremely disordered thinking and
            behavior that impairs daily functioning, and can be disabling.
            People with schizophrenia require lifelong treatment. Early
            treatment may help get symptoms under control before serious
            complications develop and may help improve the long-term outlook.
          </p>
          <h1>Symptoms:</h1>
          <p className="card-description">
            <ol>
              <li>Irritability or depressed mood</li>
              <li>Withdrawal from friends and family</li>
              <li>Extremely disorganized or abnormal motor behavior</li>
            </ol>
          </p>
        </div>
        <Link to="test/schizo">
          <button>Test Now</button>
        </Link>
      </div>
      <div className="card">
        <div className="card-content">
          <h1 className="card-title">BIPOLAR DISORDER</h1>
          <p className="card-description">
            Bipolar disorder is a brain disorder that causes changes in a
            person's mood, energy, and ability to function. People with bipolar
            disorder experience intense emotional states that typically occur
            during distinct periods of days to weeks, called mood episodes.
            These mood episodes are categorized as manic/hypomanic (abnormally
            happy or irritable mood) or depressive (sad mood).
          </p>
          <h1>Symptoms:</h1>
          <p className="card-description">
            <ol>
              <li>Decreased need for sleep</li>
              <li>Loss of interest in activities the person once enjoyed</li>
              <li>Frequent thoughts of death or suicide</li>
            </ol>
          </p>
        </div>
        <Link to="test/postTraumatic">
          <button>Test Now</button>
        </Link>
      </div>
      <div className="card">
        <div className="card-content">
          <h1 className="card-title">MAJOR DEPRESSIVE DISORDER(DEPRESSION)</h1>
          <p className="card-description">
            Depression is a mood disorder that causes a persistent feeling of
            sadness and loss of interest. Also called major depressive disorder
            or clinical depression, it affects how you feel, think and behave
            and can lead to a variety of emotional and physical problems. You
            may have trouble doing normal day-to-day activities, and sometimes
            you may feel as if life isn't worth living.
          </p>
          <h2>Symptoms:</h2>
          <p className="card-description">
            <ol>
              <li>Feelings of sadness, tearfulness, emptiness or hopelessness</li>
              <li>Sleep disturbances, including insomnia or sleeping too much</li>
              <li>Feelings of worthlessness or guilt, fixating on past failures or self-blame</li>
            </ol>
          </p>
        </div>
        <Link to="test/postTraumatic">
          <button>Test Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HealthIssues;
