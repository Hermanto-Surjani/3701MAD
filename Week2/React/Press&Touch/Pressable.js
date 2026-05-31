// Introduction to Pressable

// Introduced in React Native 0.63, Pressable is a more versatile and flexible component designed to handle
// various press interactions. It provides a more granular control over touch events and styling based on the
// interaction state.

// Key Features:
//  *   State-Based Styling: Allows dynamic styling based on different interaction states such as pressed,
//      hovered, or focused.
//  *   Comprehensive Gesture Handling: Supports a wider range of touch events with more precise
//      control.
//  *   Better Performance: Optimized for handling complex touch interactions efficiently.
//  *   Customizable Feedback: Developers can define custom feedback behaviors instead of relying
//      solely on opacity changes.

// Example Usage:

import React from "react";
import { Pressable, Text, StyleSheet, Alert } from "react-native";
const PressableExample = () => {
  const handlePress = () => {
    Alert.alert("Pressable", "Button Pressed!");
  };
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#1c86ee" : "#4682b4",
          opacity: pressed ? 0.6 : 1,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
export default PressableExample;
