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

// --- Main Chapter 6, Part 1 Component ---

const Chapter6Part1 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'introduction-to-react':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.1: Introduction to React & Virtual DOM</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The High-Speed Blueprint</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Imagine the <strong>Real DOM</strong> is a heavy, physical blueprint of a house. Changing it is slow—you have to erase, redraw, and it's a lot of work.</p>
            <p>The <strong>Virtual DOM (VDOM)</strong> is a lightweight, digital copy of that blueprint on a computer. When you want to make a change, React does the following:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>It creates a <em>new</em> digital blueprint with your changes.</li>
              <li>It runs a "diffing" algorithm to instantly compare the new digital blueprint with the old one.</li>
              <li>It finds the <em>one</em> tiny change (e.g., "the kitchen window moved") and creates a minimal "patch".</li>
              <li>It applies <em>only that patch</em> to the heavy, physical blueprint, instead of redrawing the whole thing. This is dramatically faster.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>React</strong> is a JavaScript <strong>library</strong> (not a framework) for building user interfaces. Its primary goal is to efficiently render and update UI components.</p>
            <p>The <strong>Virtual DOM (VDOM)</strong> is the core concept that makes React fast. It is a lightweight JavaScript object representation of the real browser DOM kept in memory.</p>
            <p><strong>Reconciliation (The Process):</strong></p>
            <ol className="list-decimal ml-6 space-y-1">
              <li><strong>State Change:</strong> A component's state (e.g., `useState`) changes.</li>
              <li><strong>New VDOM:</strong> React creates a new VDOM tree in memory.</li>
              <li><strong>Diffing:</strong> React compares this new VDOM tree with the previous VDOM "snapshot". This comparison is done using a fast <strong>diffing algorithm</strong>.</li>
              <li><strong>Patching:</strong> React identifies the <strong>exact minimal changes</strong> needed to make the real DOM match the new VDOM.</li>
              <li><strong>Batch Update:</strong> React updates the real DOM with <em>only those changes</em>, in a single "batch" operation.</li>
            </ol>
            <p>This process avoids slow and expensive direct manipulation of the real DOM, leading to much better performance.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Live VDOM Demo</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a runnable HTML file. You can save this as <Code>index.html</Code> and open it in your browser. It loads React and Babel to demonstrate the VDOM. Notice how only the number in the <Code>&lt;p&gt;</Code> tag changes when you click, not the whole page.</p>
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
<body style="font-family: sans-serif; padding: 20px;">

  <div id="root"></div>

  <script type="text/babel">
    const { useState } = React;

    function Counter() {
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

    const domNode = document.getElementById('root');
    const root = ReactDOM.createRoot(domNode);
    root.render(<Counter />);
  </script>

</body>
</html>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is the Virtual DOM and why is it faster?</strong>
                <p className="pl-4">The VDOM is a lightweight JavaScript object copy of the real DOM. It's faster because manipulating JavaScript objects in memory is extremely fast, while manipulating the <em>real</em> DOM is very slow (it causes browser reflow and repaint). React does all its "diffing" work in the VDOM and then applies one minimal patch to the real DOM.</p>
              </li>
              <li>
                <strong>What is "Reconciliation"?</strong>
                <p className="pl-4">Reconciliation is the <em>entire process</em> of how React updates the UI. It includes creating the new VDOM, running the "diffing" algorithm to find changes, and "patching" the real DOM with those minimal changes.</p>
              </li>
              <li>
                <strong>Is React a framework or a library?</strong>
                <p className="pl-4">React is a <strong>library</strong>. A framework (like Angular) is a complete solution that dictates your app's structure. A library (like React) is a specialized tool that you use to handle <em>one part</em> of your app (in this case, the view layer). You have to add other libraries (like React Router) to build a full application.</p>
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
    case 'create-react-app':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.2: Create React App & Project Structure</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Project "Wizard"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Starting a new React project from scratch is incredibly complex. You'd need to manually install and configure dozens of tools like <strong>Webpack</strong> (to bundle files), <strong>Babel</strong> (to compile JSX), and a <strong>dev server</strong> (to see your changes).</p>
            <p><strong>Create React App (CRA)</strong> is a "wizard" tool. You run one command, and it does <em>all</em> of that setup for you, giving you a perfectly configured, ready-to-code project in seconds.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Create React App (CRA)</strong> is the official command-line tool for scaffolding a new single-page React application. It provides a complete, pre-configured build setup with no manual configuration needed.</p>
            <p><strong>Key Project Files/Folders:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><Code>node_modules/</Code>: Contains all the third-party libraries (dependencies).</li>
              <li><Code>public/index.html</Code>: The <strong>one and only HTML file</strong> for your app. Your entire React app is injected into the <Code>{'<div>'}</Code> inside this file.</li>
              <li><Code>src/index.tsx</Code>: The <strong>JavaScript entry point</strong>. This file finds the `root` div and tells React to render your <Code>{'<App />'}</Code> component inside it.</li>
              <li><Code>src/App.tsx</Code>: The main <strong>root component</strong> of your application. This is where you start building.</li>
              <li><Code>package.json</Code>: The "manifest" file. It lists all your dependencies (like `react`) and defines your scripts (like `npm start`).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Core CRA Commands</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>You run these commands in your terminal.</p>
            <CodeBlock code={`
# 1. Create a new React app with TypeScript
# 'npx' runs the command without installing it globally
npx create-react-app my-app --template typescript

# 2. Move into the new project directory
cd my-app

# 3. Start the development server
# This opens your app at http://localhost:3000
npm start

# 4. (When you are ready to deploy)
# This creates a 'build' folder with optimized, static files
npm run build
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is the purpose of <Code>package.json</Code>?</strong>
                <p className="pl-4">It's the "ID card" for the project. It lists the project's name, version, and, most importantly, all the `dependencies` (libraries it needs to run) and `devDependencies` (tools used for development). It also defines the `scripts` you can run, like `npm start` and `npm run build`.</p>
              </li>
              <li>
                <strong>What's the difference between <Code>public/index.html</Code> and <Code>src/index.tsx</Code>?</strong>
                <p className="pl-4"><Code>public/index.html</Code> is the "shell" or "frame"—the only HTML page that ever gets loaded. <Code>src/index.tsx</Code> is the "spark"—the JavaScript file that boots up React and injects the main <Code>{'<App />'}</Code> component into the <Code>{'<div id="root"></div>'}</Code> of the HTML file.</p>
              </li>
              <li>
                <strong>Is Create React App the only way? What is Vite?</strong>
                <p className="pl-4">CRA is the official, stable tool. However, a newer tool called <strong>Vite</strong> (<Code>npm create vite@latest</Code>) is now extremely popular because it is <em>much</em> faster. It uses native ES modules to serve code instantly, while CRA (which uses Webpack) has to re-bundle your entire app on every change.</p>
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
    case 'jsx-syntax':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.3: JSX Syntax & Components</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Recipe" for the UI</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>JSX (JavaScript XML)</strong> is a "recipe" for your UI that looks like the finished "cake" (HTML). You write what <em>looks</em> like HTML, but you're actually writing in JavaScript. A tool called <strong>Babel</strong> acts as the "translator," converting your easy-to-read JSX recipe into highly efficient, plain JavaScript (<Code>React.createElement()</Code>) that the browser can understand.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Components</strong> are the core building blocks of React. They are reusable, self-contained pieces of UI. In modern React, a component is just a JavaScript function that returns JSX.</p>
            <p><strong>Key JSX Rules (Critical to memorize):</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Single Root Element:</strong> A component must return <em>one</em> top-level element. If you have multiple, wrap them in a <Code>{'<div>'}</Code> or, preferably, a <strong>Fragment</strong> (<Code>{'<>...</>'}</Code>).</li>
              <li><strong>camelCase Attributes:</strong> HTML attributes are converted to camelCase.
                <ul className="list-disc ml-6 mt-2">
                  <li>`class` becomes <Code>className</Code> (because `class` is a reserved word in JS).</li>
                  <li>`for` becomes <Code>htmlFor</Code> (same reason).</li>
                  <li>`onclick` becomes <Code>onClick</Code>.</li>
                </ul>
              </li>
              <li><strong>JavaScript in Braces <Code>{'{'}{'}'}</Code>:</strong> You can embed any JavaScript <em>expression</em> inside curly braces. This includes variables, function calls (`myFunc()`), and ternary operators (`isLoggedIn ? 'Yes' : 'No'`).</li>
              <li><strong>Statements Don't Work:</strong> You <em>cannot</em> put JavaScript <em>statements</em> (like `if/else`, `for`, `switch`) inside JSX braces.</li>
              <li><strong>Self-Closing Tags:</strong> Tags that don't have children (like <Code>{'<img>'}</Code>, <Code>{'<br />'}</Code>, <Code>{'<input />'}</Code>) <em>must</em> be self-closed with a `/`: <Code>{'<img ... />'}</Code>.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Functional Component with JSX</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A runnable <Code>App.tsx</Code> file demonstrating components and JSX rules.</p>
            <CodeBlock code={`
import React from 'react';

// Define the type for our props
type UserProfileProps = {
  name: string;
  job: string;
  isAdmin: boolean;
};

// 1. A Functional Component (just a function that returns JSX)
function UserProfile(props: UserProfileProps) {
  
  // 2. JavaScript variable
  const userRole = props.job.toUpperCase(); 

  return (
    // 3. Single Root Element (a div)
    // 4. 'className' (camelCase)
    <div className="user-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      
      {/* 5. JavaScript in Braces */}
      <h2>Name: {props.name}</h2>
      <p>Job: {userRole}</p>

      {/* 6. Ternary operator (an expression) */}
      {props.isAdmin ? <p style={{ color: 'green' }}>Status: Admin</p> : <p>Status: User</p>}

      {/* 7. Self-closing tag */}
      <hr />
    </div>
  );
}

// The main App component
function App() {
  return (
    // 3. Using a Fragment <></> as the root element
    <>
      <h1>User Dashboard</h1>
      {/* We re-use our component just like an HTML tag */}
      <UserProfile name="Priya" job="Engineer" isAdmin={true} />
      <UserProfile name="Rohan" job="Designer" isAdmin={false} />
    </>
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
                <strong>Is JSX required to use React?</strong>
                <p className="pl-4">No. JSX is just "syntactic sugar" for the `React.createElement()` function. Writing <Code>{'<h1>Hello</h1>'}</Code> is just a shortcut for writing `React.createElement('h1', null, 'Hello')`. Nobody writes `React.createElement()` by hand because it's unreadable, but that's what your JSX gets compiled into.</p>
              </li>
              <li>
                <strong>Why do we use <Code>className</Code> instead of <Code>class</Code>?</strong>
                <p className="pl-4">Because JSX is JavaScript, not HTML. When you write JSX, you're in a `.js` or `.tsx` file. In JavaScript, `class` is a reserved keyword used to create a JavaScript class (e.g., `class Person {'{...}'}`). To avoid a syntax conflict, React chose <Code>className</Code>, which Babel compiles to the `class` attribute in the final HTML.</p>
              </li>
              <li>
                <strong>How do I use an `if/else` statement in JSX?</strong>
                <p className="pl-4">You can't directly. `if/else` is a <em>statement</em>, not an <em>expression</em>. You must use a <strong>ternary operator</strong> (e.g., <Code>{'{'}condition ? &lt;A /&gt; : &lt;B /&gt;{'}'}</Code>) or do the logic <em>outside</em> of the `return` statement and store the result in a variable.</p>
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
    case 'props-communication':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.4: Props & Component Communication</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: "Passing the Mic"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>Parent</strong> component is like the "Sound Booth" at a concert. A <strong>Child</strong> component is the "Singer" on stage.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Props (Data Down):</strong> The Sound Booth passes a microphone (a prop) to the Singer. The Singer can <em>use</em> the microphone, but they can't <em>change</em> it (e.g., they can't change it from a Shure mic to a Sennheiser mic). Props are <strong>read-only</strong>.</li>
              <li><strong>Callback (Function Up):</strong> How does the Singer tell the Sound Booth they need "more volume"? The Booth <em>also</em> passes them a "Talkback" button (a function prop). The Singer can <em>call</em> this function (push the button) to send a message back up.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Props</strong> (short for properties) are the *only* way to pass data from a parent component *down* to a child component. This is called <strong>one-way data flow</strong>.</p>
            <p><strong>Key Rules:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Passing Props:</strong> You pass props as attributes in JSX, just like HTML.
                <br/><Code>{'<Welcome user="Alex" isLoggedIn={true} />'}</Code>
              </li>
              <li><strong>Receiving Props:</strong> The child component receives all props as a <em>single object</em> as its first argument.
                <br/><Code>function Welcome(props: {'{'} user: string, isLoggedIn: boolean {'}'}) {'{...}'}</Code>
              </li>
              <li><strong>Props are Read-Only:</strong> A component can <strong>never</strong> change its own props. This is a core rule of React. A component must be a "pure function" with respect to its props.</li>
              <li><strong>Destructuring (Standard):</strong> It is standard practice to destructure the props object for readability.
                <br/><Code>function Welcome({'{'} user, isLoggedIn {'}'}: {'{...}'}) {'{...}'}</Code>
              </li>
              <li><strong>"Lifting State Up":</strong> To pass data <em>up</em> (child-to-parent), the parent passes a <em>function</em> as a prop. The child calls this function (a "callback") with its data as an argument.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Passing Data (Props) and Functions (Callbacks)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The `App` (parent) passes `userName` <em>down</em> to the `Header`. It also passes the `handleLogin` function <em>down</em> to the `LoginButton` (child) to be called on click.</p>
            <CodeBlock code={`
import React, { useState } from 'react';

// --- Child Component ---
type HeaderProps = {
  userName: string;
};

function Header({ userName }: HeaderProps) {
  // Receives 'userName' as a prop and displays it
  return <h1>Welcome, {userName}!</h1>;
}

// --- Child Component ---
type LoginButtonProps = {
  onLoginClick: () => void; // This is a function prop
};

function LoginButton({ onLoginClick }: LoginButtonProps) {
  // Receives the 'onLoginClick' function as a prop
  return <button onClick={onLoginClick}>Login</button>;
}

// --- Parent Component ---
function App() {
  const [user, setUser] = useState("Guest");

  // This function lives in the parent
  const handleLogin = () => {
    setUser("Admin");
  };

  return (
    <>
      {/* 1. Pass data (state) DOWN as a prop */}
      <Header userName={user} />

      {/* 2. Pass a function DOWN as a prop */}
      <LoginButton onLoginClick={handleLogin} />
    </>
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
                <strong>What is the difference between Props and State?</strong>
                <p className="pl-4">This is the most common React interview question.
                  <ul className="list-disc ml-6 mt-2">
                    <li><strong>Props:</strong> Are passed <em>into</em> a component from its <strong>parent</strong>. They are <strong>read-only</strong> (immutable).</li>
                    <li><strong>State:</strong> Is managed <em>inside</em> the component. It's the component's private, internal data. It <strong>can be changed</strong> (is mutable) using its setter function. A change in state causes the component to re-render.</li>
                  </ul>
                </p>
              </li>
              <li>
                <strong>How do you pass data from a child component to a parent component?</strong>
                <p className="pl-4">You don't, not directly. You "lift state up." The parent component defines a <em>function</em> (like `handleLogin`) and passes that <em>function</em> as a <em>prop</em> down to the child (e.g., `onLoginClick={'{'}handleLogin{'}'}`). The child component then <em>calls</em> that prop-function when its event happens, passing its data (if any) as an argument.</p>
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
    case 'state-management':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.5: State Management with useState</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Component's Whiteboard</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of <strong>State</strong> as a component's private whiteboard. It's the component's "memory."</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>The component can <em>read</em> from the whiteboard at any time to know what to display.</li>
              <li>The component can <em>write</em> a new value to the whiteboard (using the `set` function).</li>
              <li><strong>Crucially:</strong> Every time it writes a new value, it "rings a bell" that tells React, "Hey, I've changed! You need to re-render (redraw) me and my children!"</li>
            </ul>
            <p>This is the entire mechanism for interactivity. A component can't just change a variable; it <em>must</em> use its "setter" function to change state and trigger a re-render.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>State</strong> is data that is managed <em>inside</em> a component. It is private to that component and can be changed over time. When state changes, React <strong>re-renders</strong> the component.</p>
            <p>The <strong>`useState`</strong> Hook is the function you call to add state to a functional component.
            <br/><strong>It must be called at the top level of your component.</strong></p>
            <p><strong>Syntax:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><Code>const [value, setValue] = useState(initialValue);</Code></li>
              <li><strong>`value` (The State):</strong> The current value of the state. You read from this.</li>
              <li><strong>`setValue` (The Setter):</strong> The function you call to update the state.</li>
              <li><strong>`initialValue`</strong>: The value the state will have on the <em>first</em> render.</li>
            </ul>
            <p><strong>Rules of Updating State:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Do NOT mutate state directly:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Wrong:</strong> <Code>count = count + 1;</Code> (Won't trigger a re-render).</li>
                  <li><strong>Wrong:</strong> <Code>myArray.push(newItem);</Code> (This is a mutation. React won't detect it).</li>
                </ul>
              </li>
              <li><strong>Always use the setter function:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Right:</strong> <Code>setCount(count + 1);</Code></li>
                  <li><strong>Right:</strong> <Code>setMyArray([...myArray, newItem]);</Code> (Creates a <em>new</em> array).</li>
                </ul>
              </li>
              <li><strong>Use the Functional Update Form:</strong> When your new state depends on the previous state, pass a function to the setter to avoid "stale state" bugs.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Safer:</strong> <Code>setCount(prevCount {'=>'} prevCount + 1);</Code></li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Counter and a Toggler</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This component uses two pieces of state: a `number` and a `boolean`.</p>
            <CodeBlock code={`
import React, { useState } from 'react';

function CounterToggle() {
  // 1. Initialize 'count' state (a number)
  const [count, setCount] = useState(0);

  // 2. Initialize 'isOn' state (a boolean)
  const [isOn, setIsOn] = useState(true);

  // This handler uses the functional update form, which is best
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // This handler updates the boolean state
  const handleToggle = () => {
    setIsOn(prevIsOn => !prevIsOn); // Toggles from true to false, etc.
  };

  return (
    <div>
      {/* 3. Read the state values in JSX */}
      <h2>Count: {count}</h2>
      
      {/* 4. Use a ternary to conditionally render based on state */}
      <p>The light is: {isOn ? "ON" : "OFF"}</p>
      
      {/* 5. Call the setters in event handlers */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleToggle}>Toggle Light</button>
    </div>
  );
}

export default CounterToggle;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between Props and State?</strong>
                <p className="pl-4"><strong>Props</strong> are "properties" passed <em>down</em> from a parent and are <strong>read-only</strong> by the child. <strong>State</strong> is a component's <em>internal</em> "memory" that it manages itself. It is <strong>read-write</strong> (using the setter function), and changing it causes a re-render.</p>
              </li>
              <li>
                <strong>Why is <Code>setCount(prevCount {'=>'} prevCount + 1)</Code> safer than <Code>setCount(count + 1)</Code>?</strong>
                <p className="pl-4">Because state updates are <em>batched</em> by React. If you call `setCount(count + 1)` three times in a row, it might only increment once because `count` is `0` every time. If you call <Code>setCount(prev {'=>'} prev + 1)</Code> three times, React queues them up, and it will correctly increment three times. Always use the functional form when your new state depends on the old one.</p>
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
    case 'event-handling':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">6.6: Event Handling in React</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Doorbell and the Action</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>An <strong>Event Listener</strong> is like a "doorbell" you attach to an element. An <strong>Event</strong> is the user "pressing the doorbell" (e.g., a `click`). An <strong>Event Handler</strong> is the "action" you perform in response (e.g., "open the door").</p>
            <p>React's syntax is specific: you must give the <Code>onClick</Code> prop a <em>function</em> to hold onto, not the <em>result</em> of a function.</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Wrong:</strong> <Code>onClick={'{alert("Doorbell rang!")}'}</Code> (This rings the doorbell <em>while you are installing it</em>).</li>
              <li><strong>Right:</strong> <Code>onClick={'={() => alert("Doorbell rang!")}'}</Code> (This gives the doorbell a <em>function to call</em> when it's pressed).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>React events are handled very similarly to DOM events, but with two key syntax differences:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>camelCase Event Names:</strong> React events are named using `camelCase`.
                <ul className="list-disc ml-6 mt-2">
                  <li>HTML `onclick` becomes React <Code>onClick</Code>.</li>
                  <li>HTML `onsubmit` becomes React <Code>onSubmit</Code>.</li>
                </ul>
              </li>
              <li><strong>Function Reference:</strong> You pass a <strong>function reference</strong> (the function's name) or an <strong>inline arrow function</strong> to the handler, not a string.</li>
            </ol>
            <p><strong>The Event Object (`e`):</strong><br/>
            React passes a <strong>SyntheticEvent</strong> (`e`) to your handler function. This is a wrapper around the browser's native event.
            </p>
            <ul className="list-disc ml-6 space-y-1">
                <li><Code>e.preventDefault()</Code>: You <em>must</em> call this in an `onSubmit` handler to prevent the browser from doing a full-page refresh.</li>
                <li><Code>e.target.value</Code>: How you get the current value from an input field in an `onChange` handler.</li>
            </ul>
            <p><strong>Passing Arguments to Handlers:</strong><br/>
            This is the most common mistake.
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Wrong (Calls on render):</strong> <Code>{'<button onClick={myFunc(id)}>'}</Code></li>
              <li><strong>Right (Passes a new function):</strong> <Code>{'<button onClick={() => myFunc(id)}>'}</Code></li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Controlled Form</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This form demonstrates <Code>onSubmit</Code> (with `preventDefault`), <Code>onChange</Code>, and reading from the `event` object.</p>
            <CodeBlock code={`
import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState("");

  // 1. The 'onChange' handler is called on every keystroke
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 2. We get the new value from 'e.target.value' and update state
    setName(e.target.value);
  };

  // 3. The 'onSubmit' handler is called when the form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    // 4. CRITICAL: Prevents the page from reloading
    e.preventDefault();
    
    alert(\`A name was submitted: \${name}\`);
  };

  return (
    // 5. We attach the handler to the <form> element
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name}         /* The input's value is controlled by state */
          onChange={handleChange}  /* The state is updated on every change */
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is wrong with <Code>{'<button onClick={handleDelete(item.id)}>'}</Code>?</strong>
                <p className="pl-4">That code <em>calls</em> `handleDelete` <em>during the render</em>. It doesn't pass the function, it passes the function's <em>result</em>. If `handleDelete` updates state, this will cause an infinite loop (render {'->'} call function {'->'} update state {'->'} re-render). The correct way is to wrap it in an arrow function, which <em>defines</em> a new function: <Code>{'<button onClick={() => handleDelete(item.id)}>'}</Code>.</p>
              </li>
              <li>
                <strong>Why use `onSubmit` on the form instead of `onClick` on the button?</strong>
                <p className="pl-4">It's more accessible and user-friendly. `onSubmit` on the <Code>{'<form>'}</Code> tag handles <em>both</em> clicking the submit button <em>and</em> pressing the "Enter" key in an input field. An `onClick` on the button would <em>only</em> handle the click, ignoring the "Enter" key.</p>
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

export default Chapter6Part1;