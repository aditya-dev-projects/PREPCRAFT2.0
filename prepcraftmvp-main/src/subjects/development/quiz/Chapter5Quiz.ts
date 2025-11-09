export const Chapter5Quiz = {
  "introduction-to-css-frameworks": [
    {
      question: "In the 'Starter Kit' analogy, what is a CSS Framework?",
      options: [
        "Chopping down your own trees to make lumber (CSS from scratch)",
        "A pre-fabricated 'starter kit' with pre-cut lumber and standard doors (reusable components)",
        "The final, painted house (a finished website)",
        "The architect's blueprint (a design file)"
      ],
      answer: "A pre-fabricated 'starter kit' with pre-cut lumber and standard doors (reusable components)",
      explanation: "The notes state: 'you could go to a hardware store and buy a pre-fabricated \"starter kit\"... (using a CSS Framework). A framework gives you all the common, reusable parts...'"
    },
    {
      question: "What are the two main philosophies of CSS frameworks mentioned in the notes?",
      options: [
        "Component-Based (like Bootstrap) and Utility-First (like Tailwind)",
        "Sass-Based and LESS-Based",
        "JavaScript-Based and CSS-Based",
        "Mobile-First and Desktop-First"
      ],
      answer: "Component-Based (like Bootstrap) and Utility-First (like Tailwind)",
      explanation: "The notes clearly define these two philosophies: 'Component-Based (e.g., Bootstrap): Provides pre-built... components' and 'Utility-First (e.g., Tailwind CSS): Provides low-level \"utility\" classes'."
    },
    {
      question: "Which of these is NOT listed as a benefit of using a CSS framework?",
      options: [
        "Speed (building layouts in minutes)",
        "Responsiveness (built-in mobile-first grid)",
        "Browser Compatibility (already tested)",
        "Guarantees a unique design that no other site will have"
      ],
      answer: "Guarantees a unique design that no other site will have",
      explanation: "The notes list Speed, Responsiveness, Consistency, and Browser Compatibility as benefits. The QnA section later points out that component-based frameworks can lead to a 'look-alike' problem, the opposite of a unique design."
    },
    {
      question: "How does a Component-Based framework like Bootstrap differ from a Utility-First one like Tailwind?",
      options: [
        "Bootstrap is newer than Tailwind",
        "Bootstrap gives you pre-built components like `.card`; Tailwind gives you utility classes like `p-4`",
        "Bootstrap is for React; Tailwind is for plain HTML",
        "Bootstrap gives you utility classes; Tailwind gives you pre-built components"
      ],
      answer: "Bootstrap gives you pre-built components like `.card`; Tailwind gives you utility classes like `p-4`",
      explanation: "The example clearly shows this: Bootstrap uses `.card` and `.card-body`, while Tailwind composes utilities like `max-w-sm`, `p-6`, `rounded-lg`, etc., to build a card."
    },
    {
      question: "What is the 'look-alike' problem mentioned in the QnA?",
      options: [
        "A problem with utility-first frameworks where all code looks the same",
        "A problem with component-based frameworks (like Bootstrap) where sites look similar",
        "A bug in CSS that makes all fonts look the same",
        "A problem where a React UI Library looks like a CSS Framework"
      ],
      answer: "A problem with component-based frameworks (like Bootstrap) where sites look similar",
      explanation: "The QnA section defines this: 'This is a common criticism of component-based frameworks like Bootstrap. Because everyone is using the same `.btn-primary`... many websites... end up looking very similar.'"
    },
    {
      question: "What is the key difference between a CSS Framework (like Tailwind) and a React UI Library (like MUI)?",
      options: [
        "There is no difference.",
        "A CSS Framework gives you CSS classes; a React UI Library gives you pre-built React components.",
        "A CSS Framework gives you React components; a React UI Library gives you CSS classes.",
        "A CSS Framework is for layout; a React UI Library is only for buttons."
      ],
      answer: "A CSS Framework gives you CSS classes; a React UI Library gives you pre-built React components.",
      explanation: "The QnA section clarifies: 'A CSS Framework gives you *CSS classes*... A React UI Library gives you pre-built, fully functional *React components* (e.g., `<Button>`, `<Card>`).'"
    }
  ],
  "bootstrap-fundamentals": [
    {
      question: "What is the 'core' and 'most important tool' of Bootstrap, according to the analogy?",
      options: [
        "The pre-built components like `.card`",
        "The 12-column responsive Grid System",
        "The spacing utilities like `mt-3`",
        "The JavaScript plugins for modals"
      ],
      answer: "The 12-column responsive Grid System",
      explanation: "The analogy states: 'Its most important tool is the Grid System, which is like a set of laser levels for building perfectly aligned, responsive layouts...'"
    },
    {
      question: "What are the three classes that *must* be used together to build a Bootstrap grid?",
      options: [
        "`.container`, `.row`, and `.col-*`",
        "`.grid`, `.row`, and `.cell`",
        "`.container`, `.grid`, and `.col`",
        "`.bootstrap`, `.row`, and `.column`"
      ],
      answer: "`.container`, `.row`, and `.col-*`",
      explanation: "The notes are explicit: 'You must use three classes together: `.container`... `.row`... `.col-*`...'"
    },
    {
      question: "What does the class `col-md-6` mean?",
      options: [
        "Be 6 columns wide on *all* screen sizes.",
        "Be 6 columns wide *only* on medium screens.",
        "On medium screens (>=768px) and *up*, be 6 columns wide (50%).",
        "On medium screens (<=768px) and *down*, be 6 columns wide."
      ],
      answer: "On medium screens (>=768px) and *up*, be 6 columns wide (50%).",
      explanation: "The QnA section explains this mobile-first logic: 'It means \"By default, be 12 columns wide... but on 'medium' screens (768px) and *up*, be 6 columns wide (half width).\"'"
    },
    {
      question: "In the example, the layout classes are `col-12 col-md-6 col-lg-4`. What will this look like on a mobile phone (<576px)?",
      options: [
        "Three columns",
        "Two columns",
        "A single, full-width column",
        "It will be hidden"
      ],
      answer: "A single, full-width column",
      explanation: "Bootstrap is mobile-first. The `col-12` class is the 'default' for extra-small screens. `col-md-6` and `col-lg-4` only apply to *larger* screens, so on mobile, `col-12` (full width) is used."
    },
    {
      question: "What is the correct, modern way to customize Bootstrap's default primary color?",
      options: [
        "Write a separate CSS file with `!important` to override it.",
        "Use JavaScript to change the color.",
        "Use Sass, change the `$primary` variable, and re-compile the CSS.",
        "You cannot change the default colors."
      ],
      answer: "Use Sass, change the `$primary` variable, and re-compile the CSS.",
      explanation: "The QnA section states this is the 'right way': 'You import Bootstrap's Sass files, change the `$primary` variable... and then re-compile the CSS. This updates the color across *all* components...'"
    },
    {
      question: "What does the Bootstrap utility class `px-5` do?",
      options: [
        "Sets padding on the x-axis (left and right) to size 5.",
        "Sets padding on the x-axis to 5px.",
        "Sets margin on the x-axis to size 5.",
        "Sets `max-width` to 500px."
      ],
      answer: "Sets padding on the x-axis (left and right) to size 5.",
      explanation: "The notes define the spacing utilities: '`p` for padding' and '`px-5` means \"padding on the x-axis (left/right) size 5\".'"
    }
  ],
  "tailwind-css-setup": [
    {
      question: "What is the 'Just-In-Time (JIT) engine' in Tailwind?",
      options: [
        "A tool that writes your HTML for you.",
        "A component library.",
        "A compiler that scans your files, finds only the classes you used, and generates a tiny CSS file.",
        "A JavaScript file that must be loaded before your HTML."
      ],
      answer: "A compiler that scans your files, finds only the classes you used, and generates a tiny CSS file.",
      explanation: "The analogy explains this: 'the Tailwind compiler \"scans\" all your files, finds *only* the classes you actually used, and generates a tiny, custom-built CSS file *just for you*.'"
    },
    {
      question: "What is the *most critical* step in the Tailwind config file (`tailwind.config.js`)?",
      options: [
        "Setting up the `plugins` array.",
        "Configuring the `content` paths to tell Tailwind which files to scan.",
        "Adding your `theme` colors.",
        "Linking the config file in your HTML `<head>`."
      ],
      answer: "Configuring the `content` paths to tell Tailwind which files to scan.",
      explanation: "The notes label this as '(CRITICAL)': 'You **must** tell Tailwind which files to scan. If your paths are wrong, your CSS file will be empty.'"
    },
    {
      question: "What are the three `@tailwind` directives you must add to your main CSS file?",
      options: [
        "`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`",
        "`@tailwind import;`, `@tailwind build;`, `@tailwind watch;`",
        "`@tailwind content;`, `@tailwind theme;`, `@tailwind plugins;`",
        "`@tailwind start;`, `@tailwind forms;`, `@tailwind end;`"
      ],
      answer: "`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`",
      explanation: "Step 4 of the technical concept lists these three directives: `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` as the 'injection points' for Tailwind's code."
    },
    {
      question: "Your Tailwind styles are not showing up. What is the most likely reason, according to the QnA?",
      options: [
        "You have a typo in your HTML class attribute.",
        "Your `content` path in `tailwind.config.js` is wrong.",
        "You are using `npm` instead of `yarn`.",
        "You forgot to add a `plugins` entry."
      ],
      answer: "Your `content` path in `tailwind.config.js` is wrong.",
      explanation: "The QnA section states: '99% of the time, your `content` path in `tailwind.config.js` is wrong. Make sure it's *correctly* pointing to your template files.'"
    },
    {
      question: "In your HTML, which CSS file should you link?",
      options: [
        "The `tailwind.config.js` file",
        "The source file (e.g., `src/input.css`)",
        "The *generated* output file (e.g., `dist/output.css`)",
        "A CDN link to the full Tailwind library"
      ],
      answer: "The *generated* output file (e.g., `dist/output.css`)",
      explanation: "The notes state: 'You link the *generated* file (`output.css`) in your HTML.' The browser never sees your `input.css` file."
    },
    {
      question: "How can you add a custom component class (like `.btn-primary`) using Tailwind's utilities?",
      options: [
        "You can't; this is only possible in Bootstrap.",
        "By using the `@layer components` directive and the `@apply` rule in your CSS file.",
        "By adding it to the `plugins` array in `tailwind.config.js`.",
        "By creating a new file named `btn-primary.css`."
      ],
      answer: "By using the `@layer components` directive and the `@apply` rule in your CSS file.",
      explanation: "The example `src/input.css` file shows this exact method: `@layer components { .btn-primary { @apply py-2 px-4 bg-brand-blue ...; } }`."
    }
  ],
  "tailwind-css-utility-classes": [
    {
      question: "In the 'LEGO Bricks' analogy, what is Tailwind?",
      options: [
        "A pre-built LEGO set (the 'Police Car')",
        "A giant bin of individual LEGO bricks (single-purpose utilities)",
        "The instruction booklet",
        "The glue"
      ],
      answer: "A giant bin of individual LEGO bricks (single-purpose utilities)",
      explanation: "The analogy states: 'Tailwind is like getting a giant bin of individual LEGO bricks. You get hundreds of tiny, single-purpose pieces... You build any custom design...'"
    },
    {
      question: "What does the Tailwind utility class `p-4` mean?",
      options: [
        "padding: 4px",
        "padding: 40%",
        "padding: 1rem (since 1 unit = 0.25rem)",
        "padding: 4em"
      ],
      answer: "padding: 1rem (since 1 unit = 0.25rem)",
      explanation: "The notes explain: 'Spacing... Uses a numeric scale where `1` = `0.25rem`.' Therefore, `p-4` means `padding: 1rem` (4 * 0.25)."
    },
    {
      question: "What does the class `px-4` do?",
      options: [
        "padding on the x-axis (left and right)",
        "padding on the y-axis (top and bottom)",
        "padding: 4px",
        "max-width: 4rem"
      ],
      answer: "padding on the x-axis (left and right)",
      explanation: "The notes define the directional utilities: '`px-4` (x-axis: padding-left & right)'."
    },
    {
      question: "How would you create a three-column grid with a gap using Tailwind?",
      options: [
        "flex flex-col-3 gap-3",
        "grid grid-cols-3 gap-4",
        "grid-3 gap-4",
        "flex-grid-3 gap-4"
      ],
      answer: "grid grid-cols-3 gap-4",
      explanation: "The notes list these utilities: `grid` (for `display: grid`), `grid-cols-3` (for `grid-template-columns: 1fr 1fr 1fr`), and `gap-4` (for `gap: 1rem`)."
    },
    {
      question: "A developer's HTML has a long list of classes. Why is this not considered 'bad' in Tailwind?",
      options: [
        "It is bad and should always be avoided.",
        "Because the classes are co-located with the HTML and are consistent.",
        "Because the browser will automatically combine them.",
        "Because it makes the HTML file smaller."
      ],
      answer: "Because the classes are co-located with the HTML and are consistent.",
      explanation: "The QnA section addresses this: '1) You are co-locating your styles with your markup... 2) The classes are consistent, so `p-4` always means the same thing. 3) In... React, you... [abstract] this long class string...'"
    },
    {
      question: "How do you use an 'arbitrary value' for a style that isn't in the theme?",
      options: [
        "You must add it to the `tailwind.config.js` file.",
        "You have to write a separate CSS file.",
        "Use square brackets, e.g., `mt-[13px]`",
        "You can't; you must use the theme values."
      ],
      answer: "Use square brackets, e.g., `mt-[13px]`",
      explanation: "The QnA section explains: 'You use **arbitrary values**. The JIT engine lets you generate classes on the fly using square brackets: `mt-[13px]`.'"
    }
  ],
  "tailwind-css-responsive-design": [
    {
      question: "A developer writes `<div class=\"p-4 md:p-8\">`. What will the padding be on a mobile screen?",
      options: [
        "p-8 (2rem)",
        "p-4 (1rem)",
        "p-12 (3rem)",
        "0"
      ],
      answer: "p-4 (1rem)",
      explanation: "Tailwind is mobile-first. The class `p-4` (without a prefix) is the 'base' style and applies to all screens. The `md:p-8` class *overrides* it *only* on medium screens and up."
    },
    {
      question: "What does the class `lg:text-4xl` mean?",
      options: [
        "Set text to 4xl on *all* screens.",
        "Set text to 4xl on *only* large screens (1024px to 1280px).",
        "Set text to 4xl on large screens (1024px) *and up*.",
        "Set text to 4xl on large screens (1024px) *and down*."
      ],
      answer: "Set text to 4xl on large screens (1024px) *and up*.",
      explanation: "The notes define the prefixes as `min-width` queries. 'A class like `md:p-8`... means \"on medium screens *and up*, set the padding to 8.\"'"
    },
    {
      question: "What is the correct syntax for a class that changes its background on hover, *only* on medium screens and up?",
      options: [
        "hover:md:bg-blue-700",
        "md:hover:bg-blue-700",
        "hover:bg-blue-700 md:bg-blue-500",
        "md-hover:bg-blue-700"
      ],
      answer: "md:hover:bg-blue-700",
      explanation: "The notes state: 'The responsive prefix *always* comes first: `md:hover:bg-blue-700`.'"
    },
    {
      question: "In the responsive card example, what class is used to change the layout from vertical to horizontal on medium screens?",
      options: [
        "md:flex",
        "md:grid",
        "md:block",
        "md:w-full"
      ],
      answer: "md:flex",
      explanation: "The example code's parent `div` has the class `md:flex`. This applies `display: flex` on medium screens and up, which arranges the image and text content into a row."
    },
    {
      question: "How would you hide an element on mobile but show it on `lg` screens and up?",
      options: [
        "hidden lg:visible",
        "visible lg:hidden",
        "hidden lg:block",
        "block lg:hidden"
      ],
      answer: "hidden lg:block",
      explanation: "Following the mobile-first approach: you set the default state, `hidden` (which applies to all screens), and then *override* it on large screens with `lg:block` (or `lg:flex`, etc.)."
    },
    {
      question: "Which of these is the *largest* default breakpoint (for large desktops)?",
      options: [
        "sm",
        "md",
        "lg",
        "xl"
      ],
      answer: "xl",
      explanation: "The notes list the default breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), and `xl` (1280px)."
    }
  ],
  "tailwind-css-components": [
    {
      question: "In the 'LEGO Kit' analogy, what is the `@apply` directive?",
      options: [
        "The instruction booklet (React Component)",
        "The individual bricks (utilities)",
        "The glue to stick bricks together into an inflexible component",
        "A pre-built LEGO set (Bootstrap)"
      ],
      answer: "The glue to stick bricks together into an inflexible component",
      explanation: "The analogy states: '`@apply` (The Glue): You can glue the bricks... together, call it `.red-car`... This is fast, but it's inflexible. It's \"stuck\" as a car.'"
    },
    {
      question: "What is the **strongly recommended** approach for abstracting repeated utilities in a React project?",
      options: [
        "Use `@apply` to create many custom CSS classes",
        "Create a React component (e.g., `Button.tsx`) and keep the utilities inside that file",
        "Use arbitrary values (`mt-[13px]`) for everything",
        "Stop using Tailwind and use Bootstrap"
      ],
      answer: "Create a React component (e.g., `Button.tsx`) and keep the utilities inside that file",
      explanation: "The notes state: 'In a framework-based project, this is the **strongly recommended** approach... keep the utilities inside that component's file. Your HTML stays clean...'"
    },
    {
      question: "What is the main *disadvantage* of using `@apply`?",
      options: [
        "It makes your CSS files smaller.",
        "It's more flexible than a React component.",
        "You are writing custom CSS again, and the resulting component is less flexible.",
        "It only works for colors."
      ],
      answer: "You are writing custom CSS again, and the resulting component is less flexible.",
      explanation: "The notes list the 'Con' of `@apply`: 'You are now writing custom CSS again... You've created a \"component\" that is less flexible than its utility-based original.'"
    },
    {
      question: "A developer is always writing `text-[#FF0000]`. What is the *correct* Tailwind way to handle this?",
      options: [
        "Create a React component for it.",
        "Use `@apply text-[#FF0000]` to create a `.text-red` class.",
        "Add it to the `theme.colors` in `tailwind.config.js` so they can use `text-brand-red`.",
        "This is the correct way."
      ],
      answer: "Add it to the `theme.colors` in `tailwind.config.js` so they can use `text-brand-red`.",
      explanation: "The notes describe this exact scenario under 'Option 3: Customizing Your Theme': 'The correct way is to add this to your `tailwind.config.js` file, so you can use `text-brand-red`.'"
    },
    {
      question: "Why is a React Component a more flexible abstraction than `@apply`?",
      options: [
        "It is not, `@apply` is more flexible.",
        "Because the component can accept *props* (e.g., `variant=\"danger\"`) to conditionally change its utilities.",
        "Because React components are written in CSS, not JavaScript.",
        "Because `@apply` does not work with responsive prefixes."
      ],
      answer: "Because the component can accept *props* (e.g., `variant=\"danger\"`) to conditionally change its utilities.",
      explanation: "The QnA section explains: 'The React component can accept *props* to change the utilities. For example, you could pass a `variant=\"danger\"` prop and have the component *conditionally* apply `bg-red-500`...'"
    },
    {
      question: "When using `@apply`, what `@layer` directive should you wrap your custom classes in?",
      options: [
        "@layer base",
        "@layer utilities",
        "@layer components",
        "@layer apply"
      ],
      answer: "@layer components",
      explanation: "The notes state: 'You should place these in your main CSS file, wrapped in a `@layer components` directive so they can be purged correctly.'"
    }
  ],
  "css-framework-comparison": [
    {
      question: "What is the primary trade-off when choosing between Bootstrap and Tailwind?",
      options: [
        "Speed (Tailwind is faster) vs. Size (Bootstrap is smaller)",
        "Speed (Bootstrap is faster) vs. Customization (Tailwind is more customizable)",
        "Security (Bootstrap is more secure) vs. Speed (Tailwind is faster)",
        "Features (Tailwind has more) vs. Simplicity (Bootstrap is simpler)"
      ],
      answer: "Speed (Bootstrap is faster) vs. Customization (Tailwind is more customizable)",
      explanation: "The 'Spectrum of Abstraction' analogy states this trade-off: 'Bootstrap... is incredibly fast to get started, but very hard to customize... Tailwind... is slower to build your *first* card, but infinitely faster to build a *custom* card...'"
    },
    {
      question: "Which framework is Component-Based, and which is Utility-First?",
      options: [
        "Bootstrap is Utility-First; Tailwind is Component-Based.",
        "Both are Component-Based.",
        "Bootstrap is Component-Based; Tailwind is Utility-First.",
        "Both are Utility-First."
      ],
      answer: "Bootstrap is Component-Based; Tailwind is Utility-First.",
      explanation: "This is the core concept of the entire chapter, stated clearly in the comparison table: Bootstrap is 'Component-Based' and Tailwind is 'Utility-First'."
    },
    {
      question: "Which framework is more likely to lead to a 'look-alike' or 'Bootstrappy' website?",
      options: [
        "Tailwind CSS",
        "Bootstrap",
        "Neither",
        "Both"
      ],
      answer: "Bootstrap",
      explanation: "The comparison table and previous QnA mention this as a con for Bootstrap: 'Can lead to generic, \"Bootstrappy\" websites.' Tailwind, by contrast, 'Allows for completely unique... designs.'"
    },
    {
      question: "Why does Tailwind typically result in a smaller final CSS file size?",
      options: [
        "Its classes are just shorter",
        "It doesn't have a grid system",
        "Its JIT engine 'purges' all unused styles, shipping only what you use",
        "It's newer, so it uses more modern compression"
      ],
      answer: "Its JIT engine 'purges' all unused styles, shipping only what you use",
      explanation: "The comparison table highlights this under 'Performance' for Tailwind: 'Excellent. The JIT engine \"purges\" all unused styles, resulting in a tiny file.'"
    },
    {
      question: "According to the QnA, which framework is better for a beginner to learn CSS?",
      options: [
        "Bootstrap, because it's faster to get started.",
        "Bootstrap, because it teaches you more about CSS.",
        "Tailwind, because it forces you to think about and use real CSS properties.",
        "Neither, you should learn Sass first."
      ],
      answer: "Tailwind, because it forces you to think about and use real CSS properties.",
      explanation: "The QnA states: '...<strong>Tailwind</strong> <em>teaches you more about CSS</em>. Because you are applying `flex`, `p-4`, etc., you are constantly thinking about and using real CSS properties...'"
    },
    {
      question: "What does the advice 'Don't Fight the Framework' mean?",
      options: [
        "You should always report bugs to the framework authors.",
        "You should find a framework that is easy to use.",
        "You should embrace the philosophy of the tool you chose (e.g., use utilities in Tailwind).",
        "You should always write your own custom CSS to override the framework."
      ],
      answer: "You should embrace the philosophy of the tool you chose (e.g., use utilities in Tailwind).",
      explanation: "The QnA explains this: 'It means you should embrace the philosophy of the tool you chose. Don't use Tailwind and then write a giant custom CSS file... If you're fighting the tool, you're using the wrong tool.'"
    }
  ]
};