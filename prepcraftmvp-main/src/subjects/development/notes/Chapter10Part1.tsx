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

// --- Main Chapter 10, Part 1 Component ---

const Chapter10Part1 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'database-fundamentals':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.1: Database Fundamentals (SQL vs NoSQL)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Filing Cabinet vs. The Junk Drawer</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Choosing a database is like choosing how to store your files.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>SQL (Relational):</strong> This is a highly organized, multi-drawer <strong>filing cabinet</strong>. Every drawer is labeled, and every file inside must follow a strict template (rows and columns). It's perfect for complex, related data (like banking), but it's very rigid.</li>
              <li><strong>NoSQL (Non-Relational):</strong> This is a flexible <strong>"junk drawer"</strong>. You can throw anything in—a text document, a list, another box. It's incredibly fast, easy to use, and flexible, but it's less structured.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>database</strong> is an organized collection of data, managed by a <strong>Database Management System (DBMS)</strong>. The two main categories are SQL and NoSQL.</p>
            <p><strong>1. SQL (Relational) Databases:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Examples: <strong>MySQL</strong>, <strong>PostgreSQL</strong>, SQL Server.</li>
              <li>Data is stored in <strong>tables</strong> (like spreadsheets) with <strong>rows</strong> and <strong>columns</strong>.</li>
              <li>Uses a <strong>predefined schema</strong>, meaning you must define your data structure <em>before</em> you can add data. This is very rigid but ensures data integrity.</li>
              <li>Uses <strong>SQL (Structured Query Language)</strong> for all operations.</li>
              <li>Data is "related" using <strong>foreign keys</strong> (e.g., a <Code>posts</Code> table has a <Code>user_id</Code> column that links to the <Code>users</Code> table).</li>
            </ul>

            <p className="mt-4"><strong>2. NoSQL (Non-Relational) Databases:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Examples: <strong>MongoDB</strong> (Document), Redis (Key-Value).</li>
              <li>The MERN stack uses <strong>MongoDB</strong>, a <strong>document database</strong>.</li>
              <li>Data is stored in <strong>collections</strong> (like "folders") which hold <strong>documents</strong> (JSON-like objects).</li>
              <li>It has a <strong>dynamic schema</strong> (or is "schema-less"), meaning documents in the same collection can have different structures.</li>
              <li>It is <strong>horizontally scalable</strong> (easy to add more servers) and built for speed and flexibility.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: How Data is Stored (SQL vs. NoSQL)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Imagine you have a user with two blog posts.</p>
            <p className="font-semibold mt-2">1. SQL (Relational): Data is split into two tables.</p>
            <CodeBlock code={`
-- users (table) --
| id | name  |
|----|-------|
| 1  | Alex  |

-- posts (table) --
| id | title      | user_id |
|----|------------|---------|
| 55 | Hello      | 1       |
| 56 | World      | 1       |
            `} language="sql" />

            <p className="font-semibold mt-2">2. NoSQL / MongoDB (Document): Data is nested in one document.</p>
            <CodeBlock code={`
// users (collection)
{
  "_id": "abc12345",
  "name": "Alex",
  "posts": [
    { "title": "Hello", "content": "..." },
    { "title": "World", "content": "..." }
  ]
}
            `} language="json" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Which one is better, SQL or NoSQL?</strong>
                <p className="pl-4">Neither is "better"; they solve different problems. <strong>SQL</strong> is better for applications that require high integrity and have complex, structured relationships (like a banking system or a financial ledger). <strong>NoSQL</strong> is better for applications that need high speed, massive scalability, and have flexible or rapidly changing data (like a social media feed, IoT data, or a blog).</p>
              </li>
              <li>
                <strong>Why does the MERN stack use MongoDB (NoSQL)?</strong>
                <p className="pl-4">Because MongoDB stores data as <strong>BSON</strong> (a binary version of JSON). This means data in your database looks <em>exactly like</em> a JavaScript object. This eliminates the need for a complex "translator" (an ORM) and fits perfectly with the "JavaScript Everywhere" philosophy of Node.js and React.</p>
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
    case 'mongodb-introduction':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.2: MongoDB Introduction & Installation</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Cloud Database</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>You <em>can</em> install and run the MongoDB database software on your own laptop (like running a power plant in your garage). This is called <strong>"MongoDB Community Server."</strong> It's complex, uses a lot of resources, and you are responsible for all maintenance.</p>
            <p>Or, you can use <strong>"MongoDB Atlas."</strong> This is the "cloud" version, like plugging into the city's power grid. It's a "Database-as-a-Service" (DBaaS). You just create a free account, and they give you a "connection string" (an "outlet"). You just plug your app into it. For learning, this is the 100% recommended way.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>MongoDB</strong> is the most popular <strong>document-oriented NoSQL database</strong>. It stores data in flexible, JSON-like documents, making it a natural fit for JavaScript applications.</p>
            <p><strong>Core Terminology:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Database:</strong> The top-level container for collections.</li>
              <li><strong>Collection:</strong> A group of related documents. This is the equivalent of a "table" in SQL, but it has no rigid schema.</li>
              <li><strong>Document:</strong> The basic unit of data, stored in <strong>BSON (Binary JSON)</strong> format. This is the equivalent of a "row" in SQL.</li>
              <li><strong>Field:</strong> A key-value pair within a document (e.g., <Code>name: "Alex"</Code>).</li>
            </ul>
            <p><strong>Installation & Setup (Recommended: MongoDB Atlas):</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Go to `mongodb.com/atlas` and sign up for a free "M0" cluster.</li>
              <li>Create a new database user (with a username and password).</li>
              <li>Whitelist your IP address (or `0.0.0.0/0` for "allow all," which is okay for learning but bad for production).</li>
              <li>Click "Connect" and get your <strong>Connection String</strong>. This is the URL you will paste into your Node.js application (using `dotenv`) to connect.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Sample MongoDB Document</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is what a single "user" document might look like in a `users` collection. Notice the nested objects (`address`) and arrays (`tags`), which are perfectly valid.</p>
            <CodeBlock code={`
{
  "_id": "60d5ec49e9b0e13b6c2a11d1",
  "username": "alex123",
  "email": "alex@example.com",
  "age": 30,
  "isVerified": true,
  "tags": ["developer", "react", "node"],
  "address": {
    "street": "123 Main St",
    "city": "New York"
  }
}
            `} language="json" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between a Collection and a Table?</strong>
                <p className="pl-4">A <strong>Table</strong> (from SQL) has a <em>strict, predefined schema</em>. All rows must have the same columns. A <strong>Collection</strong> (from MongoDB) is <em>schema-less</em>. Documents in the same collection can have completely different structures, which provides immense flexibility.</p>
              </li>
              <li>
                <strong>What is BSON? How is it different from JSON?</strong>
                <p className="pl-4"><strong>JSON</strong> (JavaScript Object Notation) is a text-based format. <strong>BSON</strong> (Binary JSON) is a binary representation of JSON. MongoDB uses BSON internally because it's faster to parse, takes up less space, and supports <em>more data types</em> than JSON (like `Date`, `ObjectId`, and raw binary data).</p>
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
    case 'mongodb-compass':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.3: MongoDB Compass & Shell Basics</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Visual vs. The Terminal</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>You have two ways to manage your database:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>MongoDB Compass (The GUI):</strong> This is a "visual file explorer" for your database. It's a desktop app that lets you <em>see</em> your databases, click on collections, and visually edit documents. It's perfect for beginners and for quickly checking data.</li>
              <li><strong>Mongo Shell (<Code>mongosh</Code>):</strong> This is the "command line" for your database. It's a text-based terminal where you type commands. It's much faster and more powerful for complex operations, scripting, and managing a server.</li>
            </ul>
            <p>You must know how to use both.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>MongoDB Compass</strong> is the official GUI for MongoDB. It allows you to connect to your database (either local or on Atlas) and perform CRUD operations visually.
            <br/><strong><Code>mongosh</Code> (Mongo Shell)</strong> is the interactive command-line interface. When you're in the shell, you're not writing JavaScript, you're writing MongoDB <em>queries</em> (which <em>look like</em> JS).</p>
            <p><strong>Key <Code>mongosh</Code> Commands:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong><Code>show dbs</Code></strong>: Lists all databases.</li>
              <li><strong><Code>use [dbName]</Code></strong>: Switches to a database. (e.g., <Code>use myStore</Code>). If it doesn't exist, MongoDB creates it when you first add data.</li>
              <li><strong><Code>show collections</Code></strong>: Lists all collections in the current database.</li>
              <li><strong><Code>db.users.insertOne({'{'}...{'}'})</Code></strong>: Creates a new document in the `users` collection.</li>
              <li><strong><Code>db.users.find()</Code></strong>: Reads <em>all</em> documents in the `users` collection.</li>
              <li><strong><Code>db.users.find({'{'} age: 30 {'}'})</Code></strong>: Finds all users with an age of 30.</li>
              <li><strong><Code>db.users.findOne({'{'} _id: ObjectId(...) {'}'})</Code></strong>: Finds the <em>first</em> document matching the query.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Basic Shell Commands</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is what a typical `mongosh` session looks like. You can run these commands directly in the shell or in the "Shell" tab inside MongoDB Compass.</p>
            <CodeBlock code={`
# 1. Switch to (or create) a new database
use companyDB

# 2. Create a new document in the 'employees' collection
db.employees.insertOne({
  name: "Alex Smith",
  department: "Engineering",
  salary: 80000
})

# 3. Create another document
db.employees.insertOne({
  name: "Priya Singh",
  department: "Marketing",
  salary: 70000
})

# 4. Find all documents in the 'employees' collection
db.employees.find()

# 5. Find only the employees in Marketing
db.employees.find({ department: "Marketing" })
// Output: { _id: ..., name: "Priya Singh", ... }
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>How do I connect Compass to my MongoDB Atlas database?</strong>
                <p className="pl-4">In your Atlas dashboard, go to your cluster and click "Connect." Select "Connect with MongoDB Compass." It will give you a <strong>Connection String</strong> (a URL that starts with `mongodb+srv://...`). You just copy that string, paste it into the "New Connection" screen in Compass, and it will connect.</p>
              </li>
              <li>
                <strong>Do I need to learn the shell if I have Compass?</strong>
                <p className="pl-4">Yes. Compass is fantastic for <em>viewing</em> data and making simple edits. The shell (`mongosh`) is essential for <em>scripting</em> complex operations, running mass updates, and for working on a production server where you may not have GUI access. You must be comfortable with the basic <Code>find</Code>, <Code>insertOne</Code>, and <Code>updateOne</Code> commands.</p>
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
    case 'mongodb-crud':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.4: CRUD Operations in MongoDB</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Database Filing System</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>CRUD (Create, Read, Update, Delete)</strong> are the four "verbs" of database work. In `mongosh`, you're telling the database what to do with its "files" (documents):</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>CREATE:</strong> <Code>insertOne</Code> ("Create a new file with this info.")</li>
              <li><strong>READ:</strong> <Code>find</Code> ("Find all files in this drawer that are 'blue'.")</li>
              <li><strong>UPDATE:</strong> <Code>updateOne</Code> ("Find file 'B-52' and <em>set</em> its title to 'New Title'.")</li>
              <li><strong>DELETE:</strong> <Code>deleteOne</Code> ("Find file 'B-52' and <em>shred it</em>.")</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>CRUD operations are the core functions for interacting with a database. In MongoDB, these are methods called on a collection (e.g., `db.users`).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>CREATE:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>db.collection.insertOne(document)</Code>: Inserts a single document.</li>
                  <li><Code>db.collection.insertMany([doc1, doc2])</Code>: Inserts an array of documents.</li>
                </ul>
              </li>
              <li><strong>READ:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>db.collection.find(query)</Code>: Finds all documents matching the query.
                    <ul className="list-disc ml-6 mt-2"><li><Code>db.users.find()</Code> (finds all).</li></ul>
                    <ul className="list-disc ml-6 mt-2"><li><Code>db.users.find({'{'} age: {'{'} $gt: 18 {'}'} {'}'})</Code> (finds users <em>greater than</em> 18).</li></ul>
                  </li>
                  <li><Code>db.collection.findOne(query)</Code>: Finds only the <em>first</em> document matching the query.</li>
                </ul>
              </li>
              <li><strong>UPDATE:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>db.collection.updateOne(query, update)</Code>: Updates the first document that matches the `query`.</li>
                  <li>The `update` argument <em>must</em> use an <strong>update operator</strong> like <strong><Code>$set</Code></strong>.
                    <ul className="list-disc ml-6 mt-2"><li><strong>Wrong (Replaces):</strong> <Code>db.users.updateOne({'{'} name: "Alex" {'}'}, {'{'} age: 31 {'}'})</Code></li></ul>
                    <ul className="list-disc ml-6 mt-2"><li><strong>Right (Updates):</strong> <Code>db.users.updateOne({'{'} name: "Alex" {'}'}, {'{'} <strong>$set:</strong> {'{'} age: 31 {'}'} {'}'})</Code></li></ul>
                  </li>
                </ul>
              </li>
              <li><strong>DELETE:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>db.collection.deleteOne(query)</Code>: Deletes the first document matching the query.</li>
                  <li><Code>db.collection.deleteMany(query)</Code>: Deletes <em>all</em> documents matching the query.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Full CRUD Session (`mongosh`)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a complete script you can run in `mongosh`.</p>
            <CodeBlock code={`
// Switch to a test database
use testStore

// --- CREATE ---
db.products.insertMany([
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Mouse", price: 40, category: "Electronics" },
  { name: "Notebook", price: 5, category: "Office" }
])

// --- READ ---
// 1. Find all products
db.products.find()

// 2. Find all products in "Electronics"
db.products.find({ category: "Electronics" })

// 3. Find one product
db.products.findOne({ name: "Mouse" })

// --- UPDATE ---
// Give the "Mouse" a new price
// We MUST use $set to avoid replacing the whole document
db.products.updateOne(
  { name: "Mouse" },
  { $set: { price: 35, onSale: true } }
)

// --- DELETE ---
// Delete the "Notebook"
db.products.deleteOne({ name: "Notebook" })

// See the final result
db.products.find()
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What happens if I forget <Code>$set</Code> in an update?</strong>
                <p className="pl-4">This is a catastrophic (and common) beginner mistake. If you run <Code>db.products.updateOne({'{'} name: "Mouse" {'}'}, {'{'} price: 35 {'}'})</Code>, MongoDB will <strong>replace the entire document</strong> with <Code>{'{'} price: 35 {'}'}</Code>. The original `_id`, `name`, and `category` fields will be <strong>deleted</strong>. The <Code>$set</Code> operator tells MongoDB to <em>only</em> update the fields inside the <Code>$set</Code> object and leave all others alone.</p>
              </li>
              <li>
                <strong>How do I find a document by its `_id`?</strong>
                <p className="pl-4">You can't just use a string, because the `_id` is a special `ObjectId` type. You must wrap the ID string in the `ObjectId()` constructor:
                <br/><Code>db.users.findOne({'{'} _id: ObjectId("60d5ec49e9b0e13b6c2a11d1") {'}'})</Code></p>
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
    case 'mongodb-data-types':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.5: MongoDB Data Types & Schema Design</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: "Embedding" vs. "Referencing"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>When storing related data, you have two choices:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Embedding (The "Backpack"):</strong> If a `User` has a few `addresses`, you can <strong>embed</strong> the addresses as an <em>array</em> directly inside the `User` document. This is like putting your address book in your backpack. It's fast to get (one grab) but makes the backpack heavy.</li>
              <li><strong>Referencing (The "Library Card"):</strong> If a `User` (Author) has 5,000 `Posts`, you would <em>not</em> embed them. You put the posts in their own `posts` collection. Then, you store a "library card" (the author's `_id`) in each post. This is <strong>referencing</strong>. It requires a second "trip" (query) to find the author, but it's far more organized and scalable.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>MongoDB uses <strong>BSON (Binary JSON)</strong>, which supports all JSON data types plus more.</p>
            <p><strong>Key Data Types:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`String`</strong>: "Hello"</li>
              <li><strong>`Double`</strong>: The default type for all numbers (e.g., `3.14`, `100`).</li>
              <li><strong>`Boolean`</strong>: `true` or `false`.</li>
              <li><strong>`Object`</strong>: An embedded, nested document (e.g., `address: {'{'} city: "..." {'}'}`).</li>
              <li><strong>`Array`</strong>: An array of values (e.g., `tags: ["js", "node"]`).</li>
              <li><strong>`ObjectId`</strong>: The 12-byte unique identifier (`_id`) automatically generated for every document. This is its "primary key."</li>
              <li><strong>`Date`</strong>: Stores the current date and time (e.g., `new Date()`).</li>
            </ul>
            <p><strong>Schema Design (Embedding vs. Referencing):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Embed (One-to-Few):</strong> Use for "has-a" or "one-to-few" relationships that are accessed together. (e.g., the "comments" on a "blog post"). This is fast as it only requires one database query.</li>
              <li><strong>Reference (One-to-Many / Many-to-Many):</strong> Use when a single sub-document is very large or when data needs to be accessed separately. (e.g., `Posts` and `Authors`). This avoids data duplication and is more scalable.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Schema Design for a Blog</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows a `posts` collection that <strong>embeds</strong> comments but <strong>references</strong> its author.</p>
            <CodeBlock code={`
// --- authors (collection) ---
{
  "_id": "author_abc",
  "name": "Alex Smith",
  "email": "alex@example.com"
}

// --- posts (collection) ---
{
  "_id": "post_123",
  "title": "My First Post",
  "content": "This is the post content...",
  "createdAt": "2025-11-08T10:00:00Z",
  
  // 1. REFERENCING (The "SQL Way")
  // We store the ID of the author from the 'authors' collection.
  // This avoids duplicating the author's name/email on every post.
  "author_id": "author_abc",

  // 2. EMBEDDING (The "NoSQL Way")
  // Comments "belong" to the post, so we embed them as an array.
  "comments": [
    { 
      "user": "Priya", 
      "text": "Great post!", 
      "timestamp": "2025-11-08T11:00:00Z" 
    },
    { 
      "user": "Leo", 
      "text": "I agree.", 
      "timestamp": "2025-11-08T12:00:00Z" 
    }
  ]
}
            `} language="json" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is an `ObjectId` and how is it generated?</strong>
                <p className="pl-4">It's the unique 12-byte primary key (`_id`) that MongoDB automatically generates for every document. It's generated using a combination of a timestamp, machine ID, process ID, and a counter. This means it is <em>practically</em> guaranteed to be unique across all servers, everywhere, without needing the database to check for a collision.</p>
              </li>
              <li>
                <strong>As a rule, should I embed or reference?</strong>
                <p className="pl-4">Start by <strong>embedding</strong>. It's faster (one query) and simpler. Only switch to <strong>referencing</strong> if:
                <br/>1. The embedded list could grow <em>infinitely</em> (like a "followers" list).
                <br/>2. You need to access the sub-document (e.g., a "comment") on its own.
                <br/>3. The data is duplicated and needs to be updated in many places at once (like an author's name).</p>
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
    case 'mongoose-introduction':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.6: Mongoose ODM Introduction</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Strict Butler</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Using raw `mongosh` (or the native MongoDB driver) is like talking <em>directly</em> to your database. It's fast, but it's raw. You can easily make a typo (<Code>db.usrs.find()</Code>) and get no data or save data in the wrong format.</p>
            <p><strong>Mongoose</strong> is a "strict butler" (an <strong>ODM</strong>) that stands between you and your database. It helps you in two ways:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Schema (The "Rules"):</strong> The butler says, "Sir, you are <em>only</em> allowed to add a `name` (which must be a String) and an `age` (which must be a Number)." This is <strong>validation</strong>.</li>
              <li><strong>Models (The "Commands"):</strong> The butler gives you simple commands. Instead of a complex query, you just say, <Code>User.findById(123)</Code>. The butler handles the complex database logic for you. This is <strong>abstraction</strong>.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Mongoose</strong> is an <strong>Object Data Modeling (ODM)</strong> library for MongoDB and Node.js. It manages the connection to the database and provides a layer of abstraction for interacting with your data.</p>
            <p>It is the most popular way to use MongoDB in an Express server. It <em>enforces</em> a schema at the application layer, bringing structure to your schema-less database.</p>
            <p><strong>The Three Core Parts of Mongoose:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>1. The Connection:</strong>
                <br/><Code>mongoose.connect(connectionString)</Code>
                <br/>This connects your app to your MongoDB (usually Atlas) database.
              </li>
              <li><strong>2. The Schema:</strong>
                <br/>This is the "blueprint." You define the <em>shape</em> and <em>rules</em> for your data (data types, required fields, default values).
                <br/><Code>const userSchema = new mongoose.Schema({'{'}...{'}'})</Code>
              </li>
              <li><strong>3. The Model:</strong>
                <br/>The "constructor" compiled from the Schema. This is the main object you use to perform all CRUD operations.
                <br/><Code>const User = mongoose.model('User', userSchema)</Code>
              </li>
            </ul>
            <p>The Model provides all your async CRUD functions (which return Promises): <Code>User.find()</Code>, <Code>User.findById()</Code>, <Code>User.create()</Code>, <Code>User.findByIdAndUpdate()</Code>, <Code>User.findByIdAndDelete()</Code>.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The "Mongoose Trinity" (Schema, Model, Connect)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example shows how to set up Mongoose, define a `User`, and perform a CRUD operation.</p>
            <CodeBlock code={`
import mongoose from 'mongoose';

// --- 1. The Schema (Blueprint) ---
// Defines the shape and rules for a 'user'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Sanitization
  },
  email: {
    type: String,
    required: true,
    unique: true // Validation
  },
  age: {
    type: Number,
    min: 18 // Validation
  },
  createdAt: {
    type: Date,
    default: () => Date.now()
  }
});

