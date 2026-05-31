# useEffect vs. useLayoutEffect

Both hooks are used for handling side effects in functional components, but they
have different timing in the execution lifecycle.

## useEffect

- Execution Timing: useEffect runs asynchronously and is scheduled after
  painting. This means it does not block the browser (or the main thread in
  React Native) from updating the screen, making it suitable for side effects
  that don't require immediate updates to the DOM or UI elements, such as data
  fetching, subscriptions, or any operations that need to happen after the
  render is visible to the user.
- Use Cases: Ideal for effects that do not need to interact directly with the
  DOM or for when the effect does not produce a visual change that needs to
  happen before the next screen paint. For example, sending analytics, updating
  document titles, or fetching data from an API.

```js
useEffect(() => {
  // Fetch data or send analytics
}, [dependencies]);
```

## useLayoutEffect

-Execution Timing: useLayoutEffect runs synchronously after DOM mutations but
before painting. It has the same signature as useEffect, but it fires at a
different point in the component's lifecycle. This makes it suitable for reading
layout from the DOM and re-rendering synchronously, ensuring changes are
reflected immediately before the user sees the update.

- Use Cases: Should be used for effects that need to interact with the DOM or
  require the updated layout dimensions after DOM changes, and before those
  changes are visually reflected. Examples include measuring the size of
  elements, animations, or applying manual DOM manipulations.

```js
useLayoutEffect(() => {
  // Measure element size or update DOM directly
}, [dependencies]);
```

## Key Differences

- Performance Implications: Because useLayoutEffect runs synchronously and can
  delay screen updates, it should be used sparingly and only for cases where its
  specific timing is necessary. Overuse of useLayoutEffect can lead to
  performance issues, especially if the synchronous operations are expensive.
- When to Use: The rule of thumb is to start with useEffect for side effects
  that do not require measuring or mutating the DOM. If you encounter flickering
  or need to make measurements or changes to the DOM before the paint, switch to
  useLayoutEffect.
