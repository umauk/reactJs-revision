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



### 15-11-2026

## JSX and React

### Q: Is JSX part of React?

**A:** No. JSX and React are separate things. React is a JavaScript library for building user interfaces; JSX is a syntax extension for JavaScript that lets us write markup-like code inside JavaScript. They are often used together, but React does not require JSX.

### Q: What is JSX?

**A:** JSX stands for **JavaScript XML**. It is a JavaScript syntax extension that looks similar to HTML and describes the UI elements a component should return. JSX is not HTML: it is written in a JavaScript file and must be transformed into regular JavaScript before browsers can run it.

```jsx
const heading = <h1>Hello, React!</h1>;
```

### Q: Can we write a React project without JSX?

**A:** Yes. We can create React elements by calling `createElement` from React directly. JSX is optional; it mainly makes UI code easier to read and write, especially when the markup is nested.

```js
import { createElement } from 'react';

const heading = createElement('h1', null, 'Hello, React!');
```

### Q: How does JSX become something the browser can run?

**A:** A build tool such as Parcel uses a JSX transform to convert JSX into JavaScript calls that create React elements. The browser does not understand JSX syntax by itself. With the modern JSX transform, we usually do not need to import React just to write JSX, though we still import React APIs that our code uses.

### Q: What is the interview answer for “Is JSX required to use React?”

**A:** “No. JSX is optional syntax that is commonly used with React. It makes UI descriptions readable, and a build tool transforms it into JavaScript. We can write React without JSX by using `createElement`.”

### Q: Is writing JSX inside a JavaScript file correct?

**A:** Yes, when the project uses a tool that understands and transforms JSX. JSX is a JavaScript syntax extension, so a browser cannot parse raw JSX as ordinary JavaScript on its own.

### Q: If the browser does not understand JSX, why does JSX render in the UI?

**A:** Parcel processes the source before the browser runs it. Its built-in JavaScript transformer compiles JSX into JavaScript that creates React elements. Parcel then serves the transformed bundle. In the browser, React DOM takes the React elements and updates the actual DOM, which is what appears in the page.

```text
JSX source → Parcel transforms it → browser runs JavaScript → React DOM updates the page
```

### Q: Does Parcel use Babel to transform JSX?

**A:** Parcel supports JSX out of the box. In Parcel 2, its built-in transformer handles JSX by default; Babel can be added for custom transforms or plugins, but it is not necessarily the default tool doing the JSX transformation. Parcel's documentation describes its built-in JavaScript compiler as SWC-based.

### Q: What is the difference between transforming JSX and rendering the UI?

**A:** **Transforming** is a build-time step: Parcel converts JSX syntax into JavaScript. **Rendering** happens in the browser: React DOM reads the React elements produced by that JavaScript and applies updates to the browser DOM. Parcel prepares the code; React and React DOM create and update the UI at runtime.

## React components

### Q: What is a component in React?

**A:** A component is a reusable, self-contained part of a user interface. It is usually a JavaScript function that returns a description of what React should display. Components can receive data through props and can be combined or nested to build larger parts of a page. Component names must start with a capital letter.

```jsx
function Welcome() {
  return <h1>Welcome!</h1>;
}
```

### Q: How many main types of React components are there?

**A:** The two main types traditionally taught are **function components** and **class components**. Function components are the recommended choice for new code. Class components are still supported, and you may see them in older codebases.

### Q: What is a function component?

**A:** A function component is a JavaScript function whose name starts with a capital letter and which returns React elements (often written with JSX). It can use Hooks, such as `useState`, to handle state and other React features.

```jsx
function Counter() {
  return <button>Count</button>;
}
```

### Q: What is a class component?

**A:** A class component is a JavaScript class that extends React's `Component` class and defines a `render()` method that returns React elements. Class components can use `this.state` and `this.setState()` for state. Hooks are not used inside class components.

```jsx
import { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Welcome!</h1>;
  }
}
```

### Q: Which type of component should I use in a new React project?

**A:** Use function components. They work with Hooks and are the current recommended style. Learn class components so you can understand and maintain older React code.

### Q: What is a concise interview answer for “What are React components?”

**A:** “Components are reusable building blocks of a React UI. The two main types are function components and class components. Function components are preferred in modern React; class components remain supported, mainly for existing code.”

### Q: What is component composition in React?

**A:** Component composition means building a larger UI by combining smaller components. A parent component can render child components, pass them data through props, and arrange them into a page. This encourages reuse and keeps each component focused on a clear part of the interface.

```jsx
function Header() {
  return <h1>My Shop</h1>;
}

function ProductCard({ name }) {
  return <p>Product: {name}</p>;
}

function App() {
  return (
    <main>
      <Header />
      <ProductCard name="Tea" />
      <ProductCard name="Coffee" />
    </main>
  );
}
```

Here, `App` composes `Header` and `ProductCard` to form a larger UI. The `name` prop lets the same `ProductCard` component display different products.

### Q: What is a concise interview answer for “What is component composition?”

**A:** “Component composition is the practice of assembling a user interface from smaller components. Parent components render child components and can pass them data through props, which makes the UI easier to reuse and maintain.”



