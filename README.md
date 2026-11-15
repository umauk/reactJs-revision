# ReactJS Revision: Interview Preparation

Namaste React — question-and-answer notes for revision.

## React performance

### Q: Why is React considered fast?

**A:** React helps build fast, responsive user interfaces by updating the parts of the UI that need to change instead of requiring us to manually rebuild the whole page. When state or props change, React renders the affected component tree, compares the result with the previous render, and commits the necessary changes to the browser DOM. React can also batch updates to avoid doing redundant work. This approach is often efficient, though actual performance depends on the app and how it is written.

### Q: What is the Virtual DOM, and how does it relate to React's performance?

**A:** The Virtual DOM is a common way to describe React's in-memory UI representation. React uses render results to determine what changed and then applies the required updates to the real DOM. Comparing render results is part of the process; it is not automatically faster than every direct DOM operation. React's benefit is that it provides a predictable declarative model and handles update coordination for us.

### Q: Does React update only one DOM node whenever state changes?

**A:** Not necessarily. React may render multiple components to determine the next UI, then commit the DOM changes it determines are needed. A component render does not always mean every element it returns is rewritten in the DOM. Good component structure and avoiding unnecessary work help maintain performance.

### Q: Is React always fast?

**A:** No library makes every app automatically fast. Large or unnecessary renders, expensive calculations, huge lists, and slow network or browser work can still cause delays. Measure performance and use tools and techniques such as React DevTools Profiler, list virtualization, memoization when it helps, and code splitting where appropriate.

## npm, npx, and Parcel

### Q: What is `npm`?

**A:** `npm` (Node Package Manager) is used to install and manage packages, and to run scripts defined in `package.json`.

```bash
npm install
npm install parcel --save-dev
npm run start
```

### Q: What is `npx`?

**A:** `npx` runs a package's command-line executable without requiring you to type its path inside `node_modules/.bin`. It is included with modern npm versions.

### Q: What is the difference between `npm` and `npx`?

**A:** `npm` manages packages and project scripts; `npx` runs package executables. For example, `npx parcel` invokes Parcel's command-line tool.

### Q: What does `npx parcel index.html` do?

**A:** It runs Parcel with `index.html` as the entry file. Parcel builds the app as needed and starts a local development server. The terminal prints the local URL. Keep the command running while developing; press `Ctrl+C` to stop the server.

```bash
npx parcel index.html
```

> Make sure the entry file is named `index.html` (ending in `l`). Use `index.htm` only if that is the actual filename.

### Q: Why use `npx parcel` if Parcel is already installed?

**A:** Parcel is listed as a development dependency in this project. `npx` finds and runs the project-local Parcel executable, so the project uses its installed version. If a command's package is not installed locally, `npx` may obtain a temporary copy to run, depending on npm version and options.

## What Parcel does

### Q: What is Parcel?

**A:** Parcel is a web application bundler. It follows the files imported or referenced by an entry file, transforms them when needed (for example JSX, TypeScript, CSS, and images), and creates bundles the browser can load. Parcel provides a development server and production build commands.

### Q: What happens when I run `npx parcel index.html`?

**A:** This starts Parcel's development server (the default `serve` command). Parcel processes the HTML entry and its dependencies, serves the app locally, watches for edits, and rebuilds affected output as files change. The default address is usually `http://localhost:1234`; Parcel prints the actual address in the terminal.

### Q: What does Parcel do in development mode?

**A:** Development mode is intended for local work. Parcel serves the app, rebuilds changed files, and supports fast feedback through browser reloads or Hot Module Replacement. Development output prioritizes quick iteration over production size optimizations.

### Q: What is HMR?

**A:** HMR means **Hot Module Replacement**. It lets Parcel update changed modules in the browser without reloading the entire page when the code and framework support it. This can preserve the app's current state. CSS updates are commonly applied without a full page reload; React projects can use React Fast Refresh through Parcel's framework support. If HMR is unavailable for a change, Parcel may reload the page instead.

### Q: What does Parcel's file watcher do?

**A:** The watcher monitors project files for changes. When a file changes, Parcel uses the dependency graph to figure out what is affected and rebuilds the necessary parts, then updates the browser. Parcel uses a native C++ watcher integrated with operating system file-watching features; you generally do not configure a separate watcher yourself.

### Q: What is Parcel's cache used for?

**A:** Parcel caches build results on disk (by default in `.parcel-cache`). On later builds, it can reuse valid results and rebuild only what needs updating, which can speed up development and restarts. The cache is invalidated when relevant source files, configuration, plugins, or build dependencies change. The cache directory should generally be ignored by Git.

### Q: How do I make a production build with Parcel?

**A:** Run the `build` command with the entry file. Parcel builds once and exits, writing deployable output to `dist/` by default.

```bash
npx parcel build index.html
```

### Q: How is a production build different from a development build?

**A:** A production build is optimized for deployment. Parcel enables optimizations such as minification, tree shaking (removing unused code), scope hoisting, and content-hashed output filenames. The development server is for local iteration; `parcel build` creates files to deploy.

### Q: What does `parcel watch` do?

**A:** `npx parcel watch index.html` rebuilds when files change but does not serve the app over Parcel's development HTTP server. It is useful when another server already serves the files or when building a library.

### Q: How is `npm run start` different from `npx parcel index.html`?

**A:** `npm run start` runs the `start` script configured in `package.json`. `npx parcel index.html` directly runs Parcel's executable with `index.html` as an argument. A project can define a start script such as `"start": "parcel index.html"`, then start the server with `npm run start`.

## Project files and dependencies

### Q: What is `package.json`?

**A:** It stores project metadata, scripts, and dependency declarations, including the packages the project needs.

### Q: What is `package-lock.json`?

**A:** It records the exact dependency versions and dependency tree installed for the project. This helps different installs use a consistent dependency set.

### Q: What is `node_modules`?

**A:** It is the directory containing packages installed for the project, including their files and dependencies.

### Q: What are transitive dependencies?

**A:** They are packages that a dependency uses. For example, if Parcel depends on another package, that package is a transitive dependency of this project.
