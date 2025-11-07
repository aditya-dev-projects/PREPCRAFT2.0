
import React from 'react';
import Chapter9Part1 from './Chapter9Part1';
import Chapter9Part2 from './Chapter9Part2';

const Chapter9 = ({ noteId }: { noteId: string }) => {
  const part1 = Chapter9Part1({ noteId });
  if (part1) return part1;

  const part2 = Chapter9Part2({ noteId });
  if (part2) return part2;

  return <div>Select a subchapter</div>;
};

export default Chapter9;
