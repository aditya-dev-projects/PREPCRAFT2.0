
import { VerbalAbilityQuiz, verbalAbilityQuizMeta } from './VerbalAbilityQuiz';

import { LogicalReasoningQuiz, logicalReasoningQuizMeta } from './LogicalReasoningQuiz';

import { QuantitativeAptitudeQuiz, quantitativeAptitudeQuizMeta } from './QuantitativeAptitudeQuiz';

export const aptitudeQuizzes = [
  { component: VerbalAbilityQuiz, meta: verbalAbilityQuizMeta },
  { component: LogicalReasoningQuiz, meta: logicalReasoningQuizMeta },
  { component: QuantitativeAptitudeQuiz, meta: quantitativeAptitudeQuizMeta },
];
