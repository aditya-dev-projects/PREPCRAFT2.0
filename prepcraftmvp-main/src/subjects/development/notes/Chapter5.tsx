import React, { useState } from 'react';

// --- Reusable Helper Components (Light Theme) ---

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

// --- Main Chapter 5 Component ---

const Chapter5 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'introduction-to-css-frameworks':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">5.1: Introduction to CSS Frameworks</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: A "Starter Kit" for Your House</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>
              Think of building a house. You could go to the forest, chop down trees, and make your own lumber (writing CSS from scratch).
            </p>
            <p>
              Or, you could go to a hardware store and buy a <strong>pre-fabricated "starter kit"</strong> that includes pre-cut lumber, standard-sized doors, and windows (using a CSS Framework).
            </p>
            <p>
              A framework gives you all the common, reusable parts, allowing you to focus on the unique aspects of your design.
            </p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>
              A <strong>CSS Framework</strong> is a pre-written library of CSS code that provides a foundational structure, including a layout grid, pre-styled components, and consistent design patterns.
            </p>
            <p><strong>Benefits:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Speed:</strong> Build a fully responsive, professional-looking layout in minutes, not days.</li>
              <li><strong>Responsiveness:</strong> Built with a "mobile-first" approach and a powerful grid system.</li>
              <li><strong>Consistency:</strong> Provides a consistent design system (e.g., all `.btn-primary` classes look the same).</li>
              <li><strong>Browser Compatibility:</strong> The framework code is already tested across all modern browsers, saving you from fixing cross-browser bugs.</li>
            </ul>
            <p><strong>Two Main Philosophies:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Component-Based (e.g., Bootstrap):</strong> Provides pre-built, fully styled components like <Code>.card</Code>, <Code>.navbar</Code>, and <Code>.btn</Code>. You assemble these components.</li>
              <li><strong>Utility-First (e.g., Tailwind CSS):</strong> Provides low-level "utility" classes (e.g., <Code>p-4</Code>, <Code>flex</Code>, <Code>text-center</Code>). You build custom designs by composing these utilities in your HTML.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Component-Based vs. Utility-First</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Here is how you would build the same simple card in both Bootstrap and Tailwind.</p>
            <p className="font-semibold mt-2">1. Bootstrap (Component-Based)</p>
            <CodeBlock code={`
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <a href="#" class="btn btn-primary">Go</a>
  </div>
</div>
            `} language="html" />
            <p className="font-semibold mt-2">2. Tailwind CSS (Utility-First)</p>
            <CodeBlock code={`
<div class="max-w-sm p-6 bg-white rounded-lg shadow-md">
  <h5 class="text-2xl font-bold">Card Title</h5>
  <a href="#" class="bg-blue-500 text-white px-3 py-2 rounded">Go</a>
</div>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the "look-alike" problem?</strong>
                <p className="pl-4">This is a common criticism of component-based frameworks like Bootstrap. Because everyone is using the same `.btn-primary` and `.card`, many websites built with Bootstrap end up looking very similar. Utility-first frameworks like Tailwind avoid this problem entirely.</p>
              </li>
              <li>
                <strong>What's the difference between a CSS Framework (like Tailwind) and a React UI Library (like MUI)?</strong>
                <p className="pl-4">A <strong>CSS Framework</strong> gives you <em>CSS classes</em> to put on your <em>HTML elements</em>. A <strong>React UI Library</strong> gives you pre-built, fully functional *React components* (e.g., <Code>&lt;Button&gt;</Code>, <Code>&lt;Card&gt;</Code>) that you import and use in your React application. These components often have state and interactivity built-in.</p>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Next Steps</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            To test your knowledge, please visit the Quiz and Practice Problems sections for this topic.
          </div>
        </div>
      );
    case 'bootstrap-fundamentals':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">5.2: Bootstrap Fundamentals</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: A Pre-built Toolkit</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of Bootstrap as a comprehensive, pre-organized toolbox. Instead of building your own hammer and saw, you simply pick the "navbar" tool, the "card" tool, or the "button" tool from the box. Its most important tool is the <strong>Grid System</strong>, which is like a set of laser levels for building perfectly aligned, responsive layouts every time.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Bootstrap</strong> is a <strong>component-based</strong>, mobile-first CSS framework. It provides pre-styled components and a powerful 12-column responsive grid.</p>
            <p><strong>1. The Grid System (The Core):</strong><br/>
            All Bootstrap layouts are built with this. It's based on a <strong>12-column</strong> layout. You must use three classes together:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`.container`</strong>: A wrapper that centers and contains your grid.</li>
              <li><strong>`.row`</strong>: A wrapper for columns. This is a flex container.</li>
              <li><strong>`.col-*`</strong>: The columns. You specify how many of the 12 columns a <Code>&lt;div&gt;</Code> should span at different screen sizes.</li>
            </ul>
            <p><strong>2. Responsive Breakpoints:</strong><br/>
            You use prefixes to change the layout based on screen width:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><Code>col-</Code> (Mobile - Extra small <Code>{'<576px'}</Code>)</li>
              <li><Code>col-sm-</Code> (Small <Code>{'&ge;576px'}</Code>)</li>
              <li><Code>col-md-</Code> (Medium <Code>{'&ge;768px'}</Code>)</li>
              <li><Code>col-lg-</Code> (Large <Code>{'&ge;992px'}</Code>)</li>
            </ul>
            <p><strong>3. Spacing Utilities:</strong><br/>
            Bootstrap provides utility classes for spacing (`m` for margin, `p` for padding). <Code>mt-3</Code> means "margin-top size 3". <Code>px-5</Code> means "padding on the x-axis (left/right) size 5".</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Responsive Grid and Components</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This layout stacks on mobile (12 columns wide), becomes two 50% columns on tablets (`md-6`), and three 33.3% columns on desktops (`lg-4`).</p>
            <CodeBlock code={`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-5">
  <div class="row g-4">
    <!-- 
      col-12: On mobile, be 12 columns wide (full width)
      col-md-6: On medium screens (>=768px) and up, be 6 columns wide (50%)
      col-lg-4: On large screens (>=992px) and up, be 4 columns wide (33.3%)
    -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card 1</h5>
          <p class="card-text">Some text content.</p>
          <a href="#" class="btn btn-primary">Go</a>
        </div>
      </div>
    </div>
    
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card 2</h5>
          <p class="card-text">Some text content.</p>
          <a href="#" class="btn btn-success">Go</a>
        </div>
      </div>
    </div>
    
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card 3</h5>
          <p class="card-text">Some text content.</p>
          <a href="#" class="btn btn-danger">Go</a>
        </div>
      </div>
    </div>
    
  </div>
</div>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What does the <Code>col-md-6</Code> class actually mean?</strong>
                <p className="pl-4">It's a mobile-first instruction. It means "By default, be 12 columns wide (full width), but on 'medium' screens (768px) and <em>up</em>, be 6 columns wide (half width)."</p>
              </li>
              <li>
                <strong>How do I customize Bootstrap? I don't like the default blue color.</strong>
                <p className="pl-4">The <em>wrong</em> way is to write another CSS file that overrides `.btn-primary`. The <em>right</em> way is to use Sass (SCSS). You import Bootstrap's Sass files, change the <Code>$primary</Code> variable (e.g., <Code>$primary: #my-brand-color;</Code>), and then re-compile the CSS. This updates the color across <em>all</em> components (buttons, navbars, links) at once.</p>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Next Steps</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            To test your knowledge, please visit the Quiz and Practice Problems sections for this topic.
          </div>
        </div>
      );
    case 'tailwind-css-setup':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">5.3: Tailwind CSS Setup & Configuration</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Smart Compiler</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Tailwind is not just a CSS file; it's a <strong>build tool</strong>. Think of it as a "smart compiler." You write your HTML with hundreds of utility classes. Then, the Tailwind compiler "scans" all your files, finds <em>only</em> the classes you actually used, and generates a tiny, custom-built CSS file <em>just for you</em>.</p>
            <p>This <strong>Just-In-Time (JIT) engine</strong> is its most important feature. It means you get a massive library of tools without shipping a huge CSS file to your users.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A proper setup is <strong>required</strong> for Tailwind. You cannot just link to a CDN for a real project, as the file would be massive and un-optimized.</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Install Dependencies:</strong> You install Tailwind as a <strong>dev dependency</strong>.
                <br/><Code>npm install -D tailwindcss</Code>
              </li>
              <li><strong>Create Config File:</strong> You generate the config file.
                <br/><Code>npx tailwindcss init</Code> (This creates `tailwind.config.js`).
              </li>
              <li><strong>Configure Content Paths (CRITICAL):</strong> This is the most important step. You <strong>must</strong> tell Tailwind which files to scan. If your paths are wrong, your CSS file will be empty.
                <br/>In `tailwind.config.js`, update the `content` array:
                <br/><Code>{'content: ["./src/**/*.{html,js,jsx,tsx}"]'}</Code> (This scans all html/js/jsx/tsx files in the `src` folder).
              </li>
              <li><strong>Add Directives:</strong> You create one main CSS file (e.t., `src/input.css`) and add the three Tailwind directives. These are the injection points for Tailwind's code.
                <br/><Code>@tailwind base;</Code>
                <br/><Code>@tailwind components;</Code>
                <br/><Code>@tailwind utilities;</Code>
              </li>
              <li><strong>Run the Build Process:</strong> You run the Tailwind CLI to "watch" your files and generate the <em>real</em> CSS file.
                <br/><Code>npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch</Code>
              </li>
              <li><strong>Link in HTML:</strong> You link the *generated* file (`output.css`) in your HTML.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Complete Setup</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows the three key files involved in the setup.</p>
            
            <p className="font-semibold mt-2">1. `tailwind.config.js` (The Config)</p>
            <CodeBlock code={`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS/JSX/TSX files in src
    "./public/index.html"        // Scan the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1DA1F2', // You can add your own custom colors
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // You can add plugins
  ],
}
            `} language="javascript" />

            <p className="font-semibold mt-2">2. `src/input.css` (The Source)</p>
            <CodeBlock code={`
@tailwind base;
@tailwind components;
@tailwind utilities;

/* You can add your own custom, non-utility classes here */
@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-brand-blue text-white rounded;
  }
}
            `} language="css" />
            
            <p className="font-semibold mt-2">3. `public/index.html` (The Link)</p>
            <CodeBlock code={`
<!DOCTYPE html>
<html>
<head>
  <!-- Link to the COMPILED output file, NOT the input file -->
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body class="p-4">
  <h1 class="text-3xl font-bold text-brand-blue">Hello Tailwind!</h1>
  <button class="btn-primary">Click Me</button>
</body>
</html>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>My styles aren't showing up. What did I do wrong?</strong>
                <p className="pl-4">99% of the time, your `content` path in `tailwind.config.js` is wrong. Make sure it's <em>correctly</em> pointing to your template files. The second most common reason is you forgot to run the build process (`npx tailwindcss --watch`) in your terminal.</p>
              </li>
              <li>
                <strong>What's the best VS Code extension for Tailwind?</strong>
                <p className="pl-4"><strong>"Tailwind CSS IntelliSense"</strong> by the official Tailwind Labs team. It's essential. It auto-completes all class names, shows you the underlying CSS on hover, and highlights errors.</p>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Next Steps</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            To test your knowledge, please visit the Quiz and Practice Problems sections for this topic.
          </div>
        </div>
      );
    case 'tailwind-css-utility-classes':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">5.4: Tailwind CSS Utility Classes</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: LEGO Bricks</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Bootstrap is like buying a pre-built LEGO set (the "Police Car"). You get one component, and it's hard to change.</p>
            <p><strong>Tailwind</strong> is like getting a giant bin of individual LEGO bricks. You get hundreds of tiny, single-purpose pieces (<Code>p-4</Code>, <Code>bg-blue-500</Code>, <Code>flex</Code>, <Code>rounded-lg</Code>). You have complete freedom to <strong>compose</strong> these "utility" bricks to build any custom design you can imagine, not just the pre-built set.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Tailwind is a <strong>utility-first</strong> framework. This means its core classes are not "components" but "utilities." Each utility class maps to a <em>single</em> CSS property.</p>
            <p><strong>Common Utility Categories:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Spacing (Margin/Padding):</strong> Uses a numeric scale where `1` = `0.25rem`.
                <ul>
                  <li><Code>p-4</Code> (padding: 1rem), <Code>m-8</Code> (margin: 2rem)</li>
                  <li><Code>pt-2</Code> (padding-top), <Code>mb-6</Code> (margin-bottom)</li>
                  <li><Code>px-4</Code> (x-axis: padding-left & right), <Code>my-6</Code> (y-axis: margin-top & bottom)</li>
                </ul>
              </li>
              <li><strong>Sizing (Width/Height):</strong>
                <ul>
                  <li><Code>w-64</Code> (width: 16rem), <Code>w-1/2</Code> (width: 50%), <Code>w-full</Code> (width: 100%), <Code>w-screen</Code> (width: 100vw)</li>
                </ul>
              </li>
              <li><strong>Typography:</strong>
                <ul>
                  <li><Code>text-sm</Code>, <Code>text-base</Code>, <Code>text-lg</Code>, <Code>text-2xl</Code></li>
                  <li><Code>font-medium</Code>, <Code>font-bold</Code></li>
                  <li><Code>text-gray-900</Code>, <Code>text-red-500</Code></li>
                  <li><Code>text-center</Code>, <Code>text-left</Code></li>
                </ul>
              </li>
              <li><strong>Flexbox:</strong>
                <ul>
                  <li><Code>flex</Code> (display: flex), <Code>flex-col</Code> (flex-direction: column)</li>
                  <li><Code>justify-center</Code>, <Code>justify-between</Code></li>
                  <li><Code>items-center</Code>, <Code>items-start</Code></li>
                </ul>
              </li>
              <li><strong>Grid:</strong>
                <ul>
                  <li><Code>grid</Code>, <Code>grid-cols-3</Code> (grid-template-columns: 1fr 1fr 1fr), <Code>gap-4</Code> (gap: 1rem)</li>
                </ul>
              </li>
              <li><strong>Borders & Backgrounds:</strong>
                <ul>
                  <li><Code>bg-white</Code>, <Code>bg-blue-500</Code></li>
                  <li><Code>rounded-lg</Code>, <Code>rounded-full</Code></li>
                  <li><Code>border</Code>, <Code>border-2</Code>, <Code>border-red-500</Code></li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Building a Button from Utilities</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the "Tailwind way." You build a custom component by composing utilities directly in the HTML. Notice the <Code>hover:</Code> variant.</p>
            <CodeBlock code={`
<!-- 
  A custom button built with utilities:
  - p-3: padding of 0.75rem
  - px-6: x-padding of 1.5rem
  - bg-blue-600: blue background
  - text-white: white text
  - font-bold: bold text
  - rounded-lg: large border radius
  - shadow-md: medium box shadow
  - hover:bg-blue-700: on hover, change background
  - transition-colors: smooth color change
-->
<button 
  class="p-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
>
  Click Me
</button>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>This seems messy. Isn't a long list of classes in my HTML bad?</strong>
                <p className="pl-4">This is the most common concern. The answer is no, for three reasons: 1) You are co-locating your styles with your markup, so you don't have to hunt in a CSS file to see what a `div` does. 2) The classes are consistent, so `p-4` always means the same thing. 3) In a framework like React, you create a <Code>&lt;Button&gt;</Code> component, and this long class string only exists in *one file*, not repeated everywhere.</p>
              </li>
              <li>
                <strong>What if I need a value that's not in the theme, like <Code>margin-top: 13px</Code>?</strong>
                <p className="pl-4">You use <strong>arbitrary values</strong>. The JIT engine lets you generate classes on the fly using square brackets: <Code>mt-[13px]</Code>. This is extremely powerful and means you almost never have to write custom CSS.</p>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Next Steps</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            To test your knowledge, please visit the Quiz and Practice Problems sections for this topic.
          </div>
        </div>
      );
    case 'tailwind-css-responsive-design':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">5.5: Tailwind CSS Responsive Design</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Mobile-First by Default</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Tailwind's responsive system is "mobile-first." This means any class you write *without* a prefix (like <Code>p-4</Code>) applies to *all* screen sizes (mobile included).</p>
            <p>You then use <strong>breakpoint prefixes</strong> (like <Code>md:</Code>) to *add or change* styles on larger screens. A class like <Code>md:p-8</Code> doesn't mean "padding 8 on medium screens;" it means "on medium screens *and up*, set the padding to 8."</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Responsive design in Tailwind is not done in a separate CSS file with media queries. It's done directly in your HTML using <strong>breakpoint prefixes</strong>.</p>
            <p><strong>The Default Breakpoints:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>(no prefix): Mobile screens (base styles).</li>
              <li><strong>`sm:`</strong> (min-width: 640px) - For small tablets.</li>
              <li><strong>`md:`</strong> (min-width: 768px) - For tablets.</li>
              <li><strong>`lg:`</strong> (min-width: 1024px) - For laptops.</li>
              <li><strong>`xl:`</strong> (min-width: 1280px) - For large desktops.</li>
            </ul>
            <p>The syntax <Code>[breakpoint]:[utility-class]</Code> (e.g., <Code>lg:text-4xl</Code>) applies the utility <em>only</em> at that breakpoint and larger.</p>
            <p>You can also combine responsive prefixes with <strong>state variants</strong> (like <Code>hover:</Code>). The responsive prefix <em>always</em> comes first: <Code>md:hover:bg-blue-700</Code>.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Fully Responsive Card</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This card stacks vertically on mobile but becomes horizontal on medium screens (<Code>md:</Code>).</p>
            <CodeBlock code={`
<div 
  class="
    max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden 
    md:max-w-2xl
  "
>
  <div class="md:flex">
    <div class="md:shrink-0">
      <img 
        class="h-48 w-full object-cover md:h-full md:w-48" 
        src="https://placehold.co/600x400/3498db/ffffff?text=Image" 
        alt="A placeholder image"
      >
    </div>
    <div class="p-8">
      <div 
        class="
          uppercase tracking-wide text-sm 
          text-indigo-500 font-semibold
        "
      >
        Case Study
      </div>
      <a 
        href="#" 
        class="
          block mt-1 text-lg leading-tight font-medium 
          text-black hover:underline
        "
      >
        Building a responsive card with Tailwind
      </a>
      <p class="mt-2 text-gray-500">
        This card is vertical on mobile (default) but uses 'md:flex' 
        to become horizontal on screens 768px and wider.
      </p>
    </div>
  </div>
</div>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>How do I style for <em>only</em> mobile, or <em>only</em> tablets?</strong>
                <p className="pl-4">Tailwind is mobile-first, so styles *without* a prefix are mobile styles. To style <em>only</em> for tablets (e.g., `md`), you would apply a style at `md:` and then "undo" it at `lg:`. For example: <Code>w-1/2 md:w-1/3 lg:w-1/4</Code> (50% on mobile, 33% on tablet, 25% on desktop).</p>
              </li>
              <li>
                <strong>How do I change the default breakpoints?</strong>
                <p className="pl-4">You can easily customize them in your `tailwind.config.js` file by extending the `theme.screens` object. For example: <Code>screens: {'{'} 'tablet': '900px', ... {'}'}</Code>.</p>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Next Steps</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            To test your knowledge, please visit the Quiz and Practice Problems sections for this topic.
          </div>
        </div>
      );
    case 'tailwind-css-components':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">5.6: Tailwind CSS Components & Custom Styles</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Creating Your Own LEGO Kit</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>You love building with LEGOs (utilities), but you find yourself building the <em>exact same</em> small red car over and over. This is repetitive and hard to update. You have two choices:</p>
            <ol className="list-decimal ml-6 space-y-1">
              <li><strong><Code>@apply</Code> (The Glue):</strong> You can glue the bricks for one car together, call it <Code>.red-car</Code>, and now you have a reusable component. This is fast, but it's inflexible. It's "stuck" as a car.</li>
              <li><strong>React Component (The Instruction Booklet):</strong> You can create an <em>instruction booklet</em> called <Code>RedCar.tsx</Code>. This booklet <em>still uses all the original bricks</em>, but it defines the <em>pattern</em>. This is the best of both worlds: it's reusable, but you can still pass in <em>props</em> (like `color="blue"`) to change the bricks it uses.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>While utility-first is powerful, you <em>must</em> follow the <strong>DRY (Don't Repeat Yourself)</strong> principle. When you find yourself repeating long strings of utilities, you should abstract them.</p>
            <p><strong>Option 1: The <Code>@apply</Code> Directive (in CSS)</strong></p>
            <p>Tailwind lets you extract utilities into a custom class using <Code>@apply</Code>. You should place these in your main CSS file, wrapped in a <Code>@layer components</Code> directive so they can be purged correctly.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Pro:</strong> Cleans up your HTML.</li>
              <li><strong>Con:</strong> You are now writing custom CSS again, which splits your logic. You've created a "component" that is less flexible than its utility-based original.</li>
            </ul>
            
            <p className="mt-4"><strong>Option 2: React/Vue Components (Best Practice)</strong></p>
            <p>In a framework-based project, this is the <strong>strongly recommended</strong> approach. You create a component (e.g., `Button.tsx`) and keep the utilities inside that component's file. Your HTML stays clean, and your styling logic is co-located with its component logic.</p>

            <p className="mt-4"><strong>Option 3: Customizing Your Theme</strong></p>
            <p>If you're always using <Code>text-[#FF0000]</Code>, you haven't abstracted. The correct way is to add this to your `tailwind.config.js` file, so you can use <Code>text-brand-red</Code>.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: <Code>@apply</Code> vs. a React Component</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. The <Code>@apply</Code> Method (in `input.css`)</p>
            <CodeBlock code={`
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700;
  }
}
            `} language="css" />
            <p>Your HTML then becomes: <Code>{'<button class="btn-primary">Click Me</button>'}</Code></p>
            
            <p className="font-semibold mt-4">2. The React Component Method (Best Practice)</p>
            <CodeBlock code={`
