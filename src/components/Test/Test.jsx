import React, { useState, useEffect } from "react";
import "./Test.css";
import { useHistory } from "react-router-dom";

const Test = ({ match }) => {
  let type = match.params.type;
  const [questions, setQuestions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (type === "postTraumatic") {
      setQuestions([
        {
          title: "Post Traumatic Disorder",
          question:
            "Have you experienced or witnessed a traumatic event in the past, such as a natural disaster, serious accident, physical or sexual assault, or military combat?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          
          question:
            "Do you have intrusive thoughts or memories of the traumatic event that are distressing and difficult to control?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Do you experience nightmares or flashbacks of the traumatic event that cause you to feel like you are reliving the experience?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you avoid certain situations or activities that remind you of the traumatic event, or feel emotionally numb and detached from others?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you experience negative changes in your thoughts or moods, such as feeling irritable, angry, or anxious, or having difficulty sleeping or concentrating?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you feel hyper-vigilant or on edge, constantly on the lookout for potential threats or danger?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you have a sense of guilt or shame related to the traumatic event, or feel like it was your fault or you should have done more to prevent it?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you feel comfortable discussing your experiences and feelings related to the traumatic event?",
          options: ["True", "False"],
          answer: "True",
        },
      ]);
    } else if (type === "obsessive") {
      setQuestions([
        {
          title: "Obsessive Complusive Disorder",
          question:
            "Do you feel like you need to do certain things a certain number of times (e.g. turning off a light switch three times) in order to prevent something bad from happening?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Do you feel like you need to have things arranged in a specific order or symmetry, and feel anxious or distressed if they are not?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Do you experience intrusive and unwanted thoughts or images of harming yourself or others, despite not wanting to act on them?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you feel compelled to mentally review past events to ensure that nothing bad has happened, or to prevent something bad from happening in the future?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you feel like you need to ask for reassurance from others repeatedly, even if they have already given you an answer?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you find yourself avoiding situations or objects that trigger your obsessive thoughts or compulsive behaviors?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you feel like your thoughts and behaviors are irrational or excessive, but you cannot stop them?",
          options: ["True", "False"],
          answer: "True",
        },
      ]);
    } else if (type === "schizo") {
      setQuestions([
        {
          title: "Schizophernia",
          question: "Do you ever hear or see things that others cant?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Do you ever feel like your thoughts are being controlled by outside forces?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Do you ever have strong beliefs or ideas that others dont share or find strange?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Have you experienced a significant decline in your ability to function in work, school, or social situations?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Have you noticed a decrease in your ability to experience pleasure or enjoyment?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Have you experienced unusual or disordered speech patterns, such as talking in a way that is difficult for others to follow or jumping rapidly from topic to topic?",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
          "Have you experienced a significant decrease in your ability to concentrate or remember things?",
          options: ["True", "False"],
          answer: "True",
        },
      ]);
    }
  }, []);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleAnswerSelect = (answer) => {
    setUserAnswers([...userAnswers, answer]);

    if (currentQuestion === questions.length - 1) {
      showResults();
    }
    else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].answer) {
        score++;
      }
    }
    return score;
  };

  const showResults = () => {
    let score = calculateScore();
    let result = score >= questions.length/3 ? "positive" : "negative";
    setUserAnswers([]);
    setCurrentQuestion(0);
    history.replace(`/result/${type}/${result}`);
    
  };

  return (
    <div className="testContainer">
      {questions[0] && (
        <div className="question">
          <h1>Test for {questions[0].title}</h1>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelect(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Test;
