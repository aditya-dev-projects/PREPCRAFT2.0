import PracticeProblemDisplay from '../../../components/PracticeProblemDisplay';
import { chapters } from '../chapters';

export const developmentPracticeProblems = chapters.flatMap(chapter =>
  chapter.subchapters.map(subchapter => ({
    component: PracticeProblemDisplay,
    meta: {
      id: `${subchapter.id}-practice`,
      title: `${subchapter.title} Practice Problems`,
      subchapterId: subchapter.id, // Pass subchapter.id to PracticeProblemDisplay
    },
  }))
);
