import React from 'react';

const Strings: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">Chapter 2.3: Strings</h1>
      <p className="mb-4">
        A string is a sequence of characters. In many programming languages, strings are implemented as arrays of characters.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
      <ul className="list-disc list-inside mb-4">
        <li>String Declaration and Initialization</li>
        <li>Common String Operations (Concatenation, Substring, Length)</li>
        <li>String Manipulation</li>
        <li>String Searching Algorithms</li>
      </ul>
    </div>
  );
};

export default Strings;
