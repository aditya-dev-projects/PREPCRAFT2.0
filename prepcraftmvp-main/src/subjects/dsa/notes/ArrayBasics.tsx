import React from 'react';

const ArrayBasics: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">Chapter 2.1: Array Basics</h1>
      <p className="mb-4">
        An array is a data structure that stores a collection of elements of the same type in contiguous memory locations.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Declaration and Initialization</li>
        <li>Accessing Elements</li>
        <li>Iterating through an Array</li>
        <li>Common Array Operations (Insertion, Deletion, Search)</li>
      </ul>
    </div>
  );
};

export default ArrayBasics;
