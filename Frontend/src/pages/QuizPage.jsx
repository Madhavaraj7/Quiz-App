import React, { useState, useEffect } from "react";
import QuizCard from "../components/QuizCard";
import { getQuizQuestions } from "../services/quizService";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      const data = await getQuizQuestions();
      setQuestions(data);
    }
    fetchQuestions();
  }, []);

  if (questions.length === 0) return <p>Loading...</p>;

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 w-11/12 md:w-3/4 lg:w-2/3">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-500">
        Quiz Application
      </h1>
      <div className="flex">
        <div className="w-3/4 pr-4">
          <QuizCard
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
            setCurrentQuestion={setCurrentQuestion}
          />
        </div>
        <div className="w-1/4 bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md font-bold">
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <h3 className="text-md font-bold text-red-600">Need Help?</h3>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full ${
                  index === currentQuestion
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
