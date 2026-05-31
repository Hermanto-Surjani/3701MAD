import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
const TouchableOpacityExample = () => {
  const handlePress = () => {
    Alert.alert("TouchableOpacity", "Button Pressed!");
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
export default TouchableOpacityExample;
