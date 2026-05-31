// Introduction to <View> and <Text> Components

// In React Native, <View> and <Text> are fundamental components used to build the user interface.
// Understanding <View>
// <View> is a container component that supports layout with Flexbox, styling, and handling touch events. Itʼs
// analogous to a <div> in web development.

// Example:

import React from "react";
import { View } from "react-native";
const MyComponent = () => {
  return (
    <View style={{ padding: 20, backgroundColor: "#f0f0f0" }}>
      {/* Other components go here */}
    </View>
  );
};
export default MyComponent;
