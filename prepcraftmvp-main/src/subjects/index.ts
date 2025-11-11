// Chapter lists
import { chapters as developmentChapters } from './development/chapters';
import { dsaChapters } from './dsa/chapters';
import { chapters as aptitudeChapters } from './aptitude/chapters';

// Note component lists
import { developmentNotes } from './development/notes';
import { dsaNotes } from './dsa/notes';
import { aptitudeNotes } from './aptitude/notes';

// Practice Problem component lists
import { developmentPracticeProblems } from './development/practice-problems';
import { dsaPracticeProblems } from './dsa/practice-problems';
import { aptitudePracticeProblems } from './aptitude/practice-problems';

// Quiz component lists
import { developmentQuizzes } from './development/quiz';
import { dsaQuizzes } from './dsa/quiz';
import { aptitudeQuizzes } from './aptitude/quiz';

// Import the sidebar chapter lists
import { quizChapters as developmentQuizChapters } from './development/quizChapters';
import { practiceChapters as developmentPracticeChapters } from './development/practiceChapters';
import { dsaQuizChapters } from './dsa/quizChapters';
// FIX: Use the 'as' alias to correctly import 'practiceChapters'
import { practiceChapters as dsaPracticeChapters } from './dsa/practiceChapters';
import { quizChapters as aptitudeQuizChapters } from './aptitude/quizChapters';
import { practiceChapters as aptitudePracticeChapters } from './aptitude/practiceChapters';


export const subjects = {
  development: {
    id: 'development',
    title: 'Development',
    description: 'Master web development, from frontend to backend.',
    chapters: developmentChapters,
    notes: developmentNotes,
    practiceProblems: developmentPracticeProblems,
    quizzes: developmentQuizzes,
    quizChapters: developmentQuizChapters, 
    practiceChapters: developmentPracticeChapters,
  },
  dsa: {
    id: 'dsa',
    title: 'DSA',
    description: 'Strengthen your data structures and algorithm skills.',
    chapters: dsaChapters,
    notes: dsaNotes,
    practiceProblems: dsaPracticeProblems,
    quizzes: dsaQuizzes,
    quizChapters: dsaQuizChapters, 
    practiceChapters: dsaPracticeChapters, // This will now work
  },
  aptitude: {
    id: 'aptitude',
    title: 'Aptitude',
    description: 'Sharpen your quantitative and logical reasoning.',
    chapters: aptitudeChapters,
    notes: aptitudeNotes,
    practiceProblems: aptitudePracticeProblems,
    quizzes: aptitudeQuizzes,
    quizChapters: aptitudeQuizChapters, 
    practiceChapters: aptitudePracticeChapters,
  },
};

export const getSubjectBySlug = (slug: string) => {
  return subjects[slug as keyof typeof subjects];
};

export const allSubjects = Object.values(subjects);