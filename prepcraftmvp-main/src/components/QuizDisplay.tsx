import React from 'react';
// FIX: Import all the individual chapter quiz data
import { Chapter1Quiz } from '../subjects/development/quiz/Chapter1Quiz';
import { Chapter2Quiz } from '../subjects/development/quiz/Chapter2Quiz';
import { Chapter3Quiz } from '../subjects/development/quiz/Chapter3Quiz';
import { Chapter4Quiz } from '../subjects/development/quiz/Chapter4Quiz';
import { Chapter5Quiz } from '../subjects/development/quiz/Chapter5Quiz';
import { Chapter6Quiz } from '../subjects/development/quiz/Chapter6Quiz';
import { Chapter7Quiz } from '../subjects/development/quiz/Chapter7Quiz';
import { Chapter8Quiz } from '../subjects/development/quiz/Chapter8Quiz';
import { Chapter9Quiz } from '../subjects/development/quiz/Chapter9Quiz';
import { Chapter10Quiz } from '../subjects/development/quiz/Chapter10Quiz';

// FIX: Merge all quiz objects into one
const allDevelopmentQuizzes = {
  ...Chapter1Quiz,
  ...Chapter2Quiz,
  ...Chapter3Quiz,
  ...Chapter4Quiz,
  ...Chapter5Quiz,
  ...Chapter6Quiz,
  ...Chapter7Quiz,
  ...Chapter8Quiz,
  ...Chapter9Quiz,
  ...Chapter10Quiz,
};

// --- Types ---
interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

interface QuizDisplayProps {
  subchapterId: string;
}

// FIX: Helper function to safely get quiz data from the merged object
const getQuizData = (id: string): QuizQuestion[] | undefined => {
  return (allDevelopmentQuizzes as Record<string, QuizQuestion[]>)[id];
};

const QuizDisplay: React.FC<QuizDisplayProps> = ({ subchapterId }) => {
  // FIX: Use the helper to get the correct quiz questions
  const quizzes = getQuizData(subchapterId);
  
  // Get a clean title from the ID
  const title = subchapterId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  if (!quizzes || quizzes.length === 0) {
    return <div className="p-4 text-muted-foreground">No quizzes available for this subchapter yet.</div>;
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6">Quiz: {title}</h1>
      {quizzes.map((quiz, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm bg-background">
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
                <label htmlFor={`quiz-${subchapterId}-${index}-option-${optIndex}`} className="text-foreground">
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