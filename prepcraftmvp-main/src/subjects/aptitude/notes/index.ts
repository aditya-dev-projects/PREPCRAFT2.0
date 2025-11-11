import Chapter1Part1 from './Chapter1Part1';
import Chapter1Part2 from './Chapter1Part2';
import Chapter1Part3 from './Chapter1Part3';
import Chapter2Part1 from './Chapter2Part1';
import Chapter2Part2 from './Chapter2Part2';
import Chapter2Part3 from './Chapter2Part3';
import Chapter3 from './Chapter3';

export const aptitudeNotes = [
  // Chapter 1: Quantitative Aptitude
  { component: Chapter1Part1, meta: { id: 'number-system' } },
  { component: Chapter1Part1, meta: { id: 'lcm-hcf' } },
  { component: Chapter1Part1, meta: { id: 'percentages' } },
  { component: Chapter1Part1, meta: { id: 'profit-loss' } },
  { component: Chapter1Part1, meta: { id: 'simple-compound-interest' } },
  { component: Chapter1Part1, meta: { id: 'ratio-proportion' } },
  
  { component: Chapter1Part2, meta: { id: 'pipes-cisterns' } },
  { component: Chapter1Part2, meta: { id: 'time-work' } },
  { component: Chapter1Part2, meta: { id: 'average' } },
  { component: Chapter1Part2, meta: { id: 'permutations-combinations' } },
  { component: Chapter1Part2, meta: { id: 'probability' } },
  { component: Chapter1Part2, meta: { id: 'age-problems' } },

  { component: Chapter1Part3, meta: { id: 'partnerships' } },
  { component: Chapter1Part3, meta: { id: 'allegations-mixtures' } },
  { component: Chapter1Part3, meta: { id: 'chain-rule' } },
  { component: Chapter1Part3, meta: { id: 'train-problems' } },
  { component: Chapter1Part3, meta: { id: 'boats-streams' } },
  { component: Chapter1Part3, meta: { id: 'data-interpretation' } },

  // Chapter 2: Logical Reasoning
  { component: Chapter2Part1, meta: { id: 'number-series' } },
  { component: Chapter2Part1, meta: { id: 'seating-arrangements' } },
  { component: Chapter2Part1, meta: { id: 'clock-problems' } },
  { component: Chapter2Part1, meta: { id: 'calendar' } },
  { component: Chapter2Part1, meta: { id: 'blood-relations' } },
  { component: Chapter2Part1, meta: { id: 'directions' } },

  { component: Chapter2Part2, meta: { id: 'word-pattern' } },
  { component: Chapter2Part2, meta: { id: 'coding-decoding' } },
  { component: Chapter2Part2, meta: { id: 'mathematical-operations' } },
  { component: Chapter2Part2, meta: { id: 'venn-diagrams' } },
  { component: Chapter2Part2, meta: { id: 'visual-reasoning' } },
  { component: Chapter2Part2, meta: { id: 'paper-cutting-adding' } },

  { component: Chapter2Part3, meta: { id: 'cubes-dices' } },
  { component: Chapter2Part3, meta: { id: 'data-sufficiency' } },
  
  // Chapter 3: Verbal Ability
  { component: Chapter3, meta: { id: 'reading-comprehension' } },
  { component: Chapter3, meta: { id: 'spotting-errors' } },
  { component: Chapter3, meta: { id: 'sentence-formation' } },
  { component: Chapter3, meta: { id: 'synonyms-antonyms' } },
  { component: Chapter3, meta: { id: 'idioms-phrases' } },
];