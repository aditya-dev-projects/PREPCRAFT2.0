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

// --- Main Chapter 8, Part 2 Component ---

const Chapter8Part2 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'custom-middleware':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.6: Custom Middleware Development</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Security Guard"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of your Express routes as "private offices" in a building. A <strong>custom middleware</strong> is like a "security guard" you post in the lobby or on a specific floor.</p>
            <p>Every request (person) that arrives must first check in with the guard. The guard can:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Log the visit:</strong> Write down the time and who visited.</li>
              <li><strong>Validate credentials:</strong> Check if the person has a valid ID badge (an authentication token).</li>
              <li><strong>Reject the request:</strong> If they have no badge, the guard sends them away immediately (<Code>res.send()</Code>), and they never reach the office.</li>
              <li><strong>Allow the request:</strong> If the badge is valid, the guard says "go ahead" (calls <Code>next()</Code>), and the person proceeds to the office (the route handler).</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>middleware</strong> function is any function that has access to the <strong>request object (<Code>req</Code>)</strong>, the <strong>response object (<Code>res</Code>)</strong>, and the <strong><Code>next</Code> function</strong>.</p>
            <p><strong>The <Code>next()</Code> Function:</strong></p>
            <p>This is the most critical part. <Code>next()</Code> is a function that, when called, passes control to the <em>next</em> middleware function in the stack. If you do not call <Code>next()</Code> (or send a response with <Code>res.send()</Code>), the request will be left "hanging," and the client will eventually time out. This is a very common bug.</p>
            <p><strong>Types of Middleware:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Application-level:</strong> Bound to the <Code>app</Code> object using <Code>app.use()</Code>. Runs for <em>every</em> request to the app.</li>
              <li><strong>Route-level:</strong> Passed as an argument *before* the route handler. Runs only for that specific route.</li>
              <li><strong>Error-handling:</strong> A special middleware with four arguments: <Code>(err, req, res, next)</Code>. It's defined last and catches all errors.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Logger & Auth Middleware</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example shows an application-level logger and a route-level "authentication" check.</p>
            <CodeBlock code={`
import express from 'express';
const app = express();
const port = 3000;

// 1. Application-level middleware (runs for all routes)
const logger = (req, res, next) => {
  console.log(\`[LOG]: \${req.method} \${req.url}\`);
  next(); // Pass control to the next middleware
};

// 2. A simple "authentication" middleware
const checkAuth = (req, res, next) => {
  // Check for a secret password in the query
  if (req.query.secret === 'open-sesame') {
    next(); // Authenticated! Proceed to the route handler.
  } else {
    // 3. STOP the request and send an error
    res.status(401).send('Unauthorized: You do not have access.');
  }
};

// 4. Apply the logger middleware to ALL routes
app.use(logger);

// 5. Public route (doesn't use auth middleware)
app.get('/', (req, res) => {
  res.send('This is the public homepage.');
});

// 6. Private route (uses auth middleware)
// 'checkAuth' runs *before* the final (req, res) handler
app.get('/admin', checkAuth, (req, res) => {
  res.send('Welcome to the admin dashboard!');
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
                <strong>What happens if I forget to call <Code>next()</Code>?</strong>
                <p className="pl-4">The request will "hang." The client (browser) will wait forever and eventually time out. The route handler (e.g., <Code>app.get('/')</Code>) will <em>never</em> be called because you never passed control to it. This is a very common bug.</p>
              </li>
              <li>
                <strong>How is <Code>app.use('/admin', ...)</Code> different from <Code>app.get('/admin', ...)</Code>?</strong>
                <p className="pl-4"><Code>app.get</Code> only matches `GET` requests to the <em>exact</em> path. <Code>app.use</Code> is a "wildcard" matcher. <Code>app.use('/admin', ...)</Code> will match <strong>all</strong> HTTP methods (GET, POST, etc.) for any path that <strong>starts with</strong> `/admin` (like `/admin/users`, `/admin/dashboard`, etc.).</p>
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
    case 'request-response-objects':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.7: Request & Response Objects</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Order & The Plate</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>In every Express handler, you get two objects: `req` and `res`.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>The Request (<Code>req</Code>):</strong> This is the "order" from the customer. It's an object containing <em>everything</em> the client sent you. You <strong>read from</strong> this object to find out what they want.
                <ul className="list-disc ml-6 mt-2">
                  <li>"What's the <em>order</em>?" (<Code>req.body</Code>)</li>
                  <li>"What <em>table number</em>?" (<Code>req.params.id</Code>)</li>
                  <li>"Any <em>special requests</em>?" (<Code>req.query.sort</Code>)</li>
                </ul>
              </li>
              <li><strong>The Response (<Code>res</Code>):</strong> This is the "plate" you are preparing for them. It's an object full of <em>tools</em> you use to <strong>send a response back</strong>.
                <ul className="list-disc ml-6 mt-2">
                  <li>"Send the food": <Code>res.json(data)</Code></li>
                  <li>"Tell them we're out of food": <Code>res.status(404).send('Not Found')</Code></li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The <strong><Code>req</Code> (Request)</strong> and <strong><Code>res</Code> (Response)</strong> objects are the core of every Express handler. They are how you get data from the client and send data back.</p>
            <p><strong>Key Request (`req`) Properties:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><Code>req.body</Code>:</strong> Contains the body of a `POST`, `PUT`, or `PATCH` request. <strong>Requires</strong> middleware like <Code>express.json()</Code> to be populated.</li>
              <li><strong><Code>req.params</Code>:</strong> An object containing route parameters from the URL path. (e.g., from <Code>/users/:id</Code>).</li>
              <li><strong><Code>req.query</Code>:</strong> An object containing query string parameters from the URL. (e.g., from <Code>?search=myQuery</Code>).</li>
              <li><strong><Code>req.headers</Code>:</strong> An object containing all HTTP headers (e.g., <Code>Authorization</Code> for tokens).</li>
              <li><strong><Code>req.method</Code>:</strong> The HTTP method of the request (e.g., <Code>GET</Code>, <Code>POST</Code>).</li>
            </ul>
            <p><strong>Key Response (`res`) Methods:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><Code>res.send(data)</Code>:</strong> Sends a simple response (string, HTML).</li>
              <li><strong><Code>res.json(data)</Code>:</strong> Sends a JSON response. Automatically stringifies your object and sets the `Content-Type: application/json` header. This is the one you will use most often for APIs.</li>
              <li><strong><Code>res.status(code)</Code>:</strong> Sets the HTTP status code (e.g., <Code>200</Code>, <Code>201</Code>, <Code>404</Code>, <Code>500</Code>). You can chain this: <Code>res.status(404).json({'{'} error: 'Not Found' {'}'})</Code>.</li>
              <li><strong><Code>res.sendFile(path)</Code>:</strong> Sends a file (e.g., an HTML file).</li>
              <li><strong><Code>res.redirect(url)</Code>:</strong> Redirects the user to a different URL.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Using `req` and `res`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This server shows how to read from <Code>req.params</Code>, <Code>req.query</Code>, and <Code>req.body</Code> and respond with <Code>res.json()</Code>.</p>
            <CodeBlock code={`
import express from 'express';
const app = express();
const port = 3000;

// --- Middleware ---
// We need this to read req.body
app.use(express.json()); 

// --- Routes ---
// e.g., GET /search?q=hello&sort=desc
app.get('/search', (req, res) => {
  const query = req.query.q; // 'hello'
  const sort = req.query.sort; // 'desc'
  res.json({ query, sort });
});

// e.g., GET /users/123
app.get('/users/:id', (req, res) => {
  const userId = req.params.id; // '123'
  res.json({ id: userId, name: 'User \${userId}' });
});

// e.g., POST /users (with a JSON body)
app.post('/users', (req, res) => {
  // This is only possible because of app.use(express.json())
  const newUser = req.body; 
  
  // 201 means "Created"
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
                <strong>What's the difference between <Code>res.send()</Code> and <Code>res.json()</Code>?</strong>
                <p className="pl-4"><Code>res.send()</Code> is a general-purpose method that can send strings, HTML, or even JSON (it will try to guess). <Code>res.json()</Code> is specific: it <em>guarantees</em> the response will be a properly formatted JSON string and it <em>always</em> sets the correct `Content-Type: application/json` header, which is best practice for building APIs.</p>
              </li>
              <li>
                <strong>What's the difference between `req.params`, `req.query`, and `req.body`?</strong>
                <p className="pl-4">This is a core API concept:
                  <ul className="list-disc ml-6 mt-2">
                    <li><strong><Code>req.params</Code></strong>: For <em>required</em> identifiers in the URL path. (e.g., `GET /posts/<strong>42</strong>`).</li>
                    <li><strong><Code>req.query</Code></strong>: For <em>optional</em> filters, sorting, or search terms. (e.g., `/posts<strong>?sort=desc&limit=10</strong>`).</li>
                    <li><strong><Code>req.body</Code></strong>: For <em>data</em> you are sending to the server to create or update something. (e.g., `POST /posts` with a JSON body of <Code>{'{'} title: "New Post" {'}'}</Code>).</li>
                  </ul>
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
    case 'error-handling-middleware':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.8: Error Handling Middleware</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Factory "Safety Net"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>An <strong>error-handling middleware</strong> is the "safety net" at the very end of your server's assembly line. By default, if an error happens, the whole factory just crashes and explodes (and sends a scary HTML crash log to the user).</p>
            <p>This special middleware is a big net that sits at the end. When a route handler anywhere in your app throws an error (or calls `next(err)`), the request <em>immediately</em> falls into this net. The safety net's only job is to stop the crash and send a calm, professional JSON response like <Code>{'{'} "error": "Something went wrong" {'}'}</Code>.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>An error-handling middleware is a <em>special</em> middleware in Express that has **four arguments** instead of three: <strong><Code>(err, req, res, next)</Code></strong>.</p>
            <p><strong>Key Rules:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Four Arguments:</strong> The signature <em>must</em> be `(err, req, res, next)`. This is how Express identifies it as an error handler.</li>
              <li><strong>Defined Last:</strong> It <strong>must</strong> be defined <em>after</em> all other `app.use()` calls and routes. It acts as a "catch-all" at the end of the middleware stack.</li>
              <li><strong>How it's Called:</strong> It is <em>skipped</em> in a normal request. It is <em>only</em> called if:
                <ul className="list-disc ml-6 mt-2">
                  <li>You explicitly call <Code>next(err)</Code> from a route or regular middleware.</li>
                  <li>An error is <em>synchronously</em> thrown from within a route handler.</li>
                </ul>
              </li>
              <li><strong>Note for Async:</strong> If an error occurs in an `async` function (like an `await` fails), you <em>must</em> use a `try...catch` block and call <Code>next(err)</Code> from the `catch` block.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A `try/catch` with a Central Error Handler</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows a "risky" route that throws an error, and the error handler that catches it.</p>
            <CodeBlock code={`
import express from 'express';
const app = express();
const port = 3000;

// --- Routes ---
app.get('/', (req, res) => {
  res.send('This route works.');
});

// This route will fail
app.get('/risky', (req, res, next) => {
  try {
    // This is a synchronous error
    throw new Error('Something broke!');
    
    // If it were async, we would do:
    // database.find()
    //   .catch(err => next(err));
    
  } catch (error) {
    // 1. Pass the error to the 'next' function
    // Express will skip all other routes and go to the error handler
    next(error);
  }
});

// --- Error Handling Middleware ---
// 2. It is defined LAST, with four arguments
const errorHandler = (err, req, res, next) => {
  console.error("ERROR CAUGHT:", err.message);
  
  // 3. Send a clean JSON response instead of crashing
  res.status(500).json({
    error: "An internal server error occurred."
  });
};

// 4. Register the error handler
app.use(errorHandler);

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
                <strong>What makes an error-handling middleware "special"?</strong>
                <p className="pl-4">It's the only middleware function that has **four** arguments: `(err, req, res, next)`. The first argument is always the `error` object. This special signature is how Express identifies it.</p>
              </li>
              <li>
                <strong>What happens if I define my error handler *before* my routes?</strong>
                <p className="pl-4">It won't work. Middleware runs in order. Your request will hit the routes, an error will be thrown, but there's no error handler *after* it in the stack to catch it. It *must* be defined last.</p>
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
    case 'express-router':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.9: Express Router & Modular Routing</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Department Manager</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>As your company (your server) grows, you can't have the CEO (<Code>server.js</Code>) handle every single task. Your <Code>server.js</Code> file would become 10,000 lines long.</p>
            <p>You use an <strong>`express.Router()`</strong> to hire a "Department Manager." You create a new file (<Code>productRoutes.js</Code>), create a Router, and put <em>all</em> product-related logic in there.
            <br/>In your main <Code>server.js</Code> file, you just tell the "CEO" (Express): "Hey, any request that starts with `/api/products`, just forward it to the 'Products Manager'. I don't care what they do with it."</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The <strong>`express.Router`</strong> is a special "mini-app" object that can be used to group related routes into their own files. This is the primary way to keep your application organized as it scales.</p>
            <p><strong>The Workflow:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Create a Router File:</strong> Create a new file (e.g., `routes/userRoutes.js`).</li>
              <li><strong>Import & Create Router:</strong> Import `express` and call `express.Router()` to create a new router instance.</li>
              <li><strong>Define Routes on the Router:</strong> Instead of `app.get()`, you use `router.get()`.</li>
              <li><strong>Export the Router:</strong> Use `export default router` (for ESM) or `module.exports = router` (for CommonJS).</li>
              <li><strong>Import & Use in Server:</strong> In your main <Code>server.js</Code>, you `import` the router file and tell your app to <em>use</em> it with a URL prefix: <Code>app.use('/api/users', userRoutes)</Code>.</li>
            </ol>
            <p>Now, a request to `GET /api/users/123` will be automatically forwarded to the `router.get('/:id')` handler inside your `userRoutes.js` file.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Modularizing Routes</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">File: `routes/productRoutes.mjs` (The Department Manager)</p>
            <CodeBlock code={`
import express from 'express';

// 1. Create a new router
const router = express.Router();

// 2. Define routes on the router
// This path is relative: it will be '/products/'
router.get('/', (req, res) => {
  res.send('Get all products');
});

// This path will be '/products/:id'
router.get('/:id', (req, res) => {
  res.send(\`Get product with ID \${req.params.id}\`);
});

// 3. Export the router
export default router;
            `} language="javascript" />

            <p className="font-semibold mt-2">File: `server.mjs` (The Main App/CEO)</p>
            <CodeBlock code={`
import express from 'express';
// 4. Import the router
import productRoutes from './routes/productRoutes.mjs';
import userRoutes from './routes/userRoutes.mjs'; // (Assuming you made one)

const app = express();
const port = 3000;

// 5. Mount the routers
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); // Mount the user router

// You can have other routes here
app.get('/', (req, res) => {
  res.send('Homepage');
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
                <strong>Why is this better than just putting all routes in `server.js`?</strong>
                <p className="pl-4"><strong>Scalability and Maintainability.</strong> A real application might have 50 routes just for users (`/users`, `/users/:id`, `/users/:id/orders`, etc.) and another 50 for products. Putting all 100 in `server.js` makes it unreadable. By splitting them into `userRoutes.js` and `productRoutes.js`, you create a clean, "modular" codebase that is easy to navigate and debug.</p>
              </li>
              <li>
                <strong>Can I use middleware on a router?</strong>
                <p className="pl-4">Yes, and you should! You can use `router.use(myAuthMiddleware)` inside `userRoutes.js` to apply that middleware <em>only</em> to the user routes, keeping your main `server.js` file clean.</p>
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
    case 'template-engines':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">8.10: Template Engines (EJS)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Mail Merge"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>template engine</strong> is like a "mail merge" tool for your server. You write a generic HTML template (the "letter") with placeholders (e.g., <Code>&lt;%= userName %&gt;</Code>).</p>
            <p>When a user makes a request, your Express server (the "secretary") takes your template, "merges" it with the user's specific data (e.g., <Code>{'{'} userName: 'Alex' {'}'}</Code>), and sends the final, personalized HTML document to the user. This is called <strong>Server-Side Rendering (SSR)</strong>.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>Template Engine</strong> allows you to generate dynamic HTML content on the server. Instead of sending static HTML files, you send files that are processed by the engine, which injects data into them.</p>
            <p><strong>EJS (Embedded JavaScript)</strong> is one of the most popular engines because it's just plain HTML with special tags for JavaScript.</p>
            <p><strong>Setup:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Install it: <Code>npm install ejs</Code></li>
              <li>Set it as your "view engine" in Express: <Code>app.set('view engine', 'ejs');</Code></li>
              <li>By default, Express will look for templates in a folder named `views`.</li>
            </ol>
            <p><strong>Key EJS Tags:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><Code>&lt;%= ... %&gt;</Code></strong> (Outputs Data): "Escapes" and outputs the value into the HTML. (e.g., <Code>&lt;%= user.name %&gt;</Code>)</li>
              <li><strong><Code>&lt;%- ... %&gt;</Code></strong> (Outputs Raw HTML): Use this if you need to render actual HTML. (Be careful!)</li>
              <li><strong><Code>&lt;% ... %&gt;</Code></strong> (Logic): For JavaScript logic, like loops (<Code>&lt;% users.forEach(user ={'>'} {'{'} %&gt;</Code>) and `if` statements.</li>
            </ul>
            <p><strong>Rendering:</strong><br/>
            You use the <strong>`res.render(templateName, dataObject)`</strong> method to render a template and send it.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Rendering a Dynamic List with EJS</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. `server.js` (Run `npm install express ejs`)</p>
            <CodeBlock code={`
import express from 'express';
import path from 'path';
const app = express();
const port = 3000;
const __dirname = path.resolve();

// 1. Set EJS as the view engine
app.set('view engine', 'ejs');
// 2. Tell Express where to find the templates
app.set('views', path.join(__dirname, 'views'));

// 3. Our data
const users = [
  { name: 'Alex' }, { name: 'Priya' }, { name: 'Leo' }
];

// 4. Use res.render() to send the EJS file
//    We pass the 'users' array as an object.
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home Page', 
    users: users 
  });
});

app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});
            `} language="javascript" />
            
            <p className="font-semibold mt-2">2. `views/index.ejs` (The Template)</p>
            <CodeBlock code={`
<!DOCTYPE html>
<html lang="en">
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>User List</h1>
  
  <ul>
    <% users.forEach(user => { %>
      <li>
        <%= user.name %>
      </li>
    <% }); %>
  </ul>
</body>
</html>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between this (Server-Side Rendering) and React (Client-Side Rendering)?</strong>
                <p className="pl-4"><strong>Server-Side Rendering (EJS):</strong> The <em>server</em> does all the work. It builds the complete, data-filled HTML page and sends it to the client. The client's browser just has to display it.
                <br/><strong>Client-Side Rendering (React):</strong> The <em>server</em> sends a <em>blank</em> HTML page and a <em>giant</em> JavaScript file. The client's <em>browser</em> then runs all the JavaScript, fetches the data, and builds the page on the client-side.</p>
              </li>
              <li>
                <strong>Why would I use EJS if React is so popular?</strong>
                <p className="pl-4">EJS is not a replacement for React, but it's much simpler and faster for content-heavy sites. It's great for blogs, simple marketing pages, or brochure sites where you don't need a complex, interactive "app" feel. It's also generally better for SEO (Search Engine Optimization) because the content arrives fully formed.</p>
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

export default Chapter8Part2;