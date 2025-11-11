import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Link2 } from 'lucide-react';

// Import all DSA problem data files
import { Chapter1Problem } from '../subjects/dsa/practice-problems/Chapter1Problem';
import { Chapter2Problem } from '../subjects/dsa/practice-problems/Chapter2Problem';
import { Chapter3Problem } from '../subjects/dsa/practice-problems/Chapter3Problem';
import { Chapter4Problem } from '../subjects/dsa/practice-problems/Chapter4Problem';
import { Chapter5Problem } from '../subjects/dsa/practice-problems/Chapter5Problem';
import { Chapter6Problem } from '../subjects/dsa/practice-problems/Chapter6Problem';
import { Chapter7Problem } from '../subjects/dsa/practice-problems/Chapter7Problem';
import { Chapter8Problem } from '../subjects/dsa/practice-problems/Chapter8Problem';
import { Chapter9Problem } from '../subjects/dsa/practice-problems/Chapter9Problem';

// Merge all DSA problem objects into one
const allDSProblems = {
  ...Chapter1Problem,
  ...Chapter2Problem,
  ...Chapter3Problem,
  ...Chapter4Problem,
  ...Chapter5Problem,
  ...Chapter6Problem,
  ...Chapter7Problem,
  ...Chapter8Problem,
  ...Chapter9Problem,
};

// --- New Data Structure Interface ---
interface PracticeProblem {
  title: string;
  problemDescription: string;
  hackerRankLink?: string; // Optional link
  leetCodeLink?: string;   // Optional link
}

interface DSAPracticeProblemDisplayProps {
  subchapterId?: string;
}

// Helper to get the correct data
const getProblemData = (id: string): PracticeProblem[] | undefined => {
  return (allDSProblems as unknown as Record<string, PracticeProblem[]>)[id];
};

// --- Main Display Component ---
const DSAPracticeProblemDisplay: React.FC<DSAPracticeProblemDisplayProps> = ({ subchapterId }) => {
  if (!subchapterId) {
    return <div className="p-4 text-red-500">Error: No subchapterId provided.</div>;
  }

  const problems = getProblemData(subchapterId);

  const title = subchapterId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace('Problem', ''); // Clean up title

  if (!problems || problems.length === 0) {
    return <div className="p-4 text-muted-foreground">No practice problems available for this subchapter yet.</div>;
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6">Practice: {title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
        {problems.map((problem, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{problem.title}</CardTitle>
              <CardDescription>{problem.problemDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* You can add more details here if needed */}
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              {problem.hackerRankLink && (
                <Button asChild className="w-full">
                  <a href={problem.hackerRankLink} target="_blank" rel="noopener noreferrer">
                    <Link2 className="h-4 w-4 mr-2" />
                    Solve on HackerRank
                  </a>
                </Button>
              )}
              {problem.leetCodeLink && (
                <Button asChild variant="secondary" className="w-full">
                  <a href={problem.leetCodeLink} target="_blank" rel="noopener noreferrer">
                    <Link2 className="h-4 w-4 mr-2" />
                    Solve on LeetCode
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DSAPracticeProblemDisplay;