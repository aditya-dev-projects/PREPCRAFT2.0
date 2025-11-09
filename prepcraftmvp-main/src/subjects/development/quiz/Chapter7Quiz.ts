export const Chapter7Quiz = {
  "introduction-to-node": [
    {
      question: "What is Node.js?",
      options: [
        "A new programming language",
        "A JavaScript runtime environment that runs on the server",
        "A JavaScript framework for building UIs",
        "A database for storing JavaScript objects"
      ],
      answer: "A JavaScript runtime environment that runs on the server",
      explanation: "The notes state: 'Node.js is not a language; it is a JavaScript runtime environment... It allows developers to run JavaScript code on the server...'"
    },
    {
      question: "What is the 'core architectural advantage' of Node.js?",
      options: [
        "It uses multiple threads for every user",
        "It is event-driven and has non-blocking I/O",
        "It is ideal for CPU-intensive tasks",
        "It can only be used on Windows servers"
      ],
      answer: "It is event-driven and has non-blocking I/O",
      explanation: "The notes specify: 'Event-Driven, Non-Blocking I/O: This is the core architectural advantage. Node.js uses a single thread (the \"Event Loop\") to handle many connections concurrently.'"
    },
    {
      question: "How does Node.js handle expensive I/O operations (like database queries) without blocking the main thread?",
      options: [
        "It pauses the main thread until the task is done",
        "It offloads the task to the Libuv thread pool (C++)",
        "It requires the developer to write multi-threaded JavaScript",
        "It can't handle expensive operations"
      ],
      answer: "It offloads the task to the Libuv thread pool (C++)",
      explanation: "The Q&A answer clearly states: 'It offloads expensive I/O operations (like database queries) to the Libuv thread pool, allowing the main Event Loop to remain responsive...'"
    },
    {
      question: "What is the main difference between Node.js and Browser JavaScript?",
      options: [
        "Node.js has access to the DOM (`document`); Browser JS does not",
        "Browser JS has access to the File System (`fs`); Node.js does not",
        "Browser JS has access to the DOM (`document`); Node.js has access to the File System (`fs`)",
        "There is no difference"
      ],
      answer: "Browser JS has access to the DOM (`document`); Node.js has access to the File System (`fs`)",
      explanation: "The Q&A section explains: 'Browser JS... has access to... the DOM (document) and Window (window). Node.js... has access to server-specific APIs, like the File System (fs)...'"
    },
    {
      question: "What command do you run in your terminal to start a Node.js server file named `server.js`?",
      options: [
        "npm start server.js",
        "run server.js",
        "node server.js",
        "start server.js"
      ],
      answer: "node server.js",
      explanation: "The notes example says: 'Save this as `server.js` and run `node server.js` in your terminal.'"
    },
    {
      question: "Node.js is extremely efficient for I/O-heavy applications, but less ideal for what kind of tasks?",
      options: [
        "CPU-intensive tasks (like complex calculations)",
        "Serving HTML files",
        "Handling many users at once",
        "Building REST APIs"
      ],
      answer: "CPU-intensive tasks (like complex calculations)",
      explanation: "The notes mention this trade-off: 'This model is extremely efficient for I/O-heavy applications... but less ideal for CPU-intensive tasks (like complex calculations).'"
    }
  ],
  "node-core-modules": [
    {
      question: "In the 'Built-in Toolbox' analogy, what is the `fs` module?",
      options: [
        "The 'Telephone' tool (for servers)",
        "The 'GPS' tool (for paths)",
        "The 'File Cabinet' tool (for reading/writing files)",
        "The 'Address Parser' tool (for URLs)"
      ],
      answer: "The 'File Cabinet' tool (for reading/writing files)",
      explanation: "The analogy states: '`fs` Module: The \"File Cabinet\" tool. Lets you read, write, and delete files.'"
    },
    {
      question: "What is the difference between `fs.readFile` and `fs.readFileSync`?",
      options: [
        "`readFile` is for files; `readFileSync` is for directories",
        "`readFile` is asynchronous (non-blocking); `readFileSync` is synchronous (blocking)",
        "`readFile` is synchronous (blocking); `readFileSync` is asynchronous (non-blocking)",
        "There is no difference"
      ],
      answer: "`readFile` is asynchronous (non-blocking); `readFileSync` is synchronous (blocking)",
      explanation: "The Q&A explains: '`readFileSync` is synchronous (blocking). The entire server... *stops*... `readFile` is asynchronous (non-blocking)... You should *always* use the async version inside a server.'"
    },
    {
      question: "Why should you use `path.join(__dirname, 'file.txt')` instead of `__dirname + '/file.txt'`?",
      options: [
        "It's shorter to type",
        "It's faster",
        "It creates the file if it doesn't exist",
        "It's cross-platform (works on Windows `\\` and Mac/Linux `/`)"
      ],
      answer: "It's cross-platform (works on Windows `\\` and Mac/Linux `/`)",
      explanation: "The Q&A states: 'that code will *break* on Windows, which uses `\\` as a path separator. `path.join()` will correctly create the path for any OS.'"
    },
    {
      question: "What is the `__dirname` variable in Node.js?",
      options: [
        "The name of the current file",
        "The absolute path of the directory the *current file* is in",
        "The root directory of the project",
        "The path to the `node_modules` folder"
      ],
      answer: "The absolute path of the directory the *current file* is in",
      explanation: "The notes define `__dirname` as: 'a global Node.js variable that gives you the absolute path of the directory the *current file* is in.'"
    },
    {
      question: "In the `fs.readFile` example, why does 'This message logs FIRST...' appear before the file content?",
      options: [
        "It's a bug in the code",
        "Because `fs.readFile` is asynchronous, so the code continues to run while the file is being read",
        "Because `console.log` always runs before `fs.readFile`",
        "Because the file `welcome.txt` is empty"
      ],
      answer: "Because `fs.readFile` is asynchronous, so the code continues to run while the file is being read",
      explanation: "The example's comment states: 'Why? Because fs.readFile is asynchronous.' The main thread is not blocked and continues to the next `console.log` statement."
    },
    {
      question: "Which `fs` method is asynchronous and uses a callback?",
      options: [
        "fs.readFileSync()",
        "fs.readFile()",
        "fs.promises.readFile()",
        "fs.read()"
      ],
      answer: "fs.readFile()",
      explanation: "The notes list the three flavors. `fs.readFile(path, cb)` is the asynchronous version that uses a callback. `fs.promises.readFile()` is also asynchronous but returns a promise."
    }
  ],
  "npm-package-management": [
    {
      question: "In the 'Shopping List' analogy, what is the `package.json` file?",
      options: [
        "The 'delivery box' (`node_modules`)",
        "The 'package warehouse' (`npm`)",
        "The 'shopping list' (project manifest)",
        "The 'detailed invoice' (`package-lock.json`)"
      ],
      answer: "The 'shopping list' (project manifest)",
      explanation: "The analogy states: '`package.json` file: Your project's \"shopping list.\" It tells `npm` exactly what to buy.'"
    },
    {
      question: "What is the difference between `dependencies` and `devDependencies`?",
      options: [
        "`dependencies` are for production; `devDependencies` are for development (e.g., `nodemon`)",
        "`dependencies` are for development; `devDependencies` are for production",
        "`dependencies` are for React; `devDependencies` are for Node.js",
        "There is no difference"
      ],
      answer: "`dependencies` are for production; `devDependencies` are for development (e.g., `nodemon`)",
      explanation: "The Q&A explains: '`dependencies` (like `express`) are essential for the app to *run*. `devDependencies` (like `nodemon`) are only used for *developing* the app...'"
    },
    {
      question: "Why must you commit `package-lock.json` to Git?",
      options: [
        "You shouldn't, it should be in `.gitignore`",
        "It's a backup of your `package.json` file",
        "It's a list of scripts to run",
        "It guarantees 'deterministic builds' by locking the *exact* versions of all dependencies"
      ],
      answer: "It guarantees 'deterministic builds' by locking the *exact* versions of all dependencies",
      explanation: "The notes state: 'This guarantees **deterministic builds**, meaning every developer... gets the exact same code. You **must** commit this file to Git.'"
    },
    {
      question: "Which file *must* you add to your `.gitignore`?",
      options: [
        "package.json",
        "package-lock.json",
        "node_modules/",
        "server.js"
      ],
      answer: "node_modules/",
      explanation: "The notes state: '`node_modules/`: The folder where `npm` downloads... You **must** add this to your `.gitignore` file.'"
    },
    {
      question: "You've joined a new project and cloned it. What is the first `npm` command you run to install all dependencies?",
      options: [
        "npm init",
        "npm install",
        "npm start",
        "npm publish"
      ],
      answer: "npm install",
      explanation: "`npm install` reads the `package.json` and `package-lock.json` files and downloads all the required packages into the `node_modules` folder."
    },
    {
      question: "How do you install a package (e.g., `nodemon`) *only* for development?",
      options: [
        "npm install nodemon",
        "npm install nodemon --save-dev (or -D)",
        "npm install nodemon --global",
        "npm add nodemon"
      ],
      answer: "npm install nodemon --save-dev (or -D)",
      explanation: "The notes specify: 'Installed with `npm install nodemon --save-dev` (or `-D`)' to save it as a `devDependency`."
    }
  ],
  "creating-node-server": [
    {
      question: "In the 'Car' analogy, what is Express.js?",
      options: [
        "The raw steel and parts (the `http` module)",
        "The pre-built 'car chassis' (a framework)",
        "The driver (your code)",
        "The final destination (the API response)"
      ],
      answer: "The pre-built 'car chassis' (a framework)",
      explanation: "The analogy states: 'Express.js is a framework... It's like a pre-built \"car chassis.\" It gives you the frame, wheels, and engine block...'"
    },
    {
      question: "What is the *main feature* of Express.js?",
      options: [
        "Its ability to read files (`fs`)",
        "Its tool for routing (mapping URLs and methods to functions)",
        "Its built-in database",
        "Its V8 engine"
      ],
      answer: "Its tool for routing (mapping URLs and methods to functions)",
      explanation: "The notes state: 'Routing: This is its main feature. It lets you map HTTP methods (GET, POST...) and URL paths... to specific handler functions.'"
    },
    {
      question: "What is the difference between `res.send()` and `res.json()` in Express?",
      options: [
        "`res.send()` is for GET; `res.json()` is for POST",
        "`res.send()` is for text/HTML; `res.json()` is for JSON (auto-sets headers)",
        "`res.json()` is for text/HTML; `res.send()` is for JSON",
        "`res.send()` sends a 200 status; `res.json()` sends a 500 status"
      ],
      answer: "`res.send()` is for text/HTML; `res.json()` is for JSON (auto-sets headers)",
      explanation: "The notes define these: '`res.json()`: To send a JSON response (auto-sets headers).' and '`res.send()`: To send a plain text/HTML response.'"
    },
    {
      question: "What is 'middleware' in Express?",
      options: [
        "A function that runs *between* the request and the final handler (e.g., for authentication)",
        "Another name for a route handler",
        "A package for managing `node_modules`",
        "A tool for debugging"
      ],
      answer: "A function that runs *between* the request and the final handler (e.g., for authentication)",
      explanation: "The Q&A explains: 'Middleware is a function that runs *between* the request and the final route handler. It has access to the `req`, `res`, and... `next()`.'"
    },
    {
      question: "How would you define a route that handles a `GET` request to the path `/api/posts`?",
      options: [
        "app.get('/api/posts', (req, res) => { ... })",
        "app.post('/api/posts', (req, res) => { ... })",
        "app.listen('/api/posts', (req, res) => { ... })",
        "http.createServer('/api/posts', ...)"
      ],
      answer: "app.get('/api/posts', (req, res) => { ... })",
      explanation: "The example shows this syntax: `app.get('/', (req, res) => { ... })`. This maps a GET request on a specific path to a handler function."
    },
    {
      question: "Why is Express.js preferred over the built-in `http` module?",
      options: [
        "Express is faster",
        "Express is built by Google",
        "Express simplifies routing, middleware, and request/response objects",
        "Express is the only way to send JSON"
      ],
      answer: "Express simplifies routing, middleware, and request/response objects",
      explanation: "The Q&A states that `http` is low-level, and 'Express provides a robust router... a middleware system, and simple response methods... that handle all of that complexity for you.'"
    }
  ],
  "understanding-modules": [
    {
      question: "In the 'Private Office' analogy, what is `module.exports`?",
      options: [
        "The work you do in private",
        "A function you import from another file",
        "The 'outbox' on your desk where you put public items",
        "The name of your office"
      ],
      answer: "The 'outbox' on your desk where you put public items",
      explanation: "The analogy states: 'You have a special \"outbox\" on your desk called `module.exports`. Anything you put in this box becomes **public**.'"
    },
    {
      question: "What is the 'Classic' Node.js module system that uses `require()`?",
      options: [
        "ES Modules (ESM)",
        "CommonJS (CJS)",
        "Node Module System (NMS)",
        "React Modules"
      ],
      answer: "CommonJS (CJS)",
      explanation: "The notes define: 'CommonJS (CJS) - The \"Classic\" Way: This is the traditional Node.js system... You use the `require()` function to import modules.'"
    },
    {
      question: "What is the 'Modern' JavaScript module system that uses `import` and `export`?",
      options: [
        "ES Modules (ESM)",
        "CommonJS (CJS)",
        "Node Module System (NMS)",
        "Browser Modules"
      ],
      answer: "ES Modules (ESM)",
      explanation: "The notes define: 'ES Modules (ESM) - The \"Modern\" Way: This is the modern JavaScript standard... You use the `import` keyword... You use the `export` keyword.'"
    },
    {
      question: "You see the error 'Cannot use import statement outside a module'. What is the most common fix?",
      options: [
        "Change all `import` to `require`",
        "Add `'type': 'module'` to your `package.json` file",
        "Delete your `node_modules` folder",
        "Install `nodemon`"
      ],
      answer: "Add `'type': 'module'` to your `package.json` file",
      explanation: "The Q&A explains: 'This means you are trying to use `import`... in a file that Node.js is treating as CommonJS. To fix it... add the line `\"type\": \"module\"` to... your `package.json`.'"
    },
    {
      question: "What is the difference between `export default` and `export`?",
      options: [
        "There is no difference",
        "You can have many `export default` per file, but only one `export`",
        "You can only have *one* `export default` per file; you can have *many* named `export`s",
        "`export default` is for functions; `export` is for variables"
      ],
      answer: "You can only have *one* `export default` per file; you can have *many* named `export`s",
      explanation: "The notes state: '`export const myFunc = () => ...` (named export)' and '`export default myApp;` (default export - only one per file)'."
    },
    {
      question: "What is the difference between `module.exports` and `exports`?",
      options: [
        "They are the same and can always be used interchangeably",
        "`exports` is just a shorthand for `module.exports`, but `exports = ...` will not work",
        "`module.exports` is just a shorthand for `exports`",
        "`exports` is the new ESM syntax; `module.exports` is the old one"
      ],
      answer: "`exports` is just a shorthand for `module.exports`, but `exports = ...` will not work",
      explanation: "The Q&A states: '`exports` is just a *shorthand variable* that points to `module.exports`... you *cannot* re-assign it (e.g., `exports = myFunc` will not work).'"
    }
  ],
  "asynchronous-programming-node": [
    {
      question: "In the 'Restaurant' analogy, what is a 'Callback'?",
      options: [
        "The waiter who takes your order and *waits*",
        "The 'pager' (Promise) the kitchen gives you",
        "The waiter telling the chef to 'call him back' when the food is done",
        "The final dish"
      ],
      answer: "The waiter telling the chef to 'call him back' when the food is done",
      explanation: "The analogy states: '1. Callbacks: The waiter takes your order, gives it to the kitchen, and *tells the chef to \"call him back\" when it's done*.'"
    },
    {
      question: "What is 'Callback Hell'?",
      options: [
        "A callback that throws an error",
        "Deeply nested callbacks (the 'Pyramid of Doom') that are hard to read",
        "A function that calls itself",
        "A callback that never returns"
      ],
      answer: "Deeply nested callbacks (the 'Pyramid of Doom') that are hard to read",
      explanation: "The Q&A defines it: '\"Callback Hell\" (or the \"Pyramid of Doom\") is when you deeply nest asynchronous callbacks, making the code unreadable and hard to debug.'"
    },
    {
      question: "What is the 'best way' to write asynchronous code, according to the notes?",
      options: [
        "Callbacks",
        "Promises with `.then()`",
        "Async/Await",
        "Synchronous functions"
      ],
      answer: "Async/Await",
      explanation: "The notes label Async/Await as 'The Best Way' and 'syntactic sugar' that makes promise-based code 'clean and synchronous-looking.'"
    },
    {
      question: "What does the `await` keyword do?",
      options: [
        "It makes a function return a Promise",
        "It *pauses* an `async` function until a Promise settles",
        "It handles errors",
        "It defines a callback function"
      ],
      answer: "It *pauses* an `async` function until a Promise settles",
      explanation: "The notes state: '`await`: Keyword that *pauses* the `async` function's execution *until* a Promise is settled. It can only be used inside an `async` function.'"
    },
    {
      question: "What is the modern, promise-based way to import the `fs` module?",
      options: [
        "const fs = require('fs');",
        "import fs from 'fs';",
        "const fs = require('fs').promises;",
        "const fs = require('fs-promises');"
      ],
      answer: "const fs = require('fs').promises;",
      explanation: "The example code for Promises shows: `const fs = require('fs').promises; // Note: .promises`. This accesses the built-in promise-based version of the module."
    },
    {
      question: "How do you handle errors (rejected promises) when using `async/await`?",
      options: [
        "With a `.catch()` block",
        "With a `try...catch` block",
        "With an `if (err)` statement",
        "Errors are handled automatically"
      ],
      answer: "With a `try...catch` block",
      explanation: "The notes state: '`try...catch`: The standard way to handle errors (rejected promises) when using `async/await`.' The example code also demonstrates this."
    }
  ],
  "file-system-operations": [
    {
      question: "In the 'File Cabinet' analogy, what is `fs.readFileSync` (synchronous)?",
      options: [
        "The 'Stop everything... find the file... and only then continue' (blocking) method",
        "The 'Send an intern... continue your work' (non-blocking) method",
        "A tool to create a new file cabinet",
        "A tool to shred a file"
      ],
      answer: "The 'Stop everything... find the file... and only then continue' (blocking) method",
      explanation: "The analogy defines the synchronous method as: '\"Stop *everything*... find the file... This is <strong>blocking</strong>...\"'"
    },
    {
      question: "When is the *only* acceptable time to use a synchronous (blocking) method like `fs.readFileSync`?",
      options: [
        "Inside a `GET` request handler",
        "During the *initial startup* of your server, before it starts listening",
        "Never, under any circumstances",
        "Whenever you are reading a small file"
      ],
      answer: "During the *initial startup* of your server, before it starts listening",
      explanation: "The Q&A states: 'The *only* acceptable time is during the **initial startup** of your server, *before* it starts listening for requests. For example, you might synchronously load a `config.json` file...'"
    },
    {
      question: "What is the modern, Promise-based way to read a file?",
      options: [
        "fs.readFile(path, cb)",
        "fs.readFileSync(path)",
        "fs.promises.readFile(path)",
        "new Promise(fs.readFile(path))"
      ],
      answer: "fs.promises.readFile(path)",
      explanation: "The notes list the three forms, with 'Promise-based (Modern)' being `fs.promises.readFile(path)`."
    },
    {
      question: "Which `fs.promises` method is used to *delete* a file?",
      options: [
        "fs.promises.delete(path)",
        "fs.promises.rm(path)",
        "fs.promises.unlink(path)",
        "fs.promises.remove(path)"
      ],
      answer: "fs.promises.unlink(path)",
      explanation: "The notes list `fs.promises.unlink(path)` as the method for deleting a file."
    },
    {
      question: "Which `fs.promises` method is used to write data to a file, overwriting it if it exists?",
      options: [
        "fs.promises.writeFile(path, data)",
        "fs.promises.appendFile(path, data)",
        "fs.promises.createFile(path, data)",
        "fs.promises.overwriteFile(path, data)"
      ],
      answer: "fs.promises.writeFile(path, data)",
      explanation: "The notes list: '`fs.promises.writeFile(path, data)`: Writes data to a file (overwrites if it exists).'"
    },
    {
      question: "How would you read all the file names from a directory?",
      options: [
        "fs.promises.readFile('./my-dir')",
        "fs.promises.readdir('./my-dir')",
        "fs.promises.list('./my-dir')",
        "fs.promises.getDir('./my-dir')"
      ],
      answer: "fs.promises.readdir('./my-dir')",
      explanation: "The notes list: '`fs.promises.readdir(path)`: Reads a directory and returns an array of file names.' The QnA also shows this in an example."
    }
  ],
  "environment-variables": [
    {
      question: "In the 'Secret Post-it Note' analogy, what is the `.env` file?",
      options: [
        "The public code you commit to GitHub",
        "The 'placeholder' in your code (e.g., `process.env.DB_PASSWORD`)",
        "The local 'Post-it Note' file used only in development",
        "The production server"
      ],
      answer: "The local 'Post-it Note' file used only in development",
      explanation: "The analogy states: 'you use the `dotenv` package. It reads your secrets from a local `.env` file and provides them to your app...'"
    },
    {
      question: "What is the *most critical* security rule regarding the `.env` file?",
      options: [
        "You MUST add it to your `.gitignore` file",
        "You MUST commit it to GitHub",
        "You must name it `.secrets`",
        "You must encrypt it with a password"
      ],
      answer: "You MUST add it to your `.gitignore` file",
      explanation: "The notes state this is '(CRITICAL)': 'You **MUST** add your `.env` file to your `.gitignore` file. Committing this file to GitHub is a critical security vulnerability.'"
    },
    {
      question: "How does your Node.js code access the value of an environment variable named `API_KEY`?",
      options: [
        "env.API_KEY",
        "dotenv.API_KEY",
        "process.env.API_KEY",
        "system.API_KEY"
      ],
      answer: "process.env.API_KEY",
      explanation: "The notes state: 'Node.js automatically makes all environment variables available on the global `process.env` object.'"
    },
    {
      question: "What is the purpose of the `dotenv` package?",
      options: [
        "To encrypt your secrets in production",
        "To create the `.env` file for you",
        "To load variables from a `.env` file into `process.env` during development",
        "To provide a production server"
      ],
      answer: "To load variables from a `.env` file into `process.env` during development",
      explanation: "The notes define `dotenv` as: 'A development tool that loads environment variables from a `.env` file into `process.env` at runtime.'"
    },
    {
      question: "If `.env` is ignored by Git, how do new developers know what variables are needed?",
      options: [
        "They have to guess",
        "You email them the `.env` file",
        "You create a `.env.example` file with placeholder values and commit that",
        "You commit the `.env` file just once"
      ],
      answer: "You create a `.env.example` file with placeholder values and commit that",
      explanation: "The Q&A section explains this: 'You create a file called `.env.example` that *is* committed to Git. This file has all the *keys* but with placeholder/empty values... A new developer just copies this file...'"
    },
    {
      question: "How do you provide secrets to your app in a *production* environment (like Vercel or Heroku)?",
      options: [
        "You FTP the `.env` file to the server",
        "You use the 'config vars' or 'secrets' dashboard in your hosting platform's UI",
        "You email the `.env` file to the support team",
        "You hard-code them into `server.js` just before deploying"
      ],
      answer: "You use the 'config vars' or 'secrets' dashboard in your hosting platform's UI",
      explanation: "The Q&A states: 'You do *not* use a `.env` file in production. Instead, you use the \"config vars\" or \"secrets\" dashboard provided by your hosting platform...'"
    }
  ]
};