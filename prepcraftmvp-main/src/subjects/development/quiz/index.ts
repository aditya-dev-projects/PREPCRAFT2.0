import QuizDisplay from '../../../components/QuizDisplay';
import { chapters } from '../chapters';

export const developmentQuizzes = chapters.flatMap(chapter =>
  chapter.subchapters.map(subchapter => ({
    component: QuizDisplay,
    meta: {
      id: `${subchapter.id}-quiz`,
      title: `${subchapter.title} Quiz`,
      subchapterId: subchapter.id, // Pass subchapter.id to QuizDisplay
    },
  }))
);
