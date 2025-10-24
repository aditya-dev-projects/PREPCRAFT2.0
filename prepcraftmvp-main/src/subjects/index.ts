import { Brain, Code2, Rocket, BookOpen } from 'lucide-react';
import { dsaNotes } from './dsa/notes';
import { dsaPracticeProblems } from './dsa/practice-problems';
import { dsaQuizzes } from './dsa/quiz';
import { chapters as dsaChapters } from './dsa/chapters';
import { practiceChapters as dsaPracticeChapters } from './dsa/practiceChapters';
import { quizChapters as dsaQuizChapters } from './dsa/quizChapters';
import { developmentNotes } from './development/notes';
import { developmentPracticeProblems } from './development/practice-problems';
import { developmentQuizzes } from './development/quiz';
import { chapters as developmentChapters } from './development/chapters';
import { practiceChapters as developmentPracticeChapters } from './development/practiceChapters';
import { quizChapters as developmentQuizChapters } from './development/quizChapters';

export interface SubjectConfig {
  slug: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  notes: any[];
  practiceProblems: any[];
  quizzes: any[];
  chapters: any[];
  practiceChapters: any[];
  quizChapters: any[];
}

export const subjects: SubjectConfig[] = [
  {
    slug: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master fundamental data structures and algorithmic problem-solving techniques',
    icon: Brain,
    color: 'hsl(var(--primary))',
    notes: dsaNotes,
    practiceProblems: dsaPracticeProblems,
    quizzes: dsaQuizzes,
    chapters: dsaChapters,
    practiceChapters: dsaPracticeChapters,
    quizChapters: dsaQuizChapters,
  },
  {
    slug: 'aptitude',
    title: 'Aptitude',
    description: 'Enhance logical reasoning, quantitative abilities, and analytical skills',
    icon: Code2,
    color: 'hsl(var(--accent))',
    notes: [],
    practiceProblems: [],
    quizzes: [],
    chapters: [],
    practiceChapters: [],
    quizChapters: [],
  },
  {
    slug: 'development',
    title: 'Development',
    description: 'Learn modern web development, frameworks, and best practices',
    icon: Rocket,
    color: 'hsl(var(--success))',
    notes: developmentNotes,
    practiceProblems: developmentPracticeProblems,
    quizzes: developmentQuizzes,
    chapters: developmentChapters,
    practiceChapters: developmentPracticeChapters,
    quizChapters: developmentQuizChapters,
  },
  {
    slug: 'cs-fundamentals',
    title: 'CS Fundamentals',
    description: 'Core computer science concepts including OS, DBMS, Networks, and more',
    icon: BookOpen,
    color: 'hsl(var(--chart-4))',
    notes: [],
    practiceProblems: [],
    quizzes: [],
    chapters: [],
    practiceChapters: [],
    quizChapters: [],
  },
];

export const getSubjectBySlug = (slug: string) => {
  return subjects.find(s => s.slug === slug);
};
