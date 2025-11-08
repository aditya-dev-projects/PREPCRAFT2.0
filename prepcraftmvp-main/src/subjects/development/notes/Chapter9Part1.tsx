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

// --- Main Chapter 9, Part 1 Component ---

const Chapter9Part1 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'rest-principles':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.1: REST Architecture Principles</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Vending Machine</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>REST API</strong> is like a smart vending machine. It follows a predictable set of rules:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>It's a "Resource" Machine:</strong> You don't ask it to "drop snack." You request "resource B5." The resource is the <em>noun</em> (<Code>/products/b5</Code>).</li>
              <li><strong>It's "Stateless":</strong> The machine doesn't remember you. Every time you buy a snack, it's a <em>brand new transaction</em>. You have to put money in every time. This is the most important rule of REST.</li>
              <li><strong>It has a "Uniform Interface":</strong> You use the <em>same buttons</em> (HTTP verbs: <Code>GET</Code>, <Code>POST</Code>) to interact with every item.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>REST (REpresentational State Transfer)</strong> is not a protocol or a standard; it is an <strong>architectural style</strong> for designing networked applications. It's a set of constraints that, when followed, produce systems that are scalable, reliable, and easy to use.</p>
            <p><strong>The Core Constraints of REST:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>1. Client-Server Separation:</strong> The client (frontend) and server (backend) are completely separate. The client only knows the API "endpoints" (URLs). This allows each side to be developed and scaled independently.</li>
              <li><strong>2. Stateless (The Most Important Rule):</strong> The server does <em>not</em> store any client "state" (like who you are) between requests. Every single request from the client must contain <em>all</em> information the server needs to fulfill it (such as an authentication token). This makes the application incredibly scalable, as any server can handle any request.</li>
              <li><strong>3. Cacheable:</strong> Responses from the server should be (implicitly or explicitly) marked as cacheable or non-cacheable. This allows the client to reuse old data (like a profile picture) instead of fetching it again, improving performance.</li>
              <li><strong>4. Uniform Interface:</strong> This is the central idea. It means all resources are accessed in the same, predictable way.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Resources as Nouns (not Verbs):</strong> You interact with "things" (e.g., <Code>/users</Code>, <Code>/products</Code>). You do <em>not</em> use verbs in the URL (e.g., <Code>/getUser</Code> or <Code>/createNewUser</Code>).</li>
                  <li><strong>HTTP Verbs for Actions:</strong> You use the HTTP method to define the action:
                    <ul>
                      <li><Code>GET /users/123</Code> (Read user 123)</li>
                      <li><Code>POST /users</Code> (Create a new user)</li>
                      <li><Code>PUT /users/123</Code> (Replace user 123)</li>
                      <li><Code>DELETE /users/123</Code> (Delete user 123)</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Bad vs. Good API Design</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows how a "traditional" RPC-style API (Remote Procedure Call) is refactored to be RESTful.</p>
            <CodeBlock code={`
// --- Bad API Design (RPC-style) ---
// The URLs are verbs, and you only use POST

POST /getUser
POST /createNewUser
POST /updateUserAddress
POST /deleteUser


// --- Good API Design (REST-style) ---
// The URLs are nouns (resources). The HTTP method defines the action.

GET    /users/123     // READ a specific user
POST   /users         // CREATE a new user
PUT    /users/123     // UPDATE a specific user
DELETE /users/123     // DELETE a specific user
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What does "stateless" actually mean in practice?</strong>
                <p className="pl-4">It means the server doesn't use "session" memory. In an old stateful app, you log in, and the server saves "User 123 is logged in" in its RAM. In a <strong>stateless</strong> app, you log in, the server gives you a "token" (a digital ID card), and the server <em>forgets you</em>. For <em>every future request</em>, you must send that token in the header (e.g., <Code>Authorization: Bearer ...</Code>). This is far more scalable because any of 1000 servers can verify your token; they don't need a shared session memory.</p>
              </li>
              <li>
                <strong>Is REST the only way to build APIs? What about GraphQL?</strong>
                <p className="pl-4">REST is the most common, but not the only way. <strong>GraphQL</strong> is a popular alternative.
                <br/><strong>REST:</strong> You have <em>many</em> endpoints (e.g., <Code>/users</Code>, <Code>/posts</Code>, <Code>/comments</Code>).
                <br/><strong>GraphQL:</strong> You have <em>one</em> powerful endpoint. The <em>client</em> sends a "query" specifying <em>exactly</em> what data fields it needs, and the server returns only that data, often from multiple resources in one request.</p>
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
    case 'http-methods':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.2: HTTP Methods & Status Codes</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Language of the Web</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>HTTP is the "language" clients and servers use to communicate. This language has two parts:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>HTTP Methods (Verbs):</strong> The <em>action</em> the client wants to perform. This is the "verb" of the sentence, like "I want to <strong>GET</strong> data" or "I want to <strong>POST</strong> new data."</li>
              <li><strong>HTTP Status Codes (Replies):</strong> The <em>response</em> from the server. It's a short, standard code that quickly says what happened, like "<strong>200: OK</strong>" (I got it for you), "<strong>404: Not Found</strong>" (I can't find that), or "<strong>500: Server Error</strong>" (I dropped the plate).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>HTTP Methods (Verbs):</strong><br/>
            These methods define the <em>intent</em> of a request. The main ones used in REST APIs are:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><Code>GET</Code>:</strong> Safely <em>retrieves</em> (reads) a resource. This operation should be <strong>idempotent</strong> (running it 100 times is the same as running it once) and should not change any data.</li>
              <li><strong><Code>POST</Code>:</strong> <em>Creates</em> a new resource on the server. (e.g., create a new user, post a new comment). This is <strong>not idempotent</strong> (running it 100 times will create 100 new users).</li>
              <li><strong><Code>PUT</Code>:</strong> <em>Replaces</em> an existing resource entirely. If you only send a `firstName`, it will delete the `lastName`. This is <strong>idempotent</strong>.</li>
              <li><strong><Code>PATCH</Code>:</strong> <em>Partially updates</em> an existing resource. If you only send a `firstName`, it will <em>only</em> change the `firstName` and leave all other fields alone. This is the preferred method for updates.</li>
              <li><strong><Code>DELETE</Code>:</strong> <em>Deletes</em> a specified resource.</li>
            </ul>

            <p className="mt-4"><strong>HTTP Status Codes (Responses):</strong><br/>
            These are grouped by their first digit. You <em>must</em> use the correct codes.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`2xx` (Success):</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>200 OK</Code>: Standard success (for <Code>GET</Code>, <Code>PUT</Code>, <Code>PATCH</Code>).</li>
                  <li><Code>201 Created</Code>: A new resource was successfully created (for <Code>POST</Code>).</li>
                  <li><Code>204 No Content</Code>: Success, but there is no data to send back (for <Code>DELETE</Code>).</li>
                </ul>
              </li>
              <li><strong>`4xx` (Client Error):</strong> The client did something wrong.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>400 Bad Request</Code>: The server can't understand the request (e.g., missing data, validation error).</li>
                  <li><Code>401 Unauthorized</Code>: You are not logged in. You are missing a valid authentication token.</li>
                  <li><Code>403 Forbidden</Code>: You <em>are</em> logged in, but you don't have <em>permission</em> to do this (e.g., a normal user trying to access an admin page).</li>
                  <li><Code>404 Not Found</Code>: The server could not find the requested resource (e.g., wrong URL).</li>
                </ul>
              </li>
              <li><strong>`5xx` (Server Error):</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>500 Internal Server Error</Code>: The server <em>crashed</em> (e.g., a bug in the code, the database is down). This is the "catch-all" error.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: An Express Router Using Methods & Status Codes</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows how a `users` API would use the correct methods and status codes for each action.</p>
            <CodeBlock code={`
import express from 'express';
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  const users = [{ id: 1, name: 'Alex' }];
  res.status(200).json(users); // 200 OK
});

