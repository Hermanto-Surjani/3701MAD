/* flex
Specifies how a component grows or shrinks to fill available space. It defines the proportion of space
allocated to a component relative to its siblings. */

// Example
import React from "react";
import { View, Text, StyleSheet } from "react-native";
const FlexExample = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { flex: 1 }]}>
        <Text style={[styles.text]}>Flex 1</Text>
      </View>
      <View style={[styles.box, { flex: 2 }]}>
        <Text style={[styles.text, styles.textRed]}>Flex 2</Text>
      </View>
      <View style={[styles.box, { flex: 4 }]}>
        <Text style={[styles.text, styles.textBlue]}>Flex 3</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 125,
  },
  text: {
    fontFamily: "Courier",
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  textRed: {
    color: "red",
  },
  textBlue: {
    color: "blue",
  },
  box: {
    backgroundColor: "#7d8cec",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
export default FlexExample;
