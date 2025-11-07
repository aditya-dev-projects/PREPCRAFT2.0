import React, { useState } from 'react';

// --- Reusable Helper Components (Required for self-contained file) ---

// Reusable component for styling code blocks (with Copy button)
const CodeBlock = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = code.trim();
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="relative">
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

// --- Chapter 6 Part 2 Component ---

const Chapter6Part2 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'conditional-rendering':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.7: Conditional Rendering & Lists</h2>

          <NoteSection title="Concept">
            <p><strong className="text-gray-900">Conditional Rendering</strong> refers to displaying different elements or components based on a state or prop value (a condition).</p>
            <h4 className="text-lg font-semibold mt-2">Primary Conditional Techniques:</h4>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li><strong className="text-gray-900">Ternary Operator:</strong> Used for simple *either/or* logic directly inside JSX.
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>{'{'}isLoggedIn ? &lt;Welcome /&gt; : &lt;Login /&gt;{'}'}</Code></li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Logical AND (<Code>&amp;&amp;</Code>):</strong> Used for rendering a component *only* if a condition is true, otherwise rendering nothing (`null`).
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>{'{'}unreadCount &gt; 0 &amp;&amp; &lt;Notification /&gt;{'}'}</Code></li>
                </ul>
              </li>
              <li><strong className="text-gray-900">If/Else (Outside JSX):</strong> Best for complex branching logic. You compute what to render *before* the `return` statement.</li>
              <li><strong className="text-gray-900">Rendering Null:</strong> A component that returns <Code>null</Code> will effectively hide itself from the DOM without interfering with the rest of the layout.</li>
            </ol>
            <h4 className="text-lg font-semibold mt-4">Rendering Lists with <Code>.map()</Code> & Keys:</h4>
            <p>To render multiple items from an array, the <strong className="text-gray-900">JavaScript <Code>.map()</Code> method</strong> is mandatory inside JSX.</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">Keys are Mandatory:</strong> Every element rendered within a list must have a unique, stable <Code>key</Code> prop.</li>
              <li><strong className="text-gray-900">Key Purpose:</strong> Keys help React identify which items have changed, been added, or been removed, ensuring efficient updates (diffing) to the Virtual DOM.</li>
              <li><strong className="text-red-600">Anti-Pattern:</strong> Using the array index as the key is only safe if the list is completely static and never re-ordered.</li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>Example demonstrating conditional rendering and list generation.</p>
            <CodeBlock code={`
import React from 'react';

const tasks = [
  { id: 101, text: 'Review PR', done: false },
  { id: 102, text: 'Submit Report', done: true },
  { id: 103, text: 'Team Meeting', done: false },
];

function TaskList({ tasks, isLoggedIn }) {
  // 1. If/Else (Exit early technique)
  if (!isLoggedIn) {
    return <h3>Please log in to view tasks.</h3>;
  }

  return (
    <div>
      {/* 2. Logical AND (&&) */}
      {tasks.length === 0 && <p className="text-blue-500">You have no tasks!</p>}

      <ul className="list-disc ml-4">
        {/* 3. List Rendering with .map() */}
        {tasks.map(task => (
          // Key is crucial and stable (using task.id)
          <li key={task.id}>
            {task.text} 
            {/* 4. Ternary Operator */}
            {task.done 
              ? <span className="text-green-600 font-semibold ml-2"> (Completed)</span>
              : <span className="text-red-600 font-semibold ml-2"> (Pending)</span>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main App component for context
function App() {
  const userIsLoggedIn = true;
  return <TaskList tasks={tasks} isLoggedIn={userIsLoggedIn} />;
}

export default App;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: Conditional Logic Flow in JSX</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>Condition True?</p>
              <p>| &nbsp;&nbsp;&nbsp; |</p>
              <p>V &nbsp;&nbsp;&nbsp; V</p>
              <p>Yes (Truthy) &nbsp;&nbsp;&nbsp; No (Falsy)</p>
              <p>| &nbsp;&nbsp;&nbsp; |</p>
              <p>V &nbsp;&nbsp;&nbsp; V</p>
              <p>Condition <Code>&amp;&amp;</Code> &lt;Element/&gt; &nbsp;&nbsp;&nbsp; Renders `null` (nothing)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Condition <Code>?</Code> &lt;A/&gt; <Code>:</Code> &lt;B/&gt; &nbsp;&nbsp;&nbsp; Renders &lt;B/&gt;</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Wipro</strong>, <strong className="text-gray-900">TCS</strong>. They frequently test the difference between the ternary and `&&` operators.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is the primary risk of using an array index as a key?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"If the list items are re-ordered, added, or deleted, React can lose track of the original components. This causes visual bugs (e.g., input fields losing focus) and incorrect state association, leading to performance issues and hard-to-debug logic."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "How do you render nothing in React?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"Return <Code>null</Code> from the component or use the Logical AND operator (<Code>&amp;&amp;</Code>) where the first operand is falsy."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Putting an `if/else` statement directly inside JSX. This is invalid. <strong className="text-gray-900">Only expressions</strong> are allowed inside JSX braces.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What is the correct operator for rendering an element only if a condition is true?</li>
            <li>What property is mandatory when rendering a list using <Code>.map()</Code>?</li>
            <li>When is it acceptable to use the array index as the list key?</li>
            <li>What happens if a component returns <Code>null</Code>?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use the <strong className="text-gray-900">Ternary Operator</strong> (<Code>? :</Code>) for <strong className="text-gray-900">either/or</strong> rendering.</li>
              <li>Use <strong className="text-gray-900">Logical AND</strong> (<Code>&amp;&amp;</Code>) for <strong className="text-gray-900">hide/show</strong> logic.</li>
              <li>The <strong className="text-gray-900">key</strong> prop is mandatory for all list items.</li>
              <li><strong className="text-red-600">Avoid</strong> using the array index as a key for dynamic lists.</li>
            </ul>
          </div>
        </div>
      );
    case 'react-hooks':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.8: React Hooks (useEffect, useContext, useRef)</h2>

          <NoteSection title="Concept">
            <p><strong className="text-gray-900">Hooks</strong> are special functions that let you "hook into" React features (like state and lifecycle methods) from functional components. They replaced class components for managing state and side effects.</p>
            <h4 className="text-lg font-semibold mt-2">The Rules of Hooks (Mandatory):</h4>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li><strong className="text-gray-900">Only Call at the Top Level:</strong> Do not call Hooks inside loops, conditions, or nested functions.</li>
              <li><strong className="text-gray-900">Only Call from React Functions:</strong> Call them only from functional components or custom Hooks.</li>
            </ol>
            <h4 className="text-lg font-semibold mt-4">Key Hooks:</h4>
            <ul className="list-disc ml-6 space-y-3">
              <li><strong className="text-gray-900"><Code>useEffect</Code> (Side Effects):</strong> Used to handle actions that happen *outside* the normal render cycle (e.g., data fetching, subscriptions, manual DOM manipulation).
                <ul className="list-disc ml-6 mt-1">
                  <li>Accepts a callback function and an optional **dependency array** (<Code>deps</Code>).</li>
                  <li>Returns an optional **cleanup function** to stop side effects (e.g., clearing timers, removing listeners).</li>
                </ul>
              </li>
              <li><strong className="text-gray-900"><Code>useContext</Code> (State Access):</strong> Allows a component to subscribe to context changes, enabling global state sharing without "prop drilling" (passing props down many levels).
                <ul className="list-disc ml-6 mt-1">
                  <li>Requires a <Code>Context Object</Code> (created by <Code>React.createContext()</Code>) and a <Code>Provider</Code> component.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900"><Code>useRef</Code> (References):</strong> Used to access the DOM directly or to hold a mutable value that should *not* cause a re-render when it changes.
                <ul className="list-disc ml-6 mt-1">
                  <li>Returns an object: <Code>{'{ current: value }'}</Code>. Changes to <Code>current</Code> are not tracked by React.</li>
                </ul>
              </li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>Example using <Code>useRef</Code> to focus an input on mount and <Code>useEffect</Code> for data fetching logic (mocked).</p>
            <CodeBlock code={`
import React, { useState, useEffect, useRef } from 'react';

function UserDataFetcher({ userId }) {
  const [data, setData] = useState(null);
  const inputRef = useRef(null);

  // 1. useEffect for data fetching (runs only when userId changes)
  useEffect(() => {
    setData(null); // Clear data before new fetch (good practice)
    
    // Simulate data fetch based on prop
    const mockFetch = setTimeout(() => {
      setData({ user: 'User ' + userId, details: 'Fetched at ' + Date.now() });
    }, 500);

    // 2. useEffect for focusing an input on initial mount (runs once)
    if (inputRef.current) {
        inputRef.current.focus();
    }

    // 3. Cleanup function (runs when component unmounts or before effect reruns)
    return () => {
      clearTimeout(mockFetch); // Prevent memory leak/race condition
    };
  }, [userId]); // Dependency array: Effect runs on mount and whenever userId changes

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I gain focus on mount" />
      <h3>User Data:</h3>
      {data ? <p>{data.user}: {data.details}</p> : <p>Loading...</p>}
    </div>
  );
}

