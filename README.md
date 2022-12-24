<br>

<div align="center">
  <img src="https://i.imgur.com/pVg0HpQ.png" width="256" alt="use-prefers-reduced-motion Logo">
</div>

<br>

<h1 align="center">use-prefers-reduced-motion</h1>
<h3 align="center"><a href="https://reactjs.org">React</a> hook for subscribing to user's motion preference.</h3>

<br>

<p align="center">
  <a href="https://github.com/anatoliygatt/use-prefers-reduced-motion/actions?query=workflow%3ACI">
    <img src="https://img.shields.io/github/actions/workflow/status/anatoliygatt/use-prefers-reduced-motion/ci.yml?branch=master&style=for-the-badge&logo=github&label=CI&labelColor=000000" alt="Github CI Workflow Status">
  </a>
  <a href="https://www.npmjs.com/package/@anatoliygatt/use-prefers-reduced-motion">
    <img src="https://img.shields.io/npm/v/@anatoliygatt/use-prefers-reduced-motion.svg?style=for-the-badge&logo=npm&labelColor=000000" alt="NPM Version">
  </a>
  <a href="https://github.com/anatoliygatt/use-prefers-reduced-motion/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/anatoliygatt/use-prefers-reduced-motion.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=ffffff&labelColor=000000" alt="License">
  </a>
</p>

<br>

## 🚀 Getting Started

### ⚡️ Quick Start

```shell
npm install @anatoliygatt/use-prefers-reduced-motion
```

```jsx
import { usePrefersReducedMotion } from '@anatoliygatt/use-prefers-reduced-motion';

function Example() {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <div
      className={`box ${
        prefersReducedMotion ? 'fade-in' : 'fade-in-and-scale-up'
      }`}
    />
  );
}
```

### 💻 Live Demo

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-for-anatoliygatt-use-prefers-reduced-motion-68910)

## ⚙️ Usage with Server Side Rendering (SSR)

Frameworks like Next.js and Gatsby take advantage of server-side rendering, which means that the HTML is pre-rendered at some point before it's sent to the browser. When we first render our React component tree, we don't know whether the user prefers reduced motion or not.

It may lead to the markup mismatches during hydration. In order to prevent this, we need to set the `ssr` option provided by the `usePrefersReducedMotion()` hook to `true`, like so:

```javascript
usePrefersReducedMotion({ ssr: true });
```

This will guarantee no markup mismatches between the original server render and the first client render, however, we will have to make a compromise: reduce motion of our animations for **_all users_** in the very first render.

## 👨🏼‍⚖️ License

[MIT](https://github.com/anatoliygatt/use-prefers-reduced-motion/blob/master/LICENSE)
