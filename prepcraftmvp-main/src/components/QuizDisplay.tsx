import React from 'react';
import { developmentQuizzes } from '../subjects/development/developmentQuizzes';

interface QuizDisplayProps {
  subchapterId: string;
}

const QuizDisplay: React.FC<QuizDisplayProps> = ({ subchapterId }) => {
  const quizzes = developmentQuizzes[subchapterId];

  if (!quizzes || quizzes.length === 0) {
    return <div className="p-4 text-gray-600">No quizzes available for this subchapter yet.</div>;
  }

  return (
    <div className="p-8 font-sans max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Quiz: {subchapterId.replace(/-/g, ' ').toUpperCase()}</h3>
      {quizzes.map((quiz, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
          <p className="font-semibold text-lg mb-2">{index + 1}. {quiz.question}</p>
          <div className="space-y-2">
            {quiz.options.map((option, optIndex) => (
              <div key={optIndex} className="flex items-center">
                <input
                  type="radio"
                  id={`quiz-${subchapterId}-${index}-option-${optIndex}`}
                  name={`quiz-${subchapterId}-${index}`}
                  value={option}
                  className="mr-2"
                  disabled // Disable for display, enable for interactive quiz
                />
                <label htmlFor={`quiz-${subchapterId}-${index}-option-${optIndex}`} className="text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-green-600 font-medium">
            Correct Answer: {quiz.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuizDisplay;
