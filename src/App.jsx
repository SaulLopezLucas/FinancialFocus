// src/App.js
import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css"; // Add some basic styling

const terms = [
  {
    term: "Budget",
    definition:
      "A plan that outlines expected income and expenses over a specific period, helping individuals manage their finances effectively.",
    question:
      "What helps individuals manage their finances effectively and outlines expected income and expenses over a specific period?",
  },
  {
    term: "Savings",
    definition:
      "Money that is set aside for future use, typically kept in a savings account or other interest-earning account.",
    question:
      "What is the money called that is set aside for future use, often kept in an interest-earning account?",
  },
  {
    term: "Investing",
    definition:
      "The act of allocating money to assets or ventures with the expectation of generating a return or profit over time.",
    question:
      "What is the act of allocating money to assets or ventures with the expectation of generating a return or profit over time called?",
  },
  {
    term: "Interest",
    definition:
      "The cost of borrowing money or the earnings from lending money, usually expressed as a percentage of the principal amount.",
    question:
      "What is the term for the cost of borrowing money or the earnings from lending money, typically expressed as a percentage of the principal amount?",
  },
  {
    term: "Principal",
    definition:
      "The original sum of money borrowed or invested, excluding interest or any other fees.",
    question:
      "What is the original sum of money borrowed or invested, excluding interest and fees, called?",
  },
  {
    term: "Credit Score",
    definition:
      "A numerical representation of an individual’s creditworthiness, based on their credit history, used by lenders to assess the risk of lending money.",
    question:
      "What is the numerical representation of an individual's creditworthiness, based on credit history, used by lenders to assess lending risk?",
  },
  {
    term: "Debt",
    definition:
      "Money that is borrowed and must be repaid, often with interest; can include loans, credit cards, and mortgages.",
    question:
      "What is the term for money that is borrowed and must be repaid, often with interest, such as loans or mortgages?",
  },
  {
    term: "Asset",
    definition:
      "Any resource owned by an individual or business that has economic value, such as cash, real estate, stocks, or equipment.",
    question:
      "What is any resource owned by an individual or business that holds economic value, like cash or real estate, called?",
  },
  {
    term: "Liability",
    definition:
      "A financial obligation or debt that an individual or business is responsible for, such as loans, mortgages, and credit card balances.",
    question:
      "What is a financial obligation or debt that an individual or business must repay, such as loans or credit card balances?",
  },
  {
    term: "Net Worth",
    definition:
      "The difference between an individual’s total assets and total liabilities, representing their overall financial health.",
    question:
      "What represents an individual's overall financial health by calculating the difference between total assets and total liabilities?",
  },
  {
    term: "Emergency Fund",
    definition:
      "A savings account specifically set aside for unexpected expenses or financial emergencies, typically covering three to six months’ worth of living expenses.",
    question:
      "What is a savings account specifically set aside for unexpected expenses or financial emergencies, typically covering 3 to 6 months of living expenses?",
  },
  {
    term: "Diversification",
    definition:
      "An investment strategy that involves spreading investments across various asset classes or sectors to reduce risk.",
    question:
      "What is the investment strategy called that involves spreading investments across different asset classes or sectors to reduce risk?",
  },
  {
    term: "Inflation",
    definition:
      "The rate at which the general level of prices for goods and services rises, decreasing purchasing power over time.",
    question:
      "What is the term for the rate at which prices for goods and services rise, decreasing purchasing power over time?",
  },
  {
    term: "Return on Investment (ROI)",
    definition:
      "A measure used to evaluate the efficiency of an investment, calculated as the net profit from the investment divided by the initial cost, expressed as a percentage.",
    question:
      "What measure evaluates the efficiency of an investment by calculating net profit divided by the initial cost, expressed as a percentage?",
  },
  {
    term: "Retirement Account",
    definition:
      "A financial account designed to help individuals save for retirement, often with tax advantages, such as a 401(k) or an Individual Retirement Account (IRA).",
    question:
      "What is a financial account designed to help individuals save for retirement, often offering tax advantages, such as a 401(k) or IRA?",
  },
];

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(
      Math.floor(Math.random() * terms.length)
    );
    const [history, setHistory] = useState([
      Math.floor(Math.random() * terms.length),
    ]);
    const [flipped, setFlipped] = useState(false);
    const [studyMode, setStudyMode] = useState(false);
    const handleNext = () => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * terms.length);
      } while (newIndex === currentIndex);

      setHistory((prevHistory) => [...prevHistory, newIndex]);
      setCurrentIndex(newIndex);
      setFlipped(false);
    };

    const handleBack = () => {
      setHistory((prevHistory) => {
        if (prevHistory.length > 1) {
          const previousIndex = prevHistory[prevHistory.length - 2];
          setCurrentIndex(previousIndex);
          return prevHistory.slice(0, -1); 
        }
        return prevHistory; 
      });
      setFlipped(false);
    };
    const toggleStudyMode = () => {
      setStudyMode(!studyMode);
    }
  return (
    <div className="app">
      <h1>Financial Focus!</h1>
      <h2>
        Are you looking to improve your financial literacy knowledge? Do you
        want to refresh your mind on the various terms used to live a
        financially healthy life? Look no further than Financial Focus, a
        flashcard set intended to help you learn the basics the fastest way
        possible! Enjoy.
      </h2>
      <h3>Number of Cards: 15</h3>
      <button onClick={toggleStudyMode}>{studyMode ? "Quiz Mode": "Study Mode"}</button>
      <h2></h2>
      <Flashcard
        term={terms[currentIndex].term}
        definition={terms[currentIndex].definition}
        question={terms[currentIndex].question}
        flipped={flipped}
        setFlipped={setFlipped}
        handleNext={handleNext}
        handleBack={handleBack}
        studyMode={studyMode}
      />
    </div>
  );
};

export default App;
