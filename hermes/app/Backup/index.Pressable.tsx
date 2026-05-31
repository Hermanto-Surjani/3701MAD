import React from "react";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
const PressableExample = () => {
  const handlePress = () => {
    Alert.alert("Pressable", "Button Pressed!");
  };
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#1c86ee" : "#4682b4",
          opacity: pressed ? 0.6 : 1,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
export default PressableExample;
