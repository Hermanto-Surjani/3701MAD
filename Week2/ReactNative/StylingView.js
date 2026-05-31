// Basic Styles for <View> and <Text>

// Styling components in React Native is done using the style prop, which
// accepts an object or an array of// objects containing style properties.

// Styling <View>

// Common style properties for <View> include:
//  flex: Determines how a component grows or shrinks to fill available space.
//  flexDirection: Defines the direction of the main axis (row or column).
//  justifyContent: Aligns children along the main axis.
//  alignItems: Aligns children along the cross axis.
//  padding and margin: Adds space inside and outside the component.
//  backgroundColor: Sets the background color.

// Example:

import React from "react";
import { View } from "react-native";
const StyledView = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 20,
        backgroundColor: "#e0e0e0",
      }}
    >
      {/* Content goes here */}
    </View>
  );
};
export default StyledView;
