import React from 'react';

const Counting: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">Chapter 3.5: Counting</h1>
      <p className="mb-4">
        Counting Sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.
      </p>
    </div>
  );
};

export default Counting;
