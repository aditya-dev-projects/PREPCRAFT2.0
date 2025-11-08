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

// --- Mini Project Preview Component (Light Theme) ---
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
    <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
      <h2 className="text-3xl font-bold mb-4">4.11: Mini Project Preview</h2>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          Here is a live, functional preview of the Stone, Paper, Scissors game built using the concepts from this chapter.
        </p>
        <div className="p-4 sm:p-6 mt-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-around text-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">User Score</h2>
              <p className="text-4xl font-mono text-blue-600 mt-2">{userScore}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Computer Score</h2>
              <p className="text-4xl font-mono text-red-600 mt-2">{computerScore}</p>
            </div>
          </div>
          
          <div className="text-center my-8">
            <h3 className="text-lg font-semibold">Your Choice: <span className="text-gray-700 font-bold capitalize">{userChoice || '-'}</span></h3>
            <h3 className="text-lg font-semibold">Computer's Choice: <span className="text-gray-700 font-bold capitalize">{computerChoice || '-'}</span></h3>
          </div>

          <div className="text-center min-h-[50px] flex items-center justify-center">
            <p className="font-semibold text-lg text-gray-800">{resultMessage}</p>
          </div>

          <div className="choices text-center mt-6">
            <h3 className="text-lg font-semibold mb-4">Choose your weapon:</h3>
            <button onClick={() => playRound('stone')} className="py-2 px-4 m-2 text-lg bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">Stone</button>
            <button onClick={() => playRound('paper')} className="py-2 px-4 m-2 text-lg bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">Paper</button>
            <button onClick={() => playRound('scissors')} className="py-2 px-4 m-2 text-lg bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">Scissors</button>
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
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.1: JavaScript Basics (Variables, Data Types, Operators)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Digital Brain</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>If HTML is the "skeleton" of a webpage and CSS is the "skin," then JavaScript (JS) is the "brain." It's a programming language that brings the webpage to life, allowing it to react to user clicks, handle data, and make decisions. It runs directly in the user's browser, which is why it's called a <strong>client-side</strong> language.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>JavaScript is a <strong>dynamically-typed</strong>, high-level programming language. The fundamentals involve storing data in variables, understanding the different types of data, and performing operations on them.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Variables:</strong> Containers for storing data values.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>const</Code>: Used for "constants," or variables that **will not be reassigned**. This is the modern default.</li>
                  <li><Code>let</Code>: Used for variables whose values **can be reassigned**.</li>
                  <li><Code>var</Code>: The old, function-scoped way. **Avoid using `var`** in modern JS.</li>
                </ul>
              </li>
              <li><strong>Primitive Data Types:</strong> The most basic data.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>String:</strong> Text, wrapped in quotes (e.g., `"Hello"`, `'world'`).</li>
                  <li><strong>Number:</strong> Both integers (e.g., `100`) and floating-point (e.g., `10.5`).</li>
                  <li><strong>Boolean:</strong> A logical value, either `true` or `false`.</li>
                  <li><strong><Code>null</Code>:</strong> Represents the intentional absence of a value.</li>
                  <li><strong><Code>undefined</Code>:</strong> Represents a variable that has been declared but not assigned.</li>
                </ul>
              </li>
              <li><strong>Complex Data Types:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Object:</strong> A collection of key-value pairs (e.g., <Code>{'{'} name: "Alex", age: 30 {'}'}</Code>).</li>
                  <li><strong>Array:</strong> A list-like object (e.g., `[1, "hello", true]`).</li>
                </ul>
              </li>
              <li><strong>Operators:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Arithmetic:</strong> `+`, `-`, `*`, `/`, `%` (remainder).</li>
                  <li><strong>Assignment:</strong> `=`, `+=`, `-=`.</li>
                  <li><strong>Comparison:</strong> `===` (strict equality, checks type & value), `!==` (strict inequality). **Always use strict equality.**</li>
                  <li><strong>Logical:</strong> `&&` (AND), `||` (OR), `!` (NOT).</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Variables and Operators</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This code demonstrates declaring variables, using different data types, and performing operations. You can run this in your browser's console.</p>
            <CodeBlock code={`
// 1. Declaring variables with const and let
const basePrice = 100;
let userAge = 25;
let discountPercent = 0;

// 2. Using operators (logical &&, comparison >=)
if (userAge >= 65) {
  discountPercent = 0.2; // 20% discount for seniors
}

// 3. Reassigning a 'let' variable
userAge = userAge + 1; 

// 4. Arithmetic operators
const discountAmount = basePrice * discountPercent;
const finalPrice = basePrice - discountAmount;

// 5. String concatenation (old way)
console.log("Your final price is: " + finalPrice);

// 6. Template Literals (modern way)
console.log(\`You are \${userAge} and your price is \${finalPrice}\`);
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the real difference between `const` and `let`? When do I use them?</strong>
                <p className="pl-4">Use <Code>const</Code> by default for everything (variables, arrays, objects). This prevents you from accidentally reassigning a variable. Use <Code>let</Code> *only* when you know a variable's value needs to change, such as a counter in a loop (`let i = 0`) or a value that gets updated (`let score = 0`).</p>
              </li>
              <li>
                <strong>Why should I use `===` instead of `==`?</strong>
                <p className="pl-4">The double-equals (`==`) performs <strong>type coercion</strong>, meaning it tries to convert the values before comparing them. This leads to unpredictable bugs (e.g., `0 == false` is `true`). The triple-equals (`===`) is <strong>strict</strong>: it checks both the value *and* the type. `0 === false` is `false`. Always use `===` to prevent bugs.</p>
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
    case 'control-structures':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.2: Control Structures (Conditionals, Loops)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: A "Choose Your Own Adventure" Book</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>By default, code runs from top to bottom. Control structures change this. Think of them as the "choices" in a story:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Conditionals (`if`):</strong> "If you open the door, turn to page 45. Otherwise (else), turn to page 52." Your code takes one path or the other based on a condition.</li>
              <li><strong>Loops (`for`):</strong> "Attack the dragon 10 times." This is a set of instructions that you repeat a specific number of times.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Control structures allow you to direct the flow of your program using logic.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Conditionals (Decision Making):</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>`if / else if / else`:</strong> The standard way to run code blocks based on a condition. An `if` block runs if its condition is <strong>truthy</strong>.</li>
                  <li><strong>Truthy/Falsy:</strong> In JS, all values are "truthy" except for 6 "falsy" values: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`. This is a powerful shortcut.</li>
                  <li><strong>Ternary Operator:</strong> A one-line shortcut for `if/else`. Syntax: <Code>condition ? expressionIfTrue : expressionIfFalse</Code>.</li>
                  <li><strong>`switch` Statement:</strong> A clean way to compare one value against many possible "cases."</li>
                </ul>
              </li>
              <li><strong>Loops (Repetition):</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>`for` Loop:</strong> The classic loop. Used when you know how many times you want to iterate (e.g., 10 times, or once for every item in an array).</li>
                  <li><strong>`while` Loop:</strong> Used when you *don't* know how many times, but you know the *condition* to stop (e.g., "keep looping *while* the user hasn't guessed the number").</li>
                  <li><strong>Array Methods:</strong> In modern JS, we often use <Code>.forEach()</Code>, <Code>.map()</Code>, and <Code>.filter()</Code> instead of `for` loops to interact with arrays.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: `if`, `for`, and `while`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example shows how `if` statements make decisions and `for` loops perform repetition.</p>
            <CodeBlock code={`
// 1. Conditional (if/else)
const temperature = 25;
let action = '';

if (temperature > 30) {
  action = 'Go swimming';
} else if (temperature > 20) {
  action = 'Go for a walk';
} else {
  action = 'Read a book';
}
console.log(action); // "Go for a walk"

// 2. Loop (for)
// This loop will run 5 times (i = 0, 1, 2, 3, 4)
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration number \${i}\`);
}

// 3. Loop (while)
let counter = 0;
while (counter < 3) {
  console.log(\`While loop count: \${counter}\`);
  counter++;
}
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between a `for` loop and a `while` loop?</strong>
                <p className="pl-4">Use a <Code>for</Code> loop when you know *how many times* you need to loop (e.g., "for all 50 items in this array..."). Use a <Code>while</Code> loop when you *don't* know how many times, but you know the *condition* to stop (e.g., "while the game is not over...").</p>
              </li>
              <li>
                <strong>What does "truthy" mean? Why is `if (userName)` a valid check?</strong>
                <p className="pl-4">It's a common shortcut. If `userName` is an empty string (`""`), it's "falsy," and the `if` block won't run. If it has any text (e.g., `"Alex"`), it's "truthy," and the block *will* run. This makes `if (userName)` a quick way to check if the variable exists and is not empty.</p>
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
    case 'functions-scope':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.3: Functions & Scope</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Reusable Recipe</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>function</strong> is a reusable "recipe" for code. You <strong>define</strong> it once (write the recipe) and then <strong>call</strong> it many times (cook the meal).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Parameters:</strong> The ingredients the recipe needs (e.g., `num1`, `num2`).</li>
              <li><strong>Function Body:</strong> The steps to follow (e.g., `return num1 + num2;`).</li>
              <li><strong>Return Value:</strong> The finished dish (e.g., the resulting sum).</li>
            </ul>
            <p><strong>Scope</strong> is like "kitchen rules." Variables created inside the kitchen (Function Scope) are not visible or usable *outside* the kitchen. This prevents conflicts and keeps your code organized.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Functions</strong> are a core building block in JS. They are "first-class citizens," meaning they can be passed around just like any other variable.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Function Declaration:</strong> The classic named function. These are <strong>hoisted</strong>, meaning they are "lifted" to the top of their scope and can be called before they are defined.</li>
              <li><strong>Function Expression:</strong> An anonymous (unnamed) function assigned to a variable. These are **not** hoisted.</li>
              <li><strong>Arrow Functions (ES6+):</strong> The modern, concise syntax (`=&gt;`). They are always anonymous and are not hoisted. They also have a different behavior with the `this` keyword (which you'll see in object methods).</li>
            </ul>
            <p><strong>Scope</strong> determines the visibility of variables.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Global Scope:</strong> Variables declared outside any function. Accessible *everywhere*. **Avoid this** as it leads to bugs.</li>
              <li><strong>Function Scope:</strong> Variables declared with `var` inside a function. Accessible *anywhere* within that function.</li>
              <li><strong>Block Scope:</strong> Variables declared with <Code>let</Code> and <Code>const</Code>. Accessible *only* within the <Code>{"{ ... }"}</Code> block they are defined in (e.g., inside an `if` statement or `for` loop). This is the most predictable and preferred scope.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Declarations, Expressions, and Scope</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <CodeBlock code={`
// 1. Function Declaration (Hoisted)
const result1 = add(5, 10);
console.log(result1); // 15 (Works, even though 'add' is defined below)

function add(a, b) {
  return a + b;
}

// 2. Arrow Function (ES6+, not hoisted)
const multiply = (a, b) => {
  return a * b;
};
const result2 = multiply(5, 10);
console.log(result2); // 50

// 3. Scope Example
const globalVar = "I'm global";

function testScope() {
  const functionVar = "I'm local to the function";
  console.log(globalVar); // Can access global
  
  if (true) {
    let blockVar = "I'm local to this block";
    console.log(blockVar); // "I'm local to this block"
  }
  
  // console.log(blockVar); // This would cause an Error!
}

testScope();
// console.log(functionVar); // This would also cause an Error!
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the main difference between a Function Declaration and an Arrow Function?</strong>
                <p className="pl-4">Two key differences: 1) **Syntax:** Arrow functions (`=&gt;`) are shorter. 2) **Hoisting:** Declarations (`function add()`) are hoisted, so you can call them *before* they are written. Arrow functions are not hoisted. In modern React, you will almost exclusively use arrow functions.</p>
              </li>
              <li>
                <strong>What does "hoisting" mean in simple terms?</strong>
                <p className="pl-4">It means the JavaScript engine "lifts" all function declarations and `var` variables to the top of their scope *before* it runs the code. This is why you can call a function declaration before it appears. It's often confusing, which is why <Code>let</Code> and <Code>const</Code> (which are *not* hoisted) are preferred.</p>
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
    case 'arrays-methods':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.4: Arrays & Array Methods</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: A Library Shelf</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>An <strong>Array</strong> is like a library shelf that holds an ordered list of items (books). Each item has a specific position, or <strong>index</strong>, which starts at `0`.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Accessing:</strong> `myShelf[0]` (gets the first book).</li>
              <li><strong>Looping:</strong> "Go through *every book* on the shelf" (<Code>.forEach()</Code>).</li>
              <li><strong>Transforming:</strong> "Give me a *new list* of just the *titles* of every book" (<Code>.map()</Code>).</li>
              <li><strong>Filtering:</strong> "Give me a *new list* of only the *non-fiction* books" (<Code>.filter()</Code>).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>An <strong>Array</strong> is a data structure for storing an ordered collection of items. In modern JavaScript, we avoid *mutating* (changing) arrays directly. Instead, we use **immutable methods** that return a *new* array, which is a core principle of functional programming and React.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Basic Methods (Mutating):</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>push(item)</Code>: Adds to the end.</li>
                  <li><Code>pop()</Code>: Removes from the end.</li>
                  <li><Code>shift()</Code> / <Code>unshift(item)</Code>: Add/remove from the start.</li>
                </ul>
              </li>
              <li><strong>Looping Method:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>forEach(item {'=>'} {'{ ... }'})</Code>: Runs a function for each item. Does not return anything.</li>
                </ul>
              </li>
              <li><strong>Immutable "Big Three" (Essential):</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong><Code>map(item {'=>'} ...)</Code>:</strong> **Transforms** each item and returns a **new array** of the *same length*.</li>
                  <li><strong><Code>filter(item {'=>'} ...)</Code>:</strong> **Selects** items that pass a test (return `true`) and returns a **new array** of the *same or shorter length*.</li>
                  <li><strong><Code>reduce((acc, item) {'=>'} ...)</Code>:</strong> **Aggregates** an array into a *single value* (e.g., a sum, an object).</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The "Big Three" Methods</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the most common pattern in modern JS. Notice how the original `users` array is never changed.</p>
            <CodeBlock code={`
const users = [
  { id: 1, name: "Alex", role: "admin" },
  { id: 2, name: "Priya", role: "user" },
  { id: 3, name: "Leo", role: "user" }
];

// 1. .map() - To transform data
// Get an array of just the users' names.
const userNames = users.map(user => user.name);
// userNames is ["Alex", "Priya", "Leo"]

// 2. .filter() - To select data
// Get an array of only the users with the 'user' role.
const standardUsers = users.filter(user => user.role === 'user');
// standardUsers is [{ id: 2, ... }, { id: 3, ... }]

// 3. .reduce() - To aggregate data
// Get the total number of 'user' roles.
const userRoleCount = users.reduce((count, user) => {
  if (user.role === 'user') {
    return count + 1;
  }
  return count;
}, 0); // 0 is the starting value for 'count'
// userRoleCount is 2

// You can also chain them!
// Get the names of the users who are not admins.
const userNamesOnly = users
  .filter(user => user.role !== 'admin')
  .map(user => user.name);
// userNamesOnly is ["Priya", "Leo"]
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between `forEach` and `map`? They seem to do the same thing.</strong>
                <p className="pl-4">This is a critical difference. <Code>forEach</Code> just *runs a loop* and doesn't return anything (it returns `undefined`). It's for causing *side effects*, like printing to the console. <Code>map</Code> *transforms data* and **returns a new array**. If you want to change data, use <Code>map</Code>. If you just want to *do* something, use <Code>forEach</Code>.</p>
              </li>
              <li>
                <strong>Why is "immutability" (not changing the original array) so important?</strong>
                <p className="pl-4">In frameworks like React, state is immutable. React only knows to re-render a component if the *reference* to an array or object changes. If you just <Code>.push()</Code> to the original array, React won't see the change. By using <Code>.map()</Code> or <Code>.filter()</Code>, you create a *brand new array*, which triggers React to update the UI.</p>
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
    case 'objects-methods':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.5: Objects & Object Methods</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Real-World Object</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>An <strong>Object</strong> in JavaScript is exactly what it sounds like: a representation of a "thing" (like a person, a car, or a user). This "thing" has attributes (<strong>properties</strong>) and can perform actions (<strong>methods</strong>).</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Object:</strong> A Car</li>
              <li><strong>Properties:</strong> <Code>color: "red"</Code>, <Code>make: "Tesla"</Code>, <Code>year: 2024</Code></li>
              <li><strong>Methods:</strong> <Code>start()</Code>, <Code>drive()</Code>, <Code>brake()</Code></li>
            </ul>
            <p>Objects are collections of <strong>key-value pairs</strong> that group related data and functionality together.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Objects are the most fundamental data structure in JS. They are collections of properties, where each property is a key-value pair.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Object Literal:</strong> The simplest way to create an object, using curly braces `{}`.</li>
              <li><strong>Accessing Properties:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Dot Notation:</strong> <Code>person.name</Code>. This is the preferred, cleaner method.</li>
                  <li><strong>Bracket Notation:</strong> <Code>person['name']</Code>. This is *required* when the key is a variable or contains spaces (e.g., `person[myVar]`).</li>
                </ul>
              </li>
              <li><strong>Methods:</strong> A property whose value is a function.</li>
              <li><strong>The `this` Keyword:</strong> Inside a method, `this` refers to the *object the method was called on*. It lets an object's methods access its own properties (e.g., `this.name`).</li>
              <li><strong>`const` and Objects:</strong> Declaring an object with <Code>const</Code> is standard. It means the *variable* cannot be reassigned, but the *properties* inside the object can still be changed.</li>
              <li><strong>Object Methods:</strong> Static methods on the `Object` constructor:
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>Object.keys(obj)</Code>: Returns an array of the object's keys.</li>
                  <li><Code>Object.values(obj)</Code>: Returns an array of the object's values.</li>
                  <li><Code>Object.entries(obj)</Code>: Returns an array of `[key, value]` pairs.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Creating and Using an Object</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <CodeBlock code={`
const user = {
  // Properties
  username: "alex123",
  email: "alex@example.com",
  friends: ["Priya", "Leo"],

  // Method (a function as a property)
  greet() {
    // 'this' refers to the 'user' object
    console.log(\`Hello, my username is \${this.username}\`);
  },

  // Method that uses another property
  addFriend(friendName) {
    this.friends.push(friendName);
    console.log(\`\${friendName} was added to \${this.username}'s friend list.\`);
  }
};

// 1. Accessing properties (Dot Notation)
console.log(user.email); // "alex@example.com"

// 2. Calling methods
user.greet(); // "Hello, my username is alex123"
user.addFriend("Maria");

// 3. Modifying a property (allowed even with const)
user.email = "new_email@example.com";

// 4. Using static Object methods
console.log(Object.keys(user)); // ["username", "email", "friends", "greet", "addFriend"]
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between Dot and Bracket notation?</strong>
                <p className="pl-4">Use **Dot notation** (`user.name`) 99% of the time. You *must* use **Bracket notation** (`user['name']`) only when the property key is dynamic (held in a variable) or contains special characters (like spaces, which you should avoid anyway). Example: `let key = 'name'; console.log(user[key]);`</p>
              </li>
              <li>
                <strong>What's the difference between an Object and an Array?</strong>
                <p className="pl-4">Use an **Array** for an *ordered list* of items (e.g., a list of friends, a list of posts). Use an **Object** to describe a *single thing* with named properties (e.g., a *user* who has a `name`, `email`, and `age`).</p>
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
    case 'dom-manipulation-events':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.6: DOM Manipulation & Events</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Digital Puppet Master</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of your HTML page as a marionette puppet. The <strong>DOM (Document Object Model)</strong> is the set of strings attached to the puppet's limbs. <strong>JavaScript</strong> is the puppet master. By pulling the strings (manipulating the DOM), your script can make the puppet (webpage) dance, change, and react.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Selecting an Element:</strong> Grabbing the "head" string. (`document.querySelector()`)</li>
              <li><strong>Events:</strong> A signal for the puppet master to do something (e.g., a "click" event).</li>
              <li><strong>Event Listener:</strong> The puppet master's ear, *listening* for that signal. (`.addEventListener()`)</li>
              <li><strong>Manipulation:</strong> The action the puppet master takes (e.g., changing the puppet's text, or making its arm wave). (`.textContent = ...`)</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The <strong>DOM</strong> is a live, in-memory tree of objects representing your HTML. JavaScript can interact with this tree to change the page *after* it has loaded. This is the core of all dynamic websites.</p>
            <p><strong>The "Holy Trinity" of DOM Manipulation:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>1. Select an Element:</strong> Get a reference to the DOM node you want to change.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>document.getElementById('id')</Code>: Gets one element by its ID.</li>
                  <li><Code>document.querySelector('css-selector')</Code>: Gets the *first* element matching a CSS selector (e.g., `.my-class`, `h1`). **This is the modern standard.**</li>
                  <li><Code>document.querySelectorAll('css-selector')</Code>: Gets *all* matching elements as a NodeList (similar to an array).</li>
                </ul>
              </li>
              <li><strong>2. Listen for an Event:</strong> Attach an **Event Listener** to the element to wait for a user action.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>element.addEventListener('event-name', functionToRun)</Code></li>
                  <li>Common events: <Code>'click'</Code>, <Code>'submit'</Code>, <Code>'mouseover'</Code>, <Code>'keydown'</Code>.</li>
                </ul>
              </li>
              <li><strong>3. Manipulate the Element:</strong> Inside the event listener's function, make your changes.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>element.textContent = "..."</Code>: Changes the text inside an element (safe).</li>
                  <li><Code>element.innerHTML = "..."</Code>: Changes the HTML inside an element (less safe).</li>
                  <li><Code>element.style.property = "..."</Code>: Changes CSS (e.g., `element.style.color = 'red'`).</li>
                  <li><Code>element.classList.add('class')</Code>: Adds/removes a CSS class (preferred way to change styles).</li>
                  <li><Code>element.setAttribute('attr', 'val')</Code>: Changes an HTML attribute (e.g., `img.setAttribute('src', 'new.png')`).</li>
                </ul>
              </li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: An Interactive Counter</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a complete, runnable HTML file that uses all three steps to create a simple counter.</p>
            <CodeBlock code={`
<!DOCTYPE html>
<html lang="en">
<head>
  <title>DOM Counter</title>
  <style>
    body { font-family: sans-serif; text-align: center; padding-top: 50px; color: #333; }
    #counter-display { font-size: 3rem; font-weight: bold; }
    button { font-size: 1.5rem; padding: 10px 20px; margin: 10px; cursor: pointer; }
  </style>
</head>
<body>

  <h1>Simple DOM Counter</h1>
  <p id="counter-display">0</p>
  <button id="increment-btn">+</button>
  <button id="decrement-btn">-</button>

  <script>
    // 1. SELECT the elements
    const display = document.querySelector('#counter-display');
    const incrementBtn = document.querySelector('#increment-btn');
    const decrementBtn = document.querySelector('#decrement-btn');

    // Keep track of the count in a variable
    let count = 0;

    // 2. LISTEN for 'click' events
    incrementBtn.addEventListener('click', () => {
      // 3. MANIPULATE the DOM
      count++;
      display.textContent = count;
    });

    decrementBtn.addEventListener('click', () => {
      // 3. MANIPULATE the DOM
      count--;
      display.textContent = count;
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
                <strong>What's the difference between `textContent` and `innerHTML`?</strong>
                <p className="pl-4"><Code>textContent</Code> sets only the raw text. It's safe and fast. <Code>innerHTML</Code> parses the string as HTML. Use `innerHTML` *only* if you trust the source and *need* to render HTML (e.g., `<strong>Warning!</strong>`). Using it with user-provided text can expose you to security risks (XSS attacks).</p>
              </li>
              <li>
                <strong>Why is it better to use `classList.add()` instead of `element.style`?</strong>
                <p className="pl-4">It's about **Separation of Concerns**. JavaScript should handle *logic* (what to change), and CSS should handle *style* (how it looks). Changing `.style` mixes JS and CSS. The better way: define a class in your CSS (e.g., `.is-active {'{'} color: blue; {'}'}`) and just use JS to *toggle* that class: `element.classList.toggle('is-active')`.</p>
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
    case 'es6-features':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.7: ES6+ Features (Modern JavaScript)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: A Language "Upgrade Pack"</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of JavaScript as a popular video game. **ES6** (ECMAScript 2015) was a massive "Version 2.0" upgrade pack. It didn't change the core game, but it added amazing new features, fixed old bugs, and gave players powerful new tools and shortcuts that are now standard. Using modern JS (ES6+) is like playing the upgraded game; going back to the old way feels clumsy and outdated.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>ES6+ refers to the modern features added to JavaScript since 2015. These features are essential for writing clean, efficient, and maintainable code, and they are the foundation for frameworks like React.</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`let` and `const`:</strong> Replaced `var`. They are **block-scoped** (live only in the <Code>{"{ ... }"}</Code> they're defined in), which prevents many common bugs.</li>
              <li><strong>Arrow Functions (`=&gt;`):</strong> A concise syntax for writing functions. (e.g., <Code>(a, b) {'=>'} a + b</Code>).</li>
              <li><strong>Template Literals (`` ` ``):</strong> Multi-line strings with embedded variables (e.g., `` `Hello, \${}!` ``).</li>
              <li><strong>Default Parameters:</strong> Give parameters a default value (e.g., `function greet(name = "Guest")`).</li>
              <li><strong>Destructuring (Object & Array):</strong> A shortcut to "unpack" values from data structures into variables (e.g., `const {'{'} name, age {'}'} = user;`).</li>
              <li><strong>Spread/Rest Operator (`...`):</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Spread:</strong> "Spreads" an array/object into a new one, perfect for making copies (e.g., `const newArr = [...oldArr, 5];`).</li>
                  <li><strong>Rest:</strong> Collects multiple function arguments into one array (e.g., `function sum(...nums)`).</li>
                </ul>
              </li>
              <li><strong>Modules (`import`/`export`):</strong> The standard, native way to split code into reusable files.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: ES6 Features in Action</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This code block shows a "before" (ES5) and "after" (ES6+) comparison.</p>
            <CodeBlock code={`
// --- "Before" (Old ES5 JavaScript) ---
var person = { name: "Alex", age: 30 };
function greet(name) {
  name = name || "Guest";
  return "Hello, " + name + "! You are " + person.age;
}
console.log(greet(person.name));


// --- "After" (Modern ES6+ JavaScript) ---
const person = { name: "Alex", age: 30 };

// 1. Arrow Function with 2. Default Parameters
const greet = (name = "Guest") => {
  // 3. Destructuring
  const { age } = person; 
  
  // 4. Template Literals
  return \`Hello, \${name}! You are \${age}\`;
};
console.log(greet(person.name));

// 5. Spread Operator (Copying)
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson.age); // 31
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What does "destructuring" really do for me?</strong>
                <p className="pl-4">It saves you from writing repetitive code. In React, it's how you use props: instead of writing `props.name`, `props.age`, `props.email` all the time, you just write `const {'{'} name, age, email {'}'} = props;` at the top of your component. It's cleaner and easier to read.</p>
              </li>
              <li>
                <strong>What is the difference between Spread (`...`) and Rest (`...`)?</strong>
                <p className="pl-4">They use the same syntax (`...`) but have opposite jobs. **Spread** *expands* an existing array or object into a new one (e.g., `[...arr]`). **Rest** *collects* multiple separate items into a new array (e.g., in a function `sum(...numbers)`).</p>
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
    case 'asynchronous-javascript':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.8: Asynchronous JavaScript (Promises, Async/Await)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Ordering at a Restaurant</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>JavaScript is <strong>synchronous</strong> (single-threaded) by default. Imagine a waiter who takes your order, goes to the kitchen, *waits* for it to be cooked, serves it, and *only then* takes the next table's order. The whole restaurant (your webpage) would freeze.</p>
            <p><strong>Asynchronous</strong> code is a better waiter. He takes your order, gives it to the kitchen, and *immediately* goes to the next table. When the food is ready, the kitchen gives him a <strong>Promise</strong> (a "pager"). When the pager buzzes, he picks up the food and serves it. Your code can continue running while the long task (cooking/data fetching) happens in the background.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Asynchronous (or "async") code is essential for tasks that take time, like fetching data from an API, reading a file, or setting a timer. It prevents these tasks from "blocking" the main thread and freezing the UI.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Callbacks (The Old Way):</strong> Functions passed as arguments to *other functions*, to be run *after* the main task is complete. This leads to "Callback Hell" (deep, unreadable nesting).</li>
              <li><strong>Promises (The Modern Way):</strong> An object that represents the *eventual* result of an async operation. A Promise is a placeholder for a future value. It can be in one of three states:
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Pending:</strong> The operation hasn't finished yet.</li>
                  <li><strong>Fulfilled:</strong> The operation completed successfully (the pager buzzed).</li>
                  <li><strong>Rejected:</strong> The operation failed (the kitchen dropped your food).</li>
                </ul>
              </li>
              <li><strong>Consuming Promises:</strong> You handle these states with <Code>.then()</Code> and <Code>.catch()</Code>.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>.then(data {'=>'} {'{ ... }'})</Code>: Runs when the promise is *fulfilled*.</li>
                  <li><Code>.catch(error {'=>'} {'{ ... }'})</Code>: Runs when the promise is *rejected*.</li>
                </ul>
              </li>
              <li><strong>`async/await` (The Best Way):</strong> ES2017 syntactic sugar that makes promise-based code look clean and synchronous.
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>`async` function:</strong> Declaring a function with `async` makes it automatically return a promise.</li>
                  <li><strong>`await`:</strong> Used *inside* an `async` function. It "pauses" the function's execution and waits for a promise to resolve before moving to the next line.</li>
                  <li><strong>Error Handling:</strong> You use a standard <Code>try...catch</Code> block to handle rejections.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: `fetch` with Async/Await</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the standard, modern way to fetch data from an API. Notice how clean it is compared to `.then().catch()` chains. (Run this in a browser console).</p>
            <CodeBlock code={`
// 1. Define an 'async' function
const fetchUserData = async () => {
  // 2. Use a 'try...catch' block for error handling
  try {
    // 3. 'await' pauses the function until fetch() resolves
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // This code won't run until 'response' is back
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    // 4. 'await' pauses again until .json() resolves
    const user = await response.json();
    
    // This code won't run until 'user' is parsed
    console.log(user.name); // "Leanne Graham"

  } catch (error) {
    // This block runs if 'fetch' fails or 'response.ok' is false
    console.error("Could not fetch user:", error);
  }
};

// 5. Call the async function to start it
fetchUserData();
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is "Callback Hell"?</strong>
                <p className="pl-4">It's a common problem with the old callback pattern. When you have multiple async tasks that depend on each other, you end up nesting callbacks inside callbacks, creating a "pyramid of doom" that is extremely difficult to read and debug. Promises and `async/await` were invented to solve this.</p>
              </li>
              <li>
                <strong>What's the difference between `async/await` and `.then()`?</strong>
                <p className="pl-4">They are two ways of doing the same thing: handling promises. <Code>async/await</Code> is just "syntactic sugar" for `.then()`. It lets you write code that *looks* synchronous (top-to-bottom), which is much easier to read and reason about. You should prefer `async/await` in all modern code.</p>
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
    case 'error-handling-debugging':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.9: Error Handling & Debugging</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Code Detective</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Bugs are a normal part of coding. **Debugging** is the process of being a detective: you find clues (error messages), follow the evidence (trace the code), and find the culprit (the bug). **Error Handling** is being proactive: it's the safety net (<Code>try...catch</Code>) you put in place *before* a bug happens to prevent your whole app from crashing.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Debugging is a systematic process, not guesswork. Error handling is a structural part of your code.</p>
            <p><strong>Debugging Tools & Techniques:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Read the Error Message:</strong> This is the #1 clue. The error tells you *what* went wrong (e.g., `TypeError`) and *where* it went wrong (the line number).</li>
              <li><strong>`console.log()`:</strong> The simplest debugging tool. Use it to print the values of variables at different points in your code to see where your logic fails.</li>
              <li><strong>Browser Debugger:</strong> A powerful tool in your browser's DevTools ("Sources" tab). You can set a **breakpoint** to *pause* your code on a specific line. This lets you inspect all variable values at that exact moment and "step through" your code line-by-line.</li>
            </ul>
            <p><strong>Error Handling (Synchronous):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`try...catch` Block:</strong> The standard way to handle code that *might* fail.
                <ul className="list-disc ml-6 mt-2">
                  <li><Code>try {'{ ... }'}</Code>: You put your "risky" code inside this block.</li>
                  <li><Code>catch (error) {'{ ... }'}</Code>: This block *only* runs if the `try` block throws an error. The `error` object contains the error message.</li>
                </ul>
              </li>
              <li><strong>`throw`:</strong> Lets you create your *own* errors (e.g., `throw new Error("Invalid input!")`).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: `try...catch` and Debugging</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example shows how to use `console.log` to find a logical bug and `try...catch` to handle a runtime error.</p>
            <CodeBlock code={`
// --- Debugging with console.log ---
const calculateTotal = (items: any[]) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    // Bug: We are adding the index, not the item price!
    // total += i; 
    
    // Fix:
    total += items[i].price;
    console.log(\`Running total: \${total}\`); // Our clue!
  }
  return total;
};
calculateTotal([{ price: 10 }, { price: 20 }]);


// --- Error Handling with try...catch ---
const getUserName = (user: any) => {
  try {
    // This is risky code. 'user' might be null.
    const name = user.profile.name;
    console.log(name);
  } catch (error) {
    // This block runs if 'user' is null or undefined
    console.error("Could not get user name:", (error as Error).message);
    // (error as Error).message would be "Cannot read properties of null (reading 'profile')"
  }
};

getUserName(null); // This will not crash the app. It will log an error.
            `} language="javascript" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>My code isn't crashing, but it's not working. What's the first thing I should do?</strong>
                <p className="pl-4">This is a **logical error**. The first step is to use `console.log()` at key points. Find the function that's failing and log the *inputs* it receives and the *output* it returns. You will almost always find that either the data coming in is not what you expected, or the data going out is wrong. This isolates the problem.</p>
              </li>
              <li>
                <strong>What's the difference between `try...catch` and `.catch()` on a promise?</strong>
                <p className="pl-4">They solve the same problem for different syntaxes. You use <Code>.catch()</Code> when you are using the `.then()` syntax for promises. You use <Code>try...catch</Code> when you are using the `async/await` syntax. `try...catch` is also used for regular, non-async (synchronous) code that might throw an error.</p>
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
    case 'js-miniproject':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">4.10: Js-MiniProject (Stone, Paper, Scissor)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Project Blueprint</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This project is our "final exam" for basic JavaScript. We will act as a full developer:
            <br/>1. Be the **Architect** (plan the logic).
            <br/>2. Be the **Builder** (write the HTML structure).
            <br/>3. Be the **Puppet Master** (use JS to connect the logic to the HTML).
            <br/>The goal is to combine DOM Manipulation and JS logic into a complete, interactive application.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This project will be built by following the "Holy Trinity" of DOM Manipulation for *each* interactive element (the three buttons).</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>State Management:</strong> We will use simple variables (e.g., `let userScore = 0`) to hold the "state" of our application.</li>
              <li><strong>DOM Selection:</strong> We will use <Code>document.querySelector</Code> to get references to our buttons and display areas at the *start* of our script.</li>
              <li><strong>Event Listening:</strong> We will attach a <Code>'click'</Code> event listener to each button.</li>
              <li><strong>Core Logic:</strong> The listeners will call a main `playRound` function. This function will:
                <ul className="list-disc ml-6 mt-2">
                  <li>Get the user's choice from the button that was clicked.</li>
                  <li>Call a separate `getComputerChoice()` function that uses `Math.random()` to pick a random choice.</li>
                  <li>Compare the two choices to determine a winner.</li>
                  <li>Update the state variables (`userScore` or `computerScore`).</li>
                </ul>
              </li>
              <li><strong>DOM Manipulation:</strong> After the logic is run, we will update the <Code>.textContent</Code> of our score and result displays to show the user what happened.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Complete Game Code</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a complete, runnable HTML file. Save it as <Code>game.html</Code> and open it in your browser. Read the comments in the <Code>&lt;script&gt;</Code> tag to see the workflow in action.</p>
            <CodeBlock code={`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Stone Paper Scissors</title>
  <style>
    body { font-family: sans-serif; text-align: center; padding-top: 30px; color: #333; }
    .scoreboard { display: flex; justify-content: center; gap: 40px; }
    .score { padding: 10px 20px; border: 1px solid #ccc; border-radius: 8px; }
    .choices { margin-top: 30px; }
    .choice-btn { font-size: 1.5rem; padding: 10px 20px; margin: 0 10px; cursor: pointer; }
    #result-message { margin-top: 20px; font-size: 1.2rem; font-weight: bold; min-height: 1.5rem; }
  </style>
</head>
<body>

  <h1>Stone, Paper, Scissors</h1>

  <div class="scoreboard">
    <div class="score">
      <h2>User Score</h2>
      <p id="user-score">0</p>
    </div>
    <div class="score">
      <h2>Computer Score</h2>
      <p id="computer-score">0</p>
    </div>
  </div>

  <div class="choices">
    <button class="choice-btn" id="stone">Stone</button>
    <button class="choice-btn" id="paper">Paper</button>
    <button class="choice-btn" id="scissors">Scissors</button>
  </div>
  
  <p id="result-message">Make your move!</p>

  <script>
    // --- 1. STATE ---
    let userScore = 0;
    let computerScore = 0;
    const choices = ['stone', 'paper', 'scissors'];

    // --- 2. SELECT DOM ELEMENTS ---
    const userScoreDisplay = document.querySelector('#user-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    const resultDisplay = document.querySelector('#result-message');
    
    // Select all buttons at once
    const choiceButtons = document.querySelectorAll('.choice-btn');

    // --- 3. ATTACH EVENT LISTENERS ---
    choiceButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // 'e.target.id' will be 'stone', 'paper', or 'scissors'
        playRound(e.target.id);
      });
    });

    // --- 4. CORE LOGIC ---
    function playRound(userChoice) {
      const computerChoice = getComputerChoice();
      let resultMessage = \`You chose \${userChoice}, computer chose \${computerChoice}. \`;
      
      if (userChoice === computerChoice) {
        // Draw
        resultMessage += "It's a draw!";
      } else if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        // User wins
        userScore++;
        resultMessage += 'You win!';
      } else {
        // Computer wins
        computerScore++;
        resultMessage += 'You lose!';
      }
      
      // --- 5. MANIPULATE DOM (Update UI) ---
      userScoreDisplay.textContent = userScore;
      computerScoreDisplay.textContent = computerScore;
      resultDisplay.textContent = resultMessage;
    }

    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }
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
                <strong>Why did we select the elements *outside* the event listener?</strong>
                <p className="pl-4">For performance. Selecting a DOM element (`querySelector`) is an operation that takes time. By selecting them all *once* when the script loads and storing them in variables, our `playRound` function can access them instantly without having to re-select them every single time the user clicks a button.</p>
              </li>
              <li>
                <strong>This is a lot of DOM manipulation. Is this how React works?</strong>
                <p className="pl-4">No, and this project perfectly shows *why* React was invented. In "Vanilla JS," you have to *manually* write the code to update the DOM (e.g., `userScoreDisplay.textContent = userScore`). In React, you just update the *state* (`setUserScore(userScore + 1)`), and React *automatically* handles all the DOM manipulation for you. This is called **declarative** programming and is much easier to manage.</p>
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
    case 'mini-project-preview':
      return (
        <MiniProjectPreview />
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

export default Chapter4;