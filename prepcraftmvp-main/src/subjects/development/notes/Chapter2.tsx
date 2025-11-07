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

// --- Main Chapter 2 Component ---

const Chapter2 = ({ noteId }: { noteId: string }) => {
  switch (noteId) {
    case 'introduction-to-version-control':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">2.1: Introduction to Version Control</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Save Points in a Video Game</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Imagine your project is a video game. A <strong>Version Control System (VCS)</strong> is your "save" functionality.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>A <strong>commit</strong> is a "save point" that you create, capturing a snapshot of your entire project at that moment.</li>
              <li>If you make a terrible mistake (like deleting a key file or breaking a feature), you can simply "load your last save" (revert to a previous commit) and pretend it never happened.</li>
              <li>Without it, you'd be stuck with file names like `project_final_v2_REALLY_FINAL.zip`, which is impossible to manage.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>Version Control</strong> is a system that records changes to a file or set of files over time so that you can recall specific versions later. It's a non-negotiable tool in professional software development.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Centralized (CVCS):</strong> An older model (e.g., Subversion) where a single central server holds all the history. If the server goes down, no one can work.</li>
              <li><strong>Distributed (DVCS):</strong> The modern model. <strong>Git</strong> is a DVCS. Every developer gets a full copy (a "clone") of the entire project's history. This provides redundancy and allows for offline work.</li>
            </ul>
            <p><strong>Core Git Terminology:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Repository (Repo):</strong> The entire project, including all its files and the complete history.</li>
              <li><strong>Commit:</strong> A single snapshot (a "save point") of the project's history.</li>
              <li><strong>Branch:</strong> An independent line of development. The default is called `main`.</li>
              <li><strong>Working Directory:</strong> The actual folder and files you are currently editing.</li>
              <li><strong>Staging Area (Index):</strong> An intermediate area where you place files you *intend* to include in your next commit.</li>
              <li><strong>Git vs. GitHub:</strong> <strong>Git</strong> is the *software* you run locally. <strong>GitHub</strong> is a *website* (a service) that hosts your repositories in the cloud for backup and collaboration.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Two-Step Commit Process</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>The fundamental workflow is a two-step process: you `add` changes to the staging area, then `commit` what's in the staging area to your history.</p>
            <CodeBlock code={`
# You make some changes to 'index.html'

# Step 1: Add the file to the staging area
# This says "I want to include this change in my next save."
git add index.html

# Step 2: Commit the staged changes
# This creates the permanent snapshot in your history.
git commit -m "Feat: Add basic HTML structure for homepage"
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the real difference between Git and GitHub?</strong>
                <p className="pl-4"><strong>Git</strong> is the *tool* (the software) on your computer that tracks changes. <strong>GitHub</strong> is the *service* (the website) that *hosts* your Git repositories in the cloud. You don't need GitHub to use Git, but you use GitHub to back up your code and collaborate with others.</p>
              </li>
              <li>
                <strong>Why is Git a "Distributed" VCS and why is that better?</strong>
                <p className="pl-4">It's "distributed" because every developer who "clones" a project gets a *full copy of the entire project history*. This is better than a "centralized" system (like Subversion) for two reasons: 1) You can work, commit, and view history entirely offline. 2) If the main server (GitHub) is down, the project isn't lost—every developer has a complete backup on their machine.</p>
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
    case 'git-installation-configuration':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">2.2: Git Installation & Configuration</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Your Developer ID Card</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a one-time setup. Think of it like starting a new job. <strong>Installing Git</strong> is like being given the company's tools. <strong>Configuring Git</strong> is like getting your official employee ID badge.</p>
            <p>You can't do any work without the tools, and the company won't accept your work unless it's "stamped" with your ID. This configuration ensures every commit you make is tagged with your name and email, so everyone knows who made what change.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Before using Git, you must install it and set your global configuration. These settings are stored in a `.gitconfig` file in your user's home directory.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Installation:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li><strong>Windows:</strong> Download and run the installer from <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">git-scm.com/downloads</a>. Accept all the default settings. This will also install **Git BASH**, a superior terminal.</li>
                  <li><strong>macOS:</strong> Open the terminal and run `git --version`. If you don't have it, it will prompt you to install the "Xcode Command Line Tools."</li>
                  <li><strong>Linux (Ubuntu/Debian):</strong> Run `sudo apt update && sudo apt install git`.</li>
                </ul>
              </li>
              <li><strong>Global Configuration:</strong> After installing, you **must** set your identity. The `--global` flag means this setting will apply to *all* Git projects on your computer.
                <ul className="list-disc ml-6 mt-2">
                  <li>`git config --global user.name "Your Name"`</li>
                  <li>`git config --global user.email "youremail@example.com"` (Use the same email as your GitHub account).</li>
                </ul>
              </li>
              <li><strong>Recommended Config:</strong> You should also set your default branch name to `main` (the modern standard) and set VS Code as your default editor.
                <ul className="list-disc ml-6 mt-2">
                  <li>`git config --global init.defaultBranch main`</li>
                  <li>`git config --global core.editor "code --wait"`</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The One-Time Setup Commands</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Run these commands in your terminal one by one to install and configure Git.</p>
            <CodeBlock code={`
# 1. Check if Git is already installed
git --version

# If not, install it (see steps above).

# 2. Set your name (CRITICAL)
git config --global user.name "Your Name"

# 3. Set your email (CRITICAL)
git config --global user.email "youremail@github.com"

# 4. Set default branch to 'main' (Recommended)
git config --global init.defaultBranch main

# 5. Check your settings
git config --list
# You should see your name, email, and default branch
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Why is this configuration mandatory?</strong>
                <p className="pl-4">Git is a *distributed* system. If you and a teammate both make commits, Git *must* have a way to label who made which change. This configuration provides that label. Without it, Git won't let you make commits.</p>
              </li>
              <li>
                <strong>What's the difference between SSH and HTTPS authentication for GitHub?</strong>
                <p className="pl-4"><strong>HTTPS</strong> is easier to set up but requires you to enter a **Personal Access Token** (PAT) as a password. <strong>SSH</strong> is more secure and convenient. You generate a "key pair" on your computer and give the "public key" to GitHub. After that, you can push and pull from your machine without ever typing a password.</p>
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
    case 'git-basics':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">2.3: Git Basics (Init, Add, Commit, Status, Log)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Two-Step Save</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>In Git, saving your work is a deliberate, two-step process. Think of it like shipping a package:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>`git add` (Staging):</strong> You've finished editing `file1.txt` and `file2.js`. You "stage" them by putting them in a "shipping box" (the <strong>Staging Area</strong>). Your other messy files (`notes.txt`) are left on your desk.</li>
              <li><strong>`git commit` (Committing):</strong> You seal the "shipping box" and write a label on it describing the contents (the <strong>commit message</strong>). You then store this box in your permanent history log (the <strong>Repository</strong>).</li>
            </ol>
            <p>This two-step process allows you to build a single, logical commit from changes in multiple files.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>These are the five fundamental commands for all local development.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`git init`</strong>: Initializes a new Git repository. You run this *once* in your project's root folder. It creates a hidden `.git` directory that tracks all history.</li>
              <li><strong>`git status`</strong>: Your most-used command. It shows the current state of your <strong>Working Directory</strong> and <strong>Staging Area</strong>. It tells you which files are untracked, modified, or staged.</li>
              <li><strong>`git add [file]`</strong>: Moves a file's changes from the Working Directory to the Staging Area, preparing it for a commit.
                <ul>
                  <li><Code>git add file.txt</Code>: Stages a single file.</li>
                  <li><Code>git add .</Code>: Stages *all* new and modified files in the current directory.</li>
                </ul>
              </li>
              <li><strong>`git commit -m "message"`</strong>: Takes all changes in the Staging Area and creates a new permanent snapshot (a <strong>commit</strong>) in your Local Repository. The `-m` flag lets you write your commit message inline.</li>
              <li><strong>`git log`</strong>: Shows a history of all commits on your current branch, with the newest at the top.
                <ul>
                  <li><Code>git log --oneline</Code>: A cleaner, one-line view of the history.</li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Core Local Workflow</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a complete simulation of a local workflow. Run these commands in your terminal.</p>
            <CodeBlock code={`
# 1. Create a new project folder and move into it
mkdir my-git-project
cd my-git-project

# 2. Initialize a new Git repository
git init

# 3. Create a new file
echo "Hello Git" > readme.md

# 4. Check the status: 'readme.md' will be 'untracked'
git status

# 5. Stage the new file
git add readme.md

# 6. Check the status again: 'readme.md' is now 'staged'
git status

# 7. Commit the staged file to history
git commit -m "Initial commit: Add readme.md"

# 8. Check the status: 'working tree clean'
git status

# 9. View the commit history
git log --oneline
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the point of the Staging Area? Why not just commit directly?</strong>
                <p className="pl-4">The staging area gives you fine-grained control. Imagine you've made changes to 10 files, but only 5 of them are related to "Feature A" (the other 5 are for "Bug B"). The staging area lets you `git add` *only* the 5 files for "Feature A" and make a clean, atomic commit for just that feature. Then, you can `git add` the other 5 files and make a separate commit for "Bug B".</p>
              </li>
              <li>
                <strong>I just made a commit, but I have a typo in the message. How do I fix it?</strong>
                <p className="pl-4">If it's the *very last* commit and you haven't pushed it, you can easily fix it with: `git commit --amend -m "My new corrected message"`. This replaces the previous commit with a new one.</p>
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
    case 'working-with-branches-merging':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">2.4: Working with Branches & Merging</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: Parallel Universes</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is Git's most powerful feature. Think of your `main` branch as the "Official Timeline."</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>When you want to work on a new feature (e.g., a "dark mode"), you create a new <strong>branch</strong>. This is like creating a "Parallel Universe" that is a perfect copy of the official timeline.</li>
              <li>You can make any changes, add commits, and even break things in this parallel universe, and the "Official Timeline" (`main`) remains perfectly safe and stable.</li>
              <li>Once your feature is finished and working, you perform a <strong>merge</strong>, which magically copies all the changes from your parallel universe back into the official timeline.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>branch</strong> is a lightweight, movable pointer to a specific commit. The <strong>`main`</strong> branch is the default branch and should always represent your stable, production-ready code.</p>
            <p>The <strong>Feature Branch Workflow</strong> is the standard professional practice:</p>
            <ol className="list-decimal ml-6 space-y-1">
              <li>Create a new branch for your feature (e.g., `feat/user-login`).</li>
              <li>Work and make commits on that branch.</li>
              <li>When finished, merge your feature branch back into `main`.</li>
              <li>Delete your feature branch.</li>
            </ol>
            <p><strong>Core Branching Commands:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`git branch`</strong>: Lists all your local branches.</li>
              <li><strong>`git branch [name]`</strong>: Creates a new branch.</li>
              <li><strong>`git checkout [name]`</strong>: Switches your Working Directory to the specified branch.</li>
              <li><strong>`git checkout -b [name]`</strong>: The most-used shortcut. It **c**reates a **n**ew **b**ranch and **checks** it **out** in one step.</li>
              <li><strong>`git merge [name]`</strong>: Merges the specified branch's history *into your current branch*.</li>
              <li><strong>`git branch -d [name]`</strong>: Deletes a local branch (only if it has been merged).</li>
            </ul>
            <p>A <strong>Merge Conflict</strong> occurs when you try to merge two branches that have *edited the same line of code*. Git will pause the merge and ask you to manually choose which version to keep.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Full Feature Branch Workflow</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This script simulates a developer adding a new feature.</p>
            <CodeBlock code={`
# 1. You are on the main branch, which is clean
# (Run 'git init' and make an initial commit first)

# 2. Create and switch to a new branch for your feature
git checkout -b feat/add-about-page

# 3. Do your work: create a new file
echo "About Us" > about.html

# 4. Stage and commit your work *on this branch*
git add about.html
git commit -m "Feat: Add basic about page"

# 5. Your feature is done! Go back to the main branch
git checkout main

# 6. Merge the feature branch *into* main
git merge feat/add-about-page
# Output: 'Fast-forward merge...'

# 7. Now 'main' has the 'about.html' file. Clean up by deleting the branch.
git branch -d feat/add-about-page
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What is a "merge conflict" and how do I fix it?</strong>
                <p className="pl-4">A merge conflict happens when you and another developer edit the *same lines* in the *same file* on different branches. When you try to merge, Git doesn't know whose change to keep. To fix it:
                  1. Git will mark the file with `&lt;&lt;&lt;&lt;&lt;&lt;&lt;`, `=======`, `&gt;&gt;&gt;&gt;&gt;&gt;&gt;` symbols.
                  2. You manually edit the file to delete the markers and keep the code you want.
                  3. You run `git add [conflicted-file]` to mark it as resolved.
                  4. You run `git commit` to finalize the merge.</p>
              </li>
              <li>
                <strong>What's the difference between `git merge` and `git rebase`?</strong>
                <p className="pl-4">This is a classic advanced question. <strong>Merge</strong> is simple: it takes all commits from your feature branch and joins them to `main` with a special "merge commit." This creates a "diamond" shape in your history. <strong>Rebase</strong> is cleaner: it *rewrites history*. It takes your feature branch commits and re-plays them, one by one, *on top* of the latest `main` branch, creating a perfectly straight, linear history.</p>
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
    case 'github-introduction-account-setup':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">2.5: GitHub Introduction & Account Setup</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: A Social Network for Code</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>If Git is your local, private diary, <strong>GitHub</strong> is the "social network" or "publishing house" where you share your work. It's your professional portfolio.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Your Profile Page:</strong> Your "author bio."</li>
              <li><strong>Your Repositories:</strong> Your "published books" that others can read, "star" (like), or "fork" (copy).</li>
              <li><strong>Your Commits:</strong> Your public work history, showing how active you are.</li>
            </ul>
            <p>You use <strong>Git</strong> (the tool) to write your book, and <strong>GitHub</strong> (the service) to publish and share it.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p><strong>GitHub</strong> is a web-based service that hosts Git repositories. It is the central platform for <strong>collaboration</strong>, <strong>code backup</strong>, and <strong>open-source development</strong>. (Alternatives include GitLab and Bitbucket).</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Remote Repositories:</strong> A cloud-based location to store your code.</li>
              <li><strong>Pull Requests:</strong> A formal process for reviewing and merging code. (See 2.7).</li>
              <li><strong>Issues:</strong> A project management tool for tracking bugs and feature requests.</li>
              <li><strong>Forks:</strong> Personal copies of other users' repositories.</li>
            </ul>
            <p><strong>Setting Up Your Profile:</strong></p>
            <ol className="list-decimal ml-6 space-y-1">
              <li>Sign up at `github.com`.</li>
              <li><strong>Choose a professional username</strong> (e.g., `ana-dev`, `j-smith`). Avoid names like `coderking99`.</li>
              <li><strong>Upload a clear profile picture.</strong></li>
              <li><strong>Write a concise bio</strong> that states who you are and what technologies you use (e.g., "Full-Stack Developer specializing in React and Node.js").</li>
              <li><strong>Pin your best projects</strong> to your profile to showcase your skills.</li>
            </ol>
            <p><strong>Profile README:</strong> This is a special feature. If you create a new repository with the <strong>exact same name as your username</strong>, the `README.md` file in that repo will be displayed as your main profile page. This is the best way to create a detailed portfolio.</p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: Creating a Profile README</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>1. On GitHub, create a new repository with the *exact same name* as your username (e.g., `your-username`).</p>
            <p>2. Check the "Add a README file" box.</p>
            <p>3. Edit that `README.md` file and add content. This is written in **Markdown**.</p>
            <CodeBlock code={`
### Hi there, I'm [Your Name] 👋

- 🔭 I’m currently working on... a MERN stack e-commerce site.
- 🌱 I’m currently learning... TypeScript and GraphQL.
- 👯 I’m looking to collaborate on... open-source React projects.
- 📫 How to reach me: ... myemail@example.com

<!-- You can add stats, tech icons, etc. -->
            `} language="markdown" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What should I put on my GitHub profile to get a job?</strong>
                <p className="pl-4">Employers want to see *activity* and *quality*. A good profile has:
                  1. A professional picture, username, and bio.
                  2. 6-8 pinned repositories with clear names.
                  3. Each pinned repo must have a good `README.md` file explaining what the project is, what tech it uses, and how to run it. A live demo link is even better.
                  4. A "green" contribution graph, showing consistent coding practice.</p>
              </li>
              <li>
                <strong>Do I need GitHub to use Git?</strong>
                <p className="pl-4">No. Git is a 100% local tool. You can use it on your computer right now without ever touching the internet. GitHub is just the most popular *cloud service* for *hosting* your Git repositories and collaborating with others.</p>
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
    case 'remote-repositories':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">2.6: Remote Repositories (Push, Pull, Clone, Fetch)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Central Library</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Your <strong>local repository</strong> (on your laptop) is your personal copy of a book. The <strong>remote repository</strong> (on GitHub) is the "master copy" in the central library.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`git clone`</strong>: Checking out the book from the library for the first time. You get a full copy of its entire history.</li>
              <li><strong>`git push`</strong>: After making your own notes (commits) in your copy, you "push" your changes to the library to update the master copy.</li>
              <li><strong>`git pull`</strong>: Your teammate just "pushed" an update. You "pull" their changes from the library's master copy to sync them with your personal copy.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>A <strong>remote</strong> is a bookmark—a name (like `origin`) that points to the URL of a repository on a service like GitHub. These commands manage the flow of data between your local repo and the remote repo.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`git clone [url]`</strong>: Downloads a full copy of a remote repository to your machine. It automatically creates the `origin` remote, pointing to that URL. This is the starting point for 99% of projects.</li>
              <li><strong>`git remote -v`</strong>: Lists all your remote connections.</li>
              <li><strong>`git remote add [name] [url]`</strong>: Connects a local repository (one you started with `git init`) to a remote one. (e.g., `git remote add origin ...`).</li>
              <li><strong>`git push [remote-name] [branch-name]`</strong>: Uploads your local branch and all its commits to the remote. (e.g., `git push origin main`). This is how you *share* your work.</li>
              <li><strong>`git pull [remote-name] [branch-name]`</strong>: The most common command. It *downloads* remote changes and *merges* them into your current local branch. (e.g., `git pull origin main`). This is how you *get* updates from others.</li>
              <li><strong>`git fetch [remote-name]`</strong>: A "safer" version of pull. It *only downloads* the remote changes but does **not** merge them. It just updates your "local copy" of the remote branches, allowing you to inspect the changes before you manually merge them.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Full Sync Workflow</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This shows two scenarios: starting a new project and contributing to an existing one.</p>
            <CodeBlock code={`
# --- Scenario 1: Starting from scratch ---

# 1. Create a local repo
git init
echo "My Project" > README.md
git add .
git commit -m "Initial commit"

# 2. Go to GitHub and create a new, *empty* repo.
#    GitHub will give you this URL:
# 3. Link your local repo to the remote one
git remote add origin https://github.com/YourName/my-project.git

# 4. Push your 'main' branch to 'origin'
# -u sets 'origin main' as the default for future pushes
git push -u origin main


# --- Scenario 2: Working on an existing project ---

# 1. Get the project from GitHub
git clone https://github.com/SomeoneElse/their-project.git
cd their-project

# 2. (Work and make local commits...)
# git checkout -b my-feature
# (edit files)
# git add .
# git commit -m "Add my feature"

# 3. Before pushing, check for updates from others
git pull origin main

# 4. Now, push your new feature branch
git push origin my-feature
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between `git fetch` and `git pull`?</strong>
                <p className="pl-4">This is a classic question. `git pull` is actually two commands in one: `git fetch` + `git merge`.
                  * <strong>`fetch`</strong> just *downloads* the new data from the remote but doesn't change your working files. It's safe.
                  * <strong>`pull`</strong> *downloads* the new data AND *merges* it into your current branch, which can sometimes cause merge conflicts.</p>
              </li>
              <li>
                <strong>My `git push` was rejected. What's the most likely reason?</strong>
                <p className="pl-4">The most common reason is that your teammate pushed changes to the same branch *after* your last `git pull`. The remote now has commits that you don't have locally. Git rejects your push to prevent you from overwriting their work. The fix is to `git pull` first (which will merge their changes), resolve any conflicts, and *then* `git push`.</p>
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
    case 'collaboration-workflows':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">2.7: Collaboration Workflows (Forks & Pull Requests)</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: The Suggestion Box Model</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of a public project on GitHub as a town's official blueprint, locked in a display case. You can't just walk up and edit it.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>`Fork`</strong>: You use the "Fork" button on GitHub to get your *own personal copy* of the blueprint. This copy is yours to mess with.</li>
              <li><strong>Branch & Commit</strong>: You take your copy home (`git clone`) and work on your suggestion in a new branch (e.g., `add-park-bench`).</li>
              <li><strong>`Pull Request (PR)`</strong>: When you're done, you submit your revised blueprint back to the town council as a "Pull Request." You are *requesting* that they *pull* your changes into the *official* blueprint.</li>
              <li><strong>Code Review</strong>: The council (project maintainers) reviews your changes, suggests edits, and (if they like it) approves and merges your PR.</li>
              <li><strong>`Issues`</strong>: A separate "public notice board" where anyone can report a bug ("pothole on Main St") or request a feature ("we need a new park").</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This workflow is the core of open-source collaboration and is used by most large teams for quality control.</p>
            <p><strong>Two Main Workflows:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>1. Shared Repository Model (Internal Teams):</strong>
                <ul>
                  <li>Everyone on the team clones the *same* central repository.</li>
                  <li>Everyone can push branches directly to that repo (e.g., `git push origin my-feature`).</li>
                  <li>To merge to `main`, a developer opens a <strong>Pull Request</strong> from their `my-feature` branch to the `main` branch *within the same repository*.</li>
                  <li>A teammate reviews the code, approves, and merges.</li>
                </ul>
              </li>
              <li><strong>2. Fork & Pull Model (Open Source / External):</strong>
                <ul>
                  <li>A contributor <strong>Forks</strong> the original repo, creating a copy on their own GitHub account.</li>
                  <li>They clone *their fork* (`git clone git@github.com:Contributor/project.git`).</li>
                  <li>They make changes and push a new branch to *their fork* (`git push origin my-feature`).</li>
                  <li>They go to GitHub and open a <strong>Pull Request</strong> from `Contributor/project:my-feature` to `OriginalOwner/project:main`.</li>
                  <li>The original project maintainers review and merge the PR.</li>
                </ul>
              </li>
            </ul>
            <p><strong>Syncing Your Fork:</strong> The original project will get new updates, making your fork "stale." You must pull those changes into your fork.
            <br/>1. Add the original repo as a remote: `git remote add upstream https://...`
            <br/>2. Fetch the original's changes: `git fetch upstream`
            <br/>3. Merge the original's `main` into your `main`: `git checkout main` then `git merge upstream/main`
            </p>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: The Open Source Contribution (Conceptual Steps)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is the full conceptual workflow. (Replace URLs and names).</p>
            <CodeBlock code={`
# 1. (On GitHub): Click the "Fork" button on the 'original/project' repo.

# 2. Clone *your* fork to your local machine
git clone https://github.com/YourName/project.git
cd project

# 3. Add the *original* repo as a remote named 'upstream'
git remote add upstream https://github.com/original/project.git

# 4. Sync your main branch with the original (a good habit)
git pull upstream main

# 5. Create a new branch for your bug fix
git checkout -b fix/typo-in-docs

# 6. Make your changes and commit
echo "Fixed a typo" > README.md
git add .
git commit -m "Docs: Fix typo in README"

# 7. Push *your new branch* to *your fork* ('origin')
git push origin fix/typo-in-docs

# 8. (On GitHub): Go to your fork and click "New Pull Request".
#    Base: 'original/project' at 'main'
#    Compare: 'YourName/project' at 'fix/typo-in-docs'
#    Then, submit the PR.
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>What's the difference between a "branch" and a "fork"?</strong>
                <p className="pl-4">A <strong>branch</strong> is an independent line of development *inside* a repository. A <strong>fork</strong> is a completely separate *copy* of the entire repository, under your own account. You fork a project once, but you might create dozens of branches within your fork.</p>
              </li>
              <li>
                <strong>What is a "code review" and why is it important?</strong>
                <p className="pl-4">A code review is the process of having other developers read and critique your code *before* it gets merged. This is the primary purpose of a Pull Request. It is the single most important practice for:
                  1. Catching bugs and logic errors.
                  2. Enforcing consistent code style.
                  3. Sharing knowledge and mentoring junior developers.</p>
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
    case 'git-best-practices':
      return (
        <div className="w-full px-4 sm:px-6 py-6 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-4">2.8: Git Best Practices & .gitignore</h2>
          
          <h3 className="text-2xl font-bold mb-3">Analogy: A Clean Project Diary</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Think of your `git log` as your project's official diary. Following best practices is the difference between a diary that's easy to read and one that's a total mess.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Bad Commit:</strong> `git commit -m "stuff"` (This is like a diary entry that just says "stuff happened." It's useless.)</li>
              <li><strong>Good Commit:</strong> `git commit -m "Feat: Add user login page"` (This is a clear, dated entry that explains *what* changed and *why*.)</li>
              <li><strong>`.gitignore` file:</strong> This is a list of things *not* to put in the diary, like your personal shopping lists or junk mail (`node_modules`, `.env`).</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Technical Concept</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>Following these practices is what separates a junior from a senior developer. They make your project maintainable and collaborative.</p>
            <p><strong>1. The `.gitignore` File:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>This is a text file named `.gitignore` in your project's root.</li>
              <li>Any file or folder pattern listed in it will be **ignored** by Git.</li>
              <li><strong>You MUST ignore:</strong>
                <ul>
                  <li>`node_modules/`: This folder is huge and can be re-created by anyone running `npm install`.</li>
                  <li>`.env`: This file contains your **secret keys** and **passwords**. Never, ever commit this.</li>
                  <li>Build output: `/build`, `/dist`</li>
                  <li>OS files: `.DS_Store`, `Thumbs.db`</li>
                </ul>
              </li>
            </ul>
            <p><strong>2. Atomic Commits:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>A commit should represent a **single, logical change**.</li>
              <li><strong>Bad:</strong> One commit with "Fix header bug, add login page, and update docs."</li>
              <li><strong>Good:</strong> Three separate commits: `Fix: Correct header alignment`, `Feat: Add user login form`, `Docs: Update README`. This makes it easy to revert one change without affecting the others.</li>
            </ul>
            <p><strong>3. Good Commit Messages:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Use the **imperative mood** (e.g., "Add feature," not "Added feature").</li>
              <li>Use a **prefix** to categorize the change:
                <ul>
                  <li>`Feat:` (a new feature)</li>
                  <li>`Fix:` (a bug fix)</li>
                  <li>`Docs:` (documentation changes)</li>
                  <li>`Style:` (formatting, semicolons, etc.)</li>
                  <li>`Refactor:` (changing code structure without changing behavior)</li>
                </ul>
              </li>
            </ul>
            <p><strong>4. Branching Strategy:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Never commit directly to `main`</strong>.</li>
              <li>Always create a new, descriptively-named **feature branch** for every task (e.g., `feat/user-auth`).</li>
              <li>Merge to `main` only via a Pull Request.</li>
            </ul>
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">Example: A Professional `.gitignore` (Node.js/React)</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <p>This is a perfect starting `.gitignore` file for any MERN stack project. You should create this file *before* your first commit.</p>
            <CodeBlock code={`
# Dependencies
# This folder is re-created by 'npm install'
/node_modules

# Build Output
# This folder is re-created by 'npm run build'
/build
/dist

# Environment Variables
# CONTAINS SECRETS! DO NOT COMMIT!
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Log files
*.log
npm-debug.log*

# OS-generated files
.DS_Store
Thumbs.db
            `} language="bash" />
          </div>
          <hr className="mb-6 border-gray-200" />

          <h3 className="text-2xl font-bold mb-3">QnA</h3>
          <div className="text-gray-700 space-y-3 mb-6">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>I accidentally committed my `.env` file and pushed it to GitHub. What do I do?</strong>
                <p className="pl-4">This is a critical situation.
                  1. **Immediately** go to that service (e.g., your database provider, AWS) and **revoke/regenerate all keys and passwords** in that file. Assume they are already stolen.
                  2. To remove the file from your *history* (just removing it in a new commit is not enough), you must use an advanced command like `git filter-branch` or the `bfg-repo-cleaner` tool.
                  3. Add `.env` to your `.gitignore` file *now* to prevent it from happening again.</p>
              </li>
              <li>
                <strong>Why use the imperative mood ("Add feature") in commit messages?</strong>
                <p className="pl-4">It's a Git convention. A commit is a *patch* or a *set of instructions* that takes your code from one state to the next. The commit message should describe what *applying* the commit will do. Think: "This commit will... `Add a new feature`" or "This commit will... `Fix a bug`."</p>
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

export default Chapter2;