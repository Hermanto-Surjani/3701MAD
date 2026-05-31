/* Creating and Using Custom Components
Creating custom components allows you to encapsulate specific functionality or UI elements, promoting
reusability and cleaner code.
Creating a Custom Button Component
Let's create a custom button component that accepts a label and an onPress handler.
Example: CustomButton.js */

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const CustomButton = ({ label, onPress, backgroundColor = "#64b5f6" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
export default CustomButton;

/* Explanation:
CustomButton Component:
    Accepts label and onPress as props.
    Uses TouchableOpacity to provide touch feedback.
    Styles are applied to the button and text for a consistent look.
Styling:
    The button has padding, a background color, rounded corners, and centered text.
    The text is styled for visibility and emphasis. */
