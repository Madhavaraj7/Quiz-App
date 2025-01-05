import React from 'react';

const Explanation = ({ explanation, isCorrect }) => {
  return (
    <div className={`p-4 mt-4 rounded-lg ${isCorrect ? 'bg-green-200' : 'bg-red-200'}`}>
      <p>{explanation}</p>
    </div>
  );
};

export default Explanation;
