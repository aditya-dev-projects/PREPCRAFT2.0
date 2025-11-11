import React, { useState } from 'react';

// --- Reusable Helper Components (Add these) ---

const CodeBlock = ({ code, language = 'javascript' }: { code: string, language?: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = code.trim();
      textArea.style.position = 'absolute';
      textArea.style.left = '-9999px';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      navigator.clipboard.writeText(code.trim()).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }).catch(navErr => {
        console.error('Clipboard API also failed: ', navErr);
      });
    }
  };

  return (
    <div className="relative my-4">
      <pre className={`bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm language-${language}`}>
        <code>{code.trim()}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-1 px-2 rounded-md transition-all duration-200"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-gray-200 text-red-700 font-mono px-1.5 py-0.5 rounded-md text-sm">
    {children}
  </code>
);

// --- Main Chapter 1 Component ---

const Chapter1Part1 = ({ noteId }: { noteId: string }) => {
  
  switch (noteId) {
    case 'number-system':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Number System</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Ruler</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>
              Think of the number system as an infinite ruler.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Natural Numbers:</strong> The counting marks (1, 2, 3...).</li>
              <li><strong>Whole Numbers:</strong> Add a zero (0, 1, 2...).</li>
              <li><strong>Integers:</strong> Include the negative side (...-1, 0, 1...).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Key Concept: Prime Numbers</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>
              A prime number is a number greater than 1 that only has two
              divisors: 1 and itself.
            </p>
            <CodeBlock code={`// 2, 3, 5, 7, 11, 13...`} language="javascript" />
          </div>
        </div>
      );
      
    case 'lcm-hcf':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">LCM & HCF</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Detailed notes for LCM & HCF go here.
            </p>
          </div>
        </div>
      );

    case 'percentages':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Percentages</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Detailed notes for this section are coming soon. Stay tuned!
            </p>
          </div>
        </div>
      );
      
    case 'profit-loss':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Profit & Loss</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Detailed notes for this section are coming soon. Stay tuned!
            </p>
          </div>
        </div>
      );
      
    case 'simple-compound-interest':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Simple & Compound Interest</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Detailed notes for this section are coming soon. Stay tuned!
            </p>
          </div>
        </div>
      );
      
    case 'ratio-proportion':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Ratio & Proportion</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Detailed notes for this section are coming soon. Stay tuned!
            </p>
          </div>
        </div>
      );
      
    default:
      // This is the default case if no noteId matches
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Quantitative Aptitude Part 1</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Please select a topic from the sidebar.
            </p>
          </div>
        </div>
      );
  }
};
export default Chapter1Part1;