export default UserDataFetcher;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: <Code>useEffect</Code> Dependency Control</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>useEffect(callback, dependencies)</p>
              <p>| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
              <p>V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V</p>
              <p>1. <Code>useEffect(() =&gt; {'{...}'}, [])</Code> &rarr; <strong className="text-gray-900">Mount Only</strong> (Init, one-time setup)</p>
              <p>2. <Code>useEffect(() =&gt; {'{...}'}, [prop])</Code> &rarr; <strong className="text-gray-900">Mount & Update</strong> (Runs when <Code>prop</Code> changes)</p>
              <p>3. <Code>useEffect(() =&gt; {'{...}'})</Code> &rarr; <strong className="text-red-600">Mount & Every Render</strong> (Usually a bug)</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Amazon</strong>, <strong className="text-gray-900">TCS</strong>, <strong className="text-gray-900">Cognizant</strong>. Focus heavily on the rules and dependency array.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "Why are Hooks better than Class Components?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"Hooks eliminate class boilerplate, making components smaller and more readable. They allow logic related to a single effect (e.g., fetching, subscribing) to be grouped together, rather than being split across <Code>componentDidMount</Code> and <Code>componentDidUpdate</Code>."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "When would you use <Code>useRef</Code>?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"1. To directly manipulate the DOM (e.g., focusing an input). 2. To store a mutable value across renders (like a timer ID) that, when changed, should <strong className="text-red-600">not</strong> trigger the component to re-render."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Omitting a variable from the <Code>useEffect</Code> dependency array when that variable is used inside the effect. This causes the effect to run with a <strong className="text-red-600">stale (outdated) value</strong>.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What is the purpose of the dependency array in <Code>useEffect</Code>?</li>
            <li>What does <Code>useRef</Code> return, and what is the primary use case for it?</li>
            <li>What happens if you use an <Code>if</Code> statement to conditionally call a Hook inside a component?</li>
            <li>How do you clean up an interval set inside <Code>useEffect</Code>?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">Hooks</strong> follow strict rules (top-level only).</li>
              <li><strong className="text-gray-900"><Code>useEffect</Code></strong> manages side effects and component lifecycle.</li>
              <li><strong className="text-gray-900"><Code>useContext</Code></strong> solves prop drilling for global data access.</li>
              <li><strong className="text-gray-900"><Code>useRef</Code></strong> provides mutable storage that doesn't trigger re-renders.</li>
              <li>Dependencies control when <Code>useEffect</Code> runs.</li>
            </ul>
          </div>
        </div>
      );
    case 'react-router':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.9: React Router for Navigation</h2>

          <NoteSection title="Concept">
            <p><strong className="text-gray-900">React Router</strong> is the most popular library for managing navigation and routing in Single Page Applications (SPAs). It keeps the UI synchronized with the URL.</p>
            <h4 className="text-lg font-semibold mt-2">Key Components (React Router v6+):</h4>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li><strong className="text-gray-900"><Code>BrowserRouter</Code>:</strong> Must wrap your entire application. It uses the HTML5 History API to keep your UI in sync with the URL.</li>
              <li><strong className="text-gray-900"><Code>Routes</Code>:</strong> A container component that looks through its children <Code>Route</Code> elements to find the best match for the current URL.</li>
              <li><strong className="text-gray-900"><Code>Route</Code>:</strong> Maps a URL path to a React element.
                <ul className="list-disc ml-6 mt-1">
                  <li>Requires a <Code>path</Code> prop (e.g., <Code>/users</Code>).</li>
                  <li>Requires an <Code>element</Code> prop (the component to render).</li>
                </ul>
              </li>
              <li><strong className="text-gray-900"><Code>Link</Code>:</strong> Replaces the standard HTML <Code>&lt;a&gt;</Code> tag for navigation. It prevents a full page reload, ensuring the application remains a true SPA.
                <ul className="list-disc ml-6 mt-1">
                  <li>Use the <Code>to</Code> prop instead of <Code>href</Code>.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Dynamic Routes:</strong> Uses colons to define path parameters (e.g., <Code>/users/:id</Code>). These parameters are retrieved using the <Code>useParams</Code> hook.</li>
            </ol>
          </NoteSection>

          <NoteSection title="Example">
            <p>Example showing the basic structure and navigation logic.</p>
            <CodeBlock code={`
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// 1. Define Page Components
const Home = () => <h2>Welcome Home!</h2>;
const About = () => <h2>About Us Page</h2>;
const NotFound = () => <h2 className="text-red-500">404 Page Not Found</h2>;

// Dynamic Route Component
const UserDetail = () => {
  const { id } = useParams(); // Retrieves the dynamic part of the URL
  return <h3>Viewing Details for User ID: {id}</h3>;
};

function App() {
  return (
    // 2. BrowserRouter wraps the entire app
    <BrowserRouter>
      <nav className="p-4 space-x-4 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/123">User 123</Link> {/* Link to a dynamic route */}
      </nav>

      {/* 3. Routes container */}
      <Routes>
        {/* 4. Route elements map path to component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Dynamic Route definition */}
        <Route path="/users/:id" element={<UserDetail />} />
        
        {/* Wildcard Route (Must be last) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: React Router Component Hierarchy</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>&lt;App /&gt;</p>
              <p>| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
              <p>V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V</p>
              <p>&lt;BrowserRouter&gt;</p>
              <p>| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
              <p>V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V</p>
              <p>&lt;Link to="/home" /&gt; &nbsp;&nbsp;&nbsp; &lt;Routes&gt;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Route path="/" element={'{<Home/>}'} /&gt;</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Infosys</strong>, <strong className="text-gray-900">Amazon</strong>. Critical for any front-end role.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is the difference between an SPA and an MPA?"
                <ul className="list-disc ml-6 mt-1">
                  <li><strong className="text-gray-900">SPA (Single Page Application):</strong> Only one HTML file is loaded (e.g., `index.html`). Subsequent navigation uses JavaScript to change the content without full page reloads. Faster user experience.</li>
                  <li><strong className="text-gray-900">MPA (Multi Page Application):</strong> Every navigation (link click) requires the browser to request and load a new HTML page from the server. Slower, but simpler for search engines.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "Why do we use <Code>&lt;Link&gt;</Code> instead of <Code>&lt;a&gt;</Code>?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"The native <Code>&lt;a&gt;</Code> tag forces a browser refresh. <Code>&lt;Link&gt;</Code> intercepts the click event, prevents the refresh, and uses the browser's History API to update the URL and trigger React Router to render the correct component."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Forgetting to wrap the application in <Code>&lt;BrowserRouter&gt;</Code>, which prevents all routing components (like <Code>Link</Code> and <Code>useParams</Code>) from working.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What component must wrap the entire application when using React Router?</li>
            <li>What Hook is used to extract dynamic parameters like <Code>:id</Code> from the URL?</li>
            <li>What HTML tag does <Code>&lt;Link&gt;</Code> replace, and why?</li>
            <li>In React Router v6+, what container component holds all the <Code>&lt;Route&gt;</Code> elements?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>React Router enables client-side routing in <strong className="text-gray-900">SPAs</strong>.</li>
              <li><strong className="text-gray-900"><Code>BrowserRouter</Code></strong>, <strong className="text-gray-900"><Code>Routes</Code></strong>, and <strong className="text-gray-900"><Code>Route</Code></strong> define the structure.</li>
              <li>Use <strong className="text-gray-900"><Code>Link</Code></strong> for all internal navigation.</li>
              <li>Dynamic segments use <strong className="text-gray-900"><Code>useParams</Code></strong> to extract data.</li>
            </ul>
          </div>
        </div>
      );
    case 'forms-validation':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.10: Forms & Form Validation in React</h2>

          <NoteSection title="Concept">
            <p>React primarily manages forms using the <strong className="text-gray-900">Controlled Component</strong> pattern. This means the form data is handled by the component's state, making the state the "single source of truth."</p>
            <h4 className="text-lg font-semibold mt-2">Controlled Components (The Standard):</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Every form input (<Code>&lt;input&gt;</Code>, <Code>&lt;textarea&gt;</Code>, <Code>&lt;select&gt;</Code>) must be bound to a piece of state.</li>
              <li>This binding is done via two mandatory props:
                <ul className="list-disc ml-6 mt-1">
                  <li><strong className="text-gray-900"><Code>value</Code>:</strong> Sets the current display value from state.</li>
                  <li><strong className="text-gray-900"><Code>onChange</Code>:</strong> Updates the state whenever the input value changes.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Manual Validation:</strong> Validation logic is run inside the <Code>onSubmit</Code> handler before updating state or submitting to an API.</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4">Uncontrolled Components:</h4>
            <p>Form data is handled by the DOM itself. You retrieve the value using a <strong className="text-gray-900"><Code>useRef</Code></strong> upon submission. This is simpler for basic, one-off elements but rarely used for complex forms.</p>
          </NoteSection>

          <NoteSection title="Example">
            <p>A controlled form with required field validation logic.</p>
            <CodeBlock code={`
import React, { useState } from 'react';

function ControlledForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  // Generic handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic Validation Logic
    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Valid email required.';
    }

    setErrors(newErrors);

    // Submission Logic (only if no errors)
    if (Object.keys(newErrors).length === 0) {
      alert('Form Submitted: ' + JSON.stringify(formData));
      // Reset form or redirect
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name} // BOUND TO STATE
          onChange={handleChange} // UPDATES STATE
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email} // BOUND TO STATE
          onChange={handleChange} // UPDATES STATE
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: Controlled Input Flow</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>[1] User Types 'A' in Input</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr;</p>
              <p>[2] <Code>onChange</Code> Event Fires</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr;</p>
              <p>[3] <Code>setState</Code> Called (e.g., <Code>setName('A')</Code>)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr;</p>
              <p>[4] Component Re-renders</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&darr;</p>
              <p>[5] Input <Code>value</Code> Prop is 'A' (Input displays 'A')</p>
              <p className="mt-1 font-semibold text-green-600">The State always dictates the Input's visible value.</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">TCS</strong>, <strong className="text-gray-900">Wipro</strong>, <strong className="text-gray-900">Capgemini</strong>. They demand knowledge of controlled vs. uncontrolled forms.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "Explain the Controlled Component principle."
                <ul className="list-disc ml-6 mt-1">
                  <li>"A controlled input's value is entirely driven by React state. Every keystroke triggers an <Code>onChange</Code> event, which updates state, which re-renders the component, which pushes the new value back to the input's <Code>value</Code> prop. This gives React full control over the form data."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "When might you use an Uncontrolled Component?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"For file inputs (<Code>type="file"</Code>) or when integrating with non-React libraries, it can be easier to let the DOM manage the value and access it only on submission using <Code>useRef</Code>."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Setting an <Code>onChange</Code> handler but forgetting to set the <Code>value</Code> prop (or vice versa). This breaks the controlled flow.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What two props are mandatory for a standard controlled input?</li>
            <li>What handles form data in an Uncontrolled Component?</li>
            <li>Where should manual form validation logic typically be executed?</li>
            <li>What Hook is used to retrieve data from an Uncontrolled Component upon submission?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">Controlled Components</strong> manage input values via React <strong className="text-gray-900">state</strong>.</li>
              <li>Binding requires both <strong className="text-gray-900"><Code>value</Code></strong> and <strong className="text-gray-900"><Code>onChange</Code></strong>.</li>
              <li><strong className="text-gray-900">Uncontrolled Components</strong> use <strong className="text-gray-900"><Code>useRef</Code></strong> to read values directly from the DOM.</li>
              <li>Always call <strong className="text-gray-900"><Code>e.preventDefault()</Code></strong> in the submit handler.</li>
            </ul>
          </div>
        </div>
      );
    case 'component-lifecycle':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.11: Component Lifecycle & Cleanup</h2>

          <NoteSection title="Concept">
            <p>The <strong className="text-gray-900">Component Lifecycle</strong> describes the stages a component goes through: <strong className="text-gray-900">Mounting</strong> (being created and inserted into the DOM), <strong className="text-gray-900">Updating</strong> (being re-rendered due to prop/state changes), and <strong className="text-gray-900">Unmounting</strong> (being removed from the DOM).</p>
            <p>In functional components, the <strong className="text-gray-900"><Code>useEffect</Code> Hook</strong> manages all three phases.</p>
            <h4 className="text-lg font-semibold mt-2">Lifecycle Phases using <Code>useEffect</Code>:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Mounting (Setup):</strong> The effect runs immediately after the *first* render.
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>useEffect(() =&gt; {'{/* Setup logic */}'}, <strong className="text-gray-900">[]</strong>)</Code> (Empty dependency array)</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Updating (Re-run):</strong> The effect runs after the initial mount and after any subsequent render where one of the dependencies has changed.
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>useEffect(() =&gt; {'{/* Re-run logic */}'}, <strong className="text-gray-900">[propName]</strong>)</Code></li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Unmounting (Cleanup):</strong> The effect's <strong className="text-gray-900">return function</strong> is called. It runs right before the component is destroyed (unmounts) OR right before the next effect runs (in the Update phase).
                <ul className="list-disc ml-6 mt-1">
                  <li><Code>return () =&gt; {'{/* Cleanup logic */}'};</Code></li>
                </ul>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mt-4">Why Cleanup is Critical:</h4>
            <p>The cleanup function prevents <strong className="text-gray-900">memory leaks</strong>. If you subscribe to an external service, set a timer, or add a listener, you must stop it when the component leaves the screen. Failure to clean up leads to performance degradation and runtime errors.</p>
          </NoteSection>

          <NoteSection title="Example">
            <p>Example demonstrating cleanup to prevent a memory leak by clearing a timer on unmount.</p>
            <CodeBlock code={`
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. Setup: This runs only once on MOUNT (due to []).
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
      console.log('Timer running...');
    }, 1000);

    // 2. Cleanup: This runs on UNMOUNT.
    // It is vital to stop the interval to prevent it from running 
    // after the component is removed from the DOM.
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleaned up.');
    };
    
  }, []); // Empty dependency array: Mount/Unmount only.

  return (
    <div>
      <p>Time elapsed: {seconds}s</p>
      <p className="text-sm text-gray-500">
        (Try navigating away to see 'Timer cleaned up.' in console)
      </p>
    </div>
  );
}

// Main component to simulate mounting/unmounting
function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Timer (Unmount)' : 'Show Timer (Mount)'}
      </button>
      {show && <Timer />}
    </div>
  );
}

export default App;
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: Lifecycle Mapping to <Code>useEffect</Code></p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p><strong className="text-gray-900">CLASS LIFECYCLE</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong className="text-gray-900">FUNCTIONAL EQUIVALENT</strong></p>
              <p>| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
              <p><strong className="text-green-600">componentDidMount()</strong> &nbsp;&nbsp;&nbsp; &harr; &nbsp;&nbsp;&nbsp; <Code>useEffect(() =&gt; {'{...}'}, <strong className="text-gray-900">[]</strong>)</Code></p>
              <p><strong className="text-blue-600">componentDidUpdate()</strong> &nbsp;&nbsp;&nbsp; &harr; &nbsp;&nbsp;&nbsp; <Code>useEffect(() =&gt; {'{...}'}, <strong className="text-gray-900">[deps]</strong>)</Code></p>
              <p><strong className="text-red-600">componentWillUnmount()</strong> &nbsp; &harr; &nbsp;&nbsp;&nbsp; <Code>return () =&gt; {'{ cleanup }'}</Code> inside <Code>useEffect</Code></p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Amazon</strong>, <strong className="text-gray-900">Infosys</strong>. They test conceptual knowledge of cleanup, even if you never use class components.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "When exactly does the cleanup function run?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"The cleanup function runs in two scenarios: 1) Immediately before the component is <strong className="text-gray-900">unmounted</strong>, and 2) Immediately before the effect is <strong className="text-gray-900">re-executed</strong> (if the dependencies have changed)."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Key Question:</strong> "What is a memory leak in this context?"
                <ul className="list-disc ml-6 mt-1">
                  <li>"A memory leak occurs when a component is destroyed, but its side effects (like intervals or subscriptions) continue to run in the background. They needlessly consume resources and can try to update state on a non-existent component."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Setting up an event listener in <Code>useEffect</Code> but forgetting to call <Code>removeEventListener</Code> in the cleanup function.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>In functional components, what runs during the Unmounting phase?</li>
            <li>What is the primary technical benefit of using a cleanup function?</li>
            <li>Which class lifecycle method is equivalent to <Code>useEffect</Code> with an empty dependency array?</li>
            <li>When does the cleanup function run during the "Update" phase?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-gray-900">Lifecycle</strong> is managed by <strong className="text-gray-900"><Code>useEffect</Code></strong> and its dependency array.</li>
              <li><strong className="text-gray-900">Cleanup</strong> is critical to prevent <strong className="text-gray-900">memory leaks</strong>.</li>
              <li>The cleanup function is defined by <strong className="text-gray-900"><Code>return () =&gt; {'{...}'}</Code></strong> inside the effect.</li>
              <li>Cleanup runs on unmount and before subsequent effect runs.</li>
            </ul>
          </div>
        </div>
      );
    case 'react-mini-projects':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">6.12: React Mini Projects: Core Skill Application</h2>

          <NoteSection title="Concept">
            <p>Mini projects serve as the ultimate test of foundational React knowledge. They require the synthesis of <strong className="text-gray-900">Props, State, Events, and Conditional Rendering</strong> to solve a practical problem. Focusing on these projects proves you can move from theoretical knowledge to deployable code.</p>
            <h4 className="text-lg font-semibold mt-2">Projects & Associated Skills:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">To-Do List:</strong> Tests <Code>useState</Code> for array manipulation, list rendering with <Code>key</Code>, and event handling for adding/deleting items.</li>
              <li><strong className="text-gray-900">Simple Calculator:</strong> Tests complex state management (storing numbers and operations) and controlled component input.</li>
              <li><strong className="text-gray-900">Quiz/Survey App:</strong> Tests state management for user answers, conditional rendering for changing pages, and props for passing questions down.</li>
              <li><strong className="text-gray-900">Weather App (API Fetch):</strong> Tests <Code>useEffect</Code> for data fetching and cleanup, and optional error state management.</li>
            </ul>
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p className="font-semibold">Diagram: Mini Project Skill Integration</p>
            <div className="font-mono p-4 bg-gray-100 rounded">
              <p>&lt;App /&gt;</p>
              <p>| &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; |</p>
              <p>V &nbsp;&nbsp;&nbsp;&nbsp; V &nbsp;&nbsp;&nbsp;&nbsp; V &nbsp;&nbsp;&nbsp;&nbsp; V</p>
              <p>State (useState) &harr; Event Handlers &harr; Component Logic &harr; Side Effects (useEffect)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V</p>
              <p className="font-semibold text-blue-600">Conditional/List Rendering (JSX Output)</p>
            </div>
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Companies:</strong> <strong className="text-gray-900">Amazon</strong>, <strong className="text-gray-900">Wipro</strong>, <strong className="text-gray-900">TCS (Technical Round)</strong>. Projects move you past the screening stage.</li>
              <li><strong className="text-gray-900">Key Question:</strong> "Walk me through the state and logic for your To-Do List app."
                <ul className="list-disc ml-6 mt-1">
                  <li>"I store the todos as an <strong className="text-gray-900">array of objects</strong> in state. To add a new item, I <strong className="text-gray-900">spread the existing array</strong> and add the new object using <Code>setTodos([...prev, newItem])</Code>, ensuring <strong className="text-red-600">immutability</strong>."</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Focus on Immutability:</strong> The most crucial concept tested in project discussions is the ability to update state immutably (never use <Code>push()</Code> or direct assignment).</li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Candidates can explain Hooks but fail to structure a real-world app (e.g., keeping all logic in one massive component instead of splitting it into smaller components).</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What React concept is most important when deleting an item from a state array?</li>
            <li>What Hook is required to perform data fetching for a Weather App?</li>
            <li>What is the name for the pattern where you store the input value in state?</li>
            <li>What is the purpose of the key prop in the <Code>map()</Code> function for a To-Do list?</li>
          </QuizSection>

          <div className="mt-8 pt-4 border-t-2 border-gray-900">
            <h3 className="text-xl font-semibold mb-2">Quick Recap</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Mini projects prove <strong className="text-gray-900">integration skills</strong>.</li>
              <li>Always update state <strong className="text-gray-900">immutably</strong> (use spread operator <Code>...</Code>).</li>
              <li>Split project features into small, reusable <strong className="text-gray-900">components</strong>.</li>
              <li>Required skills: <strong className="text-gray-900"><Code>useState</Code></strong>, <strong className="text-gray-900"><Code>useEffect</Code></strong>, List rendering, and Controlled Forms.</li>
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

export default Chapter6Part2;