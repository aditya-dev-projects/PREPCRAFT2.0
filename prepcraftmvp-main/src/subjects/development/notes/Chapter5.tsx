import React from 'react';

const Chapter5 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'introduction-to-css-frameworks':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">5.1: Introduction to CSS Frameworks</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Writing CSS from scratch for every project is time-consuming and can lead to repetitive and inconsistent code. A <strong>CSS Framework</strong> is a pre-written library of CSS code that provides a foundational structure, including a layout grid, pre-styled components, and consistent design patterns. Using a framework dramatically speeds up development and helps you build professional-looking, responsive websites with less effort.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A "Starter Kit" for Your House</h2>
            <p className="opacity-90">
              Think of building a house. You could go to the forest, chop down trees, and make your own lumber (writing CSS from scratch). Or, you could go to a hardware store and buy a pre-fabricated "starter kit" that includes pre-cut lumber, standard-sized doors, and windows (using a CSS Framework). A framework gives you all the common, reusable parts, allowing you to focus on the unique aspects of your design.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. The Problem Frameworks Solve: The "Messy CSS" File</h2>
            <p className="opacity-90">
              Without a framework, as a project grows, your `styles.css` file can become a 10,000-line monster. It's often filled with repetitive code, conflicting rules, and hard-to-maintain selectors. Frameworks solve this by providing a standardized, tested, and organized system.
            </p>

            <h2 className="text-2xl font-semibold pt-4">3. Benefit: Speed of Development</h2>
            <p className="opacity-90">
              This is the biggest advantage. You can build a fully responsive, professional-looking layout in minutes or hours, rather than days or weeks. Pre-built components like navbars, forms, and modals are ready to use.
            </p>

            <h2 className="text-2xl font-semibold pt-4">4. Benefit: Responsiveness</h2>
            <p className="opacity-90">
              Modern frameworks are built with a "mobile-first" approach. They provide a powerful grid system and responsive utilities that make it simple to create layouts that work perfectly on all screen sizes, from phones to desktops.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">5. Benefit: Consistency</h2>
            <p className="opacity-90">
              Frameworks provide a consistent design system. A `.btn-primary` will look the same everywhere on your site. This ensures a uniform look and feel across all your pages and components without you having to think about it.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">6. Benefit: Browser Compatibility</h2>
            <p className="opacity-90">
              The framework's code has already been thoroughly tested across different browsers (Chrome, Firefox, Safari, etc.). This saves you the headache of fixing many common, frustrating cross-browser bugs.
            </p>

            <h2 className="text-2xl font-semibold pt-4">7. Philosophy 1: Component-Based (e.g., Bootstrap)</h2>
            <p className="opacity-90">
              This is the traditional approach. The framework provides fully styled, ready-to-use components. Your job is to assemble these components.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">You use pre-defined classes like `.card`, `.navbar`, and `.btn` to construct the UI.</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="card" style="width: 18rem;">\n  <div class="card-body">\n    <h5 class="card-title">Card Title</h5>\n    <a href="#" class="btn btn-primary">Go</a>\n  </div>\n</div>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Philosophy 2: Utility-First (e.g., Tailwind CSS)</h2>
            <p className="opacity-90">
              This is a more modern approach. Instead of pre-built components, a utility-first framework gives you a large set of low-level utility classes. Each class does one specific job.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">You build custom designs by composing these utilities (like `flex`, `p-4`, `text-center`) directly in your HTML.</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="max-w-sm p-6 bg-white rounded-lg shadow-md">\n  <h5 class="text-2xl font-bold">Card Title</h5>\n  <a href="#" class="bg-blue-500 text-white px-3 py-2 rounded">Go</a>\n</div>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Comparison: Speed vs. Customization</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                  <h3 className="font-bold">Bootstrap (Component-Based)</h3>
                  <p className="text-sm opacity-90 mt-1"><strong>Faster to start.</strong> Perfect for rapid prototyping and internal tools where a unique design isn't important.</p>
              </div>
              <div>
                  <h3 className="font-bold">Tailwind CSS (Utility-First)</h3>
                  <p className="text-sm opacity-90 mt-1"><strong>Faster for custom designs.</strong> You don't have to "fight" the framework's default styles. Offers complete creative freedom.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold pt-4">10. What about UI Libraries? (MUI, Chakra UI)</h2>
            <p className="opacity-90">
              UI Libraries are related but different. They are collections of pre-built components specifically for a JavaScript framework like React.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Key Difference:</strong> A CSS framework provides CSS classes for your HTML. A UI library provides fully functional React components (e.g., `&lt;Button /&gt;`, `&lt;Card /&gt;`) that you import and use in your application.</li>
                <li><strong>Design Systems:</strong> Many UI libraries (like MUI) are based on established design systems (Google's Material Design).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Trade-offs: File Size and "Bloat"</h2>
            <p className="opacity-90">
              Frameworks can add a significant amount of CSS to your project. However, modern utility-first frameworks like Tailwind solve this by using a build process to <strong>purge</strong> (remove) all unused styles, resulting in a tiny, highly optimized final CSS file.
            </p>

            <h2 className="text-2xl font-semibold pt-4">12. Trade-offs: The "Look-alike" Problem</h2>
            <p className="opacity-90">
              A common criticism of component-based frameworks like Bootstrap is that all sites built with them tend to look the same. This is a valid concern if a unique brand identity is a primary goal. Utility-first frameworks completely avoid this problem.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">13. Key Strategy Summary: How to Choose</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Choose Bootstrap when:</strong> You need to build a standard-looking website (like an admin dashboard) very quickly.</li>
                <li><strong>Choose Tailwind CSS when:</strong> You are building a custom, unique design from scratch and want full control over the look and feel.</li>
                <li><strong>Choose a UI Library (like MUI) when:</strong> You are working inside a JavaScript framework (like React) and want ready-made, interactive components that follow a consistent design system.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'bootstrap-fundamentals':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">5.2: Bootstrap Fundamentals</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Bootstrap is the world's most popular CSS framework for developing responsive, mobile-first websites. It is a <strong>component-based framework</strong>, meaning it provides a large library of pre-styled, ready-to-use components like buttons, navbars, cards, and forms. This allows for incredibly rapid development.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Pre-built Toolkit</h2>
            <p className="opacity-90">
              Think of Bootstrap as a comprehensive toolkit. Instead of building every UI element from scratch, you simply pick a pre-made component from the toolkit and place it in your HTML. You use Bootstrap's pre-defined CSS classes to apply styles and structure.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. Setting Up Bootstrap (CDN Method)</h2>
            <p className="opacity-90">
              The quickest way to start using Bootstrap is by linking to its files via a Content Delivery Network (CDN). You just add these links to your HTML file.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">Add this to your `&lt;head&gt;` for the styles:</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">'}
              </code></pre>
              <p className="opacity-90 mt-4">Add this before your closing `&lt;/body&gt;` tag for the JavaScript:</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. The Grid System: Core Concept</h2>
            <p className="opacity-90">
              The Bootstrap grid system is the most important part of the framework. It's a powerful, mobile-first flexbox grid used to build layouts. It is based on a **12-column** layout.
            </p>

            <h2 className="text-2xl font-semibold pt-4">4. The Grid: `container`, `row`, `col`</h2>
            <p className="opacity-90">
              The grid has three main parts that work together:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`.container`</strong>: A wrapper that centers and contains your grid. Use `.container-fluid` for a full-width container.</li>
                <li><strong>`.row`</strong>: A wrapper for columns. Rows are horizontal groups of columns.</li>
                <li><strong>`.col-*`</strong>: The columns where your content goes. You can have any number of columns as long as their total "span" adds up to 12.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. The Grid: Responsive Breakpoints</h2>
            <p className="opacity-90">
              You specify how many of the 12 columns a `&lt;div&gt;` should span at different screen sizes using responsive prefixes:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>`col-` (for extra small screens &lt; 576px)</li>
                <li>`col-sm-` (for small screens ≥ 576px)</li>
                <li>`col-md-` (for medium screens ≥ 768px)</li>
                <li>`col-lg-` (for large screens ≥ 992px)</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Grid Example: Responsive Layout</h2>
            <p className="opacity-90">
              This layout will stack on mobile, be two 50% columns on tablets, and three 33.3% columns on desktops.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="container">\n  <div class="row">\n    <!-- Stacks on mobile (col-12), 2 columns on medium (col-md-6), 3 on large (col-lg-4) -->\n    <div class="col-12 col-md-6 col-lg-4">Column 1</div>\n    <div class="col-12 col-md-6 col-lg-4">Column 2</div>\n    <div class="col-12 col-md-6 col-lg-4">Column 3</div>\n  </div>\n</div>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Core Component: Buttons</h2>
            <p className="opacity-90">
              Bootstrap provides a variety of pre-styled buttons.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<button type="button" class="btn btn-primary">Primary</button>\n<button type="button" class="btn btn-success">Success</button>\n<button type="button" class="btn btn-danger">Danger</button>\n<button type="button" class="btn btn-outline-info">Info Outline</button>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Core Component: Cards</h2>
            <p className="opacity-90">
              A card is a flexible content container. You build it by combining several classes.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="card" style="width: 18rem;">\n  <div class="card-body">\n    <h5 class="card-title">Card Title</h5>\n    <p class="card-text">Some text content for the card.</p>\n    <a href="#" class="btn btn-primary">Go somewhere</a>\n  </div>\n</div>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Core Component: Navbar</h2>
            <p className="opacity-90">
              Bootstrap's navbar is a powerful, responsive navigation header that includes support for branding, navigation, and a collapsible menu for mobile devices. It requires both the CSS and JS files to be loaded.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">10. Utility Classes: Spacing</h2>
            <p className="opacity-90">
              Bootstrap also provides utility classes for common tasks. Spacing utilities are the most useful.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>`m` for `margin`, `p` for `padding`.</li>
                <li>`t` (top), `b` (bottom), `s` (start - left), `e` (end - right), `x` (horizontal), `y` (vertical).</li>
                <li>A scale from 0 to 5 (e.g., `mt-3` for `margin-top: 1rem`, `p-5` for `padding: 3rem`).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Customizing Bootstrap</h2>
            <p className="opacity-90">
              The professional way to customize Bootstrap is by using its Sass (SCSS) source files. You can change the Sass variables (like `$primary` or `$border-radius`) and recompile the framework to create a custom build.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <p className="opacity-90">
              Bootstrap is most effective when used for its intended purpose: rapid development.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Don't Fight the Framework:</strong> Use its components. If you find yourself heavily overriding every style, you're fighting the tool.</li>
                <li><strong>Master the Grid:</strong> The 12-column grid is its most powerful feature.</li>
                <li><strong>Use the Official Documentation:</strong> The Bootstrap docs are excellent. Copy-paste the correct markup from them.</li>
                <li><strong>Know When to Use It:</strong> Perfect for admin panels, internal tools, and simple marketing sites.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'tailwind-css-setup':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">5.3: Tailwind CSS Setup & Configuration</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Tailwind CSS is a <strong>utility-first</strong> CSS framework for building custom designs. Unlike Bootstrap, it doesn't provide pre-built components. Instead, it provides low-level utility classes that you combine. This chapter covers the essential setup and configuration process.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Smarter Stylesheet</h2>
            <p className="opacity-90">
              Tailwind works with a build process. You add utility classes to your HTML, and Tailwind scans your files to generate a static CSS file containing **only the styles you need**.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. Why a Build Step is Necessary</h2>
            <p className="opacity-90">
              The default, unconfigured Tailwind file is enormous. The build step is essential for **performance**. It scans your HTML and purges all unused styles, resulting in a tiny, optimized CSS file for production.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">3. Step 1: Install Tailwind CSS</h2>
            <p className="opacity-90">
              Open your terminal in your project folder and install Tailwind as a development dependency.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'npm install -D tailwindcss'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Step 2: Create Your Config File</h2>
            <p className="opacity-90">
              This command generates the essential `tailwind.config.js` file.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'npx tailwindcss init'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Step 3: Configure Your Template Paths</h2>
            <p className="opacity-90">
              This is the most important step. Open `tailwind.config.js` and tell Tailwind where to look for your HTML so it knows which classes to keep.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// tailwind.config.js\nmodule.exports = {\n  content: ["./src/**/*.{html,js,jsx,tsx}"],\n  // ...\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Step 4: Add Tailwind Directives to CSS</h2>
            <p className="opacity-90">
              Create a main CSS file (e.g., `src/input.css`) and add these three directives. Tailwind injects its styles here.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'@tailwind base;\n@tailwind components;\n@tailwind utilities;'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Step 5: Start the Build Process</h2>
            <p className="opacity-90">
              Run this command in your terminal. It will watch your `input.css` and `content` files and generate a compiled `output.css` file.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Step 6: Link in Your HTML</h2>
            <p className="opacity-90">
              Finally, link the **generated** `output.css` file in your HTML.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<link href="/dist/output.css" rel="stylesheet">'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. Just-In-Time (JIT) Mode</h2>
            <p className="opacity-90">
              Modern Tailwind uses a Just-In-Time (JIT) compiler. This generates styles on-demand as you type, leading to lightning-fast build times and enabling arbitrary values (e.g., `top-[117px]`).
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">10. Customizing Your Theme</h2>
            <p className="opacity-90">
              You can extend the default theme in your `tailwind.config.js` file.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        \'brand-blue\': \'#1DA1F2\',\n      }\n    }\n  }\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Using Plugins</h2>
            <p className="opacity-90">
              You can add new utilities using plugins, such as the official forms plugin for styling form elements.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// tailwind.config.js\nplugins: [\n  require(\'@tailwindcss/forms\'),\n],'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <p className="opacity-90">
              A proper setup is key to leveraging Tailwind's power.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Always use a build tool.</strong> Never use the CDN for a real project.</li>
                <li><strong>Configure your `content` path correctly.</strong> This is the most common source of errors.</li>
                <li><strong>Install the "Tailwind CSS IntelliSense"</strong> VS Code extension for autocompletion.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'tailwind-css-utility-classes':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">5.4: Tailwind CSS Utility Classes</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              The heart and soul of Tailwind CSS is its extensive set of <strong>utility classes</strong>. Unlike traditional CSS where you write styles in a separate file, Tailwind allows you to apply pre-existing classes directly within your HTML. Each class is small, single-purpose, and named intuitively, enabling you to build complex and custom designs without ever leaving your HTML.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Composable Building Blocks</h2>
            <p className="opacity-90">
              Think of utility classes as tiny, reusable building blocks. A class like `.btn` in Bootstrap is a pre-assembled component. In Tailwind, you don't get the finished component; you get the individual bricks (`bg-blue-500`, `text-white`, `px-4`, `py-2`, `rounded`) and you assemble it yourself exactly how you want it.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. The Naming Convention</h2>
            <p className="opacity-90">
              Tailwind's classes are not random; they follow a consistent and predictable pattern that maps directly to the underlying CSS properties.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90"><strong>Pattern:</strong> `[property]-[value]` (e.g., `p-4` is `padding: 1rem;`)</p>
              <p className="opacity-90"><strong>With Modifiers:</strong> `[modifier]:[property]-[value]` (e.g., `hover:bg-blue-700`)</p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Example: Building a Button</h2>
            <p className="opacity-90">
              This example shows how you compose utilities to create a custom component.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">\n  Click me\n</button>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Spacing: Margin & Padding</h2>
            <p className="opacity-90">
              Tailwind uses a numeric scale for spacing, where `1` unit is `0.25rem` (or `4px`).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>`p-4` (padding: 1rem), `m-8` (margin: 2rem)</li>
                <li>`pt-2` (padding-top), `mb-6` (margin-bottom)</li>
                <li>`px-4` (padding-left & padding-right)</li>
                <li>`my-6` (margin-top & margin-bottom)</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Sizing: Width & Height</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>`w-64` (width: 16rem)</li>
                <li>`w-1/2` (width: 50%)</li>
                <li>`w-full` (width: 100%)</li>
                <li>`h-screen` (height: 100vh)</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Typography</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Font Size:</strong> `text-sm`, `text-base`, `text-lg`, `text-2xl`</li>
                <li><strong>Font Weight:</strong> `font-thin`, `font-normal`, `font-medium`, `font-bold`</li>
                <li><strong>Text Color:</strong> `text-white`, `text-gray-400`, `text-red-500`</li>
                <li><strong>Text Alignment:</strong> `text-left`, `text-center`, `text-right`</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Layout: Flexbox</h2>
            <p className="opacity-90">
              Creating flexbox layouts is incredibly intuitive.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`flex`</strong>: Sets `display: flex`.</li>
                <li><strong>`flex-row` / `flex-col`</strong>: Sets `flex-direction`.</li>
                <li><strong>`justify-center` / `justify-between`</strong>: Sets `justify-content`.</li>
                <li><strong>`items-center` / `items-start`</strong>: Sets `align-items`.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Layout: Grid</h2>
            <p className="opacity-90">
              Grid is just as simple, allowing you to define complex 2D layouts.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="grid grid-cols-3 gap-4">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Borders & Backgrounds</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Background Color:</strong> `bg-white`, `bg-gray-800`, `bg-blue-500`</li>
                <li><strong>Border Radius:</strong> `rounded-sm`, `rounded`, `rounded-lg`, `rounded-full`</li>
                <li><strong>Border:</strong> `border`, `border-2`, `border-red-500`</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. State Variants: `hover`, `focus`</h2>
            <p className="opacity-90">
              Tailwind makes it easy to apply styles based on an element's state by using variant prefixes.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`hover:`</strong>: Applies when the user's mouse is over the element.</li>
                <li><strong>`focus:`</strong>: Applies when an element (like an input) is focused.</li>
                <li><strong>`disabled:`</strong>: Applies when an element is disabled.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<button class="bg-blue-500 hover:bg-blue-700 text-white">\n  Hover me\n</button>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Arbitrary Values</h2>
            <p className="opacity-90">
              If you need a specific value that isn't in the theme, you can use square brackets to generate it on the fly.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="top-[117px] bg-[#bada55]">...</div>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <ol className="list-decimal ml-6 space-y-3 opacity-90">
              <li><strong>Build with Utilities First:</strong> Try to build your entire design using only utility classes.</li>
              <li><strong>Don't Prematurely Abstract:</strong> It's okay to have a long list of classes. Only abstract when you find yourself repeating the *exact* same list.</li>
              <li><strong>Use IntelliSense:</strong> Install the official "Tailwind CSS IntelliSense" extension for VS Code.</li>
              <li><strong>Think Mobile-First:</strong> Apply base styles for mobile, then use responsive prefixes for larger screens.</li>
            </ol>
          </div>
        </div>
      );
    case 'tailwind-css-responsive-design':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">5.5: Tailwind CSS Responsive Design</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Responsive design is not an afterthought in Tailwind CSS; it's a core feature. Tailwind uses a powerful and intuitive <strong>mobile-first</strong> approach that makes creating adaptive layouts simple. Instead of writing separate CSS rules inside media queries, you apply responsive variants directly in your HTML.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Mobile-First by Default</h2>
            <p className="opacity-90">
              The fundamental principle is to design for the smallest screen first. Any utility class you apply without a prefix (e.g., `p-4`) will apply to **all screen sizes**. You then use responsive prefixes to override or add styles only at specific screen widths (breakpoints).
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. The Breakpoint Prefixes</h2>
            <p className="opacity-90">
              Tailwind comes with a set of default breakpoints. A prefix like `md:` applies a style *only* at that breakpoint and larger.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>No prefix:</strong> Mobile screens (base styles)</li>
                <li><strong>`sm:`</strong> (min-width: 640px) - For small tablets</li>
                <li><strong>`md:`</strong> (min-width: 768px) - For tablets</li>
                <li><strong>`lg:`</strong> (min-width: 1024px) - For laptops</li>
                <li><strong>`xl:`</strong> (min-width: 1280px) - For large desktops</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. How Prefixes Work</h2>
            <p className="opacity-90">
              The syntax is `[breakpoint]:[utility-class]`. This applies the utility class only when the screen width is *greater than or equal to* the breakpoint's value.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">4. Example: Responsive Card Layout</h2>
            <p className="opacity-90">
              Let's build a card that is vertical on mobile but horizontal on tablets and up.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="flex flex-col md:flex-row ...">'}\n  {/* ... content ... */}\n{'</div>'}
              </code></pre>
              <h3 className="font-bold mt-2">What this code does:</h3>
              <ul className="list-disc ml-6 space-y-2 opacity-90 mt-2">
                <li><strong>On mobile (default):</strong> `flex-col` makes the items stack vertically.</li>
                <li><strong>On medium screens and up (`md:`):</strong> The `md:flex-row` class activates, overriding the default and making the items display in a row.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. Example: Responsive Grid Columns</h2>
            <p className="opacity-90">
              This is the most common use case.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">'}\n  {/* ... grid items ... */}\n{'</div>'}
              </code></pre>
              <p className="mt-2 opacity-90">This creates a 1-column grid on mobile, a 2-column grid on small screens, and a 4-column grid on large screens.</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Responsive Typography</h2>
            <p className="opacity-90">
              You can easily change text size and alignment based on the breakpoint.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<h1 class="text-2xl text-center sm:text-3xl sm:text-left lg:text-4xl">...</h1>'}
              </code></pre>
              <p className="mt-2 opacity-90">This heading is 2xl and centered on mobile, but becomes 3xl and left-aligned on small screens, and 4xl on large screens.</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Hiding and Showing Elements</h2>
            <p className="opacity-90">
              You can show or hide elements at different breakpoints using the `hidden` and `block`/`flex`/`grid` utilities.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<!-- Only visible on medium screens and up -->\n<div class="hidden md:block">Desktop Menu</div>\n\n<!-- Visible on mobile, but hidden on medium screens and up -->\n<div class="block md:hidden">Mobile Menu</div>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Combining with State Variants</h2>
            <p className="opacity-90">
              You can chain responsive prefixes with state variants like `hover:`. The responsive prefix **always** comes first.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90"><strong>Syntax:</strong> `[breakpoint]:[state]:[utility-class]`</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<button class="bg-blue-500 md:hover:bg-red-500 ...">...</div>'}
              </code></pre>
              <p className="mt-2 opacity-90">This button is blue, but on medium screens and up, it turns red on hover.</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              This approach makes responsive design a natural part of your building process.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Always Start Mobile-First:</strong> Write your base styles for mobile, without any prefixes.</li>
                <li><strong>Scale Up:</strong> Widen your browser window. When the layout breaks or looks awkward, add a breakpoint prefix (`sm:`, `md:`, etc.) to adjust the styles for that screen size and larger.</li>
                <li><strong>Use `lg:` for Sidebars:</strong> A common pattern is to have content stack on mobile (`flex-col`) and become a sidebar layout on large screens (`lg:flex-row`).</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'tailwind-css-components':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">5.6: Tailwind CSS Components & Custom Styles</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              While Tailwind's utility-first approach is powerful, you will often find yourself reusing the same combination of utilities for common elements like buttons or cards. To avoid repeating long strings of classes, Tailwind provides strategies for abstracting these patterns into reusable <strong>components</strong> and custom classes.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Don't Repeat Yourself (DRY)</h2>
            <p className="opacity-90">
              The main goal is to follow the "Don't Repeat Yourself" principle. If you need to update a button's style, you should only have to do it in one place, not on every single button in your application.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. The "Problem": Long Class Strings</h2>
            <p className="opacity-90">
              While functional, this is hard to maintain. If you have 50 of these buttons, changing the padding means editing 50 HTML files.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">...</button>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Solution 1: The `@apply` Directive</h2>
            <p className="opacity-90">
              The `@apply` directive is Tailwind's tool for extracting utility patterns into your own custom CSS classes.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">You can create a `.btn-primary` class in your main CSS file:</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'/* In your main.css file */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer components {\n  .btn-primary {\n    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700;\n  }\n}'}
              </code></pre>
              <p className="opacity-90 mt-2">Now your HTML is much cleaner: `<button class="btn-primary">...</button>`</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Solution 2: Framework Components (Best Practice)</h2>
            <p className="opacity-90">
              When working with a framework like React or Vue, creating a reusable component is the best approach. You encapsulate both the structure and the styling.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// Button.jsx\nconst Button = ({ children }) => {\n  return (\n    <button className="py-2 px-4 bg-blue-500 ...">\n      {children}\n    </button>\n  );\n}\n\n// In another file\n<Button>Click Me</Button>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Solution 3: Arbitrary Values</h2>
            <p className="opacity-90">
              If you just need a single, specific style that isn't in your theme, use square brackets to generate a utility class on the fly.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<div class="mt-[117px]">...</div>\n<div class="bg-[#bada55]">...</div>'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Solution 4: Customizing Your Theme</h2>
            <p className="opacity-90">
              If you find yourself using arbitrary values often (like `bg-[#bada55]`), that's a sign you should add it to your theme in `tailwind.config.js`.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        \'brand-green\': \'#bada55\',\n      }\n    }\n  }\n}'}
              </code></pre>
              <p className="mt-2 opacity-90">Now you can just use the class `bg-brand-green`.</p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">7. Solution 5: Plugins</h2>
            <p className="opacity-90">
              Plugins are JavaScript packages that add new styles or utilities. The `@tailwindcss/forms` plugin, for example, provides a set of sensible default styles for form elements.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">8. Solution 6: Adding Base Styles</h2>
            <p className="opacity-90">
              If you need to add your own base styles (e.g., for all `&lt;h1&gt;` tags), you can use the `@layer` directive in your CSS.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'@layer base {\n  h1 {\n    @apply text-2xl font-bold;\n  }\n}'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy: When to Abstract?</h2>
            <p className="opacity-90">
              The key to using Tailwind effectively is knowing when to abstract.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Keep Utilities in HTML</strong> for layouts and unique components.</li>
                <li><strong>Use Framework Components (React/Vue)</strong> for repeated, interactive elements (like buttons, inputs). This is the best choice in a framework.</li>
                <li><strong>Use `@apply`</strong> for simple, non-interactive, repeated style sets (like a `card-title` class).</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'css-framework-comparison':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">5.7: CSS Framework Comparison & Best Practices</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Choosing a CSS framework is a key decision. The two dominant players, Bootstrap and Tailwind CSS, represent two very different philosophies. This chapter provides a direct comparison and a summary of best practices for working with any framework.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Spectrum of Abstraction</h2>
            <p className="opacity-90">
              Think of frameworks on a spectrum. On one end, you have high-level abstraction (pre-built components). On the other, low-level abstraction (tiny utilities).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Bootstrap (High Abstraction):</strong> Gives you a finished `.card`. It's easy to use but harder to change its fundamental appearance.</li>
                <li><strong>Tailwind CSS (Low Abstraction):</strong> Gives you the building blocks (`p-4`, `shadow-md`) to build your own custom card from scratch.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Head-to-Head: Bootstrap vs. Tailwind</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg overflow-x-auto">
              <table className="w-full text-left">
                  <thead className="border-b border-gray-600">
                      <tr>
                          <th className="py-2 font-bold">Aspect</th>
                          <th className="py-2 font-bold">Bootstrap</th>
                          <th className="py-2 font-bold">Tailwind CSS</th>
                      </tr>
                  </thead>
                  <tbody className="opacity-90 text-sm">
                      <tr className="border-b border-gray-600">
                          <td className="py-2"><strong>Philosophy</strong></td>
                          <td className="py-2">Component-Based</td>
                          <td className="py-2">Utility-First</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                          <td className="py-2"><strong>Speed of Development</strong></td>
                          <td className="py-2">Extremely fast for prototypes and standard layouts.</td>
                          <td className="py-2">Faster for custom designs in the long run.</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                          <td className="py-2"><strong>Customization</strong></td>
                          <td className="py-2">Difficult. Requires overriding existing styles.</td>
                          <td className="py-2">Infinitely customizable by nature.</td>
                      </tr>
                      <tr>
                          <td className="py-2"><strong>Final Look</strong></td>
                          <td className="py-2">Can lead to generic, "bootstrappy" websites.</td>
                          <td className="py-2">Allows for completely unique, bespoke designs.</td>
                      </tr>
                  </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Performance Comparison</h2>
            <p className="opacity-90">
              In a modern build process, both can be highly performant.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Bootstrap:</strong> You can import only the parts you need (using Sass) to reduce file size.</li>
                <li><strong>Tailwind CSS:</strong> Its JIT engine scans your files and generates a CSS file with **only the classes you use**. This "purging" results in a tiny final CSS file.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. The "Third Option": UI Libraries</h2>
            <p className="opacity-90">
              When working with JavaScript frameworks like React, dedicated UI libraries (e.g., Material-UI, Chakra UI) offer a third option. They provide pre-built, accessible, and interactive *React components*, combining the speed of Bootstrap with high customizability.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">5. Best Practice: Mobile-First</h2>
            <p className="opacity-90">
              Regardless of the framework, always design and build for the smallest screen first. Your base styles should be for mobile, and you should use responsive prefixes (`sm:`, `md:`, etc.) or media queries to add complexity for larger screens.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">6. Best Practice: Don't Fight the Framework</h2>
            <p className="opacity-90">
              This is the biggest mistake developers make. Choose a framework and embrace its philosophy.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>If you use Bootstrap, *use its components*. Don't override everything.</li>
                <li>If you use Tailwind, *use its utilities*. Don't write custom CSS classes for everything.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Best Practice: Customize via Configuration</h2>
            <p className="opacity-90">
              All good frameworks are designed to be customized at a foundational level.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">Instead of overriding `.btn-primary` in your own CSS, change the `$primary` variable in Bootstrap's Sass files. Instead of using `bg-[#bada55]` in Tailwind, add `brand-green: '#bada55'` to your `tailwind.config.js`. This ensures all components update consistently.</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Final Recommendation</h2>
            <p className="opacity-90">
              For modern web development, especially when aiming for custom designs, **Tailwind CSS** has become the industry favorite. Its utility-first approach offers unparalleled flexibility and results in highly maintainable and performant codebases. However, for rapid prototyping or building standard internal tools, **Bootstrap** remains an excellent and highly productive choice.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Your choice of framework defines your development workflow.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Rapid Prototyping:</strong> Use Bootstrap.</li>
                <li><strong>Custom Design:</strong> Use Tailwind CSS.</li>
                <li><strong>React-based App:</strong> Consider a UI Library like MUI or Chakra UI, or use Tailwind CSS (which is very popular with React).</li>
              </ol>
            </div>
          </div>
        </div>
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
IA
  }
};

export default Chapter5;