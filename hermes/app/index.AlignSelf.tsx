// alignSelf
// Overrides alignItems for individual children, allowing specific alignment.
// Example:
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AlignSelfExample = () => {
  return (
    <LinearGradient
      colors={["#5cd1ff", "transparent"]}
      start={{ x: 0, y: 0 }} // top
      end={{ x: 0, y: 1 }} // bottom
      style={styles.fadeBox}
    >
      <View style={styles.container}>
        <Text style={styles.box}>Default</Text>
        <Text style={[styles.box, styles.alignSelfCenter]}>Centered</Text>
        <Text style={styles.box}>Default</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fadeBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // width: "100%", // full width of the screen
    // paddingHorizontal: 25, // <-- EXACTLY what you asked for
    paddingVertical: 25,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 25,
    // marginVertical: 20, // vertical spacing only
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
  },
  box: {
    backgroundColor: "#ffe0b2",
    padding: 10,
    marginVertical: 5,
    width: "33%",
    borderRadius: 5,
    textAlign: "center",
    flexShrink: 1,
  },
  alignSelfCenter: {
    alignSelf: "center",
    backgroundColor: "#ffab91",
  },
});
export default AlignSelfExample;
