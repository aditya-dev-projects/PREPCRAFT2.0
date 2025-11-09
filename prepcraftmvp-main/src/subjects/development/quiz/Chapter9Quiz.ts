export const Chapter9Quiz = {
  "rest-principles": [
    {
      question: "In the 'Vending Machine' analogy, what does the 'Stateless' principle mean?",
      options: [
        "The machine is broken and has no state",
        "The machine doesn't remember you; every transaction is new",
        "You use the same buttons (HTTP verbs) for every item",
        "You must request a resource by its noun (e.g., /products/b5)"
      ],
      answer: "The machine doesn't remember you; every transaction is new",
      explanation: "The analogy states: 'It's \"Stateless\": The machine doesn't remember you. Every time you buy a snack, it's a brand new transaction. This is the most important rule of REST.'"
    },
    {
      question: "What is the *most important* core constraint of REST?",
      options: [
        "Client-Server Separation",
        "Stateless",
        "Cacheable",
        "Uniform Interface"
      ],
      answer: "Stateless",
      explanation: "The notes identify this as 'The Most Important Rule': 'The server does *not* store any client \"state\"... Every single request from the client must contain *all* information the server needs...'"
    },
    {
      question: "What is the correct RESTful design for an API endpoint to create a new user?",
      options: [
        "GET /createNewUser",
        "POST /createNewUser",
        "POST /users",
        "GET /users"
      ],
      answer: "POST /users",
      explanation: "The 'Bad vs. Good API Design' example shows this. You use the *noun* for the URL (`/users`) and the *HTTP verb* for the action (`POST`)."
    },
    {
      question: "What does 'Uniform Interface' mean in REST?",
      options: [
        "All APIs must return JSON",
        "All APIs must be built with Express.js",
        "All resources are accessed in the same, predictable way (e.g., using nouns for URLs and HTTP verbs for actions)",
        "The client and server must be written in the same language"
      ],
      answer: "All resources are accessed in the same, predictable way (e.g., using nouns for URLs and HTTP verbs for actions)",
      explanation: "The notes define this as: 'all resources are accessed in the same, predictable way... Resources as Nouns... HTTP Verbs for Actions...'"
    },
    {
      question: "According to the Q&A, what is the practical reason 'statelessness' is so important for scalability?",
      options: [
        "It uses less data",
        "It's more secure",
        "Any server can handle any request, as no server holds unique session data",
        "It allows the client to store the session"
      ],
      answer: "Any server can handle any request, as no server holds unique session data",
      explanation: "The Q&A states: 'This is far more scalable, as any of 1000 servers can verify your token; they don't need a shared session memory.'"
    },
    {
      question: "What is a major alternative to REST, mentioned in the Q&A, that uses a single endpoint?",
      options: [
        "SOAP",
        "GraphQL",
        "RPC",
        "gRPC"
      ],
      answer: "GraphQL",
      explanation: "The Q&A says: 'GraphQL is a popular alternative... You have *one* powerful endpoint. The *client* sends a \"query\" specifying *exactly* what data... it needs...'"
    }
  ],
  "http-methods": [
    {
      question: "In the 'Language of the Web' analogy, what are HTTP Methods?",
      options: [
        "The 'replies' from the server (e.g., '200 OK')",
        "The 'nouns' or resources (e.g., '/users')",
        "The 'action' or 'verb' the client wants to perform (e.g., 'GET data')",
        "The 'language' itself"
      ],
      answer: "The 'action' or 'verb' the client wants to perform (e.g., 'GET data')",
      explanation: "The analogy states: 'HTTP Methods (Verbs): The *action* the client wants to perform. This is the \"verb\" of the sentence...'"
    },
    {
      question: "Which HTTP method is used to *create* a new resource and is *not* idempotent?",
      options: [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      answer: "POST",
      explanation: "The notes define `POST` as: '*Creates* a new resource... This is *not idempotent* (running it 100 times will create 100 new users).'"
    },
    {
      question: "A user is logged in, but tries to access an admin-only page. What is the *correct* error code to return?",
      options: [
        "400 Bad Request",
        "401 Unauthorized",
        "403 Forbidden",
        "404 Not Found"
      ],
      answer: "403 Forbidden",
      explanation: "The Q&A explains: '`403 Forbidden` means \"I know *who you are*, but you are not *allowed* to do this.\" You are authenticated, but you are not an admin...'"
    },
    {
      question: "What is the key difference between `PUT` and `PATCH`?",
      options: [
        "`PUT` updates, `PATCH` creates",
        "`PUT` is for JSON, `PATCH` is for text",
        "`PUT` *replaces* the entire resource, `PATCH` applies a *partial update*",
        "`PUT` is for partial updates, `PATCH` *replaces* the entire resource"
      ],
      answer: "`PUT` *replaces* the entire resource, `PATCH` applies a *partial update*",
      explanation: "The Q&A states this: '`PUT`... *replaces* the entire resource... `PATCH`... applies a *partial update*... `PATCH` is almost always preferred.'"
    },
    {
      question: "What status code should you return for a successful `POST` request (creation)?",
      options: [
        "200 OK",
        "201 Created",
        "204 No Content",
        "301 Moved Permanently"
      ],
      answer: "201 Created",
      explanation: "The notes list `201 Created` as the standard for a `POST`: 'A new resource was successfully created (for `POST`).'"
    },
    {
      question: "A user tries to log in, but they are *not* logged in (missing a token). What code should be returned?",
      options: [
        "400 Bad Request",
        "401 Unauthorized",
        "403 Forbidden",
        "404 Not Found"
      ],
      answer: "401 Unauthorized",
      explanation: "The Q&A explains: '`401 Unauthorized` means \"I don't know *who you are*.\" You are not authenticated; you're missing a valid login token.'"
    }
  ],
  "api-design": [
    {
      question: "What is the best practice for naming your API endpoints?",
      options: [
        "Use verbs (e.g., /getUsers, /createUser)",
        "Use nouns (e.g., /users)",
        "Use a mix (e.g., /users, /createUser)",
        "It doesn't matter"
      ],
      answer: "Use nouns (e.g., /users)",
      explanation: "The notes state this as a core practice: '1. Use Nouns, Not Verbs, in URLs: The URL should identify the *resource* (the \"thing\"). The HTTP method... should identify the *action*.'"
    },
    {
      question: "What is the best practice for naming collection resources?",
      options: [
        "Singular (e.g., /user, /user/123)",
        "Plural (e.g., /users, /users/123)",
        "It doesn't matter",
        "Use a prefix (e.g., /collection-user, /item-user/123)"
      ],
      answer: "Plural (e.g., /users, /users/123)",
      explanation: "The notes state: '2. Use Plurals for Resources... Good: `/users` (the collection), `/users/123` (one item from the collection).'"
    },
    {
      question: "Why is API versioning (e.g., `/api/v1/`) important?",
      options: [
        "It makes the URL look more professional",
        "It's required by Express",
        "It allows you to make 'breaking changes' in a new version without crashing old client apps",
        "It makes the API run faster"
      ],
      answer: "It allows you to make 'breaking changes' in a new version without crashing old client apps",
      explanation: "The Q&A explains this: '...you can't just change the v1 API, or you will crash every v1 mobile app instantly. Instead, you create *new* endpoints at `/api/v2/users`...'"
    },
    {
      question: "How should you design an endpoint to get all 'comments' for a specific 'post' (e.g., post ID 42)?",
      options: [
        "GET /getCommentsForPost/42",
        "GET /comments?postId=42",
        "GET /posts/42/comments",
        "GET /posts/comments/42"
      ],
      answer: "GET /posts/42/comments",
      explanation: "The Q&A section recommends nesting resources: 'You nest the resources in the URL. This is a very clean RESTful pattern: `GET /posts/123/comments`'"
    },
    {
      question: "Which of the following is *NOT* a 'breaking change'?",
      options: [
        "Renaming a field (e.g., `name` to `fullName`)",
        "Adding a new *optional* field to a response",
        "Changing a data type (e.g., `id: 123` to `id: \"usr_123\"`)",
        "Adding a new *required* field to a POST request"
      ],
      answer: "Adding a new *optional* field to a response",
      explanation: "The Q&A defines breaking changes (renaming, deleting, changing type, adding *required* fields). Adding a new, *optional* field is safe because existing clients will simply ignore it."
    },
    {
      question: "A user POSTs invalid data (e.g., a missing `name`). What status code should you return?",
      options: [
        "200 OK",
        "404 Not Found",
        "400 Bad Request",
        "500 Internal Server Error"
      ],
      answer: "400 Bad Request",
      explanation: "The example `POST /api/v1/products` route shows this: `if (!name || !price) { return res.status(400).json({ error: \"Name and price are required\" }); }`"
    }
  ],
  "crud-operations": [
    {
      question: "What does the 'R' in CRUD stand for, and which HTTP method(s) does it map to?",
      options: [
        "Replace, maps to PUT",
        "Read, maps to GET",
        "Remove, maps to DELETE",
        "Request, maps to POST"
      ],
      answer: "Read, maps to GET",
      explanation: "The analogy and table clearly map 'READ' to '`GET`'. This includes 'READ (All)' (`GET /users`) and 'READ (One)' (`GET /users/:id`)."
    },
    {
      question: "Which HTTP method and route are used to *create* a new user?",
      options: [
        "GET /users",
        "GET /users/new",
        "POST /users",
        "POST /users/:id"
      ],
      answer: "POST /users",
      explanation: "The table shows the 'CREATE' operation maps to `POST /users`. The data is sent in `req.body`."
    },
    {
      question: "Which HTTP method and route are used to *delete* user 123?",
      options: [
        "DELETE /users/123",
        "GET /users/123/delete",
        "POST /users/123/delete",
        "DELETE /users"
      ],
      answer: "DELETE /users/123",
      explanation: "The table shows the 'DELETE' operation maps to `DELETE /users/:id`. The ID is passed as a route parameter."
    },
    {
      question: "A `POST /tasks` route is not working because `req.body` is `undefined`. What is the most likely cause?",
      options: [
        "The server is not running",
        "The `express.json()` middleware was not used",
        "The `fs` module is missing",
        "The route should be `GET /tasks`"
      ],
      answer: "The `express.json()` middleware was not used",
      explanation: "The Q&A section states: 'You forgot... `app.use(express.json())`. Without this middleware, Express does not know how to parse the JSON body, and `req.body` will be `undefined`.'"
    },
    {
      question: "What is the best-practice status code to send after a successful `DELETE` request?",
      options: [
        "200 OK (with the deleted item)",
        "201 Created",
        "404 Not Found",
        "204 No Content"
      ],
      answer: "204 No Content",
      explanation: "The Q&A states: 'The best practice is `204 No Content`. This tells the client \"The operation was successful, and there is nothing to send back.\"'"
    },
    {
      question: "How do you *immutably* delete an item from an in-memory array on a server?",
      options: [
        "Using `todos.splice(index, 1)`",
        "Using `delete todos[index]`",
        "Using `setTodos(todos.filter(...))`",
        "Using `todos = todos.filter(...)`"
      ],
      answer: "Using `todos = todos.filter(...)`",
      explanation: "The example `DELETE` route shows this: `tasks = tasks.filter(t => t.id !== parseInt(req.params.id));`. This reassigns the `tasks` variable to a *new* array."
    }
  ],
  "request-validation": [
    {
      question: "In the 'Bouncer' analogy, what is 'Validation'?",
      options: [
        "Checking if you are on the list and 'over 21' (data is present and in the correct format)",
        "Cleaning your 'muddy' package (sanitization)",
        "The security guard himself",
        "The 'private office' (the route handler)"
      ],
      answer: "Checking if you are on the list and 'over 21' (data is present and in the correct format)",
      explanation: "The analogy states: 'This is **validation**: ensuring the data is *present* and in the *correct format*.'"
    },
    {
      question: "What is 'Sanitization'?",
      options: [
        "Rejecting a request if the password is too short",
        "Cleaning the data (e.g., trimming whitespace or escaping HTML) to prevent attacks",
        "Checking if a user is authenticated",
        "The process of hashing a password"
      ],
      answer: "Cleaning the data (e.g., trimming whitespace or escaping HTML) to prevent attacks",
      explanation: "The analogy defines 'Sanitization' as 'cleaning the data to prevent attacks' (like stripping out dangerous characters)."
    },
    {
      question: "What is an XSS (Cross-Site Scripting) attack?",
      options: [
        "A user tries to guess your password",
        "A user injects a malicious `<script>` tag into your database, which then runs in other users' browsers",
        "A user sends a malicious object to trick your database query",
        "A user overloads your server with too many requests"
      ],
      answer: "A user injects a malicious `<script>` tag into your database, which then runs in other users' browsers",
      explanation: "The Q&A defines XSS: 'It's when a user manages to inject a malicious script... If you render this on your page without sanitizing it... that script will run in the browser of every user who sees it...'"
    },
    {
      question: "What is the industry-standard library for handling validation in Express?",
      options: [
        "express-validator",
        "express.json()",
        "Joi",
        "Zod"
      ],
      answer: "express-validator",
      explanation: "The notes state: 'You should *not* do this manually with `if` statements. The industry-standard tool is **`express-validator`**.'"
    },
    {
      question: "In `express-validator`, how do you check the validation rules inside your route handler?",
      options: [
        "You don't, it's automatic",
        "You call `validationResult(req)` and check if it's empty",
        "You check `if (req.errors)`",
        "You wrap the handler in a `try...catch` block"
      ],
      answer: "You call `validationResult(req)` and check if it's empty",
      explanation: "The example shows this: '`const errors = validationResult(req);`' and '`if (!errors.isEmpty()) { ... }`'. This is how you check for errors."
    },
    {
      question: "In the example, what does the `.escape()` sanitization chain do?",
      options: [
        "It allows the user to 'escape' the validation",
        "It trims whitespace from the beginning and end",
        "It converts special HTML characters (like `<`) to prevent XSS",
        "It checks if the field is empty"
      ],
      answer: "It converts special HTML characters (like `<`) to prevent XSS",
      explanation: "The example code comment states: '`.escape(), // Escapes HTML chars to prevent XSS`'."
    }
  ],
  "api-documentation": [
    {
      question: "In the 'Instruction Manual' analogy, what is API documentation?",
      options: [
        "The API server itself",
        "The 'instruction manual' you give to other developers (like your frontend team)",
        "A workbench for testing the API",
        "A tool that auto-generates code"
      ],
      answer: "The 'instruction manual' you give to other developers (like your frontend team)",
      explanation: "The analogy states: 'API documentation is the \"instruction manual\" that you give to other developers... A good manual clearly explains every \"button\" (endpoint)...'"
    },
    {
      question: "What is the difference between Postman and Swagger, according to the Q&A?",
      options: [
        "Postman is for documenting, Swagger is for testing",
        "Postman is for testing, Swagger is for designing and documenting",
        "Postman is for frontend, Swagger is for backend",
        "There is no difference"
      ],
      answer: "Postman is for testing, Swagger is for designing and documenting",
      explanation: "The Q&A clarifies: 'In short: you use Postman to *test*, you use Swagger to *document*.'"
    },
    {
      question: "What is the 'OpenAPI' specification?",
      options: [
        "The 'rules' for defining a REST API; Swagger is the 'tool' that implements it",
        "The 'tool' for defining a REST API; Swagger is the 'specification'",
        "An alternative name for Postman",
        "A JavaScript library for building APIs"
      ],
      answer: "The 'rules' for defining a REST API; Swagger is the 'tool' that implements it",
      explanation: "The notes state: 'OpenAPI is the *specification* (the formal rules) for defining a REST API. Swagger is the suite of *tools* that implements this specification.'"
    },
    {
      question: "Which two libraries are commonly used to auto-generate Swagger UI docs from code comments?",
      options: [
        "Postman and Express",
        "swagger-jsdoc and swagger-ui-express",
        "express-validator and multer",
        "react-router and express"
      ],
      answer: "swagger-jsdoc and swagger-ui-express",
      explanation: "The notes list: '...a library like `swagger-jsdoc` and `swagger-ui-express` to auto-generate the documentation from comments...'"
    },
    {
      question: "According to the Q&A, why is API documentation the 'contract' for the frontend team?",
      options: [
        "It's a legal, binding document",
        "It tells them the URL, method, request body, and response structure",
        "It tells them what database to use",
        "It provides the React components they need"
      ],
      answer: "It tells them the URL, method, request body, and response structure",
      explanation: "The Q&A states: 'The frontend developer reads it to know: 1) What URL to call, 2) What method to use (GET/POST), 3) What data to *send*... and 4) What data to *expect back*...'"
    },
    {
      question: "In the example, how is the Swagger UI mounted to be visible in the browser?",
      options: [
        "app.get('/api-docs', ...)",
        "app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))",
        "app.listen('/api-docs', ...)",
        "You must open the `swagger.json` file in your browser"
      ],
      answer: "app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))",
      explanation: "The example code shows this exact line: '`app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));`'"
    }
  ],
  "file-uploads": [
    {
      question: "What encoding type must an HTML form use for file uploads?",
      options: [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
      ],
      answer: "multipart/form-data",
      explanation: "The notes and example HTML both state this: 'File uploads are sent using... `multipart/form-data`' and 'The form MUST have `enctype=\"multipart/form-data\"`'."
    },
    {
      question: "What is the standard middleware used to handle file uploads in Express?",
      options: [
        "express.json()",
        "express.static()",
        "multer",
        "express-validator"
      ],
      answer: "multer",
      explanation: "The notes state: '`multer` is the de-facto standard middleware for handling `multipart/form-data` in Express.'"
    },
    {
      question: "If you use `upload.single('profileImage')`, where is the file metadata available in your route handler?",
      options: [
        "req.body",
        "req.file",
        "req.files",
        "req.query"
      ],
      answer: "req.file",
      explanation: "The notes state: '`upload.single()` makes the file available at `req.file`.'"
    },
    {
      question: "If you use `upload.single('profileImage')`, where are the *text fields* (like `username`) available?",
      options: [
        "req.body",
        "req.file",
        "req.files",
        "req.query"
      ],
      answer: "req.body",
      explanation: "The notes state: 'Text fields in the form are still available at `req.body`.' Multer parses them for you."
    },
    {
      question: "Your `req.body` is empty on a file upload route. What are the two likely causes?",
      options: [
        "You used `multer` instead of `express.json()`",
        "You are using `express.json()` (which can't read `multipart/form-data`), or you forgot `enctype` on your form",
        "The file is too large",
        "The file is not an image"
      ],
      answer: "You are using `express.json()` (which can't read `multipart/form-data`), or you forgot `enctype` on your form",
      explanation: "The Q&A and notes identify these issues: `express.json()` cannot read `multipart/form-data`, and the HTML form *must* have the correct `enctype`."
    },
    {
      question: "What is the difference between `req.file.path` and `req.file.originalname`?",
      options: [
        "There is no difference",
        "`path` is the user's file name; `originalname` is the server path",
        "`path` is the new path on the server; `originalname` is the user's original file name",
        "`path` is for development; `originalname` is for production"
      ],
      answer: "`path` is the new path on the server; `originalname` is the user's original file name",
      explanation: "The Q&A lists this metadata: '`req.file.path`: The path to the saved file on your server.' and '`req.file.originalname`: The user's original name for the file.'"
    }
  ],
  "api-versioning": [
    {
      question: "In the 'Software Updates' analogy, why is API versioning (e.g., `/v1`, `/v2`) necessary?",
      options: [
        "To make your API faster",
        "To allow you to make 'breaking changes' in `/v2` without crashing old apps that still use `/v1`",
        "To support both JSON and XML",
        "To handle file uploads"
      ],
      answer: "To allow you to make 'breaking changes' in `/v2` without crashing old client apps that still use `/v1`",
      explanation: "The analogy explains this: 'Old apps keep using `v1` and don't break, while new apps can use `v2` to get the new `fullName` field.'"
    },
    {
      question: "Which of the following is a 'breaking change'?",
      options: [
        "Adding a new, *optional* field to a JSON response",
        "Renaming a required field (e.g., `name` to `fullName`)",
        "Adding a new API endpoint (e.g., `GET /stats`)",
        "Improving the speed of a database query"
      ],
      answer: "Renaming a required field (e.g., `name` to `fullName`)",
      explanation: "The notes list: 'Renaming a field (e.g., `name` to `fullName`)' as a breaking change. Adding a new *optional* field is explicitly mentioned as *not* breaking."
    },
    {
      question: "What is the most common and recommended strategy for versioning an API?",
      options: [
        "Using a custom header (e.g., `Accept: ...v2+json`)",
        "Using a query parameter (e.g., `/users?version=2`)",
        "Using URI Path Versioning (e.g., `/api/v2/users`)",
        "Releasing a new server on a different domain"
      ],
      answer: "Using URI Path Versioning (e.g., `/api/v2/users`)",
      explanation: "The notes state: 'The Most Common Versioning Strategy: URI Path Versioning. This is the simplest and most popular method... It's clear, explicit, and easy...'"
    },
    {
      question: "How do you implement URI versioning in Express?",
      options: [
        "Create separate `v1` and `v2` `express.Router()` files and mount them on different paths",
        "Use a `switch` statement inside a single `app.get()`",
        "Use a `version` property in `app.listen()`",
        "Express does not support versioning"
      ],
      answer: "Create separate `v1` and `v2` `express.Router()` files and mount them on different paths",
      explanation: "The notes and example show this: 'You implement this in Express using the `express.Router` pattern... `app.use('/api/v1/users', v1UserRoutes);` `app.use('/api/v2/users', v2UserRoutes);`'"
    },
    {
      question: "Which of these is *NOT* a breaking change?",
      options: [
        "Deleting a field from the response",
        "Adding a new *optional* field to the response",
        "Changing an `id` from a number to a string",
        "Adding a new *required* field to a POST request"
      ],
      answer: "Adding a new *optional* field to the response",
      explanation: "The Q&A states that adding an *optional* field is *not* a breaking change because existing clients will simply ignore it."
    },
    {
      question: "In the example, an app using `/api/v1/users` expects `{ id: 1, name: 'Alex' }`. What will it get from `/api/v2/users`?",
      options: [
        "The same data: `{ id: 1, name: 'Alex' }`",
        "An error",
        "The new data structure: `{ id: 1, fullName: 'Alex Smith' }`",
        "Nothing, the route won't exist"
      ],
      answer: "The new data structure: `{ id: 1, fullName: 'Alex Smith' }`",
      explanation: "The example `v2/userRoutes.mjs` shows the breaking change: `res.json({ id: 1, fullName: 'Alex Smith' });`"
    }
  ],
  "rest-api-mini-project": [
    {
      question: "What is the 'Golden Rule' of updating state in a React component, which is different from this project?",
      options: [
        "Mutate the array directly (e.g., `todos.push(...)`)",
        "Update state *immutably* (e.g., `setTodos([...todos, ...])`)",
        "Store all state in `localStorage`",
        "Use `let` instead of `const` for state"
      ],
      answer: "Update state *immutably* (e.g., `setTodos([...todos, ...])`)",
      explanation: "This question is a trick based on the Q&A. The server *can* mutate an in-memory array (`posts.push(...)`), but the Q&A explicitly references React's 'Golden Rule': 'Update State Immutably' (`setTodos([...todos, newTodo]);`)."
    },
    {
      question: "What is the purpose of the `handleValidationErrors` middleware in the example?",
      options: [
        "To validate the user's authentication token",
        "To keep the code DRY (Don't Repeat Yourself) by checking for validation errors",
        "To catch 500-level server errors",
        "To load the posts from the database"
      ],
      answer: "To keep the code DRY (Don't Repeat Yourself) by checking for validation errors",
      explanation: "The Q&A explains: 'It's a helper middleware to keep the code DRY... Instead of writing the `validationResult` logic in *both* the POST and PATCH routes, we put it in one place...'"
    },
    {
      question: "In the mini-project, why does all the data disappear when the server restarts?",
      options: [
        "Because the data is stored in a simple in-memory array (a 'fake' database)",
        "Because the `DELETE` route is broken",
        "Because `express.json()` is not working",
        "Because the `.env` file is missing"
      ],
      answer: "Because the data is stored in a simple in-memory array (a 'fake' database)",
      explanation: "The Q&A answers this directly: 'That's the next step! This in-memory `posts` array is a \"fake\" database.' It resets every time the server stops."
    },
    {
      question: "How is the `postRoutes.mjs` router 'mounted' in the main `server.mjs` file?",
      options: [
        "`import './routes/postRoutes.mjs'`",
        "`app.get('/api/v1/posts', postRoutes)`",
        "`app.use('/api/v1/posts', postRoutes)`",
        "`app.listen(postRoutes)`"
      ],
      answer: "`app.use('/api/v1/posts', postRoutes)`",
      explanation: "The `server.mjs` example shows this: `app.use('/api/v1/posts', postRoutes);`. This 'mounts' the router at that URL prefix."
    },
    {
      question: "In the `postRoutes.mjs` file, how is the `DELETE` operation implemented?",
      options: [
        "It uses `posts.pop()` to remove the last item",
        "It uses `posts.splice(index, 1)` to mutate the array",
        "It uses `posts = posts.filter(...)` to create a new array without the deleted item",
        "It uses `delete posts[id]`"
      ],
      answer: "It uses `posts = posts.filter(...)` to create a new array without the deleted item",
      explanation: "The `DELETE /:id` route handler shows: `posts = posts.filter(p => p.id !== parseInt(req.params.id));`"
    },
    {
      question: "Which of the 5 CRUD routes would you use to get a *single* post with ID 2?",
      options: [
        "POST /",
        "GET /",
        "GET /:id",
        "PATCH /:id"
      ],
      answer: "GET /:id",
      explanation: "The 'R (READ One)' route is defined as: `router.get('/:id', ...)`"
    }
  ]
};