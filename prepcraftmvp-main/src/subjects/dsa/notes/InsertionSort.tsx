import React from 'react';

const InsertionSort: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">Chapter 3.4: Insertion Sort</h1>
      <p className="mb-4">
        Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
      </p>
    </div>
  );
};

export default InsertionSort;
