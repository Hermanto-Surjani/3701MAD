// Understanding <Text>
// <Text> is used for displaying text. It supports nesting, styling, and handling touch events.
// Example:

import React from "react";
import { Text } from "react-native";
const MyText = () => {
  return (
    <Text style={{ fontSize: 18, color: "#333" }}>Hello, React Native!</Text>
  );
};
export default MyText;
