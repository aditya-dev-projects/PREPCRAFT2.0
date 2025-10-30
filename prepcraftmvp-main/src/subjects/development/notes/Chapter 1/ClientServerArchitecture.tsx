import React from 'react';

export const ClientServerArchitecture: React.FC = () => {
  return (
      <div className="p-6 bg-gray-800 text-white">
  <h1 className="text-3xl font-bold mb-4">Client-Server Architecture</h1>
  <div className="space-y-4">
    
    <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Restaurant Analogy 🍽️</h2>
    <p className="opacity-90">
      The Client-Server model is the most common structure for web applications. It's a system that divides tasks between two types of computers:
    </p>
    <ul className="list-disc ml-6 space-y-2 opacity-90">
      <li><strong>The Client:</strong> The "requester." This is the computer that *asks* for information or services.</li>
      <li><strong>The Server:</strong> The "responder." This is the computer that *provides* the information or services.</li>
    </ul>
    <p className="opacity-90">
      <strong>Analogy:</strong> Think of a restaurant. You (the <strong>Client</strong>) sit at a table and make a request (an order) to the waiter. The waiter takes your request to the kitchen (the <strong>Server</strong>). The kitchen processes your request and gives the food back to the waiter, who delivers it to you.
    </p>

    <h2 className="text-2xl font-semibold pt-4">2. What is a Client?</h2>
    <p className="opacity-90">
      The client is the application that the end-user interacts with. Its main job is to provide a user interface (UI) and send requests to a server.
    </p>
    <ul className="list-disc ml-6 space-y-2 opacity-90">
      <li><strong>Primary Role:</strong> Sending requests and displaying responses.</li>
      <li><strong>Examples:</strong>
        <ul>
          <li>A <strong>web browser</strong> (like Chrome, Firefox) is a client that requests web pages.</li>
          <li>A <strong>mobile app</strong> (like Instagram, Spotify) is a client that requests data (like photos, songs).</li>
          <li>An <strong>email program</strong> (like Outlook) is a client that requests emails from a mail server.</li>
        </ul>
      </li>
    </ul>

    <h2 className="text-2xl font-semibold pt-4">3. What is a Server?</h2>
    <p className="opacity-90">
      A server is a powerful computer (or software running on one) that is always on, *listening* for incoming requests from clients. Its main job is to process these requests, perform logic, and send back a response.
    </p>
    <ul className="list-disc ml-6 space-y-2 opacity-90">
      <li><strong>Primary Role:</strong> Listening for requests, processing them, and sending responses.</li>
      <li><strong>Common Tasks:</strong>
        <ul>
          <li><strong>Storing Data:</strong> Managing a database with user info, posts, etc.</li>
          <li><strong>Running Logic:</strong> Authenticating a user (checking a password), calculating a shopping cart total.</li>
          <li><strong>Serving Files:</strong> Sending HTML, CSS, JavaScript, and images to a browser.</li>
        </ul>
      </li>
    </ul>

    <h2 className="text-2xl font-semibold pt-4">4. The Network: How They Talk</h2>
    <p className="opacity-90">
      Clients and servers don't talk directly. They communicate over a network, which is most commonly the <strong>internet</strong>. To ensure they understand each other, they use a set of rules called a <strong>protocol</strong>.
    </p>
    <div className="p-4 bg-gray-700 rounded-lg">
      <h3 className="font-bold">HTTP: The Language of the Web</h3>
      <p className="text-sm opacity-90">
        The most common protocol is <strong>HTTP (Hypertext Transfer Protocol)</strong>. It defines the format of the <strong>requests</strong> and <strong>responses</strong>.
      </p>
      <ul className="list-disc ml-6 space-y-1 opacity-90 text-sm">
        <li>A client sends an <strong>HTTP Request</strong> (e.g., `GET /profile` to get a user's profile).</li>
        <li>A server sends an <strong>HTTP Response</strong> (e.g., `200 OK` with the profile data as JSON or HTML).</li>
      </ul>
    </div>

    <h2 className="text-2xl font-semibold pt-4">5. The Request-Response Cycle</h2>
    <p className="opacity-90">
      This is the fundamental interaction in all client-server communication.
    </p>
    <ol className="list-decimal ml-6 space-y-2 opacity-90">
      <li><strong>User Action:</strong> The user clicks a link (e.g., "Home").</li>
      <li><strong>Client Request:</strong> The browser (client) creates an HTTP request: `GET /home`.</li>
      <li><strong>Network:</strong> The request is sent over the internet to the server's unique address (its IP address).</li>
      <li><strong>Server Processing:</strong> The server receives the request, finds the files for the home page, and maybe fetches some user data from a database.</li>
      <li><strong>Server Response:</strong> The server bundles the HTML, CSS, and JS into an HTTP response and sends it back.</li>
      <li><strong>Client Rendering:</strong> The browser receives the response and "renders" (draws) the home page on the screen.</li>
    </ol>

    <h2 className="text-2xl font-semibold pt-4">6. Architecture Tiers (2-Tier vs 3-Tier)</h2>
    <p className="opacity-90">
      This model can be simple or complex depending on the application's needs.
    </p>
    <ul className="list-disc ml-6 space-y-2 opacity-90">
      <li><strong>2-Tier Architecture:</strong> The simplest form. The <strong>Client</strong> talks directly to the <strong>Server</strong>, which often holds the database and business logic. Good for simple apps.</li>
      <li><strong>3-Tier Architecture:</strong> The most common professional setup. It separates logic into three layers:
        <ol className="list-decimal ml-6 mt-2">
          <li><strong>Presentation Tier (Client):</strong> The UI in your browser.</li>
          <li><strong>Logic Tier (Application Server):</strong> Handles the business logic (like logging in, processing payments).</li>
          <li><strong>Data Tier (Database Server):</strong> A separate server dedicated only to storing and retrieving data.</li>
        </ol>
      </li>
    </ul>

    <h2 className="text-2xl font-semibold pt-4">7. "Thin Client" vs. "Fat Client"</h2>
    <p className="opacity-90">
      This describes how much work the client is responsible for.
    </p>
    <ul className="list-disc ml-6 space-y-2 opacity-90">
      <li><strong>Thin Client (e.g., Traditional Websites):</strong> The server does almost all the work (running logic, building the HTML). The client (browser) is "thin" because it just displays the final page.</li>
      <li><strong>Fat Client (e.g., React/Modern Apps):</strong> The server just sends data (usually as JSON). The client (browser) is "fat" because it has all the JavaScript code needed to render the UI, manage state, and handle logic itself.</li>
    </ul>

    <h2 className="text-2xl font-semibold pt-4">8. Why Use This Model?</h2>
    <p className="opacity-90">
      The client-server model is popular for several key reasons:
    </p>
    <ul className="list-disc ml-6 space-y-2 opacity-90">
      <li><strong>Centralization:</strong> The server acts as a "single source of truth." All data is stored in one place, ensuring consistency for all clients.</li>
      <li><strong>Scalability:</strong> If your app gets popular, you can upgrade the server (vertical scaling) or add more servers (horizontal scaling) to handle the load. The clients remain unchanged.</li>
      <li><strong>Maintenance:</strong> You can update the application's logic on the server once, and every client instantly gets the update. You don't need to update software on every user's device.</li>
      <li><strong>Security:</strong> Sensitive business logic and database access are kept secure on the server, hidden from the client.</li>
    </ul>

    <h2 className="text-2xl font-semibold pt-4">9. Alternative: Peer-to-Peer (P2P)</h2>
    <p className="opacity-90">
      The main alternative is the Peer-to-Peer (P2P) model. In a P2P network, there is no central server. Every computer in the network acts as *both* a client and a server, sharing files and logic directly with each other.
    </p>
    <ul className="list-disc ml-6 space-y-2 opacity-90">
      <li><strong>Client-Server Example:</strong> Streaming a movie from Netflix (One central server, many clients).</li>
      <li><strong>P2P Example:</strong> BitTorrent (Many peers sharing pieces of a file with each other).</li>
    </ul>

  </div>
</div>
);
};
export const clientServerArchitectureMeta = {
  id: 'client-server-architecture',
  title: 'Client-Server Architecture',
  difficulty: 'beginner',
  points: 5,
  estimatedTime: '10 min'
};

