import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle } from 'lucide-react';

// --- Development Imports ---
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

// --- DSA Imports ---
import { Chapter1Quiz as DSAChapter1Quiz } from '../subjects/dsa/quiz/Chapter1Quiz';
import { Chapter2Quiz as DSAChapter2Quiz } from '../subjects/dsa/quiz/Chapter2Quiz';
import { Chapter3Quiz as DSAChapter3Quiz } from '../subjects/dsa/quiz/Chapter3Quiz';
import { Chapter4Quiz as DSAChapter4Quiz } from '../subjects/dsa/quiz/Chapter4Quiz';
import { Chapter5Quiz as DSAChapter5Quiz } from '../subjects/dsa/quiz/Chapter5Quiz';
import { Chapter6Quiz as DSAChapter6Quiz } from '../subjects/dsa/quiz/Chapter6Quiz';
import { Chapter7Quiz as DSAChapter7Quiz } from '../subjects/dsa/quiz/Chapter7Quiz';
import { Chapter8Quiz as DSAChapter8Quiz } from '../subjects/dsa/quiz/Chapter8Quiz';
import { Chapter9Quiz as DSAChapter9Quiz } from '../subjects/dsa/quiz/Chapter9Quiz';

// --- Aptitude Imports ---
import { Chapter1Part1Quiz as AptChapter1Part1Quiz } from '../subjects/aptitude/quiz/Chapter1Part1Quiz';
import { Chapter1Part2Quiz as AptChapter1Part2Quiz } from '../subjects/aptitude/quiz/Chapter1Part2Quiz';
import { Chapter1Part3Quiz as AptChapter1Part3Quiz } from '../subjects/aptitude/quiz/Chapter1Part3Quiz';
import { Chapter2Part1Quiz as AptChapter2Part1Quiz } from '../subjects/aptitude/quiz/Chapter2Part1Quiz';
import { Chapter2Part2Quiz as AptChapter2Part2Quiz } from '../subjects/aptitude/quiz/Chapter2Part2Quiz';
import { Chapter2Part3Quiz as AptChapter2Part3Quiz } from '../subjects/aptitude/quiz/Chapter2Part3Quiz';
import { Chapter3Quiz as AptChapter3Quiz } from '../subjects/aptitude/quiz/Chapter3Quiz';

// Merge all quiz objects into one
const allQuizzes = {
  // Development
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
  
  // DSA
  ...DSAChapter1Quiz,
  ...DSAChapter2Quiz,
  ...DSAChapter3Quiz,
  ...DSAChapter4Quiz,
  ...DSAChapter5Quiz,
  ...DSAChapter6Quiz,
  ...DSAChapter7Quiz,
  ...DSAChapter8Quiz,
  ...DSAChapter9Quiz,
  
  // Aptitude
  ...AptChapter1Part1Quiz,
  ...AptChapter1Part2Quiz,
  ...AptChapter1Part3Quiz,
  ...AptChapter2Part1Quiz,
  ...AptChapter2Part2Quiz,
  ...AptChapter2Part3Quiz,
  ...AptChapter3Quiz,
};

// --- Types ---
interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string; 
}

interface QuizDisplayProps {
  subchapterId?: string;
}

const getQuizData = (id: string): QuizQuestion[] | undefined => {
  return (allQuizzes as unknown as Record<string, QuizQuestion[]>)[id];
};

const QuizDisplay: React.FC<QuizDisplayProps> = ({ subchapterId }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Reset state if subchapterId changes
  React.useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizSubmitted(false);
  }, [subchapterId]);
  
  if (!subchapterId) {
    return <div className="p-4 text-red-500">Error: No subchapterId provided to QuizDisplay.</div>;
  }

  const quizzes = getQuizData(subchapterId);

  const title = subchapterId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());

  if (!quizzes || quizzes.length === 0) {
    return <div className="p-4 text-muted-foreground">No quizzes available for this subchapter yet.</div>;
  }

  const currentQuestion = quizzes[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setQuizSubmitted(true);
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quizzes.forEach((quiz, index) => {
      if (selectedAnswers[index] === quiz.answer) {
        correct++;
      }
    });
    return {
      correct,
      wrong: quizzes.length - correct,
      total: quizzes.length,
    };
  };

  // --- Results Screen ---
  if (quizSubmitted) {
    const score = calculateScore();
    return (
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-4">Quiz Results: {title}</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-center">Your Score</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around items-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-500">{score.correct}</p>
              <p className="text-muted-foreground">Correct</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-red-500">{score.wrong}</p>
              <p className="text-muted-foreground">Wrong</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">{score.total}</p>
              <p className="text-muted-foreground">Total</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Review Your Answers</h2>
            <Button variant="outline" onClick={handleRestart}>Restart Quiz</Button>
        </div>
        {quizzes.map((quiz, index) => {
          const userAnswer = selectedAnswers[index];
          const isCorrect = userAnswer === quiz.answer;
          return (
            <div key={index} className="mb-6 p-4 border rounded-lg">
              <p className="font-semibold text-lg mb-4">{index + 1}. {quiz.question}</p>
              <div className="space-y-2">
                {quiz.options.map((option) => {
                  const isUserAnswer = userAnswer === option;
                  const isCorrectAnswer = quiz.answer === option;

                  let variant: "default" | "secondary" | "destructive" | "outline" = "secondary";
                  if (isCorrectAnswer) variant = "default";
                  if (isUserAnswer && !isCorrect) variant = "destructive";
                  if (!isUserAnswer && !isCorrectAnswer) variant = "outline";

                  return (
                    <Badge
                      key={option}
                      variant={variant}
                      className={`p-3 text-base w-full justify-start ${
                        isCorrectAnswer ? 'border-2 border-green-500' : ''
                      } ${isUserAnswer && !isCorrect ? 'border-2 border-red-500' : ''}`}
                    >
                      {isUserAnswer && !isCorrect && <XCircle className="h-4 w-4 mr-2" />}
                      {isCorrectAnswer && <CheckCircle className="h-4 w-4 mr-2" />}
                      {option}
                    </Badge>
                  );
                })}
              </div>
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="font-semibold">Explanation:</p>
                <p>{quiz.explanation || "No explanation provided."}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // --- Quiz Screen ---
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6">Quiz: {title}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Question {currentQuestionIndex + 1} of {quizzes.length}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold mb-6">{currentQuestion.question}</p>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <Button
                key={option}
                variant={selectedOption === option ? "default" : "secondary"}
                className="w-full justify-start h-auto p-4 text-left whitespace-normal"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            {currentQuestionIndex < quizzes.length - 1 ? (
              <Button
                onClick={handleNext}
                disabled={!selectedOption}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!selectedOption}
                variant="default"
              >
                Submit
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizDisplay;