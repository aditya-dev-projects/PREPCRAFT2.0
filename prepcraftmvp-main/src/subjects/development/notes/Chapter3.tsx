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

// --- Main Chapter 3 Component ---

const Chapter3 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'html5-essentials':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">3.1: HTML5 Essentials & Semantic Elements</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Skeleton of a Building</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>HTML (HyperText Markup Language)</strong> is the "skeleton" of every website. It provides the fundamental structure and content. Just like a skeleton, it defines what and where things are, but it's not "pretty" on its own.</p>
            <p>Using a generic `&lt;div&gt;` is like using a generic "bone." Using <strong>HTML5 semantic elements</strong> like `&lt;header&gt;` or `&lt;footer&gt;` is like using the correct "skull" or "foot bone"—they give *meaning* and *purpose* to the structure.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>HTML</strong> is a <strong>markup language</strong>, not a programming language. It uses <strong>tags</strong> (e.g., `&lt;p&gt;`) to define elements. <strong>HTML5</strong> is the modern standard, which introduced crucial semantic elements for layout and new media tags.</p>
            <p><strong>Semantic Elements</strong> are HTML tags that provide *meaning* about the content they contain. They tell the browser and developer what the content *is*, not just what it looks like.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Why are they important?</strong>
                <ol className="list-decimal ml-6 mt-2">
                  <li><strong>Accessibility (a11y):</strong> Screen readers use them to navigate the page (e.g., "jump to main content").</li>
                  <li><strong>SEO (Search Engine Optimization):</strong> Search engines (like Google) use them to understand the page's structure and importance.</li>
                </ol>
              </li>
              <li><strong>Key Layout Tags:</strong>
                <ul>
                  <li><strong>`&lt;header&gt;`</strong>: Introductory content (logo, main navigation, site title).</li>
                  <li><strong>`&lt;nav&gt;`</strong>: Contains the main navigation links.</li>
                  <li><strong>`&lt;main&gt;`</strong>: The dominant, unique content of the page. (Should only be one).</li>
                  <li><strong>`&lt;footer&gt;`</strong>: Closing content (copyright, contact info, sitemap).</li>
                  <li><strong>`&lt;section&gt;`</strong>: A thematic grouping of content (e.g., "Features," "Contact Us").</li>
                  <li><strong>`&lt;article&gt;`</strong>: A self-contained piece of content that could stand on its own (e.g., a blog post, a news story).</li>
                  <li><strong>`&lt;aside&gt;`</strong>: Tangentially related content, like a sidebar.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Modern HTML5 Page Structure</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the standard boilerplate for a modern, semantic HTML5 page. This structure is what search engines and screen readers look for.</p>
            <CodeBlock code={`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Semantic Page</title>
</head>
<body>

  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>My First Blog Post</h2>
      <p>This is the main content of my blog post...</p>
    </article>
    
    <section>
      <h3>Comments</h3>
      <p>No comments yet.</p>
    </section>
  </main>

  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="/post2">Another Post</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>

</body>
</html>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the real difference between `&lt;section&gt;` and `&lt;article&gt;`?</strong>
                <p className="pl-4">An <strong>`&lt;article&gt;`</strong> is for content that is self-contained and could be syndicated (like a blog post, a tweet, or a news story). A <strong>`&lt;section&gt;`</strong> is for grouping content that is thematically related, but wouldn't make sense on its own (like a "Contact Us" section, or the "Comments" section of a blog post).</p>
              </li>
              <li>
                <strong>Why can't I just use `&lt;div&gt;`s for everything?</strong>
                <p className="pl-4">You can, but it's a very bad practice known as "div-itis." A page made of only `&lt;div&gt;`s has no *meaning*. A screen reader can't tell the header from the footer, and a search engine can't tell your main content from an advertisement. Using semantic tags makes your site accessible and easier to maintain.</p>
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
    case 'html-complete-guide':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">3.2: HTML Complete Guide (Forms, Media, Tables)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Rest of the Blueprint</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>If semantic elements are the "rooms" of your house (header, main, footer), then these tags are the critical "fixtures" and "appliances" that make the house functional.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Forms (`&lt;form&gt;`):</strong> The "kitchen appliances." They are the interactive tools (like the stove and sink) that let the user *send information back* to the server.</li>
              <li><strong>Media (`&lt;video&gt;`):</strong> The "television." A self-contained object that lets you display complex media.</li>
              <li><strong>Tables (`&lt;table&gt;`):</strong> The "spreadsheet." Used *only* for displaying data in a grid (tabular data), not for building the layout of the house.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>1. Forms (`&lt;form&gt;`):</strong><br/>
            Forms are the primary way to collect user input. The `&lt;form&gt;` tag is a container for form controls.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Attributes:</strong>
                <ul>
                  <li>`action`: The URL where the form data will be sent.</li>
                  <li>`method`: The HTTP method to use. <strong>`GET`</strong> (appends data to URL, for search) or <strong>`POST`</strong> (sends data in request body, for sensitive info like passwords).</li>
                </ul>
              </li>
              <li><strong>Essential Controls:</strong>
                <ul>
                  <li><strong>`&lt;label for="id"&gt;`</strong>: This is critical for accessibility. The `for` attribute must match the `id` of the input, linking them.</li>
                  <li><strong>`&lt;input id="id"&gt;`</strong>: The most common control. Its `type` attribute changes its function:
                    <ul>
                      <li>`type="text"`, `type="password"`, `type="email"`, `type="number"`, `type="date"`</li>
                      <li>`type="checkbox"` (for multiple selections)</li>
                      <li>`type="radio"` (for a single selection from a group; all must share the same `name` attribute).</li>
                    </ul>
                  </li>
                  <li><strong>`&lt;textarea&gt;`</strong>: For multi-line text input.</li>
                  <li><strong>`&lt;select&gt;` / `&lt;option&gt;`</strong>: For a dropdown menu.</li>
                  <li><strong>`&lt;button type="submit"&gt;`</strong>: Submits the form.</li>
                </ul>
              </li>
            </ul>
            
            <p className="mt-4"><strong>2. Media (`&lt;video&gt;`, `&lt;audio&gt;`):</strong><br/>
            HTML5 native tags for embedding media without plugins.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`controls`</strong>: Shows the default play/pause/volume controls.</li>
              <li><strong>`autoplay`</strong>: Starts playing automatically (often requires `muted` to work in modern browsers).</li>
              <li><strong>`&lt;source src="..." type="..."&gt;`</strong>: Allows you to provide multiple file formats (e.g., .mp4, .webm) for browser compatibility.</li>
            </ul>

            <p className="mt-4"><strong>3. Tables (`&lt;table&gt;`):</strong><br/>
            Used *only* for displaying data in a grid (tabular data). Do not use tables for page layout.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`&lt;table&gt;`</strong>: The main container.</li>
              <li><strong>`&lt;thead&gt;`</strong>: The table header (grouping for header row).</li>
              <li><strong>`&lt;tbody&gt;`</strong>: The table body (grouping for data rows).</li>
              <li><strong>`&lt;tr&gt;`</strong>: A table row.</li>
              <li><strong>`&lt;th&gt;`</strong>: A table header cell (bold and centered by default).</li>
              <li><strong>`&lt;td&gt;`</strong>: A table data cell.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Comprehensive HTML Form</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This example demonstrates various form controls, all semantically linked with `&lt;label&gt;` tags.</p>
            <CodeBlock code={`
<form action="/submit-form" method="POST">
  
  <!-- Text Input -->
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
  </div>

  <!-- Radio Buttons (Same 'name' attribute) -->
  <fieldset>
    <legend>Account Type:</legend>
    <input type="radio" id="personal" name="account_type" value="personal">
    <label for="personal">Personal</label>
    <br>
    <input type="radio" id="corporate" name="account_type" value="corporate">
    <label for="corporate">Corporate</label>
  </fieldset>

  <!-- Select Dropdown -->
  <div>
    <label for="region">Region:</label>
    <select id="region" name="region">
      <option value="">--Please choose an option--</option>
      <option value="na">North America</option>
      <option value="eu">Europe</option>
    </select>
  </div>

  <!-- Textarea -->
  <div>
    <label for="comments">Comments:</label>
    <textarea id="comments" name="comments" rows="5"></textarea>
  </div>
  
  <!-- Checkbox -->
  <div>
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">I agree to the terms and conditions</label>
  </div>

  <!-- Submit Button -->
  <div>
    <button type="submit">Submit</button>
  </div>

</form>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>When should I use `GET` vs. `POST` for a form?</strong>
                <p className="pl-4">Use <strong>`GET`</strong> for non-sensitive data that *retrieves* information, like a search query. The data is visible in the URL. Use <strong>`POST`</strong> for sensitive data or data that *changes* something on the server, like a user login, a signup form, or creating a new post. The data is sent in the request body, not the URL.</p>
              </li>
              <li>
                <strong>Why is `&lt;label for="id"&gt;` so important?</strong>
                <p className="pl-4">It has two key benefits. 1) **Accessibility:** It programmatically links the label text to the form control, so a screen reader will read the label when the user focuses the input. 2) **Usability:** The user can now click on the *label's text* to focus the input field, which is a much larger target area.</p>
              </li>
              <li>
                <strong>Is it okay to use `&lt;table&gt;` for my website's layout?</strong>
                <p className="pl-4">No. This was a common practice in the 1990s but is now considered a very bad practice. Tables are not flexible, are terrible for responsive design, and are semantically incorrect. Use CSS Grid and Flexbox for layout. Only use `&lt;table&gt;` for what it was made for: displaying tabular data (like a spreadsheet).</p>
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
    case 'css3-complete-guide':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">3.3: CSS3 Complete Guide (Selectors & Box Model)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Interior Designer's Toolkit</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>If HTML is the "skeleton," <strong>CSS (Cascading Style Sheets)</strong> is the "paint, wallpaper, and furniture." It's the language you use to make the website look good.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Selectors:</strong> These are *how you choose* what to style. (e.g., "I want to paint all the `&lt;h1&gt;` tags," or "I want to style only the item with the class `.fancy-button`").</li>
              <li><strong>The Box Model:</strong> This is the *most important* concept. It's the "blueprint" for every single element, showing you its size, padding (stuffing), border, and margin (personal space).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The entire language is based on a **CSS Rule**: `selector {'{'} property: value; {'}'}`.</p>
            <p><strong>1. Selectors (How to target elements):</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Element:</strong> `p` (Selects all `&lt;p&gt;` tags).</li>
              <li><strong>Class:</strong> `.my-class` (Selects all elements with `class="my-class"`). This is the most common and reusable selector.</li>
              <li><strong>ID:</strong> `#my-id` (Selects the *one* element with `id="my-id"`). Use sparingly.</li>
              <li><strong>Descendant:</strong> `nav a` (Selects all `&lt;a&gt;` tags *anywhere inside* a `&lt;nav&gt;`).</li>
              <li><strong>Child:</strong> `ul &gt; li` (Selects only `&lt;li&gt;` tags that are *direct children* of a `&lt;ul&gt;`).</li>
              <li><strong>Pseudo-class:</strong> `:hover` (Selects an element when the mouse is on it), `:focus` (when an input is selected).</li>
            </ul>
            <p><strong>2. Specificity (Which rule wins):</strong><br/>
            If two rules target the same element, the *most specific* selector wins. The hierarchy is:
            <strong>Inline Style</strong> (wins) &gt; <strong>ID</strong> &gt; <strong>Class</strong> &gt; <strong>Element</strong> (loses).</p>
            
            <p className="mt-4"><strong>3. The CSS Box Model:</strong><br/>
            Every element is a box with four layers (from inside-out):</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Content:</strong> The text or image itself.</li>
              <li><strong>Padding:</strong> The transparent space *inside* the border.</li>
              <li><strong>Border:</strong> The "frame" around the padding.</li>
              <li><strong>Margin:</strong> The transparent space *outside* the border, separating it from other elements.</li>
            </ul>
            <p><strong>`box-sizing: border-box;` (Essential):</strong><br/>
            By default, `width: 100px` applies *only* to the content. This is confusing. `border-box` changes this so that `width: 100px` is the *total width* including padding and border. You should apply this to all elements.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Box Model & `border-box`</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows the difference `box-sizing: border-box;` makes. The second box is intuitive; its total width is exactly `200px`.</p>
            <CodeBlock code={`
<style>
  /* This is a modern CSS reset, highly recommended */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 10px solid black;
    margin-bottom: 20px;
  }
  
  #box-default {
    /* Default behavior: Total width is 200px + 40px padding + 20px border = 260px */
    box-sizing: content-box; 
    background-color: #ffcccc;
  }

  #box-border {
    /* border-box: Total width is EXACTLY 200px (content scales down) */
    box-sizing: border-box;
    background-color: #ccffcc;
  }
</style>

<div id="box-default" class="box">
  I am 260px wide in total.
</div>
<div id="box-border" class="box">
  I am 200px wide in total.
</div>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between a `class` and an `ID`?</strong>
                <p className="pl-4">An <strong>`ID`</strong> (e.g., `#header`) must be **unique** on the page. It's for selecting one specific element. A <strong>`class`</strong> (e.g., `.button`) is **reusable** and can be applied to many elements. Best practice is to *style with classes* and *reserve IDs* for JavaScript hooks or page anchors.</p>
              </li>
              <li>
                <strong>What's the difference between `padding` and `margin`?</strong>
                <p className="pl-4">This is the most fundamental box model question. <strong>`padding`</strong> is the space *inside* the border (between the content and the border). <strong>`margin`</strong> is the space *outside* the border (between this element and its neighbors). If you want to make a button "fatter," you add `padding`. If you want to push it *away* from another element, you add `margin`.</p>
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
    case 'css-layout':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">3.4: CSS Layout (Flexbox & Grid)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Room Layout System</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>In the past, CSS layout was like trying to arrange furniture in zero gravity (using "floats"). Modern CSS gives you two powerful tools for organizing your page:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Flexbox (1-Dimension):</strong> This is for arranging items in a *single line* (either a row or a column). It's perfect for a <strong>bookshelf</strong>. You can decide if the books are spaced out, centered, or start at one end.</li>
              <li><strong>Grid (2-Dimensions):</strong> This is for arranging items in *rows and columns at the same time*. It's perfect for a <strong>newspaper layout</strong>. You can define a 2D grid and specify that "the headline spans all 3 columns" and "the sidebar takes up the last column."</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Flexbox (1D Layout):</strong><br/>
            You apply `display: flex;` to a parent container to make its direct children "flex items."</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Parent Properties (on the container):</strong>
                <ul>
                  <li>`flex-direction`: `row` (default) or `column`.</li>
                  <li>`justify-content`: Aligns items on the **main axis** (horizontal if `row`). Values: `flex-start`, `center`, `flex-end`, `space-between`.</li>
                  <li>`align-items`: Aligns items on the **cross axis** (vertical if `row`). Values: `flex-start`, `center`, `flex-end`, `stretch`.</li>
                </ul>
              </li>
              <li><strong>Child Properties (on the items):</strong>
                <ul>
                  <li>`flex-grow: 1`: Allows this item to "grow" and fill any available space.</li>
                </ul>
              </li>
            </ul>

            <p className="mt-4"><strong>Grid (2D Layout):</strong><br/>
            You apply `display: grid;` to a parent container.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Parent Properties (on the container):</strong>
                <ul>
                  <li>`grid-template-columns`: Defines the columns. The **`fr` (fractional) unit** is key. `1fr 1fr 1fr` means "three equal columns." `2fr 1fr` means "two columns, the first twice as wide as the second."</li>
                  <li>`grid-template-rows`: Defines the height of rows.</li>
                  <li>`gap`: Sets the spacing (gutter) *between* items.</li>
                </ul>
              </li>
              <li><strong>Child Properties (on the items):</strong>
                <ul>
                  <li>`grid-column: 1 / 3`: Makes the item start on grid line 1 and end on grid line 3 (spanning 2 columns).</li>
                  <li>`grid-row: 1 / 3`: Makes the item span 2 rows.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: "Holy Grail" Layout with Grid & Flexbox</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the classic layout. We use **Grid** for the main page structure and **Flexbox** to align the items *inside* the header.</p>
            <CodeBlock code={`
<style>
  body {
    font-family: sans-serif;
    margin: 0;
  }
  
  .grid-container {
    display: grid;
    /* Define 3 columns: 200px sidebar, 1fr main, 200px sidebar */
    grid-template-columns: 200px 1fr 200px;
    /* Define 3 rows: 100px header, auto main, 100px footer */
    grid-template-rows: 100px 1fr 100px;
    height: 100vh;
  }

  /* --- GRID ITEMS --- */
  .header {
    grid-column: 1 / 4; /* Span all 3 columns */
    background: #f1f1f1;

    /* --- FLEXBOX (for internal layout) --- */
    display: flex;
    justify-content: space-between; /* Pushes items to ends */
    align-items: center; /* Vertically center */
    padding: 0 20px;
  }

  .nav {
    grid-column: 1 / 2;
    background: #f9f9f9;
  }
  
  .main {
    grid-column: 2 / 3;
    padding: 20px;
  }
  
  .ads {
    grid-column: 3 / 4;
    background: #f9f9f9;
  }
  
  .footer {
    grid-column: 1 / 4; /* Span all 3 columns */
    background: #333;
    color: white;
  }
</style>

<div class="grid-container">
  <header class="header">
    <div>Logo</div>
    <nav>Nav Links</nav>
  </header>
  <aside class="nav">Left Sidebar</aside>
  <main class="main">Main Content...</main>
  <aside class="ads">Right Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>When do I use Flexbox vs. Grid? This is confusing!</strong>
                <p className="pl-4">This is the most common question. The best practice is:
                  * Use <strong>Grid</strong> for the overall <strong>page layout</strong> (2D: rows AND columns).
                  * Use <strong>Flexbox</strong> for <strong>component-level alignment</strong> (1D: a row OR a column).
                  * In the example above, we use Grid for the page and Flexbox *inside* the header to align the logo and nav links.</p>
              </li>
              <li>
                <strong>What is `justify-content` vs. `align-items` in Flexbox?</strong>
                <p className="pl-4"><strong>`justify-content`</strong> aligns items along the *main axis* (horizontally, if `flex-direction: row`). <strong>`align-items`</strong> aligns items along the *cross axis* (vertically, if `flex-direction: row`).</p>
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
    case 'css-animations':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">3.5: CSS Animations & Transitions</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Bringing the Page to Life</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>CSS motion tools are what separate a "static" page from a "live" app.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`transition` (The Simple Change):</strong> This is a smooth, <strong>A-to-B</strong> change. Think of a light dimmer. When you hover over a button, it doesn't just *snap* to a new color; it *fades* smoothly over 0.3 seconds.</li>
              <li><strong>`animation` (The Complex Movie):</strong> This is a multi-step "movie" that you control with <strong>keyframes</strong>. It's for complex sequences, like a loading spinner that spins 360 degrees *infinitely*.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>1. Transitions:</strong><br/>
            Animate a property change smoothly from one state to another. They are typically triggered by a pseudo-class like `:hover`.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`transition-property`</strong>: The property to animate (e.g., `background-color`, `transform`).</li>
              <li><strong>`transition-duration`</strong>: How long the change should take (e.g., `0.3s` or `300ms`).</li>
              <li><strong>`transition-timing-function`</strong>: The "speed curve" (e.g., `ease-in-out`).</li>
              <li><strong>Shorthand:</strong> `transition: [property] [duration] [timing-function];`
                <br/>(e.g., `transition: background-color 0.3s ease-out;`)</li>
            </ul>

            <p className="mt-4"><strong>2. Animations:</strong><br/>
            A two-step process: you *define* the animation, then *apply* it.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`@keyframes [name]`</strong>: The definition. You set "stops" from `0%` (or `from`) to `100%` (or `to`).</li>
              <li><strong>`animation` property:</strong> The application. This shorthand includes:
                <ul>
                  <li>`animation-name`: The name you defined in `@keyframes`.</li>
                  <li>`animation-duration`: (e.g., `2s`).</li>
                  <li>`animation-iteration-count`: (e.g., `infinite` to loop forever).</li>
                  <li>`animation-timing-function`: (e.g., `linear` for a steady spin).</li>
                </ul>
              </li>
            </ul>

            <p className="mt-4"><strong>3. Performance (CRITICAL):</strong><br/>
            For smooth, 60fps animations, you should **only** animate two properties:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`transform`</strong>: (e.g., `translate`, `scale`, `rotate`). Moves an element without recalculating layout.</li>
              <li><strong>`opacity`</strong>: Fades an element in or out.</li>
            </ul>
            <p>Animating properties like `width`, `height`, `margin`, or `left` is **slow**. It causes "layout thrashing" (the browser has to recalculate the whole page) and results in "janky" or "stuttery" animation.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Transition (Hover) & Animation (Spin)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Hover the button to see the `transition`. The spinner will `animation` on its own.</p>
            <CodeBlock code={`
<style>
  /* --- 1. Transition Example --- */
  .my-button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    /* Tell the browser to "transition" the 'transform' and 'background-color'
      properties smoothly over 0.3 seconds.
    */
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  .my-button:hover {
    background-color: #0056b3;
    transform: scale(1.1); /* Makes the button 10% bigger */
  }

  /* --- 2. Animation Example --- */

  /* A. Define the animation "movie" */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    margin-top: 20px;

    /* B. Apply the animation */
    animation: spin 1s linear infinite; /* name duration timing-function iteration-count */
  }
</style>

<button class="my-button">Hover Me!</button>

<div class="spinner"></div>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>My animation is "janky" or "stuttery". What's the most likely cause?</strong>
                <p className="pl-4">You are almost certainly animating a layout-heavy property like `width`, `height`, or `left`/`top`. These properties force the browser to recalculate the entire page layout on every frame. You **must** refactor your code to *only* animate `transform` and `opacity`. For example, instead of animating `left: 0` to `left: 100px`, you should animate `transform: translateX(0)` to `transform: translateX(100px)`.</p>
              </li>
              <li>
                <strong>When do I use a `transition` vs. an `animation`?</strong>
                <p className="pl-4">Use a <strong>`transition`</strong> for simple, two-state changes that are triggered by a user (like `:hover` or adding a class). Use an <strong>`animation`</strong> for complex, multi-step sequences that can run on their own (like a loading spinner) or need to loop.</p>
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
    case 'responsive-design':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">3.6: Responsive Design & Media Queries</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Liquid Layout</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A non-responsive website is like a block of ice. It has a fixed size. If you try to fit it into a small cup (a phone), it will overflow and break.</p>
            <p>A <strong>responsive website</strong> is like water. It's a "liquid layout" that *adapts* to whatever container it's poured into. It looks great in a small cup (phone), a bowl (tablet), or a large tub (desktop monitor).</p>
            <p><strong>Media Queries</strong> are the "if statements" that allow this: "IF the container is a cup, stack everything in one column. IF the container is a tub, spread out into three columns."</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Responsive Web Design (RWD)</strong> is the practice of building one website that adapts its layout to fit any screen size. This is a non-negotiable, core requirement of all modern web development.</p>
            <p><strong>1. The Viewport Meta Tag (CRITICAL):</strong><br/>
            You MUST add this tag to the `&lt;head&gt;` of your HTML. Without it, mobile browsers will "lie" about their size and try to show the whole desktop site, which will be tiny and unreadable.</p>
            <Code>
              &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            </Code>

            <p className="mt-4"><strong>2. The "Mobile-First" Approach:</strong><br/>
            This is the professional standard. You write your default CSS for the *smallest screen* (mobile) first. Then, you use <strong>`min-width` media queries</strong> to *add* complexity as the screen gets *larger*.</p>
            
            <p className="mt-4"><strong>3. Media Queries (`@media`):</strong><br/>
            This is the CSS "if-statement" that applies styles only if a condition is met. A "breakpoint" is the width at which your layout changes.</p>
            <Code>
              @media (min-width: 768px) {'{ ... }'}
            </Code>
            <p>(The styles inside this block will *only* apply to screens 768px or *wider*).</p>

            <p className="mt-4"><strong>4. Fluid Units & Images:</strong><br/>
            * Avoid fixed <Code>px</Code> widths for layouts. Use <strong>`%`</strong>, <strong>`rem`</strong>, or <strong>`fr`</strong> units.
            * Make images responsive: <Code>img {'{'} max-width: 100%; height: auto; {'}'}</Code>. This prevents them from overflowing their containers.
            </p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Mobile-First Grid Layout</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This layout is a single column by default (Mobile-First). On a tablet (`768px`), it becomes 2 columns. On a desktop (`1024px`), it becomes 3.</p>
            <CodeBlock code={`
<style>
  .grid-container {
    display: grid;
    gap: 1rem;
    
    /* 1. Mobile-First Default:
      A single column (1fr means "1 fraction", or 100%)
    */
    grid-template-columns: 1fr;
  }

  /* 2. Tablet Breakpoint:
    @media (min-width: 768px) means "on screens 768px or wider"
  */
  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr 1fr; /* 2 equal columns */
    }
  }

  /* 3. Desktop Breakpoint:
    @media (min-width: 1024px) means "on screens 1024px or wider"
  */
  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
    }
  }

  /* --- Demo styles --- */
  .grid-item { background: #f0f0f0; padding: 20px; text-align: center; }
</style>

<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>
            `} language="html" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between `rem` and `em` units?</strong>
                <p className="pl-4"><strong>`em`</strong> is relative to the font-size of its *direct parent element*. This can be confusing, as nesting can cause `1em` to be a different size all over your page. <strong>`rem` (Root EM)</strong> is relative *only* to the font-size of the `&lt;html&gt;` (root) element. `rem` is the modern standard for building accessible, scalable layouts. Use `rem` for fonts, padding, and margins.</p>
              </li>
              <li>
                <strong>What is the viewport meta tag and why is it essential?</strong>
                <p className="pl-4">Without it, mobile browsers will pretend to be a desktop browser (e.g., 980px wide) and just "zoom out" to show your desktop layout. This results in tiny, unreadable text. The tag `&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;` tells the browser, "Stop lying. Set your *actual* width to the device's screen width and don't zoom out." This allows your media queries to work correctly.</p>
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
    case 'css-preprocessors':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">3.7: CSS Preprocessors (Sass/SCSS)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: CSS with Superpowers</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Writing plain CSS is like writing a long book by hand. If you want to change the main character's name, you have to find and replace it on every single page. A <strong>CSS Preprocessor (like Sass)</strong> is like using a modern word processor.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Variables:</strong> You define the character's name (`$primary-color: blue;`) once at the top. If you want to change it, you change it in one place.</li>
              <li><strong>Partials & Import:</strong> You can write each chapter in a separate file (`_buttons.scss`, `_layout.scss`) and have the compiler automatically combine them into one book.</li>
              <li><strong>Mixins:</strong> You can create reusable "snippets" (like a flexbox centering mixin) and "paste" them anywhere you need.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A **CSS Preprocessor** is a tool that **compiles** an advanced syntax into regular, browser-readable CSS. The browser *never* sees your Sass code, only the final `.css` output.</p>
            <p>The most popular preprocessor is <strong>Sass (Syntactically Awesome Style Sheets)</strong>, which uses the <strong>SCSS syntax</strong>. SCSS is a "superset" of CSS, meaning all valid CSS is also valid SCSS.</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Variables (`$`):</strong> Reusable values. (`$primary-color: #333;`).</li>
              <li><strong>Nesting:</strong> Nest your CSS selectors to match your HTML hierarchy. This makes code more readable but can be overused.</li>
              <li><strong>Parent Selector (`&`):</strong> Used for nesting pseudo-classes (like `&:hover`) or modifying the parent selector.</li>
              <li><strong>Partials (`_`) & `@import`:</strong> Split your code into smaller files (e.g., `_variables.scss`). The underscore tells Sass this file is *only* for importing. You then import them *without* the underscore: `@import 'variables';`.</li>
              <li><strong>Mixins (`@mixin`/`@include`):</strong> Reusable blocks of styles, like a function.
                <ul>
                  <li>`@mixin flex-center {'{'} display: flex; ... {'}'}`</li>
                  <li>`.container {'{'} @include flex-center; {'}'}`</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Practical SCSS File</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This `.scss` file shows all the major features working together.</p>
            <CodeBlock code={`
/* 1. Variables */
$primary-color: #007BFF;
$base-font-size: 16px;

/* 2. Mixin */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 3. Nesting */
nav {
  background-color: #f1f1f1;
  padding: 1rem;
  
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 10px;
  }
  
  a {
    color: $primary-color; // Using variable
    
    /* 4. Parent Selector (&) */
    &:hover {
      text-decoration: underline;
    }
  }
}

.my-container {
  @include flex-center; // Using mixin
}
            `} language="scss" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Does the browser read my `.scss` file?</strong>
                <p className="pl-4">No. The browser *only* reads CSS. You must use a "compiler" (like the `sass` command or a build tool like Vite/Webpack) to convert your `.scss` file into a `.css` file *before* you deploy your site. Your HTML file will only link to the final `styles.css`.</p>
              </li>
              <li>
                <strong>What's the danger of "over-nesting" in Sass?</strong>
                <p className="pl-4">Nesting is great, but if you nest 5 or 6 levels deep, Sass will compile that into an *extremely specific* CSS selector (e.g., `nav ul li a span`). This selector is hard to override (leading to `!important`), has high specificity, and is inefficient. Best practice is to nest no more than 3 levels deep.</p>
              </li>
              <li>
                <strong>Are Sass variables the same as CSS variables?</strong>
                <p className="pl-4">No. Sass variables (`$my-var`) are *compile-time*. They don't exist in the final CSS file. CSS Custom Properties (`--my-var`) are *runtime* variables. They *do* exist in the final CSS and can be changed live with JavaScript.</p>
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
    case 'browser-developer-tools':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">3.8: Browser Developer Tools</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Car Mechanic's Toolkit</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>You can't fix a car just by looking at it. You need to open the hood and use diagnostic tools. <strong>Developer Tools</strong> (F12 or "Inspect") are your essential, built-in diagnostic toolkit for any website.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Elements Tab:</strong> An "X-ray" that shows you the live HTML structure and lets you change the "paint color" (CSS) in real-time.</li>
              <li><strong>Console Tab:</strong> The "engine diagnostic" that shows you *error codes* (JavaScript errors) and status messages (`console.log`).</li>
              <li><strong>Network Tab:</strong> The "fuel line monitor" that shows what data (API requests, images) is flowing in and out, and how fast.</li>
              <li><strong>Application Tab:</strong> The "glove box" and "trunk" where things are stored (Local Storage, Session Storage, Cookies).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>DevTools</strong> are a suite of tools built into all modern browsers for debugging and inspecting a web page. You can open them with **F12** or by **right-clicking and selecting "Inspect"**.</p>
            <p><strong>Key Tabs for Developers:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Elements Tab:</strong>
                <ul>
                  <li>Shows the live <strong>DOM (Document Object Model)</strong>, which may be different from your source HTML after JavaScript has run.</li>
                  <li>The **Styles Pane** is the most powerful feature. It shows you *exactly* which CSS rules are being applied to a selected element and which ones are being overridden (crossed out).</li>
                  <li>You can **live-edit CSS** by checking/unchecking boxes, or typing new properties. These changes are *temporary* and reset on refresh.</li>
                </ul>
              </li>
              <li><strong>Console Tab:</strong>
                <ul>
                  <li>Displays all <strong>JavaScript errors</strong> (e.g., `TypeError: Cannot read properties of undefined`).</li>
                  <li>Shows all output from <strong>`console.log()`</strong>, which is your primary JS debugging tool.</li>
                  <li>Acts as a <strong>REPL</strong> (Read-Eval-Print Loop) where you can type JavaScript to interact with the live page.</li>
                </ul>
              </li>
              <li><strong>Network Tab:</strong>
                <ul>
                  <li>Logs all network requests. You can filter by type (XHR/Fetch, JS, CSS, Img).</li>
                  <li>Lets you check <strong>HTTP Status Codes</strong> (e.g., `200 OK`, `404 Not Found`, `500 Server Error`).</li>
                  <li>Lets you inspect the <strong>Payload</strong> (data sent) and <strong>Response</strong> (data received) of API calls, crucial for debugging React apps.</li>
                </ul>
              </li>
              <li><strong>Application Tab:</strong>
                <ul>
                  <li>Lets you inspect and clear browser storage: <strong>Local Storage</strong>, <strong>Session Storage</strong>, and <strong>Cookies</strong>. This is essential for debugging authentication.</li>
                </ul>
              </li>
              <li><strong>Device Toggler:</strong> A small icon that lets you simulate different screen sizes (like an iPhone or iPad) to test your responsive design.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: How to Debug a CSS Problem</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a "workflow" example, not runnable code.
            <br/><strong>Problem:</strong> Your button is supposed to be blue, but it's red.</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Right-click</strong> the button and choose <strong>"Inspect"</strong>.</li>
              <li>The <strong>Elements</strong> tab opens with the `&lt;button&gt;` highlighted.</li>
              <li>Look at the <strong>Styles</strong> pane. You will see all the CSS rules targeting this button.</li>
              <li>You will likely see your rule: <Code>.my-button {'{'} color: blue; {'}'}</Code></li>
              <li>...but *below it*, you'll see a *more specific* rule that is winning: <Code>header .my-button {'{'} color: red; {'}'}</Code> (and your `color: blue` will be crossed out).</li>
              <li><strong>The Fix:</strong> You now know you need to either remove the other rule or make your `blue` rule more specific. You can test this live by unchecking the `color: red` rule in DevTools.</li>
            </ol>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>My JavaScript isn't working, and there are no errors in the console. What's my first step?</strong>
                <p className="pl-4">Use `console.log()` at every single step of your logic. Log your variables, log "I am here" inside functions, and log the data you receive. This is the fastest way to trace your code's execution and find out *where* it's stopping or what variable has the wrong value (e.g., `undefined`).</p>
              </li>
              <li>
                <strong>My React app is making an API call, but no data shows up. How do I debug?</strong>
                <p className="pl-4">Open the <strong>Network Tab</strong>. Find the API call (e.g., 'users'). Check its **Status Code**.
                  * If it's `404`, your URL is wrong.
                  * If it's `500`, the *server* crashed.
                  * If it's `403` or `401`, your authentication token is missing or wrong.
                  * If it's `200 OK`, click it, check the **Response** tab, and make sure the JSON structure you *received* matches the structure your code *expects*.</p>
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

export default Chapter3;