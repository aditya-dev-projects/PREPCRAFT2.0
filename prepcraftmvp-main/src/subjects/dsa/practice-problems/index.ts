import BasicsOfProgrammingProblems from './BasicsOfProgrammingProblems';
import ArrayProblems from './ArrayProblems';
import SortingProblems from './SortingProblems';
import ProblemSolvingProblems from './ProblemSolvingProblems';

export const dsaPracticeProblems = [
  {
    id: 'dsa-basics-of-programming-problems',
    title: 'Basics of Programming Problems',
    component: BasicsOfProgrammingProblems,
    meta: {
      id: 'dsa-basics-of-programming-problems',
      title: 'Basics of Programming Problems',
      difficulty: 'easy',
      points: 20,
      items: [] // will be populated later
    }
  },
  {
    id: 'dsa-array-problems',
    title: 'Array Problems',
    component: ArrayProblems,
    meta: {
      id: 'dsa-array-problems',
      title: 'Array Problems',
      difficulty: 'medium',
      points: 30,
      items: [] // will be populated later
    }
  },
  {
    id: 'dsa-sorting-problems',
    title: 'Sorting Problems',
    component: SortingProblems,
    meta: {
      id: 'dsa-sorting-problems',
      title: 'Sorting Problems',
      difficulty: 'medium',
      points: 40,
      items: [] // will be populated later
    }
  },
  {
    id: 'dsa-problem-solving-problems',
    title: 'Problem Solving Problems',
    component: ProblemSolvingProblems,
    meta: {
      id: 'dsa-problem-solving-problems',
      title: 'Problem Solving Problems',
      difficulty: 'hard',
      points: 50,
      items: [] // will be populated later
    }
  }
];