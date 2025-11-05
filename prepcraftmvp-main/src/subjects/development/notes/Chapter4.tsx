import React, { useState } from 'react';

// --- Mini Project Preview Component ---
// We define this separately so we can use state and keep the logic clean.
const MiniProjectPreview: React.FC = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [resultMessage, setResultMessage] = useState('Make your move!');
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);

  const choices = ['stone', 'paper', 'scissors'];

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const playRound = (playerChoice: string) => {
    const compChoice = getComputerChoice();
    setUserChoice(playerChoice);
    setComputerChoice(compChoice);
    let result = '';

    if (playerChoice === compChoice) {
      result = 'draw';
    } else if (
      (playerChoice === 'stone' && compChoice === 'scissors') ||
      (playerChoice === 'paper' && compChoice === 'stone') ||
      (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
      result = 'win';
      setUserScore(prevScore => prevScore + 1);
    } else {
      result = 'lose';
      setComputerScore(prevScore => prevScore + 1);
    }
    
    let message = `You chose ${playerChoice}, computer chose ${compChoice}. `;
    if (result === 'win') message += 'You win!';
    else if (result === 'lose') message += 'You lose!';
    else message += "It's a draw!";

    setResultMessage(message);
  };

  return (
    <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">4.11: Mini Project Preview</h1>
        <div className="space-y-4">
            <p className="text-lg opacity-90">
                Here is a live, functional preview of the Stone, Paper, Scissors game built using the concepts from this chapter (React state and event handlers).
            </p>
            <div className="p-4 sm:p-6 mt-4 bg-gray-700 rounded-lg border border-gray-600 shadow-lg">
                <div className="flex justify-around text-center mb-6">
                <div>
                    <h2 className="text-xl font-bold">User Score</h2>
                    <p className="text-4xl font-mono text-blue-300 mt-2">{userScore}</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Computer Score</h2>
                    <p className="text-4xl font-mono text-blue-300 mt-2">{computerScore}</p>
                </div>
                </div>
                
                <div className="text-center my-8">
                    <h3 className="text-lg font-semibold">Your Choice: <span className="text-yellow-300 font-bold capitalize">{userChoice || '-'}</span></h3>
                    <h3 className="text-lg font-semibold">Computer's Choice: <span className="text-yellow-300 font-bold capitalize">{computerChoice || '-'}</span></h3>
                </div>

                <div className="text-center min-h-[50px] flex items-center justify-center">
                <p className="font-semibold text-lg text-yellow-300">{resultMessage}</p>
                </div>

                <div className="choices text-center mt-6">
                <h3 className="text-lg font-semibold mb-4">Choose your weapon:</h3>
                <button onClick={() => playRound('stone')} className="py-2 px-4 m-2 text-lg bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200">Stone</button>
                <button onClick={() => playRound('paper')} className="py-2 px-4 m-2 text-lg bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200">Paper</button>
                <button onClick={() => playRound('scissors')} className="py-2 px-4 m-2 text-lg bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200">Scissors</button>
                </div>
            </div>
        </div>
    </div>
  );
};

// --- Main Chapter Component ---

