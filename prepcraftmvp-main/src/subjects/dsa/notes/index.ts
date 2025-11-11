import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Chapter9 from './Chapter9';

export const dsaNotes = [
  // --- Chapter 1: Basics Of Programming ---
  { component: Chapter1, meta: { id: 'variables-data-types' } },
  { component: Chapter1, meta: { id: 'conditional-statements' } },
  { component: Chapter1, meta: { id: 'operators' } },
  { component: Chapter1, meta: { id: 'loops' } },
  { component: Chapter1, meta: { id: 'functions' } },

  // --- Chapter 2: Arrays ---
  { component: Chapter2, meta: { id: 'array-basics' } },
  { component: Chapter2, meta: { id: '2d-arrays' } },
  { component: Chapter2, meta: { id: 'strings' } },

  // --- Chapter 3: Sorting Techniques ---
  { component: Chapter3, meta: { id: 'what-is-sorting' } },
  { component: Chapter3, meta: { id: 'bubble-sort' } },
  { component: Chapter3, meta: { id: 'selection-sort' } },
  { component: Chapter3, meta: { id: 'insertion-sort' } },
  { component: Chapter3, meta: { id: 'counting' } },

  // --- Chapter 4: Problem Solving Techniques ---
  { component: Chapter4, meta: { id: 'recursion' } },
  { component: Chapter4, meta: { id: 'backtracking' } },
  { component: Chapter4, meta: { id: 'divide-and-conqueror' } },
  { component: Chapter4, meta: { id: 'bit-manipulation' } },
  { component: Chapter4, meta: { id: 'time-and-space-complexity' } },
  { component: Chapter4, meta: { id: 'greedy-algorithim' } },

  // --- Chapter 5: Object Oriented Programming ---
  { component: Chapter5, meta: { id: 'basic-of-oops' } },
  { component: Chapter5, meta: { id: 'advanced-oops' } },

  // --- Chapter 6: Linear Data Structures ---
  { component: Chapter6, meta: { id: 'array-lists' } },
  { component: Chapter6, meta: { id: 'linked-lists' } },
  { component: Chapter6, meta: { id: 'stacks' } },
  { component: Chapter6, meta: { id: 'queues' } },

  // --- Chapter 7: Trees ---
  { component: Chapter7, meta: { id: 'binary-trees' } },
  { component: Chapter7, meta: { id: 'binary-search-trees' } },

  // --- Chapter 8: Advanced Data Structures ---
  { component: Chapter8, meta: { id: 'heaps-priority-queues' } },
  { component: Chapter8, meta: { id: 'hashing-maps-sets' } },
  { component: Chapter8, meta: { id: 'tries' } },
  { component: Chapter8, meta: { id: 'graphs' } },
  { component: Chapter8, meta: { id: 'segment-trees' } },

  // --- Chapter 9: Dynamic Programming ---
  { component: Chapter9, meta: { id: 'basic-dp' } },
  { component: Chapter9, meta: { id: 'advance-dp' } },
];