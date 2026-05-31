// justifyContent
// Aligns children along the primary axis. Common values include flex-start, center, flex-end, spacebetween,
// space-around, and space-evenly.
// Example:
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const JustifyContentExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Top</Text>
      <Text style={styles.box}>Middle</Text>
      <Text style={styles.box}>Bottom</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
  },
  box: {
    backgroundColor: "#b2dfdb",
    padding: 10,
    textAlign: "center",
  },
});
export default JustifyContentExample;
