import React, { useState } from 'react';

// Reusable component for styling code blocks
const CodeBlock = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    // We use this method for compatibility in restricted environments (like iframes)
    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = code.trim();
    
    // Hide the textarea from view
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    textArea.style.opacity = '0';
    
    document.body.appendChild(textArea);
    
    // Select and copy the content
    textArea.select();
    try {
      document.execCommand('copy');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    // Clean up and remove the textarea
    document.body.removeChild(textArea);
  };

  return (
    <div className="relative"> {/* Use relative positioning for the button */}
      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm my-4">
        <code>{code.trim()}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white text-xs font-semibold py-1 px-2 rounded-md transition-all duration-200"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

// Reusable component for inline code
const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-gray-200 text-red-700 font-mono text-sm rounded px-1 py-0.5">
    {children}
  </code>
);

// Reusable component for note sections
const NoteSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-6">
    <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-3">{title}</h3>
    <div className="text-gray-700 space-y-3">{children}</div>
  </section>
);

// Reusable component for quiz sections
const QuizSection = ({ children }: { children: React.ReactNode }) => (
  <section className="mt-8">
    <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-3">Test Your Knowledge</h3>
    <ol className="list-decimal list-inside space-y-2 text-gray-700">
      {children}
    </ol>
  </section>
);


