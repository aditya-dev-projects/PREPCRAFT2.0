export const Chapter8Quiz = {
  "introduction-to-express": [
    {
      question: "In the 'Server Framework' analogy, what is Node.js's built-in `http` module compared to?",
      options: [
        "The 'car chassis'",
        "The 'driver'",
        "Building a car from raw steel and parts",
        "The 'steering wheel'"
      ],
      answer: "Building a car from raw steel and parts",
      explanation: "The analogy states: 'Using Node's built-in `http` module is like building a car from raw steel and individual parts. It's possible, but incredibly low-level and difficult.'"
    },
    {
      question: "What is the *main feature* of Express.js, according to the notes?",
      options: [
        "Parsing JSON bodies",
        "Serving static files",
        "Routing (mapping HTTP methods and URLs to handlers)",
        "Creating the `http` server"
      ],
      answer: "Routing (mapping HTTP methods and URLs to handlers)",
      explanation: "The notes state: 'Routing: This is its main feature. It lets you map HTTP methods (GET, POST, PUT, DELETE) and URL paths... to specific handler functions.'"
    },
    {
      question: "What is the difference between Node.js and Express.js, according to the Q&A?",
      options: [
        "There is no difference.",
        "Node.js is the framework; Express.js is the runtime.",
        "Node.js is the runtime ('engine'); Express.js is the framework that runs *on* Node.js.",
        "Node.js is for frontend; Express.js is for backend."
      ],
      answer: "Node.js is the runtime ('engine'); Express.js is the framework that runs *on* Node.js.",
      explanation: "The Q&A clearly states: 'Node.js is the *runtime*... Express.js is a *framework* that runs *on* Node.js. It gives you easy-to-use tools for common backend tasks...'"
    },
    {
      question: "Which `res` (response) method is best for sending a JSON response and automatically setting headers?",
      options: [
        "res.send()",
        "res.json()",
        "res.status()",
        "res.write()"
      ],
      answer: "res.json()",
      explanation: "The notes specify: '`res.json()`: To send a JSON response (auto-sets headers).' This is the standard for building APIs."
    },
    {
      question: "How would you define a route that handles a `GET` request to the path `/api/user`?",
      options: [
        "app.get('/api/user', (req, res) => { ... })",
        "app.post('/api/user', (req, res) => { ... })",
        "app.listen('/api/user', (req, res) => { ... })",
        "http.get('/api/user', (req, res) => { ... })"
      ],
      answer: "app.get('/api/user', (req, res) => { ... })",
      explanation: "The example shows this syntax: `app.get('/api/user', (req, res) => { ... })`. This maps a GET request on that specific path to a handler function."
    },
    {
      question: "What is the purpose of `req.params`?",
      options: [
        "To get data from a JSON body",
        "To get URL parameters (e.g., `:id`)",
        "To get query strings (e.g., `?search=...`)",
        "To get HTTP headers"
      ],
      answer: "To get URL parameters (e.g., `:id`)",
      explanation: "The notes define `req.params` as the tool 'To get URL parameters (e.g., `:id`).'"
    }
  ],
  "express-setup": [
    {
      question: "In the 'Store's Grand Opening' analogy, what is the `npm init -y` command?",
      options: [
        "Buying the shelves (`npm install express`)",
        "Flipping the 'Open' sign (`node server.js`)",
        "Signing the lease (creating `package.json`)",
        "Stocking the shelves (writing code)"
      ],
      answer: "Signing the lease (creating `package.json`)",
      explanation: "The analogy states: '1. Sign the Lease: ... `npm init -y`. This creates your `package.json` (your lease agreement).'"
    },
    {
      question: "What is `nodemon` and why is it installed as a `devDependency`?",
      options: [
        "It's a required part of Express; it must be a regular `dependency`.",
        "It's a tool that auto-restarts the server on file changes; it's for development only.",
        "It's a tool for managing `package.json`.",
        "It's a tool for running tests."
      ],
      answer: "It's a tool that auto-restarts the server on file changes; it's for development only.",
      explanation: "The Q&A explains: '`nodemon` is a development tool that automatically restarts your Node server... It's a `devDependency` because it's only for development; in production... a process manager... handles restarting.'"
    },
    {
      question: "What is the command to install Express and save it as a project dependency?",
      options: [
        "npm init express",
        "npm install express",
        "npm install -D express",
        "npm start express"
      ],
      answer: "npm install express",
      explanation: "The notes list 'Run `npm install express` to install the framework' as a core step. This saves it to `dependencies`."
    },
    {
      question: "Which command in your `package.json`'s `scripts` section would you run for development with auto-reload?",
      options: [
        "npm start",
        "npm run dev",
        "npm test",
        "npm run build"
      ],
      answer: "npm run dev",
      explanation: "The example `package.json` shows: `\"dev\": \"nodemon server.js\"`. This is the script you run for development."
    },
    {
      question: "What is the name of the Express method that starts the server and binds it to a port?",
      options: [
        "app.start()",
        "app.run()",
        "app.get()",
        "app.listen()"
      ],
      answer: "app.listen()",
      explanation: "The notes and example both show that `app.listen()` is the final command: '...and call `app.listen()` to start the server.'"
    },
    {
      question: "After `npm install express`, what file is updated with `express` as a dependency?",
      options: [
        "server.js",
        ".gitignore",
        "package.json",
        "node_modules/"
      ],
      answer: "package.json",
      explanation: "Running `npm install express` adds `express` to the `dependencies` list inside your `package.json` file."
    }
  ],
  "routing-parameters": [
    {
      question: "In the 'Mail Sorter' analogy, what is a route parameter like `/users/:id`?",
      options: [
        "A static 'Get All Users' mailbox",
        "A 'dynamic' mailbox that accepts `/users/` followed by any ID",
        "A 'Create New User' mailbox (POST)",
        "The mail sorter itself"
      ],
      answer: "A 'dynamic' mailbox that accepts `/users/` followed by any ID",
      explanation: "The analogy states: 'Route Parameters (`/users/:id`): This is a \"dynamic\" mailbox. It means \"Put any mail addressed to `/users/` followed by *any ID number* in this box.\""
    },
    {
      question: "A user visits `/users/123`. How does your handler (defined as `app.get('/users/:id', ...)` get the '123'?",
      options: [
        "req.query.id",
        "req.params.id",
        "req.body.id",
        "req.id"
      ],
      answer: "req.params.id",
      explanation: "The notes explicitly show this: 'Path: `/users/:id`', 'URL: `/users/123`', 'Code: `req.params.id` (which will be `\"123\"`)'."
    },
    {
      question: "A user visits `/search?q=react&sort=new`. How do you get the value 'react'?",
      options: [
        "req.query.q",
        "req.params.q",
        "req.body.q",
        "req.q"
      ],
      answer: "req.query.q",
      explanation: "The notes show this example: 'Path: `/search`', 'URL: `/search?q=react&sort=new`', 'Code: `req.query.q` (which will be `\"react\"`)'."
    },
    {
      question: "According to the Q&A, when do you use `req.params` vs. `req.query`?",
      options: [
        "Use `req.params` for optional filters, `req.query` for required IDs",
        "Use `req.params` for POST, `req.query` for GET",
        "Use `req.params` for required IDs (like `/users/:id`), `req.query` for optional filters (like `?sort=desc`)",
        "They are interchangeable"
      ],
      answer: "Use `req.params` for required IDs (like `/users/:id`), `req.query` for optional filters (like `?sort=desc`)",
      explanation: "The Q&A provides this clear distinction: 'You use `req.params` to get a *required* identifier... and `req.query` to get *optional* parameters...'"
    },
    {
      question: "Why does the order of your routes matter?",
      options: [
        "It doesn't matter at all",
        "Dynamic routes (like `/users/:id`) must be defined *before* static routes (like `/users/new`)",
        "Static routes (like `/users/new`) must be defined *before* dynamic routes (like `/users/:id`)",
        "POST routes must always be defined before GET routes"
      ],
      answer: "Static routes (like `/users/new`) must be defined *before* dynamic routes (like `/users/:id`)",
      explanation: "The Q&A states: 'You must always place your most specific, static routes (like `/users/new`) *before* your general, dynamic routes (like `/users/:id`).'"
    },
    {
      question: "What are the three components of an Express route definition?",
      options: [
        "METHOD, PATH, HANDLER",
        "ASYNC, AWAIT, CALLBACK",
        "REQ, RES, NEXT",
        "PARAMS, QUERY, BODY"
      ],
      answer: "METHOD, PATH, HANDLER",
      explanation: "The notes define the syntax as: `app.METHOD(PATH, HANDLER)`, where METHOD is `get`, `post`, etc., PATH is the URL, and HANDLER is the callback."
    }
  ],
  "middleware-concepts": [
    {
      question: "In the 'Assembly Line' analogy, what is a middleware function?",
      options: [
        "The final route handler (the end of the line)",
        "The 'inspection stations' that run *along* the assembly line",
        "The request (the 'raw materials')",
        "The response (the 'finished product')"
      ],
      answer: "The 'inspection stations' that run *along* the assembly line",
      explanation: "The analogy states: 'Middleware functions are the \"inspection stations\" *along* that assembly line. A request arrives... It goes to Middleware 1... The Logger calls `next()` to pass it to Middleware 2...'"
    },
    {
      question: "What are the three arguments for a standard middleware function?",
      options: [
        "err, req, res",
        "req, res, next",
        "req, res, err",
        "err, req, res, next"
      ],
      answer: "req, res, next",
      explanation: "The notes define a middleware as: 'a function that has access to the request object (`req`), the response object (`res`), and the `next` function...'"
    },
    {
      question: "What is the *special* signature for an error-handling middleware?",
      options: [
        "err, req, res",
        "req, res, next",
        "req, res, err",
        "err, req, res, next"
      ],
      answer: "err, req, res, next",
      explanation: "The notes state: 'Error-handling: The only middleware with *four* arguments: `(err, req, res, next)`.'"
    },
    {
      question: "What happens if you forget to call `next()` or `res.send()` in a middleware?",
      options: [
        "The server crashes",
        "The request automatically goes to the next handler",
        "The request 'hangs' and the client will time out",
        "It sends a `404 Not Found` error"
      ],
      answer: "The request 'hangs' and the client will time out",
      explanation: "The Q&A clearly states: 'The request will \"hang.\" The client... will wait and wait, and eventually... \"timeout\" error. The route handler... will *never* be called...'"
    },
    {
      question: "What is the difference between `app.use('/api', ...)` and `app.get('/api', ...)`?",
      options: [
        "`app.get` is for errors, `app.use` is for routes",
        "`app.use` matches all methods (GET, POST, etc.) and paths *starting with* '/api'; `app.get` matches *only* GET requests to the *exact* '/api' path",
        "`app.use` is for a single route; `app.get` is for all routes",
        "There is no difference"
      ],
      answer: "`app.use` matches all methods (GET, POST, etc.) and paths *starting with* '/api'; `app.get` matches *only* GET requests to the *exact* '/api' path",
      explanation: "The Q&A explains this: '`app.get()` only matches `GET` requests... `app.use('/admin', ...)`... matches *all* HTTP methods... for any path *starting with* `/admin`.'"
    },
    {
      question: "How do you apply a middleware (e.g., `logger`) to *every single* request?",
      options: [
        "app.use(logger)",
        "app.get('/*', logger)",
        "app.all(logger)",
        "You must add it to every route manually"
      ],
      answer: "app.use(logger)",
      explanation: "The example shows: '`app.use(logger);`... This will run for EVERY request, before any route handler.'"
    }
  ],
  "built-in-middleware": [
    {
      question: "In the 'Tools in the Box' analogy, what is the `express.json()` middleware?",
      options: [
        "The 'Public Files Room' (for serving files)",
        "The 'Package Opener' (for parsing JSON bodies)",
        "The 'Car Chassis' (the framework itself)",
        "The 'Security Guard' (for auth)"
      ],
      answer: "The 'Package Opener' (for parsing JSON bodies)",
      explanation: "The analogy states: '`express.json()` (The \"Package Opener\"): ...parses the JSON, and puts the contents neatly on the `req.body` \"desk\" for you.'"
    },
    {
      question: "You are sending a `POST` request from your React app, but `req.body` is `undefined` on the server. What did you forget?",
      options: [
        "You forgot `app.use(express.static('public'))`",
        "You forgot `app.use(express.json())`",
        "You forgot to call `next()`",
        "You forgot to install `nodemon`"
      ],
      answer: "You forgot `app.use(express.json())`",
      explanation: "The Q&A states this is the exact problem: 'You forgot to add `app.use(express.json())`... Without this middleware, Express does not know how to parse the incoming JSON payload, so `req.body` is never populated.'"
    },
    {
      question: "What does `app.use(express.static('public'))` do?",
      options: [
        "It parses JSON bodies",
        "It creates a new folder named 'public'",
        "It serves all files from the 'public' folder, making them accessible from the root URL",
        "It hides the 'public' folder for security"
      ],
      answer: "It serves all files from the 'public' folder, making them accessible from the root URL",
      explanation: "The notes define this: 'It takes a folder name (e.g., `public`) and makes all files inside it accessible from the root URL.' The example confirms this."
    },
    {
      question: "If you have a file at `./public/css/style.css` and use `app.use(express.static('public'))`, what URL does the browser use to get it?",
      options: [
        "http://your-server.com/public/css/style.css",
        "http://your-server.com/css/style.css",
        "http://your-server.com/static/css/style.css",
        "http://your-server.com/public/style.css"
      ],
      answer: "http://your-server.com/css/style.css",
      explanation: "The notes example states: '...a file at `./public/css/style.css` can be accessed by the browser at `http://your-server.com/css/style.css`.'"
    },
    {
      question: "What is `express.urlencoded()` used for?",
      options: [
        "Parsing JSON payloads",
        "Serving static files",
        "Parsing data from a standard HTML form (`application/x-www-form-urlencoded`)",
        "Encrypting passwords"
      ],
      answer: "Parsing data from a standard HTML form (`application/x-www-form-urlencoded`)",
      explanation: "The notes state its purpose: '...it parses incoming requests from a standard HTML form (with `content-type: application/x-www-form-urlencoded`).'"
    },
    {
      question: "How would you serve a production-ready React app (in a `build` folder) from your Express server?",
      options: [
        "app.use(express.json('build'))",
        "app.use(express.static('build'))",
        "app.get('/', (req, res) => res.render('build'))",
        "You have to manually create a route for every file in the build folder"
      ],
      answer: "app.use(express.static('build'))",
      explanation: "The Q&A section explains this: 'First, you run `npm run build`... Then, in your Express `server.js`, you add: `app.use(express.static('path/to/react/build'))`.'"
    }
  ],
  "custom-middleware": [
    {
      question: "In the 'Security Guard' analogy, how does a middleware 'allow' a request to proceed?",
      options: [
        "By calling `next()`",
        "By calling `res.send()`",
        "By returning `true`",
        "By doing nothing"
      ],
      answer: "By calling `next()`",
      explanation: "The analogy states: 'If the badge is valid, the guard says \"go ahead\" (calls `next()`), and the person proceeds to the office...'"
    },
    {
      question: "In the 'Security Guard' analogy, how does a middleware 'reject' a request?",
      options: [
        "By calling `next()`",
        "By calling `res.send()` (or `res.status()`) and *not* calling `next()`",
        "By returning `false`",
        "By `throw new Error()`"
      ],
      answer: "By calling `res.send()` (or `res.status()`) and *not* calling `next()`",
      explanation: "The analogy states: 'If they have no badge, the guard sends them away immediately (`res.send()`), and they never reach the office.' The example `checkAuth` also shows this."
    },
    {
      question: "How do you apply a middleware (e.g., `checkAuth`) to a *single route* instead of all routes?",
      options: [
        "You can't, middleware is always global",
        "By using `app.use(checkAuth)`",
        "By passing it as an argument before the handler: `app.get('/admin', checkAuth, (req, res) => ...)`",
        "By creating a new file for it"
      ],
      answer: "By passing it as an argument before the handler: `app.get('/admin', checkAuth, (req, res) => ...)`",
      explanation: "The example shows this: '`app.get('/admin', checkAuth, (req, res) => { ... })`'. This is 'Route-level' middleware."
    },
    {
      question: "What is the most common bug when writing custom middleware?",
      options: [
        "Forgetting to call `next()` or send a response, causing the request to hang",
        "Using `req` instead of `res`",
        "Writing a function with 4 arguments",
        "Naming the function incorrectly"
      ],
      answer: "Forgetting to call `next()` or send a response, causing the request to hang",
      explanation: "The notes and Q&A both state this is a 'very common bug': 'If you do not call `next()`... the request will be left \"hanging,\" and the client will eventually time out.'"
    },
    {
      question: "What does `app.use('/admin', checkAuth)` do?",
      options: [
        "Runs `checkAuth` only for `GET /admin`",
        "Runs `checkAuth` for *all* HTTP methods (GET, POST, etc.) on any path *starting with* `/admin`",
        "This is invalid syntax",
        "Runs `checkAuth` for all routes *except* `/admin`"
      ],
      answer: "Runs `checkAuth` for *all* HTTP methods (GET, POST, etc.) on any path *starting with* `/admin`",
      explanation: "The Q&A explains this: '`app.use('/admin', ...)` will match **all** HTTP methods (GET, POST, etc.) for any path that **starts with** `/admin` (like `/admin/users`...)'"
    },
    {
      question: "A middleware function has `(err, req, res, next)`. What type of middleware is this?",
      options: [
        "Application-level",
        "Route-level",
        "Error-handling",
        "Built-in"
      ],
      answer: "Error-handling",
      explanation: "The notes state: 'Error-handling: A special middleware with four arguments: `(err, req, res, next)`.'"
    }
  ],
  "request-response-objects": [
    {
      question: "In the 'Order & The Plate' analogy, what is the `req` (Request) object?",
      options: [
        "The 'plate' you use to send a response back",
        "The 'order' from the customer, which you read from",
        "The 'menu' of all available routes",
        "The 'chef' that processes the data"
      ],
      answer: "The 'order' from the customer, which you read from",
      explanation: "The analogy states: 'The Request (`req`): This is the \"order\" from the customer. It's an object containing *everything* the client sent you. You **read from** this object...'"
    },
    {
      question: "Which property on the `req` object holds data from a `POST` request (after using middleware)?",
      options: [
        "req.params",
        "req.query",
        "req.body",
        "req.headers"
      ],
      answer: "req.body",
      explanation: "The notes list: '`req.body`: Contains the body of a `POST`, `PUT`, or `PATCH` request. **Requires** middleware like `express.json()`...'"
    },
    {
      question: "Which `res` method is the best practice for sending a JSON response to an API request?",
      options: [
        "res.send()",
        "res.write()",
        "res.json()",
        "res.status()"
      ],
      answer: "res.json()",
      explanation: "The notes state: '`res.json(data)`: Sends a JSON response. Automatically stringifies your object and sets the `Content-Type: application/json` header. This is the one you will use most often for APIs.'"
    },
    {
      question: "How would you send a 'Not Found' error with the correct status code?",
      options: [
        "res.send(404, 'Not Found')",
        "res.status(404).json({ error: 'Not Found' })",
        "res.json({ status: 404, error: 'Not Found' })",
        "res.error(404, 'Not Found')"
      ],
      answer: "res.status(404).json({ error: 'Not Found' })",
      explanation: "The notes show this chaining: '`res.status(code)`... You can chain this: `res.status(404).json({ error: 'Not Found' })`.'"
    },
    {
      question: "What is the difference between `req.params`, `req.query`, and `req.body`?",
      options: [
        "They are all the same",
        "Params are for `POST`, Query is for `GET`, Body is for `PUT`",
        "Params: required URL path (`/posts/42`). Query: optional filters (`?sort=desc`). Body: data sent *to* the server (JSON).",
        "Params: JSON data. Query: URL path. Body: optional filters."
      ],
      answer: "Params: required URL path (`/posts/42`). Query: optional filters (`?sort=desc`). Body: data sent *to* the server (JSON).",
      explanation: "The Q&A provides this exact summary: '`req.params`: For *required* identifiers... `req.query`: For *optional* filters... `req.body`: For *data* you are sending to the server...'"
    },
    {
      question: "A user makes a `POST` request to `/users` with `{ \"name\": \"Alex\" }` in the body. How do you access this object?",
      options: [
        "req.query.name",
        "req.params.name",
        "req.body",
        "req.headers.body"
      ],
      answer: "req.body",
      explanation: "The example shows this: '`app.post('/users', ...)`', '`const newUser = req.body;`'. This requires `app.use(express.json())` to work."
    }
  ],
  "error-handling-middleware": [
    {
      question: "In the 'Factory Safety Net' analogy, what is the error-handling middleware?",
      options: [
        "The assembly line",
        "The 'safety net' at the *very end* of the line that catches all errors",
        "The security guard at the front",
        "The error itself"
      ],
      answer: "The 'safety net' at the *very end* of the line that catches all errors",
      explanation: "The analogy states: 'An error-handling middleware is the \"safety net\" at the very end of your server's assembly line... When a route handler... throws an error... the request *immediately* falls into this net.'"
    },
    {
      question: "What is the *special signature* that Express uses to identify an error-handling middleware?",
      options: [
        "It must be named `errorHandler`",
        "It must be defined *first*",
        "It must have exactly four arguments: `(err, req, res, next)`",
        "It must have exactly three arguments: `(err, req, res)`"
      ],
      answer: "It must have exactly four arguments: `(err, req, res, next)`",
      explanation: "The notes and Q&A both state this is the key: 'The signature *must* be `(err, req, res, next)`. This is how Express identifies it as an error handler.'"
    },
    {
      question: "Where in your `server.js` file must this error handler be defined?",
      options: [
        "At the very top, before all other code",
        "It doesn't matter",
        "*After* all other `app.use()` calls and routes, at the very end",
        "Inside the `app.listen()` callback"
      ],
      answer: "*After* all other `app.use()` calls and routes, at the very end",
      explanation: "This is a critical rule: 'It **must** be defined *after* all other `app.use()` calls and routes. It acts as a \"catch-all\" at the end...'"
    },
    {
      question: "How do you *manually* trigger the error-handling middleware from inside a route handler?",
      options: [
        "By calling `next()`",
        "By calling `next(err)`, passing the error object",
        "By calling `res.error(err)`",
        "By `throw new Error()` in an `async` function"
      ],
      answer: "By calling `next(err)`, passing the error object",
      explanation: "The notes state the handler is called if 'You explicitly call `next(err)` from a route or regular middleware.' The example also shows this."
    },
    {
      question: "If an error happens inside an `async` route handler (e.g., `await` fails), what must you do to trigger the error handler?",
      options: [
        "Nothing, it's automatic",
        "Wrap the code in a `try...catch` block and call `next(err)` from the `catch`",
        "Use `res.on('error', ...)`",
        "Return the error object"
      ],
      answer: "Wrap the code in a `try...catch` block and call `next(err)` from the `catch`",
      explanation: "The notes specify this: 'Note for Async: If an error occurs in an `async` function... you *must* use a `try...catch` block and call `next(err)` from the `catch` block.'"
    },
    {
      question: "In the example, what does the `errorHandler` function do?",
      options: [
        "It crashes the server",
        "It restarts the server",
        "It logs the error and sends a clean JSON response with a 500 status",
        "It fixes the bug and retries the request"
      ],
      answer: "It logs the error and sends a clean JSON response with a 500 status",
      explanation: "The example code shows: `console.error(\"ERROR CAUGHT:\", err.message);` and `res.status(500).json({ error: ... });`."
    }
  ],
  "express-router": [
    {
      question: "In the 'Department Manager' analogy, what is an `express.Router()`?",
      options: [
        "The 'CEO' (`server.js`)",
        "The 'Department Manager' (e.g., `productRoutes.js`) that groups related logic",
        "A single route handler",
        "The `package.json` file"
      ],
      answer: "The 'Department Manager' (e.g., `productRoutes.js`) that groups related logic",
      explanation: "The analogy states: 'You use an `express.Router()` to hire a \"Department Manager.\" You create a new file (`productRoutes.js`)... and put *all* product-related logic in there.'"
    },
    {
      question: "What is the primary benefit of using `express.Router`?",
      options: [
        "It makes your server faster",
        "It's the only way to handle `POST` requests",
        "Scalability and Maintainability: It keeps your `server.js` file clean",
        "It automatically installs dependencies"
      ],
      answer: "Scalability and Maintainability: It keeps your `server.js` file clean",
      explanation: "The Q&A explains: 'Scalability and Maintainability. A real application... Putting all 100 [routes] in `server.js` makes it unreadable. By splitting them... you create a clean, \"modular\" codebase...'"
    },
    {
      question: "In a router file (`productRoutes.js`), how do you define a route?",
      options: [
        "app.get('/', ...)",
        "router.get('/', ...)",
        "express.get('/', ...)",
        "router.use('/', ...)"
      ],
      answer: "router.get('/', ...)",
      explanation: "The workflow states: 'Instead of `app.get()`, you use `router.get()`.' The example code also shows this."
    },
    {
      question: "How do you 'mount' a router file (e.g., `productRoutes`) in your main `server.js` file?",
      options: [
        "app.listen('/api/products', productRoutes)",
        "app.use('/api/products', productRoutes)",
        "app.get('/api/products', productRoutes)",
        "require('./productRoutes')"
      ],
      answer: "app.use('/api/products', productRoutes)",
      explanation: "The workflow and example both show: 'In your main `server.js`, you `import` the router file and tell your app to *use* it with a URL prefix: `app.use('/api/users', userRoutes)`.'"
    },
    {
      question: "If your server has `app.use('/api/users', userRoutes)` and your router has `router.get('/:id', ...)`, what is the full URL path?",
      options: [
        "/:id",
        "/api/users/:id",
        "/users/:id",
        "/api/:id"
      ],
      answer: "/api/users/:id",
      explanation: "The notes explain: 'Now, a request to `GET /api/users/123` will be automatically forwarded to the `router.get('/:id')` handler...'"
    },
    {
      question: "How can you apply an `authMiddleware` to *all* routes within a router, but not to other routers?",
      options: [
        "app.use(authMiddleware)",
        "router.use(authMiddleware)",
        "app.get('/*', authMiddleware)",
        "It's not possible"
      ],
      answer: "router.use(authMiddleware)",
      explanation: "The Q&A states: 'Yes, and you should! You can use `router.use(myAuthMiddleware)` inside `userRoutes.js` to apply that middleware *only* to the user routes...'"
    }
  ],
  "template-engines": [
    {
      question: "In the 'Mail Merge' analogy, what is a template engine like EJS?",
      options: [
        "The final, personalized HTML document",
        "The server (the 'secretary')",
        "The data (e.g., `{ userName: 'Alex' }`)",
        "The 'mail merge' tool that combines a template with data"
      ],
      answer: "The 'mail merge' tool that combines a template with data",
      explanation: "The analogy states: 'A template engine is like a \"mail merge\" tool... your Express server (the \"secretary\") takes your template... \"merges\" it with the user's specific data...'"
    },
    {
      question: "What is Server-Side Rendering (SSR)?",
      options: [
        "The *server* builds the complete, data-filled HTML page and sends it to the client.",
        "The *client* (browser) builds the page using JavaScript.",
        "The server sends a blank HTML page and a giant JavaScript file.",
        "A JavaScript library for building user interfaces."
      ],
      answer: "The *server* builds the complete, data-filled HTML page and sends it to the client.",
      explanation: "The Q&A defines SSR: 'The *server* does all the work. It builds the complete, data-filled HTML page and sends it to the client.'"
    },
    {
      question: "What is the EJS tag to *output* a variable's value into the HTML (e.g., a username)?",
      options: [
        "`<% ... %>` (Logic)",
        "`<%= ... %>` (Outputs Data)",
        "`<%- ... %>` (Outputs Raw HTML)",
        "`<%# ... %>` (Comment)"
      ],
      answer: "`<%= ... %>` (Outputs Data)",
      explanation: "The notes list the key tags: '`<%= ... %>` (Outputs Data): \"Escapes\" and outputs the value into the HTML. (e.g., `<%= user.name %>`)'"
    },
    {
      question: "Which `res` method do you use to render a template and send it to the client?",
      options: [
        "res.send('index', { data })",
        "res.json('index', { data })",
        "res.sendFile('index.ejs')",
        "res.render('index', { data })"
      ],
      answer: "res.render('index', { data })",
      explanation: "The notes state: 'You use the `res.render(templateName, dataObject)` method to render a template and send it.'"
    },
    {
      question: "How do you tell Express to use EJS as its template engine?",
      options: [
        "app.set('view engine', 'ejs')",
        "app.use(ejs)",
        "app.import('ejs')",
        "new Express(ejs)"
      ],
      answer: "app.set('view engine', 'ejs')",
      explanation: "The setup instructions state: 'Set it as your \"view engine\" in Express: `app.set('view engine', 'ejs');`'"
    },
    {
      question: "SSR (like EJS) and CSR (like React) are different. When is EJS a good choice?",
      options: [
        "For complex, highly interactive 'app-like' experiences",
        "For simpler, content-heavy sites (like blogs) where SEO is important",
        "When you don't want to use a server",
        "When you want to build a mobile app"
      ],
      answer: "For simpler, content-heavy sites (like blogs) where SEO is important",
      explanation: "The Q&A states: 'It's great for blogs, simple marketing pages... where you don't need a complex, interactive \"app\" feel. It's also generally better for SEO...'"
    }
  ]
};