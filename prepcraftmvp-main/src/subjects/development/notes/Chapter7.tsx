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

// --- Main Chapter 7 Component ---

const Chapter7 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    // --- 7.1: Introduction to Node.js & Runtime Environment ---
    case 'introduction-to-node':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">7.1: Introduction to Node.js & Runtime Environment</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Server-Side Engine</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>For decades, JavaScript was a language that could <em>only</em> run inside a web browser. Think of the browser as a special "sandbox" where JavaScript could operate.</p>
            <p><strong>Node.js</strong> is an "engine" (a runtime environment) that was created by taking Google's high-performance V8 JavaScript engine <em>out</em> of the browser. This allows you to run JavaScript on a server (or any computer) to build backends, command-line tools, and more.</p>
          </div>
          <hr className="mb-6 border-gray-200" />
          
          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Node.js</strong> is not a language; it is a <strong>JavaScript runtime environment</strong> built on Google's V8 JavaScript engine. It allows developers to run JavaScript code on the <strong>server</strong> (backend), outside of a web browser.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>V8 Engine:</strong> Compiles JavaScript directly into native machine code, making it very fast.</li>
              <li><strong>Event-Driven, Non-Blocking I/O:</strong> This is the core architectural advantage. Node.js uses a single thread (the "Event Loop") to handle many connections concurrently.</li>
              <li>Instead of waiting for a task (like reading a file or a database query) to finish (which is "blocking"), Node.js gives the task to its <strong>Libuv</strong> library (which uses a C++ thread pool).</li>
              <li>The single-threaded <strong>Event Loop</strong> is free to handle other user requests. When the task is done, Libuv places a callback function into a queue, which the Event Loop executes.</li>
              <li>This model is extremely efficient for I/O-heavy applications (like chat apps, streaming services, and REST APIs) but less ideal for CPU-intensive tasks (like complex calculations).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Basic Node.js HTTP Server</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the classic "Hello World" server in Node.js, using the built-in <Code>http</Code> module. Save this as <Code>server.js</Code> and run <Code>node server.js</Code> in your terminal.</p>
            <CodeBlock code={`
// 1. Import the built-in http module
const http = require('http');

// 2. Define the server details
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// 3. Create the server
// The server takes a callback function that runs for EVERY request
const server = http.createServer((req, res) => {
  
  // 4. Set the response status and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // 5. End the response, sending data back to the client
  res.end('Hello, World!\\n');
});

// 6. Start the server and listen for connections
server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Core Question: "What is Node.js? Is it single-threaded? How does it handle concurrency?"</strong>
                <p className="pl-4"><strong>Answer:</strong> "Node.js is a JS runtime. It <em>is</em> single-threaded via its <strong>Event Loop</strong>, but it achieves concurrency using a <strong>Non-Blocking I/O</strong> model. It offloads expensive I/O operations (like database queries) to the <strong>Libuv thread pool</strong>, allowing the main Event Loop to remain responsive and handle other requests."</p>
              </li>
              <li>
                <strong>Common Question: "What's the difference between Node.js and browser JavaScript?"</strong>
                <p className="pl-4"><strong>Answer:</strong> "Browser JS runs in a sandbox and has access to browser-specific APIs like the <strong>DOM</strong> (<code>document</code>) and <strong>Window</strong> (<code>window</code>). Node.js runs on a server and has access to server-specific APIs, like the <strong>File System</strong> (<code>fs</code>), <strong>HTTP Server</strong> (<code>http</code>), and the <strong>operating system</strong> (<code>os</code>)."</p>
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

    case 'node-core-modules':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">7.2: Node.js Core Modules (fs, path, http, url)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Built-in Toolbox</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>When you get Node.js, it comes with a "toolbox" of <strong>Core Modules</strong>. You don't need to `npm install` them; they are built-in. You just have to ask for them with `require()`.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`http` Module:</strong> The "Telephone" tool. Lets you create a server to listen for and answer HTTP calls.</li>
              <li><strong>`fs` Module:</strong> The "File Cabinet" tool. Lets you read, write, and delete files.</li>
              <li><strong>`path` Module:</strong> The "GPS" tool. Helps you build file paths that work on any computer (Windows, Mac, or Linux).</li>
              <li><strong>`url` Module:</strong> The "Address Parser" tool. Helps you read and understand complex URL strings.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Node.js provides a set of built-in modules for common operations. You import them using the <Code>require()</Code> function.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><code>fs</code> (File System):</strong> The most important core module. Used for all file operations. It has two "flavors":
                <ul>
                  <li><strong>Asynchronous (Recommended):</strong> `fs.readFile(path, cb)`. Does not block the event loop.</li>
                  <li><strong>Synchronous (Blocking):</strong> `fs.readFileSync(path)`. <strong>Blocks the entire event loop</strong> until the file is read. Never use this inside a server request.</li>
                </ul>
              </li>
              <li><strong><code>path</code> (Path):</strong> A utility for working with file and directory paths.
                <ul>
                  <li>Its main method is <strong>`path.join()`</strong>, which joins path segments using the correct separator (`/` or `\`) for the host OS.</li>
                  <li><code>__dirname</code> is a global Node.js variable that gives you the absolute path of the directory the <em>current file</em> is in.</li>
                </ul>
              </li>
              <li><strong><code>http</code>:</strong> The low-level module used to create HTTP servers (as seen in 7.1).</li>
              <li><strong><code>url</code>:</strong> A utility for parsing URL strings to get components like the pathname, host, or query parameters.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Reading a File with `fs` and `path`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example uses `fs` (async) to read a file and `path` to build the file path safely. Create a file named <Code>welcome.txt</Code> in the same directory with the text "Hello from the file!".</p>
            <CodeBlock code={`
const fs = require('fs');
const path = require('path');

// 1. Build a safe, cross-platform path
// '__dirname' is the path of the current directory (e.g., /users/me/project)
const filePath = path.join(__dirname, 'welcome.txt');

console.log('Reading file from:', filePath);

// 2. Read the file asynchronously (non-blocking)
fs.readFile(filePath, 'utf8', (err, data) => {
  // 3. This callback runs when the file is read
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
  // 4. 'data' is the content of the file
  console.log('File content:');
  console.log(data);
});

console.log('This message logs FIRST, before the file content!');
// Why? Because fs.readFile is asynchronous.
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between `fs.readFileSync` and `fs.readFile`?</strong>
                <p className="pl-4">`readFileSync` is <strong>synchronous</strong> (blocking). The entire server and event loop *stops* and waits for the file to be read. `readFile` is <strong>asynchronous</strong> (non-blocking). It gives the task to the Libuv thread pool and continues running. The callback function is executed when the file is ready. You should <em>always</em> use the async version inside a server.</p>
              </li>
              <li>
                <strong>Why use `path.join()` instead of just `myPath + '/file.txt'`?</strong>
                <p className="pl-4">Because that code will <em>break</em> on Windows, which uses `\` as a path separator. `path.join(__dirname, 'file.txt')` will correctly create `/my/path/file.txt` on a Mac/Linux and `C:\my\path\file.txt` on Windows, making your code cross-platform.</p>
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

    case 'npm-package-management':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">7.3: npm & Package Management</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Project's Shopping List</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>`npm`</strong> is the "package warehouse" (the world's largest) and the "delivery service" (the command line tool) for code.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`package.json` file:</strong> Your project's "shopping list." It tells `npm` exactly what to buy.</li>
              <li><strong>`npm install express`:</strong> "Add 'Express' to my shopping list and deliver it."</li>
              <li><strong>`node_modules` folder:</strong> The "delivery box" that arrives at your door, containing all the packages you ordered (and all the packages *they* ordered).</li>
              <li><strong>`package-lock.json` file:</strong> A hyper-detailed "invoice" that lists the *exact* version of every single item, ensuring you get the same delivery every time.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>npm (Node Package Manager)</strong> is the command-line tool and registry for managing your project's <strong>dependencies</strong> (third-party code).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`npm init -y`:</strong> Initializes a new project by creating a <Code>package.json</Code> file.</li>
              <li><strong>`package.json`:</strong> The project's manifest file. It lists:
                <ul>
                  <li><strong>`dependencies`</strong>: Packages required for the app to run in *production* (e.g., `express`, `react`). Installed with `npm install express`.</li>
                  <li><strong>`devDependencies`</strong>: Packages only used for *development* (e.g., `nodemon`, `eslint`). Installed with `npm install nodemon --save-dev` (or `-D`).</li>
                  <li><strong>`scripts`</strong>: Shortcuts for terminal commands (e.g., `npm start`, `npm test`).</li>
                </ul>
              </li>
              <li><strong>`node_modules/`:</strong> The folder where `npm` downloads and stores all the packages. You **must** add this to your `.gitignore` file.</li>
              <li><strong>`package-lock.json`:</strong> An auto-generated file that "locks" the *exact* versions of all dependencies. This guarantees **deterministic builds**, meaning every developer on the team (and the server) gets the exact same code. You **must** commit this file to Git.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Standard `package.json`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A typical `package.json` for an Express server. You would run `npm install` to get the dependencies, `npm run dev` to start, and `npm start` in production.</p>
            <CodeBlock code={`
{
  "name": "my-cool-server",
  "version": "1.0.0",
  "description": "A demo server for my project",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
            `} language="json" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between `dependencies` and `devDependencies`?</strong>
                <p className="pl-4"><strong>`dependencies`</strong> (like `express`) are essential for the app to *run*. <strong>`devDependencies`</strong> (like `nodemon`) are only used for *developing* the app (e.g., auto-reload, testing). When you deploy to production, you typically only install the `dependencies` to keep the build size small.</p>
              </li>
              <li>
                <strong>What's the difference between `package.json` and `package-lock.json`?</strong>
                <p className="pl-4">`package.json` lists the versions you *want* (e.g., `^4.18.2`, which means "4.18.2 or any newer patch"). `package-lock.json` lists the *exact* version that was *actually* installed (e.g., `4.18.5`). You **must** commit `package-lock.json` to ensure everyone on your team and your server builds use the *identical* set of dependencies, preventing "it works on my machine" bugs.</p>
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

    case 'creating-node-server':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">7.4: Creating Your First Node.js Server (Express)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Server Framework"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Using Node's built-in `http` module is like building a car from raw steel and parts. It's possible, but incredibly low-level and difficult.</p>
            <p><strong>Express.js</strong> is a <strong>framework</strong> for Node.js. It's like a pre-built "car chassis." It gives you the frame, wheels, and engine block, so you can stop worrying about the low-level plumbing and start focusing on the important parts, like *where the car should go* (routing).</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Express.js</strong> is the de-facto standard, minimalist framework for building web servers and APIs in Node.js. It simplifies the `http` module by providing easy-to-use tools for:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Routing:</strong> This is its main feature. It lets you map HTTP methods (GET, POST, PUT, DELETE) and URL paths (e.g., `/users`, `/products`) to specific handler functions.</li>
              <li><strong>Middleware:</strong> Functions that run in the "middle" of the request-response cycle. They are used for tasks like logging, authentication, error handling, and parsing request bodies.</li>
              <li><strong>Request/Response Objects:</strong> It provides simple, powerful `req` (request) and `res` (response) objects.
                <ul>
                  <li>`req.params`: To get URL parameters (e.g., `:id`).</li>
                  <li>`req.query`: To get query strings (e.g., `?search=...`).</li>
                  <li>`res.json()`: To send a JSON response (auto-sets headers).</li>
                  <li>`res.send()`: To send a plain text/HTML response.</li>
                  <li>`res.status(404)`: To set the HTTP status code.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Simple Express.js Server</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Notice how much cleaner this is than the `http` example.
            <br/>1. Run `npm install express`.
            <br/>2. Save this as `server.js` and run `node server.js`.</p>
            <CodeBlock code={`
import express from 'express'; // Using ES Module syntax
const app = express();
const port = 3000;

// 1. Define a "GET" route for the root URL ('/')
app.get('/', (req, res) => {
  // 2. 'res.send()' is much simpler
  res.send('Hello, World from Express.js!');
});

// 2. Define another route for '/api/user'
app.get('/api/user', (req, res) => {
  // 3. 'res.json()' automatically sets content-type to application/json
  res.json({ id: 1, name: 'Alex' });
});

// 3. Start the server
// Express handles 404s and errors automatically
app.listen(port, () => {
  console.log(\`Express server running on http://localhost:\${port}\`);
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Why do we use Express.js instead of the `http` module?</strong>
                <p className="pl-4">The `http` module is very low-level. You have to manually parse the URL (e.g., `if (req.url === '/users')`) and HTTP method (`if (req.method === 'POST')`). Express provides a robust **router** (`app.post('/users', ...)`), a **middleware** system, and simple response methods (`res.json()`) that handle all of that complexity for you.</p>
              </li>
              <li>
                <strong>What is "middleware" in Express?</strong>
                <p className="pl-4">Middleware is a function that runs *between* the request and the final route handler. It has access to the `req`, `res`, and a special function `next()`. It's used for logging, checking if a user is authenticated, or parsing the body of a request. Calling `next()` passes control to the *next* middleware or to the route handler.</p>
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

    case 'understanding-modules':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">7.5: Understanding Modules (CommonJS vs. ES Modules)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Private Office</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of every JavaScript file as a "private office." By default, all the work (variables, functions) you do in your office is **private**. No one else can see it.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Exporting (CommonJS):</strong> You have a special "outbox" on your desk called `module.exports`. Anything you put in this box becomes **public**.</li>
              <li><strong>Importing (CommonJS):</strong> Another file (`server.js`) can "look at" your outbox by using `require('./my-office')`.</li>
            </ul>
            <p>This system, called **CommonJS**, is how Node.js traditionally organized code. The new system is **ES Modules**.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Node.js has two module systems for splitting code across files:</p>
            <p><strong>1. CommonJS (CJS) - The "Classic" Way:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>This is the traditional Node.js system. It's synchronous.</li>
              <li><strong>Exporting:</strong> You assign what you want to export to the `module.exports` object.
                <br/><Code>module.exports = {'{'} myFunc {'}'};</Code>
              </li>
              <li><strong>Importing:</strong> You use the `require()` function to import modules.
                <br/><Code>const {'{'} myFunc {'}'} = require('./myFile.js');</Code>
              </li>
            </ul>

            <p className="mt-4"><strong>2. ES Modules (ESM) - The "Modern" Way:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>This is the modern JavaScript standard, used by browsers and React.</li>
              <li><strong>Exporting:</strong> You use the `export` keyword.
                <br/><Code>export const myFunc = () =&gt; {'{...}'}</Code> (named export)
                <br/><Code>export default myApp;</Code> (default export - only one per file)
              </li>
              <li><strong>Importing:</strong> You use the `import` keyword.
                <br/><Code>import {'{'} myFunc {'}'} from './myFile.js';</Code>
                <br/><Code>import myApp from './myApp.js';</Code>
              </li>
              <li>To use ESM in Node.js, you must either name your files with `.mjs` or add `"type": "module"` to your `package.json`.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: CommonJS vs. ES Modules</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. CommonJS (`require` / `module.exports`)</p>
            <CodeBlock code={`
// --- utils.js ---
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Export an object with the functions
module.exports = { add, subtract };

// --- server.js ---
// Import the object
const myUtils = require('./utils.js');
console.log(myUtils.add(5, 3)); // 8
            `} language="javascript" />
            
            <p className="font-semibold mt-2">2. ES Modules (`import` / `export`)</p>
            <CodeBlock code={`
// --- utils.mjs ---
// Export functions as they are defined (named export)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// --- server.mjs ---
// Import using destructuring
import { add } from './utils.mjs';
console.log(add(5, 3)); // 8
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between `module.exports` and `exports`?</strong>
                <p className="pl-4">`exports` is just a *shorthand variable* that points to `module.exports`. You can add properties to it (e.g., `exports.add = ...`), but you *cannot* re-assign it (e.g., `exports = myFunc` will not work). To export a single item, you *must* use `module.exports = myFunc`.</p>
              </li>
              <li>
                <strong>Why am I getting a "Cannot use import statement outside a module" error?</strong>
                <p className="pl-4">This means you are trying to use `import` syntax in a file that Node.js is treating as CommonJS. To fix it, you must either rename your files to `.mjs` or, more commonly, add the line `"type": "module"` to the top level of your `package.json` file.</p>
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

    case 'asynchronous-programming-node':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">7.6: Asynchronous Programming (Callbacks, Promises, Async/Await)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Ordering at a Restaurant</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Because Node.js is single-threaded, it must be asynchronous to handle multiple users.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Synchronous (Blocking):</strong> A waiter takes your order, walks to the kitchen, *waits* for the food, brings it to you, and *only then* takes the next table's order. (The entire restaurant is blocked).</li>
              <li><strong>1. Callbacks:</strong> The waiter takes your order, gives it to the kitchen, and *tells the chef to "call him back" when it's done*. This leads to "Callback Hell" (the waiter is juggling 10 different orders).</li>
              <li><strong>2. Promises:</strong> The waiter takes your order, and the kitchen gives him a *pager* (a <strong>Promise</strong>). The pager is "pending" but will "resolve" (buzz) when the food is ready. This is cleaner.</li>
              <li><strong>3. Async/Await:</strong> The waiter, using an `async` function, can `await` the food. This *looks* like he's waiting, but he can magically handle other tasks. This is the cleanest syntax.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>There are three main patterns for handling non-blocking code in Node.js:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Callbacks:</strong> The "old way." A function passed as an argument to be executed when an async operation completes. Leads to "Callback Hell" (deep nesting).
                <br/><Code>fs.readFile('file.txt', (err, data) {'=>'} {'{...}'})</Code>
              </li>
              <li><strong>Promises:</strong> An object representing the eventual state of an async operation (pending, fulfilled, or rejected). Allows you to chain operations with <Code>.then()</Code> and handle errors with <Code>.catch()</Code>.</li>
              <li><strong>Async/Await (Best Way):</strong> Syntactic sugar built on top of Promises.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>`async`:</strong> Keyword that makes a function automatically return a Promise.</li>
                  <li><strong>`await`:</strong> Keyword that *pauses* the `async` function's execution *until* a Promise is settled. It can only be used inside an `async` function.</li>
                  <li><strong>`try...catch`:</strong> The standard way to handle errors (rejected promises) when using `async/await`.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The 3 Async Patterns</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. Callback (The "Old Way")</p>
            <CodeBlock code={`
const fs = require('fs');
fs.readFile('./welcome.txt', 'utf8', (err, data) => {
  if (err) { console.error(err); } 
  else { console.log(data); }
});
            `} language="javascript" />

            <p className="font-semibold mt-2">2. Promise (`.then/.catch`)</p>
            <CodeBlock code={`
const fs = require('fs').promises; // Note: .promises
fs.readFile('./welcome.txt', 'utf8')
  .then(data => { console.log(data); })
  .catch(err => { console.error(err); });
            `} language="javascript" />

            <p className="font-semibold mt-2">3. Async/Await (The "Best Way")</p>
            <CodeBlock code={`
const fs = require('fs').promises;

// 1. Create an async function
async function readFileAsync() {
  try {
    // 2. 'await' the promise
    const data = await fs.readFile('./welcome.txt', 'utf8');
    // 3. This line only runs AFTER the file is read
    console.log(data);
  } catch (err) {
    // 4. Catch any errors
    console.error(err);
  }
}
readFileAsync(); // 5. Call the function
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is "Callback Hell" and how do you solve it?</strong>
                <p className="pl-4">"Callback Hell" (or the "Pyramid of Doom") is when you deeply nest asynchronous callbacks, making the code unreadable and hard to debug. You solve it by refactoring your code to use <strong>Promises</strong> with <Code>.then()</Code> chains, or even better, by using <strong>Async/Await</strong>, which allows you to write the same logic in a clean, linear, synchronous-looking style.</p>
              </li>
              <li>
                <strong>What's the difference between `await` and `.then()`?</strong>
                <p className="pl-4">`async/await` is just "syntactic sugar" for `.then()`. They both handle promises. `await` simply lets you write the code as if it were synchronous, which is much cleaner. <Code>const data = await myPromise;</Code> is the modern equivalent of `myPromise.then(data =&gt; {'{...}'})`.</p>
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

    case 'file-system-operations':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">7.7: File System Operations (fs module)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The File Cabinet</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The <strong>`fs` (File System)</strong> module is your set of tools for interacting with the server's "file cabinet."</p>
            <p>When you need a file, you have two ways to get it:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Synchronous (`fs.readFileSync`):</strong> "Stop <em>everything</em> you are doing, go to the cabinet, find the file, read it, and only then continue working." This is <strong>blocking</strong> and terrible for a server.</li>
              <li><strong>Asynchronous (`fs.readFile`):</strong> "Send an intern (a `Libuv` thread) to get the file. Continue your own work. The intern will hand you the file (call you back) when they have it." This is <strong>non-blocking</strong> and essential for a fast server.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The <Code>fs</Code> module provides methods for file I/O. Every method comes in three forms. You should **always use the Promise-based methods** with `async/await` in modern code.</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Asynchronous (Callback):</strong> `fs.readFile(path, cb)`</li>
              <li><strong>Synchronous (Blocking):</strong> `fs.readFileSync(path)`</li>
              <li><strong>Promise-based (Modern):</strong> `fs.promises.readFile(path)`</li>
            </ol>
            
            <p className="mt-2"><strong>Common Promise-based Methods:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`fs.promises.readFile(path, 'utf8')`</strong>: Reads a file's contents.</li>
              <li><strong>`fs.promises.writeFile(path, data)`</strong>: Writes data to a file (overwrites if it exists).</li>
              <li><strong>`fs.promises.appendFile(path, data)`</strong>: Appends data to the end of a file.</li>
              <li><strong>`fs.promises.readdir(path)`</strong>: Reads a directory and returns an array of file names.</li>
              <li><strong>`fs.promises.stat(path)`</strong>: Gets file statistics (e.g., `stats.isFile()`).</li>
              <li><strong>`fs.promises.mkdir(path)`</strong>: Creates a new directory.</li>
              <li><strong>`fs.promises.unlink(path)`</strong>: Deletes a file.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: `fs.promises` with Async/Await</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A modern example using `async/await` to write, read, and then delete a file.</p>
            <CodeBlock code={`
import { promises as fs } from 'fs'; // Modern ES Module import
import path from 'path';

// Helper to get correct path
const __dirname = path.resolve();

async function fileLifecycleDemo() {
  const filePath = path.join(__dirname, 'demo.txt');
  const content = 'Hello, this is a demo file!';

  try {
    // 1. Write a new file
    await fs.writeFile(filePath, content, 'utf8');
    console.log('File written successfully:', filePath);

    // 2. Read the file back
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:', data);

    // 3. Delete the file
    await fs.unlink(filePath);
    console.log('File deleted successfully.');

  } catch (err) {
    console.error('An error occurred:', err);
  }
}

fileLifecycleDemo();
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>When is it *ever* okay to use `fs.readFileSync` (synchronous)?</strong>
                <p className="pl-4">The *only* acceptable time is during the **initial startup** of your server, *before* it starts listening for requests. For example, you might synchronously load a `config.json` file or an SSL certificate. Once the server is running (inside `app.listen` or `app.get`), you must *never* use a sync method.</p>
              </li>
              <li>
                <strong>How would you read a directory and filter for only `.txt` files?</strong>
                <p className="pl-4">You would combine `fs.promises` with array methods.
                <br/><Code>const allFiles = await fs.promises.readdir('./my-dir');</Code>
                <br/><Code>const txtFiles = allFiles.filter(file =&gt; file.endsWith('.txt'));</Code>
                </p>
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

    case 'environment-variables':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">7.8: Environment Variables & dotenv</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Secret Post-it Note</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>You would never write your bank password in a public letter. The same is true for code. You never, ever write your database password or API keys in your source code (where it can be stolen from GitHub).</p>
            <p>Instead, you write a "placeholder" in your code: `process.env.DB_PASSWORD`. This tells the code, "Go look for a secret Post-it Note called `DB_PASSWORD`."</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>In Production:</strong> The server (e.g., Heroku, Vercel) *provides* this "Post-it Note" to your app.</li>
              <li><strong>In Development:</strong> You don't have a server, so you use the <strong>`dotenv`</strong> package. It reads your secrets from a local `.env` file and provides them to your app, just like a real server would.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Environment Variables</strong> are external values that configure your application without changing its code. This is a core principle of the <a href="https://12factor.net/config" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">12-Factor App methodology</a>.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Security:</strong> All secrets (DB passwords, API keys, JWT secrets) *must* be stored as environment variables.</li>
              <li><strong>Configuration:</strong> Non-secret config that changes between environments (like `PORT`, `NODE_ENV='production'`) should also be env vars.</li>
              <li><strong>`process.env`:</strong> Node.js automatically makes all environment variables available on the global `process.env` object.</li>
              <li><strong>`dotenv` Package:</strong> A development tool that loads environment variables from a `.env` file into `process.env` at runtime.
                <ol className="list-decimal ml-6 mt-2">
                  <li>Install: `npm install dotenv`</li>
                  <li>At the *very top* of your main `server.js` file, add: `require('dotenv').config();`</li>
                </ol>
              </li>
              <li><strong>`.gitignore` (CRITICAL):</strong> You **MUST** add your `.env` file to your `.gitignore` file. Committing this file to GitHub is a critical security vulnerability.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Using `dotenv`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows the two files you need.
            <br/>1. Run `npm install dotenv express`.
            <br/>2. Create both files and run `node server.js`.</p>
            
            <p className="font-semibold mt-2">File: `.env` (This file is secret and in `.gitignore`)</p>
            <CodeBlock code={`
# This is a comment
PORT=8080
DATABASE_URL="mongodb://user:password@mydb.com"
API_KEY="abc123xyz789"
NODE_ENV="development"
            `} language="bash" />

            <p className="font-semibold mt-2">File: `server.js` (This code is public and safe to commit)</p>
            <CodeBlock code={`
// 1. Load variables from .env file FIRST
// This must be at the very top
import 'dotenv/config'; 
import express from 'express';

// 2. Now you can access the variables from process.env
const port = process.env.PORT || 3000; // Use 3000 as a default
const dbUrl = process.env.DATABASE_URL;
const env = process.env.NODE_ENV;

console.log(\`Application is running in \${env} mode.\`);
console.log(\`Database URL: \${dbUrl}\`);

const app = express();
app.get('/', (req, res) => {
  // 3. Use the variables in your app
  res.send(\`Hello! Your API key starts with: \${process.env.API_KEY.substring(0, 3)}\`);
});

app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>How do I handle secrets in production?</strong>
                <p className="pl-4">You do *not* use a `.env` file in production. Instead, you use the "config vars" or "secrets" dashboard provided by your hosting platform (like Vercel, Heroku, AWS, or Azure). You paste your secret values into their web interface, and they will securely provide them to your running application as environment variables.</p>
              </li>
              <li>
                <strong>If `.env` is ignored, how do other developers know what variables are needed?</strong>
                <p className="pl-4">You create a file called `.env.example` that *is* committed to Git. This file has all the *keys* but with placeholder/empty values.
                <br/>`PORT=...`
                <br/>`DATABASE_URL=...`
                <br/>A new developer just copies this file, renames it to `.env`, and fills in their own secret values.</p>
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

export default Chapter7;