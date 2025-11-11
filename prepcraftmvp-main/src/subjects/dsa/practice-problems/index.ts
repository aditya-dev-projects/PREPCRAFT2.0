import DSAPracticeProblemDisplay from '@/components/DSAPracticeProblemDisplay';
// Import the correct variable name 'practiceChapters'
import { practiceChapters } from '../practiceChapters';

// Use the correct variable name 'practiceChapters'
export const dsaPracticeProblems = practiceChapters.flatMap(chapter =>
  chapter.subchapters.map(subchapter => ({
    component: DSAPracticeProblemDisplay,
    meta: {
      // FIX: Use 'subchapter.problemId' as defined in your 'practiceChapters.ts'
      id: subchapter.problemId,
      title: `${subchapter.title} Practice`,
      // FIX: Pass 'subchapter.problemId' to the component
      subchapterId: subchapter.problemId,
    },
  }))
);