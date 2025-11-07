
import React from 'react';
import Chapter6Part1 from './Chapter6Part1';
import Chapter6Part2 from './Chapter6Part2';

const Chapter6 = ({ noteId }: { noteId: string }) => {
  const part1 = Chapter6Part1({ noteId });
  if (part1) return part1;

  const part2 = Chapter6Part2({ noteId });
  if (part2) return part2;

  return <div>Select a subchapter</div>;
};

export default Chapter6;
