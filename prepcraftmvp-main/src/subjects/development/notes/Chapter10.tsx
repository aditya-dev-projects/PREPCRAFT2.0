import React from 'react';
import Chapter10Part1 from './Chapter10Part1';
import Chapter10Part2 from './Chapter10Part2';

const Chapter10 = ({ noteId }: { noteId: string }) => {
  const part1 = Chapter10Part1({ noteId });
  if (part1) return part1;

  const part2 = Chapter10Part2({ noteId });
  if (part2) return part2;

  return <div>Select a subchapter</div>;
};

export default Chapter10;