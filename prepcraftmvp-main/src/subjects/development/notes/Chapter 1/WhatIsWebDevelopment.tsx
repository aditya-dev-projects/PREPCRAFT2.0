import React from 'react';

export const WhatIsWebDevelopment: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">What is Web Development?</h1>
      <div className="space-y-4">
        <p className="text-lg opacity-90">
          Web Development is the art and science of creating, building, and maintaining websites and web applications. It's the "behind-the-scenes" work that makes the websites we use every day—from a simple blog to a complex social media platform—functional, interactive, and visually appealing. It's a field that combines creativity with technical logic.
        </p>

        <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The "Digital Builder" 🏗️</h2>
        <p className="opacity-90">
          At its heart, web development is the job of a digital builder. Think of it like constructing a house:
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Architect (Planner):</strong> You plan the website's purpose, flow, and structure.</li>
          <li><strong>Construction Worker (Developer):</strong> You build the foundation, walls, and roof using code.</li>
          <li><strong>Interior Designer (Designer):</strong> You paint the walls and add furniture to make it look good and feel welcoming.</li>
        </ul>
        <p className="opacity-90">
          A web developer can be any one of these, or all three, to bring a digital idea to life on the internet.
        </p>

        <h2 className="text-2xl font-semibold pt-4">2. How the Internet Works (The Foundation)</h2>
        <p className="opacity-90">
          Before you can build a house, you need to understand what a street and an address are. It's the same with the web. When you type google.com into your browser, a four-step process happens in about one second:
        </p>
        <ol className="list-decimal ml-6 space-y-2 opacity-90">
          <li><strong>Request:</strong> Your browser (the Client) sends a request over the internet asking for the website.</li>
          <li><strong>DNS (Domain Name System):</strong> The internet's "phone book" looks up google.com and finds its real address, a string of numbers called an IP Address.</li>
          <li><strong>Server:</strong> The request is sent to that IP address, which is a powerful computer (the Server) that stores all of Google's files (HTML, CSS, JS).</li>
          <li><strong>Response:</strong> The server finds the files for the website and sends them back to your browser. Your browser then assembles these files to render the webpage you see.</li>
        </ol>

        <h2 className="text-2xl font-semibold pt-4">3. The Three Pillars: HTML, CSS, & JavaScript</h2>
        <p className="opacity-90">
          Every single website is built using these three core technologies. They are the essential trio of the web.
        </p>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold">HTML (HyperText Markup Language): The Skeleton</h3>
          <p className="text-sm opacity-90">Provides the fundamental structure and content. Analogy: The wooden frame and walls of a house.</p>
          <pre className="mt-2 p-2 bg-black rounded text-sm text-gray-300"><code>{'<h1>This is a Main Heading</h1>\n<p>This is a paragraph of text.</p>\n<button>Click Me</button>'}</code></pre>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold">CSS (Cascading Style Sheets): The Appearance</h3>
          <p className="text-sm opacity-90">Provides the style, colors, fonts, and layout. Analogy: The paint, wallpaper, and furniture.</p>
          <pre className="mt-2 p-2 bg-black rounded text-sm text-gray-300"><code>{'h1 {\n  color: blue;\n  font-size: 32px;\n}\nbutton {\n  background-color: green;\n  color: white;\n}'}</code></pre>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold">JavaScript (JS): The Brain</h3>
          <p className="text-sm opacity-90">Adds interactivity and functionality, making the website dynamic. Analogy: The electricity and plumbing.</p>
          <pre className="mt-2 p-2 bg-black rounded text-sm text-gray-300"><code>{"button.addEventListener('click', () => {\n  document.body.style.backgroundColor = 'darkmode';\n});"}</code></pre>
        </div>

        <h2 className="text-2xl font-semibold pt-4">4. Frontend Development (The "Client-Side")</h2>
        <p className="opacity-90">
          The Frontend is everything the user sees and interacts with in their web browser. It's often called the "client-side" because the code (HTML, CSS, JS) is run on the client's (user's) computer.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Analogy:</strong> The dining room of a restaurant. It's the part the customer experiences.</li>
          <li><strong>Core Responsibilities:</strong> Translating designs into HTML/CSS, ensuring responsiveness, and handling user interactions with JavaScript.</li>
          <li><strong>Key Technologies:</strong> HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">5. Backend Development (The "Server-Side")</h2>
        <p className="opacity-90">
          The Backend is the hidden engine of a website that the user never sees. It's the "server-side" because its code runs on the server. It manages the website's core logic, data, and security.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Analogy:</strong> The kitchen of the restaurant. It's where orders are processed and ingredients are stored.</li>
          <li><strong>Core Responsibilities:</strong> Processing requests, managing user authentication (logins), interacting with the database, and creating APIs.</li>
          <li><strong>Key Technologies:</strong> Languages like Node.js (JavaScript), Python, Java, or PHP.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">6. Full-Stack Development (The "All-Rounder")</h2>
        <p className="opacity-90">
          A Full-Stack Developer is a versatile professional who is comfortable working on both the frontend and the backend. They understand the entire application from start to finish.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Analogy:</strong> The restaurant owner who knows how to cook, manage the kitchen, and run the dining room.</li>
          <li><strong>Value:</strong> They can build a complete web application on their own, making them crucial for startups and as team leaders.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">7. The Role of Databases</h2>
        <p className="opacity-90">
          The database is the "memory" of a web application. It's where all the persistent data is stored, such as user profiles, blog posts, or product information.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>SQL (Relational):</strong> Like an organized set of Excel spreadsheets with strict rows and columns (e.g., MySQL).</li>
          <li><strong>NoSQL (Non-Relational):</strong> Like a flexible set of JSON documents, great for unstructured data (e.g., MongoDB).</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">8. The Web Development Workflow</h2>
        <p className="opacity-90">
          Creating a website is a professional process that follows a structured path from idea to product.
        </p>
        <ol className="list-decimal ml-6 space-y-2 opacity-90">
          <li><strong>Plan:</strong> Define the website's goals and features.</li>
          <li><strong>Design (UI/UX):</strong> Create wireframes (layouts) and mockups (visual designs).</li>
          <li><strong>Develop:</strong> Write the frontend and backend code.</li>
          <li><strong>Test:</strong> Check for bugs, performance issues, and browser compatibility.</li>
          <li><strong>Deploy:</strong> Launch the website on a server to make it accessible to the public.</li>
          <li><strong>Maintain:</strong> Regularly update the site, fix new bugs, and add features.</li>
        </ol>

        <h2 className="text-2xl font-semibold pt-4">9. Essential Tools for a Web Developer</h2>
        <p className="opacity-90">
          Every web developer relies on a set of core tools to build, manage, and debug their code efficiently.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Code Editor:</strong> A text editor for writing code (e.g., Visual Studio Code).</li>
          <li><strong>Web Browser:</strong> Essential for testing your work (e.g., Chrome, Firefox).</li>
          <li><strong>Version Control:</strong> Software that tracks changes to your code (e.g., Git, GitHub).</li>
          <li><strong>Command Line Interface (CLI):</strong> A text-based terminal for running commands, using Git, and installing software.</li>
        </ul>
      </div>
    </div>
  );
};

export const whatIsWebDevelopmentMeta = {
  id: 'what-is-web-development',
  title: 'What is Web Development?',
  difficulty: 'beginner',
  points: 5,
  estimatedTime: '10 min'
};

