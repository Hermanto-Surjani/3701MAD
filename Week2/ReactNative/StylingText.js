// Styling <Text>

// Common style properties for <Text> include:
// fontSize: Sets the size of the text.
// color: Sets the text color.
// fontWeight: Sets the weight (boldness) of the text.
// textAlign: Aligns the text (left, right, center).
// margin and padding: Adds space around the text.
// backgroundColor: Sets the background color of the text.

// Example:

import React from "react";
import { Text } from "react-native";
const StyledText = () => {
  return (
    <Text
      style={{
        fontSize: 20,
        color: "#4a90e2",
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        padding: 5,
        backgroundColor: "#f9f9f9",
      }}
    >
      Welcome to React Native!
    </Text>
  );
};
export default StyledText;
