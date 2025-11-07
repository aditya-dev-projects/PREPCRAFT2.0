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

// --- NEW Image Diagram Component (Replaces SVG) ---
const ImageDiagram = ({ src, alt }: { src: string, alt: string }) => (
  <div className="bg-gray-100 p-4 rounded-md shadow-inner mt-4 overflow-x-auto flex justify-center">
    <img 
      src={src} 
      alt={alt} 
      className="max-w-full h-auto rounded-md border-2 border-gray-300"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        // target.src = 'https://placehold.co/700x300/FEEBC8/F6AD55?text=Image+Not+Found';
        target.alt = 'Image loading error. Placeholder shown.';
      }}
    />
  </div>
);


// --- Main Chapter Component ---

const Chapter7 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    // --- 7.1: Introduction to Node.js & Runtime Environment ---
    case 'introduction-to-node':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">7.1: Introduction to Node.js & Runtime Environment (TCS/Infosys Core)</h2>
          
          <NoteSection title="Concept">
            <p><strong className="text-gray-900">Node.js</strong> is not a language; it is a <strong className="text-gray-900">JavaScript runtime environment</strong> built on Google's V8 JavaScript engine. It allows developers to run JavaScript code on the <strong className="text-gray-900">server</strong> (backend), outside of a web browser.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">V8 Engine:</strong> Compiles JavaScript directly into native machine code, making it very fast.</li>
              <li><strong className="text-gray-900">Event-Driven, Non-Blocking I/O:</strong> This is the core architectural advantage. Node.js uses a single thread (the "Event Loop") to handle many connections concurrently.</li>
              <li>Instead of waiting for a task (like reading a file or a database query) to finish (which is "blocking"), Node.js gives the task to its <strong className="text-gray-900">Libuv</strong> library (which uses a C++ thread pool).</li>
              <li>The single-threaded <strong className="text-gray-900">Event Loop</strong> is free to handle other user requests. When the task is done, Libuv places a callback function into a queue, which the Event Loop executes.</li>
              <li>This model is extremely efficient for I/O-heavy applications (like chat apps, streaming services, and REST APIs) but less ideal for CPU-intensive tasks (like complex calculations).</li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
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
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p>This diagram shows the Node.js architecture. The Event Loop handles fast, non-blocking tasks, while offloading slow, blocking I/O tasks (like database queries) to the Libuv Thread Pool.</p>
            <ImageDiagram 
              src="https://i.imgur.com/v1b0f9H.png" 
              alt="Node.js Event Loop and Thread Pool Architecture" 
            />
            You can replace the src above with your own hosted image URL
            { <ImageDiagram 
              src="htt" 
              alt="Node.js Architecture Diagram" 
            /> }
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Core Interview Question (All Companies):</strong> "What is Node.js? Is it single-threaded? How does it handle concurrency?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "Node.js is a JS runtime. It *is* single-threaded via its <strong className="text-gray-900">Event Loop</strong>, but it achieves concurrency using a <strong className="text-gray-900">Non-Blocking I/O</strong> model. It offloads expensive I/O operations to the <strong className="text-gray-900">Libuv thread pool</strong>, allowing the main thread to remain responsive."</li>
              <li><strong className="text-gray-900">TCS/Infosys/Wipro:</strong> Often ask you to differentiate between Node.js and other backends (like Java/Spring or Python/Django), focusing on the non-blocking I/O model.</li>
              <li><strong className="text-gray-900">Amazon/Startups:</strong> Will dig deeper into the Event Loop, asking about the callback queue, microtasks (like Promises), and macrotasks (like <Code>setTimeout</Code>).</li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Saying "Node.js is a language" or "Node.js is multi-threaded." Both are incorrect.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What is Node.js? (A. A JavaScript library, B. A JavaScript runtime, C. A new programming language)</li>
            <li>What is the name of the C++ library that handles asynchronous I/O in Node.js?</li>
            <li>True or False: Node.js is ideal for CPU-intensive tasks because it is single-threaded.</li>
          </QuizSection>
        </div>
      );

    // --- 7.2: Node.js Core Modules ---
    case 'node-core-modules':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">7.2: Node.js Core Modules (fs, path, http, url)</h2>
          
          <NoteSection title="Concept">
            <p>Node.js has a set of built-in modules (libraries) that you can use without installing anything from <Code>npm</Code>. You load them using the <Code>require()</Code> function.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">`fs` (File System):</strong> Used for all file operations: reading files (<Code>fs.readFile</Code>), writing files (<Code>fs.writeFile</Code>), checking if a file exists (<Code>fs.existsSync</Code>), etc. It has both synchronous (blocking) and asynchronous (non-blocking) versions for most methods.</li>
              <li><strong className="text-gray-900">`path` (Path):</strong> A utility module for handling and normalizing file and directory paths. Essential for creating cross-platform compatible paths (Windows uses `\` vs. Mac/Linux using `/`). Use <Code>path.join()</Code> to safely combine path segments.</li>
              <li><strong className="text-gray-900">`http`:</strong> The module used to create HTTP servers and make HTTP requests. (See 7.1 Example).</li>
              <li><strong className="text-gray-900">`url`:</strong> A utility module for parsing URL strings. You can use it to easily extract parts of a URL, like the query parameters (<Code>?user=123</Code>), pathname (<Code>/api/users</Code>), or host.</li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>This example uses <Code>fs</Code> to read a file and <Code>path</Code> to build the file path safely. Create a file named <Code>welcome.txt</Code> in the same directory with the text "Hello from the file!".</p>
            <CodeBlock code={`
const fs = require('fs');
const path = require('path');

// 1. Build a safe, cross-platform path
// __dirname is a global Node variable: the path of the current directory
const filePath = path.join(__dirname, 'welcome.txt');

console.log('Reading file from:', filePath);

// 2. Read the file asynchronously (non-blocking)
// It takes a path, encoding, and a callback function
fs.readFile(filePath, 'utf8', (err, data) => {
  // 3. The callback runs when the file is read
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
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p>This diagram shows how your <Code>server.js</Code> uses <Code>require()</Code> to import Node.js Core Modules, which are built into the Node.js runtime.</p>
            <ImageDiagram 
              src="https://i.imgur.com/G5gJgXQ.png" 
              alt="Node.js Core Modules Diagram" 
            />
            <ImageDiagram 
              src="https://placehold.co/700x200/EBF8FF/4299E1?text=Your+App.js+--%3E+require('fs')++--%3E+Node.js+Runtime" 
              alt="Node.js Core Modules Diagram" 
            />
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Key Question (Infosys/Wipro):</strong> "What is the difference between <Code>fs.readFileSync</Code> and <Code>fs.readFile</Code>?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "<Code>readFileSync</Code> is synchronous or 'blocking'. The server will stop and wait for the file to be read. <Code>readFile</Code> is asynchronous or 'non-blocking'. It offloads the task and executes a callback when done, allowing the server to handle other requests."</li>
              <li><strong className="text-gray-900">Key Question (All Companies):</strong> "Why should you use <Code>path.join()</Code> instead of string concatenation (e.g., <Code>__dirname + '/myfile.txt'</Code>)?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "<Code>path.join()</Code> automatically handles path separators (`/` vs. `\`) for different operating systems (like Linux and Windows), making the code cross-platform compatible and preventing bugs."</li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Using synchronous methods like <Code>fs.readFileSync</Code> inside a server request handler. This is a major performance bottleneck and interviewers look for this mistake.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>Which core module is used for working with file and directory paths?</li>
            <li>Which <Code>fs</Code> method is "non-blocking"? (<Code>fs.readFile</Code> or <Code>fs.readFileSync</Code>)</li>
            <li>What global variable gives you the path of the current file's directory?</li>
          </QuizSection>
        </div>
      );

    // --- 7.3: npm & Package Management ---
    case 'npm-package-management':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">7.3: npm & Package Management (Essential Skill)</h2>
          
          <NoteSection title="Concept">
            <p><strong className="text-gray-900">npm (Node Package Manager)</strong> is the world's largest software registry (repository) and a command-line tool for managing your project's dependencies.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">`npm init` or `npm init -y`:</strong> Initializes a new Node.js project by creating a <Code>package.json</Code> file. The <Code>-y</Code> flag accepts all defaults.</li>
              <li><strong className="text-gray-900">`package.json`:</strong> The manifest file for your project. It lists project metadata, <strong className="text-gray-900">dependencies</strong>, and <strong className="text-gray-900">scripts</strong> (like <Code>npm start</Code>).</li>
              <li><strong className="text-gray-900">`npm install &lt;packageName&gt;`:</strong> Installs a package (e.g., <Code>npm install express</Code>). It adds the package to <Code>node_modules</Code> and lists it as a dependency in <Code>package.json</Code>.</li>
              <li><strong className="text-gray-900">`node_modules`:</strong> The local directory where all your project's dependencies are downloaded and stored. You should <strong className="text-gray-900">never</strong> commit this folder to Git (add it to <Code>.gitignore</Code>).</li>
              <li><strong className="text-gray-900">`dependencies` vs. `devDependencies`:</strong>
                <ul className="list-disc ml-6 mt-1">
                  <li><strong className="text-gray-900">`dependencies` (e.g., `express`):</strong> Required for the application to run in production. Installed with <Code>npm install &lt;pkg&gt;</Code>.</li>
                  <li><strong className="text-gray-900">`devDependencies` (e.g., `nodemon`):</strong> Only needed for development (like testing or auto-restarting). Installed with <Code>npm install &lt;pkg&gt; --save-dev</Code> (or <Code>-D</Code>).</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">`package-lock.json`:</strong> An auto-generated file that "locks" the exact versions of all dependencies. This ensures that every developer on the team (and the production server) installs the <strong className="text-gray-900">exact same versions</strong>, preventing "it works on my machine" bugs. You <strong className="text-gray-900">should</strong> commit this file to Git.</li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>A typical <Code>package.json</Code> file. Note the <Code>scripts</Code>, <Code>dependencies</Code>, and <Code>devDependencies</Code> sections.</p>
            <CodeBlock code={`
{
  "name": "my-cool-server",
  "version": "1.0.0",
  "description": "A demo server for my project",
  "main": "server.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p>This shows the <Code>npm</Code> workflow. <Code>npm install</Code> reads <Code>package.json</Code>, downloads packages from the npm Registry, and puts them in <Code>node_modules</Code>.</p>
            <ImageDiagram 
              src="https://i.imgur.com/39mN1q0.png" 
              alt="NPM Install Workflow" 
            />
            <ImageDiagram 
              src="https://placehold.co/800x200/EBF8FF/4299E1?text=package.json+--%3E+npm+install+--%3E+npm+Registry+--%3E+node_modules" 
              alt="NPM Workflow" 
            />
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Key Question (All Companies):</strong> "What is the difference between <Code>package.json</Code> and <Code>package-lock.json</Code>? Which one should you commit to Git?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "<Code>package.json</Code> lists the *semantic versions* (e.g., `^4.18.2`), which allows for minor updates. <Code>package-lock.json</Code> locks the *exact installed versions* and their sub-dependencies. You must commit <Code>package-lock.json</Code> to ensure consistent builds across all environments."</li>
              <li><strong className="text-gray-900">Key Question (TCS/Infosys):</strong> "What is the purpose of <Code>nodemon</Code> and why is it a <Code>devDependency</Code>?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "<Code>nodemon</Code> is a tool that automatically restarts the Node.js server when file changes are detected. It's a <Code>devDependency</Code> because it's only used during development and not needed for the server to run in production."</li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Committing the <Code>node_modules</Code> folder to Git. This is a huge red flag. Always add it to <Code>.gitignore</Code>.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What command creates a new <Code>package.json</Code> file?</li>
            <li>What file should you add to <Code>.gitignore</Code> to avoid committing dependencies?</li>
            <li>What file ensures all developers use the exact same package versions?</li>
            <li>What flag do you use to install a package as a <Code>devDependency</Code>?</li>
          </QuizSection>
        </div>
      );

    // --- 7.4: Creating Your First Node.js Server ---
    case 'creating-node-server':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">7.4: Creating Your First Node.js Server (http vs. Express)</h2>
          
          <NoteSection title="Concept">
            <p>You can create a web server in Node.js using the built-in <Code>http</Code> module, but it is very low-level. Most companies use <strong className="text-gray-900">Express.js</strong>, a fast and minimalist web framework for Node.js.</p>
            <p><strong className="text-gray-900">Why Express.js?</strong> The <Code>http</Code> module (see 7.1) requires you to manually parse URLs, handle request methods (GET, POST), and set headers. Express simplifies all of this with:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Routing:</strong> Easily define endpoints like <Code>app.get('/users', ...)</Code> or <Code>app.post('/login', ...)</Code>.</li>
              <li><strong className="text-gray-900">Middleware:</strong> Functions that run between the request and the response. Used for logging, authentication (checking if a user is logged in), and parsing request bodies.</li>
              <li><strong className="text-gray-900">Request/Response Objects:</strong> Provides simple objects (<Code>req</Code>, <Code>res</Code>) to get request data (e.g., <Code>req.body</Code>, <Code>req.params</Code>) and send responses (e.g., <Code>res.json()</Code>, <Code>res.send()</Code>).</li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>Here is the same "Hello World" server, but built with <strong className="text-gray-900">Express.js</strong>. Notice how much cleaner it is. First, run <Code>npm install express</Code>.</p>
            <CodeBlock code={`
const express = require('express');

// 1. Initialize the Express app
const app = express();
const port = 3000;

// 2. Define a "route" for the root URL ('/')
// This handles GET requests to http://localhost:3000/
app.get('/', (req, res) => {
  // 3. 'res.send()' is much simpler than http module
  res.send('Hello, World from Express.js!');
});

// Example of another route
app.get('/api/user', (req, res) => {
  // 4. 'res.json()' automatically sets Content-Type to application/json
  res.json({ id: 1, name: 'Alex' });
});

// 5. Start the server
// Express handles 404s automatically

app.listen(port, () => {
  console.log(\`Server (Express.js) running on port \${port\}\`);
});
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p>This diagram shows how Express.js acts as a "middleware" layer on top of the built-in Node.js <Code>http</Code> module to make server creation easier.</p>
            <ImageDiagram 
              src="https://i.imgur.com/r6A49J9.png" 
              alt="Express.js on top of Node.js HTTP" 
            />
            <ImageDiagram 
              src="https://placehold.co/800x200/EBF8FF/4299E1?text=HTTP+Request+--%3E+Express.js+(Routing,+Middleware)+--%3E+Node.js+HTTP+Server" 
              alt="Express.js on top of Node.js" 
            />
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Key Question (All Companies):</strong> "Why do we use Express.js instead of the <Code>http</Code> module?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "The <Code>http</Code> module is very basic. Express provides a robust framework for <strong className="text-gray-900">routing</strong> (handling different URLs and methods), <strong className="text-gray-900">middleware</strong> (like authentication and logging), and simple response methods like <Code>res.json()</Code>, which drastically speeds up development."</li>
              <li><strong className="text-gray-900">TCS/Infosys/Wipro:</strong> You will almost certainly be asked to write a simple Express server that has a <Code>GET</Code> route and a <Code>POST</Code> route. Practice the example above.</li>
              <li><strong className="text-gray-900">Amazon/Startups:</strong> Will ask "What is middleware? Give an example." Your answer: "Middleware is a function that has access to the <Code>req</Code>, <Code>res</Code>, and <Code>next</Code> objects. It can execute code, modify <Code>req</Code> or <Code>res</Code>, or end the request. A common example is an authentication middleware that checks for a valid token before calling <Code>next()</Code> to proceed to the route handler."</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What is Express.js? (A. A Node.js runtime, B. A web framework, C. A database)</li>
            <li>What function in Express is used to send a JSON response?</li>
            <li>What command installs Express.js?</li>
            <li>What Express function is used to handle a GET request to the <Code>/profile</Code> URL?</li>
          </QuizSection>
        </div>
      );

    // --- 7.5: Understanding Modules & Module.exports ---
    case 'understanding-modules':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">7.5: Understanding Modules & Module.exports (CommonJS)</h2>
          
          <NoteSection title="Concept">
            <p>To keep code organized, Node.js uses a module system. By default, it uses the <strong className="text-gray-900">CommonJS</strong> module system. (Note: Modern JavaScript now uses <strong className="text-gray-900">ES Modules</strong>: <Code>import</Code>/<Code>export</Code>).</p>
            <p>In CommonJS:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Each file is a separate <strong className="text-gray-900">module</strong>. Variables and functions defined in one file are <strong className="text-gray-900">private</strong> to that file by default.</li>
              <li><strong className="text-gray-900">`require()`:</strong> The global function used to <strong className="text-gray-900">import</strong> (load) a module (e.g., <Code>const fs = require('fs');</Code>).</li>
              <li><strong className="text-gray-900">`module.exports`:</strong> A special object in every module. Anything you assign to <Code>module.exports</Code> becomes <strong className="text-gray-900">public</strong> and can be imported by other files.</li>
              <li><strong className="text-gray-900">`exports`:</strong> A shorthand variable that points to <Code>module.exports</Code>. You can use <Code>exports.myFunction = ...</Code> as a shortcut, but <strong className="text-gray-900">be careful:</strong> you cannot reassign it (e.g., <Code>exports = ...</Code> will not work; use <Code>module.exports = ...</Code> for that).</li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>Here, we create a utility module <Code>utils.js</Code> and import it into <Code>server.js</Code>.</p>
            
            <h4 className="font-semibold mt-2">File: `utils.js`</h4>
            <CodeBlock code={`
// This function is private to utils.js
const privateAdd = (a, b) => {
  return a + b;
};

// This function is public
const add = (a, b) => {
  return privateAdd(a, b);
};

// This function is also public
const subtract = (a, b) => {
  return a - b;
};

// We "export" the public functions
module.exports = {
  add,
  subtract
};

// --- OR using the 'exports' shorthand ---
// exports.add = (a, b) => { ... };
// exports.subtract = (a, b) => { ... };
            `} />

            <h4 className="font-semibold mt-2">File: `server.js`</h4>
            <CodeBlock code={`
// 1. Import our local utils.js module
// We use './' to signify a local file
const myUtils = require('./utils.js');

// 2. Now we can use the exported functions
const sum = myUtils.add(5, 3);
const diff = myUtils.subtract(10, 4);

console.log('Sum:', sum);       // Output: Sum: 8
console.log('Difference:', diff); // Output: Difference: 6

// 3. This will fail, because privateAdd was not exported
// const privateSum = myUtils.privateAdd(1, 1); // TypeError: myUtils.privateAdd is not a function
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p>This diagram shows <Code>utils.js</Code> placing its public functions onto the <Code>module.exports</Code> object, which <Code>server.js</Code> then imports using <Code>require()</Code>.</p>
            <ImageDiagram 
              src="https://i.imgur.com/gKkP0C1.png" 
              alt="CommonJS module.exports workflow" 
            />
            <ImageDiagram 
              src="https://placehold.co/800x200/EBF8FF/4299E1?text=utils.js+--%3E+module.exports={...}+--%3E+server.js+imports+with+require()" 
              alt="CommonJS module.exports" 
            />
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Key Question (All Companies):</strong> "What is the difference between <Code>module.exports</Code> and <Code>exports</Code>?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "<Code>exports</Code> is just a reference (shorthand) to <Code>module.exports</Code>. You can add properties to it (e.g., <Code>exports.add = ...</Code>), but you cannot reassign the <Code>exports</Code> variable itself (e.g., <Code>exports = ...</Code>) because that just changes the local variable, not <Code>module.exports</Code>. To export a single class or function, you must assign it directly to <Code>module.exports</Code>."</li>
              <li><strong className="text-gray-900">Key Question (Infosys/Wipro):</strong> "What is the difference between CommonJS and ES Modules?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "CommonJS is the traditional Node.js module system, using <Code>require()</Code> and <Code>module.exports</Code>. ES Modules (ESM) is the modern JavaScript standard, using <Code>import</Code> and <Code>export</Code>. CommonJS imports are synchronous, while ESM imports are asynchronous."</li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Trying to use <Code>import</Code> syntax in a default Node.js file (which expects CommonJS) or vice-versa, leading to syntax errors.</li>
            </ul>
          </NoteSection>

          {/* <QuizSection> */}
            <li>What function is used to import a module in CommonJS?</li>
            <li>What object do you assign functions to in order to make them public?</li>
            {/* <li>True or False: <Code>exports = { add, subtract }</Code> is a valid way to export modules.</li> */}
          {/* </QuizSection> */}
        </div>
      );

    // --- 7.6: Asynchronous Programming in Node.js ---
    case 'asynchronous-programming-node':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">7.6: Asynchronous Programming in Node.js (Callbacks, Promises, Async/Await)</h2>
          
          <NoteSection title="Concept">
            <p>Because Node.js is single-threaded, synchronous (blocking) code is disastrous. Asynchronous (non-blocking) programming is essential. There are three main patterns for handling asynchronous operations.</p>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li><strong className="text-gray-900">Callbacks (The "Old Way"):</strong> A function you pass as an argument to another function, which gets "called back" when the operation completes.
                <ul>
                  <li><strong className="text-gray-900">Pros:</strong> Simple for one operation.</li>
                  <li><strong className="text-gray-900">Cons:</strong> Leads to "Callback Hell" (Pyramid of Doom) when nesting many operations, making code hard to read and maintain.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Promises (The "Modern Way"):</strong> An object representing the eventual completion (or failure) of an asynchronous operation.
                <ul>
                  <li><strong className="text-gray-900">States:</strong> `pending`, `fulfilled` (succeeded), or `rejected` (failed).</li>
                  <li><strong className="text-gray-900">Pros:</strong> Allows chaining operations with <Code>.then()</Code> (for success) and <Code>.catch()</Code> (for errors), which is much cleaner than callbacks.</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Async/Await (The "Best Way"):</strong> Syntactic sugar built on top of Promises. It makes your asynchronous code look and behave like synchronous code, making it extremely easy to read.
                <ul>
                  <li><strong className="text-gray-900">`async`:</strong> Declares a function as asynchronous; it automatically returns a Promise.</li>
                  <li><strong className="text-gray-900">`await`:</strong> Pauses the execution of an <Code>async</Code> function *until* a Promise settles (is fulfilled or rejected). It can <strong className="text-gray-900">only</strong> be used inside an <Code>async</Code> function.</li>
                  <li>You must use <Code>try...catch</Code> blocks to handle errors (rejections) when using <Code>await</Code>.</li>
                </ul>
              </li>
            </ol>
          </NoteSection>

          <NoteSection title="Example">
            <p>Let's read a file using all three patterns. The <Code>fs/promises</Code> module provides functions that return Promises instead of using callbacks.</p>
            
            <h4 className="font-semibold mt-2">Pattern 1: Callback</h4>
            <CodeBlock code={`
const fs = require('fs');
fs.readFile('./welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
            `} />

            <h4 className="font-semibold mt-2">Pattern 2: Promise (.then/.catch)</h4>
            <CodeBlock code={`
const fs = require('fs').promises; // Note: .promises
fs.readFile('./welcome.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
            `} />

            <h4 className="font-semibold mt-2">Pattern 3: Async/Await (Recommended)</h4>
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

// 5. Call the function
readFileAsync();
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p>This shows the evolution of async patterns, from "Callback Hell" to clean, readable "Async/Await."</p>
            <ImageDiagram 
              src="https://i.imgur.com/2sL7bH7.png" 
              alt="Async/Await vs Promises vs Callbacks" 
            />
            <ImageDiagram 
              src="https://placehold.co/800x250/EBF8FF/4299E1?text=Callback+Hell+(Pyramid)+--%3E+Promises+(.then+chain)+--%3E+Async/Await+(Linear)" 
              alt="Async Code Evolution" 
            />
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Key Question (Amazon/Capgemini):</strong> "What is Callback Hell and how do you solve it?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "Callback Hell is when you nest multiple asynchronous callbacks, creating a 'pyramid of doom' that is hard to read and debug. You solve it by using <strong className="text-gray-900">Promises</strong> with <Code>.then()</Code> chains, or even better, by using <strong className="text-gray-900">Async/Await</strong> to write the code in a clean, synchronous-looking style."</li>
              <li><strong className="text-gray-900">Key Question (All Companies):</strong> "What is the difference between a Promise and Async/Await?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "A Promise is an object that holds the future state of an async operation. Async/Await is <strong className="text-gray-900">syntactic sugar</strong> for Promises. The <Code>async</Code> keyword makes a function return a Promise, and the <Code>await</Code> keyword pauses the function until a Promise is settled. It just makes Promise-based code look cleaner."</li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Forgetting to use <Code>await</Code> on a promise-returning function (e.g., <Code>const data = fs.readFile(...)</Code>). The <Code>data</Code> variable will just be a *pending Promise object*, not the file content.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What are the three states of a Promise?</li>
            <li>What keyword pauses execution inside an <Code>async</Code> function until a Promise settles?</li>
            <li>How do you handle errors when using <Code>await</Code>?</li>
            <li>True or False: You can use <Code>await</Code> inside any regular function.</li>
          </QuizSection>
        </div>
      );

    // --- 7.7: File System Operations ---
    case 'file-system-operations':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">7.7: File System Operations (fs module)</h2>
          
          <NoteSection title="Concept">
            <p>The <Code>fs</Code> module is the primary way Node.js interacts with the computer's file system. Almost every method comes in three forms:
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li><strong className="text-gray-900">Asynchronous (Callback):</strong> <Code>fs.readFile(path, cb)</Code>. Non-blocking. The recommended way in older (callback-based) code.</li>
              <li><strong className="text-gray-900">Synchronous (Blocking):</strong> <Code>fs.readFileSync(path)</Code>. Blocks the entire Event Loop. <strong className="text-gray-900">Never use this in a server's request handler.</strong> Only use it for one-time setup tasks when the server is starting (e.g., loading a config file).</li>
              <li><strong className="text-gray-900">Promise-based:</strong> <Code>fs.promises.readFile(path)</Code>. Returns a Promise. This is the modern standard, designed to be used with <Code>async/await</Code>.</li>
            </ol>
            
            <p className="mt-2"><strong className="text-gray-900">Common Methods:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">`fs.promises.readFile(path, [options])`:</strong> Reads a file's contents.</li>
              <li><strong className="text-gray-900">`fs.promises.writeFile(path, data, [options])`:</strong> Writes data to a file, creating it if it doesn't exist (or overwriting it).</li>
              <li><strong className="text-gray-900">`fs.promises.appendFile(path, data, [options])`:</strong> Appends data to the end of a file.</li>
              <li><strong className="text-gray-900">`fs.promises.readdir(path)`:</strong> Reads the contents of a directory (returns an array of file/folder names).</li>
              <li><strong className="text-gray-900">`fs.promises.stat(path)`:</strong> Gets statistics about a file (e.g., size, permissions, <Code>stats.isFile()</Code>, <Code>stats.isDirectory()</Code>).</li>
              <li><strong className="text-gray-900">`fs.promises.mkdir(path)`:</strong> Creates a new directory.</li>
              <li><strong className="text-gray-900">`fs.promises.unlink(path)`:</strong> Deletes a file.</li>
              <li><strong className="text-gray-900">`fs.promises.rmdir(path)`:</strong> Deletes a directory.</li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>A modern example using <Code>async/await</Code> with the <Code>fs.promises</Code> module to write, read, and then delete a file.</p>
            <CodeBlock code={`
const fs = require('fs').promises;
const path = require('path');

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

    // 3. Append to the file
    await fs.appendFile(filePath, '\\nAppended new line.', 'utf8');
    console.log('File appended successfully.');
    
    // 4. Get file stats
    const stats = await fs.stat(filePath);
    console.log('Is this a file?', stats.isFile());
    console.log('File size:', stats.size, 'bytes');

    // 5. Delete the file
    await fs.unlink(filePath);
    console.log('File deleted successfully.');

  } catch (err) {
    console.error('An error occurred:', err);
  }
}

fileLifecycleDemo();
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p>This shows the <Code>fs.promises</Code> module providing the `async` functions that your application <Code>await</Code>s.</p>
            <ImageDiagram 
              src="https://i.imgur.com/k3qC7O4.png" 
              alt="fs.promises workflow" 
            />
            <ImageDiagram 
              src="https://placehold.co/800x200/EBF8FF/4299E1?text=App.js+(await)+--%3E+fs.promises.writeFile()+--%3E+File+System" 
              alt="fs.promises workflow" 
            />
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Key Question (All Companies):</strong> "When should you use <Code>fs.readFileSync</Code>?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "Almost never inside a server. The only acceptable time is during the server's <strong className="text-gray-900">initial startup</strong> process, for example, to load a necessary configuration file or an SSL certificate before the server starts accepting requests. In all other cases, you must use the asynchronous <Code>fs.readFile</Code> or <Code>fs.promises.readFile</Code>."</li>
              <li><strong className="text-gray-900">TCS/Infosys Task:</strong> "Write a Node.js script that reads a directory, filters for all <Code>.txt</Code> files, and logs their names."</li>
              <li><strong className="text-gray-900">Your approach:</strong> Use <Code>fs.promises.readdir()</Code>, then use <Code>Array.filter()</Code> on the result (e.g., <Code>files.filter(file =&gt; file.endsWith('.txt'))</Code>).</li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Using synchronous <Code>fs</Code> methods everywhere. This is the #1 red flag for junior Node.js developers as it shows a misunderstanding of the Event Loop.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>What module do you <Code>require</Code> to get Promise-based file system methods?</li>
            <li>What <Code>fs</Code> method is used to delete a file?</li>
            <li>Why should you avoid <Code>fs.readFileSync</Code> in a web server?</li>
          </QuizSection>
        </div>
      );

    // --- 7.8: Environment Variables & dotenv ---
    case 'environment-variables':
      return (
        <div className="p-8 font-sans max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">7.8: Environment Variables & dotenv</h2>
          
          <NoteSection title="Concept">
            <p><strong className="text-gray-900">Environment Variables</strong> are key-value pairs provided to your application <strong className="text-gray-900">externally</strong> by the operating system (e.g., the server). They are used to store sensitive data (like API keys, database passwords) and configuration (like <Code>PORT</Code> or <Code>NODE_ENV</Code>) that should <strong className="text-gray-900">not</strong> be hard-coded into your application.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Why?</strong> It's a major security risk to commit API keys and passwords to Git. Environment variables keep your secrets separate from your code.</li>
              <li><strong className="text-gray-900">`process.env`:</strong> Node.js makes all environment variables available on the global <Code>process.env</Code> object (e.g., <Code>process.env.PORT</Code>).</li>
              <li><strong className="text-gray-900">`dotenv` package:</strong> In development, it's annoying to set 20 variables in your terminal every time. The <Code>dotenv</Code> package (<Code>npm install dotenv</Code>) solves this.</li>
              <li>It loads variables from a file named <Code>.env</Code> in your project's root directory and automatically adds them to <Code>process.env</Code>.</li>
              <li>You <strong className="text-gray-900">MUST</strong> add your <Code>.env</Code> file to <Code>.gitignore</Code>. You commit a <Code>.env.example</Code> file instead, which lists the *keys* but not the *values*.</li>
            </ul>
          </NoteSection>

          <NoteSection title="Example">
            <p>1. Install <Code>dotenv</Code>: <Code>npm install dotenv</Code><br/>
               2. Create a <Code>.env</Code> file.<br/>
               3. Create a <Code>server.js</Code> file.</p>
            
            <h4 className="font-semibold mt-2">File: `.env` (MUST be in .gitignore)</h4>
            <CodeBlock code={`
# This is a comment
PORT=8080
DATABASE_URL="mongodb://user:password@mydb.com"
API_KEY="abc123xyz789"
NODE_ENV="development"
            `} />

            <h4 className="font-semibold mt-2">File: `server.js` (Loads the .env file)</h4>
            <CodeBlock code={`
// 1. Load variables from .env file FIRST
// This should be at the very top of your application
require('dotenv').config();

// 2. Now you can access the variables from process.env
const port = process.env.PORT || 3000; // Use 3000 as a default
const dbUrl = process.env.DATABASE_URL;
const env = process.env.NODE_ENV;

console.log('Application is running in', env, 'mode.');
console.log('Connecting to database at', dbUrl);

// ... (Your Express server code) ...
// app.listen(port, () => { ... });
console.log(\`Server will listen on port \${port\}\`);
            `} />
          </NoteSection>

          {/* <NoteSection title="Diagram">
            <p>This shows <Code>dotenv</Code> reading the <Code>.env</Code> file and injecting its values into the <Code>process.env</Code> object, which your app can then use.</p>
            <ImageDiagram 
              src="https://i.imgur.com/v8tA9ZJ.png" 
              alt="dotenv workflow" 
            />
            <ImageDiagram 
              src="https://placehold.co/800x200/FFF5E5/ED8936?text=.env+File+--%3E+dotenv.config()+--%3E+process.env+Object+--%3E+Your+App.js" 
              alt="dotenv workflow" 
            />
          </NoteSection> */}

          <NoteSection title="Interview & Company Context">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-gray-900">Key Question (All Companies):</strong> "How do you handle sensitive data like API keys or database passwords in your Node.js application?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "You must <strong className="text-gray-900">never</strong> hard-code them. You store them in <strong className="text-gray-900">Environment Variables</strong>. For development, we use the <Code>dotenv</Code> package to load these variables from a <Code>.env</Code> file, and that <Code>.env</Code> file is always added to <Code>.gitignore</Code> to keep secrets out of the codebase."</li>
              <li><strong className="text-gray-900">Key Question (Infosys/Wipro):</strong> "What is <Code>process.env.NODE_ENV</Code> used for?"</li>
              <li><strong className="text-gray-900">Your Answer:</strong> "It's a standard variable used to check if the application is in <Code>'development'</Code>, <Code>'production'</Code>, or <Code>'test'</Code> mode. This allows the app to behave differently, for example, by enabling extra logging in development or using optimized settings in production."</li>
              <li><strong className="text-gray-900">Common Mistake:</strong> Committing the <Code>.env</Code> file to Git. This is a critical security failure and a major red flag in a code review or interview.</li>
            </ul>
          </NoteSection>

          <QuizSection>
            <li>Why should you not hard-code API keys in your code?</li>
            <li>What package is used to load environment variables from a file?</li>
            <li>What file should you <strong className="text-gray-900">always</strong> add to <Code>.gitignore</Code> when using this package?</li>
            <li>What is the name of the global Node.js object that holds all environment variables?</li>
          </QuizSection>
        </div>
      );

    // --- Default Case ---
    default:
      return <div>Select a subchapter</div>;
  }
};

export default Chapter7;