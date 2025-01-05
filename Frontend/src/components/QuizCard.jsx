import React, { useState } from 'react';
import Explanation from './Explanation';

const QuizCard = ({ question, currentQuestion, totalQuestions, setCurrentQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrev = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentQuestion((prev) => prev - 1);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Question {currentQuestion}</h2>
      <p className="mb-4 font-medium text-gray-800">{question.question}</p>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`block w-full text-left px-4 py-3 my-2 rounded-lg shadow-sm ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        {currentQuestion > 1 && (
          <button onClick={handlePrev} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
            Prev
          </button>
        )}
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          Explanation
        </button>
        {currentQuestion < totalQuestions && (
          <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Next
          </button>
        )}
      </div>
      {showExplanation && <Explanation explanation={question.explanation} isCorrect={selectedOption === question.correctAnswer} />}
    </div>
  );
};

export default QuizCard;