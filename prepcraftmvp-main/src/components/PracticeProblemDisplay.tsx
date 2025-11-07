import React from 'react';
import { developmentPracticeProblems } from '../subjects/development/developmentPracticeProblems';

interface PracticeProblemDisplayProps {
  subchapterId: string;
}

const PracticeProblemDisplay: React.FC<PracticeProblemDisplayProps> = ({ subchapterId }) => {
  const problems = developmentPracticeProblems[subchapterId];

  if (!problems || problems.length === 0) {
    return <div className="p-4 text-gray-600">No practice problems available for this subchapter yet.</div>;
  }

  return (
    <div className="p-8 font-sans max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Practice Problems: {subchapterId.replace(/-/g, ' ').toUpperCase()}</h3>
      {problems.map((problem, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
          <p className="font-semibold text-lg mb-2">{index + 1}. {problem.problem}</p>
          <div className="mt-3 p-3 bg-gray-50 rounded-md">
            <p className="font-medium text-gray-800">Solution:</p>
            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: problem.solution }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticeProblemDisplay;
