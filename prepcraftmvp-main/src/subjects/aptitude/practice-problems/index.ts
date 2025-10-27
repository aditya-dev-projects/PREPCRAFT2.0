
import { VerbalAbilityProblems, verbalAbilityProblemsMeta } from './VerbalAbilityProblems';

import { LogicalReasoningProblems, logicalReasoningProblemsMeta } from './LogicalReasoningProblems';

import { QuantitativeAptitudeProblems, quantitativeAptitudeProblemsMeta } from './QuantitativeAptitudeProblems';

export const aptitudePracticeProblems = [
  { component: VerbalAbilityProblems, meta: verbalAbilityProblemsMeta },
  { component: LogicalReasoningProblems, meta: logicalReasoningProblemsMeta },
  { component: QuantitativeAptitudeProblems, meta: quantitativeAptitudeProblemsMeta },
];
