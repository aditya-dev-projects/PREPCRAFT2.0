import React from 'react';

const Chapter3 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'html5-essentials':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">3.1: HTML5 Essentials & Semantic Elements</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              HTML, or <strong>HyperText Markup Language</strong>, is the universal language for creating the structure and content of web pages. HTML5 is the modern standard, introducing new features and, most importantly, <strong>semantic elements</strong> that give meaning to your content.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: HTML as Structure</h2>
            <p className="opacity-90">
              HTML is the "skeleton" of a webpage. It is not a programming language; it is a markup language. It uses tags to describe and organize the content, telling the browser *what* each piece of content is (e.g., "this is a heading," "this is a paragraph").
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. What is HTML5?</h2>
            <p className="opacity-90">
              HTML5 is the latest evolution of the HTML standard. It was introduced to solve modern web challenges, such as the need to play video and audio without plugins (like Flash) and the need for more descriptive, meaningful page structures.
            </p>

            <h2 className="text-2xl font-semibold pt-4">3. The Basic Document Structure</h2>
            <p className="opacity-90">
              Every HTML5 file must begin with this standard "boilerplate" structure to be valid.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Page Title</title>\n</head>\n<body>\n  <!-- All visible content goes here -->\n</body>\n</html>'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. The `&lt;head&gt;` Element in Detail</h2>
            <p className="opacity-90">
              The `&lt;head&gt;` section contains meta-information that is not displayed on the page but is vital for the browser and search engines.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`&lt;meta charset="UTF-8"&gt;`</strong>: Declares the character encoding for the page, ensuring all text and symbols display correctly.</li>
                <li><strong>`&lt;meta name="viewport" ...&gt;`</strong>: Essential for responsive design. It tells mobile browsers to render the page at the device's width.</li>
                <li><strong>`&lt;title&gt;`</strong>: Sets the text that appears on the browser tab and in search engine results.</li>
                <li><strong>`&lt;link&gt;`</strong>: Used to link to external files, most commonly your CSS stylesheet.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. Core Text Elements: Headings & Paragraphs</h2>
            <p className="opacity-90">
              These are the most common tags for structuring text content.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`&lt;h1&gt;` to `&lt;h6&gt;`</strong>: Heading tags. `&lt;h1&gt;` is for the main page title (you should only have one per page), and the numbers decrease in importance.</li>
                <li><strong>`&lt;p&gt;`</strong>: The paragraph tag. Used for all standard blocks of text.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Text Formatting: `strong` and `em`</h2>
            <p className="opacity-90">
              These tags add semantic meaning to your text, not just visual styling.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`&lt;strong&gt;`</strong>: Indicates that the text is of strong importance, seriousness, or urgency. Browsers render this as bold.</li>
                <li><strong>`&lt;em&gt;`</strong>: Used for emphasis. Browsers render this as italic.</li>
                <li><strong>Note:</strong> Avoid using the old `&lt;b&gt;` and `&lt;i&gt;` tags, as they provide no semantic meaning.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">7. Hyperlinks (The `&lt;a&gt;` tag)</h2>
            <p className="opacity-90">
              The anchor (`&lt;a&gt;`) tag is what makes the web a "web." It creates a hyperlink to other documents.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`href` (Hypertext Reference):</strong> The most important attribute. This specifies the URL the link will point to.</li>
                <li><strong>`target="_blank"`:</strong> A common attribute that tells the browser to open the link in a new tab.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<a href="https://www.google.com" target="_blank">Go to Google</a>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Images (The `&lt;img&gt;` tag)</h2>
            <p className="opacity-90">
              The image (`&lt;img&gt;`) tag is a self-closing tag used to embed images.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`src` (Source):</strong> This attribute is **required** and specifies the path (URL) to the image file.</li>
                <li><strong>`alt` (Alternative Text):</strong> This attribute is **required** for accessibility. It provides a text description for screen readers or if the image fails to load.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<img src="images/logo.png" alt="A blue bird logo for the company" />'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. Lists: `ul`, `ol`, `li`</h2>
            <p className="opacity-90">
              Lists are used to group related items.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold">Unordered List (Bullets)</h3>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                  {'<ul>\n  <li>Apples</li>\n  <li>Oranges</li>\n</ul>'}
                </code></pre>
              </div>
              <div>
                <h3 className="font-bold">Ordered List (Numbers)</h3>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                  {'<ol>\n  <li>First Step</li>\n  <li>Second Step</li>\n</ol>'}
                </code></pre>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. Semantic Elements for Layout</h2>
            <p className="opacity-90">
              HTML5 introduced tags that describe the *purpose* of the content they hold. This is crucial for **Accessibility (a11y)** and **SEO**.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`&lt;header&gt;`</strong>: The introductory content for a page (logo, site title, main navigation).</li>
                <li><strong>`&lt;nav&gt;`</strong>: Contains the main navigation links.</li>
                <li><strong>`&lt;main&gt;`</strong>: The dominant, unique content of the page. There should only be one per page.</li>
                <li><strong>`&lt;footer&gt;`</strong>: The footer of a page (copyright, contact info, sitemap).</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">11. Semantic Elements for Content</h2>
            <p className="opacity-90">
              These tags give more context to the content *within* your main layout.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`&lt;section&gt;`</strong>: A thematic grouping of content (e.g., a "Contact Us" section).</li>
                <li><strong>`&lt;article&gt;`</strong>: A self-contained, independent piece of content that could be distributed on its own (e.g., a blog post, a news story).</li>
                <li><strong>`&lt;aside&gt;`</strong>: For content that is tangentially related, like a sidebar or a "related links" box.</li>
                <li><strong>`&lt;figure&gt;` & `&lt;figcaption&gt;`</strong>: Used to wrap an image, diagram, or chart and provide a caption for it.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <p className="opacity-90">
              Writing good HTML is about choosing the right tag for the job.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Use Semantic Tags First:</strong> Before you use a generic `&lt;div&gt;`, ask yourself, "Is there a more descriptive tag I could use?" (e.g., `&lt;nav&gt;`, `&lt;section&gt;`).</li>
                <li><strong>Validate Your HTML:</strong> Use tools like the W3C Validator to check your HTML for errors.</li>
                <li><strong>Focus on Accessibility:</strong> Always use the `alt` attribute on images and use heading tags in their correct order.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'html-complete-guide':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">3.2: HTML Complete Guide</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              This guide builds on the essentials, providing a comprehensive overview of all the tags and concepts you need to create robust, interactive, and well-structured web pages. We will cover forms, media, tables, and other key elements in detail.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. Recap: Core Text & Structure</h2>
            <p className="opacity-90">
              Remember that all HTML documents have a `&lt;!DOCTYPE&gt;`, `&lt;html&gt;`, `&lt;head&gt;`, and `&lt;body&gt;`. The primary content is structured with headings (`&lt;h1&gt;`...`&lt;h6&gt;`), paragraphs (`&lt;p&gt;`), and semantic layout tags (`&lt;header&gt;`, `&lt;main&gt;`, `&lt;footer&gt;`).
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. The `&lt;form&gt;` Element</h2>
            <p className="opacity-90">
              Forms are the most important elements for collecting user input. The `&lt;form&gt;` tag is the container for all form controls.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`action` Attribute:</strong> The URL of the server-side script that will process the form data.</li>
                <li><strong>`method` Attribute:</strong> The HTTP method to use.
                  <ul className="list-circle ml-6 space-y-1">
                    <li><strong>`GET`</strong>: Appends data to the URL. Good for search queries.</li>
                    <li><strong>`POST`</strong>: Sends data in the body of the HTTP request. Secure, used for logins, signups, etc.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Form Control: `&lt;label&gt;` and `&lt;input&gt;`</h2>
            <p className="opacity-90">
              The `&lt;input&gt;` tag is the most versatile form element. The `&lt;label&gt;` tag is crucial for accessibility.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">The `for` attribute of the `&lt;label&gt;` must match the `id` of the `&lt;input&gt;` to link them.</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<label for="username">Username:</label>\n<input type="text" id="username" name="username">'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Common `&lt;input&gt;` Types</h2>
            <p className="opacity-90">
              The `type` attribute changes the input's behavior.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`type="text"`</strong>: A single-line text field.</li>
                <li><strong>`type="password"`</strong>: A text field that masks the input.</li>
                <li><strong>`type="email"`</strong>: A text field that requires a valid email format.</li>
                <li><strong>`type="number"`</strong>: A field for numbers, often with spinner controls.</li>
                <li><strong>`type="date"`</strong>: Provides a date-picker calendar.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Form Controls: Selection</h2>
            <p className="opacity-90">
              Used when you want the user to select from a list of options.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`type="checkbox"`</strong>: For selecting zero or more options.</li>
                <li><strong>`type="radio"`</strong>: For selecting one option from a group (all must share the same `name` attribute).</li>
                <li><strong>`&lt;select&gt;` & `&lt;option&gt;`</strong>: Creates a dropdown list.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<label for="color">Choose a color:</label>\n<select id="color" name="color">\n  <option value="red">Red</option>\n  <option value="blue">Blue</option>\n</select>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Form Controls: Other Essentials</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`&lt;textarea&gt;`</strong>: A multi-line text input for longer messages.</li>
                <li><strong>`&lt;button&gt;` or `&lt;input type="submit"&gt;`</strong>: A button that submits the form.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. HTML5 Form Validation</h2>
            <p className="opacity-90">
              HTML5 introduced attributes for client-side validation without JavaScript.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`required`</strong>: The field must be filled out.</li>
                <li><strong>`minlength` / `maxlength`</strong>: Specifies the minimum/maximum characters.</li>
                <li><strong>`min` / `max`</strong>: Specifies the minimum/maximum for number inputs.</li>
                <li><strong>`pattern`</strong>: Specifies a regular expression the input must match.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. HTML5 Media Tags</h2>
            <p className="opacity-90">
              HTML5 provides native tags for embedding video and audio without plugins.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<!-- Simple video player -->\n<video controls width="300">\n  <source src="myVideo.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>\n\n<!-- Simple audio player -->\n<audio controls>\n  <source src="myAudio.mp3" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. The `&lt;iframe&gt;` Element</h2>
            <p className="opacity-90">
              An `iframe` (inline frame) is used to embed another HTML document within the current one. This is commonly used to embed content like YouTube videos or Google Maps.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<iframe width="560" height="315" src="https://www.youtube.com/embed/..."></iframe>'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. Block vs. Inline Elements</h2>
            <p className="opacity-90">
              This is a fundamental concept for understanding layout.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Block-level Elements:</strong> Start on a new line and take up the full available width. (e.g., `&lt;div&gt;`, `&lt;h1&gt;`, `&lt;p&gt;`, `&lt;form&gt;`).</li>
                <li><strong>Inline Elements:</strong> Do not start on a new line and only take up as much width as necessary. (e.g., `&lt;span&gt;`, `&lt;a&gt;`, `&lt;img&gt;`, `&lt;strong&gt;`).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Comments in HTML</h2>
            <p className="opacity-90">
              You can leave notes in your code for yourself or other developers that the browser will ignore.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<!-- This is a comment. It will not be displayed. -->'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <p className="opacity-90">
              A complete HTML document is a well-structured set of nested elements.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Use semantic tags (`&lt;header&gt;`, `&lt;main&gt;`, etc.) for your layout.</li>
                <li>Use tables for tabular data, not for page layout.</li>
                <li>Always use `&lt;label&gt;` with the `for` attribute for all form inputs.</li>
                <li>Use the `alt` attribute for all images.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'css3-complete-guide':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">3.3: CSS3 Complete Guide</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              CSS, or <strong>Cascading Style Sheets</strong>, is the language used to control the presentation, formatting, and layout of web pages. If HTML provides the raw structure, CSS is what brings it to life with style, color, and arrangement. This guide covers the fundamental concepts needed to transform a plain HTML document into a beautiful website.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The CSS Rule</h2>
            <p className="opacity-90">
              The entire language is based on a simple rule-based system. Each rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'Selector { Property: Value; }'}<br/><br/>
                {'/* This rule targets all <h1> elements and makes them red. */'}<br/>
                {'h1 {'}<br/>
                {'  color: red;'}<br/>
                {'  font-size: 24px;'}<br/>
                {'}'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. How to Add CSS to a Webpage</h2>
            <p className="opacity-90">
              There are three ways to apply CSS rules to an HTML document.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>External Stylesheet (Best Practice):</strong> All CSS rules are placed in a separate `.css` file. This is the cleanest and most maintainable method.</li>
                <li><strong>Internal Stylesheet:</strong> CSS rules are placed inside a `&lt;style&gt;` tag within the HTML `&lt;head&gt;`.</li>
                <li><strong>Inline Styles:</strong> CSS rules are applied directly to an element using the `style` attribute. This is generally avoided.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Basic Selectors: Targeting Elements</h2>
            <p className="opacity-90">
              Selectors are patterns that select the elements you want to style.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg overflow-x-auto">
              <table className="w-full text-left">
                  <thead className="border-b border-gray-600">
                      <tr><th className="py-2 font-bold">Selector</th><th className="py-2 font-bold">Example</th><th className="py-2 font-bold">What it Selects</th></tr>
                  </thead>
                  <tbody className="opacity-90">
                      <tr className="border-t border-gray-600"><td className="py-2">Element</td><td className="py-2 font-mono">p</td><td className="py-2">All `&lt;p&gt;` elements.</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2">Class</td><td className="py-2 font-mono">.note</td><td className="py-2">All elements with `class="note"`.</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2">ID</td><td className="py-2 font-mono">#header</td><td className="py-2">The single element with `id="header"`.</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2">Universal</td><td className="py-2 font-mono">*</td><td className="py-2">All elements on the page.</td></tr>
                  </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Combinator Selectors: Advanced Targeting</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg overflow-x-auto">
              <table className="w-full text-left">
                  <thead className="border-b border-gray-600">
                      <tr><th className="py-2 font-bold">Selector</th><th className="py-2 font-bold">Example</th><th className="py-2 font-bold">What it Selects</th></tr>
                  </thead>
                  <tbody className="opacity-90">
                      <tr className="border-t border-gray-600"><td className="py-2">Descendant</td><td className="py-2 font-mono">article p</td><td className="py-2">All `&lt;p&gt;` elements *anywhere inside* an `&lt;article&gt;`.</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2">Child</td><td className="py-2 font-mono">ul &gt; li</td><td className="py-2">All `&lt;li&gt;` elements that are *direct children* of a `&lt;ul&gt;`.</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2">Adjacent Sibling</td><td className="py-2 font-mono">h1 + p</td><td className="py-2">The first `&lt;p&gt;` that is *immediately after* an `&lt;h1&gt;`.</td></tr>
                  </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Pseudo-Classes: Styling States</h2>
            <p className="opacity-90">
              Pseudo-classes are keywords added to selectors that specify a special state of the element.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`:hover`</strong>: Applies when the user's mouse is over the element.</li>
                <li><strong>`:focus`</strong>: Applies when an element (like an input) is focused.</li>
                <li><strong>`:nth-child()`</strong>: Selects elements based on their position (e.g., `li:nth-child(odd)`).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. The "Cascade" and Specificity</h2>
            <p className="opacity-90">
              The "C" in CSS stands for **Cascading**. This means styles "cascade" down from parent elements to children. When two rules conflict, the browser uses **Specificity** to decide which one wins.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">The Specificity Hierarchy (Highest to Lowest):</h3>
              <ol className="list-decimal ml-6 space-y-2 opacity-90 mt-2">
                <li><strong>Inline Styles</strong> (e.g., `style="..."`) - Always wins.</li>
                <li><strong>ID Selectors</strong> (e.g., `#header`)</li>
                <li><strong>Class Selectors</strong> (e.g., `.my-class`)</li>
                <li><strong>Element Selectors</strong> (e.g., `p`)</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. The CSS Box Model</h2>
            <p className="opacity-90">
              Every element is a rectangular box. The Box Model describes its layers: **Content, Padding, Border, Margin**.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Content:</strong> The text, image, or other content.</li>
                <li><strong>Padding:</strong> The transparent space *inside* the border, between the content and the border.</li>
                <li><strong>Border:</strong> The line that goes around the padding and content.</li>
                <li><strong>Margin:</strong> The transparent space *outside* the border, separating the element from others.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. `box-sizing: border-box`</h2>
            <p className="opacity-90">
              By default, `width` and `height` in CSS only apply to the content. This is confusing. `box-sizing: border-box` changes this so that the `width` and `height` properties include the content, padding, and border, which is much more intuitive.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'* {\n  box-sizing: border-box;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Common CSS Properties</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg overflow-x-auto">
              <table className="w-full text-left">
                  <thead className="border-b border-gray-600">
                      <tr><th className="py-2 font-bold">Property</th><th className="py-2 font-bold">Example</th></tr>
                  </thead>
                  <tbody className="opacity-90">
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">color</td><td className="py-2">`color: #333;` (Sets text color)</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">font-family</td><td className="py-2">`font-family: Arial, sans-serif;`</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">font-size</td><td className="py-2">`font-size: 16px;` or `1rem;`</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">font-weight</td><td className="py-2">`font-weight: 700;` or `bold;`</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">background-color</td><td className="py-2">`background-color: #f0f0f0;`</td></tr>
                      <tr className="border-t border-gray-600"><td className="py-2 font-mono">border</td><td className="py-2">`border: 1px solid black;`</td></tr>
                  </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold pt-4">10. CSS Units: `px` vs. `rem` vs. `em`</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`px` (Pixel):</strong> An absolute unit. Good for things that must be an exact size, like borders.</li>
                <li><strong>`em`:</strong> A relative unit. `1em` is equal to the `font-size` of the <strong>parent element</strong>.</li>
                <li><strong>`rem` (Root em):</strong> The best of both worlds. `1rem` is equal to the `font-size` of the <strong>root element (`&lt;html&gt;`)</strong>. This is the recommended unit for scalable layouts.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Key Strategy Summary</h2>
            <p className="opacity-90">
              Writing good CSS is about being organized and specific.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Use External Stylesheets:</strong> Always separate your CSS into `.css` files.</li>
                <li><strong>Favor Classes over IDs:</strong> Use classes for styling. They are reusable. Use IDs for unique elements, primarily for JavaScript.</li>
                <li><strong>Keep it DRY:</strong> Don't Repeat Yourself. If you use the same styles, group them under a shared class.</li>
                <li><strong>Use `rem` Units:</strong> Use `rem` for `font-size`, `padding`, and `margin` to create accessible and scalable designs.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'css-layout':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">3.4: CSS Layout (Flexbox & Grid)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              For many years, creating complex webpage layouts was difficult, often involving hacks. Modern CSS has solved this with two powerful layout systems: <strong>Flexbox</strong> and <strong>Grid</strong>. Mastering these two tools is the key to building any modern, responsive web layout with ease.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Container & Items</h2>
            <p className="opacity-90">
              Both Flexbox and Grid work on the same principle: you define a parent element as a special layout <strong>container</strong>, and its direct children automatically become layout <strong>items</strong>. You apply the layout rules to the container, which then intelligently arranges the items inside it.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. The `display` Property</h2>
            <p className="opacity-90">
              The `display` property is the gateway to CSS layouts. By default, elements are either `block` (like `&lt;div&gt;`, `&lt;h1&gt;`) or `inline` (like `&lt;span&gt;`, `&lt;a&gt;`). To use Flexbox or Grid, you change the container's display property.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">3. Flexbox (Flexible Box Layout)</h2>
            <p className="opacity-90">
              Flexbox is a <strong>one-dimensional</strong> layout system. It excels at distributing space among items in a single row or a single column.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">How to Use:</h3>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'.container {\n  display: flex;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Flex Container Properties (The Parent)</h2>
            <p className="opacity-90">
              You apply these properties to the flex container (`.container`) to control all its children.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`flex-direction`</strong>: Defines the main axis. `row` (default) or `column`.</li>
                <li><strong>`justify-content`</strong>: Aligns items along the main axis (horizontally if `row`). Values include `flex-start`, `center`, `flex-end`, `space-between`.</li>
                <li><strong>`align-items`</strong>: Aligns items along the cross axis (vertically if `row`). Values include `flex-start`, `center`, `flex-end`, `stretch`.</li>
                <li><strong>`flex-wrap`</strong>: Allows items to wrap to a new line. Default is `nowrap`.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Flex Item Properties (The Children)</h2>
            <p className="opacity-90">
              You can apply these properties to individual flex items to make them exceptions.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`flex-grow`</strong>: Allows an item to grow and fill available space.</li>
                <li><strong>`flex-shrink`</strong>: Allows an item to shrink if there isn't enough space.</li>
                <li><strong>`flex-basis`</strong>: Sets the default size of an item before the remaining space is distributed.</li>
                <li><strong>`align-self`</strong>: Overrides the container's `align-items` for a single item.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Introduction to CSS Grid</h2>
            <p className="opacity-90">
              Grid is a <strong>two-dimensional</strong> layout system, controlling both rows and columns simultaneously. It is the most powerful layout system in CSS, perfect for complex page layouts.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">How to Use:</h3>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'.container {\n  display: grid;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Defining a Grid (Grid Template)</h2>
            <p className="opacity-90">
              The power of Grid comes from defining your layout structure on the container.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`grid-template-columns`</strong>: Defines the number and size of the columns.</li>
                <li><strong>`grid-template-rows`</strong>: Defines the size of the rows.</li>
                <li><strong>`gap`</strong>: Defines the size of the gutter (space) between items.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'.grid-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr; /* Creates three equal-width columns */\n  gap: 20px;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. The `fr` Unit</h2>
            <p className="opacity-90">
              The `fr` (fractional) unit is a new unit introduced with Grid. It represents a fraction of the available space in the grid container. Using `fr` units is a flexible and modern way to create responsive columns.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">9. Placing Items in a Grid</h2>
            <p className="opacity-90">
              You can explicitly place items in your grid, making it easy to have items span multiple columns or rows.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'.grid-item-1 {\n  grid-column: 1 / 3; /* Starts at line 1, ends at line 3 (spans 2 columns) */\n  grid-row: 1 / 3;    /* Spans 2 rows */\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. Flexbox vs. Grid: When to Use Which?</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                  <h3 className="font-bold">Use Flexbox for:</h3>
                  <p className="text-sm opacity-90 mt-1">Arranging items in a single line (one dimension), like navigation bars, button groups, or aligning items within a card component.</p>
              </div>
              <div>
                  <h3 className="font-bold">Use Grid for:</h3>
                  <p className="text-sm opacity-90 mt-1">The overall page layout (two dimensions). Creating complex, two-dimensional grids for your main content, sidebars, and footers.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold pt-4">11. `position` Property</h2>
            <p className="opacity-90">
              The `position` property is another key layout concept.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`static`</strong>: The default value.</li>
                <li><strong>`relative`</strong>: The element is positioned relative to its normal position.</li>
                <li><strong>`absolute`</strong>: The element is positioned relative to its nearest *positioned* ancestor.</li>
                <li><strong>`fixed`</strong>: The element is positioned relative to the viewport (the browser window). It stays in the same place even when the page is scrolled.</li>
                <li><strong>`sticky`</strong>: A hybrid of `relative` and `fixed`. It's relative until it hits a certain scroll point, at which point it becomes fixed.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <p className="opacity-90">
              Modern CSS layout is about thinking in terms of containers and items.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Use Grid for the overall page layout.</strong></li>
                <li><strong>Use Flexbox for aligning components *inside* the grid cells.</strong></li>
                <li>Use `gap` for spacing between items in both Flexbox and Grid.</li>
                <li>Use `rem` and `em` units for scalable and responsive designs.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'css-animations':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">3.5: CSS Animations & Transitions</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Modern web design is not just about static layouts; it's also about creating dynamic and engaging user experiences. CSS Animations and Transitions are powerful tools that allow you to bring your website to life by adding motion and interactivity. They can transform a simple user action, like hovering over a button, into a smooth and delightful visual feedback.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Motion Over Time</h2>
            <p className="opacity-90">
              Both transitions and animations are about changing an element's style properties over a specific duration. Instead of a style change being instant (e.g., a button's color changing immediately), these tools allow the change to happen smoothly.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. Transitions: The A-to-B Animation</h2>
            <p className="opacity-90">
              A <strong>transition</strong> is the simplest form of animation. It's designed to manage the change from a <strong>start state</strong> to an <strong>end state</strong>. They are typically triggered by user interactions like `:hover` or `:focus`.
            </p>

            <h2 className="text-2xl font-semibold pt-4">3. Transition Properties</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`transition-property`</strong>: The CSS property you want to animate (e.g., `background-color`, `transform`).</li>
                <li><strong>`transition-duration`</strong>: How long the transition should take (e.g., `0.3s` or `300ms`).</li>
                <li><strong>`transition-timing-function`</strong>: The speed curve of the transition (e.g., `ease-in`, `ease-out`, `linear`).</li>
                <li><strong>`transition-delay`</strong>: An optional delay before the transition starts.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Transition Shorthand & Example</h2>
            <p className="opacity-90">
              It's best practice to combine these into a single shorthand property.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'/* property | duration | timing-function | delay */'}<br/>
                {'transition: background-color 0.5s ease-out;'}<br/><br/>
                {'/* Example: Hover Effect on a Button */'}<br/>
                {'.btn {\n  background-color: blue;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.btn:hover {\n  background-color: red;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Animations: Multi-Step Sequences</h2>
            <p className="opacity-90">
              Animations are more powerful than transitions. They allow you to create complex, multi-step sequences with fine-grained control using <strong>keyframes</strong>. They can run automatically without user interaction.
            </p>

            <h2 className="text-2xl font-semibold pt-4">6. The `@keyframes` Rule</h2>
            <p className="opacity-90">
              To create an animation, you first define it with `@keyframes`. You give it a name and define its "stops" or keyframes using percentages, from `0%` (the start) to `100%` (the end).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'/* 1. Define the animation */'}<br/>
                {'@keyframes slide-in {'}<br/>
                {'  from { /* or 0% */'}<br/>
                {'    transform: translateX(-100%);'}<br/>
                {'    opacity: 0;'}<br/>
                {'  }'}<br/>
                {'  to { /* or 100% */'}<br/>
                {'    transform: translateX(0);'}<br/>
                {'    opacity: 1;'}<br/>
                {'  }'}<br/>
                {'}'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">7. Animation Properties</h2>
            <p className="opacity-90">
              Once defined, you apply the animation to an element using these properties.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`animation-name`</strong>: The name you defined in `@keyframes` (e.g., `slide-in`).</li>
                <li><strong>`animation-duration`</strong>: How long one cycle of the animation should take (e.g., `1s`).</li>
                <li><strong>`animation-iteration-count`</strong>: How many times to repeat (e.g., `3`, or `infinite`).</li>
                <li><strong>`animation-direction`</strong>: e.g., `alternate` (to reverse on each cycle).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Animation Shorthand & Example</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'/* 2. Apply the animation to an element */'}<br/>
                {'.box {'}<br/>
                {'  animation-name: slide-in;'}<br/>
                {'  animation-duration: 1s;'}<br/>
                {'  animation-timing-function: ease-out;'}<br/>
                {'}'}<br/><br/>
                {'/* Shorthand Version */'}<br/>
                {'.box {\n  animation: slide-in 1s ease-out;\n}'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. The `transform` Property</h2>
            <p className="opacity-90">
              The CSS `transform` property lets you modify the coordinate space of an element. You can use it to move, rotate, scale, and skew elements.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">Common `transform` Functions:</h3>
              <ul className="list-disc ml-6 mt-2 opacity-90">
                  <li>`transform: translate(x, y);` (e.g., `translateX(50px)`)</li>
                  <li>`transform: rotate(angle);` (e.g., `rotate(45deg)`)</li>
                  <li>`transform: scale(x, y);` (e.g., `scale(1.2)`)</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. Performance is Key: `transform` & `opacity`</h2>
            <p className="opacity-90">
              For smooth animations, you should almost **only** animate the `transform` and `opacity` properties.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">Animating properties like `width`, `height`, `margin`, or `left`/`top` can be slow and cause "jank" (stuttering). This is because they force the browser to recalculate the layout of the entire page. `transform` and `opacity` are handled by the browser's graphics processor and don't affect layout, resulting in buttery-smooth animations.</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Key Strategy Summary</h2>
            <p className="opacity-90">
              Use motion to enhance the user experience, not to distract from it.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Use Transitions for Simple State Changes:</strong> Perfect for hover effects on links, buttons, and cards.</li>
                <li><strong>Use Animations for Complex Sequences:</strong> Use for multi-step effects like loading spinners or attention-grabbing elements.</li>
                <li><strong>Prioritize Performance:</strong> Animate `transform` and `opacity`. Avoid animating `width`, `height`, `margin`, or `left`.</li>
                <li><strong>Keep it Subtle and Quick:</strong> Good animations are usually fast (between 200ms and 500ms).</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'responsive-design':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">3.6: Responsive Design & Media Queries</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              In the modern web, users access websites on a vast range of devices with different screen sizes. Responsive Web Design is the practice of building a website so that its layout and content automatically adapt to provide an optimal viewing experience on any device. The primary tool we use to achieve this in CSS is the <strong>Media Query</strong>.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: One Website, Many Screens</h2>
            <p className="opacity-90">
              The core idea of responsive design is that you don't build separate websites for mobile and desktop. Instead, you build **one flexible website** whose layout changes based on the properties of the user's device, most commonly the width of the screen.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">Analogy: A Liquid in a Container</h3>
              <p className="mt-2 opacity-90">
                  Think of your website's content as a liquid. A responsive design ensures that this liquid can be poured into any container (a phone, a tablet, a desktop) and it will adapt its shape to fit perfectly, without spilling or leaving empty space.
              </p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. The Viewport Meta Tag</h2>
            <p className="opacity-90">
              This is the **first and most critical step** for any responsive design. You must add this tag to the `&lt;head&gt;` of your HTML document.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<meta name="viewport" content="width=device-width, initial-scale=1.0">'}
              </code></pre>
              <ul className="list-disc ml-6 space-y-2 opacity-90 mt-2">
                <li><strong>`width=device-width`</strong>: Tells the browser to set the width of the page to the width of the device's screen.</li>
                <li><strong>`initial-scale=1.0`</strong>: Sets the initial zoom level to 100% when the page is first loaded.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Flexible Units vs. Fixed Units</h2>
            <p className="opacity-90">
              To create fluid layouts, you must use relative units, not fixed ones.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                  <h3 className="font-bold">Fixed Units (Avoid for Layouts)</h3>
                  <p className="text-sm opacity-90 mt-1"><strong>`px` (Pixels):</strong> An absolute unit. A `300px` wide box will be 300px wide everywhere, which might be too big for a phone. Good for borders.</p>
              </div>
              <div>
                  <h3 className="font-bold">Relative Units (Prefer)</h3>
                  <p className="text-sm opacity-90 mt-1"><strong>`%` (Percentage):</strong> `width: 100%` will make an element span the full width of its parent container, whatever that may be.</p>
                  <p className="text-sm opacity-90 mt-1"><strong>`rem` / `em`:</strong> Relative to font size. `rem` is relative to the root (`&lt;html&gt;`) font size and is excellent for creating scalable typography and spacing.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Flexible Images</h2>
            <p className="opacity-90">
              A common problem is that large images overflow their containers on small screens. The fix is simple and essential.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">This CSS rule tells all images to never be wider than their containing element.</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'img {\n  max-width: 100%;\n  height: auto;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. What are Media Queries?</h2>
            <p className="opacity-90">
              A media query is a feature in CSS that allows you to apply a block of styles only when a specific condition is met. The most common condition is the screen width. This is the cornerstone of responsive design.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">6. Media Query Syntax & Breakpoints</h2>
            <p className="opacity-90">
              The syntax uses an `@media` rule followed by a condition in parentheses. A "breakpoint" is the width at which your layout changes.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`min-width`</strong>: Applies styles for screens that are **wider than or equal to** this width.</li>
                <li><strong>`max-width`</strong>: Applies styles for screens that are **narrower than or equal to** this width.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'/* This rule applies only to screens 768px wide or wider */'}<br/>
                {'@media (min-width: 768px) {\n  .container {\n    width: 700px;\n  }\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. The Mobile-First Approach</h2>
            <p className="opacity-90">
              This is the modern best practice. You write your CSS for the smallest screen (mobile) first, which becomes your default. Then, you use `min-width` media queries to add complexity for larger screens.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">8. Mobile-First Example</h2>
            <p className="opacity-90">
              Let's create a layout with 1 column on mobile, 2 on tablets, and 4 on desktops.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'/* Mobile-First (Default): 1 column */'}<br/>
                {'.grid-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n/* Tablet: 2 columns */\n@media (min-width: 768px) {\n  .grid-container {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n/* Desktop: 4 columns */\n@media (min-width: 1024px) {\n  .grid-container {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Building responsive websites is a core skill for any frontend developer.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>Always include the **Viewport Meta Tag** in your HTML.</li>
                <li>Adopt a **Mobile-First** approach.</li>
                <li>Use **relative units** like `%` and `rem` for fluid layouts.</li>
                <li>Use **Flexbox and Grid** for your layouts, as they are inherently flexible.</li>
                <li>Use **`min-width` media queries** to add complexity at larger breakpoints.</li>
                <li>Make sure images are flexible with `max-width: 100%`.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'css-preprocessors':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">3.7: CSS Preprocessors (Sass/SCSS)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              As websites grow larger, managing plain CSS can become difficult and repetitive. A <strong>CSS preprocessor</strong> is a scripting language that extends the default capabilities of CSS, allowing you to use features like variables, nesting, and functions. You write styles in the preprocessor's syntax, and it then compiles that code into regular, browser-compliant CSS.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: CSS with Superpowers</h2>
            <p className="opacity-90">
              Think of a preprocessor as a more advanced, "smarter" version of CSS. It gives you access to programming-like features. The most popular preprocessor is <strong>Sass (Syntactically Awesome Style Sheets)</strong>.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. The Workflow: Write, Compile, Use</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>You write your styles in a `.scss` file using Sass syntax.</li>
                <li>A compiler (a build tool) processes this file.</li>
                <li>The compiler translates your advanced syntax into a normal `.css` file.</li>
                <li>You link this final `.css` file in your HTML, just like a regular stylesheet.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Sass vs. SCSS: The Syntax</h2>
            <p className="opacity-90">
              Sass has two syntaxes. The original (`.sass`) is an older, indented syntax. The newer and more popular syntax is **SCSS (Sassy CSS)**, which is a superset of CSS.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90"><strong>You should use the `.scss` syntax</strong> because all valid CSS is also valid SCSS, making it easy to adopt.</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Feature 1: Variables</h2>
            <p className="opacity-90">
              Store reusable values like brand colors or font sizes. If you need to change a color, you only change it in one place.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'$primary-color: #04AA6D;\n$base-font-size: 16px;\n\nbody {\n  font-size: $base-font-size;\n}\na {\n  color: $primary-color;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Feature 2: Nesting</h2>
            <p className="opacity-90">
              Nest your CSS rules in a way that follows the same visual hierarchy as your HTML, making your code cleaner and more intuitive.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold">Plain CSS</h3>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                  {'nav {\n  background: #333;\n}\nnav ul {\n  margin: 0;\n}\nnav li {\n  display: inline-block;\n}'}
                </code></pre>
              </div>
              <div>
                <h3 className="font-bold">SCSS (Nested)</h3>
                <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                  {'nav {\n  background: #333;\n\n  ul {\n    margin: 0;\n  }\n\n  li {\n    display: inline-block;\n  }\n}'}
                </code></pre>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. The `&` Selector</h2>
            <p className="opacity-90">
              The `&` selector is a special feature in Sass that refers to the parent selector. It's most commonly used for pseudo-classes like `:hover`.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'a {\n  color: blue;\n\n  &:hover {\n    color: red;\n  }\n}\n\n/* Compiles to: */\na {\n  color: blue;\n}\na:hover {\n  color: red;\n}'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Feature 3: Partials & `@import`</h2>
            <p className="opacity-90">
              You can split your CSS into smaller, manageable files called **partials**. Partial filenames must start with an underscore (e.g., `_buttons.scss`). You then use the `@import` rule to combine them into a main file.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'// main.scss\n@import \'variables\';\n@import \'buttons\';\n@import \'layout\';'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Feature 4: Mixins</h2>
            <p className="opacity-90">
              A **mixin** is a block of styles that can be reused throughout your code, like a function. You use `@mixin` to define it and `@include` to use it.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.my-container {\n  @include flex-center;\n}'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. Feature 5: `@extend`</h2>
            <p className="opacity-90">
              `@extend` allows one selector to inherit all the styles of another selector. This is useful for sharing a common set of properties.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">10. Feature 6: Functions</h2>
            <p className="opacity-90">
              Sass provides built-in functions for manipulating colors and values.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>`darken($color, 10%)`</strong>: Makes a color 10% darker.</li>
                <li><strong>`lighten($color, 10%)`</strong>: Makes a color 10% lighter.</li>
                <li><strong>`rgba($color, 0.5)`</strong>: Makes a color 50% transparent.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. The Trap: Over-Nesting</h2>
            <p className="opacity-90">
              The most common mistake beginners make is nesting too deeply (more than 3 or 4 levels). This can create CSS that is overly specific, hard to override, and inefficient.
            </p>

            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <p className="opacity-90">
              Using a preprocessor like Sass is a modern standard for any medium to large-scale project.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Use Variables</strong> for all colors, fonts, and spacing.</li>
                <li><strong>Use Partials</strong> to organize your code into separate files.</li>
                <li><strong>Nest Wisely.</strong> Avoid nesting more than 3 levels deep.</li>
                <li><strong>Use Mixins</strong> for reusable patterns (like flexbox centering).</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'browser-developer-tools':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">3.8: Browser Developer Tools</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Browser Developer Tools (or "DevTools") are a suite of powerful tools built directly into modern web browsers. For a web developer, they are an indispensable part of the daily workflow, used for debugging, testing, and optimizing websites. Mastering the DevTools is like a mechanic learning to use a car's diagnostic scanner—it gives you a direct view into the inner workings of your application.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Your Website's X-Ray Machine</h2>
            <p className="opacity-90">
              Think of DevTools as an X-ray machine for your webpage. While a user only sees the final, rendered page, DevTools allow you to look "under the skin" to see the underlying HTML, the applied CSS, the running JavaScript, and the network requests.
            </p>

            <h2 className="text-2xl font-semibold pt-4">2. How to Open DevTools</h2>
            <p className="opacity-90">
              You can open them in any browser by right-clicking on the webpage and selecting <strong>"Inspect"</strong>, or by using a keyboard shortcut (<strong>F12</strong> on Windows/Linux, <strong>Cmd+Option+I</strong> on macOS).
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">3. Tab 1: The Elements Tab (HTML & CSS)</h2>
            <p className="opacity-90">
              This is often the first tab you'll use. It shows you the live **DOM (Document Object Model)**—the tree-like structure of your HTML.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Inspect HTML:</strong> See the final HTML structure as the browser has rendered it.</li>
                <li><strong>Live-Edit CSS:</strong> In the "Styles" pane, you can temporarily add, remove, or change CSS properties to see how they affect the layout in real-time. This is perfect for testing changes.</li>
                <li><strong>Check the Box Model:</strong> It provides a visual diagram of any element's margin, border, padding, and content size.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Tab 2: The Console Tab (JavaScript)</h2>
            <p className="opacity-90">
              The Console is your best friend for debugging JavaScript. It's an interactive command line where you can execute JavaScript code and see output from your scripts.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Viewing Errors:</strong> If there is a JavaScript error, the Console will display a detailed message explaining what went wrong and on which line.</li>
                <li><strong>Logging Messages:</strong> Use `console.log()` in your code to print variable values and trace your program's flow.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'const user = { name: "Alice" };\nconsole.log("User object:", user);'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Tab 3: The Network Tab</h2>
            <p className="opacity-90">
              The Network tab records every single request your browser makes to load the webpage. This includes all HTML, CSS, JS, image, and API files.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Performance Analysis:</strong> See how long each file takes to load and its size.</li>
                <li><strong>Debugging API Calls:</strong> Inspect the data sent to and received from a server.</li>
                <li><strong>Check Status Codes:</strong> See if requests were successful (200 OK) or failed (404 Not Found, 500 Server Error).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Tab 4: The Application Tab</h2>
            <p className="opacity-90">
              This tab is crucial for inspecting data stored in the browser.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Local Storage:</strong> View, add, edit, or delete data stored in `localStorage`.</li>
                <li><strong>Session Storage:</strong> View data that persists only for the current session.</li>
                <li><strong>Cookies:</strong> Inspect the cookies that are stored for the website.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Tab 5: The Lighthouse Tab</h2>
            <p className="opacity-90">
              Lighthouse is an automated tool from Google for auditing your page. It runs a series of tests and gives you a report on:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Performance:</strong> How fast your page loads.</li>
                <li><strong>Accessibility:</strong> How usable your site is for people with disabilities.</li>
                <li><strong>Best Practices:</strong> Checks for modern web standards.</li>
                <li><strong>SEO:</strong> How well your page is optimized for search engines.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. The Device Mode</h2>
            <p className="opacity-90">
              The "Toggle Device Toolbar" (a small phone/tablet icon) is a feature that allows you to simulate how your website looks and behaves on different mobile devices and screen sizes. This is essential for testing your responsive design.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Integrating DevTools into your workflow will make you a much more efficient developer.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Have it Open Always.</strong> Get into the habit of opening DevTools as soon as you start working.</li>
                <li><strong>Prototype CSS in the Browser.</strong> Use the Elements tab to test style changes live before writing them in your code.</li>
                <li><strong>Use `console.log()` Generously.</strong> It is the most basic but powerful debugging technique.</li>
                <li><strong>Use the Network Tab</strong> to check that your API calls are working correctly.</li>
                <li><strong>Test on all screen sizes</strong> using the Device Mode.</li>
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
  }
};

export default Chapter3;