// --- 2. The Model (Constructor) ---
// Compiles the schema into a usable class.
// Mongoose will create a collection named 'users' (lowercase, plural)
const User = mongoose.model('User', userSchema);

// --- 3. The Connection & CRUD ---
const main = async () => {
  try {
    // (Replace with your own .env variable)
    const MONGO_URI = 'mongodb+srv://user:pass@cluster.mongodb.net/myDatabase';
    
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB!');
    
    // --- CRUD with the Model ---
    // CREATE
    const newUser = await User.create({
      name: "Alex Smith",
      email: "alex@example.com",
      age: 30
    });
    console.log("Created user:", newUser);
    
    // READ
    const foundUser = await User.findOne({ email: "alex@example.com" });
    console.log("Found user:", foundUser);
    
  } catch (error) {
    console.error("Connection error:", error);
  } finally {
    mongoose.connection.close();
  }
};

main();
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>I thought MongoDB was "schema-less." Why is Mongoose adding a schema?</strong>
                <p className="pl-4">This is the key concept. MongoDB <em>is</em> schema-less at the database level (it's flexible). Mongoose enforces a schema at the <em>application level</em>. This gives you the best of both worlds: the flexibility of MongoDB, but with the data integrity, validation, and structure that a real-world application <em>needs</em> before data hits the database.</p>
              </li>
              <li>
                <strong>What is an ODM?</strong>
                <p className="pl-4">It stands for <strong>Object Data Modeling</strong>. It's a "translator" that lets you map your "Models" (which are JavaScript classes/objects) to "Documents" (which are BSON data in the database). It abstracts away the raw, complex database queries and gives you simple functions like <Code>User.find()</Code>.</p>
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

export default Chapter10Part1;