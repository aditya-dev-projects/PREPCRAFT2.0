// import AptitudePracticeProblemDisplay from '@/components/AptitudePracticeProblemDisplay';
import { practiceChapters } from '../practiceChapters';

export const aptitudePracticeProblems = practiceChapters.flatMap(chapter =>
  chapter.subchapters.map(subchapter => ({
    // component: AptitudePracticeProblemDisplay, 
    meta: {
      id: subchapter.id,
      title: `${subchapter.title} Practice`,
      subchapterId: subchapter.id, // Pass id as subchapterId
    },
  }))
);