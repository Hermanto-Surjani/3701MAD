/* Flexbox Layout
Flexbox is a powerful layout system in React Native that allows for the creation of responsive and adaptive
layouts. It provides control over the alignment, direction, and spacing of components within a container.

flexDirection

Determines the primary axis direction (row or column) along which children are laid out. */

// Example:
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const FlexDirectionExample = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.box}>Box 1</Text>
      <Text style={styles.box}>Box 2</Text>
      <Text style={styles.box}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  box: {
    backgroundColor: "#ffccbc",
    padding: 10,
    margin: 5,
  },
});

export default FlexDirectionExample;
