import React, { useState, useEffect, useContext, useRef, createContext } from 'react';
// Note: 'react-router-dom' is a separate install: npm install react-router-dom
// We import them here so the examples are contextually correct.
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

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

// --- Main Chapter 6, Part 2 Component ---

const Chapter6Part2 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'conditional-rendering':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.7: Conditional Rendering & Lists</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Doorman</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>conditional render</strong> is like a doorman at a club. The doorman checks your name (the <strong>condition</strong>).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Ternary Operator:</strong> If you're on the list (<code>true</code>), you see the <code>&lt;Welcome /&gt;</code> component. If not (<code>false</code>), you see the <code>&lt;Login /&gt;</code> component.</li>
              <li><strong>Logical AND (<code>&amp;&amp;</code>):</strong> The doorman <em>only</em> lets you in if you're on the list. If you're not, he does nothing and you see nothing.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Conditional Rendering</strong> is the process of displaying different JSX based on a condition (a prop or state).</p>
            <p><strong>Techniques (inside JSX):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Ternary Operator:</strong> Best for <code>if/else</code> logic.
                <br/><Code>{'{'}isLoggedIn ? &lt;Dashboard /&gt; : &lt;LoginForm /&gt;{'}'}</Code>
              </li>
              <li><strong>Logical AND Operator (<code>&amp;&amp;</code>):</strong> Best for <code>if</code> logic (with no else).
                <br/><Code>{'{'}unreadMessages &gt; 0 &amp;&amp; &lt;Notification /&gt;{'}'}</Code>
              </li>
            </ul>
            <p><strong>Techniques (outside JSX):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>You can use a full <code>if/else</code> statement <em>before</em> your `return` statement to decide what to render.</li>
              <li>Returning <code>null</code> from a component will render nothing.</li>
            </ul>
            
            <p className="mt-4"><strong>Rendering Lists:</strong></p>
            <p>You must use the JavaScript <strong><code>.map()</code></strong> method to transform an array of data into an array of JSX elements.</p>
            <p><strong>The `key` Prop:</strong> This is a <strong>critical, mandatory rule</strong>. When rendering a list, you must provide a <code>key</code> prop to the root element inside the map.
              <ul className="list-disc ml-6 mt-2">
                <li>The <code>key</code> must be a <strong>string or number</strong> that is <strong>stable and unique</strong> among its siblings.</li>
                <li><strong>Best Practice:</strong> Use a unique ID from your data (e.g., `item.id`).</li>
                <li><strong>Anti-Pattern:</strong> Do <em>not</em> use the array `index` as a key if the list can be re-ordered, filtered, or have items added/deleted. This can cause major bugs with state and UI updates.</li>
              </ul>
            </p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Conditional List with Keys</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This component renders a list of users, but only if the user is logged in and the list isn't empty.</p>
            <CodeBlock code={`
import React from 'react';

type User = {
  id: number;
  name: string;
};

type UserListProps = {
  isLoggedIn: boolean;
  users: User[];
};

function UserList({ isLoggedIn, users }: UserListProps) {
  // 1. Conditional (early return)
  if (!isLoggedIn) {
    return <p>Please log in to see the user list.</p>;
  }

  // 2. Conditional (Ternary)
  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        // 3. Conditional (Logical AND could also work here)
        <p>No users found.</p>
      ) : (
        // 4. List Rendering with .map() and key
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Example usage in App.tsx
function App() {
  const mockUsers = [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Bob' },
  ];
  
  return <UserList isLoggedIn={true} users={mockUsers} />;
}

export default App;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Why is using the array `index` as a `key` so bad?</strong>
                <p className="pl-4">React uses keys to track the <em>identity</em> of each element. If you have a list `[A, B, C]` and you delete `A`, the list becomes `[B, C]`. If you used indexes, React sees `index 0` (now `B`) and `index 1` (now `C`). It thinks you just <em>mutated</em> `A` into `B` and `B` into `C`, and deleted `C`. This will break any state inside the `li` components. A stable ID (`item.id`) tells React, "Item A was deleted, B and C are unchanged."</p>
              </li>
              <li>
                <strong>How do I render <em>nothing</em>?</strong>
                <p className="pl-4">Return <code>null</code>. For example: <code>if (!show) {'{'} return null; {'}'}</code>. This is a common pattern for hiding components.</p>
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
    case 'react-hooks':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.8: React Hooks (useEffect, useContext, useRef)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Component's "Utility Belt"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>If a functional component is a superhero, <strong>Hooks</strong> are its utility belt. They are functions (all starting with `use`) that let you add "powers" to your simple function.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><code>useState</code>:</strong> Gives your component "Memory" (state).</li>
              <li><strong><code>useEffect</code>:</strong> Gives your component "Super-Hearing" to listen for things <em>outside</em> of itself (like an API call finishing, or the component "dying").</li>
              <li><strong><code>useContext</code>:</strong> Gives your component "Telepathy" to read global data from a provider far away, without needing props.</li>
              <li><strong><code>useRef</code>:</strong> Gives your component a "Grappling Hook" to get a direct reference to a DOM element (like an input field).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Hooks</strong> are functions that let you "hook into" React state and lifecycle features from functional components.</p>
            <p><strong>The Rules of Hooks (CRITICAL):</strong></p>
            <ol className="list-decimal ml-6 space-y-1">
              <li><strong>Only call Hooks at the top level.</strong> Do <em>not</em> call them inside loops, conditions, or nested functions.</li>
              <li><strong>Only call Hooks from React functional components</strong> (or from your own custom Hooks).</li>
            </ol>
            <p><strong>Key Hooks (Beyond `useState`):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><code>useEffect(fn, [deps])</code>:</strong> The "Effect" Hook. It's for <em>side effects</em> (data fetching, timers, subscriptions).
                <ul className="list-disc ml-6 mt-2">
                  <li><strong><code>fn</code>:</strong> The function to run.</li>
                  <li><strong><code>[deps]</code> (Dependency Array):</strong> Controls <em>when</em> the effect runs.
                    <ul className="list-disc ml-6 mt-2">
                      <li><code>[]</code> (Empty Array): Runs once when the component "mounts". Perfect for initial data fetching.</li>
                      <li><code>[prop, state]</code>: Runs on mount <em>and</em> any time `prop` or `state` changes.</li>
                      <li>(No Array): Runs after <em>every single render</em>. (Usually a bug!)</li>
                    </ul>
                  </li>
                  <li><strong>Cleanup Function:</strong> The function you `return` from your effect. React runs this on "unmount" to prevent memory leaks (e.g., `clearInterval`).</li>
                </ul>
              </li>
              <li><strong><code>useContext(MyContext)</code>:</strong> Consumes data from a React Context. It finds the nearest <Code>&lt;MyContext.Provider&gt;</Code> above it in the tree and returns its `value`.</li>
              <li><strong><code>useRef(initialValue)</code>:</strong> Returns a mutable ref object (<Code>{'{'} current: initialValue {'}'}</Code>).
                <ul className="list-disc ml-6 mt-2">
                  <li>1. Accessing a DOM element (e.g., to focus an input).</li>
                  <li>2. Storing a mutable value (like a timer ID) that <em>does not</em> cause a re-render when changed.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: `useEffect` (Data Fetch) & `useRef` (Focus)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This component fetches data when it mounts (`useEffect`) and automatically focuses the input field (`useRef`).</p>
            <CodeBlock code={`
import React, { useState, useEffect, useRef } from 'react';

function DataFetcher() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Create a ref to attach to the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // 2. useEffect for data fetching
  // The empty array [] means this runs ONCE on mount.
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(quoteData => {
        setData(quoteData);
        setIsLoading(false);
      });
    
    // We can also focus the input on mount
    // 'inputRef.current' holds the actual DOM node
    if (inputRef.current) {
      inputRef.current.focus();
    }

  }, []); // <-- Empty dependency array

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      {/* 3. Attach the ref to the input's 'ref' prop */}
      <input ref={inputRef} type="text" placeholder="I am focused!" />
      
      <p style={{ fontStyle: 'italic', marginTop: '20px' }}>
        "{data.content}" - {data.author}
      </p>
    </div>
  );
}

