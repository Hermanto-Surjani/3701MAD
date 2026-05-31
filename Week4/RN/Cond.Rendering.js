/* Conditional Rendering

Basic Conditional Rendering

Conditional rendering allows components to render different UI elements based on certain conditions, such
as state or props.

Example: */

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const ConditionalRendering = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? "Hide Text" : "Show Text"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <Text style={styles.text}>Hello, World!</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginTop: 20,
    color: "#3F51B5",
  },
});
export default ConditionalRendering;

/* 
Explanation:

    isVisible State: Determines whether the text is displayed.
    Button Title: Changes based on isVisible.
    Conditional Rendering: {isVisible && <Text>...</Text>} renders the text only if
    isVisible is true. */
