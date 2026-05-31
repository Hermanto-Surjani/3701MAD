/* Dependency Array

The dependency array controls when your effect runs:

    No dependency array: Runs after every render.
    Empty dependency array ([]): Runs once after the initial render, similar to componentDidMount.
    Array with dependencies: Runs after the initial render and whenever any dependency changes.

Cleaning up Effects

For effects that require cleanup (e.g., removing event listeners), return a cleanup function from your effect: */

useEffect(() => {
  const subscription = someSubscriptionLibrary.subscribe();
  return () => {
    someSubscriptionLibrary.unsubscribe(subscription);
  };
}, []); // Dependencies that control when this effect and cleanup run

/* This pattern ensures you manage resource usage efficiently, preventing memory leaks in your React Native
app.

Best Practices

    Effect Separation: Use multiple useEffect calls for unrelated logic to enhance component
    readability and maintainability.
    Correct Dependencies: Ensure the dependency array accurately represents all variables and props
    the effect uses.
    Performance Optimization: Be mindful of effect performance, especially in mobile contexts where
    resources are more constrained.

Conclusion

useEffect is as crucial in React Native as it is in React, providing a structured way to handle side effects in
functional components. It allows developers to integrate operations like data fetching, subscriptions, and
timers within the component lifecycle cleanly and declaratively. Understanding how to leverage useEffect
effectively is key to writing efficient, clean, and scalable React Native applications. */
