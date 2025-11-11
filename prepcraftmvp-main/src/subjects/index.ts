import { chapters as developmentChapters } from './development/chapters';
import { dsaChapters } from './dsa/chapters';
import { chapters as aptitudeChapters } from './aptitude/chapters';

// Import practice and quiz chapters
import { practiceChapters as developmentPracticeChapters } from './development/practiceChapters';
import { quizChapters as developmentQuizChapters } from './development/quizChapters';
import { practiceChapters as dsaPracticeChapters } from './dsa/practiceChapters';
import { quizChapters as dsaQuizChapters } from './dsa/quizChapters';
import { practiceChapters as aptitudePracticeChapters } from './aptitude/practiceChapters';
import { quizChapters as aptitudeQuizChapters } from './aptitude/quizChapters';


// (The rest of your imports)
import { developmentPracticeProblems } from './development/developmentPracticeProblems';
import { developmentQuizzes } from './development/developmentQuizzes';
import { dsaPracticeProblems } from './dsa/practice-problems';
import { dsaQuizzes } from './dsa/quiz';
import { aptitudePracticeProblems } from './aptitude/practice-problems';
import { aptitudeQuizzes } from './aptitude/quiz';
import { dsaNotes } from './dsa/notes';
import { developmentNotes } from './development/notes';
import { aptitudeNotes } from './aptitude/notes';

// FIX: Added 'export' so other files can import this object
export const subjects = {
  development: {
    id: 'development',
    title: 'Development',
    description: 'Master web development, from frontend to backend.',
    chapters: developmentChapters,
    notes: developmentNotes,
    practiceProblems: developmentPracticeProblems,
    quizzes: developmentQuizzes,
    practiceChapters: developmentPracticeChapters,
    quizChapters: developmentQuizChapters,
  },
  dsa: {
    id: 'dsa',
    title: 'DSA',
    description: 'Strengthen your data structures and algorithm skills.',
    chapters: dsaChapters,
    notes: dsaNotes,
    practiceProblems: dsaPracticeProblems,
    quizzes: dsaQuizzes,
    practiceChapters: dsaPracticeChapters,
    quizChapters: dsaQuizChapters,
  },
  aptitude: {
    id: 'aptitude',
    title: 'Aptitude',
    description: 'Sharpen your quantitative and logical reasoning.',
    chapters: aptitudeChapters,
    notes: aptitudeNotes,
    practiceProblems: aptitudePracticeProblems,
    quizzes: aptitudeQuizzes,
    practiceChapters: aptitudePracticeChapters,
    quizChapters: aptitudeQuizChapters,
  },
};

export const getSubjectBySlug = (slug: string) => {
  return subjects[slug as keyof typeof subjects];
};

export const allSubjects = Object.values(subjects);