// GET a single user
router.get('/:id', (req, res) => {
  const user = { id: req.params.id, name: 'Alex' };
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user); // 200 OK
});

// POST (create) a new user
router.post('/', (req, res) => {
  const newUser = req.body;
  // (Save to database...)
  res.status(201).json(newUser); // 201 Created
});

// DELETE a user
router.delete('/:id', (req, res) => {
  // (Delete from database...)
  res.status(204).send(); // 204 No Content
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between `PUT` and `PATCH`?</strong>
                <p className="pl-4">This is a classic interview question. <strong>`PUT`</strong> is <em>idempotent</em> and <em>replaces</em> the entire resource. If you have a user with a `name` and `email`, and you send a `PUT` request with only a `name`, the `email` will be deleted (set to `null`). <strong>`PATCH`</strong> is <em>not</em> idempotent and applies a <em>partial update</em>. If you send a `PATCH` request with only a `name`, it will update the `name` and leave the `email` unchanged. `PATCH` is almost always preferred.</p>
              </li>
              <li>
                <strong>What's the difference between `401 Unauthorized` and `403 Forbidden`?</strong>
                <p className="pl-4">Another classic. <strong><Code>401 Unauthorized</Code></strong> means "I don't know <em>who you are</em>." You are not authenticated; you're missing a valid login token. <strong><Code>403 Forbidden</Code></strong> means "I know <em>who you are</em>, but you are not <em>allowed</em> to do this." You are authenticated, but you are not an admin, or you don't own this resource.</p>
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
    case 'api-design':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.3: API Design Best Practices</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: A Clean and Predictable Menu</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A well-designed API is like a clean, simple, and predictable restaurant menu.
            <br/>A <strong>bad menu</strong> (bad API) is confusing: <Code>POST /getDinnerCombo</Code>, <Code>GET /fetchAppetizers</Code>, <Code>POST /delete-a-drink</Code>. The actions are in the names, and it's a mess.</p>
            <p>A <strong>good RESTful menu</strong> (good API) is organized by <em>category</em> (nouns).
            <br/>Menu: "Appetizers" (<Code>/appetizers</Code>), "Drinks" (<Code>/drinks</Code>), "Entrees" (<Code>/entrees</Code>).
            <br/>The <em>action</em> you want to take is separate: <Code>GET</Code> (look at the menu), <Code>POST</Code> (place a new order), <Code>DELETE</Code> (cancel an order).
            <br/>This makes it predictable. You know exactly where to find the drinks and what actions you can perform.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Good API design is about making your API predictable, readable, and easy to use for other developers (including your future self).</p>
            <p><strong>Core Best Practices:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>1. Use Nouns, Not Verbs, in URLs:</strong> The URL should identify the <em>resource</em> (the "thing"). The HTTP method (<Code>GET</Code>, <Code>POST</Code>) should identify the <em>action</em>.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Bad:</strong> <Code>/getUsers</Code>, <Code>/createUser</Code></li>
                  <li><strong>Good:</strong> <Code>GET /users</Code>, <Code>POST /users</Code></li>
                </ul>
              </li>
              <li><strong>2. Use Plurals for Resources:</strong> A collection endpoint should be plural.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Bad:</strong> <Code>/user</Code>, <Code>/user/123</Code></li>
                  <li><strong>Good:</strong> <Code>/users</Code> (the collection), <Code>/users/123</Code> (one item from the collection)</li>
                </ul>
              </li>
              <li><strong>3. Use JSON and snake_case (or camelCase):</strong> Your API should almost always accept JSON (<Code>express.json()</Code>) and send JSON (<Code>res.json()</Code>). Pick a casing convention for your keys (e.g., <Code>user_name</Code> or <Code>userName</Code>) and <em>stick to it</em>.</li>
              <li><strong>4. Version Your API:</strong> Always prefix your API with a version number. This allows you to release <Code>v2</Code> with breaking changes in the future without destroying <Code>v1</Code> for existing users.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Good:</strong> <Code>/api/v1/users</Code>, <Code>/api/v2/users</Code></li>
                </ul>
              </li>
              <li><strong>5. Use HTTP Status Codes Correctly:</strong> Don't just send <Code>200</Code> for everything. Use <Code>201</Code> on creation, <Code>404</Code> when not found, <Code>400</Code> on a validation error, etc. (See 9.2).</li>
              <li><strong>6. Handle Errors Gracefully:</strong> Never send a full stack trace to the user. Use a central error handler (see 8.8) to send a clean JSON error message: <Code>{'{'} "error": "Invalid input" {'}'}</Code>.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Well-Designed `/products` Router</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This router file demonstrates all these best practices. (File: <Code>routes/productRoutes.mjs</Code>)</p>
            <CodeBlock code={`
import express from 'express';
const router = express.Router();

// A (fake) database
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 50 }
];

// GET /api/v1/products
// (Nouns, Plural)
router.get('/', (req, res) => {
  res.status(200).json(products); // 200 OK
});

// GET /api/v1/products/:id
// (Nouns, Plural, Param)
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    // Correct status code
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product); // 200 OK
});

// POST /api/v1/products
// (Nouns, Plural, POST verb)
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    // Correct status code for validation
    return res.status(400).json({ error: "Name and price are required" });
  }
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct); // 201 Created
});

export default router;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>How should I handle relationships? e.g., "get all comments for a specific post"?</strong>
                <p className="pl-4">You nest the resources in the URL. This is a very clean RESTful pattern:
                <br/><Code>GET /posts/123/comments</Code> (Gets all comments for post 123)
                <br/><Code>POST /posts/123/comments</Code> (Adds a new comment to post 123)</p>
              </li>
              <li>
                <strong>Why version my API (`/v1`)? It seems like extra work.</strong>
                <p className="pl-4">It's for the future. Imagine your mobile app (v1) is using your API. If you need to make a "breaking change" (e.g., rename the `name` field to `fullName`), you can't just change the v1 API, or you will crash every v1 mobile app instantly. Instead, you create <em>new</em> endpoints at <Code>/api/v2/users</Code>. The new mobile app (v2) will use these, while the old v1 app continues to work perfectly on the v1 endpoints.</p>
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
    case 'crud-operations':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.4: CRUD Operations Implementation</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Filing Cabinet</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>CRUD</strong> is the backbone of almost every application on the internet. It's an acronym for the four basic functions of a database, just like a physical filing cabinet:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>CREATE:</strong> Put a <em>new</em> file (<Code>POST</Code>) into the cabinet.</li>
              <li><strong>READ:</strong> <em>Look at</em> an existing file (<Code>GET</Code>) in the cabinet.</li>
              <li><strong>UPDATE:</strong> <em>Change</em> an existing file (<Code>PUT</Code>/<Code>PATCH</Code>) in the cabinet.</li>
              <li><strong>DELETE:</strong> <em>Shred</em> an existing file (<Code>DELETE</Code>) from the cabinet.</li>
            </ul>
            <p>A "RESTful API" is just a clean set of HTTP "verbs" that map directly to these four actions.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>CRUD</strong> stands for <strong>Create, Read, Update, Delete</strong>. In a REST API, these operations map directly to HTTP methods. A typical "resource" (like <Code>/users</Code>) will have at least five routes to be fully CRUD-functional.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-2 pr-4 text-lg">Operation</th>
                    <th className="py-2 pr-4 text-lg">HTTP Method</th>
                    <th className="py-2 pr-4 text-lg">REST Endpoint</th>
                    <th className="py-2 pr-4 text-lg">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">CREATE</td>
                    <td className="py-3 pr-4 align-top"><Code>POST</Code></td>
                    <td className="py-3 pr-4 align-top"><Code>/users</Code></td>
                    <td className="py-3 pr-4 align-top">Creates a new user. (Data is in <Code>req.body</Code>).</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">READ (All)</td>
                    <td className="py-3 pr-4 align-top"><Code>GET</Code></td>
                    <td className="py-3 pr-4 align-top"><Code>/users</Code></td>
                    <td className="py-3 pr-4 align-top">Retrieves a list of all users.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">READ (One)</td>
                    <td className="py-3 pr-4 align-top"><Code>GET</Code></td>
                    <td className="py-3 pr-4 align-top"><Code>/users/:id</Code></td>
                    <td className="py-3 pr-4 align-top">Retrieves a single user by their ID. (ID is in <Code>req.params.id</Code>).</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-bold align-top">UPDATE</td>
                    <td className="py-3 pr-4 align-top"><Code>PUT</Code> or <Code>PATCH</Code></td>
                    <td className="py-3 pr-4 align-top"><Code>/users/:id</Code></td>
                    <td className="py-3 pr-4 align-top">Updates a user. (Data is in <Code>req.body</Code>, ID is in <Code>req.params.id</Code>).</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold align-top">DELETE</td>
                    <td className="py-3 pr-4 align-top"><Code>DELETE</Code></td>
                    <td className="py-3 pr-4 align-top"><Code>/users/:id</Code></td>
                    <td className="py-3 pr-4 align-top">Deletes a user by their ID. (ID is in <Code>req.params.id</Code>).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Full CRUD Router for a `tasks` Resource</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a complete router file demonstrating all CRUD operations on a "fake" in-memory database (an array).</p>
            <CodeBlock code={`
import express from 'express';
const router = express.Router();

// Use express.json() middleware BEFORE the router
// In your main server.js: app.use(express.json());

// A "fake" database
let tasks = [
  { id: 1, text: "Learn Node.js", completed: false },
  { id: 2, text: "Learn Express", completed: true },
];
let nextId = 3;

// CREATE (POST /tasks)
router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  const newTask = { id: nextId++, text, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// READ (GET /tasks)
router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

// READ (GET /tasks/:id)
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.status(200).json(task);
});

// UPDATE (PATCH /tasks/:id)
router.patch('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  // Update only the fields that were sent
  if (req.body.text) task.text = req.body.text;
  if (req.body.completed !== undefined) task.completed = req.body.completed;
  
  res.status(200).json(task);
});

// DELETE (DELETE /tasks/:id)
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send(); // 204 No Content
});

