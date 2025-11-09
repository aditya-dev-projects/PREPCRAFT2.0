export const Chapter2Quiz = {
  "introduction-to-version-control": [
    {
      question: "What is the primary purpose of a Version Control System (VCS)?",
      options: [
        "To write code faster",
        "To host websites",
        "To track and manage changes to files over time",
        "To debug code"
      ],
      answer: "To track and manage changes to files over time",
      explanation: "A VCS, like Git, creates a history of your project. It allows you to see who made what changes, revert to old versions, and collaborate without overwriting each other's work."
    },
    {
      question: "What is a 'commit' in the context of Git?",
      options: [
        "A new branch",
        "A snapshot of your project at a specific point in time",
        "A merge conflict",
        "A file on GitHub"
      ],
      answer: "A snapshot of your project at a specific point in time",
      explanation: "A 'commit' is the fundamental unit of Git. It's a saved snapshot of all your tracked files in the repository, identified by a unique ID and a commit message."
    },
    {
      question: "What is the main difference between a 'Centralized' (like SVN) and 'Distributed' (like Git) VCS?",
      options: [
        "Centralized is newer than Distributed",
        "Only Distributed can be used on Windows",
        "Centralized stores history on one server; Distributed gives every user a full copy of the history",
        "Only Centralized can handle large files"
      ],
      answer: "Centralized stores history on one server; Distributed gives every user a full copy of the history",
      explanation: "In a CVCS, the main repository is the single source of truth. In a DVCS like Git, every developer's 'clone' is a full-fledged repository with the entire project history."
    },
    {
      question: "Which of these is NOT a benefit of using a VCS?",
      options: [
        "Collaboration with a team",
        "Automatically finding and fixing all bugs in your code",
        "Branching and merging",
        "Reverting to previous versions"
      ],
      answer: "Automatically finding and fixing all bugs in your code",
      explanation: "A VCS helps you manage *changes* and *collaboration*, but it is not a debugging tool. It won't find logic errors, syntax errors, or other bugs in your code."
    },
    {
      question: "What does 'cloning' a repository mean?",
      options: [
        "Creating a new branch",
        "Deleting the repository",
        "Making a local copy of a remote repository on your machine",
        "Uploading your files to a server"
      ],
      answer: "Making a local copy of a remote repository on your machine",
      explanation: "Cloning is the initial step to get a copy of a project (e.g., from GitHub) onto your local computer. This copy includes all files, history, and branches."
    },
    {
      question: "What is an 'atomic commit'?",
      options: [
        "A commit that is very small",
        "A commit that includes many different unrelated changes",
        "A commit that successfully completes a single, logical unit of work",
        "The very first commit in a repository"
      ],
      answer: "A commit that successfully completes a single, logical unit of work",
      explanation: "An atomic commit is a best practice. It means a single commit should contain all the changes for *one* feature or *one* bug fix, and nothing else. This makes the history clean and easy to understand."
    }
  ],
  "git-installation-configuration": [
    {
      question: "Which command checks your currently installed version of Git?",
      options: [
        "git --v",
        "git --version",
        "git check-version",
        "git version-check"
      ],
      answer: "git --version",
      explanation: "Running `git --version` in your terminal is the standard way to confirm that Git is installed correctly and to see which version you are running."
    },
    {
      question: "What is the command to set your global username for all Git projects?",
      options: [
        "git config --global user.name \"Your Name\"",
        "git set user.name \"Your Name\"",
        "git config --user \"Your Name\"",
        "git username \"Your Name\" --global"
      ],
      answer: "git config --global user.name \"Your Name\"",
      explanation: "This is a one-time setup step. Git embeds this name into every commit you make. Using the `--global` flag sets it for every repository on your system."
    },
    {
      question: "What is the command to set your global email for all Git projects?",
      options: [
        "git config --email \"you@example.com\"",
        "git email --global \"you@example.com\"",
        "git config --global user.email \"you@example.com\"",
        "git set user.email \"you@example.com\""
      ],
      answer: "git config --global user.email \"you@example.com\"",
      explanation: "Similar to the username, this email is attached to every commit you make. It's crucial for services like GitHub to link your commits to your account."
    },
    {
      question: "How can you view all your global Git configuration settings?",
      options: [
        "git config --list --global",
        "git show config",
        "cat ~/.gitconfig",
        "git config --view"
      ],
      answer: "git config --list --global",
      explanation: "This command will list all the configuration settings (like name, email, aliases, etc.) that apply to your user account across all repositories."
    },
    {
      question: "What is the purpose of the `.gitconfig` file?",
      options: [
        "It's a file in your project that lists all commits.",
        "It's a global file (usually in your home directory) that stores your Git configuration settings.",
        "It's a file used to ignore other files.",
        "It's a file that stores your GitHub password."
      ],
      answer: "It's a global file (usually in your home directory) that stores your Git configuration settings.",
      explanation: "When you run `git config --global`, you are actually editing the text in your `~/.gitconfig` file. It's the central file for your user-specific Git settings."
    },
    {
      question: "How would you set a *project-specific* email that overrides your global email?",
      options: [
        "You cannot override the global config.",
        "Run `git config user.email \"local@example.com\"` inside the project folder.",
        "Run `git config --local user.email \"local@example.com\"` inside the project folder.",
        "Edit the `~/.gitconfig` file directly."
      ],
      answer: "Run `git config user.email \"local@example.com\"` inside the project folder.",
      explanation: "By default, `git config` without the `--global` flag writes to the project's local config file (`.git/config`). This local setting always overrides the global setting."
    }
  ],
  "git-basics": [
    {
      question: "What is the command to initialize a new, empty Git repository in your current folder?",
      options: [
        "git create",
        "git start",
        "git init",
        "git new"
      ],
      answer: "git init",
      explanation: "Running `git init` creates a hidden `.git` subdirectory in your project folder. This `.git` folder contains all the history and metadata for your new repository."
    },
    {
      question: "What does the `git status` command do?",
      options: [
        "It shows your commit history.",
        "It shows the difference between two branches.",
        "It uploads your code to GitHub.",
        "It shows which files are modified, staged, or untracked."
      ],
      answer: "It shows which files are modified, staged, or untracked.",
      explanation: "This is one of the most-used commands. It gives you a complete overview of the current state of your working directory and staging area."
    },
    {
      question: "What is the command to add a file (e.g., `index.js`) to the 'staging area'?",
      options: [
        "git commit index.js",
        "git add index.js",
        "git stage index.js",
        "git save index.js"
      ],
      answer: "git add index.js",
      explanation: "`git add` takes your modified files and adds them to the staging area (also called the 'index'), which prepares them to be included in the next commit."
    },
    {
      question: "What is the command to save your staged changes as a new commit with a message?",
      options: [
        "git commit -m \"My message\"",
        "git save \"My message\"",
        "git add -m \"My message\"",
        "git push \"My message\""
      ],
      answer: "git commit -m \"My message\"",
      explanation: "This command takes everything from the staging area (`git add`) and saves it as a new snapshot in your project's history. The `-m` flag allows you to provide a commit message."
    },
    {
      question: "What is the command to view the commit history of your repository?",
      options: [
        "git history",
        "git log",
        "git list",
        "git status --history"
      ],
      answer: "git log",
      explanation: "`git log` displays a list of all commits in reverse chronological order, showing the commit hash, author, date, and commit message."
    },
    {
      question: "You've modified a file but NOT run `git add` on it. What state is this file in?",
      options: [
        "Staged",
        "Committed",
        "Modified but not staged",
        "Untracked"
      ],
      answer: "Modified but not staged",
      explanation: "The file is 'Modified' because it has changed from the last commit. However, it is 'not staged' because you haven't used `git add` to prepare it for the next commit."
    }
  ],
  "working-with-branches-merging": [
    {
      question: "What is the main benefit of using branches in Git?",
      options: [
        "It makes your project files smaller.",
        "It creates a backup of your code.",
        "It allows you to work on new features or bug fixes in isolation without affecting the main codebase.",
        "It automatically deploys your code."
      ],
      answer: "It allows you to work on new features or bug fixes in isolation without affecting the main codebase.",
      explanation: "Branches are like parallel universes. They let you (and your team) work on different things at the same time. The 'main' branch can remain stable while you experiment in a 'feature' branch."
    },
    {
      question: "What is the command to create a new branch named 'new-feature'?",
      options: [
        "git branch new-feature",
        "git new-branch new-feature",
        "git checkout new-feature",
        "git create branch new-feature"
      ],
      answer: "git branch new-feature",
      explanation: "This command creates a new pointer (a branch) to your current commit. It does *not* switch you to that branch; it just creates it."
    },
    {
      question: "What is the command to *switch* your working directory to an existing branch named 'new-feature'?",
      options: [
        "git branch --switch new-feature",
        "git move new-feature",
        "git checkout new-feature",
        "git go new-feature"
      ],
      answer: "git checkout new-feature",
      explanation: "`git checkout` (or the newer `git switch new-feature`) updates all the files in your working directory to match the snapshot of the 'new-feature' branch."
    },
    {
      question: "What is the command to create a new branch AND switch to it in one step?",
      options: [
        "git branch -c new-feature",
        "git switch -n new-feature",
        "git new -b new-feature",
        "git checkout -b new-feature"
      ],
      answer: "git checkout -b new-feature",
      explanation: "The `-b` flag stands for 'branch' and is a very common shortcut. It tells Git to first create the new branch and then immediately check it out."
    },
    {
      question: "You are on the 'main' branch and want to integrate changes from the 'feature' branch. What is the command?",
      options: [
        "git merge main feature",
        "git merge feature",
        "git merge feature main",
        "git add feature"
      ],
      answer: "git merge feature",
      explanation: "The command is `git merge <branch-to-merge-in>`. You must first be *on* the receiving branch (e.g., `git checkout main`), and *then* you run `git merge feature` to pull its changes in."
    },
    {
      question: "What is a 'merge conflict'?",
      options: [
        "A bug in your code found during merging",
        "When two branches have the same name",
        "An error when pushing to GitHub",
        "When Git cannot automatically combine changes because the same lines were edited in both branches"
      ],
      answer: "When Git cannot automatically combine changes because the same lines were edited in both branches",
      explanation: "A merge conflict is not an error; it's Git's way of saying, 'I don't know how to combine these changes. You are the human, you must decide.' You have to manually edit the file to fix the conflict."
    }
  ],
  "github-introduction-account-setup": [
    {
      question: "What is the primary difference between Git and GitHub?",
      options: [
        "They are the same thing.",
        "Git is a code editor; GitHub is a version control system.",
        "Git is a local VCS tool; GitHub is a cloud-based service for hosting Git repositories.",
        "Git is for a single user; GitHub is for teams."
      ],
      answer: "Git is a local VCS tool; GitHub is a cloud-based service for hosting Git repositories.",
      explanation: "You use Git on your local machine to create commits. You use GitHub (the website) to push your commits to a remote server to back them up and collaborate with others."
    },
    {
      question: "What is a 'repository' on GitHub?",
      options: [
        "Your user profile",
        "A project folder that contains all your code and its full version history",
        "A single file in your project",
        "A list of your followers"
      ],
      answer: "A project folder that contains all your code and its full version history",
      explanation: "A repository (or 'repo') is the most basic unit of GitHub. It's the 'container' for your entire project, including all files, branches, and the complete commit history."
    },
    {
      question: "What is '2FA' (Two-Factor Authentication) in the context of GitHub?",
      options: [
        "A way to have two owners for one repository",
        "A required security layer that involves a password and a second code (e.g., from your phone)",
        "A tool for formatting code in two styles",
        "A Git command for finding bugs"
      ],
      answer: "A required security layer that involves a password and a second code (e.g., from your phone)",
      explanation: "2FA adds a critical layer of security to your account. Even if someone steals your password, they cannot log in without the second factor (like a code from an app)."
    },
    {
      question: "What is an 'SSH key' used for with GitHub?",
      options: [
        "To encrypt your files so GitHub can't read them",
        "A feature for styling your GitHub profile",
        "A secure way to authenticate your computer with GitHub without typing your password every time",
        "A license for your open-source project"
      ],
      answer: "A secure way to authenticate your computer with GitHub without typing your password every time",
      explanation: "An SSH key pair provides a secure, password-less connection. You add your 'public' key to GitHub, and your 'private' key stays on your computer. They work together to prove your identity."
    },
    {
      question: "Which of these is NOT a primary feature of GitHub?",
      options: [
        "Hosting Git repositories",
        "A code editor that runs in the cloud (Codespaces)",
        "A tool for automatically finding and fixing all bugs in your code",
        "A system for tracking bugs and feature requests (Issues)"
      ],
      answer: "A tool for automatically finding and fixing all bugs in your code",
      explanation: "GitHub provides hosting, issue tracking, pull requests, and more, but it is not an AI that automatically fixes your logic errors. That is still the developer's job."
    },
    {
      question: "What is the `README.md` file in a GitHub repository?",
      options: [
        "A file that lists all the bugs",
        "A file that configures your Git settings",
        "A Markdown file that serves as the 'front page' or documentation for your project",
        "A file that stores your GitHub password"
      ],
      answer: "A Markdown file that serves as the 'front page' or documentation for your project",
      explanation: "The `README.md` is the first thing people see when they visit your repo. It's written in Markdown and should explain what your project is, how to install it, and how to use it."
    }
  ],
  "remote-repositories": [
    {
      question: "What is the `git clone <URL>` command used for?",
      options: [
        "To upload your files to a URL",
        "To create a new, empty repository on your machine",
        "To download a full copy of a remote repository from a URL",
        "To initialize a new project"
      ],
      answer: "To download a full copy of a remote repository from a URL",
      explanation: "Cloning is the most common way to get a project from GitHub onto your local computer. It automatically sets up the remote (named 'origin') for you."
    },
    {
      question: "What is the `git push` command used for?",
      options: [
        "To download changes from the remote",
        "To upload your local commits to the remote repository",
        "To create a new branch",
        "To discard your local changes"
      ],
      answer: "To upload your local commits to the remote repository",
      explanation: "`git push` sends your committed changes (the snapshots you saved with `git commit`) from your local machine up to the remote server, like GitHub."
    },
    {
      question: "What is the `git pull` command?",
      options: [
        "It's the same as `git push`",
        "It's the same as `git clone`",
        "It discards all your local changes",
        "It downloads changes from the remote and immediately tries to merge them into your current branch"
      ],
      answer: "It downloads changes from the remote and immediately tries to merge them into your current branch",
      explanation: "`git pull` is a combination of two other commands: `git fetch` (which downloads) and `git merge` (which integrates). It's the most common way to update your local branch."
    },
    {
      question: "What is the critical difference between `git fetch` and `git pull`?",
      options: [
        "`git fetch` is for uploading, `git pull` is for downloading",
        "`git fetch` downloads remote changes but does NOT merge; `git pull` downloads AND merges",
        "`git fetch` only works on GitHub, `git pull` works everywhere",
        "There is no difference"
      ],
      answer: "`git fetch` downloads remote changes but does NOT merge; `git pull` downloads AND merges",
      explanation: "`git fetch` is a 'safe' command. It just updates your local 'remote-tracking' branches. `git pull` is more 'aggressive' as it immediately tries to merge those changes, which could result in a merge conflict."
    },
    {
      question: "What is 'origin' in Git?",
      options: [
        "The very first commit in a repository",
        "The 'main' branch",
        "The default name/alias for the remote repository you cloned from",
        "Your local computer"
      ],
      answer: "The default name/alias for the remote repository you cloned from",
      explanation: "When you run `git clone ...`, Git automatically creates a remote named 'origin' that points to the URL you cloned from. This is why you run `git push origin main`."
    },
    {
      question: "You've created a new local repo with `git init`. How do you link it to an empty GitHub repo at `...URL...`?",
      options: [
        "git remote add origin <URL>",
        "git link <URL>",
        "git remote setup <URL>",
        "git push <URL>"
      ],
      answer: "git remote add origin <URL>",
      explanation: "This command tells your local repository, 'I want to create a new remote named 'origin' that points to this specific URL.' This is the crucial step to connect a local repo to a remote one."
    }
  ],
  "collaboration-workflows": [
    {
      question: "What is a 'Pull Request' (PR) on GitHub?",
      options: [
        "A command to download files",
        "A way to ask the project maintainers to 'pull' your changes into their main branch",
        "A Git command to force a merge",
        "A notification that your code has a bug"
      ],
      answer: "A way to ask the project maintainers to 'pull' your changes into their main branch",
      explanation: "A PR is a formal way to propose your changes. You push your new branch to GitHub and then open a PR, which starts a discussion and code review process."
    },
    {
      question: "What is the purpose of the 'Issues' tab on GitHub?",
      options: [
        "To see a history of all merge conflicts",
        "To track bugs, request new features, and manage project tasks",
        "To write your project's documentation",
        "To see a list of all your branches"
      ],
      answer: "To track bugs, request new features, and manage project tasks",
      explanation: "GitHub Issues is the project management part of a repository. It's where all discussions about bugs, features, and tasks happen."
    },
    {
      question: "What is a 'fork' in GitHub?",
      options: [
        "A merge conflict",
        "An older name for a branch",
        "A personal copy of someone else's repository that you control",
        "A command to delete a repository"
      ],
      answer: "A personal copy of someone else's repository that you control",
      explanation: "You 'fork' a repo when you want to contribute but don't have write access. You create a copy on your own GitHub account, make changes, push to your fork, and then open a PR from your fork."
    },
    {
      question: "What is the main difference between a 'fork' and a 'branch'?",
      options: [
        "There is no difference.",
        "A branch is part of the original repo; a fork is a completely separate copy of the *entire* repo.",
        "You can only have one fork, but many branches.",
        "Forks are local, branches are remote."
      ],
      answer: "A branch is part of the original repo; a fork is a completely separate copy of the *entire* repo.",
      explanation: "Branches live *inside* a repository (e.g., `main`, `feature`). A fork is a new, separate repository on your own account that is a copy of the original."
    },
    {
      question: "What is the standard 'GitHub Flow' for contributing to a project?",
      options: [
        "Commit directly to the 'main' branch",
        "Clone, make a new branch, commit, push the branch, and open a Pull Request",
        "Fork the repo, commit to your 'main' branch, then push",
        "Email your changes to the project owner"
      ],
      answer: "Clone, make a new branch, commit, push the branch, and open a Pull Request",
      explanation: "This is the core workflow. You *never* commit directly to 'main'. You always create a new, descriptive branch (e.g., `fix-login-bug`), make your commits, push that branch, and open a PR."
    },
    {
      question: "What is a 'code review'?",
      options: [
        "An automated test that runs on your code",
        "A feature that automatically formats your code",
        "The process where other developers read your code in a Pull Request, add comments, and approve it",
        "A Git command to check for errors"
      ],
      answer: "The process where other developers read your code in a Pull Request, add comments, and approve it",
      explanation: "A code review is a human-centric quality check. Team members review the PR to catch bugs, suggest improvements, and ensure the code meets project standards before it's merged."
    }
  ],
  "git-best-practices": [
    {
      question: "What is the primary purpose of a `.gitignore` file?",
      options: [
        "To list all the files in your project",
        "To tell Git which files and folders (like `node_modules`) to intentionally ignore",
        "To store your Git configuration",
        "To write your commit messages"
      ],
      answer: "To tell Git which files and folders (like `node_modules`) to intentionally ignore",
      explanation: "The `.gitignore` file prevents you from accidentally committing files that don't belong in the repo, such as secret keys (`.env`), system files (`.DS_Store`), or large dependency folders."
    },
    {
      question: "Which of these is a characteristic of a *good* commit message?",
      options: [
        "It is very long and detailed",
        "It is blank",
        "It is short, in the present tense, and describes *what* the commit does (e.g., 'Fix login button bug')",
        "It just says 'WIP' or 'stuff'"
      ],
      answer: "It is short, in the present tense, and describes *what* the commit does (e.g., 'Fix login button bug')",
      explanation: "A good commit message is a summary of the change. A common convention is a 50-character subject line in the imperative/present tense (e.g., 'Add', 'Fix', 'Refactor')."
    },
    {
      question: "Which of the following files should you *always* add to your `.gitignore`?",
      options: [
        "`index.html`",
        "`.env` (environment variables / secret keys)",
        "`package.json`",
        "Your CSS files"
      ],
      answer: "`.env` (environment variables / secret keys)",
      explanation: "You must *never* commit secret keys, passwords, or API keys to a repository. The `.env` file holds this sensitive data, so it must be ignored."
    },
    {
      question: "What does the best practice 'commit early and often' mean?",
      options: [
        "You should only commit once per day",
        "You should make small, logical commits every time you complete a small piece of work",
        "You should push your code to GitHub every 5 minutes",
        "You should combine all your work into one giant commit at the end of the week"
      ],
      answer: "You should make small, logical commits every time you complete a small piece of work",
      explanation: "Instead of one huge commit, it's better to make many small, 'atomic' commits. This creates a clean history and makes it much easier to find bugs or revert specific changes."
    },
    {
      question: "Why should you generally avoid committing large binary files (like videos or .zip files) to Git?",
      options: [
        "Git cannot store them",
        "It's not a problem, you should always commit them",
        "Git is not designed for them; it drastically inflates the repository size for everyone, forever",
        "They must be committed to a special 'media' branch"
      ],
      answer: "Git is not designed for them; it drastically inflates the repository size for everyone, forever",
      explanation: "Git is optimized for text. When you commit a binary file, Git stores the *entire* file for every single change. This makes the repo permanently huge and slow to clone."
    },
    {
      question: "What is the 'main' (or 'master') branch used for?",
      options: [
        "It's a branch for all experimental work",
        "It's a branch that should be deleted",
        "It's the branch that represents the stable, official, 'source of truth' for the project",
        "It's where all merge conflicts are stored"
      ],
      answer: "It's the branch that represents the stable, official, 'source of truth' for the project",
      explanation: "The 'main' branch should always be clean and deployable. All new work is done in feature branches and only merged into 'main' after it is complete, tested, and reviewed."
    }
  ]
};