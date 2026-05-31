// Common Props for <Text>
// <Text> component comes with several useful props that enhance its functionality. Here, we will focus on
// numberOfLines and onPress.
// numberOfLines
// The numberOfLines prop limits the text to a specific number of lines. If the text exceeds this limit, it
// truncates the remaining text and adds an ellipsis (...).

// Example:

import React from "react";
import { Text, View } from "react-native";
const LimitedText = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text numberOfLines={2} style={{ fontSize: 16 }}>
        This is a long piece of text that will be truncated after two lines. It
        demonstrates how the numberOfLines prop works in the Text component of
        React Native.
      </Text>
    </View>
  );
};
export default LimitedText;
