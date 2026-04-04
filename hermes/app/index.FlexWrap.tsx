// flexWrap
// Determines whether children should wrap onto multiple lines when they exceed the container's space.
// Values include nowrap, wrap, and wrap-reverse.
// Example:

import React from "react";
import { View, Text, StyleSheet } from "react-native";
const FlexWrapExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Box 1</Text>
      <Text style={styles.box}>Box 2</Text>
      <Text style={styles.box}>Box 3</Text>
      <Text style={styles.box}>Box 4</Text>
      <Text style={styles.box}>Box 5</Text>
      <Text style={styles.box}>Box 6</Text>
      <Text style={styles.box}>Box 7</Text>
      <Text style={styles.box}>Box 8</Text>
      <Text style={styles.box}>Box 9</Text>
      <Text style={styles.box}>Box 10</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flexWrap: "wrap-reverse",
    flexWrap: "wrap",
    padding: 20,
  },
  box: {
    backgroundColor: "#c8e6c9",
    padding: 10,
    margin: 5,
    width: 80,
    textAlign: "center",
  },
});
export default FlexWrapExample;
