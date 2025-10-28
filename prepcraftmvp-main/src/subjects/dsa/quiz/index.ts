import BasicsOfProgrammingQuiz from './BasicsOfProgrammingQuiz';
import ArrayQuiz from './ArrayQuiz';
import SortingQuiz from './SortingQuiz';
import ProblemSolvingQuiz from './ProblemSolvingQuiz';

export const dsaQuizzes = [
  {
    id: 'dsa-basics-of-programming-quiz',
    title: 'Basics of Programming Quiz',
    component: BasicsOfProgrammingQuiz,
    meta: {
      id: 'dsa-basics-of-programming-quiz',
      title: 'Basics of Programming Quiz',
      difficulty: 'easy'
    }
  },
  {
    id: 'dsa-array-quiz',
    title: 'Array Quiz',
    component: ArrayQuiz,
    meta: {
      id: 'dsa-array-quiz',
      title: 'Array Quiz',
      difficulty: 'medium'
    }
  },
  {
    id: 'dsa-sorting-quiz',
    title: 'Sorting Quiz',
    component: SortingQuiz,
    meta: {
      id: 'dsa-sorting-quiz',
      title: 'Sorting Quiz',
      difficulty: 'medium'
    }
  },
  {
    id: 'dsa-problem-solving-quiz',
    title: 'Problem Solving Quiz',
    component: ProblemSolvingQuiz,
    meta: {
      id: 'dsa-problem-solving-quiz',
      title: 'Problem Solving Quiz',
      difficulty: 'hard'
    }
  }
];