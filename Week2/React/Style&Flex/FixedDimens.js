// Dimension Styling
// Setting explicit dimensions for components ensures consistency across different devices and screen sizes.
// width and height
// Specify the size of a component. Can be defined using absolute values (e.g., 100) or percentages (e.g.,
// '50%').
// Example:

import React from "react";
import { View, StyleSheet } from "react-native";
const DimensionExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box50} />
      <View style={styles.box30} />
      <View style={styles.box20} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  box50: {
    width: "50%",
    height: 50,
    backgroundColor: "#bbdefb",
    marginRight: 5,
  },
  box30: {
    width: "30%",
    height: 50,
    backgroundColor: "#90caf9",
    marginRight: 5,
  },
  box20: {
    width: "20%",
    height: 50,
    backgroundColor: "#64b5f6",
  },
});
export default DimensionExample;
