export const Chapter10Quiz = {
  "database-fundamentals": [
    {
      question: "In the 'Filing Cabinet vs. Junk Drawer' analogy, which one is SQL (Relational)?",
      options: [
        "The flexible 'Junk Drawer'",
        "The highly organized 'Filing Cabinet'",
        "Neither, SQL is a language",
        "Both, they are the same"
      ],
      answer: "The highly organized 'Filing Cabinet'",
      explanation: "The analogy states: 'SQL (Relational): This is a highly organized... filing cabinet. Every drawer is labeled, and every file... must follow a strict template...'"
    },
    {
      question: "What is a 'predefined schema' and which database type uses it?",
      options: [
        "A flexible schema used by NoSQL",
        "A strict structure defined *before* adding data, used by SQL",
        "A schema that is defined automatically by the data, used by NoSQL",
        "A schema for database-level validation, used by both"
      ],
      answer: "A strict structure defined *before* adding data, used by SQL",
      explanation: "The notes define SQL as using a 'predefined schema, meaning you must define your data structure *before* you can add data.'"
    },
    {
      question: "What is the MERN stack's database (MongoDB) and what category is it?",
      options: [
        "MySQL, a Relational database",
        "MongoDB, a Document (NoSQL) database",
        "PostgreSQL, a Relational database",
        "Redis, a Key-Value (NoSQL) database"
      ],
      answer: "MongoDB, a Document (NoSQL) database",
      explanation: "The notes state: 'The MERN stack uses MongoDB, a document database.' and 'Examples: MongoDB (Document), Redis (Key-Value).'"
    },
    {
      question: "How does a NoSQL (MongoDB) database typically store related data, like a user's posts?",
      options: [
        "By splitting it into two tables and linking with a foreign key",
        "By nesting the posts as an array directly inside the user document",
        "It cannot store related data",
        "By creating a new database for each user"
      ],
      answer: "By nesting the posts as an array directly inside the user document",
      explanation: "The example shows: 'NoSQL / MongoDB (Document): Data is nested in one document.' with the `posts` array inside the user object."
    },
    {
      question: "According to the Q&A, why does the MERN stack use MongoDB?",
      options: [
        "Because it is the oldest and most stable database",
        "Because it is better for complex financial transactions",
        "Because it stores data as JSON-like BSON, which fits the 'JavaScript Everywhere' philosophy",
        "Because it is the only database that works with Node.js"
      ],
      answer: "Because it stores data as JSON-like BSON, which fits the 'JavaScript Everywhere' philosophy",
      explanation: "The Q&A states: 'Because MongoDB stores data as BSON (a binary version of JSON). This means data... looks *exactly like* a JavaScript object... and fits perfectly with the \"JavaScript Everywhere\" philosophy...'"
    },
    {
      question: "When is an SQL (Relational) database a better choice than NoSQL?",
      options: [
        "For social media feeds",
        "For applications needing high speed and flexible data",
        "For applications requiring high integrity and complex relationships, like banking",
        "For blogs and content management systems"
      ],
      answer: "For applications requiring high integrity and complex relationships, like banking",
      explanation: "The Q&A explains: 'SQL is better for applications that require high integrity and have complex, structured relationships (like a banking system...)'"
    }
  ],
  "mongodb-introduction": [
    {
      question: "In the 'Cloud Database' analogy, what is MongoDB Atlas?",
      options: [
        "The 'city's power grid' (a cloud Database-as-a-Service)",
        "The 'power plant in your garage' (a local server)",
        "The 'outlet' (the connection string)",
        "The 'appliance' (your Node.js app)"
      ],
      answer: "The 'city's power grid' (a cloud Database-as-a-Service)",
      explanation: "The analogy states: 'MongoDB Atlas... is the \"cloud\" version, like plugging into the city's power grid. It's a \"Database-as-a-Service\" (DBaaS).'"
    },
    {
      question: "In MongoDB, what is the equivalent of a SQL 'table'?",
      options: [
        "A Document",
        "A Field",
        "A Collection",
        "A Database"
      ],
      answer: "A Collection",
      explanation: "The notes define: 'Collection: A group of related documents. This is the equivalent of a \"table\" in SQL...'"
    },
    {
      question: "In MongoDB, what is the equivalent of a SQL 'row'?",
      options: [
        "A Document",
        "A Field",
        "A Collection",
        "A Database"
      ],
      answer: "A Document",
      explanation: "The notes define: 'Document: The basic unit of data... This is the equivalent of a \"row\" in SQL.'"
    },
    {
      question: "What is BSON, and why does MongoDB use it?",
      options: [
        "A new query language that replaces SQL",
        "A binary version of JSON that is faster and supports more data types",
        "A JavaScript framework for building schemas",
        "A text-based format for storing HTML"
      ],
      answer: "A binary version of JSON that is faster and supports more data types",
      explanation: "The Q&A states: 'BSON (Binary JSON) is a binary representation of JSON. MongoDB uses BSON internally because it's faster to parse... and supports *more data types*... (like `Date`, `ObjectId`...)'"
    },
    {
      question: "What is the 'Connection String' you get from MongoDB Atlas?",
      options: [
        "Your username and password",
        "A URL that your application uses to connect to the database",
        "A JavaScript file you must download",
        "An IP address you must whitelist"
      ],
      answer: "A URL that your application uses to connect to the database",
      explanation: "The notes explain: '...get your Connection String. This is the URL you will paste into your Node.js application (using `dotenv`) to connect.'"
    },
    {
      question: "What is the key difference between a MongoDB Collection and an SQL Table?",
      options: [
        "Collections are faster, Tables are slower",
        "Collections are schema-less (flexible), Tables have a strict, predefined schema",
        "Collections store BSON, Tables store JSON",
        "Collections are for production, Tables are for development"
      ],
      answer: "Collections are schema-less (flexible), Tables have a strict, predefined schema",
      explanation: "The Q&A states: 'A Table... has a *strict, predefined schema*. ... A Collection... is *schema-less*. Documents in the same collection can have completely different structures...'"
    }
  ],
  "mongodb-compass": [
    {
      question: "What is MongoDB Compass?",
      options: [
        "The command-line interface (CLI) for MongoDB",
        "The official GUI ('visual file explorer') for MongoDB",
        "The MongoDB database server itself",
        "A Node.js library for connecting to MongoDB"
      ],
      answer: "The official GUI ('visual file explorer') for MongoDB",
      explanation: "The analogy defines: 'MongoDB Compass (The GUI): This is a \"visual file explorer\" for your database. It's a desktop app that lets you *see* your databases...'"
    },
    {
      question: "What is `mongosh`?",
      options: [
        "The GUI for MongoDB",
        "The interactive command-line interface (CLI) for MongoDB",
        "The database server process",
        "A Mongoose method"
      ],
      answer: "The interactive command-line interface (CLI) for MongoDB",
      explanation: "The analogy defines: 'Mongo Shell (`mongosh`): This is the \"command line\" for your database. It's a text-based terminal where you type commands.'"
    },
    {
      question: "What `mongosh` command do you use to switch to (or create) a database named `myStore`?",
      options: [
        "show dbs",
        "use myStore",
        "db.create('myStore')",
        "switch myStore"
      ],
      answer: "use myStore",
      explanation: "The notes list `use [dbName]` as the command to switch databases, e.g., '`use myStore`'."
    },
    {
      question: "Which `mongosh` command finds *all* documents in the `employees` collection?",
      options: [
        "db.employees.find()",
        "db.employees.findOne()",
        "db.employees.findAll()",
        "show employees"
      ],
      answer: "db.employees.find()",
      explanation: "The notes and example both show: '`db.users.find()`: Reads *all* documents in the `users` collection.'"
    },
    {
      question: "How do you find all employees in the 'Marketing' department?",
      options: [
        "db.employees.find({ department: \"Marketing\" })",
        "db.employees.find(\"department = 'Marketing'\")",
        "db.employees.findOne({ department: \"Marketing\" })",
        "db.employees.filter({ department: \"Marketing\" })"
      ],
      answer: "db.employees.find({ department: \"Marketing\" })",
      explanation: "The notes and example show this syntax: `db.users.find({ age: 30 })`. You pass a query object specifying the field and value."
    },
    {
      question: "How do you connect MongoDB Compass to your Atlas (cloud) database?",
      options: [
        "You must install the database locally",
        "You copy the Connection String from Atlas and paste it into Compass",
        "You type in your username and password",
        "You have to use the `mongosh` CLI to connect"
      ],
      answer: "You copy the Connection String from Atlas and paste it into Compass",
      explanation: "The Q&A explains: 'It will give you a Connection String... You just copy that string, paste it into the \"New Connection\" screen in Compass, and it will connect.'"
    }
  ],
  "mongodb-crud": [
    {
      question: "What does CRUD stand for?",
      options: [
        "Create, Read, Update, Delete",
        "Connect, Read, Use, Drop",
        "Create, Route, Update, Download",
        "Connect, Require, Undo, Deploy"
      ],
      answer: "Create, Read, Update, Delete",
      explanation: "The notes and analogy define CRUD as: 'Create, Read, Update, Delete'."
    },
    {
      question: "What is the *critical mistake* to avoid when using `updateOne()` in `mongosh`?",
      options: [
        "Forgetting to pass a query",
        "Forgetting to use an update operator like `$set`",
        "Using `updateOne` instead of `updateMany`",
        "Running the command twice"
      ],
      answer: "Forgetting to use an update operator like `$set`",
      explanation: "The Q&A states this is a 'catastrophic' mistake: 'If you forget `$set`... MongoDB will **replace the entire document**... The original... fields will be **deleted**.'"
    },
    {
      question: "Which `mongosh` command is used to add a *single* new document to the `products` collection?",
      options: [
        "db.products.insertMany({})",
        "db.products.insertOne({})",
        "db.products.add({})",
        "db.products.create({})"
      ],
      answer: "db.products.insertOne({})",
      explanation: "The notes list `db.collection.insertOne(document)` as the method for inserting a single document."
    },
    {
      question: "What query would find all users with an age 'greater than' 18?",
      options: [
        "db.users.find({ age > 18 })",
        "db.users.find({ age: { $gt: 18 } })",
        "db.users.find(\"age > 18\")",
        "db.users.find({ age: { $greater: 18 } })"
      ],
      answer: "db.users.find({ age: { $gt: 18 } })",
      explanation: "The notes show this example: `db.users.find({ age: { $gt: 18 } })`. `$gt` is the 'greater than' query operator."
    },
    {
      question: "How do you find a document by its `_id` in `mongosh`?",
      options: [
        "db.users.findOne({ _id: \"...string...\" })",
        "db.users.findById(\"...string...\")",
        "db.users.findOne({ _id: ObjectId(\"...string...\") })",
        "db.users.find({ _id: \"...string...\" })"
      ],
      answer: "db.users.findOne({ _id: ObjectId(\"...string...\") })",
      explanation: "The Q&A explains: 'You can't just use a string... You must wrap the ID string in the `ObjectId()` constructor: `db.users.findOne({ _id: ObjectId(\"...\") })`'"
    },
    {
      question: "Which command would delete *all* documents from the `users` collection?",
      options: [
        "db.users.deleteAll()",
        "db.users.deleteMany({})",
        "db.users.drop()",
        "db.users.remove({})"
      ],
      answer: "db.users.deleteMany({})",
      explanation: "The notes list `db.collection.deleteMany(query)` for deleting *all* matching documents. An empty query object `{}` matches everything."
    }
  ],
  "mongodb-data-types": [
    {
      question: "In the 'Backpack vs. Library Card' analogy, what is 'Embedding'?",
      options: [
        "Storing an ID that points to another collection (the 'Library Card')",
        "Storing a large list of 5,000 posts",
        "Storing a small array of objects (like addresses) directly inside the parent document (the 'Backpack')",
        "Storing data in a separate SQL table"
      ],
      answer: "Storing a small array of objects (like addresses) directly inside the parent document (the 'Backpack')",
      explanation: "The analogy defines Embedding as: 'A \"one-to-few\" relationship... embed the addresses as an *array of objects* directly inside the `User` document. This is like putting your address book in your backpack.'"
    },
    {
      question: "What is the recommended design pattern for a 'one-to-few' relationship, like comments on a blog post?",
      options: [
        "Referencing (storing IDs)",
        "Embedding (storing comments in an array on the post)",
        "Creating a new collection for every comment",
        "Storing all comments in one giant 'comments' collection"
      ],
      answer: "Embedding (storing comments in an array on the post)",
      explanation: "The notes state: 'Use for \"has-a\" or \"one-to-few\" relationships... (e.g., the \"comments\" on a \"blog post\").' The example also shows comments being embedded."
    },
    {
      question: "What is the recommended design pattern for a 'one-to-many' relationship, like an author with 5,000 posts?",
      options: [
        "Embedding (storing all 5,000 posts in the author's document)",
        "Referencing (storing the `author_id` in each post document)",
        "Creating a new collection for each post",
        "Storing all posts in a single text file"
      ],
      answer: "Referencing (storing the `author_id` in each post document)",
      explanation: "The analogy and notes both use this exact example. 'An `Author` has 5,000 `Posts`... You use <strong>Referencing</strong>.' This avoids data duplication and massive documents."
    },
    {
      question: "What is the 12-byte unique identifier that MongoDB automatically generates for every document?",
      options: [
        "A `Date` timestamp",
        "An `ObjectId`",
        "A `String`",
        "A `UUID`"
      ],
      answer: "An `ObjectId`",
      explanation: "The notes define: '`ObjectId`: The 12-byte unique identifier (`_id`) automatically generated for every document.'"
    },
    {
      question: "According to the Q&A, when should you choose to Reference instead of Embed?",
      options: [
        "Always, embedding is a bad practice",
        "When the data is small and always accessed together",
        "When the embedded list could grow *infinitely* (like 'followers')",
        "When you want your queries to be faster"
      ],
      answer: "When the embedded list could grow *infinitely* (like 'followers')",
      explanation: "The Q&A rule states: 'Only switch to <strong>referencing</strong> if: 1. The embedded list could grow <em>infinitely</em> (like a \"followers\" list).'"
    },
    {
      question: "What are BSON data types?",
      options: [
        "The same as JSON (string, number, boolean)",
        "A binary format that includes all JSON types *plus* extras like `ObjectId` and `Date`",
        "An older version of JSON",
        "A query language for MongoDB"
      ],
      answer: "A binary format that includes all JSON types *plus* extras like `ObjectId` and `Date`",
      explanation: "The notes state: 'MongoDB uses BSON... which supports all JSON data types plus more.' It then lists `ObjectId` and `Date` as examples."
    }
  ],
  "mongoose-introduction": [
    {
      question: "In the 'Strict Butler' analogy, what is the Mongoose `Schema`?",
      options: [
        "The 'Strict Butler' (the Model)",
        "The 'Blueprint' or 'Rules' for the data",
        "The database itself",
        "The 'Commands' you give"
      ],
      answer: "The 'Blueprint' or 'Rules' for the data",
      explanation: "The analogy states: 'The Schema: This is the blueprint you design. It says, \"A 'User' document MUST have a `name`...\"'"
    },
    {
      question: "In the 'Strict Butler' analogy, what is the Mongoose `Model`?",
      options: [
        "The 'Strict Butler' or 'Constructor' you use to issue commands",
        "The 'Blueprint' or 'Rules'",
        "The connection string",
        "The raw data in the database"
      ],
      answer: "The 'Strict Butler' or 'Constructor' you use to issue commands",
      explanation: "The analogy states: 'The Model: This is the butler... This is the main object you use to perform all CRUD operations. ... You just say, `User.findById(123)`.'"
    },
    {
      question: "What is an ODM (Object Data Modeling) library?",
      options: [
        "The database server itself",
        "A 'translator' that maps JavaScript objects (Models) to database documents",
        "A query language like SQL",
        "A graphical user interface like Compass"
      ],
      answer: "A 'translator' that maps JavaScript objects (Models) to database documents",
      explanation: "The Q&A explains: 'It stands for Object Data Modeling. It's a \"translator\" that lets you map your \"Models\" (which are JavaScript classes/objects) to \"Documents\"...'"
    },
    {
      question: "MongoDB is 'schema-less'. Why does Mongoose 'enforce a schema'?",
      options: [
        "It doesn't, Mongoose is also schema-less",
        "To provide data integrity, validation, and structure at the *application level*",
        "To make the database run faster",
        "To change the database from NoSQL to SQL"
      ],
      answer: "To provide data integrity, validation, and structure at the *application level*",
      explanation: "The Q&A states this is the key concept: 'Mongoose enforces a schema at the *application level*. This gives you... data integrity, validation, and structure that a real-world application *needs*...'"
    },
    {
      question: "What are the 'Three Core Parts' of Mongoose?",
      options: [
        "find, create, update",
        "GET, POST, DELETE",
        "Connection, Schema, Model",
        "BSON, JSON, SQL"
      ],
      answer: "Connection, Schema, Model",
      explanation: "The notes list: '1. The Connection: `mongoose.connect()`... 2. The Schema: `new mongoose.Schema()`... 3. The Model: `mongoose.model()`...'"
    },
    {
      question: "Which of the following is an async Mongoose Model method for creating a new document?",
      options: [
        "User.find()",
        "User.create()",
        "User.schema()",
        "User.connect()"
      ],
      answer: "User.create()",
      explanation: "The notes list `User.create()` as one of the async CRUD functions provided by the Model. The example also shows `await User.create(...)`."
    }
  ],
  "mongoose-schemas": [
    {
      question: "What is the difference between a Mongoose Schema and a Mongoose Model?",
      options: [
        "They are the same thing",
        "The Schema is the *blueprint* (rules); the Model is the *tool* (e.g., `User.find()`)",
        "The Model is the *blueprint* (rules); the Schema is the *tool*",
        "The Schema is the database; the Model is the collection"
      ],
      answer: "The Schema is the *blueprint* (rules); the Model is the *tool* (e.g., `User.find()`)",
      explanation: "The Q&A clearly states: 'A Schema is the *blueprint*. It's a \"dumb\" object that just defines the rules. A Model is the *tool*... It's a \"smart\" object... that has all the methods like `User.find()`...'"
    },
    {
      question: "You create a model with `mongoose.model('User', userSchema)`. What will Mongoose name the collection in the database?",
      options: [
        "User",
        "user",
        "users",
        "userSchema"
      ],
      answer: "users",
      explanation: "The Q&A states: 'Mongoose then *pluralizes* and *lowercases* this string... So, the model `User` will be linked to the MongoDB collection `users`.'"
    },
    {
      question: "How do you define a field in a Mongoose schema that *must* be included?",
      options: [
        "unique: true",
        "required: true",
        "default: true",
        "exists: true"
      ],
      answer: "required: true",
      explanation: "The example shows: `name: { type: String, required: true }`. This field is mandatory."
    },
    {
      question: "How do you set a *dynamic* default value, like the current date?",
      options: [
        "default: Date.now()",
        "default: () => Date.now()",
        "default: 'Date.now()'",
        "You cannot set dynamic defaults"
      ],
      answer: "default: () => Date.now()",
      explanation: "The example shows: `createdAt: { type: Date, default: () => Date.now() }`. Using a function executes it at creation time."
    },
    {
      question: "What does the `trim: true` property do in a String schema type?",
      options: [
        "It trims the string to a max length",
        "It validates that the string has no whitespace",
        "It's a sanitizer that removes whitespace from the beginning and end",
        "It's a validator that checks for a `required` field"
      ],
      answer: "It's a sanitizer that removes whitespace from the beginning and end",
      explanation: "The example `userSchema` has `trim: true` with a comment: '// This will trim whitespace'."
    },
    {
      question: "What does the `unique: true` property do?",
      options: [
        "It's a sanitizer that makes the string unique",
        "It's a validator that checks if the field is required",
        "It creates a unique index in the database to prevent duplicates",
        "It's a custom error message"
      ],
      answer: "It creates a unique index in the database to prevent duplicates",
      explanation: "The example `userSchema` has `unique: true` with a comment: '// Mongoose will create a unique index'."
    }
  ],
  "data-validation-mongoose": [
    {
      question: "In the 'Bouncer's Rulebook' analogy, what is Mongoose Validation?",
      options: [
        "The bouncer (Mongoose) checking data against the rulebook (Schema)",
        "The bouncer (Mongoose) cleaning the data",
        "The person trying to enter (the data)",
        "The error that is thrown"
      ],
      answer: "The bouncer (Mongoose) checking data against the rulebook (Schema)",
      explanation: "The analogy states: 'When a new document... tries to enter... the bouncer (Mongoose) checks its data against the rulebook [Schema] *before* letting it into the database...'"
    },
    {
      question: "What is the difference between Validation and Sanitization?",
      options: [
        "Validation *cleans* data; Sanitization *rejects* data",
        "Validation *checks* and *rejects* bad data; Sanitization *cleans* data and *accepts* it",
        "They are the same thing",
        "Validation is for strings; Sanitization is for numbers"
      ],
      answer: "Validation *checks* and *rejects* bad data; Sanitization *cleans* data and *accepts* it",
      explanation: "The Q&A explains: 'Validation *checks* data and *rejects* the request if the data is bad... Sanitization *cleans* the data and *accepts* it...'"
    },
    {
      question: "When you try to save a document that fails a schema rule, what does Mongoose do?",
      options: [
        "It saves it anyway",
        "It returns `null`",
        "It 'hangs' the request",
        "It throws a `ValidationError`"
      ],
      answer: "It throws a `ValidationError`",
      explanation: "The notes state: 'When a validation rule fails, Mongoose throws a `ValidationError`. You **must** wrap your `.create()`... calls in a `try...catch` block to handle this...'"
    },
    {
      question: "A user tries to sign up with an email that is already in the database. What error code does Mongoose throw?",
      options: [
        "404",
        "11000",
        "ValidationError",
        "401"
      ],
      answer: "11000",
      explanation: "The example controller code shows: '`if (error.code === 11000)` ... `return res.status(400).json({ error: 'Email already exists' })`'. This is the duplicate key error."
    },
    {
      question: "What is the `enum` validator used for?",
      options: [
        "To set a minimum length for a string",
        "To ensure a value *must* be one of the strings in a provided array",
        "To set a default value",
        "To match a regular expression"
      ],
      answer: "To ensure a value *must* be one of the strings in a provided array",
      explanation: "The notes list: '`enum: ['admin', 'user']`': The value *must* be one of the strings in the array.'"
    },
    {
      question: "What is the best-practice relationship between `express-validator` and Mongoose validation?",
      options: [
        "Use only `express-validator`",
        "Use only Mongoose validation",
        "Use *both*: `express-validator` at the router (front door) and Mongoose at the database (final check)",
        "They cannot be used together"
      ],
      answer: "Use *both*: `express-validator` at the router (front door) and Mongoose at the database (final check)",
      explanation: "The Q&A states: 'Both... `express-validator` is the \"bouncer\" at the front door... Mongoose validation is the \"database-layer security.\"'"
    }
  ],
  "data-relationships": [
    {
      question: "In the 'Backpack vs. Library Card' analogy, what is 'Embedding' data?",
      options: [
        "Storing an ID that points to another collection (the 'Library Card')",
        "Storing a small array of objects (like addresses) directly inside the parent document (the 'Backpack')",
        "Storing data in a separate SQL table",
        "Using Mongoose middleware"
      ],
      answer: "Storing a small array of objects (like addresses) directly inside the parent document (the 'Backpack')",
      explanation: "The analogy defines Embedding as: 'A \"one-to-few\" relationship... embed the addresses as an *array of objects* directly inside the `User` document. This is... your backpack.'"
    },
    {
      question: "What is the recommended design for a 'one-to-many' relationship, like an `Author` with thousands of `Posts`?",
      options: [
        "Embedding (store all posts in the author's document)",
        "Referencing (store the `author_id` in each post document)",
        "Creating a new collection for each post",
        "Storing all posts in a single text file"
      ],
      answer: "Referencing (store the `author_id` in each post document)",
      explanation: "The analogy and notes both use this exact example. 'An `Author` has 5,000 `Posts`... You use <strong>Referencing</strong>.' This avoids data duplication and massive documents."
    },
    {
      question: "What is the Mongoose method that 'magically' follows a reference ID and stitches the related document into your query?",
      options: [
        ".find()",
        ".join()",
        ".populate()",
        ".connect()"
      ],
      answer: ".populate()",
      explanation: "The notes define: '`.populate(field)`: A \"magic\" Mongoose method. You chain it to a `find()` query, and it automatically \"follows\" the reference, fetches the related document, and stitches it in...'"
    },
    {
      question: "What is the correct Mongoose schema syntax to define a reference to a 'User' model?",
      options: [
        "author: { type: 'User' }",
        "author: { type: 'ObjectId', ref: 'User' }",
        "author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }",
        "author: { ref: 'User' }"
      ],
      answer: "author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }",
      explanation: "The technical concept and example both show this exact syntax, specifying both the `type` as `ObjectId` and the `ref` as the model name 'User'."
    },
    {
      question: "Is Mongoose `.populate()` a real database `JOIN` like in SQL?",
      options: [
        "Yes, it's an efficient database-level JOIN",
        "No, it's a Mongoose helper that secretly runs a *second query* and 'stitches' the data in JavaScript",
        "Yes, but it's very slow",
        "No, it's just another name for `find()`"
      ],
      answer: "No, it's a Mongoose helper that secretly runs a *second query* and 'stitches' the data in JavaScript",
      explanation: "The Q&A clearly states: 'It is *not* a database-level `JOIN`... It secretly runs a *second query* for you... It then \"stitches\" them together in JavaScript.'"
    },
    {
      question: "According to the Q&A, what is the default rule for deciding between embedding and referencing?",
      options: [
        "Always reference",
        "Always embed",
        "Start by embedding, and only reference if the list could grow infinitely or the data is accessed separately",
        "Start by referencing, and only embed if you need more speed"
      ],
      answer: "Start by embedding, and only reference if the list could grow infinitely or the data is accessed separately",
      explanation: "The Q&A states this rule: 'Start by <strong>embedding</strong>. It's faster... Only switch to <strong>referencing</strong> if: 1. The embedded list could grow <em>infinitely</em>... 2. You need to access the sub-document... on its own...'"
    }
  ],
  "mongoose-middleware": [
    {
      question: "In the 'Before and After Triggers' analogy, what is a `pre('save')` hook?",
      options: [
        "A trigger that runs *after* a document is saved",
        "A trigger that runs *before* a document is saved (e.g., to hash a password)",
        "A trigger that runs *after* a document is removed",
        "A trigger that runs *before* a document is found"
      ],
      answer: "A trigger that runs *before* a document is saved (e.g., to hash a password)",
      explanation: "The analogy states: '`pre('save')` Hook (Before): \"**Before** you `save` this new user... you *must* stop, hash the password...\"'"
    },
    {
      question: "What is the *most common* and important use case for a `pre('save')` hook?",
      options: [
        "Logging the document",
        "Deleting related documents",
        "Hashing a password before it's saved to the database",
        "Validating an email address"
      ],
      answer: "Hashing a password before it's saved to the database",
      explanation: "The notes state: 'It is the perfect place to... hash passwords.' The example and Q&A are both dedicated to this specific use case."
    },
    {
      question: "In a `pre` hook, what function *must* you call to pass control to the main operation (e.g., to actually save)?",
      options: [
        "next()",
        "done()",
        "save()",
        "return"
      ],
      answer: "next()",
      explanation: "The notes explain: 'It receives a `next()` function that you *must* call to pass control to the main operation.' The example also shows `next()` being called."
    },
    {
      question: "Why is it critical to check `this.isModified('password')` inside a `pre('save')` hook for password hashing?",
      options: [
        "To check if the password is strong enough",
        "To avoid re-hashing an already-hashed password when a user just updates their email",
        "To make the hashing process faster",
        "To check if the user is new"
      ],
      answer: "To avoid re-hashing an already-hashed password when a user just updates their email",
      explanation: "The Q&A states this is critical: 'If a user updates their `email`... this hook will still run. If you didn't check, you would *re-hash* their *already-hashed* password...'"
    },
    {
      question: "What is the difference between Document Middleware and Query Middleware?",
      options: [
        "Document middleware runs on `save`; Query middleware runs on `find`",
        "Document middleware runs on a document (e.g., `save`); Query middleware runs on a query (e.g., `find`, `updateOne`)",
        "Document middleware is for `pre` hooks; Query middleware is for `post` hooks",
        "There is no difference"
      ],
      answer: "Document middleware runs on a document (e.g., `save`); Query middleware runs on a query (e.g., `find`, `updateOne`)",
      explanation: "The notes define these two 'Flavors': 'Document Middleware: Runs on a *document*. ... Hooks: `save`, `validate`...' and 'Query Middleware: Runs on a *query*. ... Hooks: `find`, `findOne`...'"
    },
    {
      question: "According to the Q&A, why should you *never* store passwords in plain text?",
      options: [
        "It's too slow to save them",
        "It's a massive security violation; if your database is stolen, all passwords are leaked",
        "It violates the Mongoose schema",
        "It makes passwords hard to query"
      ],
      answer: "It's a massive security violation; if your database is stolen, all passwords are leaked",
      explanation: "The Q&A states: 'You **never** store passwords in plain text. It is the biggest security violation you can make. If your database is ever stolen, all your users' passwords will be leaked.'"
    }
  ],
  "indexing-query-optimization": [
    {
      question: "In the 'Textbook Index' analogy, what is a 'Collection Scan' (COLLSCAN)?",
      options: [
        "Using the index at the back to find a word (fast)",
        "Reading the entire book from page 1 to 500 (slow)",
        "The index at the back of the book",
        "The textbook itself"
      ],
      answer: "Reading the entire book from page 1 to 500 (slow)",
      explanation: "The analogy states: 'Without an Index (A \"Collection Scan\"): You must read *every single page*... This is *extremely* slow.'"
    },
    {
      question: "When you run `.explain('executionStats')` on a query, what `stage` do you *want* to see for an optimized query?",
      options: [
        "COLLSCAN (Collection Scan)",
        "IXSCAN (Index Scan)",
        "FETCH",
        "SORT"
      ],
      answer: "IXSCAN (Index Scan)",
      explanation: "The notes state: 'In the output, you want to see the `stage` is `IXSCAN (Index Scan)`. If it's `COLLSCAN`... you are missing an index.'"
    },
    {
      question: "Why should you *not* add an index to every single field in your schema?",
      options: [
        "Indexes slow down *read* operations (`find`)",
        "Indexes have a cost: they take up storage and slow down *write* operations (`create`, `update`)",
        "Indexes are not supported by Mongoose",
        "Indexes can only be added to the `_id` field"
      ],
      answer: "Indexes have a cost: they take up storage and slow down *write* operations (`create`, `update`)",
      explanation: "The Q&A explains: '...indexes have a *cost*. Every index you add takes up *storage space*... every <strong>write</strong> operation (`create`, `update`, `delete`) becomes *slower*...'"
    },
    {
      question: "How do you create a *unique* index on an `email` field in a Mongoose schema?",
      options: [
        "email: { type: String, index: true }",
        "email: { type: String, unique: true }",
        "userSchema.index({ email: 1 })",
        "email: { type: String, index: 'unique' }"
      ],
      answer: "email: { type: String, unique: true }",
      explanation: "The notes state: '`email: { type: String, unique: true }` (This *automatically* creates a unique index).'"
    },
    {
      question: "By default, what is the *only* field that MongoDB automatically creates an index on?",
      options: [
        "The `_id` field",
        "The `name` field",
        "The `email` field",
        "No fields are indexed by default"
      ],
      answer: "The `_id` field",
      explanation: "The notes state: 'By default, MongoDB *only* creates an index on the `_id` field.'"
    },
    {
      question: "What is a 'compound index'?",
      options: [
        "An index that is very large",
        "An index that is on a nested object",
        "A single index that is on *multiple fields* (e.g., `lastName` and `firstName`)",
        "A bad index that should be avoided"
      ],
      answer: "A single index that is on *multiple fields* (e.g., `lastName` and `firstName`)",
      explanation: "The Q&A defines it: 'It's a single index on <em>multiple fields</em>. ...a compound index on `{ age: 1, city: 1 }` would be... faster...'"
    }
  ],
  "aggregation-pipeline": [
    {
      question: "In the 'Factory Assembly Line' analogy, what is the Aggregation Pipeline?",
      options: [
        "A simple `find()` query to *fetch* raw materials",
        "The database itself",
        "An 'assembly line' that *processes* materials in a series of 'Stages'",
        "The final, sorted list of documents"
      ],
      answer: "An 'assembly line' that *processes* materials in a series of 'Stages'",
      explanation: "The analogy states: 'The Aggregation Pipeline is like a *factory assembly line* that *processes* those materials... It goes through a series of Stages...'"
    },
    {
      question: "When should you use `aggregate()` instead of `find()`?",
      options: [
        "When you want to get a *list of documents*",
        "When you need *analytics* or a *computed report* (e.g., a total sum or average)",
        "When you are updating a document",
        "When you are deleting a document"
      ],
      answer: "When you need *analytics* or a *computed report* (e.g., a total sum or average)",
      explanation: "The Q&A explains: 'You use `find()` when you want to get a *list of documents*. You use `aggregate()` when you need to get *analytics or a computed report*...'"
    },
    {
      question: "Which aggregation stage is used to *filter* documents and should always be placed first?",
      options: [
        "$group",
        "$sort",
        "$project",
        "$match"
      ],
      answer: "$match",
      explanation: "The notes state: '`$match`: Filters the documents... **Always put this first** to reduce the number of documents processed.'"
    },
    {
      question: "Which aggregation stage is used to group documents and compute new fields using 'accumulators' like `$sum` or `$avg`?",
      options: [
        "$match",
        "$group",
        "$sort",
        "$project"
      ],
      answer: "$group",
      explanation: "The notes state: '`$group`: Groups documents by a specified `_id` key and computes new fields. This is the core of aggregation.' It also lists `$sum` and `$avg` as accumulators."
    },
    {
      question: "In the example, what does `{ $sum: 1 }` do inside the `$group` stage?",
      options: [
        "It adds 1 to all prices",
        "It finds the product with `id: 1`",
        "It sorts the data by 1",
        "It counts the number of documents in each group"
      ],
      answer: "It counts the number of documents in each group",
      explanation: "The example code comment for `$group` states: '`totalProducts: { $sum: 1 }`, // Count the documents in each group'"
    },
    {
      question: "What is the `$lookup` stage used for?",
      options: [
        "To find a single document",
        "To perform a 'left join' to pull in data from *another collection*",
        "To create a new field",
        "To filter the results"
      ],
      answer: "To perform a 'left join' to pull in data from *another collection*",
      explanation: "The notes state: '`$lookup`: Performs a \"left join\" to pull in data from *another collection* (like Mongoose's `.populate()`...)'"
    }
  ],
  // "database-mini-project": [
  //   {
  //     question: "In the 'Kitchen & Pantry' analogy, what is the Mongoose Model?",
  //     options: [
  //       "The 'kitchen' (Express API)",
  //       "The 'fake pantry' (in-memory array)",
  //       "The 'refrigerated pantry' (MongoDB)",
  //       "The 'butler' (who talks to the pantry and enforces rules)"
  //     ],
  //     answer: "The 'butler' (who talks to the pantry and enforces rules)",
  //     explanation: "The analogy states: '...connecting our kitchen (Express API) to a real... pantry (MongoDB). We will use Mongoose as the \"butler\" who knows how to talk to the pantry...'"
  //   },
  //   {
  //     question: "What is the 'Model-Router-Controller' pattern?",
  //     options: [
  //       "A way to structure a React application",
  //       "A separation of concerns: Model (data), Router (URLs), Controller (logic)",
  //       "A type of database indexing",
  //       "A method for file uploads"
  //     ],
  //     answer: "A separation of concerns: Model (data), Router (URLs), Controller (logic)",
  //     explanation: "The notes state: 'This separation is the key... 1. `models/post.mjs` (The \"Model\"):... data's shape... 2. `routes/postRoutes.mjs` (The \"Router\"):... URL endpoints. 3. `controllers/postController.mjs` (The \"Controller\"):... *all the logic*...'"
  //   },
  //   {
  //     question: "In the example, which file contains *all* the database logic (e.g., `await Post.find()`, `await Post.create()`)?",
  //     options: [
  //       "`server.mjs` (The Main File)",
  //       "`models/Post.mjs` (The Model)",
  //       "`routes/postRoutes.mjs` (The Router)",
  //       "`controllers/postController.mjs` (The Controller)"
  //     ],
  //     answer: "`controllers/postController.mjs` (The Controller)",
  //     explanation: "The notes and example show this separation. `controllers/postController.mjs` is where 'all the logic lives' and contains all the `Post.find()`, `Post.create()`, etc. calls."
  //   },
  //   {
  //     question: "In the controller, what is the purpose of `next(error)`?",
  //     options: [
  //       "It runs the next route in the file",
  //       "It passes the error to the global error-handling middleware in `server.js`",
  //       "It fixes the error and retries the database query",
  //       "It logs the error to the console and stops"
  //     ],
  //     answer: "It passes the error to the global error-handling middleware in `server.js`",
  //     explanation: "The Q&A explains: 'We... call `next(error)` to \"pass\" the error to the global error-handling middleware (defined in `server.js`) which sends the 500 error response.'"
  //   },
  //   {
  //     question: "In `findByIdAndUpdate`, what does the option `{ new: true }` do?",
  //     options: [
  //       "It validates the data before updating",
  //       "It creates a new document if one is not found",
  //       "It forces Mongoose to return the *new, updated* document instead of the old one",
  //       "It's an alias for `{ runValidators: true }`"
  //     ],
  //     answer: "It forces Mongoose to return the *new, updated* document instead of the old one",
  //     explanation: "The Q&A explains: '`{ new: true }`: By default, Mongoose returns the *old* document... This option tells it to return the *new, updated* document.'"
  //   },
  //   {
  //     question: "What is the purpose of `{ runValidators: true }` in `findByIdAndUpdate`?",
  //     options: [
  //       "To return the new document",
  //       "To force Mongoose to run your schema validation rules (like `required`) on the update",
  //       "To check if the user is authenticated",
  //       "To validate the `req.params.id`"
  //     ],
  //     answer: "To force Mongoose to run your schema validation rules (like `required`) on the update",
  //     explanation: "The Q&A explains: '`{ runValidators: true }`: By default, Mongoose *does not* run schema validation on updates. This option forces it to run your schema rules...'"
  //   }
  // ]
};