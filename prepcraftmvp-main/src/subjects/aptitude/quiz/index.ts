import QuizDisplay from '@/components/QuizDisplay';
import { quizChapters } from '../quizChapters';

export const aptitudeQuizzes = quizChapters.flatMap(chapter =>
  chapter.subchapters.map(subchapter => ({
    component: QuizDisplay,
    meta: {
      id: subchapter.quizId,
      title: `${subchapter.title} Quiz`,
      subchapterId: subchapter.quizId,
    },
  }))
);