export default DataFetcher;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's a "side effect" in React?</strong>
                <p className="pl-4">A side effect is any code that affects something <em>outside</em> of the component itself. This includes: fetching data from an API, setting a `setInterval` or `setTimeout`, manually changing the DOM, or reading/writing to `localStorage`.</p>
              </li>
              <li>
                <strong>What's a "memory leak" and how does the cleanup function stop it?</strong>
                <p className="pl-4">A memory leak happens when a component unmounts, but a process it started (like a `setInterval` timer) keeps running forever, consuming memory. The `useEffect` cleanup function (the `return` function) is React's guarantee that it will run a piece of code <em>right before</em> the component is destroyed, giving you a chance to call `clearInterval` and prevent the leak.</p>
              </li>
              <li>
                <strong>What's the difference between `useRef` and `useState`?</strong>
                <p className="pl-4">Updating <strong>state</strong> with its setter function (e.g., `setCount(1)`) **causes the component to re-render**. Updating a <strong>ref</strong>'s `.current` value (e.g., `myRef.current = 1`) **does not** cause a re-render. `useRef` is for values you want to "keep track of" without triggering a UI update.</p>
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
    case 'react-router':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.9: React Router for Navigation</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Fake" Hallway</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A traditional website is like a "village" of separate houses. To go from the "Home" house to the "About" house, you must go outside and walk down the street (a full page reload).</p>
            <p>A <strong>Single Page Application (SPA)</strong> is a "mansion" with only <em>one</em> front door. <strong>React Router</strong> is the <em>internal hallway system</em>. When you click a <Code>&lt;Link&gt;</Code>, you don't go outside. The router just leads you to a different <em>room</em> (component) inside the same mansion and <em>fakes</em> the URL in your browser to make it look like you moved. This is called <strong>client-side routing</strong> and is much faster.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>React Router</strong> is the standard library for handling navigation in a React SPA. It maps URL paths to your components.</p>
            <p><strong>Core Components (v6):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><code>&lt;BrowserRouter&gt;</code>:</strong> The parent component that "enables" routing. You must wrap your <em>entire</em> app (usually in `index.tsx`) with it.</li>
              <li><strong><code>&lt;Routes&gt;</code>:</strong> A container that holds all your individual routes.</li>
              <li><strong><code>&lt;Route /&gt;</code>:</strong> The component that defines a single mapping. It has two main props:
                <ul className="list-disc ml-6 mt-2">
                  <li><code>path="/about"</code>: The URL path to match.</li>
                  <li><code>element={'{'}&lt;AboutPage /&gt;{'}'}</code>: The component to render for that path.</li>
                </ul>
              </li>
              <li><strong><code>&lt;Link&gt;</code>:</strong> Your navigation tool. It's a replacement for the `&lt;a&gt;` tag.
                <ul className="list-disc ml-6 mt-2">
                  <li>It uses <code>to="/about"</code> instead of `href`.</li>
                  <li>It <strong>prevents the default page reload</strong> and just changes the URL, letting React Router handle the rest.</li>
                </ul>
              </li>
            </ul>
            <p><strong>Core Hooks:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><code>useParams()</code>:</strong> Used to extract dynamic parameters from the URL (e.g., from a path like `/user/:id`).</li>
              <li><strong><code>useNavigate()</code>:</strong> Gives you a function to programmatically navigate (e.g., after a form submission).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Multi-Page App with a Dynamic Route</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>First, run <Code>npm install react-router-dom</Code>. This example shows a complete routing setup.</p>
            <CodeBlock code={`
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// 1. Define your "page" components
const Home = () => <h2>Welcome Home!</h2>;
const About = () => <h2>About Us Page</h2>;
const NotFound = () => <h2 style={{ color: 'red' }}>404 Page Not Found</h2>;

// 2. A component for a dynamic route
const UserProfile = () => {
  // 3. Use the useParams hook to get the ':id' from the URL
  const { id } = useParams();
  return <p>Displaying profile for User ID: {id}</p>;
};

function App() {
  return (
    // 4. Wrap the *entire app* in <BrowserRouter>
    <BrowserRouter>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        {/* 5. Use <Link> for navigation, not <a> */}
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/user/123">User 123</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        {/* 6. <Routes> holds all <Route> definitions */}
        <Routes>
          {/* 7. Define each route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* 8. This is a dynamic route. ':id' is a parameter. */}
          <Route path="/user/:id" element={<UserProfile />} />
          
          {/* 9. A "catch-all" route for 404s. Must be last. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// In your index.tsx, you would just render <App />
export default App;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Why use <code>&lt;Link&gt;</code> instead of <code>&lt;a href...&gt;</code>?</strong>
                <p className="pl-4">An <code>&lt;a href...&gt;</code> tag causes a <strong>full page reload</strong>. This is the default browser behavior. It re-downloads all HTML, CSS, and JS, and <em>destroys</em> your React application's state. The <code>&lt;Link&gt;</code> component intercepts the click, prevents the page reload, and just updates the URL in the address bar. This tells React Router to swap components, all on the client-side.</p>
              </li>
              <li>
                <strong>How do I redirect a user after they log in?</strong>
                <p className="pl-4">You use the <code>useNavigate</code> hook.
                <br/>1. At the top of your component: <Code>const navigate = useNavigate();</Code>
                <br/>2. In your login handler: <Code>navigate('/dashboard');</Code></p>
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
    case 'forms-validation':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.10: Forms & Form Validation in React</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Controlled" Input</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A normal HTML input is "uncontrolled." It's like a public suggestion box—people can write anything, and you only check it <em>after</em> they submit.</p>
            <p>A React <strong>Controlled Component</strong> is like a high-security input where every keystroke is monitored.
            <br/>1. The user types a letter (`'a'`).
            <br/>2. The `onChange` event fires and tells React, "The user <em>wants</em> to type 'a'."
            <br/>3. React (your code) decides if that's "allowed."
            <br/>4. React updates its `state` to `"a"`.
            <br/>5. The component re-renders, and React tells the input, "Your value is now `'a'`."
            <br/>The React <strong>state</strong> is the "single source of truth," not the DOM.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Controlled Components</strong> are the standard pattern for handling forms in React. The form input's value is "controlled" by React state.</p>
            <p><strong>The Two-Way Data Binding:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>State to Input:</strong> The input's `value` prop is set from a `useState` variable.
                <br/><Code>{'<input value={name} ... />'}</Code>
              </li>
              <li><strong>Input to State:</strong> The input's `onChange` prop calls the `useState` setter.
                <br/><Code>{'onChange={e => setName(e.target.value)}'}</Code>
              </li>
            </ol>
            <p><strong>Form Validation:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>You don't validate the DOM; you validate the <strong>state</strong>.</li>
              <li>Create a <em>second</em> piece of state to hold error messages (e.g., `const [errors, setErrors] = useState({})`).</li>
              <li>Run your validation logic inside the `onSubmit` handler (or `onChange` for instant feedback).</li>
              <li>If there are errors, update the `errors` state.</li>
              <li>Conditionally render the errors in your JSX: <Code>{'{'}errors.name &amp;&amp; <p>{'{'}errors.name{'}'}</p>{'}'}</Code></li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Controlled Form with Validation</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This form validates for an empty name and an invalid email on submit.</p>
            <CodeBlock code={`
import React, { useState } from 'react';

// Type for our form data
type FormData = {
  name: string;
  email: string;
};

// Type for our errors
type FormErrors = {
  name?: string;
  email?: string;
};

function ControlledForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  // A generic handler that updates the correct piece of state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value, // Compute property name
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ALWAYS prevent default
    const newErrors: FormErrors = {};

    // 1. Validation Logic
    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'A valid email is required.';
    }

    // 2. Update errors state
    setErrors(newErrors);

    // 3. Check if there are any errors
    if (Object.keys(newErrors).length === 0) {
      alert('Form Submitted: ' + JSON.stringify(formData));
      // ... send to API
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', maxWidth: '300px' }}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}    // 1. State -> Input
          onChange={handleChange}  // 2. Input -> State
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's an "uncontrolled" component?</strong>
                <p className="pl-4">It's the alternative, where you <em>don't</em> use state. You let the DOM store the value, and you use a `useRef` to "pull" the value from the input <em>only</em> when the form is submitted. It's simpler for very basic forms, but "controlled" is the standard pattern.</p>
              </li>
              <li>
                <strong>This seems like a lot of work for a big form. Is there a better way?</strong>
                <p className="pl-4">Yes. For any form with more than 2-3 fields, managing all the `useState` hooks and error objects is tedious. This is why developers use form libraries. The two most popular are <strong>React Hook Form</strong> and <strong>Formik</strong>. They handle all the state, validation, and submission logic for you.</p>
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
    case 'component-lifecycle':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.11: Component Lifecycle & Cleanup</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Component's "Life"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A React component has a "life" with three distinct phases, just like a person:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Birth (Mounting):</strong> The component is created and inserted into the DOM for the first time.</li>
              <li><strong>Life (Updating):</strong> The component "lives" on the page and re-renders whenever its `props` or `state` change.</li>
              <li><strong>Death (Unmounting):</strong> The component is removed from the DOM (e.g., you navigate to a new page).</li>
            </ol>
            <p>The <code>useEffect</code> hook is your tool to run code <em>during</em> these specific life moments.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>In modern functional components, the entire lifecycle is managed by the <strong><code>useEffect</code></strong> hook.</p>
            <p><strong>Lifecycle Phases using <code>useEffect</code>:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>1. Mounting (Birth):</strong>
                <br/>This code runs <em>once</em> after the component first renders.
                <br/><Code>useEffect(() ={'>'} {'{'} /* Run on mount */ {'}'}, <strong>[]</strong>)</Code> (The empty dependency array is key).
                <br/><strong>Use Case:</strong> Initial data fetching, setting up timers.
              </li>
              <li><strong>2. Updating (Life):</strong>
                <br/>This code runs on mount <em>and</em> any time a variable in the dependency array changes.
                <br/><Code>useEffect(() ={'>'} {'{'} /* Run when id changes */ {'}'}, <strong>[id]</strong>)</Code>
                <br/><strong>Use Case:</strong> Re-fetching data when a `prop` (like `id`) changes.
              </li>
              <li><strong>3. Unmounting (Death):</strong>
                <br/>This is the <strong>cleanup function</strong>. You `return` it from your effect.
                <br/><Code>useEffect(() ={'>'} {'{'} ...; return () ={'>'} {'{'} /* Cleanup */ {'}'} {'}'}, [])</Code>
                <br/>React runs this function <em>just before</em> the component is destroyed.
                <br/><strong>CRITICAL:</strong> You <em>must</em> use this to clean up any timers, listeners, or subscriptions to prevent <strong>memory leaks</strong>.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: `useEffect` with a Timer & Cleanup</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example shows a `Timer` component that uses `useEffect` to set up an interval (Mounting) and, crucially, clears that interval in a cleanup function (Unmounting) to prevent a memory leak.</p>
            <CodeBlock code={`
import React, { useState, useEffect } from 'react';

// --- Child Component ---
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. Setup (Mounting): This code runs ONCE
    console.log('Timer mounted. Starting interval...');
    
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // 2. Cleanup (Unmounting): This function is returned
    // React will run this when the Timer component is removed.
    return () => {
      console.log('Timer unmounting. Clearing interval!');
      clearInterval(intervalId); // <-- This prevents the memory leak!
    };
    
  }, []); // <-- Empty array = "Run on Mount"

  return <h2>Timer: {seconds}s</h2>;
}

// --- Parent Component ---
function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide Timer (Unmount)' : 'Show Timer (Mount)'}
      </button>
      
      {/* When 'showTimer' is true, <Timer /> is MOUNTED.
        When 'showTimer' is false, <Timer /> is UNMOUNTED.
      */}
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's a "memory leak" in React?</strong>
                <p className="pl-4">It's when a component *unmounts*, but a process it started (like a `setInterval` or a web socket subscription) *keeps running* in the background. This process might try to update state on a component that no longer exists, which causes an error and wastes system resources.</p>
              </li>
              <li>
                <strong>When *exactly* does the cleanup function run?</strong>
                <p className="pl-4">It runs in two scenarios: 1) when the component is about to be **unmounted** (destroyed), and 2) *before* the effect runs again on an **update** (if the dependencies have changed). This ensures the previous effect is always cleaned up before the new one is set.</p>
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
    case 'react-mini-projects':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.12: React Mini Projects</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Final Exam"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Learning `useState`, `props`, and `useEffect` individually is like learning grammar rules. Building a "To-Do List" is like writing your first full essay.</p>
            <p>It's the "final exam" that forces you to *combine* all the individual concepts (state, props, events, lists, conditionals) to build a single, functional application. This is what separates a "student" from a "developer."</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Mini-projects are where you prove you can *synthesize* React's core concepts into a working product. The most important skill they test is your understanding of <strong>state management and data flow</strong>.</p>
            <p><strong>Key Skills to Demonstrate:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Component Structure:</strong> Can you break a UI down into small, reusable components? (e.g., `TodoList`, `TodoItem`, `AddTodoForm`).</li>
              <li><strong>State Colocation:</strong> Do you know *where* state should live? (e.g., The `todos` array must live in the *parent* component, `TodoList`, so it can be passed down).</li>
              <li><strong>Props & Callbacks:</strong> Can you pass data (like a single `todo`) *down* as props, and pass functions (like `handleDelete`) *down* as props to let a child communicate with its parent?</li>
              <li><strong>Immutability:</strong> Can you *safely* update state? When adding/deleting a todo, you must create a *new* array.</li>
            </ol>
            <p><strong>The Golden Rule: Update State Immutably</strong></p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Wrong (Mutation):</strong> <Code>todos.push(newTodo); setTodos(todos);</Code></li>
              <li><strong>Right (New Array):</strong> <Code>setTodos([...todos, newTodo]);</Code></li>
              <li><strong>Wrong (Mutation):</strong> <Code>const index = ...; todos.splice(index, 1);</Code></li>
              <li><strong>Right (New Array):</strong> <Code>setTodos(todos.filter(t {'=>'} t.id !== id));</Code></li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: To-Do List Core Logic</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows the *core logic* for a to-do list, demonstrating state, immutability, and event handling in one component.</p>
            <CodeBlock code={`
import React, { useState } from 'react';

// Define the type for a single todo item
type Todo = {
  id: number;
  text: string;
};

function TodoList() {
  // State for the list of all todos
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
  ]);
  
  // State for the *controlled input*
  const [newTodoText, setNewTodoText] = useState('');

  // Add a new todo (immutable update)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return; // Don't add empty todos

    const newTodo: Todo = {
      id: Date.now(), // Simple unique ID
      text: newTodoText,
    };
    
    // Create a new array using the spread operator
    setTodos([...todos, newTodo]);
    setNewTodoText(''); // Clear the input
  };

  // Delete a todo (immutable update)
  const handleDelete = (idToDelete: number) => {
    // .filter() creates a new array, which is immutable
    setTodos(todos.filter(todo => todo.id !== idToDelete));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newTodoText}
          onChange={e => setNewTodoText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: '10px' }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Why is immutability so important in React?</strong>
                <p className="pl-4">React decides when to re-render by comparing the *reference* of the old state and the new state. If you *mutate* an array (like with `.push()`), the *reference* to the array in memory doesn't change. React compares the old and new array, sees the same reference, and *incorrectly assumes nothing changed*, so it <strong>skips the re-render</strong>. Creating a new array (with `[...todos]` or `.filter()`) gives React a new reference, which signals it to update the UI.</p>
              </li>
              <li>
                <strong>How would I split this To-Do list into components?</strong>
                <p className="pl-4">You would create a <Code>&lt;TodoItem /&gt;</Code> component. The <Code>&lt;TodoList /&gt;</Code> component would map over the `todos` array and render a <Code>&lt;TodoItem /&t;</Code> for each one, passing the `todo` object and the `handleDelete` function down as <em>props</em>.</p>
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

export default Chapter6Part2;