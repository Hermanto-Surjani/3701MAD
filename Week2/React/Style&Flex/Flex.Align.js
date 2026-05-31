// justifyContent
// Aligns children along the primary axis. Common values include flex-start, center, flex-end, spacebetween,
// space-around, and space-evenly.
// Example:
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JustifyContentExample = () => {
  return (
    <View style={styles.container}>
      {/* TOP SECTION */}
      <View style={styles.topSection}>
        <Text style={styles.box}>Top</Text>
        <Text style={styles.box}>Top2</Text>
        <Text style={styles.box}>Top3</Text>
        <Text style={styles.box}>Top4</Text>
      </View>

      {/* MIDDLE SECTION */}
      <View style={styles.middleSection}>
        <Text style={styles.box}>Middle</Text>
        <Text style={styles.box}>Middle2</Text>
        <Text style={styles.box}>Middle3</Text>
        <Text style={styles.box}>Middle4</Text>
      </View>

      {/* BOTTOM SECTION */}
      <View style={styles.bottomSection}>
        <Text style={styles.box}>Bottom</Text>
        <Text style={styles.box}>Bottom2</Text>
        <Text style={styles.box}>Bottom3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  topSection: {
    flex: 1,
    justifyContent: "flex-start",
  },

  middleSection: {
    flex: 1,
    justifyContent: "center",
  },

  bottomSection: {
    flex: 1,
    justifyContent: "flex-end",
  },

  box: {
    backgroundColor: "#b2dfdb",
    padding: 10,
    textAlign: "center",
    marginVertical: 4,
  },
});

export default JustifyContentExample;
