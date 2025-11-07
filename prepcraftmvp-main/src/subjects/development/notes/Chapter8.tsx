
import React from 'react';
import Chapter8Part1 from './Chapter8Part1';
import Chapter8Part2 from './Chapter8Part2';

const Chapter8 = ({ noteId }: { noteId: string }) => {
  const part1 = Chapter8Part1({ noteId });
  if (part1) return part1;

  const part2 = Chapter8Part2({ noteId });
  if (part2) return part2;

  return <div>Select a subchapter</div>;
};

export default Chapter8;
