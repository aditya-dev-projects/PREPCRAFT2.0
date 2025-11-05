import React from 'react';

const Chapter1 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'what-is-web-development':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">What is Web Development?</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Web Development is the art and science of creating, building, and maintaining websites and web applications. It's the "behind-the-scenes" work that makes the websites we use every day—from a simple blog to a complex social media platform—functional, interactive, and visually appealing. It's a field that combines creativity with technical logic.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The "Digital Builder"</h2>
            <p className="opacity-90">
              At its heart, web development is the job of a digital builder. Think of it like constructing a house:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Architect (Planner):</strong> You plan the website's purpose, flow, and structure.</li>
                <li><strong>Construction Worker (Developer):</strong> You build the foundation, walls, and roof using code.</li>
                <li><strong>Interior Designer (Designer):</strong> You paint the walls and add furniture to make it look good and feel welcoming.</li>
              </ul>
            </div>
            <p className="opacity-90">
              A web developer can be any one of these, or all three, to bring a digital idea to life on the internet.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. How the Internet Works (The Foundation)</h2>
            <p className="opacity-90">
              Before you can build a house, you need to understand what a street and an address are. It's the same with the web. When you type google.com into your browser, a four-step process happens in about one second:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Request:</strong> Your browser (the Client) sends a request over the internet asking for the website.</li>
                <li><strong>DNS (Domain Name System):</strong> The internet's "phone book" looks up google.com and finds its real address, a string of numbers called an IP Address.</li>
                <li><strong>Server:</strong> The request is sent to that IP address, which is a powerful computer (the Server) that stores all of Google's files (HTML, CSS, JS).</li>
                <li><strong>Response:</strong> The server finds the files for the website and sends them back to your browser. Your browser then assembles these files to render the webpage you see.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. The Three Pillars: HTML, CSS, & JavaScript</h2>
            <p className="opacity-90">
              Every single website is built using these three core technologies. They are the essential trio of the web.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg space-y-4">
              <div>
                <h3 className="font-bold">HTML (HyperText Markup Language): The Skeleton</h3>
                <p className="text-sm opacity-90">Provides the fundamental structure and content. Analogy: The wooden frame and walls of a house.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'<h1>This is a Main Heading</h1>\n<p>This is a paragraph of text.</p>\n<button>Click Me</button>'}</code></pre>
              </div>
              <div>
                <h3 className="font-bold">CSS (Cascading Style Sheets): The Appearance</h3>
                <p className="text-sm opacity-90">Provides the style, colors, fonts, and layout. Analogy: The paint, wallpaper, and furniture.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'h1 {\n  color: blue;\n  font-size: 32px;\n}\nbutton {\n  background-color: green;\n  color: white;\n}'}</code></pre>
              </div>
              <div>
                <h3 className="font-bold">JavaScript (JS): The Brain</h3>
                <p className="text-sm opacity-90">Adds interactivity and functionality, making the website dynamic. Analogy: The electricity and plumbing.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{"button.addEventListener('click', () => {\n  document.body.style.backgroundColor = 'darkmode';\n});"}</code></pre>
              </div>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Frontend Development (The "Client-Side")</h2>
            <p className="opacity-90">
              The Frontend is everything the user sees and interacts with in their web browser. It's often called the "client-side" because the code (HTML, CSS, JS) is run on the client's (user's) computer.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Analogy:</strong> The dining room of a restaurant. It's the part the customer experiences.</li>
                <li><strong>Core Responsibilities:</strong> Translating designs into HTML/CSS, ensuring responsiveness, and handling user interactions with JavaScript.</li>
                <li><strong>Key Technologies:</strong> HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. Backend Development (The "Server-Side")</h2>
            <p className="opacity-90">
              The Backend is the hidden engine of a website that the user never sees. It's the "server-side" because its code runs on the server. It manages the website's core logic, data, and security.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Analogy:</strong> The kitchen of the restaurant. It's where orders are processed and ingredients are stored.</li>
                <li><strong>Core Responsibilities:</strong> Processing requests, managing user authentication (logins), interacting with the database, and creating APIs.</li>
                <li><strong>Key Technologies:</strong> Languages like Node.js (JavaScript), Python, Java, or PHP.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Full-Stack Development (The "All-Rounder")</h2>
            <p className="opacity-90">
              A Full-Stack Developer is a versatile professional who is comfortable working on both the frontend and the backend. They understand the entire application from start to finish.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Analogy:</strong> The restaurant owner who knows how to cook, manage the kitchen, and run the dining room.</li>
                <li><strong>Value:</strong> They can build a complete web application on their own, making them crucial for startups and as team leaders.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">7. The Role of Databases</h2>
            <p className="opacity-90">
              The database is the "memory" of a web application. It's where all the persistent data is stored, such as user profiles, blog posts, or product information.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>SQL (Relational):</strong> Like an organized set of Excel spreadsheets with strict rows and columns (e.g., MySQL).</li>
                <li><strong>NoSQL (Non-Relational):</strong> Like a flexible set of JSON documents, great for unstructured data (e.g., MongoDB).</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">8. The Web Development Workflow</h2>
            <p className="opacity-90">
              Creating a website is a professional process that follows a structured path from idea to product.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Plan:</strong> Define the website's goals and features.</li>
                <li><strong>Design (UI/UX):</strong> Create wireframes (layouts) and mockups (visual designs).</li>
                <li><strong>Develop:</strong> Write the frontend and backend code.</li>
                <li><strong>Test:</strong> Check for bugs, performance issues, and browser compatibility.</li>
                <li><strong>Deploy:</strong> Launch the website on a server to make it accessible to the public.</li>
                <li><strong>Maintain:</strong> Regularly update the site, fix new bugs, and add features.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. Essential Tools for a Web Developer</h2>
            <p className="opacity-90">
              Every web developer relies on a set of core tools to build, manage, and debug their code efficiently.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Code Editor:</strong> A text editor for writing code (e.g., Visual Studio Code).</li>
                <li><strong>Web Browser:</strong> Essential for testing your work (e.g., Chrome, Firefox).</li>
                <li><strong>Version Control:</strong> Software that tracks changes to your code (e.g., Git, GitHub).</li>
                <li><strong>Command Line Interface (CLI):</strong> A text-based terminal for running commands, using Git, and installing software.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'client-server-architecture':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">Client-Server Architecture</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              The Client-Server model is the fundamental architecture that powers the entire modern internet. It's a distributed application structure that separates tasks and workloads between two main parties: the <strong>Client</strong>, which requests services, and the <strong>Server</strong>, which provides those services.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Two-Way Conversation</h2>
            <p className="opacity-90">
              The entire model is based on a simple, structured conversation between two entities.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">Analogy: Ordering food at a restaurant.</h3>
              <ul className="list-disc ml-6 space-y-2 opacity-90 mt-2">
                  <li>You (the <strong>Client</strong>) sit at a table with a menu.</li>
                  <li>You make a specific request to the waiter (the <strong>Request</strong>).</li>
                  <li>The waiter takes your request to the kitchen (the <strong>Server</strong>), which has the ingredients (data) and chefs (logic).</li>
                  <li>The kitchen prepares the meal and gives it back to the waiter (the <strong>Response</strong>).</li>
                  <li>The waiter brings the food to your table for you to enjoy.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. The Client: The "Asker"</h2>
            <p className="opacity-90">
              The Client is any application or device that a user interacts with directly to access a service. It is responsible for the User Interface (UI).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>Role:</strong> To capture user input, send requests, and render the server's response.</li>
                  <li><strong>Key Characteristics:</strong> It's the "front-end" and an active initiator of communication.</li>
                  <li><strong>Examples:</strong> Your web browser, a mobile app (Instagram, Uber), email software (Outlook).</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. The Server: The "Provider"</h2>
            <p className="opacity-90">
              The Server is a powerful, centralized computer that has the resources, data, and logic to fulfill the client's requests. It is the "back-end".
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>Role:</strong> To wait passively for requests, process them, and send back the appropriate data.</li>
                  <li><strong>Key Characteristics:</strong> It's a powerful, always-on system that manages shared resources and provides security.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. The Request-Response Cycle (HTTP)</h2>
            <p className="opacity-90">
              The communication between a client and server happens in a structured cycle using the HTTP protocol.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>User Action:</strong> The user clicks a link.</li>
                <li><strong>HTTP Request:</strong> The client (browser) sends an HTTP Request to the server's IP address.</li>
                <li><strong>Server Processing:</strong> The server receives the request, finds the resource (e.g., an HTML file), and prepares a response.</li>
                <li><strong>HTTP Response:</strong> The server sends the resource back to the client as an HTTP Response.</li>
                <li><strong>Client Rendering:</strong> The browser receives the response and renders the content.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. Key Benefits of This Architecture</h2>
            <p className="opacity-90">
              This model is the standard for the internet for several important reasons.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Centralization:</strong> All data and logic are stored in one central, secure location (the server).</li>
                <li><strong>Scalability:</strong> You can upgrade the server to handle more clients without changing the clients.</li>
                <li><strong>Platform Independence:</strong> A Linux server can serve data to an iPhone app and a Windows web browser simultaneously.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Types of Servers</h2>
            <p className="opacity-90">
              A "server" can have specialized roles, and often a backend is composed of multiple servers working together.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Web Server:</strong> Its primary job is to serve static files (HTML, CSS, images). (e.g., Nginx, Apache).</li>
                <li><strong>Application Server:</strong> Its job is to run the business logic. (e.g., a Node.js or Python server).</li>
                <li><strong>Database Server:</strong> Its only job is to manage the database, ensuring data is stored and retrieved efficiently.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">7. Stateless vs. Stateful</h2>
            <p className="opacity-90">
              This describes how a server remembers a client between requests.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                  <h3 className="font-bold">Stateful</h3>
                  <p className="text-sm opacity-90 mt-1">The server remembers previous requests from a client (e.g., what's in their shopping cart). This is harder to scale.</p>
              </div>
              <div>
                  <h3 className="font-bold">Stateless (Preferred)</h3>
                  <p className="text-sm opacity-90 mt-1">The server treats every request as brand new and forgets it immediately. The client must send all necessary information (like a token) with every request. This is the standard for modern APIs and is much easier to scale.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold pt-4">8. APIs: The "Waiter"</h2>
            <p className="opacity-90">
              An API (Application Programming Interface) is the contract that defines how the client and server talk to each other. It's the "menu" in the restaurant analogy. The API specifies what requests the client *can* make and what responses it *will* get back.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Understanding the separation between the client and server is the first step to becoming a web developer.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>The <strong>Client</strong> (Frontend) is responsible for the <strong>User Interface (UI)</strong>.</li>
                <li>The <strong>Server</strong> (Backend) is responsible for <strong>Data and Logic</strong>.</li>
                <li>They communicate over the internet using the <strong>HTTP protocol</strong>.</li>
                <li>The <strong>API</strong> is the set of rules that governs this communication.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'frontend-vs-backend':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">Frontend vs. Backend vs. Full Stack</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              In web development, the work is often divided into two major areas: the <strong>Frontend</strong> and the <strong>Backend</strong>. Understanding the clear distinction between these two is fundamental to understanding how web applications are built. A <strong>Full-Stack</strong> developer is someone who bridges this divide.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Restaurant Analogy</h2>
            <p className="opacity-90">
              The easiest way to understand the difference is to think of a restaurant.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Frontend (The Dining Area):</strong> This is everything the customer sees and interacts with. It includes the decor, the tables, the menu, and the waiter who takes your order.</li>
                <li><strong>Backend (The Kitchen):</strong> This is the hidden part of the restaurant that makes everything work. It includes the chefs, the ovens, and the refrigerators (database).</li>
              </ul>
              <p className="mt-2 opacity-90">The customer never sees the kitchen, but without it, the dining area would have nothing to offer. The two parts are separate but must communicate perfectly.</p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Frontend Development (Client-Side)</h2>
            <p className="opacity-90">
              The Frontend is the part of the website that runs in the user's browser. It's all about the <strong>User Interface (UI)</strong> and <strong>User Experience (UX)</strong>. A frontend developer's job is to translate a design into live, interactive code.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>What they build:</strong> The visual elements of a website—the layout, the buttons, the animations, the forms.</li>
                  <li><strong>Core Responsibilities:</strong> Implementing the visual design using HTML and CSS, making the website interactive with JavaScript, and ensuring the site is responsive.</li>
                  <li><strong>Key Technologies:</strong> HTML, CSS, JavaScript, and frameworks like <strong>React</strong>, <strong>Angular</strong>, or <strong>Vue.js</strong>.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Backend Development (Server-Side)</h2>
            <p className="opacity-90">
              The Backend is the part of the website that runs on the server. It's the "brain" of the application, handling everything that happens behind the scenes.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>What they build:</strong> The logic that powers the frontend. This includes databases, servers, and the application's core logic.</li>
                  <li><strong>Core Responsibilities:</strong> Managing the database, handling user authentication (logins), writing the business logic, and creating APIs.</li>
                  <li><strong>Key Technologies:</strong> Languages like <strong>Node.js</strong> (JavaScript), <strong>Python</strong> (Django), <strong>Java</strong> (Spring), and databases like <strong>SQL</strong> (MySQL) or <strong>NoSQL</strong> (MongoDB).</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Full-Stack Development</h2>
            <p className="opacity-90">
              A <strong>Full-Stack Developer</strong> is a "jack-of-all-trades" who is proficient in both frontend and backend development. They have a comprehensive understanding of the entire technology stack.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>What they do:</strong> They can build a complete, functional web application from start to finish.</li>
                  <li><strong>Why they are valuable:</strong> They are highly flexible, have a holistic view of the application, and are crucial in smaller teams where roles are less specialized.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. The Role of the Database</h2>
            <p className="opacity-90">
              The database is the "memory" of the application, managed by the backend. It stores all the persistent data, such as user profiles, posts, or product info.
            </p>

            <h2 className="text-2xl font-semibold pt-4">6. The Role of the API (The "Contract")</h2>
            <p className="opacity-90">
              The API (Application Programming Interface) is the communication channel that the backend provides for the frontend to use. It's the "waiter" in the restaurant analogy, taking requests from the frontend to the backend and returning the data.
            </p>

            <h2 className="text-2xl font-semibold pt-4">7. Key Differences at a Glance</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg overflow-x-auto">
              <table className="w-full text-left">
                  <thead>
                      <tr className="border-b border-gray-600">
                          <th className="py-2 font-bold">Aspect</th>
                          <th className="py-2 font-bold">Frontend Development</th>
                          <th className="py-2 font-bold">Backend Development</th>
                      </tr>
                  </thead>
                  <tbody className="opacity-90 text-sm">
                      <tr className="border-b border-gray-600">
                          <td className="py-2"><strong>Location</strong></td>
                          <td className="py-2">Runs on the Client (User's Browser)</td>
                          <td className="py-2">Runs on the Server</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                          <td className="py-2"><strong>Main Concern</strong></td>
                          <td className="py-2">User Interface & Experience (How it looks)</td>
                          <td className="py-2">Data, Logic, and Performance (How it works)</td>
                      </tr>
                      <tr>
                          <td className="py-2"><strong>Core Skills</strong></td>
                          <td className="py-2">HTML, CSS, JavaScript, React</td>
                          <td className="py-2">Node.js/Python, SQL/NoSQL, API Design</td>
                      </tr>
                  </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. The "MERN" Stack: A Full-Stack Example</h2>
            <p className="opacity-90">
              MERN is a popular full-stack combination that uses JavaScript for all parts of the application.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>M</strong>ongoDB (Database - NoSQL)</li>
                <li><strong>E</strong>xpress.js (Backend Framework)</li>
                <li><strong>R</strong>eact (Frontend Library)</li>
                <li><strong>N</strong>ode.js (Backend Runtime)</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy: Choosing Your Path</h2>
            <p className="opacity-90">
              You don't need to learn everything at once. Most developers start by specializing in either frontend or backend.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Choose Frontend if:</strong> You are a visual person, enjoy building user interfaces, and are passionate about user experience.</li>
                <li><strong>Choose Backend if:</strong> You enjoy logic, data, algorithms, and building the "engine" that makes things work.</li>
                <li><strong>Full-Stack</strong> is a goal you can achieve after getting comfortable with one of the two sides first.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'intro-to-mern-stack':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">Introduction to the MERN Stack</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              The MERN stack is a popular and powerful collection of technologies used for building modern, full-stack web applications. It's an acronym that stands for the four key technologies that make up its different layers: <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: "JavaScript Everywhere"</h2>
            <p className="opacity-90">
              A "tech stack" is the set of technologies used to build an application. The MERN stack is popular because it allows developers to use <strong>JavaScript</strong> across the entire application—from the user interface (React) to the server logic (Node.js/Express.js) and even in the database (MongoDB).
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. M - MongoDB (The Database)</h2>
            <p className="opacity-90">
              MongoDB is the database layer. It's a <strong>NoSQL</strong> database, meaning it stores data in flexible, JSON-like documents called <strong>BSON</strong>.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>Role:</strong> Stores and manages all application data (user profiles, posts, etc.).</li>
                  <li><strong>Key Feature:</strong> Its document-based structure is very easy to work with from JavaScript.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. E - Express.js (The Backend Framework)</h2>
            <p className="opacity-90">
              Express.js is a minimal and flexible web application framework that runs on top of Node.js. It simplifies building the backend server and its API.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>Role:</strong> Manages the server-side logic, handles HTTP requests, and interacts with the database.</li>
                  <li><strong>Key Features:</strong> Simplifies routing (defining URLs like `/api/users`) and handling middleware.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. R - React (The Frontend Library)</h2>
            <p className="opacity-90">
              React is a JavaScript library for building user interfaces. It is the frontend (client-side) part of the stack that the user interacts with in their browser.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>Role:</strong> To build a fast, interactive, and dynamic UI.</li>
                  <li><strong>Key Features:</strong> Based on a <strong>component architecture</strong>, where you build reusable UI pieces. It uses the Virtual DOM for high performance.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. N - Node.js (The Backend Runtime)</h2>
            <p className="opacity-90">
              Node.js is the foundation of the MERN backend. It's a JavaScript runtime environment that allows you to run JavaScript code <strong>outside of a web browser</strong>—specifically, on a server.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                  <li><strong>Role:</strong> Provides the environment where the Express.js server runs.</li>
                  <li><strong>Key Feature:</strong> It's built for creating fast and scalable network applications.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. The MERN Workflow: How They Work Together</h2>
            <p className="opacity-90">
              The data flows in a clear cycle through the MERN stack.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                 <li>A user interacts with the <strong>React</strong> frontend.</li>
                 <li>React sends an HTTP request to the backend API.</li>
                 <li>The <strong>Express.js</strong> server, running on <strong>Node.js</strong>, receives the request.</li>
                 <li>Express processes the request, interacts with the <strong>MongoDB</strong> database to get or save data.</li>
                 <li>MongoDB sends the data back to the Express server.</li>
                 <li>Express sends a response back to the React frontend.</li>
                 <li>React receives the response and updates the UI to show the new data.</li>
             </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Why MERN? (Benefits)</h2>
            <p className="opacity-90">
              Developers choose the MERN stack for several key reasons.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>JavaScript Everywhere:</strong> Using one language for both frontend and backend simplifies development.</li>
                <li><strong>High Performance:</strong> React's Virtual DOM and Node.js's non-blocking architecture make MERN apps fast.</li>
                <li><strong>Rich Ecosystem:</strong> All four technologies have massive communities and third-party packages (via npm).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Alternatives to MERN</h2>
            <p className="opacity-90">
              MERN is just one of many popular stacks. Understanding the alternatives helps you see how the pieces can be swapped.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>MEAN:</strong> MongoDB, Express.js, <strong>A</strong>ngular, Node.js</li>
                <li><strong>MEVN:</strong> MongoDB, Express.js, <strong>V</strong>ue.js, Node.js</li>
                <li><strong>PERN:</strong> <strong>P</strong>ostgreSQL, Express.js, React, Node.js</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              The MERN stack is a powerful, modern choice for building full-stack applications, with the primary advantage of using JavaScript for the entire development process.
            </p>
          </div>
        </div>
      );
    case 'dev-env-setup':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">Development Environment Setup</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Setting up a proper development environment is the first practical step for any web developer. A good setup is like a well-organized workshop; it makes your work more efficient, less error-prone, and easier to manage. This chapter covers the essential tools you'll need to install and configure.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Your Digital Workshop</h2>
            <p className="opacity-90">
              Think of your computer as a digital workshop. To build a high-quality website, you need a specific set of professional tools. Each tool has a distinct purpose: one for writing your code, one for running your code, one for tracking your code's history, and one for testing your code.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. Tool 1: The Code Editor (VS Code)</h2>
            <p className="opacity-90">
              A specialized code editor is your primary tool for writing HTML, CSS, and JavaScript. The industry standard is <strong>Visual Studio Code (VS Code)</strong>, a free editor from Microsoft.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Why use it?</strong> It provides syntax highlighting, code completion (IntelliSense), an integrated terminal, and debugging tools.</li>
                <li><strong>Essential Extensions:</strong> You can add features via extensions like "Prettier" (for code formatting) and "ESLint" (for catching errors).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Tool 2: The Runtime (Node.js)</h2>
            <p className="opacity-90">
              You need a way to run JavaScript outside of the browser. <strong>Node.js</strong> is a backend JavaScript runtime environment. Even for frontend development, it's essential for running build tools and package managers.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">
                Download and install Node.js from the official website (Nodejs.org). This will also automatically install `npm`.
              </p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Tool 3: The Package Manager (npm)</h2>
            <p className="opacity-90">
              <strong>npm (Node Package Manager)</strong> is the world's largest software registry. It's a command-line tool that comes with Node.js and allows you to install and manage third-party packages (reusable code libraries) like React or Tailwind CSS.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Check if npm is installed'}<br/>
                {'npm -v'}<br/><br/>
                {'# Install a package (e.g., React)'}<br/>
                {'npm install react'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Tool 4: The Version Control (Git)</h2>
            <p className="opacity-90">
              <strong>Git</strong> is a version control system that tracks changes to your code. It's a "save" button for your entire project's history, allowing you to revert to previous versions and collaborate with others.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">
                You must install Git on your system from the official website (git-scm.com).
              </p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Tool 5: The Code Host (GitHub)</h2>
            <p className="opacity-90">
              <strong>GitHub</strong> is a web-based platform for hosting your Git projects. It's the "cloud backup" for your code and the primary platform for open-source collaboration. You should create a free GitHub account.
            </p>

            <h2 className="text-2xl font-semibold pt-4">7. Tool 6: The Terminal (CLI)</h2>
            <p className="opacity-90">
              The <strong>Command Line Interface (CLI)</strong>, or terminal, is a text-based interface for interacting with your computer. It's essential for running developer tools, using Git, and managing your projects.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">
                VS Code has a convenient integrated terminal, so you can write code and run commands all in one window.
              </p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">8. Tool 7: The Browser (DevTools)</h2>
            <p className="opacity-90">
              A modern web browser like Chrome or Firefox is essential for testing. Its built-in <strong>Developer Tools</strong> (F12) are crucial for debugging.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Elements Tab:</strong> Inspect your live HTML and CSS.</li>
                <li><strong>Console Tab:</strong> See JavaScript errors and log messages.</li>
                <li><strong>Network Tab:</strong> Monitor API requests.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Your environment is your foundation. A proper setup makes development a smooth experience.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">Your typical workflow will be:</h3>
              <ol className="list-decimal ml-6 space-y-2 opacity-90 mt-2">
                <li>Write code in <strong>VS Code</strong>.</li>
                <li>Use the integrated <strong>Terminal</strong> to run <strong>npm</strong> commands and <strong>Git</strong> commands.</li>
                <li>View and debug your running application in the <strong>Browser DevTools</strong>.</li>
                <li>Push your code to <strong>GitHub</strong> to save and share it.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'code-editors-extensions':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">Code Editors & Extensions</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              A code editor is a developer's most important tool. While you can write code in a simple text editor, a modern code editor acts as an intelligent assistant, providing features that dramatically increase speed, reduce errors, and improve code quality. This chapter focuses on the industry-standard editor, VS Code, and its essential extensions.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Developer's Cockpit</h2>
            <p className="opacity-90">
              Think of your code editor as the cockpit of an airplane. A pilot could technically fly with just a stick, but a modern cockpit provides instruments, navigation, and automated checks that make the process safer and more efficient. A good code editor provides you with the tools to navigate complex code, automate repetitive tasks, and catch errors before they happen.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. The Industry Standard: Visual Studio Code</h2>
            <p className="opacity-90">
              Developed by Microsoft, <strong>Visual Studio Code (VS Code)</strong> has become the de facto code editor for web developers. It's free, open-source, fast, and incredibly powerful, thanks to its extensive library of extensions.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Why VS Code?</strong> It strikes the perfect balance between a lightweight editor and a full-fledged Integrated Development Environment (IDE).</li>
                <li>It has built-in support for JavaScript, TypeScript, and Node.js.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Essential Built-in Feature: IntelliSense</h2>
            <p className="opacity-90">
              IntelliSense is a powerful feature that provides smart code completion. As you type, it suggests relevant variables, functions, and methods based on the context of your code. This not only speeds up typing but also helps you discover and use APIs correctly.
            </p>

            <h2 className="text-2xl font-semibold pt-4">4. Essential Built-in Feature: Integrated Terminal</h2>
            <p className="opacity-90">
              VS Code includes a built-in terminal. This is incredibly convenient as it allows you to run command-line tools (like Git, npm, or Node.js) without ever leaving your editor. You can write code and run commands in the same window.
            </p>

            <h2 className="text-2xl font-semibold pt-4">5. Essential Built-in Feature: Debugger</h2>
            <p className="opacity-90">
              VS Code has a built-in debugger primarily for Node.js. It allows you to set "breakpoints" in your code, which are points where the execution will pause. This lets you inspect the values of variables and step through your code line-by-line to find bugs.
            </p>

            <h2 className="text-2xl font-semibold pt-4">6. Essential Built-in Feature: Source Control</h2>
            <p className="opacity-90">
              The editor has a dedicated Source Control tab that integrates directly with Git. It provides a visual interface to see which files you've changed, stage your changes, and write commit messages, making the Git workflow more approachable.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">7. Must-Have Extension: Prettier</h2>
            <p className="opacity-90">
              <strong>Prettier</strong> is an "opinionated code formatter." It automatically formats your code to a consistent style every time you save. This eliminates all arguments about code style (e.g., tabs vs. spaces) and makes your entire project clean and readable.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// Before Prettier\nfunction    myFunction(  a,b   ){ return a+b;}'}<br/><br/>
                {'// After Prettier on save\nfunction myFunction(a, b) {\n  return a + b;\n}'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">8. Must-Have Extension: ESLint</h2>
            <p className="opacity-90">
              <strong>ESLint</strong> is a "linter" that analyzes your code to find and fix problems. It catches potential bugs, enforces coding standards, and helps you avoid common pitfalls. It will underline errors in red directly in your editor, helping you catch mistakes before you even run the code.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              A well-configured editor is your most valuable asset.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Start with VS Code:</strong> It's the industry standard for a reason.</li>
                <li><strong>Install Key Extensions:</strong> At a minimum, install <strong>Prettier</strong> and <strong>ESLint</strong>.</li>
                <li><strong>Learn Keyboard Shortcuts:</strong> Learning shortcuts for common tasks (like opening files, searching, and toggling the terminal) will dramatically increase your speed.</li>
                <li><strong>Customize Your Settings:</strong> Tweak your editor's settings (like font size and theme) to create a comfortable workspace you enjoy.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'terminal-basics':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">Terminal/Command Line Basics</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              The <strong>Command Line Interface (CLI)</strong>, or terminal, is a text-based interface for interacting with your computer. While graphical interfaces (GUIs) are easy to use, the command line is an essential tool for developers, offering speed, power, and automation that GUIs cannot match. Mastering the basics is a fundamental step in becoming a proficient developer.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Direct Conversation with Your OS</h2>
            <p className="opacity-90">
              Think of your GUI (like Windows Explorer) as a receptionist who helps you find files. The command line is a direct phone line to the system's control room. You use specific, text-based commands to tell the computer *exactly* what to do, without any graphical middleman. This is faster and more powerful for development tasks like using Git or npm.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. Why Developers Use the Terminal</h2>
            <p className="opacity-90">
              Developers use the CLI because it is:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Fast & Efficient:</strong> Typing one command is often much faster than clicking through multiple windows and menus.</li>
                <li><strong>Powerful:</strong> Many tools (like Git, Node.js, and build tools) are designed to be run from the command line and offer more options than any GUI.</li>
                <li><strong>Scriptable:</strong> You can chain multiple commands together into a "script" to automate complex, repetitive tasks.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Navigation Commands (Your GPS)</h2>
            <p className="opacity-90">
              The first skill is learning how to move around your computer's file system.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg overflow-x-auto">
              <table className="w-full text-left">
                  <thead className="border-b border-gray-600">
                      <tr><th className="py-2 font-bold">Command</th><th className="py-2 font-bold">Description</th></tr>
                  </thead>
                  <tbody className="opacity-90">
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">pwd</td><td className="py-2"><strong>P</strong>rint <strong>W</strong>orking <strong>D</strong>irectory. Shows you the full path of the folder you are currently in.</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">ls</td><td className="py-2"><strong>L</strong>i<strong>s</strong>t. Shows all files and folders in your current directory. (Use `dir` on Windows).</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">cd</td><td className="py-2"><strong>C</strong>hange <strong>D</strong>irectory. Used to move into a different folder. (e.g., `cd Documents`).</td></tr>
                  </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Special Directory Shortcuts</h2>
            <p className="opacity-90">
              These shortcuts make navigation much faster.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`.` (A single dot):</strong> Represents your <strong>current directory</strong>.</li>
                <li><strong>`..` (Two dots):</strong> Represents the <strong>parent directory</strong> (the folder one level up).</li>
                <li><strong>`~` (Tilde):</strong> Represents your <strong>home directory</strong>.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Go back (up) one folder'}<br/>
                {'cd ..'}<br/><br/>
                {'# Go all the way to your home folder'}<br/>
                {'cd ~'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. File & Folder Manipulation</h2>
            <p className="opacity-90">
              These are the commands for creating, moving, copying, and deleting files and folders.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg overflow-x-auto">
              <table className="w-full text-left">
                  <thead className="border-b border-gray-600">
                      <tr><th className="py-2 font-bold">Command</th><th className="py-2 font-bold">Description</th></tr>
                  </thead>
                  <tbody className="opacity-90">
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">mkdir</td><td className="py-2"><strong>M</strong>a<strong>k</strong>e <strong>Dir</strong>ectory. Creates a new folder. (e.g., `mkdir my-project`).</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">touch</td><td className="py-2">Creates a new, empty file. (e.g., `touch index.html`).</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">cp</td><td className="py-2"><strong>C</strong>o<strong>p</strong>y. Copies a file. (e.g., `cp source.txt destination.txt`).</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">mv</td><td className="py-2"><strong>M</strong>o<strong>v</strong>e. Used to move or rename a file. (e.g., `mv old-name.txt new-name.txt`).</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">rm</td><td className="py-2"><strong>R</strong>e<strong>m</strong>ove. Deletes a file. <strong>Use with caution!</strong></td></tr>
                  </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Understanding Flags and Arguments</h2>
            <p className="opacity-90">
              Most commands can be modified with flags (options) to change their behavior.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Argument:</strong> The "thing" the command acts on (e.g., `my-project` in `mkdir my-project`).</li>
                <li><strong>Flag:</strong> A modifier that changes the command, usually starting with a `-` or `--`.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# "ls" by itself'}<br/>
                {'ls'}<br/>
                {'# Output: Documents  Downloads  Music'}<br/><br/>
                {'# "ls" with the "-l" (long) flag'}<br/>
                {'ls -l'}<br/>
                {'# Output: drwx--x--x 1 user 0 Nov 5 10:00 Documents'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">7. The `PATH` Environment Variable</h2>
            <p className="opacity-90">
              The `PATH` is a list of directories that your terminal searches through when you type a command. This is what allows you to type `node` or `git` from any folder and have it work. The installers for these tools add their location to this `PATH` variable.
            </p>

            <h2 className="text-2xl font-semibold pt-4">8. Tab Completion: Your Best Friend</h2>
            <p className="opacity-90">
              This is the most important timesaving shortcut. Start typing a file or folder name and press the <strong>`Tab`</strong> key. The terminal will automatically complete the name for you. If there are multiple matches, it will show you the options. This saves time and prevents typos.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Becoming comfortable with the command line is a gradual process.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Use the Integrated Terminal in VS Code.</strong> It's convenient and keeps your workflow in one window.</li>
                <li><strong>Use `Tab` Completion.</strong> Always. It's faster and avoids spelling errors.</li>
                <li><strong>Use the Up Arrow.</strong> Press the `Up Arrow` key to cycle through your previously used commands.</li>
                <li><strong>Don't Be Afraid.</strong> Basic navigation (`ls`, `cd`, `pwd`) and creation (`mkdir`, `touch`) commands are safe. Practice in a "test" folder until you are comfortable.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Select a Subchapter</h1>
            <div className="space-y-4">
              <p className="text-lg opacity-90">Please select a topic from the sidebar to view the notes.</p>
            </div>
        </div>
      );
  }
};

export default Chapter1;