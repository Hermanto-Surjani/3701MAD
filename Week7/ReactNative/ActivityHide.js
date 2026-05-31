/* Hiding the ActivityIndicator After a Delay

Sometimes, you might want to wait a few moments before showing the indicator to avoid a flickering effect
for quick load times. You can use setTimeout to achieve this: */

useEffect(() => {
  const timer = setTimeout(() => {
    fetchData();
  }, 2000); // Adjust time to your preference
  return () => clearTimeout(timer);
}, []);

/* This will delay the execution of fetchData() by 2 seconds.

Conclusion

The ActivityIndicator is a simple yet powerful component that can significantly improve the user
experience by providing a visual cue during data loading or processing times. Always remember to manage
its visibility carefully to align with your app's loading state.

Remember to test the component in both light and dark modes of your app, as the default color might not
be visible against different backgrounds. If you need to support dark mode, consider using a color that is
visible in both modes. */
