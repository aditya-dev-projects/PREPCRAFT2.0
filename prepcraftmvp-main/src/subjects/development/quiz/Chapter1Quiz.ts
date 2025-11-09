export const Chapter1Quiz = {
  "what-is-web-development": [
    {
      question: "Which trio of technologies forms the foundational \"Three Pillars\" of all modern websites?",
      options: [
        "HTML, CSS, React",
        "HTML, CSS, JavaScript",
        "Node.js, React, MongoDB",
        "HTTP, SQL, JavaScript"
      ],
      answer: "HTML, CSS, JavaScript",
      explanation: "HTML provides the core structure (skeleton), CSS provides the style and appearance (skin), and JavaScript provides the interactivity and dynamic functionality (brain)."
    },
    {
      question: "A developer is building the \"engine\" of a website, managing user logins and the database. What is this type of development called?",
      options: [
        "Frontend Development",
        "Full-Stack Development",
        "Backend Development",
        "UI/UX Design"
      ],
      answer: "Backend Development",
      explanation: "Backend (or \"server-side\") development involves all the hidden logic, data, and security that powers the application. Frontend development focuses on the visual parts in the user's browser."
    },
    {
      question: "What is the primary role of CSS in web development?",
      options: [
        "To define the structure and content of the page.",
        "To handle user clicks and form submissions.",
        "To define the style, layout, and appearance of the page.",
        "To connect to the server and fetch data."
      ],
      answer: "To define the style, layout, and appearance of the page.",
      explanation: "CSS (Cascading Style Sheets) is responsible for all visual styling. HTML is for structure, and JavaScript is for interactivity and fetching data."
    },
    {
      question: "In the process of loading a website, what is the role of the DNS (Domain Name System)?",
      options: [
        "To assemble the HTML, CSS, and JS files.",
        "To store the website's database and user files.",
        "To act as the \"phone book\" of the internet, translating a domain name (like google.com) into an IP address.",
        "To execute JavaScript code and make the page interactive."
      ],
      answer: "To act as the \"phone book\" of the internet, translating a domain name (like google.com) into an IP address.",
      explanation: "The browser (client) first needs to find the server's address. DNS is the system that looks up the human-readable domain name and finds its corresponding IP address, which is the server's actual address."
    },
    {
      question: "A developer is described as being able to build a complete application, from the server logic and database to the user interface. What is this role called?",
      options: [
        "A DevOps Engineer",
        "A Frontend Developer",
        "A Backend Developer",
        "A Full-Stack Developer"
      ],
      answer: "A Full-Stack Developer",
      explanation: "A Full-Stack Developer is a generalist who is proficient in both frontend (client-side) and backend (server-side) technologies, allowing them to build a complete application from end to end."
    },
    {
      question: "Why is a database (like MySQL or MongoDB) considered part of the \"backend\" and not the \"frontend\"?",
      options: [
        "Because databases are only written in SQL, not JavaScript.",
        "Because the database is a secure, server-side resource that should never be directly exposed to the client's browser.",
        "Because database files are stored in the 'public/' folder.",
        "Because databases are only used for styling, which is a backend task."
      ],
      answer: "Because the database is a secure, server-side resource that should never be directly exposed to the client's browser.",
      explanation: "The database contains all the application's sensitive data. It must be protected behind the backend server. The client (frontend) never talks to the database; it talks to the API (backend), which *then* talks to the database on its behalf."
    }
  ],
  "client-server-architecture": [
    {
      question: "In the client-server model, which component is typically responsible for initiating requests?",
      options: [
        "The Server",
        "The Client",
        "The Database",
        "The API"
      ],
      answer: "The Client",
      explanation: "The client (e.g., your web browser) is the \"asker.\" It initiates requests for data or services. The server is the \"provider\" that passively waits for and responds to those requests."
    },
    {
      question: "What is the primary protocol used for communication between a web client and server?",
      options: [
        "FTP (File Transfer Protocol)",
        "SMTP (Simple Mail Transfer Protocol)",
        "HTTP (Hypertext Transfer Protocol)",
        "DNS (Domain Name System)"
      ],
      answer: "HTTP (Hypertext Transfer Protocol)",
      explanation: "HTTP is the foundational protocol of the web. It defines the rules for the request-response cycle that clients and servers use to exchange information."
    },
    {
      question: "What is the role of an API in the client-server model?",
      options: [
        "It is the database used to store all the data.",
        "It is the client-side user interface, built in React.",
        "It is the set of rules, or \"contract,\" that defines how the client and server can communicate.",
        "It is the physical hardware that the server runs on."
      ],
      answer: "It is the set of rules, or \"contract,\" that defines how the client and server can communicate.",
      explanation: "An API (Application Programming Interface) is the \"waiter\" in the restaurant analogy. It provides a clear \"menu\" (endpoints) that the client can use to make specific requests, and it defines the structure of the response the server will send back."
    },
    {
      question: "What does it mean for a server to be \"stateless\"?",
      options: [
        "The server cannot store any data in a database.",
        "The server does not store any client session data between requests.",
        "The server can only send static HTML, not dynamic data.",
        "The server must be written in Node.js."
      ],
      answer: "The server does not store any client session data between requests.",
      explanation: "A stateless server treats every request as brand new. It does not remember who you are from a previous request. This is why you must send an authentication token *with every* request to prove who you are."
    },
    {
      question: "Which of these is a key benefit of the client-server architecture?",
      options: [
        "Centralization: All data and logic are securely managed on the server.",
        "All code runs on the client, which makes it faster.",
        "The client must be on the same network as the server.",
        "It removes the need for an internet connection."
      ],
      answer: "Centralization: All data and logic are securely managed on the server.",
      explanation: "The separation of concerns is a major benefit. It allows all data and business logic to be centralized, secured, and managed on the server, while the client just focuses on the user interface."
    },
    {
      question: "Why is \"statelessness\" a significant advantage for scalability?",
      options: [
        "Because it reduces the amount of data sent in each request.",
        "Because any server in a cluster can handle any request, as no server holds unique session data.",
        "Because it forces the database to be faster.",
        "Because it allows the client to store its own state."
      ],
      answer: "Because any server in a cluster can handle any request, as no server holds unique session data.",
      explanation: "In a stateful model, a user is \"stuck\" to the server that has their session. If that server is overloaded, they have a slow experience. In a stateless model, any request can be routed to *any* available server, making it easy to scale horizontally by simply adding more servers."
    }
  ],
  "frontend-vs-backend": [
    {
      question: "Which technology is considered a frontend library?",
      options: [
        "Node.js",
        "Express.js",
        "React",
        "MongoDB"
      ],
      answer: "React",
      explanation: "React is a JavaScript library specifically for building user interfaces (the frontend) that run in the user's browser. Node.js, Express.js, and MongoDB are all backend technologies."
    },
    {
      question: "A developer is writing code in Python with the Django framework to manage a database. What role are they performing?",
      options: [
        "Frontend Developer",
        "Backend Developer",
        "Full-Stack Developer",
        "UI/UX Designer"
      ],
      answer: "Backend Developer",
      explanation: "Python and Django are server-side technologies used to build the backend logic and manage the database. This is a classic backend developer role."
    },
    {
      question: "What is the primary responsibility of a frontend developer?",
      options: [
        "To manage server security and database backups.",
        "To write the business logic for user authentication.",
        "To create the server-side API.",
        "To translate a visual design into interactive HTML, CSS, and JavaScript."
      ],
      answer: "To translate a visual design into interactive HTML, CSS, and JavaScript.",
      explanation: "The frontend developer's main concern is the User Interface (UI) and User Experience (UX)—everything the user sees and interacts with in their browser."
    },
    {
      question: "In the \"MERN\" stack, which component is responsible for handling HTTP requests and routing on the server?",
      options: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js"
      ],
      answer: "Express.js",
      explanation: "Node.js is the *runtime* (the engine). Express.js is the *framework* that runs on Node.js and provides the tools for routing, middleware, and handling HTTP requests."
    },
    {
      question: "A developer makes the statement: \"JavaScript is a frontend language.\" Why is this statement not entirely correct?",
      options: [
        "Because JavaScript can only be used to style pages, not for logic.",
        "Because JavaScript is a backend language and cannot run in the browser.",
        "Because JavaScript is a language, and with a runtime like Node.js, it can be used on the backend as well.",
        "Because JavaScript has been replaced by TypeScript."
      ],
      answer: "Because JavaScript is a language, and with a runtime like Node.js, it can be used on the backend as well.",
      explanation: "JavaScript *is* the language of the frontend (the browser). However, the Node.js runtime allows JavaScript to be used as a powerful backend language, making it a full-stack language."
    },
    {
      question: "How does a frontend application (like React) typically communicate with a backend application (like Node.js)?",
      options: [
        "By directly querying the backend's database.",
        "By making HTTP requests (e.g., `fetch`) to the backend's API endpoints.",
        "By importing the backend files directly into the frontend code.",
        "By using CSS to style the backend data."
      ],
      answer: "By making HTTP requests (e.g., `fetch`) to the backend's API endpoints.",
      explanation: "The frontend and backend are separate applications. The backend exposes an API (a set of URLs). The frontend (client) makes HTTP requests to those URLs, and the backend responds with data (usually as JSON)."
    }
  ],
  "intro-to-mern-stack": [
    {
      question: "In the MERN stack, what is the role of Node.js?",
      options: [
        "The frontend library for building the UI.",
        "The database for storing data.",
        "The backend runtime environment that executes server-side JavaScript.",
        "The backend framework for handling routes."
      ],
      answer: "The backend runtime environment that executes server-side JavaScript.",
      explanation: "Node.js (N) is the backend runtime that runs the server. Express.js (E) is the framework, React (R) is the frontend library, and MongoDB (M) is the database."
    },
    {
      question: "What does the \"M\" in MERN stand for, and what kind of database is it?",
      options: [
        "MySQL, a relational database.",
        "Middleware, a server concept.",
        "MongoDB, a NoSQL document database.",
        "MariaDB, a relational database."
      ],
      answer: "MongoDB, a NoSQL document database.",
      explanation: "The \"M\" in MERN stands for MongoDB. It is a NoSQL (non-relational) database that stores data in flexible, JSON-like documents called BSON."
    },
    {
      question: "What is the primary advantage of using the MERN stack?",
      options: [
        "It is the only stack that is fully secure.",
        "It allows you to use a single language (JavaScript/TypeScript) for the entire application.",
        "It does not require a server and runs entirely in the browser.",
        "It is the oldest and most stable web stack."
      ],
      answer: "It allows you to use a single language (JavaScript/TypeScript) for the entire application.",
      explanation: "The \"JavaScript Everywhere\" philosophy is MERN's main draw. Developers can use one language for the client (React), server (Node/Express), and even for database interactions (MongoDB)."
    },
    {
      question: "Which component of the MERN stack is responsible for handling server-side routing (e.g., `/api/users`)?",
      options: [
        "React",
        "MongoDB",
        "Node.js",
        "Express.js"
      ],
      answer: "Express.js",
      explanation: "Express.js (E) is the backend *framework*. Its primary job is to provide tools for routing and middleware on top of the Node.js runtime."
    },
    {
      question: "A developer wants to build a MERN stack app but use a different frontend library, like Vue.js. What would this stack be called?",
      options: [
        "MERN",
        "MEAN",
        "MEVN",
        "PERN"
      ],
      answer: "MEVN",
      explanation: "The acronyms describe the stack. Swapping React (R) for Vue.js (V) changes the stack to MEVN (MongoDB, Express.js, Vue.js, Node.js). MEAN uses Angular."
    },
    {
      question: "How does data flow in a typical MERN stack application?",
      options: [
        "React -> Node.js -> Express.js -> MongoDB",
        "React -> Express.js -> Node.js -> MongoDB",
        "React (Client) -> Express/Node (Server) -> MongoDB (Database)",
        "MongoDB (Database) -> React (Client) -> Node.js (Server)"
      ],
      answer: "React (Client) -> Express/Node (Server) -> MongoDB (Database)",
      explanation: "The flow is: 1) The client (React) sends an HTTP request. 2) The server (Express.js running on Node.js) receives it. 3) The server logic queries the database (MongoDB). 4) The data flows back in the reverse order."
    }
  ],
  "dev-env-setup": [
    {
      question: "What is the name of the command-line tool used to install and manage third-party libraries (packages) in a Node.js project?",
      options: [
        "Git",
        "npm",
        "VS Code",
        "Node.js"
      ],
      answer: "npm",
      explanation: "`npm` stands for Node Package Manager. It is the tool used to install dependencies. `Git` is for version control, `Node.js` is the runtime, and `VS Code` is the editor."
    },
    {
      question: "What is the purpose of `Git` in a developer's workflow?",
      options: [
        "To run JavaScript code on a server.",
        "To track changes to code, save versions, and collaborate with others.",
        "To automatically format code and check for bugs.",
        "To download and install libraries like React."
      ],
      answer: "To track changes to code, save versions, and collaborate with others.",
      explanation: "Git is a Version Control System (VCS). Its entire purpose is to manage the history of a project and allow multiple people to work on it at once."
    },
    {
      question: "What is the difference between `Git` and `GitHub`?",
      options: [
        "There is no difference; they are the same tool.",
        "Git is the code editor, and GitHub is the version control system.",
        "Git is the local software that tracks changes; GitHub is the cloud-based service that hosts your repositories.",
        "Git is for frontend, and GitHub is for backend."
      ],
      answer: "Git is the local software that tracks changes; GitHub is the cloud-based service that hosts your repositories.",
      explanation: "Git is the *tool* you install and run on your machine (e.g., `git commit`). GitHub is the *website* (a service) where you push your Git-managed code to back it up and share it."
    },
    {
      question: "What is the `npm init -y` command used for?",
      options: [
        "To install all project dependencies.",
        "To create a new `package.json` file with all default values.",
        "To run the project in development mode.",
        "To upload the project to GitHub."
      ],
      answer: "To create a new `package.json` file with all default values.",
      explanation: "`npm init` starts the process of creating a `package.json` file. The `-y` flag (for \"yes\") automatically accepts all the default prompts, creating the file instantly."
    },
    {
      question: "A developer needs to run a local web server, build a React project, and install packages. What *one* tool is essential for all of these tasks?",
      options: [
        "Node.js",
        "Git",
        "A database",
        "A linter"
      ],
      answer: "Node.js",
      explanation: "Even in a *frontend* project, Node.js is required. This is because `npm` (which installs packages) and all the build tools (like Webpack, Vite, and the dev server) are built *on* Node.js. It is the runtime for all modern web development tooling."
    },
    {
      question: "You've joined a new project and cloned it from GitHub. The project has a `package.json` file but no `node_modules` folder. What is the *first* command you should run?",
      options: [
        "`npm start`",
        "`npm install`",
        "`npm init`",
        "`git push`"
      ],
      answer: "`npm install`",
      explanation: "The `node_modules` folder is *never* committed to Git. The `package.json` file is just the *list* of dependencies. `npm install` (or `npm i`) reads that list and downloads all the required packages into a new `node_modules` folder."
    }
  ],
  "code-editors-extensions": [
    {
      question: "What is the primary purpose of a \"linter\" like ESLint?",
      options: [
        "To track changes to your code over time.",
        "To install third-party packages.",
        "To analyze code as you type to find bugs and enforce coding standards.",
        "To re-format your code's indentation and spacing."
      ],
      answer: "To analyze code as you type to find bugs and enforce coding standards.",
      explanation: "A linter (ESLint) is a code-quality tool. It finds potential *bugs*, like unused variables, or bad patterns. A formatter (Prettier) only handles *style*."
    },
    {
      question: "What is the primary purpose of a \"formatter\" like Prettier?",
      options: [
        "To analyze code to find bugs and security issues.",
        "To automatically re-format your code to a consistent style (indentation, spacing).",
        "To provide code-completion and suggestions (IntelliSense).",
        "To run your JavaScript code."
      ],
      answer: "To automatically re-format your code to a consistent style (indentation, spacing).",
      explanation: "Prettier is an \"opinionated code formatter.\" Its *only* job is to enforce a consistent *style*, making code more readable. It does not find bugs."
    },
    {
      question: "A developer writes messy code, but when they press \"Save,\" the entire file instantly becomes clean and well-indented. What is this feature called?",
      options: [
        "Git Commit",
        "IntelliSense",
        "Format on Save",
        "Debugging"
      ],
      answer: "Format on Save",
      explanation: "This is a setting in VS Code (`editor.formatOnSave`) that, when combined with a formatter like Prettier, automatically formats your code every time you save the file."
    },
    {
      question: "What is the term for the VS Code feature that provides smart code completion, suggestions, and parameter info as you type?",
      options: [
        "IntelliSense",
        "ESLint",
        "The Terminal",
        "The Debugger"
      ],
      answer: "IntelliSense",
      explanation: "IntelliSense is the built-in VS Code feature that powers its smart autocompletion, helping you write code faster and with fewer typos."
    },
    {
      question: "A developer sees a red-line warning under a variable `myVar` with the message \"`myVar` is assigned a value but never used.\" What tool is responsible for this warning?",
      options: [
        "The Formatter (Prettier)",
        "The Linter (ESLint)",
        "The Terminal (CLI)",
        "The Code Editor (VS Code)"
      ],
      answer: "The Linter (ESLint)",
      explanation: "This is a code *quality* or *potential bug* issue, not a *style* issue. The Linter (ESLint) is responsible for analyzing the code's logic to find such problems, while the code editor (VS Code) is just the platform that *displays* the linter's warning."
    },
    {
      question: "Why is it considered a best practice to use both ESLint (Linter) and Prettier (Formatter) together?",
      options: [
        "It is not; you should only use one.",
        "Because ESLint can install packages and Prettier can run them.",
        "Because they solve two different problems: ESLint finds *bugs*, while Prettier fixes *style*.",
        "Because Prettier finds bugs, and ESLint fixes style."
      ],
      answer: "Because they solve two different problems: ESLint finds *bugs*, while Prettier fixes *style*.",
      explanation: "A professional environment needs both. ESLint ensures code *correctness* (no bugs, good patterns), while Prettier ensures code *consistency* (all code looks the same). They work together to produce high-quality, maintainable code."
    }
  ],
  "terminal-basics": [
    {
      question: "Which terminal command is used to list all files and folders in the current directory?",
      options: [
        "`cd`",
        "`ls` (or `dir` on Windows)",
        "`mkdir`",
        "`touch`"
      ],
      answer: "`ls` (or `dir` on Windows)",
      explanation: "`ls` stands for \"list.\" `cd` changes directory, `mkdir` makes a directory, and `touch` creates a file."
    },
    {
      question: "Which terminal command is used to create a new, empty file named `index.html`?",
      options: [
        "`mkdir index.html`",
        "`cd index.html`",
        "`new index.html`",
        "`touch index.html`"
      ],
      answer: "`touch index.html`",
      explanation: "`touch` is the command to create a new, empty file. `mkdir` is used to create a new directory (folder)."
    },
    {
      question: "You are currently in the directory `/users/me/projects`. What command moves you to the `/users/me` directory (one level up)?",
      options: [
        "`cd .`",
        "`cd /`",
        "`cd ~`",
        "`cd ..`"
      ],
      answer: "`cd ..`",
      explanation: "In the terminal, `.` represents the current directory, while `..` represents the parent directory. `cd ..` is the command to move up one level."
    },
    {
      question: "What is the purpose of the `pwd` command?",
      options: [
        "To change the directory.",
        "To list files and folders.",
        "To create a new folder.",
        "To print the full path of the current working directory."
      ],
      answer: "To print the full path of the current working directory.",
      explanation: "`pwd` stands for \"Print Working Directory.\" It tells you *where you are* in the file system by printing the full, absolute path."
    },
    {
      question: "What is the \"Tab Completion\" feature in a terminal?",
      options: [
        "A shortcut to open a new tab in the terminal.",
        "A command to create a table.",
        "A feature where pressing the `Tab` key auto-completes the file or directory name you are typing.",
        "A command to format your code."
      ],
      answer: "A feature where pressing the `Tab` key auto-completes the file or directory name you are typing.",
      explanation: "Tab completion is the most important terminal shortcut. Typing `cd my-p` and pressing `Tab` will auto-complete it to `cd my-project/`, saving time and preventing typos."
    },
    {
      question: "What is the `PATH` environment variable and why is it important?",
      options: [
        "It is a file that stores your project's code.",
        "It is a list of directories that the terminal searches to find executable commands (like `node`, `git`, `npm`).",
        "It is a command to show the path to a specific file.",
        "It is a Git command to show the path of a repository."
      ],
      answer: "It is a list of directories that the terminal searches to find executable commands (like `node`, `git`, `npm`).",
      explanation: "The `PATH` is what allows you to type `node` from *any* folder. When you run a command, the terminal searches all directories listed in your `PATH` to find the executable. This is why installing tools like Git and Node.js adds them to your `PATH`."
    }
  ]
};