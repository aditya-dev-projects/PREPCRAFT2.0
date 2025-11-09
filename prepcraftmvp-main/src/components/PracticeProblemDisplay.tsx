import React from 'react';
import { Chapter1Problem } from '../subjects/development/practice-problems/Chapter1Problem';
import { Chapter2Problem } from '../subjects/development/practice-problems/Chapter2Problem';
import { Chapter3Problem } from '../subjects/development/practice-problems/Chapter3Problem';
import { Chapter4Problem } from '../subjects/development/practice-problems/Chapter4Problem';
import { Chapter5Problem } from '../subjects/development/practice-problems/Chapter5Problem';
import { Chapter6Problem } from '../subjects/development/practice-problems/Chapter6Problem';
import { Chapter7Problem } from '../subjects/development/practice-problems/Chapter7Problem';
import { Chapter8Problem } from '../subjects/development/practice-problems/Chapter8Problem';
import { Chapter9Problem } from '../subjects/development/practice-problems/Chapter9Problem';
import { Chapter10Problem } from '../subjects/development/practice-problems/Chapter10Problem';

// Merge all problem objects into one
const allDevelopmentProblems = {
  ...Chapter1Problem,
  ...Chapter2Problem,
  ...Chapter3Problem,
  ...Chapter4Problem,
  ...Chapter5Problem,
  ...Chapter6Problem,
  ...Chapter7Problem,
  ...Chapter8Problem,
  ...Chapter9Problem,
  ...Chapter10Problem,
};

// --- Types ---
interface PracticeProblem {
  title: string;
  problem: string;
  solution: string;
}

interface PracticeProblemDisplayProps {
  subchapterId: string;
}

const getProblemData = (id: string): PracticeProblem[] | undefined => {
  return (allDevelopmentProblems as unknown as Record<string, PracticeProblem[]>)[id];
};

const PracticeProblemDisplay: React.FC<PracticeProblemDisplayProps> = ({ subchapterId }) => {
  const problems = getProblemData(subchapterId);

  const title = subchapterId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  if (!problems || problems.length === 0) {
    return <div className="p-4 text-muted-foreground">No practice problems available for this subchapter yet.</div>;
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6">Practice: {title}</h1>
      {problems.map((problem, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm bg-background">
          <h2 className="text-2xl font-semibold mt-4 mb-2">{index + 1}. {problem.title}</h2>
          <p className="text-lg text-muted-foreground">{problem.problem}</p>
          <h3 className="text-xl font-semibold mt-4">Solution:</h3>
          <pre className="bg-muted p-4 rounded-md">
            <code>{problem.solution}</code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default PracticeProblemDisplay;