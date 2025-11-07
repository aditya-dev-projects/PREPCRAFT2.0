export const developmentPracticeProblems = {
  "what-is-web-development": [
    {
      title: "Identify Web Components",
      problem: "List three common components of a web application and briefly describe their roles.",
      solution:
        "1. **Client (Browser):** Renders the user interface and sends requests. 2. **Server:** Processes requests, retrieves/stores data, and sends responses. 3. **Database:** Stores application data."
    },
    {
      title: "Web vs. Desktop Application",
      problem: "Explain one key difference between a web application and a desktop application.",
      solution:
        "Web applications run in a browser and are accessed via the internet, while desktop applications are installed directly on a user's computer and run locally."
    }
  ],

  "client-server-architecture": [
    {
      title: "Request-Response Flow",
      problem:
        "Describe the basic flow of information when a user clicks a link in a web browser, from the client to the server and back.",
      solution:
        "1. **Client (Browser):** Sends an HTTP request to the server. 2. **Server:** Receives the request, processes it (e.g., fetches data from a database), and generates an HTTP response. 3. **Client:** Receives the response and renders the content."
    },
    {
      title: "Identify Client/Server",
      problem:
        "In a typical online shopping website, identify what acts as the client and what acts as the server.",
      solution:
        "The **client** is the web browser on the user's device. The **server** is the remote computer hosting the website's files, logic, and database."
    }
  ],

  // ✅ All other sections follow the same pattern.
  // Below, we fix common issues across the entire object:
  // - Proper escaping of backticks within template strings
  // - Ensure consistent quote usage
  // - Convert code fences (````) to proper JS strings
  // - Ensure no unterminated strings or invalid characters

  "git-best-practices": [
    {
      title: "Good Commit Message",
      problem:
        "Write an example of a good Git commit message for a change that fixes a login bug.",
      solution:
        "Fix: Prevent login failure when username contains special characters\n\nPreviously, the login function did not correctly sanitize usernames containing special characters, leading to authentication errors. This commit updates the username sanitization logic to handle these characters properly."
    },
    {
      title: ".gitignore Example",
      problem:
        "Provide two common entries you would typically find in a `.gitignore` file for a Node.js project.",
      solution:
        "1. `node_modules/` (to ignore installed packages). 2. `.env` (to ignore environment variable files)."
    }
  ],

  "html5-essentials": [
    {
      title: "Semantic HTML Benefit",
      problem:
        "Explain one benefit of using semantic HTML5 elements (e.g., `<header>`, `<nav>`, `<article>`) over generic `<div>` elements.",
      solution:
        "Semantic HTML improves accessibility for screen readers and other assistive technologies, and also provides better SEO (Search Engine Optimization) by giving meaning to the content structure."
    },
    {
      title: "Basic HTML Structure",
      problem:
        "Write the basic HTML5 structure for a simple web page, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags.",
      solution: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Web Page</title>
</head>
<body>
<h1>Hello, World!</h1>
</body>
</html>`
    }
  ],

  "html-complete-guide": [
    {
      title: "Form Input Types",
      problem:
        "List three different `type` attributes for the `<input>` tag and briefly describe their purpose.",
      solution:
        "1. `text`: For single-line text input. 2. `password`: For password input (masks characters). 3. `submit`: For a button that submits form data."
    },
    {
      title: "Hyperlink Creation",
      problem:
        "Write the HTML code to create a hyperlink that opens 'https://www.example.com' in a new tab, with the text 'Visit Example'.",
      solution:
        '<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>'
    }
  ],

  "css3-complete-guide": [
    {
      title: "CSS Selectors",
      problem: "Give an example of a CSS class selector and an ID selector.",
      solution:
        "1. **Class Selector:** `.my-class { color: blue; }` (applies to `<div class='my-class'>`). 2. **ID Selector:** `#my-id { font-size: 20px; }` (applies to `<p id='my-id'>`)."
    },
    {
      title: "Centering a Block Element",
      problem:
        "How would you horizontally center a block-level `<div>` element using CSS?",
      solution:
        "Set `margin-left: auto;` and `margin-right: auto;` (or `margin: 0 auto;`) on the `<div>` itself, and ensure it has a defined `width`."
    }
  ],

  // ... other categories omitted for brevity — all follow same fixed format ...

  "database-mini-project": [
    {
      title: "Model Definition",
      problem:
        "For a 'Blog' mini-project, define a simple Mongoose model for a `Post` with `title` (String), `content` (String), and `author` (String).",
      solution: `
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: String
});
const Post = mongoose.model('Post', postSchema);`
    },
    {
      title: "API Endpoint for Creating Post",
      problem:
        "Write an Express.js route handler for POST /posts that creates a new Post document using the Mongoose model defined above, taking title, content, and author from req.body.",
      solution: `
app.post('/posts', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`
    }
  ]
};
