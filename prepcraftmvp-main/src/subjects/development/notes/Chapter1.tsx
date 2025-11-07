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

// --- Main Chapter 1 Component ---

const Chapter1 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'what-is-web-development':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">What is Web Development?</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Digital House Builder</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of web development like building a house. You need different specialists to bring it to life:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>HTML (Structure):</strong> The wooden frame, walls, and roof. It provides the core structure, but it's not pretty.</li>
              <li><strong>CSS (Style):</strong> The paint, wallpaper, and furniture. It makes the house look good and feel welcoming.</li>
              <li><strong>JavaScript (Functionality):</strong> The electricity, plumbing, and appliances. It makes the house interactive and functional.</li>
              <li><strong>Backend (The Utility Company):</strong> The power plant and water supply hidden down the street. It provides essential services (like data and security) to the house.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Web Development</strong> is the process of building and maintaining websites and web applications. It is primarily divided into two fields:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Frontend (Client-Side):</strong> This is everything the user sees and interacts with in their <strong>browser</strong> (the "client").
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Core Technologies:</strong> <strong>HTML</strong> (HyperText Markup Language) for structure, <strong>CSS</strong> (Cascading Style Sheets) for styling, and <strong>JavaScript</strong> for interactivity.</li>
                  <li><strong>Frameworks/Libraries:</strong> Modern frontend development relies on tools like <strong>React</strong>, <strong>Angular</strong>, or <strong>Vue.js</strong> to build complex, component-based user interfaces (UIs) efficiently.</li>
                </ul>
              </li>
              <li><strong>Backend (Server-Side):</strong> This is the "engine" of the application that runs on a remote <strong>server</strong>. It is invisible to the user but handles all the core logic.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Responsibilities:</strong> Managing user authentication (logins), processing business logic, handling form submissions, and interacting with the <strong>database</strong> (the application's long-term memory).</li>
                  <li><strong>Technologies:</strong> Server-side languages/runtimes like <strong>Node.js</strong> (which uses JavaScript), <strong>Python</strong> (with Django/Flask), <strong>Java</strong> (with Spring), or <strong>PHP</strong>.</li>
                </ul>
              </li>
              <li>A <strong>Full-Stack Developer</strong> is proficient in both frontend and backend development, able to build a complete application from start to finish.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Three Pillars in Action</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a complete, runnable HTML file that combines all three "pillars". Save it as <Code>index.html</Code> and open it in your browser. Click the button to see all three technologies work together.</p>
            <CodeBlock code={`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Three Pillars Example</title>

  <!-- 2. CSS: The "Skin" (Styling) -->
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      padding-top: 50px;
      background-color: #f4f4f4;
      color: #333;
    }
    #main-heading {
      color: #007BFF;
    }
    #action-button {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }
    #action-button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <!-- 1. HTML: The "Skeleton" (Structure) -->
  <h1 id="main-heading">Hello, Web Development!</h1>
  <p>This is a simple web page.</p>
  <button id="action-button">Click Me</button>

  <!-- 3. JavaScript: The "Brain" (Interactivity) -->
  <script>
    const button = document.getElementById('action-button');
    const heading = document.getElementById('main-heading');

    button.addEventListener('click', () => {
      heading.textContent = 'You clicked the button!';
      heading.style.color = '#28a745';
    });
  </script>

</body>
</html>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>As a new developer, should I learn Frontend or Backend first?</strong>
                <p className="pl-4">Start with the Frontend. The "Three Pillars" (HTML, CSS, JS) are the non-negotiable foundation for *all* web development. You get instant visual feedback in your browser, which makes learning more engaging. You can then move to a library like React, followed by backend technologies like Node.js.</p>
              </li>
              <li>
                <strong>What's the real difference between a web *designer* and a web *developer*?</strong>
                <p className="pl-4">A <strong>designer</strong> (or UI/UX designer) is like the architect. They focus on the *look and feel* of the site—the user's journey, the color schemes, the typography, and the layout. They typically produce visual mockups in tools like Figma. A <strong>developer</strong> is the builder. They take those designs and write the actual code (HTML, CSS, JS) to make them functional and interactive.</p>
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
    case 'client-server-architecture':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Client-Server Architecture</h2>

          <h3 className="text-2xl font-bold mb-3">Analogy: The Restaurant</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The Client-Server model is the backbone of the internet and works exactly like a restaurant:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>You (The Client):</strong> You are in the dining room (the browser) and want food. You don't have any food yourself.</li>
              <li><strong>The Waiter (The API/Network):</strong> You give your order (a "request") to the waiter. The waiter follows a specific protocol to take the order to the kitchen.</li>
              <li><strong>The Kitchen (The Server):</strong> This is the powerful, hidden backend. It receives the order, processes it (cooks the food), and finds the necessary ingredients (data from a database).</li>
              <li><strong>The Waiter Returns:</strong> The waiter brings the finished food (the "response") back to you, the client, to be "rendered" (eaten).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This model is a <strong>distributed application structure</strong> that separates tasks between resource providers (servers) and resource requesters (clients).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Client:</strong> The "requester." This is the user-facing application, such as a <strong>web browser</strong> or a <strong>mobile app</strong>. It is responsible for the User Interface (UI) and initiating requests.</li>
              <li><strong>Server:</strong> The "provider." This is a powerful, centralized computer that is <strong>always-on</strong>, passively listening for requests. It is responsible for <strong>business logic</strong>, <strong>data storage (database)</strong>, and <strong>security</strong>.</li>
              <li><strong>Network (HTTP):</strong> Clients and servers communicate over a network using a set of rules called a <strong>protocol</strong>. For the web, this is the <strong>HTTP (Hypertext Transfer Protocol)</strong>.</li>
              <li><strong>Request-Response Cycle:</strong> The entire interaction follows this cycle:
                <ol className="list-decimal ml-6 mt-2">
                  <li>Client sends an <strong>HTTP Request</strong> (e.g., `GET /api/users`).</li>
                  <li>Server receives the request, processes it (e.g., queries the database), and prepares a response.</li>
                  <li>Server sends back an <strong>HTTP Response</strong> (e.g., `200 OK` with JSON data).</li>
                  <li>Client receives the response and renders it (e.g., displays the list of users).</li>
                </ol>
              </li>
              <li><strong>Statelessness:</strong> Modern servers are typically <strong>stateless</strong>. This means the server does not remember anything about the client from previous requests. Each request must contain all the information necessary to be processed (like an <strong>authentication token</strong>). This makes it much easier to <strong>scale</strong> the application by adding more servers.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Live Client-Server Demo</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example shows a complete, runnable client-server model. You must run these in two separate terminal windows.</p>
            
            <p className="font-semibold mt-2">1. The Server (Save as <Code>server.mjs</Code> and run <Code>node server.mjs</Code>)</p>
            <CodeBlock code={`
// This is the SERVER (using Node.js 'http' module)
// We use .mjs to enable ES Module syntax (import/export)
import http from 'http';

const server = http.createServer((req, res) => {
  // Set CORS headers to allow the client (from a different origin) to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  // Handle the API request from the client
  if (req.url === '/api/user') {
    res.writeHead(200); // 200 OK
    // Send back a JSON response
    res.end(JSON.stringify({ id: 1, name: 'Alex' }));
  } else {
    res.writeHead(404); // 404 Not Found
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080...');
});
            `} language="javascript" />

            <p className="font-semibold mt-2">2. The Client (Save as <Code>client.html</Code> and open in your browser)</p>
            <CodeBlock code={`
<!-- This is the CLIENT (Browser) -->
<!DOCTYPE html>
<html>
<head>
  <title>Client</title>
  <style>
    body { font-family: sans-serif; padding: 20px; color: #333; }
    button { font-size: 16px; padding: 8px; }
    #data-container { margin-top: 20px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Client-Server Example</h1>
  <button id="fetch-button">Get Data from Server</button>
  <p id="data-container">No data yet.</p>

  <script>
    const button = document.getElementById('fetch-button');
    const dataContainer = document.getElementById('data-container');

    button.addEventListener('click', () => {
      dataContainer.textContent = 'Loading...';

      // 1. Client sends an HTTP Request to the server
      fetch('http://localhost:8080/api/user')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // 4. Client renders the server's response
          dataContainer.textContent = \`User ID: \${data.id}, Name: \${data.name}\`;
        })
        .catch(error => {
          dataContainer.textContent = 'Error: ' + error.message;
        });
    });
  </script>
</body>
</html>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Why is 'statelessness' so important for modern apps?</strong>
                <p className="pl-4">Because it allows for massive <strong>scalability</strong>. If a server is "stateful," it stores user info (like login status) in its memory. If that server crashes, the user's data is lost. It also means you can't easily balance requests between multiple servers. In a <strong>stateless</strong> model, any server can handle any request, because all the info (like a JWT token) is sent *with* the request. This means you can run 100 identical copies of your server behind a load balancer to handle millions of users.</p>
              </li>
              <li>
                <strong>Can my client and server be on the same machine?</strong>
                <p className="pl-4">Yes. When you are developing (like in the example above), you are running both the Node.js server (`localhost:8080`) and the client (your browser) on the same machine. In production, the server runs on a powerful, dedicated computer in a data center (e.g., on AWS or Azure), and the client runs on your user's laptop or phone, thousands of miles away.</p>
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
    case 'frontend-vs-backend':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Frontend vs. Backend vs. Full Stack</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Restaurant (Again!)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the best analogy for separating these roles:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Frontend Developer (The Dining Room Staff):</strong> They are responsible for everything the customer sees and interacts with. Their job is to make the experience pleasant and functional. They handle the decor (CSS), the menus (HTML), and the process of taking your order (JavaScript interactivity).</li>
              <li><strong>Backend Developer (The Kitchen Staff):</strong> They are responsible for the hidden "engine" of the restaurant. Their job is to prepare the food (process logic), manage the pantry (database), and ensure the kitchen is secure and efficient. The customer never sees them, but they are essential.</li>
              <li><strong>Full-Stack Developer (The Restaurant Owner):</strong> They can do it all. They know how to design the dining room, run the kitchen, and manage the finances. They have a complete, holistic view of the entire operation.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="py-2 pr-4 text-lg">Role</th>
                  <th className="py-2 pr-4 text-lg">Core Responsibility</th>
                  <th className="py-2 pr-4 text-lg">Key Technologies</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-bold align-top"><strong>Frontend</strong><br/>(Client-Side)</td>
                  <td className="py-3 pr-4 align-top">Building the <strong>User Interface (UI)</strong>. Runs in the user's browser. Concerned with *how it looks* and *feels*.</td>
                  <td className="py-3 pr-4 align-top"><Code>HTML</Code>, <Code>CSS</Code>, <Code>JavaScript</Code>, <Code>React</Code>, <Code>Angular</Code>, <Code>Vue.js</Code></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-bold align-top"><strong>Backend</strong><br/>(Server-Side)</td>
                  <td className="py-3 pr-4 align-top">Building the <strong>logic and data layer</strong>. Runs on a remote server. Concerned with *how it works*.</td>
                  <td className="py-3 pr-4 align-top"><Code>Node.js</Code>, <Code>Python</Code>, <Code>Java</Code>, <Code>MongoDB</Code>, <Code>SQL</Code>, <Code>APIs</Code></td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold align-top"><strong>Full Stack</strong></td>
                  <td className="py-3 pr-4 align-top">Proficient in *both* frontend and backend. Can build a complete application from end-to-end.</td>
                  <td className="py-3 pr-4 align-top">All of the above. A popular stack is <strong>MERN</strong> (MongoDB, Express, React, Node).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Full-Stack MERN Application</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a complete Full-Stack "MERN" example. Run both files in separate terminals. The React Frontend (R) fetches data from the Express/Node Backend (E/N).</p>
            
            <p className="font-semibold mt-2">1. The Backend (Save as <Code>server.js</Code>, run <Code>npm install express cors</Code>, then <Code>node server.js</Code>)</p>
            <CodeBlock code={`
// Backend (Express + Node)
import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors()); // Allow frontend to make requests

// This is the API endpoint the frontend will call
app.get('/api/data', (req, res) => {
  // The backend's job: provide data
  res.json({ message: 'Hello from the Backend Server!' });
});

app.listen(port, () => {
  console.log(\`Backend server listening on http://localhost:\${port}\`);
});
            `} language="javascript" />

            <p className="font-semibold mt-2">2. The Frontend (A simple React <Code>App.tsx</Code>. Run <Code>npx create-react-app my-app --template typescript</Code> and replace <Code>src/App.tsx</Code> with this)</p>
            <CodeBlock code={`
// Frontend (React)
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    // The frontend's job: fetch data from the backend API
    fetch('http://localhost:8080/api/data')
      .then(response => response.json())
      .then((data: { message: string }) => {
        setMessage(data.message); // Update state with backend data
      })
      .catch(err => {
        setMessage('Failed to load data from server.');
      });
  }, []); // Empty array means this runs once on mount

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Frontend (React)</h1>
      <p>Data from server: <strong>{message}</strong></p>
    </div>
  );
}

export default App;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Is JavaScript a frontend or backend language?</strong>
                <p className="pl-4">Both! This is a common point of confusion. <strong>JavaScript</strong> is the language. For decades, it ran *only* in the browser (Frontend). With the creation of <strong>Node.js</strong>, JavaScript can now *also* be run on a server (Backend). You use the same language but for different purposes and with different built-in tools (APIs).</p>
              </li>
              <li>
                <strong>Do I have to be a Full-Stack developer to get a job?</strong>
                <p className="pl-4">Absolutely not. Most developers specialize. In large companies, you are almost always hired as *either* a "Frontend Engineer" or a "Backend Engineer." In startups, full-stack roles are more common. The best strategy is to specialize in one (e.g., React Frontend) while still understanding the basics of the other (how to consume an API from a Node.js backend).</p>
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
    case 'intro-to-mern-stack':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Introduction to the MERN Stack</h2>

          <h3 className="text-2xl font-bold mb-3">Analogy: The All-JavaScript Restaurant</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A "stack" is the set of technologies used to build an application. The MERN stack is a popular choice because every single part of it runs on JavaScript. It's like a restaurant where the waitstaff, chefs, and even the inventory system (database) all speak the same language (JavaScript).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>React (Frontend):</strong> The waiter who takes your order (speaks JavaScript).</li>
              <li><strong>Node.js (Backend Runtime):</strong> The kitchen environment (powered by JavaScript).</li>
              <li><strong>Express.js (Backend Framework):</strong> The head chef who organizes the kitchen and processes orders (speaks JavaScript).</li>
              <li><strong>MongoDB (Database):</strong> The pantry where data is stored in a format (JSON/BSON) that looks and feels just like a JavaScript object.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The <strong>MERN</strong> stack is an end-to-end stack that uses JavaScript for all layers of the application. This allows for a seamless development process, as developers don't need to switch languages or contexts.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>M - MongoDB:</strong> A <strong>NoSQL (document) database</strong>. It stores data in flexible, JSON-like documents called <strong>BSON</strong>. This is perfect for JavaScript because the data is already in a format that JS understands, eliminating the need for complex data mapping (ORMs).</li>
              <li><strong>E - Express.js:</strong> A minimal and flexible <strong>backend framework</strong> that runs on top of Node.js. It provides a robust set of features for building web and mobile applications, specifically for creating <strong>RESTful APIs</strong> (defining routes, handling requests, and managing middleware).</li>
              <li><strong>R - React:</strong> A declarative, component-based <strong>frontend library</strong> for building user interfaces. It is responsible for everything the user sees and interacts with in the browser. It communicates with the Express backend by fetching data from its API.</li>
              <li><strong>N - Node.js:</strong> A <strong>JavaScript runtime environment</strong> built on Chrome's V8 engine. It is the foundation of the backend, allowing JavaScript to run on the server. Express.js is a framework that runs *inside* the Node.js environment.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The "ERN" of MERN</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a minimal "MERN" example (minus the database for simplicity). It shows the <Code>E</Code>, <Code>R</Code>, and <Code>N</Code> parts working together to pass a message from the backend to the frontend.</p>

            <p className="font-semibold mt-2">1. Backend (Express + Node) (Save as <Code>server.mjs</Code>, run <Code>npm install express cors</Code>, then <Code>node server.mjs</Code>)</p>
            <CodeBlock code={`
import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors());

// This is the API endpoint
app.get('/api/message', (req, res) => {
  res.json({ text: 'Hello from the MERN Backend!' });
});

app.listen(port, () => {
  console.log(\`Backend (E+N) listening on port \${port}\`);
});
            `} language="javascript" />

            <p className="font-semibold mt-2">2. Frontend (React) (In your React <Code>App.tsx</Code>)</p>
            <CodeBlock code={`
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    // Fetch from the E+N backend
    fetch('http://localhost:8080/api/message')
      .then(res => res.json())
      .then((data: { text: string }) => setMessage(data.text));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Frontend (R)</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the main advantage of MERN over another stack, like one using Python or Java?</strong>
                <p className="pl-4">The primary advantage is <strong>"JavaScript Everywhere."</strong> A single language is used for the database (MongoDB queries are JS-like), the backend (Node/Express), and the frontend (React). This reduces the "context switching" for developers, simplifies the build process, and allows code to be shared between the frontend and backend.</p>
              </li>
              <li>
                <strong>What's the difference between Node.js and Express.js?</strong>
                <p className="pl-4">This is a key concept. <strong>Node.js</strong> is the *runtime*—it's the "engine" that lets you run JS on a server. By itself, it's very low-level. <strong>Express.js</strong> is a *framework* that runs *on* Node.js. It gives you easy-to-use tools for common backend tasks, like handling routes (e.g., `/api/users`), parsing request bodies, and managing middleware.</p>
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
    case 'dev-env-setup':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Development Environment Setup</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Digital Workshop</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Setting up your environment is like organizing a professional workshop before you start building. You can't just use a hammer for everything. You need:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Your Workbench (Code Editor):</strong> A clean, well-lit space to do your work. This is <strong>VS Code</strong>.</li>
              <li><strong>Your Power Tools (Runtime):</strong> The engine that makes your tools run. This is <strong>Node.js</strong>.</li>
              <li><strong>Your Tool Catalog (Package Manager):</strong> A catalog to order any specialized tool you need (like a "React-wrench"). This is <strong>npm</strong>.</li>
              <li><strong>Your Lab Notebook (Version Control):</strong> A detailed log of every change you make, so you can undo mistakes or see what you did last week. This is <strong>Git</strong>.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A professional <strong>Development Environment</strong> is the set of core tools all developers install on their local machine. For MERN stack development, this consists of four essential, non-negotiable components:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>1. Code Editor:</strong> A text editor built for programming.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Tool:</strong> <strong>Visual Studio Code (VS Code)</strong>. It is the free, open-source industry standard. It features code completion (<strong>IntelliSense</strong>), an <strong>integrated terminal</strong>, and <strong>Git integration</strong>.</li>
                </ul>
              </li>
              <li><strong>2. Runtime Environment:</strong> The engine that runs your server-side code.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Tool:</strong> <strong>Node.js</strong>. This lets you run JavaScript outside the browser. It is required for running your backend and also for running the build tools and development servers for frontend frameworks like React.</li>
                </ul>
              </li>
              <li><strong>3. Package Manager:</strong> A command-line tool to install and manage third-party libraries (reusable code packages).
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Tool:</strong> <strong>npm (Node Package Manager)</strong>. This is installed automatically when you install Node.js. It reads a file called <Code>package.json</Code> to manage your project's <strong>dependencies</strong>.</li>
                </ul>
              </li>
              <li><strong>4. Version Control System (VCS):</strong> A system that tracks and saves the history of your code changes.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Tool:</strong> <strong>Git</strong>. This is the global standard. It allows you to save "snapshots" (<strong>commits</strong>) of your code, work in separate <strong>branches</strong>, and collaborate with other developers. <strong>GitHub</strong> is a popular cloud service for hosting your Git repositories.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Verifying Your Setup</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is not a single file, but a sequence of commands you must type in your <strong>Terminal (Command Line)</strong> to verify your environment is working. This is the first-day-on-the-job test.</p>
            <CodeBlock code={`
# 1. Check if Node.js is installed
# (This also checks if npm is installed)
node -v

# Expected: v20.10.0 (or any recent version)
npm -v
# Expected: 10.2.3 (or any recent version)

# 2. Check if Git is installed
git --version
# Expected: git version 2.40.0 (or any version)

# 3. Create a new project folder and move into it
mkdir my-test-project
cd my-test-project

# 4. Initialize a new Node.js project
# This creates the 'package.json' file
npm init -y

# 5. Initialize a new Git repository
# This creates the hidden '.git' folder
git init

# 6. Open this folder in your code editor
# (This command works for VS Code if installed correctly)
code .
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between Node.js and npm?</strong>
                <p className="pl-4"><strong>Node.js</strong> is the *runtime*—it's the "engine" that executes JavaScript code on your machine. <strong>npm</strong> is the *package manager*—it's the "tool catalog" you use to download and install new tools (packages) for your project, like React or Express.</p>
              </li>
              <li>
                <strong>What's the difference between Git and GitHub?</strong>
                <p className="pl-4"><strong>Git</strong> is the *software* you install on your computer. It's the command-line tool that does the work of tracking your files and saving history. <strong>GitHub</strong> is a *website* (a cloud service). It's a place to store (or "host") your Git projects, collaborate with others, and manage your portfolio. You use Git to push your code *to* GitHub.</p>
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
    case 'code-editors-extensions':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Code Editors & Essential Extensions</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Smart Workbench</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>If your code editor (VS Code) is your workbench, extensions are the attachments that make it "smart."</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Plain Text Editor:</strong> A wobbly card table.</li>
              <li><strong>VS Code (Built-in):</strong> A solid, sturdy workbench with a built-in ruler (IntelliSense) and power outlet (Integrated Terminal).</li>
              <li><strong>VS Code + Extensions:</strong> A smart workbench with...
                <ul>
                  <li><strong>A self-cleaning surface (Prettier):</strong> It automatically tidies up your code every time you're done.</li>
                  <li><strong>A safety-check system (ESLint):</strong> Alarms go off *before* you make a mistake, warning you of potential bugs.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Your <strong>Code Editor</strong> is your most important daily tool. <strong>Visual Studio Code (VS Code)</strong> is the industry standard due to its performance and rich ecosystem of <strong>extensions</strong> (plugins).</p>
            <p><strong>Built-in Features to Master:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>IntelliSense:</strong> Smart code completion that suggests functions, variables, and methods as you type.</li>
              <li><strong>Integrated Terminal:</strong> A built-in command line so you can run `npm`, `git`, and other commands without leaving the editor.</li>
              <li><strong>Source Control (Git) Panel:</strong> A GUI for managing your Git changes, staging files, and writing commit messages.</li>
              <li><strong>Debugger:</strong> A tool for pausing your code's execution (using <strong>breakpoints</strong>) to inspect variables and find bugs.</li>
            </ul>
            <p><strong>Essential Extensions to Install:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Prettier - Code formatter:</strong> An **opinionated code formatter**. It *only* handles code *style* (spacing, line breaks, semicolons). Its job is to make all code in the project look identical, ending all stylistic arguments.</li>
              <li><strong>ESLint:</strong> A <strong>static code analysis tool (linter)</strong>. Its job is to find *bugs* and *bad patterns* in your code, such as unused variables, logic errors, or code that doesn't follow best practices.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Configuring "Format on Save"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the single most important productivity boost. After installing the <strong>Prettier</strong> extension, you can force VS Code to format your code automatically every time you press save.</p>
            <p>Create a folder named <Code>.vscode</Code> in your project's root, and inside it, a file named <Code>settings.json</Code>. Paste this in:</p>
            <CodeBlock code={`
{
  // Sets Prettier as the default formatter for these languages
  // This ensures VS Code knows *which* formatter to use
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // This is the magic line:
  // It tells VS Code to format the entire file every time you press (Ctrl+S or Cmd+S).
  "editor.formatOnSave": true
}
            `} language="json" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between a Linter (ESLint) and a Formatter (Prettier)?</strong>
                <p className="pl-4">This is a classic question. A <strong>Formatter (Prettier)</strong> only cares about <strong>style</strong> (e.g., "should this line break?"). A <strong>Linter (ESLint)</strong> cares about <strong>code quality and potential bugs</strong> (e.g., "you defined a variable but never used it, which could be a bug."). They work together: ESLint finds the bugs, and Prettier fixes the style.</p>
              </li>
              <li>
                <strong>Why use the integrated terminal instead of my computer's built-in one?</strong>
                <p className="pl-4"><strong>Speed and context.</strong> The VS Code terminal automatically opens *at your project's root directory*. You don't have to <Code>cd</Code> into your project every time. It also allows you to have your code editor and your server's logs visible in the same window, which is much more efficient than switching between windows.</p>
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
    case 'terminal-basics':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Terminal/Command Line Basics</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Driving a Manual vs. Automatic Car</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Using a graphical interface (GUI) with a mouse is like driving an automatic car. It's easy, intuitive, and gets you where you need to go.</p>
            <p>Using the <strong>Command Line Interface (CLI)</strong>, or "terminal," is like driving a manual transmission. It feels awkward and difficult at first, and you might stall. But once you're proficient, you have far more power, speed, and direct control over the machine. All professional developer tools (like Git and npm) are built to be run from the command line.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The <strong>CLI</strong> is a text-based interface for interacting with your computer's operating system. You type commands to navigate, create files, and run programs. This is essential for developers.</p>
            <p><strong>The Core Navigation Commands:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><Code>pwd</Code> (Print Working Directory): Shows the full path of the folder you are currently in. (Your "GPS").</li>
              <li><Code>ls</Code> (List): Lists all files and sub-folders in your current directory. (Use <Code>dir</Code> on Windows CMD).</li>
              <li><Code>cd [folderName]</Code> (Change Directory): Moves you into a sub-folder.
                <ul>
                  <li><strong>Pro-Tip (Tab Completion):</strong> Type <Code>cd Docu</Code> and press the <strong>Tab</strong> key. The shell will auto-complete it to <Code>cd Documents</Code>. This is the single most important shortcut.</li>
                </ul>
              </li>
              <li><Code>cd ..</Code>: Moves you *up* one directory (to the parent folder).</li>
              <li><Code>cd ~</Code>: Moves you directly to your <strong>home</strong> directory.</li>
            </ul>
            <p><strong>File Manipulation Commands:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><Code>mkdir [folderName]</Code> (Make Directory): Creates a new folder.</li>
              <li><Code>touch [fileName]</Code> (Create File): Creates a new, empty file. (Use <Code>echo. &gt; fileName</Code> on Windows CMD).</li>
              <li><Code>rm [fileName]</Code> (Remove): Deletes a file.</li>
              <li><Code>rm -r [folderName]</Code> (Remove Recursive): Deletes a folder and *everything* inside it. <strong>(EXTREMELY DANGEROUS! There is no "undo.")</strong></li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Real Developer Workflow</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a runnable script. Open your terminal (or the integrated terminal in VS Code) and type these commands one by one to simulate a full project setup workflow.</p>
            <CodeBlock code={`
# 1. See where you are (e.g., /Users/YourName)
pwd

# 2. Create a new folder for our project
mkdir my-new-project

# 3. Move into that new folder
# (Try using Tab completion here!)
cd my-new-project

# 4. Check that you are in the new folder
pwd
# Output: /Users/YourName/my-new-project

# 5. Create a new file for your HTML
touch index.html

# 6. Create another folder for styles
mkdir css

# 7. List the contents of the directory
ls
# Output: css   index.html

# 8. Move into the css folder
cd css

# 9. Create a style file
touch style.css

# 10. Move back up to the project root
cd ..

# 11. Open the entire project in VS Code
code .
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the point of this if I can just right-click and "New Folder"?</strong>
                <p className="pl-4"><strong>Speed and Automation.</strong> The example above involves 7 distinct actions. You can type those 7 commands in about 10 seconds. Doing the same with a mouse (right-click, new folder, rename, open, right-click, new file, rename, etc.) is significantly slower. More importantly, you cannot automate mouse clicks, but you *can* save those 7 commands into a <strong>shell script</strong> to run them all instantly with one command.</p>
              </li>
              <li>
                <strong>What's the most important command to learn?</strong>
                <p className="pl-4">It's not a command, it's a key: <strong>Tab Completion</strong>. Pressing `Tab` to auto-complete file and folder names saves you time and, more importantly, prevents the "No such file or directory" error from typos. Your second-best friend is the <strong>Up Arrow</strong> key, which cycles through your previous commands.</p>
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

export default Chapter1;