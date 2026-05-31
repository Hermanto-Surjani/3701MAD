// alignContent
// Aligns lines of wrapped content along the cross axis. Useful when there are multiple lines due to wrapping.
// Example:

import React from "react";
import { View, Text, StyleSheet } from "react-native";
const AlignContentExample = () => {
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
    flexWrap: "wrap",
    alignContent: "space-between",
    height: 200,
    padding: 20,
  },
  box: {
    backgroundColor: "#ffcdd2",
    padding: 10,
    margin: 5,
    width: 80,
    textAlign: "center",
  },
});
export default AlignContentExample;
