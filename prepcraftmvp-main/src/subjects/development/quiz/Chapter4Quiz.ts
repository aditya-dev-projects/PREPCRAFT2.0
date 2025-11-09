export const Chapter4Quiz = {
  "javascript-basics": [
    {
      question: "In the 'Digital Brain' analogy, what is JavaScript (JS)?",
      options: [
        "The 'skeleton' that provides structure",
        "The 'skin' that provides style",
        "The 'brain' that brings the page to life and handles interactivity",
        "The 'blueprint' for the website"
      ],
      answer: "The 'brain' that brings the page to life and handles interactivity",
      explanation: "The notes state: 'If HTML is the \"skeleton\" of a webpage and CSS is the \"skin,\" then JavaScript (JS) is the \"brain.\" It's a programming language that brings the webpage to life...'"
    },
    {
      question: "What is the modern best practice for declaring variables, according to the Q&A?",
      options: [
        "Use `var` for everything",
        "Use `let` for everything",
        "Use `const` by default, and `let` only when you know the value will change",
        "Use `let` by default, and `const` only for functions"
      ],
      answer: "Use `const` by default, and `let` only when you know the value will change",
      explanation: "The Q&A section states: 'Use `const` by default for everything... Use `let` *only* when you know a variable's value needs to change, such as a counter in a loop...'"
    },
    {
      question: "Which of the following is a *Complex* Data Type, not a Primitive?",
      options: [
        "String",
        "Number",
        "Array",
        "Boolean"
      ],
      answer: "Array",
      explanation: "The notes list String, Number, Boolean, null, and undefined as Primitive Data Types. Object and Array are listed as Complex Data Types."
    },
    {
      question: "Why is it strongly recommended to use `===` (strict equality) instead of `==` (loose equality)?",
      options: [
        "`===` is faster than `==`",
        "`==` is outdated and no longer works in modern browsers",
        "`==` performs type coercion which can cause unpredictable bugs (like 0 == false)",
        "`===` can compare objects, but `==` cannot"
      ],
      answer: "`==` performs type coercion which can cause unpredictable bugs (like 0 == false)",
      explanation: "The Q&A section explains that `==` performs type coercion (e.g., `0 == false` is `true`), which leads to bugs. `===` is strict, checking both value and type (`0 === false` is `false`)."
    },
    {
      question: "What is the key difference between `let` and `const`?",
      options: [
        "`let` is block-scoped, but `const` is function-scoped",
        "`let` can be reassigned, but `const` cannot be reassigned",
        "`const` can be reassigned, but `let` cannot be reassigned",
        "`let` is for numbers, `const` is for strings"
      ],
      answer: "`let` can be reassigned, but `const` cannot be reassigned",
      explanation: "The notes define `const` for 'variables that **will not be reassigned**' and `let` for 'variables whose values **can be reassigned**'."
    },
    {
      question: "Which of the following is NOT one of the 6 'falsy' values in JavaScript?",
      options: [
        "0",
        "\"\"",
        "`false`",
        "`' '` (a string with a space)"
      ],
      answer: "`' '` (a string with a space)",
      explanation: "A string with just a space is not empty, so it is 'truthy'. The 6 falsy values listed in the 'control-structures' section are `false`, `0`, `\"\"`, `null`, `undefined`, and `NaN`."
    }
  ],
  "control-structures": [
    {
      question: "In the 'Choose Your Own Adventure' analogy, what is an `if` statement?",
      options: [
        "A set of instructions to repeat 10 times",
        "The title of the book",
        "A choice: 'If you open the door, turn to page 45. Otherwise (else), turn to page 52.'",
        "The table of contents"
      ],
      answer: "A choice: 'If you open the door, turn to page 45. Otherwise (else), turn to page 52.'",
      explanation: "The notes' analogy directly states: 'Conditionals (`if`): \"If you open the door, turn to page 45. Otherwise (else), turn to page 52.\"'"
    },
    {
      question: "A developer writes `if (username) { ... }`. Why does this work for checking if the `username` string is not empty?",
      options: [
        "Because `if` statements only work on strings",
        "Because a non-empty string is 'truthy' and an empty string (`\"\"`) is 'falsy'",
        "Because `username` is a special keyword",
        "This code will not work and will throw an error"
      ],
      answer: "Because a non-empty string is 'truthy' and an empty string (`\"\"`) is 'falsy'",
      explanation: "The Q&A section explains this: 'If `userName` is an empty string (`\"\"`), it's \"falsy,\" and the `if` block won't run. If it has any text... it's \"truthy\"...'"
    },
    {
      question: "When should you use a `while` loop instead of a `for` loop?",
      options: [
        "When you know the exact number of iterations",
        "When you are looping over an array",
        "When you don't know the number of iterations, but you know the condition to stop",
        "You should always use `for` loops instead of `while` loops"
      ],
      answer: "When you don't know the number of iterations, but you know the condition to stop",
      explanation: "The Q&A section states: 'Use a `for` loop when you know *how many times* you need to loop... Use a `while` loop when you *don't* know... but you know the *condition* to stop.'"
    },
    {
      question: "What is the 'Ternary Operator'?",
      options: [
        "A loop that runs three times",
        "A one-line shortcut for an `if/else` statement",
        "A way to declare three variables at once",
        "A conditional that checks `if / else if / else`"
      ],
      answer: "A one-line shortcut for an `if/else` statement",
      explanation: "The notes define the Ternary Operator as 'A one-line shortcut for `if/else`' with the syntax `condition ? expressionIfTrue : expressionIfFalse`."
    },
    {
      question: "Which of the following values is 'falsy' in JavaScript?",
      options: [
        "`'false'` (a string)",
        "`1`",
        "`{}` (an empty object)",
        "`0` (the number zero)"
      ],
      answer: "`0` (the number zero)",
      explanation: "The notes list the 6 falsy values as `false`, `0`, `\"\"`, `null`, `undefined`, and `NaN`. Empty objects and arrays are 'truthy'."
    },
    {
      question: "Which control structure is a clean way to compare one single value against many possible 'cases'?",
      options: [
        "`if / else if / else`",
        "`for` loop",
        "`switch` statement",
        "Ternary Operator"
      ],
      answer: "`switch` statement",
      explanation: "The notes define the `switch` statement as 'A clean way to compare one value against many possible \"cases.\""
    }
  ],
  "functions-scope": [
    {
      question: "In the 'Reusable Recipe' analogy for functions, what are 'parameters'?",
      options: [
        "The finished dish",
        "The ingredients the recipe needs (e.g., `num1`, `num2`)",
        "The steps to follow",
        "The 'kitchen rules'"
      ],
      answer: "The ingredients the recipe needs (e.g., `num1`, `num2`)",
      explanation: "The analogy defines Parameters as: 'The ingredients the recipe needs (e.g., `num1`, `num2`).'"
    },
    {
      question: "What is 'hoisting' in JavaScript?",
      options: [
        "A performance bug to be avoided",
        "The JS engine 'lifts' function declarations and `var` variables to the top of their scope before code runs",
        "The modern way to use `let` and `const`",
        "A term for 'nesting' functions inside each other"
      ],
      answer: "The JS engine 'lifts' function declarations and `var` variables to the top of their scope before code runs",
      explanation: "The Q&A section explains: 'It means the JavaScript engine \"lifts\" all function declarations and `var` variables to the top of their scope *before* it runs the code.'"
    },
    {
      question: "What is 'Block Scope' and which variable keywords use it?",
      options: [
        "Scope for the entire function; used by `var`",
        "Scope for the entire file (Global); used by all variables",
        "Scope limited to the `{...}` block; used by `let` and `const`",
        "Scope for arrow functions only"
      ],
      answer: "Scope limited to the `{...}` block; used by `let` and `const`",
      explanation: "The notes define Block Scope: 'Variables declared with `let` and `const`. Accessible *only* within the `{ ... }` block they are defined in... This is the most predictable and preferred scope.'"
    },
    {
      question: "What is a key difference between a Function Declaration (`function add()`) and an Arrow Function (`const add = () =>`)?",
      options: [
        "Arrow functions are hoisted, but Declarations are not.",
        "Function Declarations are hoisted, but Arrow Functions are not.",
        "Arrow functions must return a value, but Declarations do not.",
        "Arrow functions cannot take parameters."
      ],
      answer: "Function Declarations are hoisted, but Arrow Functions are not.",
      explanation: "The notes and Q&A highlight this: 'Declarations (`function add()`) are hoisted... Arrow functions are not hoisted.' This is a key difference."
    },
    {
      question: "In the analogy, what is 'Scope'?",
      options: [
        "The finished dish",
        "The ingredients",
        "The reusable recipe itself",
        "The 'kitchen rules' about where variables can be used"
      ],
      answer: "The 'kitchen rules' about where variables can be used",
      explanation: "The analogy states: 'Scope is like \"kitchen rules.\" Variables created inside the kitchen (Function Scope) are not visible or usable *outside* the kitchen.'"
    },
    {
      question: "Which type of function is *not* hoisted and has a concise syntax using `=>`?",
      options: [
        "Function Declaration",
        "Function Expression",
        "Arrow Function",
        "Global Function"
      ],
      answer: "Arrow Function",
      explanation: "The notes define Arrow Functions as having 'The modern, concise syntax (`=>`)' and states they are 'not hoisted.'"
    }
  ],
  "arrays-methods": [
    {
      question: "In the 'Library Shelf' analogy, which method is like 'Give me a *new list* of only the *non-fiction* books'?",
      options: [
        ".map()",
        ".forEach()",
        ".filter()",
        ".reduce()"
      ],
      answer: ".filter()",
      explanation: "The analogy defines `.filter()` as: '\"Give me a *new list* of only the *non-fiction* books\"'. It *selects* items that pass a test."
    },
    {
      question: "Which array method *transforms* each item and returns a *new array* of the exact same length?",
      options: [
        ".map()",
        ".forEach()",
        ".filter()",
        ".reduce()"
      ],
      answer: ".map()",
      explanation: "The notes define `.map()`: '**Transforms** each item and returns a **new array** of the *same length*.'"
    },
    {
      question: "Which array method *aggregates* an array into a single value (like a sum)?",
      options: [
        ".map()",
        ".forEach()",
        ".filter()",
        ".reduce()"
      ],
      answer: ".reduce()",
      explanation: "The notes define `.reduce()`: '**Aggregates** an array into a *single value* (e.g., a sum, an object).'"
    },
    {
      question: "What is the critical difference between `.forEach()` and `.map()`?",
      options: [
        "They are exactly the same.",
        "`.forEach()` returns a new array, but `.map()` does not.",
        "`.forEach()` just runs a loop (returns `undefined`), while `.map()` transforms data and *returns a new array*.",
        "`.map()` is for numbers, `.forEach()` is for strings."
      ],
      answer: "`.forEach()` just runs a loop (returns `undefined`), while `.map()` transforms data and *returns a new array*.",
      explanation: "The Q&A section highlights this: '`.forEach` just *runs a loop*... (it returns `undefined`). `.map` *transforms data* and **returns a new array**.'"
    },
    {
      question: "Why is 'immutability' (using `.map()`/`.filter()`) so important in React, according to the Q&A?",
      options: [
        "It makes the code run faster.",
        "It's the only way to add items to an array.",
        "React only updates the UI if the array's *reference* changes, which `.map()`/`.filter()` does.",
        "It uses less memory than `.push()`."
      ],
      answer: "React only updates the UI if the array's *reference* changes, which `.map()`/`.filter()` does.",
      explanation: "The Q&A explains that React only detects a change if the *reference* to an array changes. `.push()` mutates the original array (same reference), but `.map()`/`.filter()` create a *new* array (new reference), which triggers the UI update."
    },
    {
      question: "How would you get an array of just the `name` properties from the `users` array in the example?",
      options: [
        "users.filter(user => user.name)",
        "users.map(user => user.name)",
        "users.reduce(user => user.name)",
        "users.forEach(user => user.name)"
      ],
      answer: "users.map(user => user.name)",
      explanation: "This is a transformation (from an object to a string) for every item, which is the exact job of `.map()`. The example code shows this: `const userNames = users.map(user => user.name);`"
    }
  ],
  "objects-methods": [
    {
      question: "In the 'Real-World Object' analogy, a Car's `color: \"red\"` is a...?",
      options: [
        "Method",
        "Property",
        "Object",
        "Array"
      ],
      answer: "Property",
      explanation: "The analogy lists attributes like `color: \"red\"` and `make: \"Tesla\"` as 'Properties' (the attributes of the object)."
    },
    {
      question: "In the 'Real-World Object' analogy, a Car's `drive()` function is a...?",
      options: [
        "Method",
        "Property",
        "Object",
        "Array"
      ],
      answer: "Method",
      explanation: "The analogy lists actions like `start()`, `drive()`, and `brake()` as 'Methods' (actions the object can perform)."
    },
    {
      question: "Inside an object method, what does the `this` keyword refer to?",
      options: [
        "The global `window` object",
        "The function itself",
        "The object the method was called on",
        "The parent object"
      ],
      answer: "The object the method was called on",
      explanation: "The notes define `this`: 'Inside a method, `this` refers to the *object the method was called on*. It lets an object's methods access its own properties (e.g., `this.name`).'"
    },
    {
      question: "When must you use Bracket Notation (e.g., `user[key]`) instead of Dot Notation (`user.name`)?",
      options: [
        "Never, Dot notation always works.",
        "When the property key is stored in a variable or contains spaces.",
        "When the property value is a function.",
        "When you are inside a `for` loop."
      ],
      answer: "When the property key is stored in a variable or contains spaces.",
      explanation: "The Q&A states: 'You *must* use **Bracket notation**... only when the property key is dynamic (held in a variable) or contains special characters...'"
    },
    {
      question: "What is the difference between an Object and an Array?",
      options: [
        "They are the same.",
        "Objects are for ordered lists; Arrays are for single things with properties.",
        "Arrays are for ordered lists; Objects are for a single thing with named properties.",
        "Objects can only hold strings; Arrays can hold any type."
      ],
      answer: "Arrays are for ordered lists; Objects are for a single thing with named properties.",
      explanation: "The Q&A clearly defines this: 'Use an **Array** for an *ordered list* of items... Use an **Object** to describe a *single thing* with named properties...'"
    },
    {
      question: "Which static method returns an array of an object's *keys*?",
      options: [
        "Object.keys(obj)",
        "Object.values(obj)",
        "Object.entries(obj)",
        "Object.get(obj)"
      ],
      answer: "Object.keys(obj)",
      explanation: "The notes list three static methods. `Object.keys(obj)` 'Returns an array of the object's keys.'"
    }
  ],
  "dom-manipulation-events": [
    {
      question: "In the 'Puppet Master' analogy, what is the DOM (Document Object Model)?",
      options: [
        "The puppet master (JavaScript)",
        "The 'strings' attached to the puppet (the live HTML objects)",
        "The signal (a 'click' event)",
        "The puppet master's ear (the Event Listener)"
      ],
      answer: "The 'strings' attached to the puppet (the live HTML objects)",
      explanation: "The analogy states: 'The **DOM (Document Object Model)** is the set of strings attached to the puppet's limbs.'"
    },
    {
      question: "What is the 'Holy Trinity' of DOM Manipulation, in the correct order?",
      options: [
        "1. Listen for an Event, 2. Select an Element, 3. Manipulate the Element",
        "1. Select an Element, 2. Manipulate the Element, 3. Listen for an Event",
        "1. Select an Element, 2. Listen for an Event, 3. Manipulate the Element",
        "1. Manipulate the Element, 2. Listen for an Event, 3. Select an Element"
      ],
      answer: "1. Select an Element, 2. Listen for an Event, 3. Manipulate the Element",
      explanation: "The notes list this exact 3-step process: '1. Select an Element', '2. Listen for an Event', and '3. Manipulate the Element'."
    },
    {
      question: "What is the modern, standard method to select the *first* element that matches a CSS selector?",
      options: [
        "document.getElementById()",
        "document.querySelector()",
        "document.querySelectorAll()",
        "document.getElementsByClassName()"
      ],
      answer: "document.querySelector()",
      explanation: "The notes identify `document.querySelector('css-selector')` as '**This is the modern standard.**' It gets the *first* matching element."
    },
    {
      question: "Why is it generally better to use `element.classList.add()` instead of `element.style.color = 'red'`?",
      options: [
        "`element.style` is slower",
        "`classList.add()` works on all browsers, but `.style` does not",
        "It separates concerns: CSS handles style, and JS handles logic.",
        "`element.style` can only be used once."
      ],
      answer: "It separates concerns: CSS handles style, and JS handles logic.",
      explanation: "The Q&A explains this is about 'Separation of Concerns.' You define the style in a CSS class, and JS just toggles that class."
    },
    {
      question: "What is the security risk of using `.innerHTML`?",
      options: [
        "It is very slow and can crash the page.",
        "It can only be used on `<div>` elements.",
        "A user could inject a malicious `<script>` tag (XSS attack).",
        "It does not work with modern CSS."
      ],
      answer: "A user could inject a malicious `<script>` tag (XSS attack).",
      explanation: "The Q&A warns: 'Using it with user-provided text can expose you to security risks (XSS attacks).' `textContent` is the safe alternative as it only sets raw text."
    },
    {
      question: "What is the correct syntax to listen for a user clicking on a button?",
      options: [
        "button.onClick = () => {}",
        "button.listen('click', () => {})",
        "button.addEventListener('click', () => {})",
        "button.on('click', () => {})"
      ],
      answer: "button.addEventListener('click', () => {})",
      explanation: "The notes specify the syntax as: `element.addEventListener('event-name', functionToRun)`, and `'click'` is the most common event."
    }
  ],
  "es6-features": [
    {
      question: "The notes compare the ES6 (ECMAScript 2015) update to what?",
      options: [
        "A new language",
        "A 'Version 2.0' upgrade pack for JavaScript",
        "A CSS framework",
        "A replacement for HTML"
      ],
      answer: "A 'Version 2.0' upgrade pack for JavaScript",
      explanation: "The analogy states: 'ES6 (ECMAScript 2015) was a massive \"Version 2.0\" upgrade pack... it added amazing new features... and shortcuts that are now standard.'"
    },
    {
      question: "What is the main advantage of `let` and `const` over the old `var` keyword?",
      options: [
        "They are 'hoisted', which is safer",
        "They are 'block-scoped', which prevents bugs",
        "They can be reassigned, while `var` cannot",
        "They are faster"
      ],
      answer: "They are 'block-scoped', which prevents bugs",
      explanation: "The notes state: '`let` and `const`: Replaced `var`. They are **block-scoped**... which prevents many common bugs.'"
    },
    {
      question: "What is the 'Spread' operator (`...`) used for?",
      options: [
        "To 'collect' multiple function arguments into one array",
        "To 'expand' an existing array or object into a new one (e.g., to make a copy)",
        "To start a `for` loop",
        "To define a default parameter"
      ],
      answer: "To 'expand' an existing array or object into a new one (e.g., to make a copy)",
      explanation: "The Q&A explains: '**Spread** *expands* an existing array or object into a new one (e.g., `[...arr]`).'"
    },
    {
      question: "What is the 'Rest' operator (`...`) used for?",
      options: [
        "To 'collect' multiple function arguments into one array",
        "To 'expand' an existing array or object into a new one",
        "To stop an `async` function",
        "To reset a variable's value"
      ],
      answer: "To 'collect' multiple function arguments into one array",
      explanation: "The Q&A explains: '**Rest** *collects* multiple separate items into a new array (e.g., in a function `sum(...nums)`).'"
    },
    {
      question: "What is 'Object Destructuring'?",
      options: [
        "Deleting an object",
        "A shortcut to 'unpack' values from an object into variables (e.g., `const { name } = user;`)",
        "A new type of `for` loop for objects",
        "A method for copying an object"
      ],
      answer: "A shortcut to 'unpack' values from an object into variables (e.g., `const { name } = user;`)",
      explanation: "The notes define this as: 'A shortcut to \"unpack\" values from data structures into variables (e.g., `const { name, age } = user;`).'"
    },
    {
      question: "Which ES6+ feature allows for multi-line strings and embedded variables like `${name}`?",
      options: [
        "Arrow Functions",
        "Destructuring",
        "Template Literals (`` ` ``)",
        "Spread Operator"
      ],
      answer: "Template Literals (`` ` ``)",
      explanation: "The notes define Template Literals as: 'Multi-line strings with embedded variables (e.g., `` `Hello, ${name}!` ``).'"
    }
  ],
  "asynchronous-javascript": [
    {
      question: "In the 'Restaurant Waiter' analogy, what is a `Promise`?",
      options: [
        "The waiter who takes the order",
        "The 'pager' that buzzes when the food is ready",
        "The kitchen that 'freezes' the app",
        "The menu of items"
      ],
      answer: "The 'pager' that buzzes when the food is ready",
      explanation: "The analogy states: 'When the food is ready, the kitchen gives him a <strong>Promise</strong> (a \"pager\"). When the pager buzzes, he picks up the food...'"
    },
    {
      question: "What are the three states of a Promise?",
      options: [
        "Pending, Fulfilled, Rejected",
        "Start, Running, Finished",
        "Try, Catch, Finally",
        "Async, Await, Sync"
      ],
      answer: "Pending, Fulfilled, Rejected",
      explanation: "The notes list these three states: '<strong>Pending</strong>: The operation hasn't finished... <strong>Fulfilled</strong>: The operation completed successfully... <strong>Rejected</strong>: The operation failed...'"
    },
    {
      question: "What does the `await` keyword do?",
      options: [
        "It defines a function as asynchronous",
        "It 'pauses' the execution of an `async` function until a Promise resolves",
        "It handles errors, just like a `.catch()` block",
        "It creates a new Promise"
      ],
      answer: "It 'pauses' the execution of an `async` function until a Promise resolves",
      explanation: "The notes state: '`await`: Used *inside* an `async` function. It \"pauses\" the function's execution and waits for a promise to resolve before moving to the next line.'"
    },
    {
      question: "How do you handle errors when using `async/await`?",
      options: [
        "With a `.catch()` block",
        "With a standard `try...catch` block",
        "With a `.finally()` block",
        "You cannot handle errors with `async/await`"
      ],
      answer: "With a standard `try...catch` block",
      explanation: "The notes specify: '<strong>Error Handling:</strong> You use a standard <Code>try...catch</Code> block to handle rejections.'"
    },
    {
      question: "What is 'Callback Hell'?",
      options: [
        "A function that calls itself and never stops",
        "Deeply nested callbacks that are very hard to read and debug",
        "An error that happens when an API call fails",
        "A term for `async/await` code"
      ],
      answer: "Deeply nested callbacks that are very hard to read and debug",
      explanation: "The Q&A section defines it as: 'a \"pyramid of doom\" that is extremely difficult to read and debug. Promises and `async/await` were invented to solve this.'"
    },
    {
      question: "What is the relationship between `async/await` and Promises?",
      options: [
        "They are two different, competing systems.",
        "`async/await` is 'syntactic sugar' for Promises, making them easier to read.",
        "`async/await` is the old way, and Promises are the new way.",
        "Promises are for errors, `async/await` is for successful data."
      ],
      answer: "`async/await` is 'syntactic sugar' for Promises, making them easier to read.",
      explanation: "The Q&A section states: '`async/await` is just \"syntactic sugar\" for `.then()`. It lets you write code that *looks* synchronous... which is much easier to read...'"
    }
  ],
  "error-handling-debugging": [
    {
      question: "In the 'Code Detective' analogy, what is 'Error Handling' (like `try...catch`)?",
      options: [
        "Finding clues and following the evidence",
        "The safety net you put in place *before* a bug happens",
        "The error message in the console",
        "A breakpoint"
      ],
      answer: "The safety net you put in place *before* a bug happens",
      explanation: "The analogy states: '<strong>Error Handling</strong> is being proactive: it's the safety net (<Code>try...catch</Code>) you put in place *before* a bug happens to prevent your whole app from crashing.'"
    },
    {
      question: "Your code doesn't crash, but it's not working (e.g., a calculation is wrong). What kind of error is this and what's the first step to fix it?",
      options: [
        "A Syntax Error; fix it by reading the console.",
        "A Logical Error; fix it by using `console.log()` to trace variables.",
        "A Network Error; fix it by checking the Network tab.",
        "A Runtime Error; fix it by using `try...catch`."
      ],
      answer: "A Logical Error; fix it by using `console.log()` to trace variables.",
      explanation: "The Q&A section identifies this as a 'logical error' and says the first step is to 'use `console.log()` at key points... to trace your code's execution.'"
    },
    {
      question: "You see an error in the console: `TypeError: Cannot read properties of undefined`. What does this *most likely* mean?",
      options: [
        "Your `try...catch` block is missing.",
        "Your code is running, but the logic is wrong.",
        "You are trying to access a property on a variable that doesn't have a value (e.g., `user.name` when `user` is `undefined`).",
        "You have a syntax error, like a missing semicolon."
      ],
      answer: "You are trying to access a property on a variable that doesn't have a value (e.g., `user.name` when `user` is `undefined`).",
      explanation: "This is a `TypeError`. The example `getUserName(null)` shows this exact scenario: '`catch (error)`... (error as Error).message would be \"Cannot read properties of null (reading 'profile')\"'. This means `user` was `null` or `undefined`."
    },
    {
      question: "When using `async/await` syntax, how should you catch errors from a failed `await` call?",
      options: [
        "By chaining a `.catch()` method to the end",
        "By wrapping the `await` line in a `try...catch` block",
        "By checking if the result is `null`",
        "You don't need to, `await` handles its own errors"
      ],
      answer: "By wrapping the `await` line in a `try...catch` block",
      explanation: "The Q&A section and the `fetchUserData` example both show that the standard way to handle errors with `async/await` is to wrap the 'risky' code (the `await` calls) in a `try` block and handle the failure in the `catch` block."
    },
    {
      question: "What is a 'breakpoint' in the browser's debugger?",
      options: [
        "A point where your code has an error",
        "A point in your code where you've told the browser to *pause* execution",
        "The final line of a function",
        "A `console.log()` statement"
      ],
      answer: "A point in your code where you've told the browser to *pause* execution",
      explanation: "The notes define a 'breakpoint' as a tool that lets you '*pause* your code on a specific line,' allowing you to inspect all variables at that moment."
    },
    {
      question: "What is the `throw` keyword used for?",
      options: [
        "To 'throw away' a variable",
        "To stop a `for` loop",
        "To create your *own* custom errors (e.g., `throw new Error(...)`)",
        "To 'throw' an error to the console"
      ],
      answer: "To create your *own* custom errors (e.g., `throw new Error(...)`)",
      explanation: "The notes state that `throw` 'Lets you create your *own* errors (e.g., `throw new Error(\"Invalid input!\")`).'"
    }
  ],
  "js-miniproject": [
    {
      question: "In the Stone, Paper, Scissors project, what is the 'state' of the application?",
      options: [
        "The HTML buttons",
        "The CSS styling",
        "Simple variables like `let userScore = 0` and `let computerScore = 0`",
        "The `playRound` function"
      ],
      answer: "Simple variables like `let userScore = 0` and `let computerScore = 0`",
      explanation: "The notes define 'State Management' for this project as: 'We will use simple variables (e.g., `let userScore = 0`) to hold the \"state\" of our application.'"
    },
    {
      question: "Why is it good practice to select DOM elements *outside* the event listener functions?",
      options: [
        "It's not; you should select them inside the listener.",
        "For performance: `querySelector` is slow, so you should only run it once when the script loads.",
        "Because `querySelector` is an async function.",
        "To add them to the global scope."
      ],
      answer: "For performance: `querySelector` is slow, so you should only run it once when the script loads.",
      explanation: "The Q&A explains this: 'For performance. Selecting a DOM element (`querySelector`) is an operation that takes time. By selecting them all *once*... our `playRound` function can access them instantly...'"
    },
    {
      question: "How does the `playRound` function know *which* button the user clicked?",
      options: [
        "It guesses using `Math.random()`",
        "The event listener passes the button's `id` (e.g., 'stone') to the function",
        "It reads the `userScore` variable",
        "It asks the user with a `prompt()`"
      ],
      answer: "The event listener passes the button's `id` (e.g., 'stone') to the function",
      explanation: "The example code shows: `button.addEventListener('click', (e) => { playRound(e.target.id); });`. The `e.target.id` is what tells the function the user's choice."
    },
    {
      question: "How does the `getComputerChoice` function work?",
      options: [
        "It reads the user's mind",
        "It always picks 'stone'",
        "It uses `Math.random()` to pick a random index from the `choices` array",
        "It fetches a choice from an API"
      ],
      answer: "It uses `Math.random()` to pick a random index from the `choices` array",
      explanation: "The notes and code example show this: 'Call a separate `getComputerChoice()` function that uses `Math.random()` to pick a random choice.' The code is `Math.floor(Math.random() * 3)`."
    },
    {
      question: "This project's 'Vanilla JS' approach to DOM updates is 'imperative'. How does React's 'declarative' approach differ?",
      options: [
        "They are the same.",
        "In React, you *manually* update the DOM with `document.querySelector`.",
        "In React, you just update the *state* (e.g., `setUserScore()`), and React *automatically* updates the DOM.",
        "React does not use HTML, it uses CSS."
      ],
      answer: "In React, you just update the *state* (e.g., `setUserScore()`), and React *automatically* updates the DOM.",
      explanation: "The Q&A directly answers this: 'In React, you just update the *state* (`setUserScore(userScore + 1)`), and React *automatically* handles all the DOM manipulation for you.'"
    },
    {
      question: "What is the final step in the `playRound` function, after all logic is complete?",
      options: [
        "Select the DOM elements",
        "Add the event listeners",
        "Update the `.textContent` of the display elements to show the new scores and result",
        "Reload the page"
      ],
      answer: "Update the `.textContent` of the display elements to show the new scores and result",
      explanation: "The workflow has 5 steps. The final step is '5. MANIPULATE DOM (Update UI),' which includes `userScoreDisplay.textContent = userScore;`."
    }
  ],
  // "mini-project-preview": [
  //   {
  //     question: "In the game, if the user chooses 'paper' and the computer chooses 'stone', what is the result?",
  //     options: [
  //       "User wins",
  //       "Computer wins",
  //       "It's a draw",
  //       "The game resets"
  //     ],
  //     answer: "User wins",
  //     explanation: "The game logic `(playerChoice === 'paper' && compChoice === 'stone')` is a winning condition for the user."
  //   },
  //   {
  //     question: "If the user chooses 'stone' and the computer chooses 'paper', what is the result?",
  //     options: [
  //       "User wins",
  //       "Computer wins",
  //       "It's a draw",
  //       "The game resets"
  //     ],
  //     answer: "Computer wins",
  //     explanation: "Paper covers stone. This is not a winning condition for the user, nor a draw, so the code logic defaults to a loss for the user."
  //   },
  //   {
  //     question: "If the user and computer both choose 'scissors', what is the result?",
  //     options: [
  //       "User wins",
  //       "Computer wins",
  //       "It's a draw",
  //       "The game resets"
  //     ],
  //     answer: "It's a draw",
  //     explanation: "The first check in the logic is `if (playerChoice === compChoice)`, which results in a 'draw' message."
  //   },
  //   {
  //     question: "Which `useState` hook is responsible for storing the 'You win!' or 'You lose!' message?",
  //     options: [
  //       "`userScore`",
  //       "`computerScore`",
  //       "`resultMessage`",
  //       "`userChoice`"
  //     ],
  //     answer: "`resultMessage`",
  //     explanation: "The `playRound` function builds a `message` string and then calls `setResultMessage(message)` to update the UI."
  //   },
  //   {
  //     question: "How does the `getComputerChoice` function ensure a random choice?",
  //     options: [
  //       "It uses `Math.floor(Math.random() * 3)` to get an index of 0, 1, or 2.",
  //       "It pings a server for a random number.",
  //       "It asks the user to input a number.",
  //       "It increments the choice by 1 each round."
  //     ],
  //     answer: "It uses `Math.floor(Math.random() * 3)` to get an index of 0, 1, or 2.",
  //     explanation: "`Math.random()` gives a number between 0 and 1 (e.g., 0.6). Multiplying by 3 gives 1.8. `Math.floor()` rounds down to 1, which corresponds to 'paper'."
  //   },
  //   {
  //     question: "What two `useState` hooks are used to display the 'Your Choice' and 'Computer's Choice' text?",
  //     options: [
  //       "`userScore` and `computerScore`",
  //       "`userChoice` and `computerChoice`",
  //       "`resultMessage` and `userChoice`",
  //       "`resultMessage` and `computerChoice`"
  //     ],
  //     answer: "`userChoice` and `computerChoice`",
  //     explanation: "At the start of the `playRound` function, `setUserChoice(playerChoice)` and `setComputerChoice(compChoice)` are called to store these values, which are then displayed in the UI."
  //   }
  // ]
};