// --- In a new file: /components/Button.tsx ---
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;

// --- In your App.tsx ---
// import Button from './components/Button';
// <Button>Click Me</Button>
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>When should I use <Code>@apply</Code>?</strong>
                <p className="pl-4">Use it sparingly. It's best for simple, non-interactive "components" like a card, a "badge," or for styling prose from a CMS (using the `@tailwindcss/typography` plugin, which uses `@apply` heavily).</p>
              </li>
              <li>
                <strong>Why is the React Component approach better?</strong>
                <p className="pl-4">It's more flexible. The React component can accept <em>props</em> to change the utilities. For example, you could pass a `variant="danger"` prop and have the component <em>conditionally</em> apply <Code>bg-red-500</Code> instead of <Code>bg-blue-500</Code>. You can't do that easily with a static <Code>@apply</Code> class.</p>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Next Steps</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            To test your knowledge, please visit the Quiz and Practice Problems sections for this topic.
          </div>
        </div>
      );
    case 'css-framework-comparison':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">5.7: CSS Framework Comparison & Best Practices</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Spectrum of Abstraction</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Your choice of CSS framework is about a trade-off between speed and customization.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>High Abstraction (Bootstrap):</strong> Gives you a finished <Code>.card</Code> component. It's incredibly fast to get started, but very hard to customize if you don't like its default look.</li>
              <li><strong>Low Abstraction (Tailwind CSS):</strong> Gives you the <em>bricks</em> (<Code>p-4</Code>, <Code>shadow-md</Code>). It's slower to build your <em>first</em> card, but infinitely faster to build a <em>custom</em> card that looks exactly how you want.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Bootstrap (Component-Based) vs. Tailwind (Utility-First)</strong></p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-2 pr-4 text-lg">Aspect</th>
                    <th className="py-2 pr-4 text-lg">Bootstrap</th>
                    <th className="py-2 pr-4 text-lg">Tailwind CSS</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">Philosophy</td>
                    <td className="py-3 pr-4 align-top">Component-Based</td>
                    <td className="py-3 pr-4 align-top">Utility-First</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">Workflow</td>
                    <td className="py-3 pr-4 align-top">Assemble pre-built components (<Code>.card</Code>, <Code>.navbar</Code>).</td>
                    <td className="py-3 pr-4 align-top">Compose utilities (<Code>flex</Code>, <Code>p-4</Code>) in your HTML.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">Customization</td>
                    <td className="py-3 pr-4 align-top">Difficult. You must "fight" and override default styles.</td>
                    <td className="py-3 pr-4 align-top">Extremely easy. The framework is <em>designed</em> for custom design.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">Final Look</td>
                    <td className="py-3 pr-4 align-top">Can lead to generic, "Bootstrappy" websites.</td>
                    <td className="py-3 pr-4 align-top">Allows for completely unique, bespoke designs.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">Performance</td>
                    <td className="py-3 pr-4 align-top">Good, if you import only the parts you need via Sass.</td>
                    <td className="py-3 pr-4 align-top">Excellent. The JIT engine "purges" all unused styles, resulting in a tiny file.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Building a Card, Side-by-Side</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. Bootstrap: Using pre-defined component classes.</p>
            <CodeBlock code={`
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Bootstrap Card</h5>
    <p class="card-text">You get this style by using 'card', 'card-body', and 'card-title'.</p>
    <a href="#" class="btn btn-primary">A .btn-primary</a>
  </div>
</div>
            `} language="html" />
            <p className="font-semibold mt-2">2. Tailwind: Composing utility classes.</p>
            <CodeBlock code={`
<div class="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
  <div class="p-4">
    <h5 class="text-xl font-bold">Tailwind Card</h5>
    <p class="text-gray-700 mt-2">I built this style by composing 'shadow-lg', 'rounded-lg', and 'p-4'.</p>
    <a href="#" class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      A custom button
    </a>
  </div>
</div>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Which one is better for a beginner?</strong>
                <p className="pl-4">Bootstrap is often <em>easier</em> for a total beginner because you can get a good-looking result very quickly. However, <strong>Tailwind</strong> <em>teaches you more about CSS</em>. Because you are applying <Code>flex</Code>, <Code>p-4</Code>, etc., you are constantly thinking about and using real CSS properties, which makes you a better developer in the long run.</p>
              </li>
              <li>
                <strong>What does "Don't Fight the Framework" mean?</strong>
                <p className="pl-4">It means you should embrace the philosophy of the tool you chose. Don't use Tailwind and then write a giant custom CSS file with <Code>.my-card</Code> and <Code>.my-button</Code>. Likewise, don't use Bootstrap and then write 50 override styles to change how a <Code>.card</Code> looks. If you're fighting the tool, you're using the wrong tool.</p>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Next Steps</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            To test your knowledge, please visit the Quiz and Practice Problems sections for this topic.
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h1 className="text-3xl font-bold mb-4">Select a Subchapter</h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">Please select a topic from the sidebar to view the notes.</p>
          </div>
        </div>
      );
  }
};

export default Chapter5;