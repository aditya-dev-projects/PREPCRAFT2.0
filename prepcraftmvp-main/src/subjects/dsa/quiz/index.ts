import QuizDisplay from '@/components/QuizDisplay';
import { dsaQuizChapters } from '../quizChapters';

export const dsaQuizzes = dsaQuizChapters.flatMap(chapter =>
  chapter.subchapters.map(subchapter => ({
    component: QuizDisplay,
    meta: {
      id: subchapter.quizId,
      title: `${subchapter.title} Quiz`,
      subchapterId: subchapter.quizId,
    },
  }))
);