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

// --- Main Chapter 8, Part 1 Component ---

const Chapter8Part1 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'introduction-to-express':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.1: Introduction to Express.js</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Server Framework"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Using Node's built-in <strong>`http`</strong> module is like building a car from raw steel and individual parts. It's possible, but incredibly low-level and difficult.</p>
            <p><strong>Express.js</strong> is a <strong>framework</strong> for Node.js. It's like a pre-built "car chassis." It gives you the frame, wheels, and engine block, so you can stop worrying about the low-level plumbing and start focusing on the important parts, like <em>where the car should go</em> (routing).</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Express.js</strong> is the de-facto standard, minimalist framework for building web servers and <strong>RESTful APIs</strong> in Node.js. It simplifies the built-in `http` module by providing easy-to-use tools for:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Routing:</strong> This is its main feature. It lets you map HTTP methods (GET, POST, PUT, DELETE) and URL paths (e.g., `/users`, `/products`) to specific handler functions.</li>
              <li><strong>Middleware:</strong> Functions that run in the "middle" of the request-response cycle. They are used for tasks like logging, authentication (checking if a user is logged in), and parsing request bodies.</li>
              <li><strong>Request/Response Objects:</strong> It provides simple, powerful <strong>`req`</strong> (request) and <strong>`res`</strong> (response) objects.
                <ul>
                  <li><Code>req.params</Code>: To get URL parameters (e.g., `:id`).</li>
                  <li><Code>req.query</Code>: To get query strings (e.g., `?search=...`).</li>
                  <li><Code>res.json()</Code>: To send a JSON response (auto-sets headers).</li>
                  <li><Code>res.send()</Code>: To send a plain text/HTML response.</li>
                  <li><Code>res.status(404)</Code>: To set the HTTP status code.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Simple Express.js Server</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Notice how much cleaner this is than the `http` example.
            <br/>1. Run <Code>npm install express</Code>.
            <br/>2. Save this as <Code>server.js</Code> and run <Code>node server.js</Code>.</p>
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
                <strong>What's the difference between Node.js and Express.js?</strong>
                <p className="pl-4"><strong>Node.js</strong> is the <em>runtime</em>—it's the "engine" that lets you run JS on a server. By itself, it's very low-level. <strong>Express.js</strong> is a <em>framework* that runs *on</em> Node.js. It gives you easy-to-use tools for common backend tasks, like handling routes (e.g., `/api/users`), parsing request bodies, and managing middleware.</p>
              </li>
              <li>
                <strong>Why do we use Express.js instead of the `http` module?</strong>
                <p className="pl-4">The `http` module is very basic. You have to manually parse the URL (e.g., `if (req.url === '/users')`) and HTTP method (`if (req.method === 'POST')`). Express provides a robust <strong>router</strong> (`app.post('/users', ...)`), a <strong>middleware</strong> system, and simple response methods (`res.json()`) that handle all of that complexity for you.</p>
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
    case 'express-setup':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.2: Express Setup & Basic Server</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Store's Grand Opening</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Setting up an Express server is like opening a new store. You have a clear checklist:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>1. Sign the Lease:</strong> Create your project folder and initialize it with `npm init -y`. This creates your `package.json` (your lease agreement).</li>
              <li><strong>2. Buy the Shelves:</strong> Install your main dependency: `npm install express`.</li>
              <li><strong>3. Stock the Shelves:</strong> Write your server code in `server.js` (e.g., `app.get(...)`).</li>
              <li><strong>4. Flip the "Open" Sign:</strong> Start the server by running `node server.js`.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Setting up an Express project involves initializing `npm`, installing the `express` package, and creating an entry file (e.g., `server.js` or `index.js`).</p>
            <p><strong>Core Steps:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Create a new directory (e.g., `my-server`) and `cd` into it.</li>
              <li>Run <strong>`npm init -y`</strong> to create a `package.json` file.</li>
              <li>Run <strong>`npm install express`</strong> to install the framework.</li>
              <li>(Recommended) Run <strong>`npm install -D nodemon`</strong> to install `nodemon`, a tool that auto-restarts your server on file changes.</li>
              <li>Create your `server.js` file.</li>
              <li>Import `express`, create an `app` instance, define routes, and call <strong>`app.listen()`</strong> to start the server.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Project Files</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the minimal setup for an Express project.</p>
            
            <p className="font-semibold mt-2">1. `package.json` (After `npm install express`)</p>
            <CodeBlock code={`
{
  "name": "my-server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
            `} language="json" />

            <p className="font-semibold mt-2">2. `server.js` (The Application)</p>
            <CodeBlock code={`
// 1. Import Express
import express from 'express';

// 2. Create an instance of the app
const app = express();
const port = 3000;

// 3. Define a route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// 4. Start the server
app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});
            `} language="javascript" />
            
            <p className="font-semibold mt-2">3. How to Run (in terminal)</p>
            <CodeBlock code={`
# To run in development (with auto-reload)
npm run dev

# To run in production
npm start
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is `app.listen()` actually doing?</strong>
                <p className="pl-4">It's the command that "starts the server." It binds the application to a specific port on your machine and begins "listening" for any incoming HTTP requests sent to that port. It's the last thing you call in your file.</p>
              </li>
              <li>
                <strong>What is `nodemon` and why is it a `devDependency`?</strong>
                <p className="pl-4">`nodemon` is a development tool that automatically restarts your Node server every time you save a file. This saves you from having to manually stop (`Ctrl+C`) and start (`node server.js`) your server for every change. It's a `devDependency` because it's only for development; in production, a process manager (like PM2 or your hosting service) handles restarting.</p>
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
    case 'routing-parameters':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.3: Routing & Route Parameters</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Mail Sorter</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Routing</strong> is the "mail sorter" for your server. When a request (a letter) arrives, the router looks at the *address* (the URL path) and the *method* (GET, POST) to decide which "mailbox" (handler function) to put it in.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>`GET /users`: "Put this in the 'Get All Users' mailbox."</li>
              <li>`POST /users`: "Put this in the 'Create New User' mailbox."</li>
              <li><strong>Route Parameters (`/users/:id`):</strong> This is a "dynamic" mailbox. It means "Put any mail addressed to `/users/` followed by *any ID number* in this box."</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Routing</strong> is the mechanism for defining how your application responds to a client request to a specific endpoint (a URL and an HTTP method).</p>
            <p><strong>Route Definition Syntax:</strong></p>
            <Code>app.METHOD(PATH, HANDLER)</Code>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`METHOD`</strong>: An HTTP verb (e.g., `get`, `post`, `put`, `delete`).</li>
              <li><strong>`PATH`</strong>: The URL path on the server (e.g., `/`, `/about`, `/api/users`).</li>
              <li><strong>`HANDLER`</strong>: The callback function that runs when the route is matched. This function receives the <strong>`req` (Request)</strong> and <strong>`res` (Response)</strong> objects.</li>
            </ul>
            <p><strong>Accessing Request Data:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Route Parameters (`req.params`):</strong> For dynamic parts of the URL.
                <ul>
                  <li><strong>Path:</strong> `/users/:id`</li>
                  <li><strong>URL:</strong> `/users/123`</li>
                  <li><strong>Code:</strong> `req.params.id` (which will be `"123"`)</li>
                </ul>
              </li>
              <li><strong>Query Parameters (`req.query`):</strong> For key-value pairs *after* the `?`.
                <ul>
                  <li><strong>Path:</strong> `/search`</li>
                  <li><strong>URL:</strong> `/search?q=react&sort=new`</li>
                  <li><strong>Code:</strong> `req.query.q` (which will be `"react"`)</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Routes, Params, and Queries</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This server shows how to define different routes and access their data.</p>
            <CodeBlock code={`
import express from 'express';
const app = express();
const port = 3000;

// 1. Basic static route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// 2. Route for '/about'
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// 3. Route with a Query Parameter
// Try accessing: http://localhost:3000/search?q=react
app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  res.send(\`You are searching for: \${searchTerm}\`);
});

// 4. Route with a Route Parameter
// Try accessing: http://localhost:3000/users/123
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`You are viewing the profile for user \${userId}\`);
});

app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is the difference between `req.params` and `req.query`?</strong>
                <p className="pl-4"><strong>`req.params`</strong> comes from <strong>route parameters</strong>, which are named segments of the URL path (e.g., `/users/:id`). <strong>`req.query`</strong> comes from the <strong>query string</strong>, which is the key-value pairs after the `?` (e.g., `/search?q=react`). You use `req.params` to get a *required* identifier (like a user ID) and `req.query` to get *optional* parameters (like search or filter terms).</p>
              </li>
              <li>
                <strong>Does the order of my routes matter?</strong>
                <p className="pl-4">Yes, very much. Express matches routes from top to bottom. A dynamic route (like `/users/:id`) will *also* match `/users/new`. If you put `/users/:id` *before* `/users/new`, the `/users/new` route will *never* be reached. You must always place your most specific, static routes (like `/users/new`) *before* your general, dynamic routes (like `/users/:id`).</p>
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
    case 'middleware-concepts':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.4: Middleware Concepts & Usage</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Assembly Line</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of an Express server as an "assembly line" for handling a request. The final stop is your route handler (e.g., `app.get('/users', ...)`). <strong>Middleware</strong> functions are the "inspection stations" *along* that assembly line.</p>
            <p>A request arrives. It goes to Middleware 1 (e.g., a "Logger" that writes down the time). The Logger calls `next()` to pass it to Middleware 2 (e.g., an "Auth Guard" that checks its ID). The Auth Guard calls `next()` to pass it to the final station, your route handler.</p>
            <p>If the Auth Guard *doesn't* like the ID, it can *stop* the line and send back an error, and the request will *never* reach the route handler.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>middleware</strong> function is a function that has access to the <strong>request object (`req`)</strong>, the <strong>response object (`res`)</strong>, and the <strong>`next` function</strong> in the application's request-response cycle.</p>
            <p><strong>The `next()` Function:</strong></p>
            <p>This is the most important part. `next()` is a function that, when called, passes control to the *next* middleware function in the stack. If you do not call `next()` (or send a response with `res.send()`), the request will be left "hanging," and the client will eventually time out. This is a very common bug.</p>
            <p><strong>Types of Middleware:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Application-level:</strong> Bound to the `app` object using `app.use()`. Runs for *every* request to the app.</li>
              <li><strong>Router-level:</strong> Bound to an `express.Router()` instance. Runs only for routes in that router.</li>
              <li><strong>Error-handling:</strong> The only middleware with *four* arguments: `(err, req, res, next)`. It's defined last and catches all errors.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Custom Logger Middleware</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example shows how `app.use()` runs our `logger` for every request, *before* the route handler is called.</p>
            <CodeBlock code={`
import express from 'express';
const app = express();
const port = 3000;

// 1. A custom middleware function (must have req, res, next)
const logger = (req, res, next) => {
  console.log(\`REQUEST: \${req.method} \${req.url} at \${new Date().toISOString()}\`);
  
  // 2. Call next() to pass control to the next function
  next(); 
};

// 3. Apply the middleware at the application level
// This will run for EVERY request, before any route handler.
app.use(logger);

// 4. Route handler (The "final stop")
app.get('/', (req, res) => {
  res.send('Check your terminal console!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page. (Check console again)');
});

app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What happens if I forget to call `next()` in my middleware?</strong>
                <p className="pl-4">The request will "hang." The client (e.g., your browser or React app) will wait and wait, and eventually, it will give up and show a "timeout" error. The route handler (e.g., `app.get('/')`) will *never* be called because you never passed control to it.</p>
              </li>
              <li>
                <strong>How is `app.use()` different from `app.get()`?</strong>
                <p className="pl-4">`app.get()` only matches `GET` requests for a specific path. `app.use()` is more general. If you provide a path (e.g., `app.use('/admin', ...)`), it matches *all* HTTP methods (`GET`, `POST`, etc.) for any path *starting with* `/admin`. If you *don't* provide a path (`app.use(logger)`), it matches *every single request* to the server.</p>
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
    case 'built-in-middleware':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.5: Built-in Middleware (express.json, express.static)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: "Tools Included in the Box"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>If Express is the "car chassis," these are the essential "add-ons" that come in the box from the factory. You *must* install them to get your car working.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`express.json()` (The "Package Opener"):</strong> A request arrives with a "package" (a JSON body from a POST request). By default, Express doesn't know how to open it. This middleware "opens the package," parses the JSON, and puts the contents neatly on the `req.body` "desk" for you.</li>
              <li><strong>`express.static()` (The "Public Files Room"):</strong> This middleware points to a folder (e.g., `public`) and automatically serves any files in it (like images, CSS, or client-side JS) without you having to write a route for every single file.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Express comes with its own built-in middleware for common tasks. You use them with `app.use()`.</p>
            <p><strong>1. `express.json()`</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Purpose:</strong> To parse incoming requests with <strong>JSON payloads</strong> (e.g., from a React frontend `fetch` POST request).</li>
              <li><strong>Action:</strong> It reads the request stream, parses the JSON, and populates the <strong>`req.body`</strong> object with the resulting JavaScript object.</li>
              <li><strong>Note:</strong> In older versions of Express, this required a separate package called `body-parser`. It is now built-in. You **must** enable this to handle `POST` or `PUT` requests with a JSON body.</li>
            </ul>

            <p className="mt-4"><strong>2. `express.static(folderName)`</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Purpose:</strong> To serve <strong>static assets</strong> (files that don't change, like HTML, CSS, images, and client-side JS).</li>
              <li><strong>Action:</strong> It takes a folder name (e.g., `public`) and makes all files inside it accessible from the root URL.</li>
              <li><strong>Example:</strong> If you use `app.use(express.static('public'))`, a file at `./public/css/style.css` can be accessed by the browser at `http://your-server.com/css/style.css`.</li>
            </ul>

            <p className="mt-4"><strong>3. `express.urlencoded()`</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Purpose:</strong> Similar to `express.json()`, but it parses incoming requests from a standard HTML form (with `content-type: application/x-www-form-urlencoded`).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Using `json()` and `static()`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This server serves a static `index.html` file and handles a `POST` request to `/api/users`.</p>
            <CodeBlock code={`
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve();

// --- Middleware Setup ---

// 1. express.json(): Parses JSON request bodies
// This populates 'req.body' for our POST route
app.use(express.json());

// 2. express.static(): Serves static files
// This tells Express to serve any file from the 'public' folder
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// --- Routes ---
app.get('/', (req, res) => {
  // express.static() handles this automatically,
  // but you could also send the file manually
  res.sendFile(path.join(publicPath, 'index.html'));
});

// This route now understands JSON because of the middleware
app.post('/api/users', (req, res) => {
  // 3. 'req.body' is now available!
  const newUser = req.body;
  console.log('Received new user:', newUser);
  
  // (Save to database...)
  
  res.status(201).json({ 
    message: 'User created!', 
    user: newUser 
  });
});

app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>I'm sending a POST request from my frontend, but `req.body` is `undefined`. Why?</strong>
                <p className="pl-4">You forgot to add `app.use(express.json())` near the top of your `server.js` file. Without this middleware, Express does not know how to parse the incoming JSON payload, so `req.body` is never populated.</p>
              </li>
              <li>
                <strong>How would I serve a full React application from Express?</strong>
                <p className="pl-4">This is a very common production pattern. First, you run `npm run build` in your React app to create the `build` folder. Then, in your Express `server.js`, you add: `app.use(express.static('path/to/react/build'))`. This makes your Express server host your entire React app.</p>
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

export default Chapter8Part1;