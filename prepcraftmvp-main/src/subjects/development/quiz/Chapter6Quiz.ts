export const Chapter6Quiz = {
  "introduction-to-react": [
    {
      question: "In the 'High-Speed Blueprint' analogy, what is the Virtual DOM (VDOM)?",
      options: [
        "The heavy, physical blueprint (the Real DOM)",
        "The lightweight, digital copy of the blueprint",
        "The 'patch' applied to the blueprint",
        "The 'diffing' algorithm itself"
      ],
      answer: "The lightweight, digital copy of the blueprint",
      explanation: "The notes state: 'The Virtual DOM (VDOM) is a lightweight, digital copy of that blueprint on a computer.' This allows React to make fast comparisons in memory."
    },
    {
      question: "What is 'Reconciliation' in React?",
      options: [
        "The process of creating a new component",
        "The name of the 'diffing' algorithm",
        "The entire process of creating a new VDOM, 'diffing' it, and 'patching' the real DOM",
        "The process of installing React in your project"
      ],
      answer: "The entire process of creating a new VDOM, 'diffing' it, and 'patching' the real DOM",
      explanation: "The notes define 'Reconciliation' as the *entire process*, which includes: 1. State Change, 2. New VDOM, 3. Diffing, 4. Patching, and 5. Batch Update."
    },
    {
      question: "Is React a 'framework' or a 'library'?",
      options: [
        "A framework, because it's a complete solution",
        "A library, because it only handles the view layer",
        "Both, they mean the same thing",
        "Neither, it's a language"
      ],
      answer: "A library, because it only handles the view layer",
      explanation: "The Q&A section states: 'React is a library... A library (like React) is a specialized tool that you use to handle *one part* of your app (in this case, the view layer).'"
    },
    {
      question: "Why is the Virtual DOM faster than directly manipulating the real DOM?",
      options: [
        "Because the VDOM is written in HTML",
        "Because manipulating JavaScript objects (VDOM) is fast, while manipulating the real DOM is slow",
        "Because the VDOM bypasses the browser's security",
        "Because the VDOM can only be updated once per second"
      ],
      answer: "Because manipulating JavaScript objects (VDOM) is fast, while manipulating the real DOM is slow",
      explanation: "The Q&A explains: 'It's faster because manipulating JavaScript objects in memory is extremely fast, while manipulating the *real* DOM is very slow (it causes browser reflow and repaint).'"
    },
    {
      question: "What is the 'diffing' algorithm?",
      options: [
        "The process of applying changes to the real DOM",
        "The algorithm React uses to compare the new VDOM tree with the previous VDOM snapshot",
        "The process of converting JSX to JavaScript",
        "The algorithm for creating a new component"
      ],
      answer: "The algorithm React uses to compare the new VDOM tree with the previous VDOM snapshot",
      explanation: "Step 3 of 'Reconciliation' is 'Diffing': 'React compares this new VDOM tree with the previous VDOM \"snapshot\". This comparison is done using a fast diffing algorithm.'"
    },
    {
      question: "What is the final step of 'Reconciliation' after 'Patching'?",
      options: [
        "Batch Update",
        "State Change",
        "Diffing",
        "Creating a new VDOM"
      ],
      answer: "Batch Update",
      explanation: "The notes list the 5 steps, with the final one being: '5. Batch Update: React updates the real DOM with *only those changes*, in a single \"batch\" operation.'"
    }
  ],
  "create-react-app": [
    {
      question: "In the 'Project Wizard' analogy, what is 'Create React App' (CRA)?",
      options: [
        "The 'wizard' tool that bundles and configures your project for you",
        "The code editor you use, like VS Code",
        "The final 'build' folder",
        "The React library itself"
      ],
      answer: "The 'wizard' tool that bundles and configures your project for you",
      explanation: "The analogy states: 'Create React App (CRA) is a \"wizard\" tool. You run one command, and it does *all* of that setup for you...'"
    },
    {
      question: "What is the role of `public/index.html` in a CRA project?",
      options: [
        "It is the main React component",
        "It is the JavaScript entry point",
        "It is the *one and only* HTML file; your React app is injected into it",
        "It's where you list your dependencies"
      ],
      answer: "It is the *one and only* HTML file; your React app is injected into it",
      explanation: "The notes define `public/index.html` as: 'The **one and only HTML file** for your app. Your entire React app is injected into the `<div>` inside this file.'"
    },
    {
      question: "What is the role of `src/index.tsx`?",
      options: [
        "It is the main HTML page",
        "It is the main root component of your application",
        "It is the JavaScript entry point that renders the `<App />` component into the DOM",
        "It is the configuration file for Webpack"
      ],
      answer: "It is the JavaScript entry point that renders the `<App />` component into the DOM",
      explanation: "The notes state: '`src/index.tsx`: The **JavaScript entry point**. This file finds the `root` div and tells React to render your `<App />` component inside it.'"
    },
    {
      question: "What command do you run to start the development server for a CRA project?",
      options: [
        "npm run build",
        "npm start",
        "npm init react",
        "npx create-react-app"
      ],
      answer: "npm start",
      explanation: "The example commands show that `npm start` is used to 'Start the development server' and open the app at http://localhost:3000."
    },
    {
      question: "What is a popular, faster alternative to Create React App (CRA) mentioned in the Q&A?",
      options: [
        "Webpack",
        "Babel",
        "Vite",
        "Angular"
      ],
      answer: "Vite",
      explanation: "The Q&A section states: 'a newer tool called **Vite**... is now extremely popular because it is *much* faster. It uses native ES modules to serve code instantly...'"
    },
    {
      question: "What is the purpose of the `package.json` file?",
      options: [
        "It is the main HTML file",
        "It contains all the third-party library code",
        "It's the 'manifest' that lists dependencies and runnable scripts (like `npm start`)",
        "It's the JavaScript entry point"
      ],
      answer: "It's the 'manifest' that lists dependencies and runnable scripts (like `npm start`)",
      explanation: "The notes define `package.json` as: 'The \"manifest\" file. It lists all your dependencies... and defines your scripts...'"
    }
  ],
  "jsx-syntax": [
    {
      question: "What is JSX (JavaScript XML)?",
      options: [
        "A new version of HTML",
        "A JavaScript library for animation",
        "A syntax extension for JavaScript that looks like HTML",
        "A CSS preprocessor"
      ],
      answer: "A syntax extension for JavaScript that looks like HTML",
      explanation: "The analogy defines JSX as: 'a \"recipe\" for your UI that looks like the finished \"cake\" (HTML). You write what *looks* like HTML, but you're actually writing in JavaScript.'"
    },
    {
      question: "Which of these is a *critical* rule for JSX components?",
      options: [
        "They must be wrapped in a `<jsx>` tag.",
        "They must return a single root element (or a Fragment `<>...</>`).",
        "They must not use any JavaScript.",
        "They must use `class` instead of `className`."
      ],
      answer: "They must return a single root element (or a Fragment `<>...</>`).",
      explanation: "Rule #1 in the notes is: 'A component must return *one* top-level element. If you have multiple, wrap them in a `<div>` or... a Fragment (`<>...</>`).'"
    },
    {
      question: "Why must you use `className` instead of `class` in JSX?",
      options: [
        "It's shorter to type.",
        "Because `class` is a reserved keyword in JavaScript (for creating classes).",
        "Because `className` is newer and faster.",
        "They are interchangeable."
      ],
      answer: "Because `class` is a reserved keyword in JavaScript (for creating classes).",
      explanation: "The Q&A section explains: 'In JavaScript, `class` is a reserved keyword... To avoid a syntax conflict, React chose `className`...'"
    },
    {
      question: "How do you embed a JavaScript variable (e.g., `userName`) inside JSX?",
      options: [
        "By using `(( userName ))`",
        "By using `{ userName }`",
        "By using `[ userName ]`",
        "By using `$userName`"
      ],
      answer: "By using `{ userName }`",
      explanation: "Rule #3 is: 'You can embed any JavaScript *expression* inside curly braces. This includes variables...'"
    },
    {
      question: "How do you correctly write a `click` event handler in JSX?",
      options: [
        "onclick=\"myFunc()\"",
        "on-click={myFunc}",
        "onClick={myFunc}",
        "click={myFunc}"
      ],
      answer: "onClick={myFunc}",
      explanation: "The notes list two rules: 1) Attributes are `camelCase` (so `onclick` becomes `onClick`), and 2) You pass a function reference `{myFunc}`."
    },
    {
      question: "Why can't you put a full `if/else` statement inside JSX curly braces?",
      options: [
        "You can, this is the correct way.",
        "Because `if/else` is a *statement*, not an *expression*, and JSX only accepts expressions.",
        "Because `if/else` is too slow for React.",
        "Because you must use a `for` loop instead."
      ],
      answer: "Because `if/else` is a *statement*, not an *expression*, and JSX only accepts expressions.",
      explanation: "Rule #4 states: 'You *cannot* put JavaScript *statements* (like `if/else`, `for`, `switch`) inside JSX braces.' The Q&A clarifies you must use a ternary operator instead."
    }
  ],
  "props-communication": [
    {
      question: "What is the direction of data flow for 'props' in React?",
      options: [
        "Child-to-Parent (Data Up)",
        "Parent-to-Child (Data Down)",
        "Two-way (Parent-to-Child and Child-to-Parent)",
        "Sibling-to-Sibling"
      ],
      answer: "Parent-to-Child (Data Down)",
      explanation: "The notes define this as 'one-way data flow': 'Props... are the *only* way to pass data from a parent component *down* to a child component.'"
    },
    {
      question: "In the 'Passing the Mic' analogy, what is a 'callback' function?",
      options: [
        "The microphone (data) passed from the parent",
        "The 'Talkback' button (a function) passed from the parent for the child to call",
        "The child component (the 'Singer')",
        "The parent component (the 'Sound Booth')"
      ],
      answer: "The 'Talkback' button (a function) passed from the parent for the child to call",
      explanation: "The analogy describes a callback as: 'The Booth *also* passes them a \"Talkback\" button (a function prop). The Singer can *call* this function... to send a message back up.'"
    },
    {
      question: "What is the *most common* React interview question, according to the Q&A?",
      options: [
        "What is JSX?",
        "What is the Virtual DOM?",
        "What is the difference between Props and State?",
        "What is React Router?"
      ],
      answer: "What is the difference between Props and State?",
      explanation: "The Q&A section explicitly states: 'This is the most common React interview question.' It then defines Props (from parent, read-only) and State (internal, read-write)."
    },
    {
      question: "How does a child component send data to a parent component?",
      options: [
        "It modifies its own props.",
        "It 'lifts state up' by calling a function that was passed *down* from the parent as a prop.",
        "It uses the `useNavigate` hook.",
        "It's impossible for a child to send data to a parent."
      ],
      answer: "It 'lifts state up' by calling a function that was passed *down* from the parent as a prop.",
      explanation: "The Q&A explains this: 'The parent component defines a *function*... and passes that *function* as a *prop* down to the child... The child component then *calls* that prop-function...'"
    },
    {
      question: "A child component receives props from its parent. Can the child component change its own props?",
      options: [
        "Yes, by using `props.name = \"new name\"`",
        "Yes, but only if it's a `string`",
        "No, props are 'read-only' (immutable)",
        "No, it must use `useState` to change props"
      ],
      answer: "No, props are 'read-only' (immutable)",
      explanation: "A core rule of React is stated in the notes: 'Props are Read-Only: A component can **never** change its own props. This is a core rule of React.'"
    },
    {
      question: "How does a child component receive its props?",
      options: [
        "As a series of separate variables",
        "As a single object as its first function argument",
        "Through the `useContext` hook",
        "Through the `window.props` object"
      ],
      answer: "As a single object as its first function argument",
      explanation: "The notes state: 'The child component receives all props as a *single object* as its first argument. ... `function Welcome(props: ...)`'"
    }
  ],
  "state-management": [
    {
      question: "In the 'Component's Whiteboard' analogy, what happens when a component writes to its 'whiteboard' (calls `setState`)?",
      options: [
        "Nothing, it just stores the data.",
        "It 'rings a bell' that tells React to re-render the component.",
        "It sends the data to the parent component.",
        "It permanently saves the data in the browser."
      ],
      answer: "It 'rings a bell' that tells React to re-render the component.",
      explanation: "The analogy states: 'Every time it writes a new value, it \"rings a bell\" that tells React, \"Hey, I've changed! You need to re-render (redraw) me and my children!\"'"
    },
    {
      question: "What is the correct syntax for the `useState` hook?",
      options: [
        "const [value, setValue] = useState(initialValue);",
        "const [value, initialValue] = useState(setValue);",
        "const value = useState(initialValue);",
        "const [value, setValue] = new State(initialValue);"
      ],
      answer: "const [value, setValue] = useState(initialValue);",
      explanation: "The notes explicitly show the syntax: '`const [value, setValue] = useState(initialValue);`'"
    },
    {
      question: "What is wrong with this code: `myArray.push(newItem); setMyArray(myArray);`?",
      options: [
        "Nothing, this is the correct way to update an array.",
        "It's a 'mutation'. React won't detect the change and will not re-render.",
        "You should use `myArray.add(newItem)` instead.",
        "It will cause an infinite loop."
      ],
      answer: "It's a 'mutation'. React won't detect the change and will not re-render.",
      explanation: "The notes list this under 'Rules of Updating State': 'Wrong: `myArray.push(newItem);` (This is a mutation. React won't detect it).' The correct way is `setMyArray([...myArray, newItem]);`"
    },
    {
      question: "Why is `setCount(prevCount => prevCount + 1)` safer than `setCount(count + 1)`?",
      options: [
        "It's shorter to type.",
        "It avoids 'stale state' bugs when updates are batched.",
        "It's the only way to decrement a value.",
        "It's not safer, `setCount(count + 1)` is preferred."
      ],
      answer: "It avoids 'stale state' bugs when updates are batched.",
      explanation: "The Q&A explains: 'If you call `setCount(count + 1)` three times in a row, it might only increment once... If you call `setCount(prev => prev + 1)`... it will correctly increment three times.'"
    },
    {
      question: "What is the key difference between Props and State?",
      options: [
        "Props are internal, State is from the parent",
        "Props are from the parent (read-only), State is internal (read-write)",
        "Props cause re-renders, State does not",
        "Props are for numbers, State is for objects"
      ],
      answer: "Props are from the parent (read-only), State is internal (read-write)",
      explanation: "This is a core concept repeated in the Q&A: 'Props are... passed *down* from a parent and are **read-only**... State is a component's *internal* \"memory\"... It is **read-write**...'"
    },
    {
      question: "What is the 'initialValue' in `useState(initialValue)` used for?",
      options: [
        "It's the value the state will have on the *first* render.",
        "It's the maximum value the state can have.",
        "It's the function used to update the state.",
        "It's the name of the state variable."
      ],
      answer: "It's the value the state will have on the *first* render.",
      explanation: "The notes define `initialValue`: 'The value the state will have on the *first* render.'"
    }
  ],
  "event-handling": [
    {
      question: "What is wrong with this code: `<button onClick={alert('Hi!')}>`?",
      options: [
        "The syntax should be `on-click`",
        "It will cause an infinite loop",
        "This code *calls* the function during render, instead of *passing* the function",
        "Nothing, this is the correct way"
      ],
      answer: "This code *calls* the function during render, instead of *passing* the function",
      explanation: "The 'Doorbell' analogy explains this: 'This rings the doorbell *while you are installing it*.' The correct way is `onClick={() => alert('Hi!')}`."
    },
    {
      question: "Why should you use `onSubmit` on the `<form>` tag instead of `onClick` on the `<button>`?",
      options: [
        "`onClick` is slower",
        "`onSubmit` handles both button clicks AND pressing the 'Enter' key",
        "`onSubmit` automatically validates the form",
        "You should always use `onClick` on the button"
      ],
      answer: "`onSubmit` handles both button clicks AND pressing the 'Enter' key",
      explanation: "The Q&A explains: '`onSubmit` on the `<form>`... handles *both* clicking the submit button *and* pressing the \"Enter\" key... An `onClick` on the button would *only* handle the click...'"
    },
    {
      question: "What does `e.preventDefault()` do in a form's `onSubmit` handler?",
      options: [
        "It validates the form",
        "It submits the form to the server",
        "It clears all the input fields",
        "It prevents the browser from doing a full-page reload"
      ],
      answer: "It prevents the browser from doing a full-page reload",
      explanation: "The notes state this is 'CRITICAL': 'You *must* call this in an `onSubmit` handler to prevent the browser from doing a full-page refresh.'"
    },
    {
      question: "How do you get the current text from an `<input>` field during an `onChange` event?",
      options: [
        "By reading `e.value`",
        "By reading `e.target.text`",
        "By reading `e.target.value`",
        "By reading `e.textContent`"
      ],
      answer: "By reading `e.target.value`",
      explanation: "The notes specify `e.target.value` as 'How you get the current value from an input field in an `onChange` handler.'"
    },
    {
      question: "What is the correct way to pass an `id` to an event handler in a loop?",
      options: [
        "onClick={handleDelete(item.id)}",
        "onClick={handleDelete, item.id}",
        "onClick={() => handleDelete(item.id)}",
        "onClick={handleDelete item.id}"
      ],
      answer: "onClick={() => handleDelete(item.id)}",
      explanation: "The notes explicitly warn that `onClick={handleDelete(item.id)}` is wrong. The 'Right' way is to 'Passes a new function': `<button onClick={() => myFunc(id)}>`."
    },
    {
      question: "How does the React event `onClick` differ from the HTML `onclick`?",
      options: [
        "There is no difference",
        "React events are camelCase (`onClick`)",
        "React events are all caps (`ONCLICK`)",
        "React events are passed as strings"
      ],
      answer: "React events are camelCase (`onClick`)",
      explanation: "The notes state: 'React events are named using `camelCase`. HTML `onclick` becomes React `onClick`.'"
    }
  ],
  "conditional-rendering": [
    {
      question: "What is the 'Logical AND (&&)' operator commonly used for in conditional rendering?",
      options: [
        "For `if/else` logic (show A or B)",
        "For `if` logic (show A or show nothing)",
        "For rendering lists",
        "For handling errors"
      ],
      answer: "For `if` logic (show A or show nothing)",
      explanation: "The notes state: 'Best for `if` logic (with no else). ... `{unreadMessages > 0 && <Notification />}`'. If the condition is false, it renders nothing."
    },
    {
      question: "What is the *mandatory* prop you must provide when rendering a list with `.map()`?",
      options: [
        "A `key` prop that is stable and unique",
        "An `id` prop",
        "A `className` prop",
        "An `index` prop"
      ],
      answer: "A `key` prop that is stable and unique",
      explanation: "The notes state this is a 'critical, mandatory rule.' 'When rendering a list, you must provide a `key` prop to the root element inside the map... [it] must be a string or number that is stable and unique...'"
    },
    {
      question: "Why is using an array `index` as a `key` a bad practice (an anti-pattern)?",
      options: [
        "It's not, it's the best practice.",
        "It's slow.",
        "It can cause major bugs with state and UI if the list is re-ordered, filtered, or changed.",
        "It only works for strings."
      ],
      answer: "It can cause major bugs with state and UI if the list is re-ordered, filtered, or changed.",
      explanation: "The Q&A explains that if you delete item 'A', React (using indexes) will think you just *mutated* 'A' into 'B', which 'will break any state inside the `li` components.'"
    },
    {
      question: "What is the best way to render an `if/else` condition in JSX (e.g., show `<Dashboard />` or `<LoginForm />`)?",
      options: [
        "The Ternary Operator: `{isLoggedIn ? <Dashboard /> : <LoginForm />}`",
        "The `&&` Operator: `{isLoggedIn && <Dashboard />}`",
        "An `if/else` statement inside the JSX",
        "Using `useEffect`"
      ],
      answer: "The Ternary Operator: `{isLoggedIn ? <Dashboard /> : <LoginForm />}`",
      explanation: "The notes state the Ternary Operator is 'Best for `if/else` logic' and provides this exact example."
    },
    {
      question: "How do you render *nothing* from a React component?",
      options: [
        "Return an empty string `\"\"`",
        "Return an empty Fragment `<></>`",
        "Return `null`",
        "Return `undefined`"
      ],
      answer: "Return `null`",
      explanation: "The Q&A section states: 'Returning `null` from a component will render nothing. This is a common pattern for hiding components.'"
    },
    {
      question: "How do you render a list of items from an array called `users`?",
      options: [
        "`<for (user in users)> ... </for>`",
        "`{users.forEach(user => <li>...</li>)}`",
        "`{users.map(user => <li key={user.id}>...</li>)}`",
        "`<list items={users} />`"
      ],
      answer: "You must use the JavaScript `.map()` method... to transform an array of data into an array of JSX elements.' It also requires the `key` prop."
    }
  ],
  "react-hooks": [
    {
      question: "In the 'Utility Belt' analogy, what 'power' does `useEffect` give your component?",
      options: [
        "'Memory' (state)",
        "'Super-Hearing' (to listen for side effects like API calls)",
        "'Telepathy' (to read global context)",
        "'Grappling Hook' (to access DOM elements)"
      ],
      answer: "'Super-Hearing' (to listen for side effects like API calls)",
      explanation: "The analogy states: '`useEffect`: Gives your component \"Super-Hearing\" to listen for things *outside* of itself (like an API call finishing...)'"
    },
    {
      question: "What is the 'dependency array' `[]` in `useEffect(() => {...}, [])` used for?",
      options: [
        "It makes the effect run on *every* render.",
        "It makes the effect run *once* when the component mounts.",
        "It lists the props the effect can access.",
        "It's where you define the cleanup function."
      ],
      answer: "It makes the effect run *once* when the component mounts.",
      explanation: "The notes define the empty array `[]` as: 'Runs once when the component \"mounts\". Perfect for initial data fetching.'"
    },
    {
      question: "What is a 'side effect' in React?",
      options: [
        "A bug in your component",
        "Any code that affects something *outside* the component, like an API call or `localStorage`",
        "A component that re-renders too many times",
        "A prop that is passed down from a parent"
      ],
      answer: "Any code that affects something *outside* the component, like an API call or `localStorage`",
      explanation: "The Q&A section defines a side effect as: 'any code that affects something *outside* of the component itself. This includes: fetching data from an API, setting a `setInterval`... or reading/writing to `localStorage`.'"
    },
    {
      question: "What is the main difference between `useRef` and `useState`?",
      options: [
        "They are the same.",
        "Updating `useState` causes a re-render; updating `useRef` does *not*.",
        "Updating `useRef` causes a re-render; updating `useState` does *not*.",
        "`useRef` is for numbers; `useState` is for strings."
      ],
      answer: "Updating `useState` causes a re-render; updating `useRef` does *not*.",
      explanation: "The Q&A states: 'Updating **state**... **causes the component to re-render**. Updating a **ref**... **does not** cause a re-render.'"
    },
    {
      question: "How do you prevent a 'memory leak' from a `setInterval` created in a `useEffect`?",
      options: [
        "You don't need to, React does it automatically.",
        "By returning a 'cleanup function' from `useEffect` that calls `clearInterval`.",
        "By using `useState` instead of `setInterval`.",
        "By adding the interval ID to the dependency array."
      ],
      answer: "By returning a 'cleanup function' from `useEffect` that calls `clearInterval`.",
      explanation: "The notes and Q&A both explain that you must 'return' a cleanup function from your effect (e.g., `return () => { clearInterval(intervalId); }`) to prevent memory leaks on unmount."
    },
    {
      question: "What is one of the *Rules of Hooks*?",
      options: [
        "Only call Hooks from inside `if` statements.",
        "Only call Hooks at the top level of a function component.",
        "Only call Hooks from class components.",
        "Call Hooks after the `return` statement."
      ],
      answer: "Only call Hooks at the top level of a function component.",
      explanation: "The notes list two 'CRITICAL' rules, the first of which is: 'Only call Hooks at the top level. Do *not* call them inside loops, conditions, or nested functions.'"
    }
  ],
  "react-router": [
    {
      question: "In the 'Fake Hallway' analogy, what is `React Router`?",
      options: [
        "The 'village' of separate houses (traditional website)",
        "The 'mansion' (the SPA)",
        "The 'internal hallway system' that fakes URL changes",
        "The 'front door' (the browser)"
      ],
      answer: "The 'internal hallway system' that fakes URL changes",
      explanation: "The analogy states: 'React Router is the *internal hallway system*. When you click a `<Link>`, you don't go outside. The router just leads you to a different *room*... and *fakes* the URL...'"
    },
    {
      question: "Why must you use `<Link to=\"...\">` instead of `<a href=\"...\">` for navigation?",
      options: [
        "They are the same, but `<Link>` is shorter.",
        "`<a>` causes a full page reload, destroying React's state; `<Link>` handles it on the client-side.",
        "`<a>` does not work in React.",
        "`<Link>` can accept props, but `<a>` cannot."
      ],
      answer: "`<a>` causes a full page reload, destroying React's state; `<Link>` handles it on the client-side.",
      explanation: "The Q&A section explains this: 'An `<a href...>` tag causes a **full page reload**... `Link`... prevents the page reload... This tells React Router to swap components, all on the client-side.'"
    },
    {
      question: "Which component must be wrapped around your *entire app* to enable routing?",
      options: [
        "<Routes>",
        "<Route>",
        "<BrowserRouter>",
        "<Link>"
      ],
      answer: "<BrowserRouter>",
      explanation: "The notes state: '`<BrowserRouter>`: The parent component that \"enables\" routing. You must wrap your *entire* app (usually in `index.tsx`) with it.'"
    },
    {
      question: "How do you get a dynamic URL parameter (e.g., the '123' from `/user/123`) inside a component?",
      options: [
        "Using the `useNavigate()` hook",
        "Using the `useParams()` hook",
        "By reading `props.id`",
        "By reading `window.location.id`"
      ],
      answer: "Using the `useParams()` hook",
      explanation: "The notes define `useParams()` as the hook 'Used to extract dynamic parameters from the URL (e.g., from a path like `/user/:id`).'"
    },
    {
      question: "How do you programmatically navigate (e.g., after a form submission)?",
      options: [
        "By calling `window.location.href = '/dashboard'`",
        "By using the `useNavigate()` hook",
        "By rendering a `<Redirect />` component",
        "By using the `<Link />` component"
      ],
      answer: "By using the `useNavigate()` hook",
      explanation: "The Q&A section states: 'You use the `useNavigate` hook. 1. `const navigate = useNavigate();` 2. `Maps('/dashboard');`'"
    },
    {
      question: "In the example, what is the purpose of `<Route path=\"*\" element={<NotFound />} />`?",
      options: [
        "It's the home page",
        "It's a 'catch-all' route for 404s that must be placed last",
        "It's a dynamic route for all users",
        "It's a comment and does nothing"
      ],
      answer: "It's a 'catch-all' route for 404s that must be placed last",
      explanation: "The example code's comment #9 says: 'A \"catch-all\" route for 404s. Must be last.'"
    }
  ],
  "forms-validation": [
    {
      question: "What is a 'Controlled Component' in React forms?",
      options: [
        "A form that submits when you press 'Enter'",
        "An input whose value is 'controlled' by React state (the 'single source of truth')",
        "An input that uses `useRef` to get the value",
        "A form that has built-in validation"
      ],
      answer: "An input whose value is 'controlled' by React state (the 'single source of truth')",
      explanation: "The notes define this as: 'The form input's value is \"controlled\" by React state.' The analogy says: 'The React **state** is the \"single source of truth,\" not the DOM.'"
    },
    {
      question: "What is the 'Two-Way Data Binding' for a controlled input?",
      options: [
        "`value={state}` and `onClick={setState}`",
        "`value={state}` and `onChange={setState}`",
        "`prop={state}` and `onBlur={setState}`",
        "`state={value}` and `onChange={setState}`"
      ],
      answer: "`value={state}` and `onChange={setState}`",
      explanation: "The notes describe this two-way flow: '1. State to Input: `<input value={name} ... />`' and '2. Input to State: `onChange={e => setName(e.target.value)}`'."
    },
    {
      question: "This seems like a lot of work for a big form. What is the recommended solution?",
      options: [
        "Use 'uncontrolled' components instead",
        "Use form libraries like `React Hook Form` or `Formik`",
        "Write one giant `useState` hook for all fields",
        "Don't use forms in React"
      ],
      answer: "Use form libraries like `React Hook Form` or `Formik`",
      explanation: "The Q&A section states: 'This is why developers use form libraries. The two most popular are **React Hook Form** and **Formik**. They handle all the state, validation, and submission logic for you.'"
    },
    {
      question: "In a controlled form, where do you run your validation logic?",
      options: [
        "In a `useEffect` hook",
        "In the `onChange` handler (for instant validation) or `onSubmit` handler (for submit validation)",
        "In a separate `validate.js` file that React automatically finds",
        "Directly in the `<input>` tag"
      ],
      answer: "In the `onChange` handler (for instant validation) or `onSubmit` handler (for submit validation)",
      explanation: "The notes state: 'Run your validation logic inside the `onSubmit` handler (or `onChange` for instant feedback).' The example uses the `onSubmit` handler."
    },
    {
      question: "How do you display an error message for a specific field?",
      options: [
        "By calling `alert(errors.name)`",
        "By creating a separate piece of state for errors and conditionally rendering it",
        "By using `console.error(errors.name)`",
        "React automatically shows errors"
      ],
      answer: "By creating a separate piece of state for errors and conditionally rendering it",
      explanation: "The notes outline this: 'Create a *second* piece of state... `const [errors, setErrors] = useState({})`... If there are errors, update the `errors` state... Conditionally render the errors...'"
    },
    {
      question: "What is an 'uncontrolled' component?",
      options: [
        "A component that has no state",
        "A component that uses `useRef` to 'pull' the value from the DOM on submit",
        "A component that is not part of React Router",
        "An older term for a class component"
      ],
      answer: "A component that uses `useRef` to 'pull' the value from the DOM on submit",
      explanation: "The Q&A states: 'It's the alternative... You let the DOM store the value, and you use a `useRef` to \"pull\" the value from the input *only* when the form is submitted.'"
    }
  ],
  "component-lifecycle": [
    {
      question: "What are the three phases of a React component's 'life'?",
      options: [
        "Pending, Fulfilled, Rejected",
        "Birth (Mounting), Life (Updating), Death (Unmounting)",
        "Start, Running, Finished",
        "State, Props, Context"
      ],
      answer: "Birth (Mounting), Life (Updating), Death (Unmounting)",
      explanation: "The analogy explicitly lists these three phases: '1. Birth (Mounting)... 2. Life (Updating)... 3. Death (Unmounting).'"
    },
    {
      question: "In a functional component, which Hook is used to manage *all* lifecycle phases?",
      options: [
        "`useState`",
        "`useEffect`",
        "`useContext`",
        "`useRef`"
      ],
      answer: "`useEffect`",
      explanation: "The notes state: 'In modern functional components, the entire lifecycle is managed by the `useEffect` hook.'"
    },
    {
      question: "How do you write a `useEffect` hook that runs *only once* when the component mounts?",
      options: [
        "By passing an empty dependency array: `useEffect(() => ..., [])`",
        "By passing no dependency array: `useEffect(() => ...)`",
        "By passing `[props]` in the dependency array: `useEffect(() => ..., [props])`",
        "By adding the `onMount` prop to the component"
      ],
      answer: "By passing an empty dependency array: `useEffect(() => ..., [])`",
      explanation: "The notes state: '`useEffect(() => { ... }, [])` (The empty dependency array is key). ... Use Case: Initial data fetching...'"
    },
    {
      question: "How do you run code just before a component 'dies' (unmounts)?",
      options: [
        "You call a `useUnmount()` hook",
        "You `return` a 'cleanup function' from within your `useEffect` hook",
        "You set a `setTimeout` for when you expect it to unmount",
        "You cannot, React handles this automatically"
      ],
      answer: "You `return` a 'cleanup function' from within your `useEffect` hook",
      explanation: "The notes define this as the 'Unmounting' phase: 'This is the **cleanup function**. You `return` it from your effect. ... React runs this function *just before* the component is destroyed.'"
    },
    {
      question: "What is a 'memory leak' in React?",
      options: [
        "When your component uses too much `useState`",
        "When a component unmounts, but a process it started (like `setInterval`) keeps running",
        "When you `console.log` too much data",
        "When you use `var` instead of `let` or `const`"
      ],
      answer: "When a component unmounts, but a process it started (like `setInterval`) keeps running",
      explanation: "The Q&A section defines this: 'It's when a component *unmounts*, but a process it started (like a `setInterval` or a web socket subscription) *keeps running* in the background.'"
    },
    {
      question: "You have a `useEffect` that re-fetches data when a `userId` prop changes. What should its dependency array be?",
      options: [
        "`[]`",
        "`[userId]`",
        "`()`",
        "No array"
      ],
      answer: "`[userId]`",
      explanation: "The notes provide this exact 'Updating' example: '`useEffect(() => { ... }, [id])` ... Use Case: Re-fetching data when a `prop` (like `id`) changes.'"
    }
  ],
  // "react-mini-projects": [
  //   {
  //     question: "According to the 'Final Exam' analogy, what is the *most important* skill tested by mini-projects?",
  //     options: [
  //       "Your knowledge of HTML",
  //       "Your ability to write complex CSS",
  //       "Your understanding of state management and data flow",
  //       "Your ability to deploy a website"
  //     ],
  //     answer: "Your understanding of state management and data flow",
  //     explanation: "The notes state: 'The most important skill they test is your understanding of **state management and data flow**.'"
  //   },
  //   {
  //     question: "What is 'State Colocation'?",
  //     options: [
  //       "Putting all your state in one global file",
  //       "Knowing *where* state should live (e.g., in the parent component that needs to share it)",
  //       "Using `useRef` instead of `useState`",
  //       "Storing your state in `localStorage`"
  //     ],
  //     answer: "Knowing *where* state should live (e.g., in the parent component that needs to share it)",
  //     explanation: "The notes list 'State Colocation' as a key skill: 'Do you know *where* state should live? (e.g., The `todos` array must live in the *parent* component...)'"
  //   },
  //   {
  //     question: "What is the correct, *immutable* way to add a `newTodo` to an existing `todos` state array?",
  //     options: [
  //       "`todos.push(newTodo); setTodos(todos);`",
  //       "`setTodos([...todos, newTodo]);`",
  //       "`setTodos(todos.add(newTodo));`",
  //       "`setTodos(newTodo);`"
  //     ],
  //     answer: "`setTodos([...todos, newTodo]);`",
  //     explanation: "The 'Golden Rule' section explicitly shows this: 'Wrong (Mutation): `todos.push(newTodo);` ... Right (New Array): `setTodos([...todos, newTodo]);`'"
  //   },
  //   {
  //     question: "What is the correct, *immutable* way to delete a todo with `idToDelete` from a `todos` state array?",
  //     options: [
  //       "`const index = ...; todos.splice(index, 1); setTodos(todos);`",
  //       "`setTodos(todos.filter(todo => todo.id !== idToDelete));`",
  //       "`delete todos[idToDelete]; setTodos(todos);`",
  //       "`setTodos(todos.remove(idToDelete));`"
  //     ],
  //     answer: "`setTodos(todos.filter(todo => todo.id !== idToDelete));`",
  //     explanation: "The 'Golden Rule' section shows this: 'Wrong (Mutation): `...todos.splice(index, 1);` ... Right (New Array): `setTodos(todos.filter(t => t.id !== id));`'"
  //   },
  //   {
  //     question: "Why will `todos.push(newTodo); setTodos(todos);` likely fail to update the UI?",
  //     options: [
  //       "`push` is not a valid JavaScript function",
  //       "`push` is too slow for React",
  //       "`push` mutates the array, so the *reference* doesn't change, and React skips the re-render",
  //       "You must call `setTodos` *before* you `push` the new item"
  //     ],
  //     answer: "`push` mutates the array, so the *reference* doesn't change, and React skips the re-render",
  //     explanation: "The Q&A explains: 'If you *mutate* an array (like with `.push()`), the *reference*... doesn't change. React compares the old and new array, sees the same reference, and *incorrectly assumes nothing changed*...'"
  //   
    // {
    //   question: "How would you split the To-Do list example into a separate `<TodoItem />` component?",
    //   options: [
    //     "Pass the entire `todos` array into each `<TodoItem />`",
    //     "Pass the `todo` object and the `handleDelete` function as props",
    //     "You can't split a component that has state",
    //     "The `<TodoItem />` would need to have its own `useState` for the todo text"
    //   ],
    //   answer: "Pass the `todo` object and the `handleDelete` function as props",
    //   explanation: "The Q&A describes this: 'The `<TodoList />` component would map... and render a `<TodoItem />`... passing the `todo` object and the `handleDelete` function down as <em>props</em>.'"
    // }
  // ],
};