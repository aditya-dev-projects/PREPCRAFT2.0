export const Chapter3Quiz = {
  "html5-essentials": [
    {
      question: "According to the 'Skeleton' analogy, what are HTML5 semantic elements like `<header>` and `<footer>`?",
      options: [
        "Generic 'bones' like <div>",
        "The 'skin' or 'paint'",
        "The 'brain' and 'muscles'",
        "Specific 'bones' like the 'skull' or 'foot bones' that have meaning"
      ],
      answer: "Specific 'bones' like the 'skull' or 'foot bones' that have meaning",
      explanation: "The notes explain that a generic `<div>` is like a generic 'bone,' but semantic elements (`<header>`, etc.) are like the correct 'skull' or 'foot bone' because they give *meaning* and *purpose* to the structure."
    },
    {
      question: "What are the two main reasons listed for using semantic elements?",
      options: [
        "Makes the site faster and more colorful",
        "Accessibility (for screen readers) and SEO (for search engines)",
        "Makes JavaScript easier to write and debug",
        "Replaces the need for CSS and JavaScript"
      ],
      answer: "Accessibility (for screen readers) and SEO (for search engines)",
      explanation: "The notes explicitly state that semantic elements are important for: 1) Accessibility (screen readers use them to navigate) and 2) SEO (search engines use them to understand page structure)."
    },
    {
      question: "Which HTML5 semantic element is intended for the *dominant, unique* content of the page?",
      options: [
        "<section>",
        "<article>",
        "<main>",
        "<aside>"
      ],
      answer: "<main>",
      explanation: "The notes define `<main>` as 'The dominant, unique content of the page.' It's best practice to only have one `<main>` element per page."
    },
    {
      question: "What is the key difference between an `<article>` and a `<section>`?",
      options: [
        "<article> is for the main content, <section> is for the sidebar.",
        "<article> is self-contained and could be syndicated (like a blog post), while <section> is for thematic grouping.",
        "<section> is for self-contained content, <article> is for grouping content.",
        "There is no real difference, they can be used interchangeably."
      ],
      answer: "<article> is self-contained and could be syndicated (like a blog post), while <section> is for thematic grouping.",
      explanation: "The QnA section clarifies this: An `<article>` is for self-contained content (like a blog post). A `<section>` is for grouping related content (like a 'Comments' section)."
    },
    {
      question: "What is the term for building a page using only `<div>` tags, and why is it a bad practice?",
      options: [
        "It's called 'div-itis' and it's bad for accessibility and SEO.",
        "It's called 'div-stacking' and it's the modern standard.",
        "It's called 'div-itis' and it's bad because it's slow.",
        "It's called 'semantic-lite' and it's good for small pages."
      ],
      answer: "It's called 'div-itis' and it's bad for accessibility and SEO.",
      explanation: "The QnA section identifies this as 'div-itis.' It's a bad practice because a page of only `<div>`s has no *meaning* for screen readers or search engines."
    },
    {
      question: "Which semantic tag is used to contain the main navigation links of a site?",
      options: [
        "<header>",
        "<nav>",
        "<aside>",
        "<ul>"
      ],
      answer: "<nav>",
      explanation: "The notes define `<nav>` as the tag that 'Contains the main navigation links.' It is often placed inside the `<header>`."
    }
  ],
  "html-complete-guide": [
    {
      question: "In a form, which `method` attribute sends data in the request body, making it secure for passwords?",
      options: [
        "GET",
        "POST",
        "SEND",
        "SECURE"
      ],
      answer: "POST",
      explanation: "The notes state that `method=\"POST\"` is used for sensitive info because it sends the data in the request body, not in the URL (which `GET` does)."
    },
    {
      question: "Which attribute is critical for linking a `<label>` to an `<input>` for accessibility?",
      options: [
        "name",
        "id",
        "link",
        "for"
      ],
      answer: "for",
      explanation: "The notes specify: '<label for=\"id\">: This is critical for accessibility. The `for` attribute must match the `id` of the input, linking them.'"
    },
    {
      question: "What is the modern, correct use for the `<table>` element?",
      options: [
        "For building the main layout of a website.",
        "Only for displaying tabular data (like a spreadsheet).",
        "For creating responsive grids.",
        "To replace all `<div>` tags."
      ],
      answer: "Only for displaying tabular data (like a spreadsheet).",
      explanation: "The notes and QnA section strongly emphasize that `<table>` should *only* be used for tabular data, not for page layout, which is a bad, outdated practice."
    },
    {
      question: "To provide multiple file formats for a `<video>` tag (like .mp4 and .webm), which tag should you use?",
      options: [
        "<video-format>",
        "<source>",
        "<multimedia>",
        "<video-option>"
      ],
      answer: "<source>",
      explanation: "The notes list `<source src=\"...\" type=\"...\">` as the tag that 'Allows you to provide multiple file formats... for browser compatibility.'"
    },
    {
      question: "A user is filling out a website's *search bar*. What is the semantically correct `method` attribute for this form?",
      options: [
        "POST",
        "GET",
        "SEARCH",
        "LOOKUP"
      ],
      answer: "GET",
      explanation: "The QnA section explains: 'Use GET for non-sensitive data that *retrieves* information, like a search query. The data is visible in the URL.'"
    },
    {
      question: "What are the *two* main benefits of using `<label for=\"id\">`?",
      options: [
        "It makes the form submit faster and look better.",
        "It centers the text and adds a border.",
        "Accessibility (for screen readers) and Usability (larger click target).",
        "It's required for `POST` requests and makes the form secure."
      ],
      answer: "Accessibility (for screen readers) and Usability (larger click target).",
      explanation: "The QnA section lists two benefits: 1) Accessibility (links the label for screen readers) and 2) Usability (the user can click the label's text to focus the input)."
    }
  ],
  "css3-complete-guide": [
    {
      question: "In the CSS Box Model, what is the transparent space *inside* the border, between the border and the content?",
      options: [
        "Margin",
        "Padding",
        "Content",
        "Box-sizing"
      ],
      answer: "Padding",
      explanation: "The notes define the layers from inside-out: Content -> Padding -> Border -> Margin. Padding is the space *inside* the border."
    },
    {
      question: "In the CSS Box Model, what is the transparent space *outside* the border, separating it from other elements?",
      options: [
        "Margin",
        "Padding",
        "Gutter",
        "Spacing"
      ],
      answer: "Margin",
      explanation: "The QnA section clarifies: '`margin` is the space *outside* the border (between this element and its neighbors).' It's used to push elements away from each other."
    },
    {
      question: "Which CSS property is essential for making an element's `width` include its `padding` and `border`?",
      options: [
        "box-model: true;",
        "box-sizing: border-box;",
        "include-padding: true;",
        "box-sizing: content-box;"
      ],
      answer: "box-sizing: border-box;",
      explanation: "The notes state that `box-sizing: border-box;` is 'Essential.' It changes the default behavior so that `width` defines the *total width* of the element, including padding and border."
    },
    {
      question: "Which selector is the *most* specific and will win over all others?",
      options: [
        "An ID selector (e.g., #my-id)",
        "A Class selector (e.g., .my-class)",
        "An Element selector (e.g., p)",
        "An Inline Style (e.g., style=\"...\")"
      ],
      answer: "An Inline Style (e.g., style=\"...\")",
      explanation: "The notes list the specificity hierarchy as: `Inline Style` (wins) > `ID` > `Class` > `Element` (loses)."
    },
    {
      question: "What is the difference between a `class` and an `ID`?",
      options: [
        "ID is for styling, class is for JavaScript.",
        "ID must be unique; a class is reusable and can be on many elements.",
        "Class must be unique; an ID is reusable.",
        "ID is for fonts, class is for layout."
      ],
      answer: "ID must be unique; a class is reusable and can be on many elements.",
      explanation: "The QnA explains: 'An `ID`... must be **unique** on the page... A `class`... is **reusable** and can be applied to many elements.' This is a fundamental CSS concept."
    },
    {
      question: "What does the CSS selector `ul > li` target?",
      options: [
        "All `<li>` tags anywhere inside a `<ul>`",
        "All `<ul>` tags that are inside a `<li>`",
        "Only `<li>` tags that are *direct children* of a `<ul>`",
        "The first `<li>` tag inside any `<ul>`"
      ],
      answer: "Only `<li>` tags that are *direct children* of a `<ul>`",
      explanation: "The `>` symbol is the 'child' selector. The notes specify that `ul > li` 'Selects only `<li>` tags that are *direct children* of a `<ul>`.' In contrast, `ul li` would select all descendants."
    }
  ],
  "css-layout": [
    {
      question: "What is the main difference between Flexbox and Grid?",
      options: [
        "Flexbox is for 2D layouts (rows and columns), Grid is for 1D (a single line).",
        "Flexbox is for 1D layouts (a single row or column), Grid is for 2D (rows and columns).",
        "Flexbox is for layout, Grid is for alignment.",
        "Flexbox is the old way, Grid is the new way."
      ],
      answer: "Flexbox is for 1D layouts (a single row or column), Grid is for 2D (rows and columns).",
      explanation: "The analogy in the notes clarifies this: Flexbox is for 1-Dimension (a 'bookshelf'), while Grid is for 2-Dimensions (a 'newspaper layout')."
    },
    {
      question: "In Flexbox with `flex-direction: row`, which property controls *horizontal* alignment?",
      options: [
        "align-items",
        "justify-content",
        "flex-direction",
        "grid-template-columns"
      ],
      answer: "justify-content",
      explanation: "The notes state `justify-content` 'Aligns items on the **main axis** (horizontal if `row`).' This is a core Flexbox concept."
    },
    {
      question: "In Flexbox with `flex-direction: row`, which property controls *vertical* alignment?",
      options: [
        "align-items",
        "justify-content",
        "flex-direction",
        "grid-template-rows"
      ],
      answer: "align-items",
      explanation: "The notes state `align-items` 'Aligns items on the **cross axis** (vertical if `row`).'"
    },
    {
      question: "In CSS Grid, what is the `fr` unit?",
      options: [
        "It stands for 'free range' and makes an item fill the page.",
        "It is a fixed unit equal to 100px.",
        "It is a 'fractional' unit that represents a fraction of the available space.",
        "It stands for 'flex-row' and turns a grid item into a flex container."
      ],
      answer: "It is a 'fractional' unit that represents a fraction of the available space.",
      explanation: "The `fr` (fractional) unit is key to Grid. The notes explain: '`1fr 1fr 1fr` means \"three equal columns.\" `2fr 1fr` means \"two columns, the first twice as wide as the second.\""
    },
    {
      question: "According to best practices, when should you use Grid vs. Flexbox?",
      options: [
        "Use Flexbox for everything.",
        "Use Grid for everything.",
        "Use Grid for the overall page layout and Flexbox for component-level alignment.",
        "Use Flexbox for the page layout and Grid for component-level alignment."
      ],
      answer: "Use Grid for the overall page layout and Flexbox for component-level alignment.",
      explanation: "The QnA section gives this exact advice: 'Use **Grid** for the overall **page layout** (2D: rows AND columns). Use **Flexbox** for **component-level alignment** (1D: a row OR a column).'"
    },
    {
      question: "How would you make a Grid item start on the first column line and span 3 columns?",
      options: [
        "grid-column: 1 / 3",
        "grid-column: 1 / 4",
        "grid-column-span: 3",
        "grid-columns: 1 3"
      ],
      answer: "grid-column: 1 / 4",
      explanation: "The syntax is `start-line / end-line`. To span 3 columns, it must start on line 1 and end on line 4 (covering columns 1, 2, and 3). `1 / 3` would only span 2 columns."
    }
  ],
  "css-animations": [
    {
      question: "What is the difference between a `transition` and an `animation`?",
      options: [
        "`transition` is for complex, multi-step sequences; `animation` is for simple A-to-B changes.",
        "`transition` is for simple A-to-B changes (like on hover); `animation` is for complex, multi-step sequences (like a loop).",
        "`transition` only animates `transform`; `animation` only animates `opacity`.",
        "There is no difference, they are the same."
      ],
      answer: "`transition` is for simple A-to-B changes (like on hover); `animation` is for complex, multi-step sequences (like a loop).",
      explanation: "The notes' analogy explains this: `transition` is a 'Simple Change' (A-to-B, like a light dimmer), while `animation` is a 'Complex Movie' (multi-step, like a spinner)."
    },
    {
      question: "What is the name of the CSS rule used to define the steps of an animation?",
      options: [
        "@animation-steps",
        "@define-animation",
        "@keyframes",
        "@timeline"
      ],
      answer: "@keyframes",
      explanation: "The notes state: '`@keyframes [name]`: The definition. You set \"stops\" from `0%` (or `from`) to `100%` (or `to`).'"
    },
    {
      question: "For smooth, 60fps animations, what are the *only* two properties you should animate?",
      options: [
        "`width` and `height`",
        "`margin` and `padding`",
        "`left` and `top`",
        "`transform` and `opacity`"
      ],
      answer: "`transform` and `opacity`",
      explanation: "This is a critical performance concept. The notes state you should *only* animate `transform` and `opacity` because animating `width`, `height`, or `margin` causes 'layout thrashing' and janky animation."
    },
    {
      question: "A developer's animation is 'janky' or 'stuttery'. What is the most likely cause?",
      options: [
        "They are animating `transform` or `opacity`.",
        "They are animating a layout property like `width`, `height`, or `left`.",
        "They are using a `transition` instead of an `animation`.",
        "The animation duration is too long."
      ],
      answer: "They are animating a layout property like `width`, `height`, or `left`.",
      explanation: "The QnA section directly addresses this: 'You are almost certainly animating a layout-heavy property like `width`, `height`, or `left`/`top`.' These force the browser to recalculate the page layout."
    },
    {
      question: "How do you make a CSS animation loop forever?",
      options: [
        "Set `animation-duration: infinite;`",
        "Set `animation-loop: true;`",
        "Set `animation-iteration-count: infinite;`",
        "Set `animation: spin 1s linear;`"
      ],
      answer: "Set `animation-iteration-count: infinite;`",
      explanation: "The `animation-iteration-count` property defines how many times the animation should play. Setting it to `infinite` makes it loop."
    },
    {
      question: "How would you write the shorthand to make a button's `background-color` fade smoothly over 0.3 seconds?",
      options: [
        "animation: background-color 0.3s ease;",
        "transition: all 0.3s ease;",
        "transition: background-color 0.3s ease;",
        "@keyframes fade { from { background-color: ... } }"
      ],
      answer: "transition: background-color 0.3s ease;",
      explanation: "This is a simple A-to-B change, so a `transition` is appropriate. The shorthand is `[property] [duration] [timing-function]`, as shown in the notes."
    }
  ],
  "responsive-design": [
    {
      question: "What is the 'Mobile-First' approach in responsive design?",
      options: [
        "Write CSS for desktop first, then use `max-width` to remove features for mobile.",
        "Write CSS for mobile first, then use `min-width` to add features for larger screens.",
        "Create two separate websites, one for mobile and one for desktop.",
        "Only design for mobile, as desktop usage is declining."
      ],
      answer: "Write CSS for mobile first, then use `min-width` to add features for larger screens.",
      explanation: "The notes define this as the 'professional standard': 'You write your default CSS for the *smallest screen* (mobile) first. Then, you use <strong>`min-width` media queries</strong> to *add* complexity as the screen gets *larger*.'"
    },
    {
      question: "What is the *single most critical* HTML tag required for responsive design to work on mobile?",
      options: [
        "<meta charset=\"UTF-8\">",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "<link rel=\"stylesheet\" href=\"responsive.css\">",
        "<script src=\"responsive.js\"></script>"
      ],
      answer: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      explanation: "This is highlighted as 'CRITICAL'. The QnA explains that without this tag, mobile browsers 'lie' about their size and 'zoom out,' which prevents media queries from working correctly."
    },
    {
      question: "What does the media query `@media (min-width: 768px) { ... }` mean?",
      options: [
        "The styles apply *only* to screens smaller than 768px.",
        "The styles apply *only* to screens exactly 768px wide.",
        "The styles apply to screens 768px wide or *wider*.",
        "The styles apply to screens 768px wide or *smaller*."
      ],
      answer: "The styles apply to screens 768px wide or *wider*.",
      explanation: "This is a `min-width` query. The notes state: '(The styles inside this block will *only* apply to screens 768px or *wider*).' This is the foundation of the mobile-first approach."
    },
    {
      question: "What is the best CSS rule to make images 'fluid' so they don't overflow their container?",
      options: [
        "img { width: 100%; }",
        "img { max-width: 100%; height: auto; }",
        "img { min-width: 100%; }",
        "img { width: 100vw; }"
      ],
      answer: "img { max-width: 100%; height: auto; }",
      explanation: "The notes specify this exact rule: `img { max-width: 100%; height: auto; }`. This lets the image shrink to fit its container but prevents it from growing larger than its original size."
    },
    {
      question: "What is the main difference between `rem` and `em` units?",
      options: [
        "`rem` is relative to the parent element; `em` is relative to the root (`<html>`) element.",
        "`rem` is relative to the root (`<html>`) element; `em` is relative to the parent element.",
        "`rem` is for fonts; `em` is for padding and margins.",
        "`rem` is a fixed pixel value; `em` is a percentage."
      ],
      answer: "`rem` is relative to the root (`<html>`) element; `em` is relative to the parent element.",
      explanation: "The QnA section clarifies this: '`rem` (Root EM) is relative *only* to the font-size of the `<html>` (root) element.' This makes it more predictable than `em`, which can change with nesting."
    },
    {
      question: "A website on a phone looks like the tiny, zoomed-out desktop version. What is the most likely error?",
      options: [
        "The CSS file is not linked correctly.",
        "The `<meta name=\"viewport\" ...>` tag is missing from the `<head>`.",
        "The developer used `rem` units instead of `px` units.",
        "The site has no JavaScript."
      ],
      answer: "The `<meta name=\"viewport\" ...>` tag is missing from the `<head>`.",
      explanation: "This is the classic symptom of a missing viewport meta tag. The browser defaults to a 'desktop' viewport (e.g., 980px wide) and zooms out, making the site unreadable."
    }
  ],
  "css-preprocessors": [
    {
      question: "What is a CSS Preprocessor, like Sass?",
      options: [
        "A JavaScript library for styling components.",
        "A tool that compiles an advanced syntax (like .scss) into regular, browser-readable CSS.",
        "A CSS framework like Bootstrap or Tailwind.",
        "A linter that finds bugs in your CSS."
      ],
      answer: "A tool that compiles an advanced syntax (like .scss) into regular, browser-readable CSS.",
      explanation: "The notes define it as 'a tool that **compiles** an advanced syntax into regular, browser-readable CSS.' The browser *never* sees the Sass code."
    },
    {
      question: "In Sass, what is the difference between a `$` variable and a `--` variable?",
      options: [
        "`$` variables are for colors, `--` variables are for fonts.",
        "`$` variables are compile-time; `--` (CSS) variables are runtime.",
        "`$` variables are runtime; `--` (CSS) variables are compile-time.",
        "They are the same, just different syntax."
      ],
      answer: "`$` variables are compile-time; `--` (CSS) variables are runtime.",
      explanation: "The QnA explains this: 'Sass variables (`$my-var`) are *compile-time*. They don't exist in the final CSS... CSS Custom Properties (`--my-var`) are *runtime* variables.'"
    },
    {
      question: "What is a `@mixin` in Sass used for?",
      options: [
        "To define a color variable.",
        "To import another file.",
        "To create a reusable block of styles, like a function.",
        "To nest selectors."
      ],
      answer: "To create a reusable block of styles, like a function.",
      explanation: "The notes define a mixin as a 'Reusable blocks of styles, like a function.' You define it with `@mixin` and use it with `@include`."
    },
    {
      question: "What is the danger of 'over-nesting' in Sass?",
      options: [
        "It makes the compiled CSS file too small.",
        "It can create extremely-specific CSS selectors that are slow and hard to override.",
        "It causes the Sass compiler to crash.",
        "It is not a danger; it is a best practice."
      ],
      answer: "It can create extremely-specific CSS selectors that are slow and hard to override.",
      explanation: "The QnA section warns against this: 'if you nest 5 or 6 levels deep, Sass will compile that into an *extremely specific* CSS selector... This selector is hard to override.'"
    },
    {
      question: "How do you use the 'Parent Selector' (`&`) in Sass?",
      options: [
        "To select the parent of the current element.",
        "To create a variable.",
        "To nest pseudo-classes, like `&:hover`.",
        "To import a file."
      ],
      answer: "To nest pseudo-classes, like `&:hover`.",
      explanation: "The notes list `&` as the Parent Selector, 'Used for nesting pseudo-classes (like `&:hover`).' For example, `a { &:hover { ... } }` compiles to `a:hover { ... }`."
    },
    {
      question: "What is a 'Partial' file in Sass?",
      options: [
        "A CSS file that is only partially complete.",
        "A file named with an underscore (e.g., `_variables.scss`) that is only meant to be imported.",
        "A mixin that has not been included yet.",
        "A special type of variable."
      ],
      answer: "A file named with an underscore (e.g., `_variables.scss`) that is only meant to be imported.",
      explanation: "The notes define Partials: 'Split your code into smaller files (e.g., `_variables.scss`). The underscore tells Sass this file is *only* for importing.'"
    }
  ],
  "browser-developer-tools": [
    {
      question: "You open DevTools (F12). Which tab shows you the live HTML, and which pane lets you live-edit CSS?",
      options: [
        "Console tab, Styles pane",
        "Network tab, Response pane",
        "Elements tab, Styles pane",
        "Application tab, Storage pane"
      ],
      answer: "Elements tab, Styles pane",
      explanation: "The notes state the 'Elements Tab' shows the 'live DOM' and its 'Styles Pane' is the 'most powerful feature' for live-editing CSS."
    },
    {
      question: "You are debugging a JavaScript function. What is the *fastest* and most common way to see the value of a variable?",
      options: [
        "Use the Network tab",
        "Use `console.log()` to print the variable to the Console tab",
        "Use the Elements tab",
        "Use the Application tab"
      ],
      answer: "Use `console.log()` to print the variable to the Console tab",
      explanation: "The QnA section states: 'Use `console.log()` at every single step of your logic. Log your variables... This is the fastest way to trace your code's execution.'"
    },
    {
      question: "Your React app makes an API call, but no data appears. You see a '404' status code. Which tab did you use, and what does '404' mean?",
      options: [
        "Network tab. '404' means the server crashed.",
        "Console tab. '404' means the URL is wrong.",
        "Network tab. '404' means the URL is wrong or the endpoint doesn't exist.",
        "Elements tab. '404' means the HTML is missing."
      ],
      answer: "Network tab. '404' means the URL is wrong or the endpoint doesn't exist.",
      explanation: "The QnA workflow for debugging API calls states you must use the 'Network Tab.' A `404 Not Found` status code means the URL you tried to fetch doesn't exist."
    },
    {
      question: "A user says they can't log in. You want to check if their browser is saving the authentication token. Which tab do you use?",
      options: [
        "Console tab",
        "Network tab",
        "Elements tab",
        "Application tab"
      ],
      answer: "Application tab",
      explanation: "The notes identify the 'Application Tab' as the place to 'inspect and clear browser storage: Local Storage, Session Storage, and Cookies. This is essential for debugging authentication.'"
    },
    {
      question: "In the 'Elements' tab, you see one of your CSS rules is *crossed out*. What does this mean?",
      options: [
        "The CSS has a syntax error and is invalid.",
        "The CSS property is not supported by the browser.",
        "A more specific CSS selector is winning and has overridden this rule.",
        "The CSS file is not loaded."
      ],
      answer: "A more specific CSS selector is winning and has overridden this rule.",
      explanation: "The example workflow for debugging CSS states: 'you'll see a *more specific* rule... and your `color: blue` will be crossed out.' This indicates a specificity conflict."
    },
    {
      question: "An API call has a `200 OK` status, but your page still shows no data. What is your *very next* step?",
      options: [
        "Refresh the page until it works.",
        "Check the Console tab for errors.",
        "In the Network tab, click the request and check the 'Response' tab to see the JSON structure.",
        "Check the Application tab to see if Local Storage is full."
      ],
      answer: "In the Network tab, click the request and check the 'Response' tab to see the JSON structure.",
      explanation: "The QnA section provides this exact workflow: 'If it's `200 OK`, click it, check the **Response** tab, and make sure the JSON structure you *received* matches the structure your code *expects*.'"
    }
  ]
};