import React from "react";
import { View, Text, StyleSheet } from "react-native";
const MultipleStyles = () => {
  return (
    <View style={[styles.container, styles.extraPadding]}>
      <Text style={[styles.text, styles.boldText, styles.center]}>
        Multiple Styles!
      </Text>
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
  center: {
    textAlign: "center",
  },
});
export default MultipleStyles;
