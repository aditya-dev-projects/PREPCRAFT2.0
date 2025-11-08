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

// --- Main Chapter 10, Part 2 Component ---

const Chapter10Part2 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'mongoose-schemas':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.7: Mongoose Schemas & Models</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Strict Butler" and the "Blueprint"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Mongoose brings order to the "junk drawer" (NoSQL) by introducing a "Strict Butler" (the <strong>Model</strong>) who works from a "Blueprint" (the <strong>Schema</strong>).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>The Schema:</strong> This is the <em>blueprint</em> you design. It says, "A 'User' document MUST have a `name` that is a String and an `email` that is also a String."</li>
              <li><strong>The Model:</strong> This is the <em>butler</em>. You give the blueprint to the butler by calling `mongoose.model('User', userSchema)`. Now, the butler is your single point of contact. When you say, `User.create(...)`, the butler takes your data, <em>validates</em> it against the blueprint, and only then puts it in the database.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Mongoose is built on two core concepts: <strong>Schemas</strong> and <strong>Models</strong>.</p>
            <p><strong>1. Schema:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>A <strong>`Schema`</strong> is a JavaScript object that defines the <em>structure</em> of your documents, their <em>data types</em>, and their <em>validation rules</em>.</li>
              <li>It is the "blueprint" for your data, enforced at the <em>application level</em>.</li>
              <li>It allows you to define types (e.g., `String`, `Number`, `Date`, `Buffer`, `Boolean`, `ObjectId`, `Array`).</li>
              <li>It also lets you define rules like `required`, `unique`, `min`, `max`, `default`, and `trim`.</li>
            </ul>

            <p className="mt-4"><strong>2. Model:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>A <strong>`Model`</strong> is a "constructor" that is compiled from your `Schema` definition.</li>
              <li>This is the object you actually <em>use</em> to interact with the database. It provides all the async CRUD methods (which return Promises).</li>
              <li>When you create a model like `mongoose.model('User', userSchema)`, Mongoose automatically creates/looks for a collection in MongoDB named <strong>`users`</strong> (lowercase and pluralized).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Defining a `userSchema` and `User` Model</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a complete example of a Mongoose model file (e.g., `models/User.mjs`).</p>
            <CodeBlock code={`
import mongoose from 'mongoose';

// 1. Define the Schema (the blueprint)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field is mandatory
    trim: true        // This will trim whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,     // Mongoose will create a unique index
    lowercase: true   // Mongoose will auto-convert to lowercase
  },
  age: {
    type: Number,
    min: 18,          // Validation: must be 18 or older
    default: 18       // Default value if not provided
  },
  createdAt: {
    type: Date,
    default: () => Date.now() // A function for a dynamic default
  }
});

// 2. Create the Model (the constructor/butler)
// Mongoose will create a collection named 'users'
const User = mongoose.model('User', userSchema);

// 3. Export the Model
export default User;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between a Schema and a Model?</strong>
                <p className="pl-4">A <strong>Schema</strong> is the <em>blueprint</em>. It's a "dumb" object that just defines the rules. A <strong>Model</strong> is the <em>tool</em> or "constructor." It's a "smart" object, compiled from the schema, that has all the methods like `User.find()`, `User.create()`, etc. You define a Schema, and you <em>use</em> a Model.</p>
              </li>
              <li>
                <strong>What does `mongoose.model('User', userSchema)` do? Why the 'User' string?</strong>
                <p className="pl-4">This command tells Mongoose: "Take this `userSchema` blueprint and create a model named 'User'." Mongoose then <em>pluralizes</em> and <em>lowercases</em> this string to find the matching collection in the database. So, the model `User` will be linked to the MongoDB collection `users`.</p>
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
    case 'data-validation-mongoose':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.8: Data Validation with Mongoose</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Bouncer's Rulebook</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>If Mongoose is the "bouncer" for your database, the <strong>Schema</strong> is its "rulebook." This is where you write down all the rules for what data is allowed in.</p>
            <p>When a new document (a person) tries to enter (`.create()`), the bouncer (Mongoose) checks its data against the rulebook <em>before</em> letting it into the database:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>"Is `email` present? (<strong>required</strong>)"</li>
              <li>"Is `age` a number? (<strong>type</strong>)"</li>
              <li>"Is `age` 18 or more? (<strong>min</strong>)"</li>
              <li>"Is `email` already in use? (<strong>unique</strong>)"</li>
            </ul>
            <p>If any rule fails, the bouncer <em>rejects</em> the document and throws a `ValidationError`.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Mongoose validation</strong> is a powerful set of rules you define directly within your Schema. It is enforced at the application level and acts as the most important line of defense for your data integrity.</p>
            <p><strong>Common Built-in Validators:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`required: true`</strong>: The field must not be empty.</li>
              <li><strong>`unique: true`</strong>: The field must be unique across the <em>entire</em> collection (MongoDB creates a unique index for this).</li>
              <li><strong>`minlength: [8, 'message']` / `maxlength: [50]`</strong>: For strings.</li>
              <li><strong>`min: [18, 'Must be 18+']` / `max: [100]`</strong>: For numbers.</li>
              <li><strong>`enum: ['admin', 'user']`</strong>: The value <em>must</em> be one of the strings in the array.</li>
              <li><strong>`match: /regex/`</strong>: The string must match a regular expression (e.g., for complex password rules).</li>
              <li><strong>`trim: true`</strong>: A "sanitizer" that removes whitespace from the beginning and end of a string.</li>
              <li><strong>`lowercase: true`</strong>: A "sanitizer" that converts the string to lowercase.</li>
            </ul>
            <p>When a validation rule fails, Mongoose throws a `ValidationError`. You <strong>must</strong> wrap your `.create()` or `.save()` calls in a `try...catch` block to handle this error and send a `400 Bad Request` response to the user.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Validated Schema & Error Handling</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. `models/User.mjs` (The Schema with Validation)</p>
            <CodeBlock code={`
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'], // Custom error message
    unique: true,
    lowercase: true,
    match: [/\\S+@\\S+\\.\\S+/, 'Email is not valid'] // Regex validation
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters']
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: 'Role must be either "user" or "admin"'
    },
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);
export default User;
            `} language="javascript" />

            <p className="font-semibold mt-2">2. `controllers/userController.mjs` (The Error Handling)</p>
            <CodeBlock code={`
