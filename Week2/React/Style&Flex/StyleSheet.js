/* Introduction to Styling in React Native
Styling in React Native is essential for designing visually appealing and responsive mobile applications.
Unlike traditional CSS used in web development, React Native uses JavaScript objects to style components.
Using StyleSheet
The StyleSheet API provides a way to create style objects in React Native. It offers better performance by
ensuring styles are immutable and cached. */
// Example:
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const StyledComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Styling!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fafafa",
  },
  text: {
    fontSize: 18,
    color: "#333333",
  },
});
export default StyledComponent;