const Chapter6Part1 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'introduction-to-react':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.1: Introduction to React & Virtual DOM</h2>

          <NoteSection title="Concept">
            <p><strong className="text-gray-900">React</strong> is a JavaScript <strong className="text-gray-900">library</strong> for building user interfaces. It is not a full framework. Its main job is to efficiently render and update UI components.</p>
            <p><strong className="text-gray-900">The Virtual DOM (VDOM)</strong> is the core concept that makes React fast. It's a lightweight copy of the real browser DOM (Document Object Model) kept in memory.</p>
            <h4 className="text-lg font-semibold mt-2">How it Works (Reconciliation):</h4>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li><strong className="text-gray-900">State Change:</strong> When your component's state changes (e.g., a user clicks a button), React creates a <strong className="text-gray-900">new Virtual DOM tree</strong>.</li>
              <li><strong className="text-gray-900">Diffing:</strong> React compares this new VDOM tree with the previous VDOM tree (a "snapshot"). This process is called <strong className="text-gray-900">"diffing"</strong>.</li>
              <li><strong className="text-gray-900">Patching:</strong> React identifies the <strong className="text-gray-900">exact minimal changes</strong> needed to make the real DOM look like the new VDOM.</li>
              <li><strong className="text-gray-900">Batch Update:</strong> It then updates the real DOM with <strong className="text-gray-900">only those changes</strong>, in one "batch," instead of re-writing the entire page.</li>
            </ol>
            <p className="mt-2">This process avoids slow and expensive direct manipulation of the real DOM, leading to much better performance.</p>
          </NoteSection>

          <NoteSection title="Example">
            <p>This is a runnable HTML file. You can save this as <Code>index.html</Code> and open it in your browser. It loads React and Babel to demonstrate the VDOM in action. Notice how only the number in the <Code>&lt;p&gt;</Code> tag changes when you click, not the whole page.</p>
            <CodeBlock code={`
<!DOCTYPE html>
<html>
<head>
  <title>React VDOM Demo</title>
  <!-- Load React -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <!-- Load Babel to transpile JSX -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>

  <!-- The "root" element where our React app will be mounted -->
  <div id="root"></div>

  <script type="text/babel">
    // Use 'useState' hook to manage state
    const { useState } = React;

    // Define a React component
    function Counter() {
      // 'count' is the state, 'setCount' is the function to update it
      const [count, setCount] = useState(0);

      // When 'setCount' is called, React creates a new VDOM,
      // sees the <p> tag's content needs to change,
      // and updates only that text in the real DOM.
      return (
        <div>
          <h2>Counter</h2>
          <p>Current Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      );
    }

    // Find the root DOM element
    const domNode = document.getElementById('root');
    // Create a React root
    const root = ReactDOM.createRoot(domNode);
    // Render our <Counter> component into the root
    root.render(<Counter />);
  </script>

</body>
</html>
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: VDOM Reconciliation Flow</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>1. State Change (e.g., <Code>setCount(1)</Code>)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr;</p>
              <p>2. New VDOM Tree Created (in memory)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr;</p>
              <p>3. "Diffing" Algorithm (New VDOM vs. Old VDOM)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr;</p>
              <p>4. Minimal Changes Calculated (e.g., "Change text in <Code>&lt;p&gt;</Code> to 1")</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr;</p>
              <p>5. Real DOM Updated (Only the <Code>&lt;p&gt;</Code> tag is patched)</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">TCS</strong>, <strong className="text-gray-900">Infosys</strong>, <strong className="text-gray-900">Wipro</strong>, <strong className="text-gray-900">Cognizant</strong>. This is the most common "Day 1" React question.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is the Virtual DOM and how does it improve performance?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"The VDOM is a lightweight copy of the DOM in memory. When state changes, React creates a new VDOM, compares it to the old one—called diffing—and calculates the minimum changes needed. It then patches the real DOM in one batch, which is much faster than manipulating the real DOM directly for every small change."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is Reconciliation?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"Reconciliation is the entire process of how React updates the UI. It includes creating the new VDOM, the diffing algorithm, and patching the real DOM."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Calling React a "framework." It's a "library." A framework (like Angular) dictates your app structure, while a library (like React) is a tool you use to manage one part (the view).</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What is the VDOM?</li>
            <li>What is the "diffing" process?</li>
            <li>What is "reconciliation"?</li>
            <li>Why is updating the real DOM slow? (Ans: It causes browser "reflow" and "repaint".)</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>React is a <strong className="text-gray-900">library</strong> for building UIs.</li>
              <li>The <strong className="text-gray-900">Virtual DOM (VDOM)</strong> is a lightweight copy of the real DOM.</li>
              <li><strong className="text-gray-900">Reconciliation</strong> is the process of updating the real DOM from the VDOM.</li>
              <li><strong className="text-gray-900">Diffing</strong> is the algorithm that finds the <strong className="text-gray-900">minimal changes</strong> between VDOM trees.</li>
              <li>This process avoids slow, direct DOM manipulation.</li>
            </ul>
          </div>
        </div>
      );
    case 'create-react-app':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.2: Create React App & Project Structure</h2>

          <NoteSection title="Concept">
            <p><strong className="text-gray-900">Create React App (CRA)</strong> is the official command-line tool for creating a new single-page React application. It sets up a complete development environment with zero configuration.</p>
            <p>It automatically configures complex tools like <strong className="text-gray-900">Babel</strong> (compiles modern JavaScript/JSX), <strong className="text-gray-900">Webpack</strong> (bundles all your files), and a <strong className="text-gray-900">dev server</strong> (with hot-reloading).</p>
            <h4 className="text-lg font-semibold mt-2">Key Commands:</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li><Code>npx create-react-app my-app</Code>: Creates a new project in the `my-app` folder. (<Code>npx</Code> runs the command without permanently installing it).</li>
              <li><Code>cd my-app</Code>: Move into the new project directory.</li>
              <li><Code>npm start</Code>: Starts the development server (usually at `http://localhost:3000`) and opens it in your browser. It auto-reloads when you save files.</li>
              <li><Code>npm run build</Code>: Bundles the app into static files in the `/build` folder, ready for deployment to a server.</li>
              <li><Code>npm test</Code>: Runs the test suite using Jest.</li>
            </ul>
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: Key Project Structure (CRA)</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>my-app/</p>
              <p>├── <strong className="text-gray-900">node_modules/</strong> (All 3rd-party libraries)</p>
              <p>├── <strong className="text-gray-900">public/</strong> (Static assets)</p>
              <p>│&nbsp;&nbsp; └── <strong className="text-gray-900">index.html</strong> (The *only* HTML page. Your React app is injected here.)</p>
              <p>├── <strong className="text-gray-900">src/</strong> (Your React code)</p>
              <p>│&nbsp;&nbsp; ├── <strong className="text-gray-900">App.js</strong> (The main application component)</p>
              <p>│&nbsp;&nbsp; ├── <strong className="text-gray-900">index.js</strong> (The *entry point*. It finds `public/index.html` and injects `App.js` into it.)</p>
              <p>│&nbsp;&nbsp; └── index.css (Global styles)</p>
              <p>├── <strong className="text-gray-900">package.json</strong> (Lists project dependencies and scripts)</p>
              <p>└── .gitignore (Files/folders for Git to ignore)</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Wipro</strong>, <strong className="text-gray-900">Infosys</strong>, <strong className="text-gray-900">TCS</strong>. They expect you to know how to start a project. <strong className="text-gray-900">Vite</strong> is a newer, faster alternative to CRA, and mentioning it shows you are up-to-date.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is the purpose of `package.json`?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"It's the manifest file for the project. It lists all the dependencies (libraries) the project needs (like `react`, `react-dom`) and defines the scripts we can run (like `npm start`)."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is the difference between `public/index.html` and `src/index.js`?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"`public/index.html` is the actual webpage shell. `src/index.js` is the JavaScript entry point that tells React to take our main component (`App.js`) and render it inside the `&lt;div id="root"&gt;` element in `index.html`."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "What does `npm run build` do?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"It creates a highly-optimized, production-ready version of the app. It bundles all JavaScript into one file, minifies the code, and puts the static files in the `/build` folder for deployment."</li>
                </ul>
              </li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What command creates a new React app?</li>
            <li>What command starts the development server?</li>
            <li>What folder contains all your React component code?</li>
            <li>What is the purpose of the `npm run build` command?</li>
            <li>What two files form the "entry point" of the application?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">Create React App (CRA)</strong> sets up a React project with zero configuration.</li>
              <li><Code>npx create-react-app my-app</Code> to create a new app.</li>
              <li><Code>npm start</Code> runs the dev server.</li>
              <li><Code>npm run build</Code> creates a production-ready app.</li>
              <li><strong className="text-gray-900">`src/index.js`</strong> (React's entry) injects <strong className="text-gray-900">`src/App.js`</strong> (main component) into <strong className="text-gray-900">`public/index.html`</strong> (the web page).</li>
            </ul>
          </div>
        </div>
      );
    case 'jsx-syntax':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.3: JSX Syntax & Components</h2>

          <NoteSection title="Concept">
            <p><strong className="text-gray-900">JSX (JavaScript XML)</strong> is a syntax extension for JavaScript. It allows you to write HTML-like syntax directly inside your JavaScript files.</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>It is <strong className="text-gray-900">not</strong> HTML. JSX is compiled by <strong className="text-gray-900">Babel</strong> into regular `React.createElement()` function calls.</li>
              <li>It makes React code more readable and declarative.</li>
            </ul>
            <p><strong className="text-gray-900">Components</strong> are the core building blocks of React. They are reusable, self-contained pieces of UI.</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">Functional Component:</strong> The modern standard. A simple JavaScript function that accepts `props` and returns JSX.</li>
              <li><strong className="text-gray-900">Class Component:</strong> The older syntax. An ES6 class that `extends React.Component` and has a `render()` method.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">Key JSX Rules:</h4>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li><strong className="text-gray-900">Single Root Element:</strong> A component must return a *single* top-level element. If you have multiple, wrap them in a `&lt;div&gt;` or a <strong className="text-gray-900">Fragment</strong> (<Code>&lt;&gt;...&lt;/&gt;</Code>).</li>
              <li><strong className="text-gray-900">camelCase Attributes:</strong> HTML attributes are written in `camelCase`.
                <ul className="list-disc ml-6 mt-1">
                  <li>`class` becomes <Code>className</Code></li>
                  <li>`for` becomes <Code>htmlFor</Code></li>
                  <li>`onclick` becomes <Code>onClick</Code></li>
                </ul>
              </li>
              <li><strong className="text-gray-900">JavaScript in Braces <Code>{'{}'}</Code>:</strong> You can embed any JavaScript <strong className="text-gray-900">expression</strong> inside curly braces. This includes variables, function calls, and ternary operators.</li>
              <li><strong className="text-gray-900">Self-Closing Tags:</strong> Tags without children *must* be self-closed (e.g., <Code>&lt;img ... /&gt;</Code>, <Code>&lt;br /&gt;</Code>).</li>
              <li><strong className="text-gray-900">Comments:</strong> JSX comments are written as <Code>{'/* This is a comment */'}</Code> inside braces.</li>
            </ol>
          </NoteSection>

          <NoteSection title="Example">
            <p>A runnable <Code>App.js</Code> file demonstrating functional components and JSX rules.</p>
            <CodeBlock code={`
import React from 'react';

// This is a Functional Component
// It receives 'props' (properties) as an argument
function UserProfile(props) {
  // props = { name: "Priya", job: "Engineer", isAdmin: true }

  const userRole = props.job.toUpperCase(); // JS expression

  // JSX combines HTML-like syntax with JS {}
  return (
    // 1. Single Root Element (a div)
    // 2. 'className' (camelCase attribute)
    <div className="user-card">
      
      {/* 3. JS expressions in braces */}
      <h2>Name: {props.name}</h2>
      <p>Job: {userRole}</p>

      {/* Ternary operator inside braces */}
      {props.isAdmin ? <p>Status: Admin</p> : <p>Status: User</p>}

      {/* 4. Self-closing tag */}
      <hr />
    </div>
  );
}

// This is the main App component
function App() {
  return (
    // 1. Using a Fragment <>...</> as the root element
    <>
      <h1>User Dashboard</h1>
      {/* We are using our UserProfile component like an HTML tag */}
      <UserProfile name="Priya" job="Engineer" isAdmin={true} />
      <UserProfile name="Rohan" job="Designer" isAdmin={false} />
    </>
  );
}

export default App;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: JSX Compilation</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p><strong className="text-gray-900">Your JSX Code:</strong></p>
              <p><Code>&lt;h1 className="title"&gt;Hello&lt;/h1&gt;</Code></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr; (Babel Compiles)</p>
              <p><strong className="text-gray-900">Plain JavaScript (What React Sees):</strong></p>
              <p><Code>React.createElement("h1", {"{className: 'title'}"}, "Hello")</Code></p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Amazon</strong>, <strong className="text-gray-900">TCS</strong>, <strong className="text-gray-900">Capgemini</strong>. These are critical "pass/fail" questions.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is JSX? Is it required to use React?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"JSX is a syntax extension for JavaScript that looks like HTML. It is compiled by Babel into `React.createElement()` calls. It is not *required*—you could write `React.createElement()` by hand—but it's the standard and makes code much more readable."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "Why do we use <Code>className</Code> instead of <Code>class</Code>?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"Because JSX is just JavaScript, and `class` is a reserved keyword in JavaScript (for creating classes). So, React uses <Code>className</Code> which compiles to the `class` attribute in the real DOM."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "Why must a component return a single root element?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"A component's render function needs to return a single 'thing.' If you return two adjacent elements, JavaScript doesn't know what to do. You can wrap them in a `&lt;div&gt;` or, if you don't want an extra `&lt;div&gt;` in the DOM, use a <Code>&lt;Fragment&gt;</Code> or the short syntax <Code>&lt;&gt;</Code>."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Trying to run complex logic inside braces. You can use expressions (like `a + b` or `a ? b : c`), but not statements (like `if/else` or `for` loops). Do that logic *outside* the JSX return.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What is the JSX attribute for the HTML `class` attribute?</li>
            <li>What is the JSX attribute for the HTML `for` attribute?</li>
            <li>How do you embed a JavaScript variable named `myVar` inside JSX?</li>
            <li>What is wrong with this return: <Code>return (&lt;h1&gt;Hi&lt;/h1&gt; &lt;p&gt;There&lt;/p&gt;)</Code>?</li>
            <li>What tool compiles JSX into JavaScript?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">JSX</strong> is a syntax extension, not HTML. It's compiled by <strong className="text-gray-900">Babel</strong>.</li>
              <li><strong className="text-gray-900">Components</strong> are reusable functions that return JSX.</li>
              <li>JSX attributes are <strong className="text-gray-900">camelCase</strong> (e.g., <Code>className</Code>, <Code>htmlFor</Code>, <Code>onClick</Code>).</li>
              <li>JavaScript <strong className="text-gray-900">expressions</strong> are embedded in <Code>{'{}'}</Code>.</li>
              <li>Components must return a <strong className="text-gray-900">single root element</strong> (use <Code>&lt;&gt;...&lt;/&gt;</Code> to wrap).</li>
            </ul>
          </div>
        </div>
      );
    case 'props-communication':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.4: Props & Component Communication</h2>

          <NoteSection title="Concept">
            <p><strong className="text-gray-900">Props</strong> (short for "properties") are how React components pass data to each other. They are the primary way to send data <strong className="text-gray-900">downward</strong> from a parent component to a child component.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">One-Way Data Flow:</strong> Data in React flows in one direction: <strong className="text-gray-900">Parent-to-Child</strong>. This makes the app predictable and easier to debug. A child cannot directly change its parent.</li>
              <li><strong className="text-gray-900">Props are Read-Only:</strong> This is a strict rule. A component must <strong className="text-gray-900">never</strong> modify its own props. Props are "owned" by the parent component.
                <ul className="list-disc ml-6 mt-1">
                  <li><strong className="text-red-600">Wrong:</strong> <Code>props.name = "New Name";</Code> (This will cause an error).</li>
                  <li><strong className="text-green-600">Right:</strong> If a component needs to change a value, that value must be stored in <strong className="text-gray-900">state</strong> (see 6.5).</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Passing Props:</strong> You pass props to a component using attributes, just like in HTML.
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>&lt;MyComponent name="Alice" age={'{25}'} /&gt;</Code></li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Receiving Props:</strong> A functional component receives all props as a single object, conventionally named `props`.
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>function MyComponent(props) {'{ ... }'}</Code></li>
                  <li>You access them via `props.name` and `props.age`.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Destructuring Props:</strong> It's very common to "destructure" the props object for cleaner code.
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>function MyComponent({'{ name, age }'}) {'{ ... }'}</Code></li>
                  <li>Now you can use `name` and `age` directly.</li>
                </ul>
              </li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>Data (`message`) is defined in the parent (`App`) and passed *down* to the child (`WelcomeMessage`) via props.</p>
            <CodeBlock code={`
import React from 'react';

// 2. The Child Component
// It receives the 'props' object.
// We are destructuring it to get 'message' and 'user' directly.
function WelcomeMessage({ message, user }) {
  
  // 3. It uses the props to render.
  // This component is "dumb" - it just displays what it's given.
  // It cannot change 'message' or 'user'.
  return (
    <div className="welcome-box">
      <h2>{message}</h2>
      <p>Logged in as: {user}</p>
    </div>
  );
}

// 1. The Parent Component
function App() {
  // Define the data in the parent
  const mainMessage = "Welcome to the Dashboard!";
  const currentUser = "admin_user";

  // Pass the data down as props (message="...", user="...")
  return (
    <div>
      <h1>My Application</h1>
      <WelcomeMessage message={mainMessage} user={currentUser} />
      <WelcomeMessage message="You have 3 notifications" user={currentUser} />
    </div>
  );
}

export default App;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: One-Way Data Flow (Props)</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>[Parent Component: <Code>App</Code>]</p>
              <p>  (Holds data, e.g., <Code>message = "Hello"</Code>) </p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V (Data flows down via props)"}} />
              <p>  <Code>&lt;ChildComponent message={'{message}'} /&gt;</Code></p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V"}} />
              <p>[Child Component: <Code>ChildComponent</Code>]</p>
              <p>  (Receives <Code>props.message</Code>)</p>
              <p>  (Renders "Hello")</p>
              <p>  (Cannot change <Code>props.message</Code>!)</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Amazon</strong>, <strong className="text-gray-900">Infosys</strong>, <strong className="text-gray-900">Cognizant</strong>. This is a 100% guaranteed question.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is the difference between Props and State?"
                <ul className="list-disc ml-6 mt-1">
                  <li><strong className="text-gray-900">Props (Properties):</strong> Passed *into* a component from its <strong className="text-gray-900">parent</strong>. They are <strong className="text-gray-900">read-only</strong> (immutable) and cannot be changed by the child component.</li>
                  <li><strong className="text-gray-900">State:</strong> Managed *inside* a component. It is <strong className="text-gray-900">private</strong> and can be changed by the component itself (using <Code>useState</Code>). When state changes, the component <strong className="text-gray-900">re-renders</strong>.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "How do you pass data from a child *up* to a parent?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"You can't pass data up directly. Instead, the <strong className="text-gray-900">parent passes a function (as a prop) down to the child</strong>. The child then calls that function with its data as an argument. This maintains the one-way data flow." (This is called "lifting state up").</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Trying to change a prop: <Code>props.message = "..."</Code>. This is the most common props-related error.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What does "props" stand for?</li>
            <li>What is the name of the "one-way data flow" principle? (Ans: Parent-to-Child)</li>
            <li>Are props read-only or read-write? (Ans: Read-only)</li>
            <li>How do you pass a string "Hello" as a prop named `greeting`?</li>
            <li>How do you pass a number `123` as a prop named `userId`?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">Props</strong> are for passing data <strong className="text-gray-900">down</strong> from parent to child.</li>
              <li>Data flow is <strong className="text-gray-900">one-way</strong> (unidirectional).</li>
              <li>Props are <strong className="text-gray-900">read-only</strong> (immutable). A component <strong className="text-gray-900">never</strong> changes its own props.</li>
              <li>Use <strong className="text-gray-900">destructuring</strong> (<Code>{"{ name, age }"}</Code>) to read props cleanly.</li>
              <li><strong className="text-gray-900">Props vs. State</strong> is the most critical concept to know for interviews.</li>
            </ul>
          </div>
        </div>
      );
    case 'state-management':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.5: State Management with useState</h2>

          <NoteSection title="Concept">
            <p><strong className="text-gray-900">State</strong> is data that is managed <strong className="text-gray-900">inside</strong> a component. It is private to that component. Unlike props, state <strong className="text-gray-900">can be changed</strong> by the component itself.</p>
            <p>The <strong className="text-gray-900">`useState`</strong> Hook is the standard way to add state to a functional component. When you update the state, React <strong className="text-gray-900">automatically re-renders</strong> the component and its children to reflect the new data.</p>
            
            <h4 className="text-lg font-semibold mt-4">How to Use `useState`:</h4>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li><strong className="text-gray-900">Import it:</strong> <Code>import React, {'{ useState }'} from 'react';</Code></li>
              <li><strong className="text-gray-900">Initialize it:</strong> Call <Code>useState</Code> at the top level of your component with an <strong className="text-gray-900">initial value</strong>.
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>const [count, setCount] = useState(0);</Code></li>
                  <li><Code>const [name, setName] = useState("Guest");</Code></li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Read the Value:</strong> `useState` returns an array with two elements. The first element (<Code>count</Code>) is the <strong className="text-gray-900">current state value</strong>. You use this in your JSX.</li>
              <li><strong className="text-gray-900">Update the Value:</strong> The second element (<Code>setCount</Code>) is the <strong className="text-gray-900">setter function</strong>. You call this function to update the state. <strong className="text-red-600">Never</strong> modify the state variable directly.
                <ul className="list-disc ml-6 mt-1">
                  <li><strong className="text-red-600">Wrong:</strong> <Code>count = count + 1;</Code> (This will not work and won't cause a re-render).</li>
                  <li><strong className="text-green-600">Right:</strong> <Code>setCount(count + 1);</Code> (This tells React to update the state and re-render).</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Updating State Based on Previous State:</strong> To avoid bugs from "stale state," always use the <strong className="text-gray-900">functional update form</strong>.
                <ul className="list-disc ml-6 mt-1">
                  <li><strong className="text-red-600">Risky:</strong> <Code>setCount(count + 1);</Code> (If called twice, may only increment once)</li>
                  <li><strong className="text-green-600">Safe:</strong> <Code>setCount(prevCount =&gt; prevCount + 1);</Code> (React guarantees <Code>prevCount</Code> is the latest value)</li>
                </ul>
              </li>
            </ol>
          </NoteSection>

          <NoteSection title="Example">
            <p>A simple counter component. The <Code>count</Code> value is held in state. Clicking the button calls the <Code>setCount</Code> setter function, which triggers a re-render with the new value.</p>
            <CodeBlock code={`
import React, { useState } from 'react';

function Counter() {
  // 1. Initialize state. 
  // 'count' is the current value (starts at 0).
  // 'setCount' is the function to update it.
  const [count, setCount] = useState(0);

  // 3. This function is called on click
  const increment = () => {
    // 4. Use the setter function to update state
    // We use the "functional update" form, which is safer.
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // 2. Render the component using the current 'count' value
  return (
    <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      
      {/* 3. Set event handlers to call our update functions */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: State & Re-render Flow</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>[Component Renders] (Reads <Code>count</Code> as 0)</p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V"}} />
              <p>[User Event] (e.g., Click)</p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&Dagger;&nbsp;&nbsp;&nbsp;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V"}} />
              <p>[Event Handler Calls Setter] (e.g., <Code>setCount(prev =&gt; prev + 1)</Code>)</p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V"}} />
              <p>[React Schedules a Re-render]</p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V"}} />
              <p>[Component Re-renders] (Reads <Code>count</Code> as 1)</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Amazon</strong>, <strong className="text-gray-900">Wipro</strong>, <strong className="text-gray-900">TCS</strong>. This is the most fundamental React Hook. You <strong className="text-gray-900">must</strong> know this.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is the difference between State and Props?" (See 6.4 notes).</li>
              <li><strong className="text-gray-900">Key Question:</strong> "Why do we use the functional update form, <Code>setCount(c =&gt; c + 1)</Code>?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"To prevent bugs from <strong className="text-gray-900">stale state</strong>. If you call <Code>setCount(count + 1)</Code> multiple times in one function, it might only increment once because <Code>count</Code> refers to the value from the <em className="italic">original render</em>. The functional form guarantees React uses the most up-to-date state value."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is a 'Hook'?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"A Hook is a special function (like <Code>useState</Code> or <Code>useEffect</Code>) that lets you 'hook into' React features from a functional component. You can't use them in class components."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Modifying state directly. <Code>myState.push(item)</Code> is a huge error. You must use the setter: <Code>setMyState([...myState, item])</Code>.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What are the two elements returned in the array from <Code>useState</Code>?</li>
            <li>What is the <strong className="text-red-600">wrong</strong> way to update state, and what is the <strong className="text-green-600">correct</strong> way?</li>
            <li>Why is it safer to use <Code>setCount(prevCount =&gt; prevCount + 1)</Code> instead of <Code>setCount(count + 1)</Code>?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">State</strong> is internal, managed data that causes a re-render when changed.</li>
              <li><strong className="text-gray-900">`useState(initialValue)`</strong> returns <Code>[value, setValue]</Code>.</li>
              <li><strong className="text-red-600">Never</strong> mutate state directly. <strong className="text-green-600">Always</strong> use the setter function.</li>
              <li>State updates are <strong className="text-gray-900">asynchronous</strong>.</li>
              <li>Use the <strong className="text-gray-900">functional update form</strong> (<Code>setValue(prev =&gt; ...)</Code>) when new state depends on old state.</li>
            </ul>
          </div>
        </div>
      );
    case 'event-handling':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.6: Event Handling in React</h2>

          <NoteSection title="Concept">
            <p>Handling events (like clicks, key presses, or form submissions) in React is very similar to DOM event handling, but with a few important syntax differences.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">camelCase Event Names:</strong> React events are named using <Code>camelCase</Code>.
                <ul className="list-disc ml-6 mt-1">
                  <li>HTML <Code>onclick</Code> becomes React <Code>onClick</Code>.</li>
                  <li>HTML <Code>onchange</Code> becomes React <Code>onChange</Code>.</li>
                  <li>HTML <Code>onsubmit</Code> becomes React <Code>onSubmit</Code>.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Pass a Function (Not a String):</strong> You pass a <strong className="text-gray-900">function reference</strong> or inline function as the event handler.
                <ul className="list-disc ml-6 mt-1">
                  <li>HTML: <Code>&lt;button onclick="handleClick()"&gt;</Code> (a string)</li>
                  <li>React: <Code>&lt;button onClick={'{handleClick}'}&gt;</Code> (a function)</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Preventing Default Behavior:</strong> You must explicitly call <Code>e.preventDefault()</Code>. In React, returning <Code>false</Code> from a handler does <strong className="text-red-600">not</strong> stop default behavior.</li>
              <li><strong className="text-gray-900">The Event Object (`e`):</strong> React passes a <strong className="text-gray-900">SyntheticEvent</strong> object to your handler. It's a cross-browser wrapper around the native event object. You can access native properties like <Code>e.target.value</Code>.</li>
              <li><strong className="text-gray-900">Passing Arguments to Handlers:</strong>
                <ul className="list-disc ml-6 mt-1">
                  <li><strong className="text-red-600">Incorrect:</strong> <Code>&lt;button onClick={'{handleDelete(item.id)}'}&gt;</Code>
                    <br />(This <strong className="text-red-600">calls the function on render</strong>, which is a common and major bug).</li>
                  <li><strong className="text-green-600">Correct:</strong> <Code>&lt;button onClick={'{() =&gt; handleDelete(item.id)}'}&gt;</Code>
                    <br />(This passes an <strong className="text-green-600">arrow function</strong> that, when called, will execute your function with the argument).</li>
                </ul>
              </li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>A form component that demonstrates <Code>onSubmit</Code>, <Code>onChange</Code>, and <Code>e.preventDefault()</Code>.</p>
            <CodeBlock code={`
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    // 1. Prevent the form from refreshing the page
    event.preventDefault();

    // 2. Now you can use the state data
    alert('Submitting username: ' + username);
    // In a real app, you'd send this to a server
  };

  const handleUsernameChange = (event) => {
    // 3. Get the new value from the event object
    setUsername(event.target.value);
  };

  return (
    // 'onSubmit' on the <form> is better than 'onClick' on the button
    // as it also handles 'Enter' key presses.
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: Event Handler Argument Flow</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>[User wants to click button for item "A"]</p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;`items.map(item =&gt; (`"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;`&lt;button onClick={'{() =&gt; handleDelete(item.id)}'}&gt;`"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;`))`"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V"}} />
              <p>[User clicks button for "A"]</p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&Gg;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V"}} />
              <p>[React calls the arrow function]</p>
              <p>{"  \u00A0\u00A0\u00A0\u00A0"}<Code>() =&gt; handleDelete("A")</Code></p>
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&Dagger;|"}} />
              <p dangerouslySetInnerHTML={{"__html": "  &nbsp;&nbsp;&Mina;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V"}} />
              <p>[Your <Code>handleDelete("A")</Code> function is executed]</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">TCS</strong>, <strong className="text-gray-900">Infosys</strong>, <strong className="text-gray-900">Wipro</strong>. Basic syntax questions are very common.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "How is React event handling different from HTML?"
                <ul className="list-disc ml-6 mt-1">
                  <li>1. Event names are <strong className="text-gray-900">camelCase</strong> (<Code>onClick</Code>).</li>
                  <li>2. You pass a <strong className="text-gray-900">function reference</strong>, not a string.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is wrong with <Code>onClick={'{myFunction(id)}'}</Code>?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"That code <strong className="text-gray-900">executes</strong> the function immediately when the component renders, instead of passing a function to be called *when* the click happens. It will likely cause an infinite loop if the function updates state. The fix is to wrap it in an arrow function: <Code>onClick={'{() =&gt; myFunction(id)}'}</Code>."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Forgetting <Code>e.preventDefault()</Code> inside a form's <Code>onSubmit</Code> handler, causing the page to refresh and lose all state.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What is the React (JSX) equivalent of the HTML event <Code>onchange</Code>?</li>
            <li>What is the critical error in this line: <Code>&lt;button onClick={'{alert("Clicked!")}'}&gt;</Code>?</li>
            <li>What is the one-line function call to stop a form from refreshing the page on submission?</li>
            <li>How do you pass an argument, like <Code>itemId</Code>, to an event handler function <Code>myHandler</Code>?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>React events use <strong className="text-gray-900">camelCase</strong> (e.g., <Code>onClick</Code>, <Code>onChange</Code>).</li>
              <li>You must pass a <strong className="text-gray-900">function reference</strong>, not a function call, to event handlers.</li>
              <li>Use an <strong className="text-gray-900">arrow function</strong> <Code>{'{() =&gt; myFunc(arg)}'}</Code> to pass arguments.</li>
              <li>Call <Code>e.preventDefault()</Code> to stop default browser actions like form submission.</li>
            </ul>
          </div>
        </div>
      );
    default:
      return (
        <div className="p-8">
          <h2 className="text-2xl font-semibold">Note Not Found</h2>
          <p>Please select a topic from the sidebar.</p>
        </div>
      );
  }
};

export default Chapter6Part1;