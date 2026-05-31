/* Multiple Styles
You can apply multiple styles to a component by passing an array of style objects. This allows for more
flexibility and reusability of styles. */

// Example:
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const MultipleStyles = () => {
  return (
    <View style={[styles.container, styles.extraPadding]}>
      <Text style={[styles.text, styles.boldText]}>Multiple Styles!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0f7fa",
  },
  extraPadding: {
    padding: 30,
  },
  text: {
    fontSize: 16,
    color: "#006064",
  },
  boldText: {
    fontWeight: "bold",
  },
});
export default MultipleStyles;
