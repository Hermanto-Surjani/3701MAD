import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
const InteractiveButton = () => {
  const [pressed, setPressed] = useState(false);
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
    Alert.alert("Button Pressed!", "Button was tapped!", [
      { text: "OK to Continue" },
    ]);
  };
  return (
    <TouchableOpacity
      style={[styles.button, pressed && styles.buttonPressed]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.buttonText}>Tap Me</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#64b5f6",
    paddingVertical: 15,
    borderRadius: 8,
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
