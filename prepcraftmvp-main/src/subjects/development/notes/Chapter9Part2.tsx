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

// --- Main Chapter 9, Part 2 Component ---

const Chapter9Part2 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'api-documentation':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.6: API Documentation (Swagger/Postman)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Instruction Manual"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>You can build the world's best API, but if nobody knows how to use it, it's worthless. <strong>API documentation</strong> is the "instruction manual" that you give to other developers (especially your frontend team).</p>
            <p>A good manual clearly explains every "button" (endpoint), what it does (HTTP method), what "information" it needs (request body), and what it "gives back" (response).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Postman:</strong> A "workbench" for <em>testing</em> your API, which can also be used to <em>share</em> your manual as a "collection."</li>
              <li><strong>Swagger (OpenAPI):</strong> A "machine" that <em>auto-generates</em> a beautiful, interactive instruction manual based on comments in your code.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>API documentation is a formal specification that describes how to interact with your API. It is non-negotiable in a professional environment.</p>
            <p><strong>1. Postman:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>An application for designing, testing, and documenting APIs.</li>
              <li>You can create "requests" (for <Code>GET</Code>, <Code>POST</Code>, etc.), add headers and bodies, and send them to your server to see the response.</li>
              <li>You can save these requests into a <strong>Collection</strong>, which acts as documentation that your team can import and use to test.</li>
            </ul>
            
            <p className="mt-4"><strong>2. Swagger / OpenAPI:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>OpenAPI</strong> is the <em>specification</em> (the formal rules) for defining a REST API. <strong>Swagger</strong> is the suite of <em>tools</em> that implements this specification.</li>
              <li>The most popular tool is <strong>Swagger UI</strong>, which generates a beautiful, interactive documentation website from your API definition.</li>
              <li>You can define your API in a large YAML or JSON file, or (more commonly) you can use a library like <strong><Code>swagger-jsdoc</Code></strong> and <strong><Code>swagger-ui-express</Code></strong> to auto-generate the documentation from comments written directly in your Express route files.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Generating Swagger Docs from Code</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows how you would add <Code>swagger-jsdoc</Code> comments to a route to auto-generate documentation.</p>
            <CodeBlock code={`
// --- In server.js ---
// 1. Install: npm install swagger-jsdoc swagger-ui-express
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// 2. Define Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Project API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Path to your API route files
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// 3. Mount the UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// --- In routes/userRoutes.js ---
/**
 * @swagger
 * /api/users:
 * get:
 * summary: Retrieve a list of users
 * description: Retrieve a list of all users from the database.
 * responses:
 * 200:
 * description: A list of users.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * type: object
 * properties:
 * id:
 * type: integer
 * name:
 * type: string
 */
router.get('/', (req, res) => {
  // ... your logic
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between Postman and Swagger?</strong>
                <p className="pl-4"><strong>Postman</strong> is primarily an API <em>testing client</em>. Its documentation is a <em>feature</em>. <strong>Swagger (OpenAPI)</strong> is a <em>formal specification</em> for <em>designing and documenting</em> an API. Swagger UI is a tool to <em>generate</em> that documentation. In short: you use Postman to <em>test</em>, you use Swagger to <em>document</em>.</p>
              </li>
              <li>
                <strong>Why is documentation so important for a frontend developer?</strong>
                <p className="pl-4">The API documentation is the "contract" between the backend and frontend. The frontend developer reads it to know: 1) What URL to call, 2) What method to use (GET/POST), 3) What data to <em>send</em> (the <Code>req.body</Code>), and 4) What data to <em>expect back</em> (the <Code>res.json()</Code>). Without it, the frontend developer is just guessing.</p>
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
    case 'file-uploads':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.7: File Uploads & Handling (Multer)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Loading Bay"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>By default, your Express server only knows how to handle "packages" made of JSON (<Code>express.json()</Code>). It doesn't know how to handle a giant "shipping container" with a big file in it (which is sent as <Code>multipart/form-data</Code>).</p>
            <p><strong>Multer</strong> is the "loading bay" middleware. You install it, and it gives your server a special loading dock. It intercepts the "shipping container," takes the files out, saves them to a folder on your server (e.g., `uploads/`), and then hands the <em>text fields</em> from the container to your route handler as `req.body` and the <em>file</em> as `req.file`.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>File uploads are sent using a different encoding type: <strong><Code>multipart/form-data</Code></strong>. The `express.json()` middleware <em>cannot</em> read this. You must use a special middleware to handle it.</p>
            <p><strong><Code>multer</Code></strong> is the de-facto standard middleware for handling `multipart/form-data` in Express.</p>
            <p><strong>Core Setup:</strong></p>
            <ol className="list-disc ml-6 space-y-2">
              <li>Install: <Code>npm install multer</Code></li>
              <li>Import `multer` and configure its "storage" (where to save files). The simplest way is <Code>multer({'{'} dest: 'uploads/' {'}'})</Code>.</li>
              <li>Create an `upload` instance with your options: <Code>const upload = multer({'{'} dest: 'uploads/' {'}'});</Code></li>
              <li>Apply the `multer` middleware to your route.
                <ul className="list-disc ml-6 mt-2">
                  <li>For a single file: <Code>router.post('/upload', upload.single('myFile'), ...)</Code></li>
                  <li>For multiple files: <Code>router.array('myFiles', 5)</Code></li>
                </ul>
              </li>
              <li>Access the file(s) in your handler:
                <ul className="list-disc ml-6 mt-2">
                  <li>`upload.single()` makes the file available at <strong><Code>req.file</Code></strong>.</li>
                  <li>`upload.array()` makes files available at <strong><Code>req.files</Code></strong>.</li>
                  <li>Text fields in the form are still available at <strong><Code>req.body</Code></strong>.</li>
                </ul>
              </li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Single File Upload with `multer`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. `server.js` (Run `npm install express multer`)</p>
            <CodeBlock code={`
import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve();

// 1. Configure Multer to save files to an 'uploads' folder
const upload = multer({ dest: 'uploads/' });

// 2. Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. Apply the 'upload.single()' middleware to this route
// 'profileImage' MUST match the 'name' attribute in the HTML <input>
app.post('/upload', upload.single('profileImage'), (req, res) => {
  
  // 4. Multer adds the 'file' and 'body' objects to 'req'
  const file = req.file;
  const textBody = req.body;

  console.log('File details:', file);
  console.log('Text fields:', textBody);

  res.send(\`File uploaded successfully at: \${file.path}\`);
});

app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});
            `} language="javascript" />
            
            <p className="font-semibold mt-2">2. `index.html` (The Client)</p>
            <CodeBlock code={`
<!DOCTYPE html>
<html lang="en">
<body>
  <h1>File Upload</h1>
  <!-- CRITICAL: The form MUST have enctype="multipart/form-data" -->
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <div>
      <label>Your Name:</label>
      <input type="text" name="username" />
    </div>
    <div>
      <label>Your Image:</label>
      <!-- The 'name' attribute MUST match upload.single() -->
      <input type="file" name="profileImage" />
    </div>
    <button type="submit">Upload</button>
  </form>
</body>
</html>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Why is `req.body` empty when I upload a file?</strong>
                <p className="pl-4">You are likely using `app.use(express.json())`. That middleware does <em>not</em> understand `multipart/form-data`. You must remove `express.json()` <em>for that route</em> and use `multer` middleware instead. Multer will parse the text fields and put them on `req.body` for you.</p>
              </li>
              <li>
                <strong>Where do the files go? What is `req.file`?</strong>
                <p className="pl-4"><Code>multer({'{'} dest: 'uploads/' {'}'})</Code> saves the file to a folder named `uploads` <em>on your server</em>. It gives the file a random name. The <Code>req.file</Code> object is <em>metadata</em> about the upload, including:
                <br/>- `req.file.path`: The path to the saved file on your server.
                <br/>- `req.file.originalname`: The user's original name for the file.
                <br/>- `req.file.mimetype`: The file type (e.g., `image/jpeg`).
                <br/>- `req.file.size`: The file size in bytes.
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
    case 'api-versioning':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.8: API Versioning Strategies</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: "Software Updates" for Your API</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Your API is a "product" that your frontend "customers" depend on. One day, you decide to change a feature—for instance, you rename the `name` field to `fullName`. If you just deploy this change, you have created a <strong>"breaking change."</strong></p>
            <p>Every "customer" (like your mobile app) that was expecting a `name` field will <em>instantly crash</em>. <strong>API versioning</strong> is how you release this new feature <em>safely</em>. You keep the old API (`/v1`) running and deploy your new code as a separate "v2" (`/v2`). Old apps keep using `v1` and don't break, while new apps can use `v2` to get the new `fullName` field.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>API Versioning</strong> is the practice of managing changes to your API in a way that does not break existing client applications. The goal is to allow the API to evolve without disrupting users.</p>
            <p><strong>What is a "Breaking Change"?</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Renaming a field (e.g., `name` to `fullName`).</li>
              <li>Deleting a field.</li>
              <li>Changing a data type (e.g., `id: 123` (number) to `id: "usr_123"` (string)).</li>
              <li>Adding a new <em>required</em> field to a `POST` request.</li>
            </ul>
            <p><strong>The Most Common Versioning Strategy: URI Path Versioning</strong></p>
            <p>This is the simplest and most popular method. You simply put the version number in the URL path. It's clear, explicit, and easy for all clients to use.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Version 1:</strong> `https://api.example.com/api/v1/users`</li>
              <li><strong>Version 2:</strong> `https://api.example.com/api/v2/users`</li>
            </ul>
            <p>You implement this in Express using the `express.Router` pattern. You create separate routers for each version and mount them on the versioned paths.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Mounting v1 and v2 Routers</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. `routes/v1/userRoutes.mjs`</p>
            <CodeBlock code={`
import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
  res.json({ id: 1, name: 'Alex' }); // Uses 'name'
});
export default router;
            `} language="javascript" />

            <p className="font-semibold mt-2">2. `routes/v2/userRoutes.mjs` (The new version)</p>
            <CodeBlock code={`
import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
  res.json({ id: 1, fullName: 'Alex Smith' }); // BREAKING CHANGE: 'name' is now 'fullName'
});
export default router;
            `} language="javascript" />
            
            <p className="font-semibold mt-2">3. `server.mjs` (Mounting both versions)</p>
            <CodeBlock code={`
import express from 'express';
import v1UserRoutes from './routes/v1/userRoutes.mjs';
import v2UserRoutes from './routes/v2/userRoutes.mjs';

const app = express();
const port = 3000;

// Mount the old API for existing clients
app.use('/api/v1/users', v1UserRoutes);

// Mount the new API for new clients
app.use('/api/v2/users', v2UserRoutes);

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
                <strong>What is a "breaking change"?</strong>
                <p className="pl-4">It is any change to your API that will cause existing client applications to fail. Renaming a field, removing an endpoint, or adding a new <em>required</em> field are all breaking changes. Adding a new <em>optional</em> field is <em>not</em> a breaking change.</p>
              </li>
              <li>
                <strong>What are other versioning strategies?</strong>
                <p className="pl-4">Other, less common methods include using a <strong>query parameter</strong> (<Code>/api/users?version=2</Code>) or a <strong>custom header</strong> (<Code>Accept: application/vnd.myapi.v2+json</Code>). URI path versioning (<Code>/api/v2</Code>) is preferred because it is the most explicit and easiest to see and test.</p>
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
    case 'rest-api-mini-project':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">9.9: REST API Mini Project</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Building the Restaurant Kitchen</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This project is where you build the <em>entire</em> "kitchen" we've been talking about. You will build a complete, functional backend API from scratch.</p>
            <p>This means you are no longer just building one "station" (one route); you are building the <em>whole system</em>: the main entrance, the different cooking stations (routers), the "package opener" (<Code>express.json</Code>), the "safety net" (error handler), and the "filing cabinet" (CRUD operations).</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This project synthesizes all concepts from Chapters 7, 8, and 9. It demonstrates you can build a scalable, modular, and professional-grade REST API.</p>
            <p><strong>The Goal:</strong> Build a complete CRUD API for a single resource (e.g., "blog posts").</p>
            <p><strong>Core Components to Integrate:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong><Code>server.js</Code> (Main File):</strong> Initializes Express, applies application-level middleware (like <Code>express.json()</Code> and logging), mounts all routers, and starts the server with <Code>app.listen()</Code>.</li>
              <li><strong><Code>routes/postRoutes.js</Code> (Router File):</strong> Contains an <Code>express.Router()</Code> instance. This file defines all five CRUD endpoints for posts (<Code>GET /</Code>, <Code>GET /:id</Code>, <Code>POST /</Code>, <Code>PATCH /:id</Code>, <Code>DELETE /:id</Code>).</li>
              <li><strong>Data Storage:</strong> For this project, a simple in-memory array `let posts = [...]` is used as a fake database.</li>
              <li><strong>Validation:</strong> Use <Code>express-validator</Code> to validate the body of the <Code>POST</Code> and <Code>PATCH</Code> requests.</li>
              <li><strong>Error Handling:</strong> Use a central error handler and `try...catch` blocks to send clean JSON errors.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Complete "Blog Post" API</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. `package.json` (Your dependencies)</p>
            <CodeBlock code={`
{
  "name": "blog-api",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "express-validator": "^7.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
            `} language="json" />

            <p className="font-semibold mt-2">2. `routes/postRoutes.mjs` (The Router)</p>
            <CodeBlock code={`
import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();
let posts = [
  { id: 1, title: "Hello World", content: "My first post!" },
  { id: 2, title: "REST APIs", content: "Are fun to build." },
];
let nextId = 3;

// Validation rules
const validatePost = [
  body('title').notEmpty().withMessage('Title is required').trim().escape(),
  body('content').notEmpty().withMessage('Content is required').trim().escape(),
];

// Middleware to check for errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// C (CREATE)
router.post('/', validatePost, handleValidationErrors, (req, res) => {
  const newPost = {
    id: nextId++,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// R (READ All)
router.get('/', (req, res) => {
  res.status(200).json(posts);
});

// R (READ One)
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.status(200).json(post);
});

// U (UPDATE)
router.patch('/:id', validatePost, handleValidationErrors, (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  post.title = req.body.title;
  post.content = req.body.content;
  res.status(200).json(post);
});

// D (DELETE)
router.delete('/:id', (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

export default router;
            `} language="javascript" />
            
            <p className="font-semibold mt-2">3. `server.mjs` (The Main Server)</p>
            <CodeBlock code={`
import express from 'express';
import postRoutes from './routes/postRoutes.mjs';

const app = express();
const port = 3000;

// --- Global Middleware ---
// 1. Parse JSON bodies
app.use(express.json());
// 2. Logger
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// --- Mount Routers ---
// All routes in 'postRoutes' will be prefixed with /api/v1/posts
app.use('/api/v1/posts', postRoutes);

// --- Error Handler ---
// This will catch any errors passed by next(err)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(\`Blog API server running at http://localhost:\${port}\`);
});
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>This is great, but the data resets every time the server restarts. How do I fix that?</strong>
                <p className="pl-4">That's the next step! This in-memory `posts` array is a "fake" database. The <em>next</em> chapter is on databases. You would remove the `let posts = [...]` array and replace all the `.find()`, `.push()`, and `.filter()` logic with real database commands (e.g., `await Post.create(...)`, `await Post.findById(...)`). The API structure itself (the routes, middleware, and req/res logic) stays exactly the same.</p>
              </li>
              <li>
                <strong>What is the `handleValidationErrors` function for?</strong>
                <p className="pl-4">It's a helper middleware to keep the code DRY (Don't Repeat Yourself). Instead of writing the `validationResult` logic in *both* the POST and PATCH routes, we put it in one place and reuse it. It checks for errors and sends a `400` response, or just calls `next()` to proceed to the main handler if the data is valid.</p>
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

export default Chapter9Part2;