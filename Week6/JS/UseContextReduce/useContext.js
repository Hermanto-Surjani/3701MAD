/* useContext

useContext is a hook used for accessing the context in functional components. It's a way to share data
across the component tree without having to pass props down manually.

Example */

import React, { createContext, useContext } from "react";
// Create a Context
const ThemeContext = createContext("light");
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
};
const ChildComponent = () => {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
};