const Chapter4 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'javascript-basics':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.1: JavaScript Basics (Variables, Data Types, Operators)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              JavaScript (JS) is the programming language that brings websites to life. While HTML provides the structure and CSS provides the style, JavaScript adds <strong>interactivity and dynamic functionality</strong>. This chapter covers the absolute fundamentals: how to store information, the different types of data, and how to perform operations on that data.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Brain of the Webpage</h2>
            <p className="opacity-90">
              If HTML is the skeleton and CSS is the appearance, JavaScript is the brain and nervous system. It's a scripting language that allows you to manipulate the content and styles of a webpage in response to user actions. It runs directly in the user's web browser, which is why it's known as a "client-side" language.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. How to Add JavaScript to a Webpage</h2>
            <p className="opacity-90">
              You add JavaScript to an HTML file using the `&lt;script&gt;` tag. There are two primary ways to do this.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold">Internal JavaScript</h3>
                <p className="text-sm opacity-90 mt-1">You can write your JS code directly inside `&lt;script&gt;` tags, usually placed right before the closing `&lt;/body&gt;` tag.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'<body>\n  <!-- ... html content ... -->\n  <script>\n    alert("Hello, World!");\n  </script>\n</body>'}</code></pre>
              </div>
              <div>
                <h3 className="font-bold">External JavaScript (Best Practice)</h3>
                <p className="text-sm opacity-90 mt-1">For cleaner code, you write your JS in a separate `.js` file and link to it using the `src` attribute.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'<!-- In your HTML file -->\n<script src="myscripts.js"></script>'}</code></pre>
              </div>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Variables: `let`, `const`, and `var`</h2>
            <p className="opacity-90">
              A variable is a container for storing a piece of data. In modern JavaScript, we have three keywords to declare them.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-3 opacity-90">
                <li>
                    <strong>`let`</strong>: Used for variables whose value might change later.
                    <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'let userAge = 25;\nuserAge = 26; // This is allowed'}</code></pre>
                </li>
                <li>
                    <strong>`const`</strong>: Used for variables whose value will **not** change (a constant). This is the preferred way to declare variables.
                    <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'const birthYear = 1998;\n// birthYear = 1999; // This would cause an error'}</code></pre>
                </li>
                <li>
                    <strong>`var`</strong>: The old way of declaring variables. It has quirky behavior (related to scope) and is generally avoided in modern JavaScript.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Primitive Data Types</h2>
            <p className="opacity-90">
              These are the most basic data types in JavaScript.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-3 opacity-90 mt-2">
                <li><strong>String:</strong> A sequence of characters used for text. You can use single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` ``).</li>
                <li><strong>Number:</strong> Represents both integers (e.g., 100) and floating-point numbers (e.g., 99.99).</li>
                <li><strong>Boolean:</strong> Can only have two values: `true` or `false`. Used for making decisions.</li>
                <li><strong>`null`:</strong> Represents the intentional absence of any object value.</li>
                <li><strong>`undefined`:</strong> A variable that has been declared but has not yet been assigned a value.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Non-Primitive Data Types</h2>
            <p className="opacity-90">
              These are more complex data structures used to store collections of data.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-3 opacity-90 mt-2">
                <li><strong>Object:</strong> A collection of key-value pairs used to group related data.
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                      {`const person = {\n  firstName: "John",\n  age: 30,\n  isStudent: false\n};`}
                  </code></pre>
                </li>
                <li><strong>Array:</strong> A special type of object used to store an ordered list of values.
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{`const colors = ["red", "green", "blue"];`}</code></pre>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Arithmetic & Assignment Operators</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">Arithmetic Operators</h3>
              <ul className="list-disc ml-6 space-y-2 mt-2 opacity-90">
                <li>`+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division)</li>
                <li>`%` (Modulo): Returns the remainder of a division. `10 % 3` is `1`.</li>
                <li>`**` (Exponentiation): `2 ** 3` is `8`.</li>
              </ul>
              <h3 className="font-bold mt-4">Assignment Operators</h3>
              <ul className="list-disc ml-6 space-y-2 mt-2 opacity-90">
                <li>`=` (Assignment): `let x = 10;`</li>
                <li>`+=` (Add and assign): `x += 5;` is the same as `x = x + 5;`.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">7. Comparison & Logical Operators</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">Comparison Operators</h3>
              <ul className="list-disc ml-6 space-y-2 mt-2 opacity-90">
                <li>`==` (Loose Equality): Checks value only. (`5 == "5"` is `true`). Avoid this.</li>
                <li>`===` (Strict Equality): Checks value AND type. (**Best practice.** `5 === "5"` is `false`).</li>
                <li>`!=` (Not equal) and `!==` (Strictly not equal).</li>
                <li>`&gt;` (Greater than), `&lt;` (Less than), `&gt;=` (Greater than or equal to), `&lt;=` (Less than or equal to).</li>
              </ul>
              <h3 className="font-bold mt-4">Logical Operators</h3>
              <ul className="list-disc ml-6 space-y-2 mt-2 opacity-90">
                <li>`&&` (AND): Returns `true` only if both conditions are true.</li>
                <li>`||` (OR): Returns `true` if at least one condition is true.</li>
                <li>`!` (NOT): Inverts a boolean value (`!true` becomes `false`).</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">8. `typeof` Operator</h2>
            <p className="opacity-90">
              The `typeof` operator returns a string indicating the type of a variable. It's very useful for debugging.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {`typeof "Hello"; // "string"`}<br/>
                {`typeof 100;    // "number"`}<br/>
                {`typeof true;   // "boolean"`}<br/>
                {`typeof {};    // "object"`}<br/>
                {`typeof [];    // "object" (Arrays are a type of object)`}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary for Beginners</h2>
            <p className="opacity-90">
              Starting with JavaScript basics sets a strong foundation for everything else.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-3 opacity-90">
                <li><strong>Use `const` by Default:</strong> Always declare your variables with `const`. If you realize later that you need to reassign it, change it to `let`. Avoid `var`.</li>
                <li><strong>Use Strict Equality (`===`):</strong> Always use `===` for comparisons to avoid bugs from type coercion.</li>
                <li><strong>Use the Console:</strong> `console.log()` is your best friend for debugging. Use it constantly to check the values of your variables.</li>
                <li><strong>Naming Conventions:</strong> Use `camelCase` for variable names (e.g., `firstName`, `userIsLoggedIn`).</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'control-structures':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.2: Control Structures (Conditionals, Loops)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Control Structures are the decision-making parts of a programming language. They allow your code to take different paths and perform repetitive tasks based on specific conditions. If variables are the nouns, control structures are the verbs and conjunctions that create intelligent, dynamic behavior.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Giving Your Code a Brain</h2>
            <p className="opacity-90">
              By default, code runs from top to bottom, one line at a time. Control structures break this linear flow, allowing your program to think and act.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">The Two Main Abilities:</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2 opacity-90">
                <li><strong>Making Decisions (Conditionals):</strong> Choose a path based on a `true` or `false` condition. (e.g., "<strong>If</strong> the user is logged in, show the dashboard. <strong>Else</strong>, show the login page.")</li>
                <li><strong>Repeating Actions (Loops):</strong> Execute a block of code multiple times. (e.g., "<strong>For</strong> each item in a shopping cart, display its price.")</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Conditional: The `if...else` Statement</h2>
            <p className="opacity-90">
              This is the primary tool for decision-making. It executes a block of code if a specified condition is true, and another block if it is false.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-3 opacity-90">
                <li><strong>`if`</strong>: Runs the code block only if its condition is `true`.</li>
                <li><strong>`else if`</strong>: If the first `if` is `false`, this checks a new condition.</li>
                <li><strong>`else`</strong>: If all preceding conditions are `false`, this code block will run.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {`const hour = 14;`}<br/><br/>
                {`if (hour < 12) {`}<br/>
                {'  console.log("Good morning!");'}<br/>
                {`} else if (hour < 18) {`}<br/>
                {'  console.log("Good afternoon!"); // This block will run'}<br/>
                {`} else {`}<br/>
                {'  console.log("Good evening!");'}<br/>
                {'}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Truthy and Falsy Values</h2>
            <p className="opacity-90">In JavaScript, conditions don't have to be strictly `true` or `false`. All values have an inherent "truthiness". It's crucial to know which values are "falsy".</p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
                <h3 className="font-bold">There are only a few falsy values in JavaScript:</h3>
                <ul className="list-disc ml-6 mt-2 opacity-90">
                  <li>`false`</li>
                  <li>`0` (the number zero)</li>
                  <li>`""` (an empty string)</li>
                  <li>`null`</li>
                  <li>`undefined`</li>
                  <li>`NaN` (Not a Number)</li>
                </ul>
                <p className="mt-2 opacity-90"><strong>Everything else is truthy</strong> (e.g., `"hello"`, `-1`, `[]`, `{'{...}'}`).</p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Conditional: The `switch` Statement</h2>
            <p className="opacity-90">The `switch` statement is a cleaner alternative to a long `if...else if...else` chain when you are checking a single variable against multiple possible values.</p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                  {`const day = new Date().getDay(); // 0 (Sun) to 6 (Sat)`}<br/><br/>
                  {`switch (day) {`}<br/>
                  {'  case 0:'}<br/>
                  {'    console.log("It is Sunday!");'}<br/>
                  {'    break; // The \'break\' keyword exits the switch'}<br/>
                  {'  case 6:'}<br/>
                  {'    console.log("It is Saturday!");'}<br/>
                  {'    break;'}<br/>
                  {'  default: // Runs if no other case matches'}<br/>
                  {'    console.log("It is a weekday.");'}<br/>
                  {'}'}
                </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. Conditional: The Ternary Operator</h2>
            <p className="opacity-90">
              The ternary operator is a clean, one-line shortcut for a simple `if...else` statement. It's often used for assigning a value to a variable.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
                <h3 className="font-bold">Syntax: `condition ? valueIfTrue : valueIfFalse;`</h3>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                    {`const age = 20;`}<br/>
                    {`const canVote = age >= 18 ? "Yes" : "No";`}<br/>
                    {'console.log(canVote); // "Yes"'}
                </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Loop: The `for` Loop</h2>
            <p className="opacity-90">
              The `for` loop is ideal when you know exactly **how many times** you want the loop to run. It has three parts: <strong>initialization</strong>, <strong>condition</strong>, and <strong>increment</strong>.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                  {`for (let i = 0; i < 5; i++) {`}<br/>
                  {'  console.log("The number is " + i);'}<br/>
                  {'}'}<br/>
                  {'// Prints numbers 0, 1, 2, 3, 4'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Loop: The `while` Loop</h2>
            <p className="opacity-90">
              The `while` loop is best when you want a loop to run as long as a condition is `true`, but you don't know the exact number of iterations.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                  {`let i = 0;`}<br/>
                  {`while (i < 5) {`}<br/>
                  {'  console.log("The number is " + i);'}<br/>
                  {'  i++;'}<br/>
                  {'}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Loop Control: `break` and `continue`</h2>
            <p className="opacity-90">You can alter the flow of a loop from within the loop itself.</p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                  <h3 className="font-bold">The `break` Statement</h3>
                  <p className="text-sm opacity-90 mt-1">**Exits the loop immediately**, regardless of the loop's condition.</p>
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{`for (let i = 0; i < 10; i++) {\n  if (i === 5) { break; }\n}\n// Loop stops at 5`}</code></pre>
              </div>
              <div>
                  <h3 className="font-bold">The `continue` Statement</h3>
                  <p className="text-sm opacity-90 mt-1">**Skips the current iteration** and proceeds to the next one.</p>
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{`for (let i = 0; i < 5; i++) {\n  if (i === 2) { continue; }\n}\n// Skips 2, prints 0, 1, 3, 4`}</code></pre>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Using control structures effectively is the key to writing functional programs.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Choose the Right Conditional:</strong> Use `if...else` for complex logic, `switch` for checking a single variable against many values, and the ternary operator for simple assignments.</li>
                <li><strong>Avoid Infinite Loops:</strong> When using a `while` loop, always make sure there is a condition inside the loop that will eventually make the loop condition `false`.</li>
                <li><strong>Know Truthy/Falsy:</strong> Understand what values JavaScript considers `true` or `false` to write more concise and robust conditions.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'functions-scope':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.3: Functions & Scope</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Functions are one of the most fundamental building blocks in JavaScript. They are reusable blocks of code that you can define once and run many times. **Scope** is the concept that determines the accessibility (visibility) of variables. Understanding how functions and scope work together is essential for writing clean, organized, and bug-free code.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Reusable Recipe</h2>
            <p className="opacity-90">
              Think of a function like a recipe for baking a cake.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Defining the function</strong> is like writing down the recipe.</li>
                <li><strong>Calling the function</strong> is like actually following the recipe to bake a cake.</li>
                <li><strong>Parameters (or arguments)</strong> are the ingredients you provide (e.g., `flour: 2`, `eggs: 3`).</li>
                <li>The <strong>`return` value</strong> is the finished cake.</li>
              </ul>
              <p className="mt-2 opacity-90">This allows you to bake a cake whenever you want without re-writing the steps, promoting **reusability**.</p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Function Declaration</h2>
            <p className="opacity-90">
              This is the classic way to define a named function. Function declarations are **hoisted**, meaning they are loaded into memory at the start, so you can call them *before* they are defined in the code.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// Defining the function with two parameters: num1 and num2'}<br/>
                {'function add(num1, num2) {'}<br/>
                {'  return num1 + num2;'}<br/>
                {'}'}<br/><br/>
                {'// Calling the function with two arguments: 5 and 10'}<br/>
                {'const result = add(5, 10); // result is 15'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Function Expression</h2>
            <p className="opacity-90">
              Here, the function is created and assigned to a variable. The function itself can be anonymous (it doesn't have a name). Function expressions are **not** hoisted.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const multiply = function(num1, num2) {'}<br/>
                {'  return num1 * num2;'}<br/>
                {'};'}<br/><br/>
                {'const product = multiply(4, 7); // product is 28'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Arrow Functions (ES6+)</h2>
            <p className="opacity-90">
              ES6 introduced arrow functions (`=&gt;`), which provide a shorter syntax and are now the most common way to write functions in modern JavaScript.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// The same multiply function as an arrow function'}<br/>
                {'const multiply = (num1, num2) => {'}<br/>
                {'  return num1 * num2;'}<br/>
                {'};'}<br/><br/>
                {'// For single-line functions, it gets even shorter:'}<br/>
                {'const subtract = (num1, num2) => num1 - num2;'}<br/><br/>
                {'const difference = subtract(10, 3); // difference is 7'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. The `return` Keyword</h2>
            <p className="opacity-90">
              The `return` statement ends the function's execution and specifies a value to be sent back. A function without a `return` statement implicitly returns `undefined`.
            </p>

            <h2 className="text-2xl font-semibold pt-4">6. Understanding Scope</h2>
            <p className="opacity-90">
              Scope determines the accessibility of variables. JavaScript has three main types of scope.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Global Scope:</strong> Variables declared outside of any function. They can be accessed from anywhere. (Avoid this as much as possible!)</li>
                <li><strong>Function Scope:</strong> Variables declared inside a function. They can only be accessed within that function.</li>
                <li><strong>Block Scope:</strong> Variables declared with `let` and `const` inside a block (`{'{...}'}`), like in an `if` statement, are only accessible within that block.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Scope Example in Practice</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const globalVar = "I am global"; // Global Scope'}<br/><br/>
                {'function myFunction() {'}<br/>
                {'  const functionVar = "I am in a function"; // Function Scope'}<br/>
                {'  console.log(globalVar); // "I am global"'}<br/><br/>
                {'  if (true) {'}<br/>
                {'    let blockVar = "I am in a block"; // Block Scope'}<br/>
                {'    console.log(blockVar); // "I am in a block"'}<br/>
                {'  }'}<br/><br/>
                {'  // console.log(blockVar); // ERROR! blockVar is not defined here'}<br/>
                {'}'}<br/><br/>
                {'myFunction();'}<br/>
                {'// console.log(functionVar); // ERROR! functionVar is not defined here'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Default Parameters (ES6+)</h2>
            <p className="opacity-90">
              You can provide default values for function parameters, which will be used if the argument is not provided.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'function greet(name = "Guest") {'}<br/>
                {'  console.log(`Hello, ${name}!`);'}<br/>
                {'}'}<br/><br/>
                {'greet("Alice"); // Hello, Alice!'}<br/>
                {'greet();      // Hello, Guest!'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Functions are the workhorses of JavaScript.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Write Small, Single-Purpose Functions:</strong> A good function does one thing and does it well.</li>
                <li><strong>Prefer Arrow Functions:</strong> Use the modern `=&gt;` syntax for its conciseness.</li>
                <li><strong>Use `const` and `let`:</strong> Always declare variables within the smallest scope they are needed (Block or Function scope). Avoid `var`.</li>
                <li><strong>Minimize Global Variables:</strong> Keep your global scope clean to prevent bugs.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'arrays-methods':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.4: Arrays & Array Methods</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Arrays are a fundamental data structure in JavaScript. They are a special type of object used to store an ordered list of values. Mastering how to create, access, and manipulate arrays is a critical skill, especially with the powerful "array methods" that allow you to loop, transform, and filter data.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Labeled Shelf</h2>
            <p className="opacity-90">
              Think of an array as a numbered shelf. You can store different items (values) on this shelf, and each position on the shelf has a specific number, called an <strong>index</strong>.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Arrays can hold any data type: strings, numbers, booleans, objects, or even other arrays.</li>
                <li>They are <strong>zero-indexed</strong>: the first item is at index 0, the second at index 1, and so on.</li>
                <li>The `length` of an array is the total number of items it contains.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Creating and Accessing Array Elements</h2>
            <p className="opacity-90">
              You create an array using square brackets `[]`.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// Creating an array of strings'}<br/>
                {'const fruits = ["Apple", "Banana", "Cherry"];'}<br/><br/>
                {'// Accessing elements using their index'}<br/>
                {'console.log(fruits[0]); // "Apple"'}<br/>
                {'console.log(fruits[1]); // "Banana"'}<br/><br/>
                {'// Getting the total number of items'}<br/>
                {'console.log(fruits.length); // 3'}<br/><br/>
                {'// Modifying an element'}<br/>
                {'fruits[1] = "Blueberry";'}<br/>
                {'console.log(fruits); // ["Apple", "Blueberry", "Cherry"]'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Basic Mutating Methods</h2>
            <p className="opacity-90">
              These common methods **modify the original array** directly.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold">`push()` - Add to End</h3>
                <p className="text-sm opacity-90 mt-1">Adds one or more elements to the **end** of an array.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'fruits.push("Mango");'}</code></pre>
              </div>
              <div>
                <h3 className="font-bold">`pop()` - Remove from End</h3>
                <p className="text-sm opacity-90 mt-1">Removes the **last** element from an array.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'fruits.pop();'}</code></pre>
              </div>
              <div>
                <h3 className="font-bold">`unshift()` - Add to Start</h3>
                <p className="text-sm opacity-90 mt-1">Adds elements to the **beginning** of an array.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'fruits.unshift("Strawberry");'}</code></pre>
              </div>
              <div>
                <h3 className="font-bold">`shift()` - Remove from Start</h3>
                <p className="text-sm opacity-90 mt-1">Removes the **first** element from an array.</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'fruits.shift();'}</code></pre>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. The `forEach` Method (Looping)</h2>
            <p className="opacity-90">
              Executes a provided function once for each array element. It's a simple way to loop.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const numbers = [1, 2, 3];'}<br/>
                {'numbers.forEach((number, index) => {'}<br/>
                {'  console.log(`Item at index ${index} is ${number}`);'}<br/>
                {'});'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. Immutable Methods: The "Big Three"</h2>
            <p className="opacity-90">
              These are the most powerful array methods. They **do not mutate** the original array; instead, they return a **new array**. This is a core concept in modern frameworks like React.
            </p>

            <h2 className="text-2xl font-semibold pt-4">6. `map()` - To Transform</h2>
            <p className="opacity-90">
              The `map()` method creates a new array by applying a function to **every element** of the original array. It's perfect for transforming data.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const numbers = [1, 2, 3];'}<br/>
                {'const doubled = numbers.map(num => num * 2);'}<br/>
                {'// doubled is [2, 4, 6]'}<br/>
                {'// numbers is still [1, 2, 3]'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. `filter()` - To Select</h2>
            <p className="opacity-90">
              The `filter()` method creates a new array with all elements that **pass a test** (return `true`) from a given function. It's used to filter out items you don't need.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const numbers = [1, 2, 3, 4, 5];'}<br/>
                {'const evens = numbers.filter(num => num % 2 === 0);'}<br/>
                {'// evens is [2, 4]'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. `reduce()` - To Aggregate</h2>
            <p className="opacity-90">
              The `reduce()` method executes a "reducer" function on each element, resulting in a **single output value**. It's perfect for summing up numbers, or grouping data.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const numbers = [1, 2, 3, 4, 5];'}<br/>
                {'// The 0 is the initial value for the accumulator'}<br/>
                {'const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);'}<br/>
                {'// sum is 15'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Other Useful Methods</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`find()`:</strong> Returns the **first element** that satisfies a test.</li>
                <li><strong>`findIndex()`:</strong> Returns the **index** of the first element that satisfies a test.</li>
                <li><strong>`includes()`:</strong> Returns `true` or `false` if an array contains a certain value.</li>
                <li><strong>`slice()`:</strong> Returns a shallow copy of a portion of an array. (Immutable)</li>
                <li><strong>`splice()`:</strong> Changes the contents of an array by removing or replacing existing elements. (Mutates the original array!)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">10. Key Strategy Summary</h2>
            <p className="opacity-90">
              Modern JavaScript development relies heavily on functional, immutable array methods.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Prefer Immutable Methods:</strong> Favor `map`, `filter`, and `reduce` over methods that mutate the original array (like `push` or `splice`), especially in React.</li>
                <li><strong>Chain Methods:</strong> You can chain these methods together for clean, powerful operations.</li>
                <li><strong>Use `forEach` for Side Effects:</strong> If you just need to do something (like `console.log`) for each element, `forEach` is perfect.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'objects-methods':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.5: Objects & Object Methods</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Objects are the most fundamental and versatile data structure in JavaScript. While primitive types store a single value (like a number), objects are complex data types used to store a collection of related data and functionality. Almost everything in JavaScript is an object, so understanding them deeply is crucial.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Real-World Entity</h2>
            <p className="opacity-90">
              Think of an object in JavaScript just like an object in the real world—a car, a person, a dog. A real-world object has **properties** (like a car's color) and **methods** (actions it can perform, like `start()`).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">In JavaScript, an object is a collection of **key-value pairs**.</p>
              <ul className="list-disc ml-6 mt-2 space-y-2 opacity-90">
                <li><strong>Keys (or Properties):</strong> These are strings that act as the name or label for a piece of data.</li>
                <li><strong>Values:</strong> These can be any data type—a string, number, boolean, array, or even another object or a function.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Creating an Object (Object Literal)</h2>
            <p className="opacity-90">
              The most common way to create an object is using object literal syntax: curly braces `{}`.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const person = {'}<br/>
                {'  firstName: "John",'}<br/>
                {'  lastName: "Doe",'}<br/>
                {'  age: 30,'}<br/>
                {'  isStudent: false'}<br/>
                {'};'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Accessing Properties</h2>
            <p className="opacity-90">
              There are two ways to access the value of a property.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold">Dot Notation (Preferred)</h3>
                <p className="text-sm opacity-90 mt-1">Clean and easy to read. `object.key`</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'console.log(person.firstName); // "John"'}</code></pre>
              </div>
              <div>
                <h3 className="font-bold">Bracket Notation</h3>
                <p className="text-sm opacity-90 mt-1">Useful when the key is a variable or contains spaces. `object['key']`</p>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'console.log(person["age"]); // 30'}</code></pre>
              </div>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Object Methods</h2>
            <p className="opacity-90">
              When the value of a property is a function, it is called a <strong>method</strong>. Methods define the actions that an object can perform.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const person = {'}<br/>
                {'  name: "Alice",'}<br/>
                {'  greet: function() {'}<br/>
                {'    console.log("Hello, my name is " + this.name);'}<br/>
                {'  }'}<br/>
                {'};'}<br/><br/>
                {'// Calling the method'}<br/>
                {'person.greet(); // Outputs: "Hello, my name is Alice"'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. The `this` Keyword</h2>
            <p className="opacity-90">
              The `this` keyword is a special identifier that refers to the **object that is currently executing the code**. Inside an object method, `this` gives you access to the other properties of that same object. In the example above, `this.name` refers to the `name` property of the `person` object.
            </p>

            <h2 className="text-2xl font-semibold pt-4">6. Modifying Objects</h2>
            <p className="opacity-90">
              Even if an object is declared with `const`, you can still change, add, or delete its properties. `const` only prevents reassigning the variable itself.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const user = { name: "Bob" };'}<br/><br/>
                {'// Modifying a property'}<br/>
                {'user.name = "Charlie";'}<br/><br/>
                {'// Adding a new property'}<br/>
                {'user.age = 40;'}<br/><br/>
                {'// Deleting a property'}<br/>
                {'delete user.age;'}<br/><br/>
                {'console.log(user); // { name: "Charlie" }'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Built-in Object Methods: `keys`, `values`, `entries`</h2>
            <p className="opacity-90">
              The global `Object` constructor provides useful methods for working with objects.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`Object.keys(obj)`:</strong> Returns an array of an object's keys.</li>
                <li><strong>`Object.values(obj)`:</strong> Returns an array of an object's values.</li>
                <li><strong>`Object.entries(obj)`:</strong> Returns an array of an object's `[key, value]` pairs.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const car = { make: "Ford", model: "Mustang" };'}<br/>
                {'Object.keys(car);   // ["make", "model"]'}<br/>
                {'Object.values(car); // ["Ford", "Mustang"]'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Objects vs. Arrays: When to Use Which?</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                  <h3 className="font-bold">Use an Array when:</h3>
                  <p className="text-sm opacity-90 mt-1">The **order** of the items matters, and the items are a simple, ordered list (e.g., a list of users, a list of posts).</p>
              </div>
              <div>
                  <h3 className="font-bold">Use an Object when:</h3>
                  <p className="text-sm opacity-90 mt-1">You need to store unordered, labeled pieces of data that describe a single entity (e.g., the properties of a user, like `firstName`, `email`).</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Objects are the primary way to structure data in JavaScript.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Use Dot Notation by Default.</strong> Only use bracket notation when the key is a variable.</li>
                <li><strong>Declare with `const`.</strong> This prevents accidental reassignment.</li>
                <li><strong>Understand `this`.</strong> `this` refers to the object that the method is *called on*.</li>
                <li><strong>Use `Object.keys()`</strong> to get an array of keys, which you can then loop over.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'dom-manipulation-events':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.6: DOM Manipulation & Events</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              This is where JavaScript connects with the webpage. **DOM Manipulation** is the process of using JavaScript to dynamically change the content, structure, and style of an HTML document. **Events** are the actions that a user performs on a webpage. Learning to manipulate the DOM in response to events is the core skill required to build any interactive website.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Live Blueprint</h2>
            <p className="opacity-90">
              When a browser loads an HTML document, it creates a "model" of that page in memory. This model is called the **Document Object Model (DOM)**. It's not the static HTML file; it's a live, dynamic representation that JavaScript can interact with.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">Analogy: A Marionette Puppet</h3>
              <p className="mt-2 opacity-90">
                Think of your HTML structure as a marionette puppet. JavaScript is the puppeteer. By pulling and manipulating the strings (interacting with the DOM), JavaScript can make the puppet (the webpage) move, change, and react.
              </p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. What is the DOM? A Tree of Nodes</h2>
            <p className="opacity-90">
              The DOM represents the HTML document as a tree-like structure of **nodes**. Every element, attribute, and piece of text in your HTML is a node in this tree. The top-level node is the `document` object, which is the entry point for all DOM manipulation.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">3. Selecting Elements: Grabbing the Strings</h2>
            <p className="opacity-90">
              Before you can change an element, you first need to select it from the DOM.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`document.getElementById('id')`</strong>: Selects a single element by its unique ID. Very fast.</li>
                <li><strong>`document.querySelector('selector')`</strong>: The modern, all-purpose selector. It selects the **first** element that matches a given CSS selector (e.g., `#myId`, `.myClass`, `p`).</li>
                <li><strong>`document.querySelectorAll('selector')`</strong>: Selects **all** elements that match a CSS selector and returns them in a collection.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const title = document.getElementById("main-title");'}<br/>
                {'const heading = document.querySelector(".heading");'}<br/>
                {'const allParagraphs = document.querySelectorAll("p");'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Manipulating Element Content</h2>
            <p className="opacity-90">
              Once you have selected an element, you can change what's inside it.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`.textContent`</strong>: Changes only the text. This is safer as it ignores any HTML tags.</li>
                <li><strong>`.innerHTML`</strong>: Sets the HTML content *inside* the element. Use this if you need to add tags like `<strong>&lt;em&gt;</strong>`.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const heading = document.querySelector("h1");'}<br/>
                {'heading.textContent = "Hello World!"; // Safe for text'}<br/>
                {'heading.innerHTML = "<em>Hello</em> World!"; // Renders italic text'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Manipulating Element Styles</h2>
            <p className="opacity-90">
              You can change an element's CSS by accessing its `.style` property. Note that CSS properties with hyphens (e.g., `background-color`) become camelCase (e.g., `backgroundColor`).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const heading = document.querySelector("h1");'}<br/>
                {'heading.style.color = "red";'}<br/>
                {'heading.style.backgroundColor = "#333";'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Manipulating Element Attributes & Classes</h2>
            <p className="opacity-90">
              You can also change an element's attributes. The `classList` property is a special, easy way to manage classes.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`element.setAttribute('href', '...')`</strong>: Sets any attribute.</li>
                <li><strong>`element.classList.add('my-class')`</strong>: Adds a new CSS class.</li>
                <li><strong>`element.classList.remove('my-class')`</strong>: Removes a CSS class.</li>
                <li><strong>`element.classList.toggle('my-class')`</strong>: Adds the class if it's not there, removes it if it is.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Creating and Adding New Elements</h2>
            <p className="opacity-90">
              You can create new HTML elements from scratch and add them to the page.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>`document.createElement('tagName')`</strong>: Creates a new element in memory.</li>
                <li><strong>`element.append(child)`</strong>: Adds the new element as a child of an existing element.</li>
              </ol>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const newParagraph = document.createElement("p");'}<br/>
                {'newParagraph.textContent = "This was added by JavaScript!";'}<br/>
                {'document.body.append(newParagraph);'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Events and Event Listeners</h2>
            <p className="opacity-90">
              An **event** is an action (like a "click"). An **event listener** is a function that "listens" for that action and runs code in response.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const button = document.querySelector("#my-button");'}<br/><br/>
                {'function onButtonClick() {'}<br/>
                {'  alert("Button was clicked!");'}<br/>
                {'}'}<br/><br/>
                {'button.addEventListener("click", onButtonClick);'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. The Event Object</h2>
            <p className="opacity-90">
              The event listener function automatically receives an **event object** with details about the event.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`event.target`</strong>: A reference to the element that the event occurred on.</li>
                <li><strong>`event.preventDefault()`</strong>: A method that stops the browser's default behavior (e.g., preventing a form from submitting).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. Key Strategy Summary</h2>
            <p className="opacity-90">
              This is the core of all frontend interactivity.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Select First, Then Manipulate:</strong> Store your selected elements in `const` variables.</li>
                <li><strong>Listen for Events:</strong> Use `addEventListener` to react to user actions.</li>
                <li><strong>Update the DOM:</strong> Inside the event listener, change the `.textContent`, `.style`, or `.classList` of your selected elements.</li>
                <li><strong>Use `classList` for Styling:</strong> It's better to add/remove a CSS class than to change many individual `.style` properties.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'es6-features':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.7: ES6+ Features (Modern JavaScript)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              ECMAScript is the official standard that JavaScript is based on. In 2015, a major update called **ECMAScript 2015 (or ES6)** was released, and it fundamentally changed how we write modern JavaScript. ES6 and subsequent yearly updates introduced new features that make the language more powerful, readable, and efficient. Mastering these features is essential for working with modern frameworks like React.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Language Upgrade</h2>
            <p className="opacity-90">
              Think of ES6 as a major software upgrade for JavaScript. It didn't remove old features, but it added better, safer, and more concise ways to accomplish common tasks. The goal is to help developers write cleaner, more maintainable code.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. `let` and `const` (Block Scope)</h2>
            <p className="opacity-90">
              Before ES6, `var` was the only way to declare variables. `var` is function-scoped, which can lead to bugs. ES6 introduced `let` and `const`, which are **block-scoped** (they only exist within the closest set of `{}`).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`let`</strong>: For variables that will be reassigned.</li>
                <li><strong>`const`</strong>: For variables that will not be reassigned. **Always use `const` unless you know you need to change the value.**</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Arrow Functions</h2>
            <p className="opacity-90">
              Arrow functions (`=&gt;`) provide a more concise syntax for writing function expressions.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// Traditional Function'}<br/>
                {'const add = function(a, b) {\n  return a + b;\n};'}<br/><br/>
                {'// Arrow Function (with implicit return)'}<br/>
                {'const addArrow = (a, b) => a + b;'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Template Literals (Template Strings)</h2>
            <p className="opacity-90">
              Template literals provide an easier way to create strings, especially strings that contain variables. They use backticks (`` ` ``) instead of quotes.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const name = "Alice";'}<br/>
                {'// Old way\nconst messageOld = "Hello, " + name + "!";'}<br/><br/>
                {'// New way with template literals\nconst messageNew = `Hello, ${name}!`;'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Destructuring Assignment (Objects)</h2>
            <p className="opacity-90">
              Destructuring is a powerful syntax that allows you to "unpack" properties from objects into distinct variables.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const person = { firstName: "John", age: 30 };'}<br/><br/>
                {'// Old way\nconst name = person.firstName;\nconst age = person.age;'}<br/><br/>
                {'// New way with destructuring\nconst { firstName, age } = person;'}<br/>
                {'console.log(firstName); // "John"'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Destructuring Assignment (Arrays)</h2>
            <p className="opacity-90">
              You can also destructure arrays to get elements by their position.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const fruits = ["Apple", "Banana", "Cherry"];'}<br/><br/>
                {'const [first, second] = fruits;'}<br/>
                {'console.log(first); // "Apple"'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. The Spread Operator (`...`)</h2>
            <p className="opacity-90">
              The spread operator "spreads" the elements of an array or object into a new array or object. It's perfect for making copies or combining arrays.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const arr1 = [1, 2, 3];'}<br/>
                {'const arr2 = [...arr1, 4, 5]; // arr2 is [1, 2, 3, 4, 5]'}<br/><br/>
                {'const obj1 = { a: 1, b: 2 };'}<br/>
                {'const obj2 = { ...obj1, c: 3 }; // obj2 is { a: 1, b: 2, c: 3 }'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. The Rest Parameter (`...`)</h2>
            <p className="opacity-90">
              The rest parameter has the same syntax (`...`) but is used inside a function definition to collect multiple arguments into a single array.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'function sum(...numbers) {'}<br/>
                {'  return numbers.reduce((acc, curr) => acc + curr, 0);'}<br/>
                {'}'}<br/><br/>
                {'sum(1, 2, 3, 4); // returns 10'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Modules (`import` and `export`)</h2>
            <p className="opacity-90">
              Modules allow you to split your code into separate, reusable files. You `export` functions or variables from one file and `import` them into another. This is the foundation of all modern JavaScript frameworks.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// 📁 utils.js'}<br/>
                {'export const PI = 3.14;'}<br/>
                {'export const add = (a, b) => a + b;'}<br/><br/>
                {'// 📁 main.js'}<br/>
                {'import { PI, add } from "./utils.js";'}<br/>
                {'console.log(add(5, 10)); // 15'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. Key Strategy Summary</h2>
            <p className="opacity-90">
              Embrace these modern features to write cleaner, more professional code.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Use `let` and `const` exclusively; avoid `var`.</li>
                <li>Use arrow functions (`=&gt;`) and template literals (`` `...` ``) to write more concise code.</li>
                <li>Use destructuring (`{ }`) and the spread operator (`...`) to work with objects and arrays cleanly.</li>
                <li>Organize your code into modules with `import` and `export`.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'asynchronous-javascript':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.8: Asynchronous JavaScript (Promises, Async/Await)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              By default, JavaScript is a **synchronous**, single-threaded language, meaning it executes one line of code at a time, in order. However, many web operations, like fetching data from a server or waiting for a timer, can take time. **Asynchronous JavaScript** is the mechanism that allows the browser to perform these long-running tasks without freezing the entire webpage.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Restaurant Kitchen</h2>
            <p className="opacity-90">
              Imagine a chef in a kitchen.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Synchronous Work:</strong> The chef takes one order, cooks it, serves it, and *only then* takes the next order. The entire kitchen (and all other customers) must wait.</li>
                <li><strong>Asynchronous Work:</strong> The chef takes an order, puts a steak on the grill (a long-running task), and while it's cooking, they can chop vegetables for the next order. They are notified when the steak is done. This is how asynchronous JavaScript works.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. The Problem: Synchronous Code is Blocking</h2>
            <p className="opacity-90">
              If JavaScript ran tasks synchronously, a single request to a server that takes 5 seconds would freeze the entire browser tab. The user wouldn't be able to click buttons, scroll, or do anything.
            </p>

            <h2 className="text-2xl font-semibold pt-4">3. The Old Way: Callbacks</h2>
            <p className="opacity-90">
              The original way to handle async code was with **callback functions**. A callback is a function you pass as an argument to another function, which is then executed once the main task is complete.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">Nesting multiple callbacks leads to a messy, hard-to-read structure known as "Callback Hell" or the "Pyramid of Doom."</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. The Solution: Promises</h2>
            <p className="opacity-90">
              A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation. It's a placeholder for a future value.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">A Promise has three states:</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2 opacity-90">
                <li><strong>Pending:</strong> The initial state; the operation has not yet completed.</li>
                <li><strong>Fulfilled (or Resolved):</strong> The operation completed successfully.</li>
                <li><strong>Rejected:</strong> The operation failed.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Consuming Promises: `.then()` and `.catch()`</h2>
            <p className="opacity-90">
              Once you have a promise, you can attach callbacks to it to handle the outcome.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`.then(onFulfilled)`:</strong> Takes a function that will run if the promise is fulfilled.</li>
                <li><strong>`.catch(onRejected)`:</strong> Takes a function that will run if the promise is rejected.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. `fetch`: The Modern Way to Make Requests</h2>
            <p className="opacity-90">
              The `fetch` API is a modern, built-in function that makes network requests and returns a Promise.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'fetch("https://api.example.com/data")'}<br/>
                {'  .then(response => response.json())'}<br/>
                {'  .then(data => {'}<br/>
                {'    console.log(data); // The actual data'}<br/>
                {'  })'}<br/>
                {'  .catch(error => {'}<br/>
                {'    console.error("Fetch failed:", error);'}<br/>
                {'  });'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. `async/await`: The Cleanest Syntax</h2>
            <p className="opacity-90">
              ES2017 introduced `async` and `await` keywords, which provide a much cleaner syntax for working with promises. It makes your asynchronous code look synchronous.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`async` function:</strong> The `async` keyword before a function makes it automatically return a promise.</li>
                <li><strong>`await` operator:</strong> Can only be used inside an `async` function. It pauses the function's execution and waits for a promise to resolve before continuing.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Error Handling with `try...catch`</h2>
            <p className="opacity-90">
              When using `async/await`, you don't use `.catch()`. Instead, you use a standard `try...catch` block to handle any errors.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const fetchUser = async () => {'}<br/>
                {'  try {'}<br/>
                {'    const response = await fetch("https://api.example.com/user/1");'}<br/>
                {'    const user = await response.json();'}<br/>
                {'    console.log(user.name);'}<br/>
                {'  } catch (error) {'}<br/>
                {'    console.error("Failed to fetch user:", error);'}<br/>
                {'  }'}<br/>
                {'};'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              `async/await` is the modern standard for handling asynchronous operations.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Prefer `async/await`</strong> for readability.</li>
                <li><strong>Always Handle Errors.</strong> Use `try...catch` with `async/await`, or `.catch()` with promises.</li>
                <li><strong>Understand it's still Asynchronous.</strong> `await` is non-blocking; it just pauses *your function*, not the entire browser.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'error-handling-debugging':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.9: Error Handling & Debugging</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              No developer, no matter how experienced, writes perfect code all the time. Errors (or "bugs") are a natural and unavoidable part of software development. **Error Handling** is the practice of anticipating and managing errors gracefully so they don't crash your application. **Debugging** is the art of systematically finding and fixing the root cause of these errors.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Being a Code Detective</h2>
            <p className="opacity-90">
              Think of an error as a clue. Your application is behaving unexpectedly, and it's your job as a detective to follow the clues to find the culprit. A good developer doesn't just fix the immediate problem; they understand *why* it happened and put measures in place to prevent it.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. Types of Errors in JavaScript</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Syntax Errors:</strong> "Grammar" mistakes in your code. The browser cannot parse the code. These are often caught by your code editor. (e.g., a missing `)` or `{'}'}`).</li>
                <li><strong>Runtime Errors (Exceptions):</strong> Errors that occur *while* the code is running. The syntax is correct, but the program encounters an impossible situation. (e.g., `user.name` when `user` is `null`).</li>
                <li><strong>Logical Errors:</strong> The trickiest bugs. The code runs without crashing, but it produces the wrong result (e.g., `total = price - tax` instead of `price + tax`).</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Tool 1: The Browser Console</h2>
            <p className="opacity-90">
              The **Console** (in your Browser DevTools) is your primary debugging tool. It is where all JavaScript errors, warnings, and log messages appear. **Always have your console open when you are developing.**
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">4. Tool 2: `console.log()`</h2>
            <p className="opacity-90">
              This is the most fundamental debugging technique. By printing the values of variables at different stages, you can trace the flow of data and find where things go wrong.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'function calculateTotal(price, quantity) {'}<br/>
                {'  console.log("Price is:", price);'}<br/>
                {'  console.log("Quantity is:", quantity);'}<br/>
                {'  const total = price * quantity;'}<br/>
                {'  console.log("Total is:", total);'}<br/>
                {'  return total;'}<br/>
                {'}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Tool 3: The Debugger</h2>
            <p className="opacity-90">
              The browser's **Debugger** (in the "Sources" tab of DevTools) is a powerful tool. It allows you to set **breakpoints** in your code. A breakpoint is a point where the browser will pause the execution of your JavaScript, allowing you to:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Inspect the values of all variables at that exact moment.</li>
                <li>"Step through" your code line by line to watch how it executes.</li>
                <li>See the "call stack" to understand how your functions are being called.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Error Handling: The `try...catch` Statement</h2>
            <p className="opacity-90">
              The `try...catch` statement is JavaScript's primary mechanism for handling runtime errors. It allows you to "try" a block of code that might fail, and "catch" any errors that occur without crashing the app.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'try {'}<br/>
                {'  const user = null;'}<br/>
                {'  console.log(user.name); // This will throw a TypeError'}<br/>
                {'} catch (error) {'}<br/>
                {'  console.error("An error occurred:", error.message);'}<br/>
                {'}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. The `finally` Block</h2>
            <p className="opacity-90">
              An optional `finally` block can be added. The code inside `finally` will execute **regardless** of whether an error was thrown or not. It's used for cleanup tasks.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'try { ... } catch (error) { ... } finally {\n  console.log("This will always run.");\n}'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">8. The `throw` Statement</h2>
            <p className="opacity-90">
              The `throw` statement allows you to create your own custom errors. This is useful for enforcing rules in your functions.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'function divide(a, b) {'}<br/>
                {'  if (b === 0) {'}<br/>
                {'    throw new Error("Cannot divide by zero!");'}<br/>
                {'  }'}<br/>
                {'  return a / b;'}<br/>
                {'}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Errors are inevitable. Good developers are good debuggers.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Read the Error Message.</strong> This is the most important clue.</li>
                <li><strong>Use `console.log()`</strong> to trace your variables.</li>
                <li><strong>Use the Debugger</strong> to step through complex logic.</li>
                <li><strong>Use `try...catch`</strong> to handle errors from external sources, like API calls (`async/await`) or user input.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'js-miniproject':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">4.10: Js-MiniProject (Stone, Paper, Scissor)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              This chapter will walk you through building a classic Stone, Paper, Scissors game from scratch, explaining the logic behind the code step-by-step. This project combines all the concepts from this chapter.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">1. The Project Workflow</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>HTML Structure:</strong> Build the UI skeleton with elements for scores, buttons, and results, giving them unique IDs.</li>
                <li><strong>CSS Styling:</strong> Add basic styling to make the game usable.</li>
                <li><strong>JavaScript Logic:</strong>
                  <ul className="list-circle ml-6 space-y-1">
                    <li>Select all necessary DOM elements.</li>
                    <li>Write a function to get the computer's random choice.</li>
                    <li>Write a function to determine the winner.</li>
                    <li>Write a function to update the score and result message on the UI.</li>
                    <li>Add `click` event listeners to the buttons to start the game.</li>
                  </ul>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Step 1: The HTML (`index.html`)</h2>
            <p className="opacity-90">
              Create an `index.html` file. We give specific `id`s to the elements we need to manipulate with JavaScript (like the scores and buttons).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<h2>User Score: <span id="user-score">0</span></h2>\n<h2>Computer Score: <span id="computer-score">0</span></h2>\n\n<div class="choices">\n  <button id="stone">Stone</button>\n  <button id="paper">Paper</button>\n  <button id="scissors">Scissors</button>\n</div>\n\n<div id="result-display">\n  <p>Make your move!</p>\n</div>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Step 2: The CSS (`styles.css`)</h2>
            <p className="opacity-90">
              Create a `styles.css` file. The `cursor: pointer` rule is important for usability as it indicates the buttons are clickable.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'.choices button {\n  padding: 10px 20px;\n  margin: 5px;\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n#result-display {\n  margin-top: 20px;\n  font-weight: bold;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Step 3 (JS): Selecting Elements</h2>
            <p className="opacity-90">
              Create a `script.js` file. First, get references to all your HTML elements.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const userScoreDisplay = document.getElementById("user-score");\nconst computerScoreDisplay = document.getElementById("computer-score");\nconst resultDisplay = document.querySelector("#result-display p");\nconst choiceButtons = document.querySelectorAll(".choices button");\n\nlet userScore = 0;\nlet computerScore = 0;'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Step 4 (JS): Handling Clicks</h2>
            <p className="opacity-90">
              Loop through each button and attach a `click` event listener. When a button is clicked, grab its `id` and pass it to your main game function.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'choiceButtons.forEach(button => {\n  button.addEventListener("click", (e) => {\n    const userChoice = e.target.id;\n    playRound(userChoice);\n  });\n});'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Step 5 (JS): Computer's Choice</h2>
            <p className="opacity-90">
              Create a function to get a random choice for the computer using `Math.random()`.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'function getComputerChoice() {\n  const choices = ["stone", "paper", "scissors"];\n  const randomIndex = Math.floor(Math.random() * 3);\n  return choices[randomIndex];\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Step 6 (JS): The Core Game Logic</h2>
            <p className="opacity-90">
              This function takes both choices, compares them, and determines the winner.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'function playRound(userChoice) {\n  const computerChoice = getComputerChoice();\n  if (userChoice === computerChoice) {\n    updateUI("draw", userChoice, computerChoice);\n  } else if (\n    (userChoice === "stone" && computerChoice === "scissors") ||\n    (userChoice === "paper" && computerChoice === "stone") ||\n    (userChoice === "scissors" && computerChoice === "paper")\n  ) {\n    userScore++;\n    updateUI("win", userChoice, computerChoice);\n  } else {\n    computerScore++;\n    updateUI("lose", userChoice, computerChoice);\n  }\n}'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">8. Step 7 (JS): Updating the UI</h2>
            <p className="opacity-90">
              This function's only job is to update the HTML to show the new scores and the result message.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'function updateUI(result, userChoice, computerChoice) {\n  userScoreDisplay.textContent = userScore;\n  computerScoreDisplay.textContent = computerScore;\n\n  let message = `You chose ${userChoice}, computer chose ${computerChoice}. `;\n\n  if (result === "win") {\n    message += "You win!";\n  } else if (result === "lose") {\n    message += "You lose!";\n  } else {\n    message += "It\'s a draw!";\n  }\n\n  resultDisplay.textContent = message;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              This project demonstrates the complete frontend workflow.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>DOM Selection:</strong> You grab all the elements you need to interact with.</li>
                <li><strong>Event Handling:</strong> You use `addEventListener` to run code when the user does something.</li>
                <li><strong>State Management:</strong> You use variables (`userScore`, `computerScore`) to keep track of the game's state.</li>
                <li><strong>DOM Manipulation:</strong> You use `.textContent` to update the page with the new state.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'mini-project-preview':
      return (
        <MiniProjectPreview />
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

export default Chapter4;