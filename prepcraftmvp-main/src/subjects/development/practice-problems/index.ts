import PracticeProblemDisplay from '../../../components/PracticeProblemDisplay';
// FIX: Import from 'practiceChapters' instead of 'chapters'
import { practiceChapters } from '../practiceChapters';

// FIX: Map over 'practiceChapters'
export const developmentPracticeProblems = practiceChapters.flatMap(chapter =>
  chapter.subchapters.map(subchapter => ({
    component: PracticeProblemDisplay,
    meta: {
      // FIX: Use 'subchapter.practiceProblemId' as shown in your error
      id: subchapter.practiceProblemId,
      title: `${subchapter.title} Practice Problems`,
      // FIX: Pass 'subchapter.practiceProblemId' to the display component
      subchapterId: subchapter.practiceProblemId, 
    },
  }))
);