export default router;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>My <Code>POST</Code> route isn't working, <Code>req.body</Code> is empty! Why?</strong>
                <p className="pl-4">You forgot to add the middleware. In your main `server.js` file, *before* you mount your router, you <strong>must</strong> add <Code>app.use(express.json())</Code>. Without this middleware, Express does not know how to parse the JSON body, and <Code>req.body</Code> will be `undefined`.</p>
              </li>
              <li>
                <strong>What status code should I send after a successful <Code>DELETE</Code>?</strong>
                <p className="pl-4">The best practice is <strong><Code>204 No Content</Code></strong>. This tells the client "The operation was successful, and there is nothing to send back." You send it with <Code>res.status(204).send()</Code>.</p>
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
    case 'request-validation':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.5: Request Validation & Sanitization</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Bouncer and the ID Check</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>You <strong>NEVER</strong> trust data from the client. Think of your API as a secure building, and your validation logic is the "bouncer" at the door.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Validation (The "Rules"):</strong> The bouncer checks that you <em>have</em> an ID and that you are "over 21." If not, you are <em>rejected</em> (<Code>400 Bad Request</Code>). This is <strong>validation</strong>: ensuring the data is <em>present</em> and in the <em>correct format</em>.</li>
              <li><strong>Sanitization (The "Cleaning"):</strong> The bouncer sees you're bringing in a "muddy" package. He doesn't reject you, but he "cleans" the package before letting it in (e.g., stripping out dangerous characters). This is <strong>sanitization</strong>: cleaning the data to prevent attacks.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Validation</strong> is the process of ensuring that data from the client (<Code>req.body</Code>, <Code>req.query</Code>, <Code>req.params</Code>) meets your requirements. <strong>Sanitization</strong> is the process of cleaning that data to prevent security vulnerabilities.</p>
            <p>You should <em>not</em> do this manually with `if` statements. The industry-standard tool is <strong>`express-validator`</strong>.</p>
            <p><strong>Key Concepts:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`express-validator`</strong>: A middleware library that lets you define "chains" of validation rules.
                <ul>
                  <li>Install: <Code>npm install express-validator</Code></li>
                </ul>
              </li>
              <li><strong>Validation Chain:</strong> You define rules like <Code>body('email').isEmail().normalizeEmail()</Code> or <Code>body('password').isLength({'{'} min: 8 {'}'})</Code>.</li>
              <li><strong><Code>validationResult(req)</Code>:</strong> A function you call inside your route handler to check if any errors were found by your validation chain.</li>
              <li><strong>Security:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>XSS (Cross-Site Scripting):</strong> An attack where a user injects a <Code>&lt;script&gt;</Code> tag into your database (e.g., in a "comment"). If you render that comment un-sanitized, the script runs in <em>other users'</em> browsers and can steal their data. Sanitization (like escaping HTML) prevents this.</li>
                  <li><strong>NoSQL Injection:</strong> An attack where a user sends a malicious object (e.g., <Code>{'{'}"$gt": ""{'}'}</Code>) in a JSON body to try and bypass database queries. Validation and sanitization prevent this.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Using `express-validator`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows a robust <Code>POST /users</Code> route that validates and sanitizes the input before creating a user.
            <br/>1. Run <Code>npm install express express-validator</Code>.</p>
            <CodeBlock code={`
import express from 'express';
// 1. Import the validation tools
import { body, validationResult } from 'express-validator';

const router = express.Router();
// Assume app.use(express.json()) is in server.js

// 2. Define the validation rules as middleware
const validateUser = [
  // 'email' must be a valid email and be normalized
  body('email')
    .isEmail().withMessage('Must be a valid email address')
    .normalizeEmail(),
    
  // 'password' must be at least 8 chars long
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    
  // 'name' must exist and be sanitized (trim whitespace)
  body('name')
    .notEmpty().withMessage('Name is required')
    .trim()
    .escape(), // Escapes HTML chars to prevent XSS
];

// 3. Use the validation rules on the route
router.post('/users', validateUser, (req, res) => {
  // 4. Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // 5. If errors, send 400 Bad Request
    return res.status(400).json({ errors: errors.array() });
  }

  // 6. If no errors, the data is safe to use
  const newUser = req.body;
  // (Save newUser to database...)
  
  res.status(201).json({ message: "User created!", user: newUser });
});

// (In server.js)
// app.use('/api/users', router);
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between Validation and Sanitization?</strong>
                <p className="pl-4"><strong>Validation</strong> <em>checks</em> data and *rejects* the request if the data is bad (e.g., password is too short). <strong>Sanitization</strong> <em>cleans</em> the data and *accepts* it (e.g., "  alex@test.com " is sanitized to "alex@test.com"). You should often do both.</p>
              </li>
              <li>
                <strong>What is an XSS (Cross-Site Scripting) attack?</strong>
                <p className="pl-4">It's when a user manages to inject a malicious script into your data. For example, they make their username <Code>&lt;script&gt;alert('hacked')&lt;/script&gt;</Code>. If you render this on your page without sanitizing it (<Code>.escape()</Code> turns <Code>&lt;</Code> and <Code>&gt;</Code> into `&lt;` and `&gt;`), that script will run in the browser of every user who sees it, potentially stealing their session cookies.</p>
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

export default Chapter9Part1;