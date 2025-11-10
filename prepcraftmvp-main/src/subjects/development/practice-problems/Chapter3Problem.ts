export const Chapter3Problem = {
  "html5-essentials": [
    {
      title: "Refactor a Basic Page to Semantic HTML",
      problemDescription: "You have a simple HTML page built with only <div> tags. Your task is to refactor this code to use modern HTML5 semantic elements like <header>, <main>, <nav>, <article>, and <footer>.",
      setupSteps: [
        "Open VS Code (or any text editor).",
        "Create a new file named `index.html`.",
        "Copy the 'Problem Code' below and paste it into this file. Save it and open it in your browser.",
        "Your goal is to modify this file to produce the 'Solution Code'."
      ],
      solutionSteps: [
        "Identify the 'header' section containing the main title and navigation. Replace the outer `div` with a `<header>` tag.",
        "Identify the navigation links. Wrap them in a `<nav>` tag for accessibility.",
        "Identify the main content of the page. Replace its wrapper `div` with a `<main>` tag.",
        "Identify the self-contained blog post. Replace its wrapper `div` with an `<article>` tag.",
        "Identify the footer content. Replace its wrapper `div` with a `<footer>` tag."
      ],
      solutionCode: `
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>My First Blog Post</h2>
      <p>This is the main content...</p>
    </article>
  </main>
  
  <footer>
    <p>Copyright 2025</p>
  </footer>
</body>
`
    },
    {
      title: "Identify Correct Semantic Tags",
      problemDescription: "You are building a blog layout. You have: \n1. A main blog post. \n2. A list of related links in a sidebar. \n3. A 'Contact Us' form at the bottom of the page. \n\nWhich semantic tags should you use for each of these three sections?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Think about the *purpose* of each element based on the notes.",
        "What is self-contained? What is tangentially related? What is for closing content?"
      ],
      solutionSteps: [
        "Blog Post: Use `<article>` because it is self-contained, independent content that could be syndicated (like an RSS feed).",
        "Related Links Sidebar: Use `<aside>` because it contains content that is 'tangentially related' to the main content, not part of it.",
        "Contact Form: This could be a `<section>` (a thematic grouping), but if it's at the very bottom of *every* page with copyright info, it should be part of the `<footer>`."
      ],
      solutionCode: `
<body>
  <main>
    <article>
      <h2>My Post</h2>
      <p>...</p>
    </article>

    <aside>
      <h3>Related Links</h3>
      <ul>...</ul>
    </aside>
  </main>
  
  <footer>
    <section id="contact">
      <h3>Contact Us</h3>
      <form>...</form>
    </section>
    <p>&copy; 2025</p>
  </footer>
</body>
`
    }
  ],
  "html-complete-guide": [
    {
      title: "Build an Accessible Form",
      problemDescription: "Create an HTML form for a user signup. It must include fields for 'Email' (email type), 'Password' (password type), and a 'Remember me' checkbox. All fields must be correctly linked to their `<label>` tags for accessibility.",
      setupSteps: [
        "Create a new file `form.html`.",
        "Open it in VS Code and your browser.",
        "Your goal is to be able to click on the *text* 'Email' or 'Password' and have the correct input box become focused."
      ],
      solutionSteps: [
        "Create the main `<form>` tag.",
        "For each input, create a `<label>` and an `<input>`.",
        "Give the `<input>` a unique `id` attribute (e.g., `id=\"email-field\"`).",
        "Give the corresponding `<label>` a `for` attribute that *exactly* matches the input's `id` (e.g., `for=\"email-field\"`).",
        "This `for`/`id` link is what makes the form accessible."
      ],
      solutionCode: `
<form action="/signup" method="POST">
  <div>
    <label for="email-field">Email:</label>
    <input type="email" id="email-field" name="user_email">
  </div>
  
  <div>
    <label for="pass-field">Password:</label>
    <input type="password" id="pass-field" name="user_pass">
  </div>
  
  <div>
    <input type="checkbox" id="remember-me" name="remember">
    <label for="remember-me">Remember me</label>
  </div>
  
  <button type="submit">Sign Up</button>
</form>
`
    },
    {
      title: "Create a Semantic Data Table",
      problemDescription: "Create an HTML table to display a list of employees. The table must have a header row with 'Employee ID' and 'Name', and two rows of data.",
      setupSteps: [
        "Create a new file `table.html`.",
        "Open it in VS Code and your browser.",
        "Focus on using the correct tags: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`."
      ],
      solutionSteps: [
        "Wrap the entire table in `<table>` tags.",
        "Create the header section with `<thead>`. Inside, create a row (`<tr>`) with header cells (`<th>`).",
        "Create the body section with `<tbody>`.",
        "Inside the `<tbody>`, create one `<tr>` (table row) for each employee.",
        "Inside each row, use `<td>` (table data) tags for the cells, ensuring they are in the same order as the headers."
      ],
      solutionCode: `
<table>
  <thead>
    <tr>
      <th>Employee ID</th>
      <th>Name</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>101</td>
      <td>Alex Smith</td>
    </tr>
    
    <tr>
      <td>102</td>
      <td>Priya Singh</td>
    </tr>
  </tbody>
</table>
`
    }
  ],
  "css3-complete-guide": [
    {
      title: "Fix the CSS Box Model",
      problemDescription: "You have a `div` with a `width: 300px`. You add `padding: 20px` and `border: 5px solid black`. The box now takes up 350px of space, breaking your layout. Fix this using the modern CSS reset.",
      setupSteps: [
        "Create an `index.html` file.",
        "Add a `<style>` tag to your `<head>`.",
        "Add the 'Problem Code' (from the solution) to your `<body>` and `<style>` tag.",
        "Observe how the box is wider than 300px.",
        "Apply the fix from the solution."
      ],
      solutionSteps: [
        "The problem is that the default `box-sizing: content-box` adds padding and border *outside* the width.",
        "The fix is to apply `box-sizing: border-box;` to the element.",
        "A best-practice 'CSS reset' is to apply this to *all* elements using the `*` selector, as shown in the notes.",
        "Add the `* { box-sizing: border-box; }` rule to the top of your CSS."
      ],
      solutionCode: `
<style>
  /* This is the fix. It tells the browser to include
    padding and border *inside* the 'width' calculation.
  */
  * {
    box-sizing: border-box;
  }

  .my-box {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    
    /* This box will now be *exactly* 300px wide,
      and the content area inside it will shrink
      to accommodate the padding and border.
    */
    background-color: lightgreen;
  }
</style>

<div class="my-box">
  I am 300px wide.
</div>
`
    },
    {
      title: "Select an Element by Class vs. ID",
      problemDescription: "You have two paragraphs. One has `id=\"warning\"` and the other has `class=\"info\"`. Write CSS rules to make the 'warning' text red and the 'info' text blue.",
      setupSteps: [
        "Create an `index.html` file.",
        "Add a `<style>` tag to your `<head>`.",
        "Add the HTML from the solution to your `<body>`.",
        "Write the CSS rules in the `<style>` tag to target the elements correctly."
      ],
      solutionSteps: [
        "To select an element by its ID, use the hash/pound symbol (`#`). Example: `#warning`.",
        "To select an element by its class, use the period/dot symbol (`.`). Example: `.info`.",
        "Apply the `color` property to each rule."
      ],
      solutionCode: `
<style>
  /* 1. Select the element with id="warning" */
  #warning {
    color: red;
    font-weight: bold;
  }
  
  /* 2. Select the element with class="info" */
  .info {
    color: blue;
  }
</style>

<body>
  <p id="warning">This is a critical warning.</p>
  <p class="info">This is just for your information.</p>
</body>
`
    }
  ],
  "css-layout": [
    {
      title: "Build a Centered Navbar with Flexbox",
      problemDescription: "You have a `<nav>` with a `<ul>` of links. By default, they are stacked vertically. Use Flexbox to: \n1. Arrange the links in a horizontal row. \n2. Center the links horizontally in the navbar. \n3. Center the links vertically in the navbar.",
      setupSteps: [
        "Create an `index.html` file with a `<style>` tag.",
        "Copy the HTML from the solution into your `<body>`.",
        "In your `<style>` tag, write the CSS for the `.navbar` and `.navbar ul` classes to achieve the goal."
      ],
      solutionSteps: [
        "Target the parent (`.navbar ul`) and set `display: flex;` to make its children (the `<li>`s) go in a row.",
        "Add `list-style: none;` to remove the bullets.",
        "To center the row of links horizontally within the `<nav>`, target the *parent* (`.navbar`) and set `display: flex;` and `justify-content: center;`.",
        "To center them vertically, add `align-items: center;`."
      ],
      solutionCode: `
<style>
  .navbar {
    background-color: #333;
    height: 60px;
    
    /* Flex properties on the PARENT to center the <ul> */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .navbar ul {
    /* Flex properties on the <ul> to make <li>s horizontal */
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px; /* Adds space between items */
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
  }
</style>

<body>
  <nav class="navbar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
`
    },
    {
      title: "Build a 2-Column Page Layout with Grid",
      problemDescription: "Create a 'main content' and 'sidebar' layout using CSS Grid. The main content should take up 3/4 of the space, and the sidebar should take up 1/4 of the space.",
      setupSteps: [
        "Create an `index.html` file with a `<style>` tag.",
        "Copy the HTML from the solution into your `<body>`.",
        "In your `<style>` tag, write the CSS for the `.page-layout` class to create the grid."
      ],
      solutionSteps: [
        "Target the parent container (`.page-layout`) and set `display: grid;`.",
        "Define the columns using `grid-template-columns: 3fr 1fr;`. This creates two columns where the first (`3fr`) is 3 times wider than the second (`1fr`).",
        "Add a `gap` property (e.g., `gap: 20px;`) to create space between the main content and the sidebar."
      ],
      solutionCode: `
<style>
  .page-layout {
    display: grid;
    /* '3fr 1fr' means "create 4 total units of space;
       give the first column 3 units and the second 1 unit."
    */
    grid-template-columns: 3fr 1fr;
    gap: 20px;
    
    /* Just for demo visuals */
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .main-content {
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  .sidebar {
    background-color: #e0e0e0;
    padding: 20px;
  }
</style>

<body>
  <div class="page-layout">
    <main class="main-content">
      <h2>Main Content</h2>
      <p>This content takes up 3/4 of the width.</p>
    </main>
    <aside class="sidebar">
      <h3>Sidebar</h3>
      <p>This content takes up 1/4 of the width.</p>
    </aside>
  </div>
</body>
`
    }
  ],
  "css-animations": [
    {
      title: "Create a Button Hover Transition",
      problemDescription: "You have a button. When the user hovers over it, make it smoothly change its background color and scale up to 1.1 size over 0.3 seconds.",
      setupSteps: [
        "Create an `index.html` file with a `<style>` tag.",
        "Copy the HTML and basic `.btn` styles from the solution.",
        "Add the correct CSS `transition` properties to make the hover effect smooth."
      ],
      solutionSteps: [
        "In the base class (`.btn`), define the *property* you want to animate (`transform` and `background-color`) and the *duration* (`0.3s`).",
        "The full rule is: `transition: transform 0.3s ease, background-color 0.3s ease;`.",
        "Define the *end state* in the `:hover` pseudo-class: `background-color: #0056b3;` and `transform: scale(1.1);`."
      ],
      solutionCode: `
<style>
  .btn {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;

    /* 1. Define the transition */
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .btn:hover {
    /* 2. Define the end state */
    background-color: #0056b3;
    transform: scale(1.1);
  }
</style>

<body>
  <button class="btn">Hover Over Me</button>
</body>
`
    },
    {
      title: "Create a CSS Loading Spinner",
      problemDescription: "Create a CSS-only loading spinner that spins 360 degrees infinitely, using @keyframes.",
      setupSteps: [
        "Create an `index.html` file with a `<style>` tag.",
        "Add the HTML and basic `.spinner` styles from the solution.",
        "Write the `@keyframes` rule for 'pulse'.",
        "Apply the 'pulse' animation to the `.spinner` class."
      ],
      solutionSteps: [
        "Define the `@keyframes spin` rule. It should go from `0%` (or `from`) with `transform: rotate(0deg);` to `100%` (or `to`) with `transform: rotate(360deg);`.",
        "Apply this to the `.spinner` with `animation: spin 1s linear infinite;` (1 second duration, linear timing, and looping infinitely)."
      ],
      solutionCode: `
<style>
  /* 1. Define the keyframes */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3; /* Light grey track */
    border-top: 5px solid #3498db; /* Blue spinner */
    border-radius: 50%;
    
    /* 2. Apply the animation */
    animation: spin 1s linear infinite;
  }
</style>

<body>
  <div class="spinner"></div>
</body>
`
    }
  ],
  "responsive-design": [
    {
      title: "Add the Viewport Meta Tag",
      problemDescription: "Your new responsive website looks tiny and zoomed-out on your iPhone. You've checked your media queries and they are correct. What HTML tag are you missing in your `<head>`?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Think about what tells the browser *how* to render the page on a mobile device.",
        "Review section 3.6 in the notes."
      ],
      solutionSteps: [
        "The problem is that the mobile browser is 'lying' about its width and pretending to be a desktop.",
        "You must add the viewport meta tag to tell the browser to set its width to the device's actual screen width.",
        "The tag is: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`."
      ],
      solutionCode: `
<meta name="viewport" content="width=device-width, initial-scale=1.0">
`
    },
    {
      title: "Create a Mobile-First Layout",
      problemDescription: "Create a layout for a grid of cards. \n1. By default (on mobile), it should be a single column. \n2. On screens 640px and wider, it should become a 2-column grid. \n3. On screens 1024px and wider, it should become a 4-column grid.",
      setupSteps: [
        "Create an `index.html` file with a `<style>` tag.",
        "Add the HTML from the solution to your `<body>`.",
        "Write the CSS for the `.card-grid` class, following the mobile-first approach."
      ],
      solutionSteps: [
        "Set the *default* style for `.card-grid` to be `display: grid;` and `grid-template-columns: 1fr;` (this is your mobile style).",
        "Create your first media query: `@media (min-width: 640px) { ... }`. Inside, target `.card-grid` and set `grid-template-columns: 1fr 1fr;`.",
        "Create your second media query: `@media (min-width: 1024px) { ... }`. Inside, target `.card-grid` and set `grid-template-columns: 1fr 1fr 1fr 1fr;`."
      ],
      solutionCode: `
<style>
  .card-grid {
    display: grid;
    gap: 1rem;
    
    /* 1. Mobile-First Default: 1 column */
    grid-template-columns: 1fr;
  }
  
  /* 2. Tablet Breakpoint (640px) */
  @media (min-width: 640px) {
    .card-grid {
      grid-template-columns: 1fr 1fr; /* 2 columns */
    }
  }
  
  /* 3. Desktop Breakpoint (1024px) */
  @media (min-width: 1024px) {
    .card-grid {
      grid-template-columns: 1fr 1fr 1fr 1fr; /* 4 columns */
    }
  }
  
  /* Demo styles */
  .card { background: #eee; padding: 20px; border-radius: 8px; }
</style>

<body>
  <div class="card-grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
  </div>
</body>
`
    }
  ],
  "css-preprocessors": [
    {
      title: "Create Reusable SCSS Variables",
      problemDescription: "You are building a site and find yourself repeating the same hex codes: `#3498db` (primary color) and `#2c3e50` (dark text). Refactor this CSS to use SCSS variables.",
      setupSteps: [
        "Create a file named `style.scss` (note the .scss extension).",
        "You will need a Sass compiler (like the 'Live Sass Compiler' VS Code extension) to run this.",
        "Write the SCSS code in `style.scss`."
      ],
      solutionSteps: [
        "Define your variables at the top of the file using the `$` prefix (e.g., `$primary-color: #3498db;`).",
        "In your CSS rules, replace the hard-coded hex values with your new variables (e.g., `color: $primary-color;`)."
      ],
      solutionCode: `
/* --- style.scss --- */

/* 1. Define variables */
$primary-color: #3498db;
$dark-text: #2c3e50;
$padding-small: 10px;

body {
  font-family: sans-serif;
  color: $dark-text; /* Use variable */
}

.button-primary {
  background-color: $primary-color; /* Use variable */
  padding: $padding-small 20px; /* Use variable */
  color: white;
}
`
    },
    {
      title: "Use SCSS Nesting and the Parent Selector (&)",
      problemDescription: "The following CSS is repetitive. Refactor it into a single, nested SCSS rule. Make sure the `:hover` state is also nested correctly.",
      setupSteps: [
        "Create a file named `style.scss`.",
        "Use a Sass compiler to check your work.",
        "Your goal is to have only *one* top-level selector (`.card`)."
      ],
      solutionSteps: [
        "Create the parent rule `.card { ... }`.",
        "Move the `.card h2` rule *inside* the `.card` rule, changing it to just `h2 { ... }`.",
        "Move the `.card p` rule *inside* the `.card` rule, changing it to just `p { ... }`.",
        "Move the `.card:hover` rule *inside* the `.card` rule, and use the parent selector `&` to create `&:hover { ... }`."
      ],
      solutionCode: `
/* --- Original CSS --- */
/*
.card {
  padding: 15px;
  border: 1px solid #ccc;
}
.card h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
.card p {
  font-size: 14px;
}
.card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
*/

/* --- SCSS Solution --- */
.card {
  padding: 15px;
  border: 1px solid #ccc;
  
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
  }
  
  /* Use '&' to refer to the parent selector (.card) */
  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
}
`
    }
  ],
  "browser-developer-tools": [
    {
      title: "Debug a CSS Specificity Issue",
      problemDescription: "You wrote CSS for `.my-button { color: blue; }`, but the button is still red. You 'Inspect' the element and see your `color: blue` rule is *crossed out*. What is the most likely reason?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Open the website in your browser.",
        "What is the *first* tool you should use?"
      ],
      solutionSteps: [
        "The most likely reason is **CSS Specificity**.",
        "A more specific rule is overriding your rule. In the 'Styles' pane of the Elements tab, you will see the winning rule.",
        "For example, a rule like `div.card .my-button { color: red; }` is *more specific* than your `.my-button` rule, so it wins."
      ],
      solutionCode: `
/* This is a debugging workflow, not a single code solution.

  1. Right-click the red button and choose "Inspect".
  2. The 'Elements' tab will open with the <button> highlighted.
  3. Look at the 'Styles' pane.
  4. You will see your rule with a line through it:
     .my-button {
       color: blue;
     }
  5. You will see another, more specific rule *above* it:
     div.card .my-button {
       color: red;
     }
  6. The Fix: You must either make your rule *more* specific
     (e.g., \`div.card .my-button { color: blue; }\`) 
     or remove the 'red' rule.
*/
`
    },
    {
      title: "Debug a Failed API Call",
      problemDescription: "You have a React app that calls `fetch('/api/users')`. The app just shows 'Loading...' and nothing happens. How do you find out what's wrong?",
      setupSteps: [
        "This is a knowledge-based problem.",
        "Open your React app in the browser."
      ],
      solutionSteps: [
        "Open DevTools (F12) and go to the **'Network' tab**.",
        "Refresh your page (with the Network tab open) to see all requests.",
        "Find the request for 'users' in the list.",
        "Check its **'Status'** column.",
        "If it's **404**: Your frontend URL `/api/users` is wrong, or your backend server isn't running.",
        "If it's **500**: Your backend server *crashed*. You must go check your server's terminal logs.",
        "If it's **200 OK**: Click the request, go to the **'Response'** tab, and make sure the JSON data you received is in the format your React code *expects*."
      ],
      solutionCode: `
/* This is a debugging workflow.

  1. Open DevTools (F12).
  2. Click the "Network" tab.
  3. Refresh your application.
  4. Find the 'users' request in the list.
  5. Check its 'Status' code.

   - 200 OK: The request worked. Click it and check the 'Response' tab 
             to verify the data is correct.
             
   - 404 Not Found: Your frontend fetch URL is wrong or your
                    backend route is misspelled.
                    
   - 500 Internal Server Error: Your backend code crashed. 
                             Check your server's terminal.
                             
   - (failed) / CORS Error: Your server is not running or you 
                            have a Cross-Origin Resource Sharing (CORS) 
                            error.
*/
`
    }
  ]
};
