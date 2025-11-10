export const Chapter1Problem = {
  "what-is-web-development-problem": [
    {
      title: "Identify the Three Pillars of Web Dev",
      problemDescription: "A website has a skeleton (HTML), paint (CSS), and a brain (JavaScript). You are given a simple 'index.html' file. Your task is to add a CSS file to make the <h1> red, and a JavaScript file to make a button show an alert when clicked.",
      setupSteps: [
        "Create a new folder for your project (e.g., 'pillar-project').",
        "Inside, create three files: `index.html`, `style.css`, and `script.js`.",
        "Copy the HTML from the solution into `index.html`."
      ],
      solutionSteps: [
        "In `index.html`, make sure your `<head>` correctly links the CSS file: `<link rel=\"stylesheet\" href=\"style.css\">`.",
        "In `index.html`, make sure your `<body>` correctly links the JS file at the bottom: `<script src=\"script.js\"></script>`.",
        "In `style.css`, add the selector `h1 { color: red; }`.",
        "In `script.js`, select the button and add a click event listener."
      ],
      solutionCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Pillars Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>This text should be red</h1>
  <button id="my-button">Click Me</button>
  <script src="script.js"></script>
</body>
</html>

/* style.css */
h1 {
  color: red;
}

/* script.js */
const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  alert('JavaScript is working!');
});
`
    },
    {
      title: "Full Stack Role Identification",
      problemDescription: "A client asks you to build a complete web application. They need a database to store user data, a server to handle logins, and a website for users to interact with. What *single* development role describes someone who can do all of this?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the notes for 'What is Web Development?' and the definitions of different developer roles."
      ],
      solutionSteps: [
        "The **Frontend** is the interactive website the user sees (the 'storefront').",
        "The **Backend** is the server and database that handles logic and data (the 'back office').",
        "The role that combines both frontend and backend development is **Full-Stack Developer**."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  - Frontend Developer: Builds the user interface (client-side).
  - Backend Developer: Builds the server, API, and database (server-side).
  - Full-Stack Developer: A developer who can do both.
  
  The correct answer is Full-Stack Developer.
*/
`
    }
  ],
  "client-server-architecture-problem": [
    {
      title: "Identify Client vs. Server",
      problemDescription: "You type `google.com` into your browser. Your browser sends a request over the internet to a computer, which finds the search results and sends them back to your browser to be displayed. \n\nIn this scenario, what is the 'Client' and what is the 'Server'?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the notes on Client-Server Architecture.",
        "Remember: The Client *requests* information, and the Server *provides* it."
      ],
      solutionSteps: [
        "The **Client** is the entity making the request. In this case, it is your web browser (e.g., Chrome, Firefox).",
        "The **Server** is the entity that receives the request and sends a response. In this case, it is the powerful computer owned by Google that hosts the search engine."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  - Client: Your web browser. 
    (It *requests* the 'google.com' page).
    
  - Server: The Google computer. 
    (It *serves* the search results page back to your browser).
*/
`
    },
    {
      title: "Trace the Request-Response Cycle",
      problemDescription: "A user wants to see their profile on a social media site. They click the 'Profile' button. Based on the notes, describe the 4 steps of the request-response cycle that happen.",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the notes on the Client-Server model, specifically the flow of information."
      ],
      solutionSteps: [
        "**Step 1 (Request):** The Client (browser) sends an HTTP Request (e.g., `GET /api/profile/123`) to the Server.",
        "**Step 2 (Process):** The Server receives the request. It finds the user's ID, looks up their data in the Database, and prepares the profile information.",
        "**Step 3 (Response):** The Server packages the profile data (usually as JSON) and sends it back in an HTTP Response.",
        "**Step 4 (Render):** The Client (browser) receives the JSON data and uses JavaScript to update the page and display the profile information."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  1. Request: Client sends 'GET /api/profile' to the Server.
  2. Process: Server gets the request, asks the Database for profile data.
  3. Response: Server gets data from the Database, sends it (as JSON) 
     back to the Client.
  4. Render: Client receives the JSON data and displays it as HTML/CSS.
*/
`
    }
  ],
  "frontend-vs-backend-problem": [
    {
      title: "Categorize Technologies",
      problemDescription: "You are given a list of technologies. Categorize them as either 'Frontend' or 'Backend': \n1. React \n2. Node.js \n3. CSS \n4. MongoDB \n5. Express.js \n6. HTML",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the notes on Frontend vs. Backend.",
        "Frontend = Runs in the user's browser (visuals, interactivity).",
        "Backend = Runs on the server (logic, database)."
      ],
      solutionSteps: [
        "**Frontend:** HTML (structure), CSS (style), React (interactivity).",
        "**Backend:** Node.js (server runtime), Express.js (server framework), MongoDB (database)."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  Frontend (Client-Side):
  - HTML
  - CSS
  - React
  
  Backend (Server-Side):
  - Node.js
  - Express.js
  - MongoDB
*/
`
    },
    {
      title: "Explain the Role of an API",
      problemDescription: "Your frontend (React) needs to get user data from your backend (Node.js/MongoDB). Why can't the React app just connect directly to the MongoDB database? What is the 'middle-man' it must use?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the notes on how Frontend and Backend communicate."
      ],
      solutionSteps: [
        "A frontend (client) **never** connects directly to a database. This would be a massive security risk, as it would expose your entire database (including all user data) to the public internet.",
        "The 'middle-man' is the **API (Application Programming Interface)**.",
        "The frontend makes a request to a secure API endpoint (e.g., `GET /api/users/me`).",
        "The backend (server) receives this request, verifies the user is authenticated, *then* it gets the data from the database and sends back *only* the data that user is allowed to see."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  1. Why not connect directly?
     It's a huge security risk. It would expose your 
     database, connection strings, and all user data.

  2. What is the middle-man?
     The API (Application Programming Interface).
     
  3. How does it work?
     Frontend (React) ---[HTTP Request]--> Backend API (Express) 
     ---[Database Query]--> Database (MongoDB)
*/
`
    }
  ],
  "intro-to-mern-stack-problem": [
    {
      title: "Identify MERN Components",
      problemDescription: "What do the letters in the 'MERN' stack stand for, and what is the primary role of each component?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the 'Intro to MERN Stack' notes."
      ],
      solutionSteps: [
        "**M = MongoDB:** A NoSQL (Document) database, used to store all the application data (e.g., user profiles, posts).",
        "**E = Express.js:** A backend server framework that runs on Node.js. It's used to build the API and handle HTTP requests.",
        "**R = React:** A frontend JavaScript library for building the user interface (what the user sees and interacts with in their browser).",
        "**N = Node.js:** The backend JavaScript runtime environment. It's the 'engine' that allows you to run Express.js on a server."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  M = MongoDB (Database)
  E = Express.js (Backend Framework / API)
  R = React (Frontend Library / UI)
  N = Node.js (Backend Runtime Environment)
*/
`
    },
    {
      title: "Write a Simple React Component",
      problemDescription: "Using the MERN stack means building your frontend with React. Write a simple, modern React component in a file named `App.jsx` that just displays the text 'Hello MERN Stack!' inside an `<h1>` tag.",
      setupSteps: [
        "Create a file named `App.jsx`.",
        "Open it in VS Code.",
        "Write a standard React functional component."
      ],
      solutionSteps: [
        "Import React (though not strictly needed in new versions, it's good practice).",
        "Define a new function `function App() { ... }`.",
        "Inside the function, `return` the JSX you want to display.",
        "The JSX should be `<h1>Hello MERN Stack!</h1>`.",
        "Export the component at the bottom with `export default App;`."
      ],
      solutionCode: `
import React from 'react';

function App() {
  return (
    <h1>Hello MERN Stack!</h1>
  );
}

export default App;
`
    }
  ],
  "dev-env-setup-problem": [
    {
      title: "Initialize a New Node.js Project",
      problemDescription: "You are starting a new backend project. What are the *first two* terminal commands you need to run to initialize the project and install the main MERN backend framework (Express)?",
      setupSteps: [
        "Open your terminal or command prompt.",
        "Create a new directory for your project: `mkdir my-backend`",
        "Move into that directory: `cd my-backend`",
        "Now, run the two commands from the solution."
      ],
      solutionSteps: [
        "The first command is `npm init -y`. This initializes a new Node.js project by creating the `package.json` file. The `-y` flag accepts all the defaults.",
        "The second command is `npm install express`. This downloads the Express.js framework from the NPM registry and adds it as a dependency in your `package.json` file."
      ],
      solutionCode: `
# 1. Create the package.json file
npm init -y

# 2. Install Express.js
npm install express
`
    },
    {
      title: "Explain `package.json` vs. `node_modules`",
      problemDescription: "You just ran `npm install express` and two things were created/updated: `package.json` and the `node_modules` folder. What is the difference between them, and which one *must* you add to your `.gitignore` file?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the 'Dev Environment Setup' notes."
      ],
      solutionSteps: [
        "**`package.json`:** This is a small *list* or 'manifest' file. It lists the dependencies your project *needs* (e.g., `\"express\": \"^4.18.2\"`). You **must** commit this file to Git.",
        "**`node_modules`:** This is a *giant* folder that contains the *actual code* for all your dependencies (Express and all *its* dependencies). It can be hundreds of megabytes.",
        "**The Fix:** You **MUST** add the `node_modules` folder to your `.gitignore` file. You *never* commit this folder. When a new developer clones your project, they just run `npm install`, which reads the `package.json` 'list' and re-downloads all the necessary packages."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  - package.json: A small file that lists *what* you need. 
    (COMMIT this file)
    
  - node_modules: A giant folder containing the *actual code*
    of the packages. (IGNORE this file)

  - Add this line to your .gitignore file:
    node_modules
*/
`
    }
  ],
  "code-editors-extensions-problem": [
    {
      title: "What is a Linter?",
      problemDescription: "You write the code `let myName = \"Aditya\"` but you never use the `myName` variable anywhere. You see a yellow squiggly line under it with a warning: '`myName` is assigned a value but never used.' \n\nWhat kind of tool is providing this warning?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the notes for 'Code Editors & Extensions'."
      ],
      solutionSteps: [
        "This tool is a **Linter** (specifically, **ESLint**).",
        "A linter's job is to analyze your code *as you type* to find potential bugs, code quality issues, and bad patterns (like unused variables).",
        "This is different from a *Formatter* (like Prettier), which only fixes code *style* (like tabs and spaces)."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  The tool is a **Linter**, such as **ESLint**.
  
  - A Linter finds *bugs* and *code quality* issues.
  - A Formatter fixes *code style*.
*/
`
    },
    {
      title: "What is a Formatter?",
      problemDescription: "You write a line of code with bad indentation: `function  myFunc( )   { ... }`. When you press 'Save', the code instantly auto-formats to: `function myFunc() { ... }`. \n\nWhat is this feature called, and what tool provides it?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Review the notes for 'Code Editors & Extensions'."
      ],
      solutionSteps: [
        "The feature is called **\"Format on Save\"**.",
        "The tool providing the formatting rules is a **Formatter**, such as **Prettier**.",
        "A formatter's *only* job is to enforce a consistent code *style* (spacing, indentation, etc.). It does *not* find bugs."
      ],
      solutionCode: `
/* This is a knowledge-based problem. */

/*
  The feature is **Format on Save**.
  The tool is a **Formatter**, such as **Prettier**.
  
  - A Formatter fixes *code style*.
  - A Linter finds *bugs*.
*/
`
    }
  ]
};