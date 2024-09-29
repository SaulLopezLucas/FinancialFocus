import React from "react";

const Flashcard = ({
  term,
  definition,
  flipped,
  setFlipped,
  handleNext,
  handleBack,
}) => {
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard">
      <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="front">{term}</div>
        <div className="back">{definition}</div>
      </div>
      <div className="buttons">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Flashcard;
