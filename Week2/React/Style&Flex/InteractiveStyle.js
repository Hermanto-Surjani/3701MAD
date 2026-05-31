// Interactive Styles: Changing Style on Press
// Creating interactive components enhances user experience. One common interaction is changing the style
// of a component when it is pressed, such as altering opacity to indicate a press action.

// Creating a Button with Opacity Change

// This example demonstrates how to create a button that changes its opacity when pressed, providing visual
// feedback to the user.
// Example:
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
const InteractiveButton = () => {
  const [pressed, setPressed] = useState(false);
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
    Alert.alert("Button Pressed!", "You have pressed the button.");
  };
  return (
    <TouchableOpacity
      style={[styles.button, pressed && styles.buttonPressed]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#81c784",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    opacity: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
});
export default InteractiveButton;
