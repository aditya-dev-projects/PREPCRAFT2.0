import QuizDisplay from '../../../components/QuizDisplay';
import { quizChapters } from '../quizChapters'; // <-- FIX: Changed from 'chapters'

export const developmentQuizzes = quizChapters.flatMap(chapter => // <-- FIX
  chapter.subchapters.map(subchapter => ({
    component: QuizDisplay,
    meta: {
      id: subchapter.quizId, // <-- FIX: Use quizId
      title: `${subchapter.title} Quiz`,
      subchapterId: subchapter.quizId, // <-- FIX: Pass quizId
    },
  }))
);