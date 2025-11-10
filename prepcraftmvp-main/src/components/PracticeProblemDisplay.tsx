import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from '@/components/ui/button';
import { Copy, Check, Terminal, Lightbulb } from 'lucide-react';

// Import all problem data files
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

// --- New Data Structure Interface ---
interface PracticeProblem {
  title: string;
  problemDescription: string;
  setupSteps: string[];
  solutionSteps: string[];
  solutionCode: string;
}

interface PracticeProblemDisplayProps {
  subchapterId: string;
}

// Helper to get the correct data
const getProblemData = (id: string): PracticeProblem[] | undefined => {
  return (allDevelopmentProblems as unknown as Record<string, PracticeProblem[]>)[id];
};

// --- Reusable Copy Button Component ---
const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-2 right-2 h-7 w-7"
      onClick={handleCopy}
      aria-label="Copy code block"
    >
      {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
};

// --- Main Display Component ---
const PracticeProblemDisplay: React.FC<PracticeProblemDisplayProps> = ({ subchapterId }) => {
  const problems = getProblemData(subchapterId);

  const title = subchapterId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  if (!problems || problems.length === 0) {
    return <div className="p-4 text-muted-foreground">No practice problems available for this subchapter yet.</div>;
  }

  // Helper to render text with newlines
  const renderWithNewlines = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6">Practice: {title}</h1>
      
      {problems.map((problem, index) => (
        <div key={index} className="mb-12 p-4 border rounded-lg shadow-sm bg-background not-prose">
          
          {/* Problem Title */}
          <h2 className="text-2xl font-semibold mt-4 mb-4 text-primary">{index + 1}. {problem.title}</h2>
          
          {/* Problem Description with Copy Button */}
          <h3 className="text-lg font-semibold mb-2">Problem:</h3>
          <div className="relative p-4 bg-muted rounded-md mb-4">
            <CopyButton text={problem.problemDescription} />
            <p className="text-foreground whitespace-pre-wrap">{problem.problemDescription}</p>
          </div>

          {/* Setup Steps */}
          <Alert className="mb-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>How to Get Started</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {problem.setupSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
          
          {/* Collapsible Solution */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                  Show Solution
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                
                <h4 className="text-md font-semibold mb-2">Step-by-step solution:</h4>
                <ul className="list-decimal pl-5 space-y-2 mb-4 text-muted-foreground">
                  {problem.solutionSteps.map((step, i) => (
                    <li key={i}>{renderWithNewlines(step)}</li>
                  ))}
                </ul>

                <h4 className="text-md font-semibold mb-2">Final Code:</h4>
                <p className="text-sm text-muted-foreground mb-2">Run this below given code and check if you get the same result.</p>
                <div className="relative">
                  <CopyButton text={problem.solutionCode} />
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{problem.solutionCode.trim()}</code>
                  </pre>
                </div>

              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      ))}
    </div>
  );
};

export default PracticeProblemDisplay;