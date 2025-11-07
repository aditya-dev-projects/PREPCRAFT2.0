import React from 'react';
import { Code } from 'lucide-react'; // Assuming Code icon is appropriate for development

const ComingSoon = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900 text-center">
      <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-4">Coming Soon!</h1>
      <p className="text-lg text-gray-700">This content is currently under development. Please check back later!</p>
    </div>
  );
};

export default ComingSoon;
