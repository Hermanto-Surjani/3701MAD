// onPress
// The onPress prop makes the text respond to touch events. It accepts a function that gets called when the
// text is pressed.

// Example:

import React from "react";
import { Text, Alert, View } from "react-native";
const PressableText = () => {
  const handlePress = () => {
    Alert.alert("Text Pressed!", "You have pressed the text.");
  };
  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{ color: "blue", textDecorationLine: "underline" }}
        onPress={handlePress}
      >
        Press Me
      </Text>
    </View>
  );
};
export default PressableText;
