import React from 'react';

export const FrontendVsBackend: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">Frontend vs Backend vs Full Stack</h1>
      <div className="space-y-4">

        <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Restaurant Analogy 🧑‍🍳</h2>
        <p className="opacity-90">
          If a website or web application were a restaurant, the roles would be divided like this:
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Frontend (The Dining Room):</strong> This is everything the customer sees and interacts with—the decor, the tables, the menus, the lighting. Its job is to be appealing, easy to use, and functional for the customer.</li>
          <li><strong>Backend (The Kitchen):</strong> This is the hidden engine. It has the raw ingredients (data), the recipes (logic), and the appliances (database, servers). It takes orders from the frontend, processes them, and sends the finished food back.</li>
          <li><strong>Full Stack (The Restaurant Manager):</strong> This is the person who understands the *entire* operation. They can manage the kitchen, design the dining room, and ensure they work together smoothly.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">2. What is Frontend Development? (The "Client-Side")</h2>
        <p className="opacity-90">
          The frontend is everything you see and interact with in your browser. It's often called the "client-side" because the code (HTML, CSS, JS) is run on the client's (user's) computer.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Analogy:</strong> The dashboard, steering wheel, and pedals of a car. It's the part you use to control and experience the machine.</li>
          <li><strong>Core Goal:</strong> To create a seamless, fast, and engaging User Interface (UI) and User Experience (UX).</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">3. Frontend Technologies (The Toolbox)</h2>
        <p className="opacity-90">
          Frontend developers use three core languages, plus frameworks to make their job easier.
        </p>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold">The Core Trio:</h3>
          <ul className="list-disc ml-6 space-y-1 opacity-90 text-sm">
            <li><strong>HTML:</strong> Provides the structure (the "skeleton").</li>
            <li><strong>CSS:</strong> Provides the style (the "skin" and "clothes").</li>
            <li><strong>JavaScript:</strong> Provides the interactivity (the "brain" and "muscles").</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="font-bold">Frameworks & Libraries:</h3>
          <p className="text-sm opacity-90">Pre-built toolkits to build apps faster.</p>
          <pre className="mt-2 p-2 bg-black rounded text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap break-words"><code>{`// Example: React (A JavaScript Library)
function HelloButton() {
  return <button>Click Me!</button>;
}`}</code></pre>
        </div>

        <h2 className="text-2xl font-semibold pt-4">4. Frontend Developer Responsibilities</h2>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li>Translating UI/UX designs from tools like Figma into responsive HTML/CSS code.</li>
          <li>Building interactive features using JavaScript or frameworks like React/Vue/Angular.</li>
          <li>Ensuring the website works well on all devices (desktops, tablets, phones).</li>
          <li>Calling backend APIs to get data (e.g., fetch user profile) and display it.</li>
          <li>Optimizing the website to be fast and accessible.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">5. What is Backend Development? (The "Server-Side")</h2>
        <p className="opacity-90">
          The backend is the hidden part of the application that the user never sees. It runs on a remote computer called a "server." Its job is to manage data, security, and business logic.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Analogy:</strong> The engine, fuel tank, and computer of a car. It's the complex machinery under the hood that makes the dashboard and pedals actually *do* something.</li>
          <li><strong>Core Goal:</strong> To process requests securely, manage data reliably, and perform complex operations.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">6. Backend Technologies (The Toolbox)</h2>
        <p className="opacity-90">
          Backend developers work with server-side languages, databases, and APIs.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Server-Side Languages:</strong> Node.js (JavaScript), Python (Django, Flask), Java (Spring), PHP (Laravel), C# (.NET).</li>
          <li><strong>Databases:</strong> Where data is stored.
            <ul>
              <li><strong>SQL (Relational):</strong> PostgreSQL, MySQL (like Excel spreadsheets).</li>
              <li><strong>NoSQL (Non-Relational):</strong> MongoDB, Firebase (like JSON files).</li>
            </ul>
          </li>
          <li><strong>APIs (Application Programming Interfaces):</strong> The "messenger" that allows the frontend to request data from the backend.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">7. Backend Developer Responsibilities</h2>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li>Building and maintaining the core logic of the application.</li>
          <li>Creating secure APIs for the frontend to consume.</li>
          <li>Managing user authentication (login, signup, passwords) and security.</li>
          <li>Interacting with the database to Create, Read, Update, and Delete (CRUD) data.</li>
          <li>Optimizing the application for speed and scalability.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">8. What is Full Stack Development?</h2>
        <p className="opacity-90">
          A Full Stack Developer is a "jack-of-all-trades" (and often a master of one or two). They are proficient in *both* frontend and backend development. They understand the entire "stack" of technologies, from the user interface down to the database.
        </p>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li><strong>Analogy:</strong> A general contractor who can build a house's foundation, frame the walls, handle the plumbing (backend), and also paint, and install the fixtures (frontend).</li>
          <li><strong>Common Stack:</strong> The MERN stack (MongoDB, Express.js, React, Node.js) is a popular full-stack choice because it uses JavaScript for both frontend and backend.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">9. Full Stack Developer Responsibilities</h2>
        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li>Designing and building entire web applications from start to finish.</li>
          <li>Working on both the client-side and server-side of a feature.</li>
          <li>Understanding the "big picture" of how all the different parts of the system connect.</li>
          <li>Managing the database, server, and client-side code.</li>
          <li><strong>Value:</strong> In high demand, especially in startups and as team leads, because they can oversee the entire development process.</li>
        </ul>

      </div>
    </div>
  );
};

export const frontendVsBackendMeta = {
  id: 'frontend-vs-backend',
  title: 'Frontend vs Backend vs Full Stack',
  difficulty: 'beginner',
  points: 5,
  estimatedTime: '10 min'
};

