import React from 'react';

const Chapter2 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'introduction-to-version-control':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">2.1: Introduction to Version Control</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Version Control is a system that records changes to a file or set of files over time so that you can recall specific versions later. It's a fundamental tool in software development that allows you to track your project's history, revert to previous versions, and collaborate with others without overwriting each other's work.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Time Machine for Your Code</h2>
            <p className="opacity-90">
              Imagine you're working on a project. You make a change that breaks everything, and you wish you could go back to the version you had an hour ago. Version Control is that time machine.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">Analogy: Save Points in a Video Game</h3>
              <ul className="list-disc ml-6 space-y-2 opacity-90 mt-2">
                <li>Every time you reach a significant milestone (e.g., a feature is complete), you create a "save point" called a <strong>commit</strong>.</li>
                <li>This commit saves a snapshot of your entire project at that exact moment.</li>
                <li>If you later make a mistake, you can simply load a previous save point, effectively undoing all the changes made since then.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. What Problem Does VCS Solve?</h2>
            <p className="opacity-90">
              Without a Version Control System (VCS), collaboration is chaotic. You end up with a folder full of files like:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>`project_final.zip`</li>
                <li>`project_final_v2.zip`</li>
                <li>`project_final_v2_sara_edits.zip`</li>
                <li>`project_final_v3_REALLY_FINAL.zip`</li>
              </ul>
              <p className="mt-2 opacity-90">This is slow, error-prone, and makes it impossible to merge changes from different people. A VCS automates this entire process.</p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Centralized vs. Distributed VCS</h2>
            <p className="opacity-90">
              There are two main types of version control systems.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                  <h3 className="font-bold">Centralized (CVCS)</h3>
                  <p className="text-sm opacity-90 mt-1">Has a single central server that stores all the project history. Developers "check out" files from that server. (e.g., Subversion, CVS).</p>
                  <p className="text-sm opacity-90 mt-1"><strong>Weakness:</strong> If the central server goes down, nobody can work or save their changes.</p>
              </div>
              <div>
                  <h3 className="font-bold">Distributed (DVCS)</h3>
                  <p className="text-sm opacity-90 mt-1">Every developer gets a full copy (a "clone") of the entire project's history. (e.g., <strong>Git</strong>, Mercurial).</p>
                  <p className="text-sm opacity-90 mt-1"><strong>Strength:</strong> You can work offline, make commits, and view history. If the main server fails, any developer's clone can be used to restore it.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. Why Git Won the "VCS Wars"</h2>
            <p className="opacity-90">
              Git is the most popular VCS in the world because it is:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Fast:</strong> Most operations (like committing and branching) are nearly instantaneous because they happen on your local machine.</li>
                <li><strong>Powerful Branching:</strong> Git's system for creating and merging branches is its killer feature, making it painless to work on multiple features in parallel.</li>
                <li><strong>Distributed:</strong> As mentioned above, this provides flexibility and redundancy.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. Git vs. GitHub: The Tool vs. The Service</h2>
            <p className="opacity-90">
              This is a crucial distinction for beginners.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg grid md:grid-cols-2 gap-4">
              <div>
                  <h3 className="font-bold">Git</h3>
                  <p className="text-sm opacity-90 mt-1">Git is the <strong>software</strong>, the version control system itself. It is a command-line tool you install and run locally on your computer to track your files.</p>
              </div>
              <div>
                  <h3 className="font-bold">GitHub</h3>
                  <p className="text-sm opacity-90 mt-1">GitHub is a <strong>web-based service</strong> (a company) that hosts your Git projects. It's a "clubhouse" for your code. It provides a remote, central location to store your code, collaborate with others, and manage your projects.</p>
              </div>
            </div>
            <p className="mt-2 opacity-90">You use <strong>Git</strong> on your computer, and you push your code to <strong>GitHub</strong> to back it up and share it. (Other services like GitLab and Bitbucket are alternatives to GitHub).</p>
            
            <h2 className="text-2xl font-semibold pt-4">6. The Three "Trees" of Git</h2>
            <p className="opacity-90">
              To understand Git commands, you must visualize these three areas where your code lives:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Working Directory:</strong> Your project folder; the files you are currently editing. This is your "messy workshop."</li>
                <li><strong>Staging Area (or Index):</strong> An intermediate area. When you `git add` a file, you move it from the workshop to a "ready for shipping" box.</li>
                <li><strong>Repository (.git directory):</strong> Your project's permanent history. When you `git commit`, you take the "shipping box" (Staging Area) and save it forever in your project's history log.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold pt-4">7. The Basic Workflow in a Nutshell</h2>
            <p className="opacity-90">
              The fundamental, everyday workflow of Git is a two-step process:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>`git add` (Stage):</strong> You tell Git which of your changes you want to include in your next save point.</li>
                <li><strong>`git commit` (Save):</strong> You create the save point, permanently recording the staged changes into your project's history with a descriptive message.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. What is a "Repository"?</h2>
            <p className="opacity-90">
              A repository (or "repo") is the entire collection of files and folders associated with a project, along with its complete history of changes. When you run `git init` in a folder, you are creating a new local repository.
            </p>

            <h2 className="text-2xl font-semibold pt-4">9. What is a "Commit"?</h2>
            <p className="opacity-90">
              A commit is a snapshot of your repository at a specific point in time. It is the fundamental unit of Git. Each commit has a unique ID (a SHA hash), an author, an email, a timestamp, and a message explaining the change.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">10. What is a "Branch"?</h2>
            <p className="opacity-90">
              A branch is a lightweight, movable pointer to a specific commit. The default branch is usually called `main` or `master`. Branching allows you to create an independent line of development to work on a new feature without affecting the stable `main` branch.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">11. Why is it Essential for Collaboration?</h2>
            <p className="opacity-90">
              Git allows multiple developers to work on the same project at the same time.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Developer A can work on the "login" feature on their own branch.</li>
                <li>Developer B can work on the "user-profile" feature on a different branch.</li>
                <li>When both features are complete, Git provides tools to **merge** these different branches back together into the `main` branch, combining their work.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <p className="opacity-90">
              Remember these key ideas as you begin your journey with Git.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Version Control is like a time machine for your code.</li>
                <li>Git is the local tool; GitHub is the cloud-based service for hosting and collaboration.</li>
                <li>The core workflow is to `add` your changes to a staging area and then `commit` them to your history.</li>
                <li>Branching is Git's most powerful feature and is essential for both solo and team development.</li>
              </ul>
            </div>

          </div>
        </div>
      );
    case 'git-installation-configuration':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">2.2: Git Installation & Configuration</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Before you can start using the powerful features of Git, you need to perform a one-time setup on your computer. This chapter walks you through installing the Git software and, most importantly, configuring it with your identity.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: Your Developer ID Card</h2>
            <p className="opacity-90">
              Think of this process like getting hired for a new job. First, you are given the company's tools (<strong>installing Git</strong>). Then, you are given an ID card that identifies you as an employee (<strong>configuring Git</strong>). You need both before you can start working on any projects. This initial setup ensures that every change (commit) you make is stamped with your name and email.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. Checking for Existing Git</h2>
            <p className="opacity-90">
              Before installing, it's a good idea to check if Git is already on your system. Open your terminal and type:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'git --version'}
              </code></pre>
              <p className="mt-2 opacity-90">If you see a version number (e.g., `git version 2.39.0`), you already have Git installed and can skip to step 6.</p>
            </div>

            <h2 className="text-2xl font-semibold pt-4">3. Installing on Windows</h2>
            <p className="opacity-90">
              The recommended way to install Git on Windows is to use the official installer.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>Go to the official website: <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">git-scm.com/downloads</a>.</li>
                <li>Download the installer for Windows.</li>
                <li>Run the installer. It will present you with many options. For beginners, it is safe to accept all the default options by clicking "Next" repeatedly.</li>
                <li>This installation also includes **Git BASH**, a terminal for Windows that is much better for running Git commands than the default Command Prompt.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Installing on macOS</h2>
            <p className="opacity-90">
              macOS users have a couple of easy options.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Xcode Command Line Tools:</strong> The easiest way. Open your terminal and type `git --version`. If you don't have it, a popup will appear asking you to install the "command line developer tools". Follow the prompts.</li>
                <li><strong>Homebrew:</strong> If you use the Homebrew package manager, you can simply run:
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'brew install git'}</code></pre>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Installing on Linux (Debian/Ubuntu)</h2>
            <p className="opacity-90">
              You can install Git directly from your terminal using the `apt` package manager.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'sudo apt update\nsudo apt install git'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">6. Crucial First-Time Config: `user.name`</h2>
            <p className="opacity-90">
              Once Git is installed, you **must** tell it your name. This name will be attached to every commit you make.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'git config --global user.name "Your Name"'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Crucial First-Time Config: `user.email`</h2>
            <p className="opacity-90">
              Similarly, you must tell Git your email address. This should be the same email you use for your GitHub account.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'git config --global user.email "youremail@example.com"'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Good Practice: Set Default Branch Name</h2>
            <p className="opacity-90">
              The historical default branch name was `master`. The modern, inclusive standard is `main`. You can tell Git to use `main` as the default for all new repositories you create.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'git config --global init.defaultBranch main'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">9. Good Practice: Configure Your Text Editor</h2>
            <p className="opacity-90">
              Sometimes, Git will need to open a text editor (e.g., to write a complex commit message). You can tell it to use VS Code.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'git config --global core.editor "code --wait"'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. Checking Your Configuration</h2>
            <p className="opacity-90">
              To check all your configuration settings, you can run:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'git config --list'}
              </code></pre>
              <p className="mt-2 opacity-90">This will show you your saved name, email, default branch, and more.</p>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Authentication with GitHub (SSH)</h2>
            <p className="opacity-90">
              To connect your local Git to GitHub securely without typing your password every time, you should use SSH.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Generate an SSH Key:</strong> Run `ssh-keygen` in your terminal and press Enter to accept the defaults.</li>
                <li><strong>Copy Your Public Key:</strong> Copy the contents of the public key file (usually `~/.ssh/id_rsa.pub`).</li>
                {/* FIX: Escaped > characters */}
                <li><strong>Add Key to GitHub:</strong> In GitHub, go to Settings &gt; SSH and GPG keys &gt; New SSH key, and paste your key.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">12. Key Strategy Summary</h2>
            <p className="opacity-90">
              This one-time setup is crucial for a smooth development workflow.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Install Git using the official installer for your OS.</li>
                <li>Configure your `user.name` and `user.email` immediately.</li>
                <li>Set your default branch to `main`.</li>
                <li>Add your SSH key to GitHub to enable secure, password-less connections.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'git-basics':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">2.3: Git Basics (Init, Add, Commit, Status, Log)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Now that Git is installed and configured, it's time to learn the core, everyday commands that you will use constantly. These five commands—`init`, `status`, `add`, `commit`, and `log`—form the fundamental workflow for tracking changes in any project.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Three Trees</h2>
            <p className="opacity-90">
              To understand Git, you must visualize three "trees" or areas where your code lives. These commands move changes between them.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Working Directory:</strong> Your project folder; the files you are currently editing. This is your "messy workshop."</li>
                <li><strong>Staging Area (or Index):</strong> An intermediate area. When you `git add` a file, you move it from the workshop to a "ready for shipping" box.</li>
                <li><strong>Local Repository (.git):</strong> Your project's permanent history. When you `git commit`, you save a snapshot of the staging area to your history.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. `git init`: Initializing a Repository</h2>
            <p className="opacity-90">
              This is the first command you run in a new project. It tells Git to start tracking the current folder.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>Navigate to your project's root folder in the terminal.</li>
                <li>Run the command:
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'git init'}</code></pre>
                </li>
                <li>This creates a hidden `.git` subdirectory where Git stores all its tracking information. You only run this once per project.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. `git status`: Your Project Dashboard</h2>
            <p className="opacity-90">
              This is your most-used command. It tells you the current state of your repository. Run it often!
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">`git status` will show you:</p>
              <ul className="list-disc ml-6 space-y-2 opacity-90 mt-2">
                <li><strong>Untracked files:</strong> New files Git doesn't know about yet.</li>
                <li><strong>Modified files:</strong> Files that have been changed but not yet staged.</li>
                <li><strong>Staged files:</strong> Files that are ready to be committed.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. `git add`: The Staging Area</h2>
            <p className="opacity-90">
              The `git add` command moves changes from your working directory to the staging area. This is how you tell Git which changes you want to include in your next save point.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Stage a single file'}<br/>
                {'git add index.html'}<br/><br/>
                {'# Stage multiple files'}<br/>
                {'git add styles.css script.js'}<br/><br/>
                {'# Stage ALL new and modified files in the project'}<br/>
                {'git add .'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. `git commit`: Creating a Save Point</h2>
            <p className="opacity-90">
              This command takes all the changes from the staging area and saves them as a permanent snapshot in your repository's history.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">The `-m` flag allows you to add a "commit message" directly from the command line. This message is mandatory and should describe the changes you made.</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'git commit -m "Add initial HTML structure for homepage"'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. How to Write a Good Commit Message</h2>
            <p className="opacity-90">
              Writing clear commit messages is a critical skill. A good message follows these rules:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Use the imperative mood (e.g., "Add feature", "Fix bug" instead of "Added feature", "Fixed bug").</li>
                <li>Keep the subject line short (under 50 characters).</li>
                <li>If more detail is needed, skip a line and write a longer body.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. `git log`: Viewing Your Project's History</h2>
            <p className="opacity-90">
              This command shows you the history of all the commits you have made, starting with the most recent.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <p className="opacity-90">It will display the unique commit hash (ID), the author, the date, and the commit message for each save point.</p>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# View the full commit history'}<br/>
                {'git log'}<br/><br/>
                {'# View a more condensed, one-line history'}<br/>
                {'git log --oneline'}<br/><br/>
                {'# View a history with branches and merge info'}<br/>
                {'git log --oneline --graph'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. The Basic Workflow Cycle</h2>
            <p className="opacity-90">
              Your everyday local workflow will be a constant cycle of these 3 commands:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Work:</strong> You edit your files (e.g., `index.html`, `styles.css`).</li>
                <li><strong>Check:</strong> You run `git status` to see what you've changed.</li>
                <li><strong>Stage:</strong> You run `git add .` to move all your changes to the staging area.</li>
                <li><strong>Commit:</strong> You run `git commit -m "Your message"` to save those changes to your history.</li>
                <li>Repeat.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Memorize this core loop, as it's the foundation for everything else in Git.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>`git init` is run only once at the very beginning.</li>
                <li>`git status` is your "are we there yet?" command. Use it all the time.</li>
                <li>The `add` to `commit` sequence is the two-step process to save your work.</li>
                <li>`git log` is your "where have I been?" command to view your history.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'working-with-branches-merging':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">2.4: Working with Branches & Merging</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Branching is arguably the most powerful feature of Git. It allows you to diverge from the main line of development and work in isolation without affecting that main line. This chapter covers the essential commands for creating, switching between, and merging branches, which is the core of collaborative development.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Parallel Universe</h2>
            <p className="opacity-90">
              Think of your main codebase (the `main` branch) as your project's "official timeline." A branch is like creating a copy of this timeline where you can safely experiment with a new feature.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>You can make changes, commit, and break things in your new branch without any impact on the stable, main timeline.</li>
                <li>Once you are happy with your new feature, you can **merge** your experimental timeline back into the official one.</li>
                <li>If the feature doesn't work out, you can simply delete the branch (the parallel universe) with no side effects.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. What is the `main` Branch?</h2>
            <p className="opacity-90">
              The `main` branch (formerly `master`) is the default branch in your repository. It should be considered your "single source of truth"—the stable, working, deployable version of your project. You should never commit broken code directly to `main`.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">3. The Feature Branch Workflow</h2>
            <p className="opacity-90">
              This is the standard professional workflow. Instead of committing directly to `main`, you follow these steps:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>Create a new branch for the feature you are working on (e.g., `user-login`).</li>
                <li>Make all your commits on this new branch.</li>
                <li>When the feature is complete, merge the `user-login` branch back into `main`.</li>
                <li>Delete the `user-login` branch.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. `git branch`: Listing and Creating</h2>
            <p className="opacity-90">
              This command is for managing your branches.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# List all branches in your local repository'}<br/>
                {'git branch'}<br/><br/>
                {'# Create a new branch named "new-feature"'}<br/>
                {'git branch new-feature'}
              </code></pre>
            </div>

            <h2 className="text-2xl font-semibold pt-4">5. `git checkout`: Switching Branches</h2>
            <p className="opacity-90">
              This command is like a "time travel" switch. It changes your entire working directory to match the state of a different branch.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Switch to the "new-feature" branch'}<br/>
                {'git checkout new-feature'}<br/><br/>
                {'# Switch back to the "main" branch'}<br/>
                {'git checkout main'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. The `checkout -b` Shortcut</h2>
            <p className="opacity-90">
              Creating a new branch and switching to it is so common that there is a shortcut command that does both at once.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Create a new branch "login-page" AND switch to it'}<br/>
                {'git checkout -b login-page'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. `git merge`: Combining Your Work</h2>
            <p className="opacity-90">
              Once you've completed your work on a feature branch, you'll want to merge it back into your `main` branch.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <h3 className="font-bold">The Merge Workflow:</h3>
              <ol className="list-decimal ml-6 space-y-2 opacity-90 mt-2">
                <li>First, switch to the branch you want to merge **into** (the receiving branch, usually `main`).</li>
                <li>Run the `git merge` command, specifying the name of the branch you want to bring in.</li>
              </ol>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Switch to the main branch'}<br/>
                {'git checkout main'}<br/><br/>
                {'# Merge the "login-page" branch into main'}<br/>
                {'git merge login-page'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Merge Conflicts: What They Are</h2>
            <p className="opacity-90">
              A merge conflict occurs when Git is unable to automatically resolve differences in code between two branches. This happens when the **same line of code** was changed in both the branches you are trying to merge. Git will pause the merge and ask you to fix it manually.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">9. How to Resolve a Merge Conflict</h2>
            <p className="opacity-90">
              When a conflict occurs, Git will mark the conflicted lines in the file with special markers:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'<<<<<<< HEAD'}<br/>
                {'  // Code from your current branch (e.g., main)'}<br/>
                {'======='}<br/>
                {'  // Code from the branch you are merging in'}<br/>
                {'>>>>>>> login-page'}
              </code></pre>
              <h3 className="font-bold mt-2">Resolution Steps:</h3>
              <ol className="list-decimal ml-6 space-y-2 opacity-90 mt-2">
                <li>Open the conflicted file in your code editor.</li>
                <li>Manually edit the file to keep the code you want and delete the conflicting code and the special markers.</li>
                <li>Save the file.</li>
                <li>Run `git add` on the file you just fixed.</li>
                <li>Run `git commit` to complete the merge.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">10. `git branch -d`: Deleting a Branch</h2>
            <p className="opacity-90">
              After a feature branch has been successfully merged into `main`, it's good practice to delete it to keep your repository clean.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Delete the "login-page" branch'}<br/>
                {'git branch -d login-page'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">11. Key Strategy Summary</h2>
            <p className="opacity-90">
              Branching is the key to safe and parallel development.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Always work on a feature branch, never directly on `main`.</li>
                {/* FIX: Escaped < and > */}
                <li>Use `git checkout -b &lt;branch-name&gt;` to create and switch to a new branch.</li>
                <li>Use `git merge` to combine your finished work back into `main`.</li>
                <li>Don't be afraid of merge conflicts; they are a normal part of the process.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'github-introduction-account-setup':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">2.5: GitHub Introduction & Account Setup</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              GitHub is the single most important platform for software developers. It is a web-based service that hosts your Git repositories, enabling collaboration, code sharing, and portfolio building. This chapter covers what GitHub is, how to set up your professional account, and how to create your first remote repository.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Social Network for Developers</h2>
            <p className="opacity-90">
              The best way to think of GitHub is as a professional social network, like LinkedIn, but centered entirely around your code. It's the place where you showcase your work, collaborate with others, and build your reputation as a developer.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Your <strong>Profile</strong> is your resume.</li>
                <li>Your <strong>Repositories</strong> are your projects or portfolio pieces.</li>
                <li>Your <strong>Commits</strong> are your work history.</li>
                <li><strong>Following</strong> others and <strong>starring</strong> their projects is how you network.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Git vs. GitHub (Recap)</h2>
            <p className="opacity-90">
              It's crucial to remember the distinction: <strong>Git</strong> is the local tool, and <strong>GitHub</strong> is the remote service.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Git:</strong> The version control software on your computer.</li>
                <li><strong>GitHub:</strong> The website where you store your repositories in the cloud.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Why Use GitHub?</h2>
            <p className="opacity-90">
              Using GitHub is essential for modern development for three reasons:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Collaboration:</strong> It's the central hub where team members can share code, review changes, and merge features.</li>
                <li><strong>Backup:</strong> It's a cloud backup for your entire project history. If your computer is lost or broken, your code is safe.</li>
                <li><strong>Portfolio:</strong> A GitHub profile with interesting projects is a powerful tool when applying for jobs.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Signing Up: Creating Your Account</h2>
            <p className="opacity-90">
              Your GitHub profile is your public face as a developer. Setting it up professionally is a critical first step.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>Go to `github.com` and click "Sign up".</li>
                <li>Choose a <strong>professional username</strong>. A good format is `firstname-lastname` or a variation. Avoid unprofessional names.</li>
                <li>Use an email address that you check regularly.</li>
                <li>Verify your email address to activate your account.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Crafting a Professional Profile</h2>
            <p className="opacity-90">
              Once your account is created, take a few minutes to make it look professional.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Upload a clear profile picture (or headshot).</strong></li>
                <li><strong>Write a concise bio:</strong> Describe your skills and interests (e.g., "Software developer focused on React and Node.js").</li>
                <li><strong>Pin Your Best Repositories:</strong> You can pin up to 6 of your most impressive projects directly to your profile page.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. The Profile README: A Special Repository</h2>
            <p className="opacity-90">
              GitHub has a special feature: if you create a new repository with the **exact same name as your username**, the `README.md` file in that repository will be displayed prominently on your profile page. This is the best place to create a detailed, custom "about me" page.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">7. Creating Your First Remote Repository</h2>
            <p className="opacity-90">
              A repository (or "repo") is a container for a project. Here’s how to create one on GitHub.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>On the GitHub homepage, click the **"+"** icon in the top-right corner and select **"New repository"**.</li>
                <li>Give your repository a short, memorable name (e.g., `my-portfolio-website`).</li>
                <li>Add a one-line description of the project.</li>
                <li>Keep the repository **Public** so that potential employers can see your work.</li>
                <li><strong>Important:</strong> Check the box to **"Add a README file"**. This initializes the repository with a file.</li>
                <li>Click **"Create repository"**.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Authentication: SSH vs. HTTPS</h2>
            <p className="opacity-90">
              To connect your local machine to GitHub, you need to authenticate.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>HTTPS:</strong> The simpler method. You just use your GitHub username and a <strong>Personal Access Token</strong> (PAT) as your password. (GitHub no longer supports password authentication).</li>
                <li><strong>SSH (Recommended):</strong> The more secure and convenient method. You generate a "key pair" on your computer and give the "public key" to GitHub. This allows you to connect without typing a password every time.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Your GitHub profile is a key part of your professional identity.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Create a clean, professional profile and username.</li>
                <li>Create a special repository matching your username to build a Profile README.</li>
                <li>Set up SSH authentication for a secure and easy workflow.</li>
                <li>Always initialize new repositories with a README file.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'remote-repositories':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">2.6: Remote Repositories (Push, Pull, Clone, Fetch)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              While Git is powerful for tracking changes on your local machine, its true potential is unlocked when you collaborate using remote repositories. A remote repository is a version of your project that is hosted on the internet, most commonly on a service like GitHub. This chapter covers the essential commands for interacting with these remotes.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The Central Library</h2>
            <p className="opacity-90">
              Think of the remote repository on GitHub as the **central library** for your project. Your local repository on your computer is your **personal copy** that you've checked out.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>When you want to start working on a project, you **clone** it (check out the book).</li>
                <li>When you've made changes and want to share them, you **push** your updates back to the library.</li>
                <li>When you want to get the latest updates from others, you **pull** them from the library.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">2. What is a "Remote"?</h2>
            <p className="opacity-90">
              A "remote" is a bookmark or a nickname that refers to a repository hosted on the internet. By default, when you clone a repository, Git automatically creates a remote named **`origin`** that points to the URL you cloned from.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">3. `git clone`: Getting a Local Copy</h2>
            <p className="opacity-90">
              This is the first command you'll use to work on an existing project. It downloads a full copy of a remote repository, including its entire history, and automatically sets up the `origin` remote for you.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Go to the GitHub repository page, click the "Code" button, and copy the URL'}<br/>
                {'git clone https://github.com/user/project.git'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. `git remote`: Managing Remotes</h2>
            <p className="opacity-90">
              You can use the `git remote` command to manage your remote connections.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# List all your remotes (usually just "origin")'}<br/>
                {'git remote -v'}<br/><br/>
                {'# Add a new remote (e.g., to link a local repo you started with `git init`)'}<br/>
                {'git remote add origin https://github.com/user/project.git'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. `git push`: Sending Your Changes</h2>
            <p className="opacity-90">
              After you have made and committed changes locally, the `git push` command uploads your committed changes from your local repository to the remote repository. This is how you share your work.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Push changes from your local "main" branch to the remote "origin"'}<br/>
                {'git push origin main'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. `git fetch`: Downloading Changes (Safely)</h2>
            <p className="opacity-90">
              `git fetch` downloads all the new data from the remote repository but **does not integrate** any of it into your local working files. It's like checking for mail and seeing there are new letters, but leaving them in the mailbox. It's safe because it doesn't change your current work.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">7. `git pull`: Downloading and Merging</h2>
            <p className="opacity-90">
              `git pull` is actually two commands in one: it first runs `git fetch` to download the new data, and then it immediately runs `git merge` to automatically integrate those changes into your current branch. It's like getting the mail and immediately mixing it with your current papers.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">8. Fetch vs. Pull: Which to Use?</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Use `git pull`</strong> for your daily workflow to stay updated. It's the most common and convenient way to sync your code.</li>
                <li><strong>Use `git fetch`</strong> when you want to see what others have done without immediately affecting your own local branches.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. The Standard Collaborative Workflow</h2>
            <p className="opacity-90">
              When working on a team, you will follow a daily cycle:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li><strong>Start Your Day:</strong> `git pull origin main` to get the latest changes from the team.</li>
                <li><strong>Create a Branch:</strong> `git checkout -b my-new-feature` to start your work.</li>
                <li><strong>Work & Commit:</strong> `git add .` and `git commit -m "..."` as you complete your work.</li>
                <li><strong>Push Your Branch:</strong> `git push origin my-new-feature` to share your branch.</li>
                <li><strong>End of Day:</strong> Switch back to `main`, `git pull` again, and repeat.</li>
              </ol>
            </div>
          </div>
        </div>
      );
    case 'collaboration-workflows':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">2.7: Collaboration Workflows (Forks, Pull Requests, Issues)</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              While `git push` and `git pull` are great for small teams with shared access, the true power of GitHub shines in open-source and large-scale collaboration. This is managed through a structured process involving forks, pull requests, and issues, which allows anyone to contribute to a project in a safe and organized way.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: The "Suggestion Box" Model</h2>
            <p className="opacity-90">
              Think of a public project on GitHub as a town's suggestion box. You can't just walk into the mayor's office and change the town's plans yourself. Instead, you follow a formal process:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                  <li>You take a copy of the town's plans for yourself (a <strong>Fork</strong>).</li>
                  <li>You work on your suggestion on your own copy.</li>
                  <li>You submit your revised plan back to the town council (a <strong>Pull Request</strong>).</li>
                  <li>The council reviews your suggestion and decides whether to merge it into the official plans.</li>
                  <li><strong>Issues</strong> are a public notice board where residents can report problems (bugs) or suggest new ideas.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold pt-4">2. Workflow 1: Shared Repository (For Teams)</h2>
            <p className="opacity-90">
              This is the most common model for company teams or small groups where everyone is a trusted collaborator.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Everyone has "push" access to the same single, central repository.</li>
                <li>All work is done on <strong>feature branches</strong> (e.g., `fix-login-bug`).</li>
                <li>When a feature is done, the developer opens a **Pull Request** to merge their branch into the `main` branch.</li>
                <li>Other team members review the code, approve it, and then it is merged.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">3. Workflow 2: The Fork & Pull Model (For Open Source)</h2>
            <p className="opacity-90">
              This model is used when you want to contribute to a project you don't have write access to (e.g., a public open-source project).
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>You **Fork** the original repository. This creates a personal copy of the project under your own GitHub account.</li>
                <li>You **Clone** your fork to your local machine.</li>
                <li>You create a branch, make changes, and push them to **your fork**.</li>
                <li>You open a **Pull Request** from your fork's branch to the **original project's** `main` branch.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold pt-4">4. What is a "Fork"?</h2>
            <p className="opacity-90">
              A fork is a personal, server-side copy of a repository. Forking allows you to freely experiment with changes without affecting the original project. It's the first step in contributing to an open-source project.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">5. What is a "Pull Request" (PR)?</h2>
            <p className="opacity-90">
              A Pull Request is the heart of collaboration on GitHub. It's a formal request to the project maintainers to "pull" your committed changes into their repository. It provides a platform for **code review**, allowing team members to comment on your changes line-by-line, suggest improvements, and have a discussion before the code is merged.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">6. What are "Issues"?</h2>
            <p className="opacity-90">
              Issues are a powerful project management tool built into every GitHub repository. They are used to track bug reports, feature requests, and other tasks.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>They create a transparent way for users to report problems ("I found a bug!").</li>
                <li>They allow maintainers to plan new features ("We should add a dark mode.").</li>
                <li>Pull Requests can be linked to Issues to automatically close the issue when the code is merged.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Keeping Your Fork in Sync</h2>
            <p className="opacity-90">
              If the original project you forked is updated, your fork will become outdated. You need to sync it.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>Add the original repository as a new remote called **`upstream`**:
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'git remote add upstream https://github.com/original-owner/project.git'}</code></pre>
                </li>
                <li>Fetch the changes from the original project:
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'git fetch upstream'}</code></pre>
                </li>
                <li>Switch to your `main` branch and merge the original project's changes:
                  <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">{'git checkout main\ngit merge upstream/main'}</code></pre>
                </li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. The Full Open Source Workflow</h2>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>Fork the project.</li>
                <li>Clone your fork.</li>
                <li>Add the original repo as the `upstream` remote.</li>
                <li>Create a new branch for your feature (`git checkout -b my-fix`).</li>
                <li>Write your code, `add`, and `commit` your changes.</li>
                <li>Push your branch to your fork (`git push origin my-fix`).</li>
                <li>Open a Pull Request on GitHub.</li>
                <li>Participate in the code review and wait for it to be merged.</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              This workflow might seem complex, but it's designed for safety and quality.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Issues:</strong> Discuss problems and features.</li>
                <li><strong>Fork:</strong> Get your own copy.</li>
                <li><strong>Branch:</strong> Work in isolation.</li>
                <li><strong>Pull Request:</strong> Propose your changes for review.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'git-best-practices':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold mb-4">2.8: Git Best Practices & .gitignore</h1>
          <div className="space-y-4">
            <p className="text-lg opacity-90">
              Knowing Git commands is one thing; using them effectively is another. Following best practices is what separates a beginner from a professional developer. These practices ensure your project history is clean, understandable, and easy to manage, especially when working in a team.
            </p>

            <h2 className="text-2xl font-semibold pt-4">1. The Core Concept: A Clean Project Diary</h2>
            <p className="opacity-90">
              Think of your Git history (`git log`) as the official diary of your project. Each commit is an entry. A good diary is easy to read, with clear entries that explain what happened and why. A bad diary (`git commit -m "stuff"`) is messy and unhelpful. Git best practices are all about maintaining a clean, professional diary.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">2. The `.gitignore` File: What It Is</h2>
            <p className="opacity-90">
              A `.gitignore` file is a simple text file you create in the root of your repository. You list files and folders in it that you want Git to **intentionally ignore**.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">3. What to Ignore with `.gitignore`</h2>
            <p className="opacity-90">
              You must ignore any file that is not your original source code. This includes:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Dependencies:</strong> The `node_modules` folder. This can be thousands of files and can be easily reinstalled by anyone who clones your project using `npm install`.</li>
                <li><strong>Environment Variables:</strong> Files like `.env` that contain secret keys, database passwords, and API credentials. **Never commit secrets to your repository.**</li>
                <li><strong>Compiled/Generated Files:</strong> Any code that is generated by a build process (e.g., a `dist` or `build` folder).</li>
                <li><strong>System Files:</strong> OS-specific files like `.DS_Store` (macOS) or `Thumbs.db` (Windows).</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">4. Example `.gitignore` File</h2>
            <p className="opacity-90">
              A typical `.gitignore` file for a MERN stack project would look like this:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Dependencies'}<br/>
                {'node_modules/'}<br/><br/>
                {'# Build output'}<br/>
                {'dist/'}<br/>
                {'build/'}<br/><br/>
                {'# Environment variables'}<br/>
                {'.env'}<br/>
                {'.env.local'}<br/><br/>
                {'# Log files'}<br/>
                {'*.log'}<br/><br/>
                {'# OS files'}<br/>
                {'.DS_Store'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">5. Best Practice: Commit Atomically</h2>
            <p className="opacity-90">
              Your commits should be "atomic"—that is, each commit should represent a **single, logical change**.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Bad Commit:</strong> "Add login feature, fix header bug, and update footer text" (This is three separate changes).</li>
                <li><strong>Good Commits:</strong>
                  <ol className="list-decimal ml-6 space-y-1">
                    <li>`Feat: Add user login form structure`</li>
                    <li>`Fix: Correct header alignment on mobile`</li>
                    <li>`Docs: Update footer copyright year`</li>
                  </ol>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">6. Best Practice: Write Good Commit Messages</h2>
            <p className="opacity-90">
              A good commit message is crucial for collaboration. It should have two parts:
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li><strong>Subject Line:</strong> A short summary (50 characters or less) in the imperative mood. Start with a type like `Feat:`, `Fix:`, `Docs:`, `Style:`, or `Refactor:`.</li>
                <li><strong>Body (Optional):</strong> A more detailed explanation of *what* changed and *why* it was changed.</li>
              </ul>
              <pre className="mt-2 p-3 sm:p-4 bg-black rounded text-xs sm:text-sm text-gray-300 overflow-x-auto"><code className="whitespace-pre break-words">
                {'# Good Commit Message\nFeat: Add rate limiting to login API\n\n- Add express-rate-limit package\n- Apply middleware to /api/auth routes\n- Prevents brute-force attacks by limiting to 5 requests per minute.'}
              </code></pre>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">7. Best Practice: Branching Strategy</h2>
            <p className="opacity-90">
              Never commit directly to the `main` branch. The `main` branch should always be stable and deployable.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ul className="list-disc ml-6 space-y-2 opacity-90">
                <li>Always create a new, descriptively named branch for every new feature or bug fix (e.g., `fix/login-bug`, `feat/user-dashboard`).</li>
                <li>Do all your work on this feature branch.</li>
                <li>Open a Pull Request to merge your branch into `main`.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">8. Best Practice: Pull Before You Push</h2>
            <p className="opacity-90">
              When working on a team, always update your local `main` branch with the latest changes from the remote (`git pull origin main`) *before* you start a new feature branch. This ensures you are working from the most up-to-date version of the code and helps prevent merge conflicts.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">9. Key Strategy Summary</h2>
            <p className="opacity-90">
              Adopting these practices will make you a more effective and professional developer.
            </p>
            <div className="p-4 sm:p-5 bg-gray-700 rounded-lg">
              <ol className="list-decimal ml-6 space-y-2 opacity-90">
                <li>Create a detailed `.gitignore` file at the start of every project.</li>
                <li>Branch for every new feature or fix. Keep `main` clean.</li>
                <li>Make small, atomic commits with clear, descriptive messages.</li>
                <li>Pull regularly to stay in sync with the remote repository.</li>
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
// FIX: Removed invalid characters at the end of the file
  }
};

export default Chapter2;