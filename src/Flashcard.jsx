import React, { useState } from "react";

const Flashcard = ({
  term,
  definition,
  question,
  flipped,
  setFlipped,
  handleNext,
  handleBack,
  studyMode,
}) => {
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    setFeedback(null);
  };

  const checkAnswer = () => {
    if (userInput.toLowerCase() === term.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback(`Incorrect! Please try again.`);
    }
  };

  const handleNextWithReset = () => {
    setUserInput("");
    setFeedback(null);
    handleNext();
  };

  return (
    <div className="flashcard">
      {!studyMode ? (
        <div
          className={`card ${flipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="front">{term}</div>
          <div className="back">{definition}</div>
        </div>
      ) : (
        <div>
          <div
            className={`card ${flipped ? "flipped" : ""}`}
            onClick={handleFlip}
          >
          <div className="front">{question}</div>
          <div className="back">{term}</div>
          </div>

          {!flipped && (
            <div className="user-field">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your answer here"
              />
              <button onClick={checkAnswer}>Check Answer</button>
              {feedback && <p className="feedback">{feedback}</p>}
            </div>
          )}
        </div>
      )}
      <div className="buttons">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNextWithReset}>Next</button>
      </div>
    </div>
  );
};

export default Flashcard;