import User from '../models/User.mjs';

export const createUser = async (req, res, next) => {
  try {
    // Mongoose will run all our schema rules here
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);

  } catch (error) {
    // 1. If it's a Mongoose validation error
    if (error.name === 'ValidationError') {
      // Send a 400 Bad Request with the specific error messages
      return res.status(400).json({ error: error.message });
    }
    // 2. If it's a "duplicate key" error (for 'unique: true')
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    // 3. For all other errors, send to the central error handler
    next(error);
  }
};
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Should I use Mongoose validation or a library like `express-validator`?</strong>
                <p className="pl-4"><strong>Both.</strong> They have different jobs. <strong>`express-validator`</strong> is the "bouncer" at the front door (the router). It catches simple, obvious errors (like an empty field) <em>before</em> you even touch your database logic. <strong>Mongoose validation</strong> is the "database-layer security." It's the <em>final check</em> to ensure data integrity, especially for complex rules (like `unique: true`) that only the database can know.</p>
              </li>
              <li>
                <strong>How do I add my own custom validation rule?</strong>
                <p className="pl-4">You can use the `validate` property in your schema. It takes a function that must return `true` or `false`.
                <br/><Code>validate: {'{'} validator: (value) =&gt; value.length &gt; 5, message: 'Too short!' {'}'}</Code></p>
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
    case 'data-relationships':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.9: Data Relationships (Referenced & Embedded)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The "Backpack" vs. The "Library Card"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the most important schema design choice. How do you link data?</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Embedding (The "Backpack"):</strong> A "one-to-few" relationship. A `User` has a few `addresses`. You <strong>embed</strong> the addresses as an <em>array of objects</em> directly inside the `User` document. This is like putting your address book in your backpack. It's fast (one database query), but it makes the `User` document large.</li>
              <li><strong>Referencing (The "Library Card"):</strong> A "one-to-many" relationship. An `Author` has 5,000 `Posts`. You do <em>not</em> embed them. You create a separate `posts` collection. In each `post` document, you store a "library card" (the `author_id`). This is <strong>referencing</strong>. It's more scalable and flexible.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Mongoose provides powerful ways to handle both embedding and referencing.</p>
            <p><strong>1. Embedding (Subdocuments):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>You define a schema and nest it inside another as an array of objects.</li>
              <li><strong>Use Case:</strong> "One-to-few" relationships. Data that is <em>owned by</em> and almost <em>always</em> accessed <em>with</em> its parent (e.g., `comments` on a `post`).</li>
              <li><strong>Pro:</strong> Very fast. You get all the data in one query.</li>
              <li><strong>Con:</strong> Can lead to very large parent documents.</li>
            </ul>

            <p className="mt-4"><strong>2. Referencing ("Population"):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>You store a reference (the document's `_id`) in one schema, and tell Mongoose what "model" it refers to.</li>
              <li><strong>Syntax:</strong> <Code>author: {'{'} type: mongoose.Schema.Types.ObjectId, ref: 'User' {'}'}</Code></li>
              <li><strong>Use Case:</strong> "One-to-many" or "many-to-many" relationships (e.g., `authors` and `posts`).</li>
              <li><strong>Pro:</strong> Keeps documents small. Avoids data duplication.</li>
              <li><strong>Con:</strong> Requires a second query, which is solved by Mongoose's `.populate()` method.</li>
              <li><strong>`.populate(field)`:</strong> A "magic" Mongoose method. You chain it to a `find()` query, and it automatically "follows" the reference, fetches the related document, and stitches it into your result.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: `User` and `Post` Schemas (Referencing)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. `models/User.mjs`</p>
            <CodeBlock code={`
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({ name: String, email: String });
const User = model('User', userSchema);
export default User;
            `} language="javascript" />
            
            <p className="font-semibold mt-2">2. `models/Post.mjs`</p>
            <CodeBlock code={`
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: String,
  // 1. This is the reference to the User model
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User' // Must match the model name
  }
});

const Post = model('Post', postSchema);
export default Post;
            `} language="javascript" />

            <p className="font-semibold mt-2">3. `controller.mjs` (Using `.populate()`)</p>
            <CodeBlock code={`
import Post from './models/Post.mjs';

const getPosts = async (req, res) => {
  // Find all posts, but also "populate" the 'author' field.
  // Mongoose will find the author in the 'User' collection
  // and inject their document in place of the ID.
  const posts = await Post.find().populate('author');
  
  res.json(posts);
  // Output:
  // [
  //   { 
  //     _id: "...", 
  //     title: "My Post", 
  //     author: { _id: "...", name: "Alex Smith", email: "..." } 
  //   }
  // ]
};
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is `.populate()`? Is it efficient?</strong>
                <p className="pl-4">`.populate()` is a Mongoose-specific helper. It is <em>not</em> a database-level `JOIN` (like in SQL). It secretly runs a <em>second query</em> for you. It finds all the posts, collects all the unique `author_id`s, and then runs <em>one</em> <Code>User.find({'{'} _id: {'{'} $in: [...] {'}'} {'}'})</Code> to fetch all the authors. It then "stitches" them together in JavaScript. It is very efficient.</p>
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
    case 'mongoose-middleware':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.10: Mongoose Middleware & Hooks</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: "Before" and "After" Triggers</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Mongoose Middleware (also called "hooks") are functions that automatically run <em>before</em> or <em>after</em> a specific database operation happens.</p>
            <p>Think of it like an alarm system for your "butler" (the Model):</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`pre('save')` Hook (Before):</strong> "<strong>Before</strong> you `save` this new user, <em>if</em> their password was changed, you <em>must</em> stop, hash the password, and <em>then</em> proceed to save." (This is the most common use case).</li>
              <li><strong>`post('remove')` Hook (After):</strong> "<strong>After</strong> you `remove` this blog post, you <em>must</em> go to the `comments` collection and delete all of its comments." (For cleanup).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Mongoose middleware are functions registered on a <strong>Schema</strong> that execute during operations like `save`, `find`, `updateOne`, or `remove`.</p>
            <p><strong>Two Types of Middleware:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`pre(hookName, fn)`:</strong> Runs <em>before</em> the hook's operation. It receives a `next()` function that you <em>must</em> call to pass control to the main operation.</li>
              <li><strong>`post(hookName, fn)`:</strong> Runs <em>after</em> the hook's operation. It receives the `doc` (document) that was just processed.</li>
            </ul>
            <p><strong>Two "Flavors" of Hooks:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Document Middleware:</strong> Runs on a <em>document</em>. The `this` keyword refers to the document.
                <ul className="list-disc ml-6 mt-2"><li>Hooks: `save`, `validate`, `remove`.</li></ul>
              </li>
              <li><strong>Query Middleware:</strong> Runs on a <em>query</em>. The `this` keyword refers to the query object.
                <ul className="list-disc ml-6 mt-2"><li>Hooks: `find`, `findOne`, `updateOne`, `findOneAndUpdate`.</li></ul>
              </li>
            </ul>
            <p>The <strong>`pre('save')`</strong> hook is the most important. It runs when you call `create()` or `save()` on a document. It is the perfect place to run validation, hash passwords, or create URL slugs.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Password Hashing with a `pre('save')` Hook</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the classic, real-world example. Run `npm install bcryptjs`.</p>
            <CodeBlock code={`
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// 1. Define a 'pre-save' hook
// This function will run *before* any 'save' operation
userSchema.pre('save', async function (next) {
  // 'this' refers to the user document about to be saved
  
  // 2. Only hash the password if it has been modified
  // This prevents re-hashing a password on a simple email update
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // 3. Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
    // 4. Call next() to proceed with the actual save operation
    next();
  } catch (error) {
    next(error); // Pass any errors to Mongoose
  }
});

const User = mongoose.model('User', userSchema);
export default User;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Why hash passwords? Why not just save them?</strong>
                <p className="pl-4">You **never** store passwords in plain text. It is the biggest security violation you can make. If your database is ever stolen, all your users' passwords will be leaked. You *must* store a one-way "hash" of the password. `bcrypt` is a slow algorithm (which is a *good* thing) that makes it impossible for attackers to "reverse" the hash and find the original password.</p>
              </li>
              <li>
                <strong>Why do I need to check `this.isModified('password')`?</strong>
                <p className="pl-4">Because the `pre('save')` hook runs *every time* you call `.save()`. If a user updates their `email` but not their `password`, this hook will still run. If you didn't check, you would *re-hash* their *already-hashed* password, making it impossible for them to log in ever again.</p>
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
    case 'indexing-query-optimization':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.11: Indexing & Query Optimization</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Textbook Index</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Imagine your database is a 500-page textbook. A <strong>query</strong> is you trying to find a specific word, like "Mongoose."</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Without an Index (A "Collection Scan"):</strong> You must read <em>every single page</em> of the book, from page 1 to 500, to find the word. This is <em>extremely</em> slow.</li>
              <li><strong>With an Index (An "Index Scan"):</strong> You flip to the "Index" at the back of the book, look for "Mongoose," and see it's on "page 50." You jump <em>directly</em> to that page. This is <em>thousands</em> of times faster.</li>
            </ul>
            <p>An **index** is a special data structure that stores the values for a specific field in an optimized, sorted order, allowing the database to find them instantly.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>By default, MongoDB *only* creates an index on the `_id` field. If you query by any other field (like `email`), MongoDB must perform a <strong>`COLLSCAN` (Collection Scan)</strong>, which is very slow on large collections.</p>
            <p>You *must* add indexes to any fields that you query, sort, or filter by frequently.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Creating an Index (in Mongoose):</strong> You define indexes directly in your Schema.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>email: {'{'} type: String, <strong>index: true</strong> {'}'}</Code></li>
                  <li><Code>email: {'{'} type: String, <strong>unique: true</strong> {'}'}</Code> (This <em>automatically</em> creates a unique index).</li>
                </ul>
              </li>
              <li><strong>Compound Index:</strong> An index on multiple fields (e.g., if you often query by <em>last name</em> and <em>first name</em> together).
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>userSchema.index({'{'} lastName: 1, firstName: 1 {'}'})</Code> (The `1` means ascending order).</li>
                </ul>
              </li>
              <li><strong>Query Optimization:</strong> You can use the <strong>`.explain()`</strong> method on a query to see how MongoDB is executing it.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>db.users.find({'{'} email: "..." {'}'}).explain('executionStats')</Code></li>
                  <li>In the output, you want to see the `stage` is <strong>`IXSCAN` (Index Scan)</strong>. If it's <strong>`COLLSCAN` (Collection Scan)</strong>, you know you are missing an index.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Schema with Indexes</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a well-indexed `User` schema. Queries for `email` and `age` will be extremely fast.</p>
            <CodeBlock code={`
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true // 1. This creates a fast, unique index on 'email'
  },
  age: {
    type: Number,
    index: true // 2. This creates a non-unique index on 'age'
  },
  department: String
});

// 3. This creates a COMPOUND index on 'department' and 'name'
//    for fast queries that filter by both.
userSchema.index({ department: 1, name: 1 });


const User = model('User', userSchema);
export default User;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>If indexes are so fast, why not just index every single field in my schema?</strong>
                <p className="pl-4">Because indexes have a *cost*. Every index you add takes up *storage space* (RAM). More importantly, every <strong>write</strong> operation (`create`, `update`, `delete`) becomes *slower*, because MongoDB has to write your data *and* then update every single index. You must only index the fields you *read from* (query by) frequently.</p>
              </li>
              <li>
                <strong>What is a "compound index"?</strong>
                <p className="pl-4">It's a single index on <em>multiple fields</em>. For example, if you frequently run `db.users.find({'{'} age: 25, city: "New York" {'}'})`, a compound index on `{'{'} age: 1, city: 1 {'}'}` would be much, much faster than two separate indexes.</p>
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
    case 'aggregation-pipeline':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.12: Aggregation Pipeline Basics</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Factory Assembly Line</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A normal `find()` query is like *fetching* a box of raw materials. The <strong>Aggregation Pipeline</strong> is like a *factory assembly line* that *processes* those materials.</p>
            <p>You send your *entire* collection of "raw materials" (documents) down the line. It goes through a series of <strong>Stages</strong>:
            <br/>* <strong>Stage 1 (`$match`):</strong> "Filter out all the 'red' bricks."
            <br/>* <strong>Stage 2 (`$group`):</strong> "Group the remaining bricks by 'size' and *count* how many are in each group."
            <br/>* <strong>Stage 3 (`$sort`):</strong> "Sort the final groups by 'count' in descending order."
            <br/>The output is not the original documents, but a *new* set of documents representing the *result* of the aggregation (e.g., <Code>{'{'} _id: "small", count: 88 {'}'}</Code>).</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The <strong>Aggregation Pipeline</strong> is MongoDB's framework for advanced data processing. You provide an array of "stages," and documents flow through them in order. This allows the *database* to do complex processing, which is much more efficient than fetching all the data into your Node.js app and looping over it.</p>
            <p><strong>Common Pipeline Stages:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`$match`</strong>: Filters the documents, just like a `find()` query. <strong>Always put this first</strong> to reduce the number of documents processed.</li>
              <li><strong>`$group`</strong>: Groups documents by a specified `_id` key and computes new fields. This is the core of aggregation.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Accumulators:</strong> Used inside `$group` (e.g., <strong>`$sum`</strong>, <strong>`$avg`</strong>, <strong>`$max`</strong>, <strong>`$min`</strong>).</li>
                </ul>
              </li>
              <li><strong>`$sort`</strong>: Sorts the resulting documents (e.g., `{'{'} total: -1 {'}'}` for descending).</li>
              <li><strong>`$project`</strong>: Reshapes documents. Used to select, remove, rename, or compute new fields.</li>
              <li><strong>`$limit`</strong> / <strong>`$skip`</strong>: For pagination.</li>
              <li><strong>`$lookup`</strong>: Performs a "left join" to pull in data from *another collection* (like Mongoose's `.populate()`, but at the database level).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Calculating Average Price by Category</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This query finds the average price of all products, grouped by their `category`.</p>
            <CodeBlock code={`
// Assume we have a 'Product' model
import Product from './models/Product.mjs';

const getCategoryStats = async () => {
  try {
    const stats = await Product.aggregate([
      // Stage 1: Match only products that are "inStock"
      {
        $match: { inStock: true }
      },
      
      // Stage 2: Group by the 'category' field
      {
        $group: {
          _id: "$category", // Group by the 'category' field
          
          // Add computed fields
          totalProducts: { $sum: 1 }, // Count the documents in each group
          averagePrice: { $avg: "$price" } // Get the average of the 'price' field
        }
      },
      
      // Stage 3: Sort by the new 'averagePrice' field, descending
      {
        $sort: { averagePrice: -1 }
      }
    ]);
    
    console.log(stats);
    // Output:
    // [
    //   { _id: "Electronics", totalProducts: 15, averagePrice: 899.50 },
    //   { _id: "Books", totalProducts: 120, averagePrice: 25.00 }
    // ]
    
  } catch (err) {
    console.error(err);
  }
};
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>When would I use this instead of just `.find()`?</strong>
                <p className="pl-4">You use <strong>`find()`</strong> when you want to get a *list of documents*. You use <strong>`aggregate()`</strong> when you need to get *analytics or a computed report* about those documents.
                <br/><strong>`find()`</strong>: "Get me all 500 sales from yesterday."
                <br/><strong>`aggregate()`</strong>: "Tell me the *total sum* of all sales from yesterday."</p>
              </li>
              <li>
                <strong>What's the difference between `$match` and `find()`?</strong>
                <p className="pl-4">They use the exact same query syntax (e.g., <Code>find({'{'} age: 25 {'}'})</Code> vs. <Code>$match: {'{'} age: 25 {'}'}</Code>). The key difference is *where* they run. `find()` is a standalone query. `$match` is a *stage* in a pipeline, usually used to *filter* documents *before* they are passed to the next stage (like `$group`).</p>
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
    case 'database-mini-project':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">10.13: Database Mini Project</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Connecting the Kitchen to the Pantry</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>In Chapter 9, we built a REST API "kitchen" that worked with a "fake" pantry (an in-memory array).</p>
            <p>This project is the *final upgrade*. We are throwing out the fake pantry and connecting our kitchen (Express API) to a real, industrial-sized, refrigerated pantry (<strong>MongoDB</strong>). We will use <strong>Mongoose</strong> as the "butler" who knows how to talk to the pantry and enforce all our rules.</p>
            <p>The goal is to replace all our fake array logic (`.find()`, `.push()`, `.filter()`) with real, async database commands (`await Post.find()`, `await Post.create()`).</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This project synthesizes all backend concepts into a professional, scalable structure. The primary pattern we will use is **MVC (Model-View-Controller)**, or in this case, **"Model-Router-Controller"**.</p>
            <p><strong>This separation is the key to a professional backend:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>`server.mjs` (The "Main" File):</strong> Connects to the database, applies global middleware (like `express.json`), and <em>mounts</em> the routers. It knows <em>nothing</em> about the specific routes.</li>
              <li><strong>`models/post.mjs` (The "Model"):</strong> Defines the Mongoose Schema and Model. It knows <em>only</em> about the data's shape and rules.</li>
              <li><strong>`routes/postRoutes.mjs` (The "Router"):</strong> Defines the URL endpoints. It knows <em>nothing</em> about the database. It just maps a URL (e.g., `GET /`) to a controller function.</li>
              <li><strong>`controllers/postController.mjs` (The "Controller"):</strong> This is where <em>all the logic</em> lives. It's the "glue" that takes the `req` and `res` from the router and uses the `Model` to interact with the database.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The "Blog API" with Real Mongoose CRUD</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p className="font-semibold mt-2">1. `models/Post.mjs` (The MODEL)</p>
            <CodeBlock code={`
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = model('Post', postSchema);
export default Post;
            `} language="javascript" />
            
            <p className="font-semibold mt-2">2. `controllers/postController.mjs` (The CONTROLLER - All our logic)</p>
            <CodeBlock code={`
import Post from '../models/Post.mjs';

// C (CREATE)
export const createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) { next(error); }
};

// R (READ All)
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) { next(error); }
};

// R (READ One)
export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.status(200).json(post);
  } catch (error) { next(error); }
};

// U (UPDATE)
export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true } // Return the new doc & run schema validation
    );
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.status(200).json(post);
  } catch (error) { next(error); }
};

// D (DELETE)
export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.status(204).send();
  } catch (error) { next(error); }
};
            `} language="javascript" />

            <p className="font-semibold mt-2">3. `routes/postRoutes.mjs` (The ROUTER - Clean and simple)</p>
            <CodeBlock code={`
import express from 'express';
import { 
  createPost, 
  getAllPosts, 
  getPostById, 
  updatePost, 
  deletePost 
} from '../controllers/postController.mjs';

const router = express.Router();

router.route('/')
  .post(createPost)
  .get(getAllPosts);
  
router.route('/:id')
  .get(getPostById)
  .patch(updatePost)
  .delete(deletePost);

export default router;
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is this `async (req, res, next)` and `next(error)` pattern?</strong>
                <p className="pl-4">This is the proper way to do error handling with async/await. We wrap all our logic in a `try...catch` block. If the `await` call (like `Post.findById`) fails, the `catch` block catches the error. We then call `next(error)` to "pass" the error to the global error-handling middleware (defined in `server.js`) which sends the 500 error response.</p>
              </li>
              <li>
                <strong>What is `findByIdAndUpdate`? What are those options?</strong>
                <p className="pl-4">It's a Mongoose helper that finds a document by its ID and updates it in one step. The options are important:
                <br/>* <strong>`{'{'} new: true {'}'}`</strong>: By default, Mongoose returns the <em>old</em> document <em>before</em> the update. This option tells it to return the <em>new, updated</em> document.
                <br/>* <strong>`{'{'} runValidators: true {'}'}`</strong>: By default, Mongoose <em>does not</em> run schema validation on updates. This option forces it to run your schema rules (like `required` and `minlength`) before saving.</p>
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

export default Chapter10Part2;