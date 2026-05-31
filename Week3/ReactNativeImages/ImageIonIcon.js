// Using Ionicons
// Ionicons is a popular icon library offering a wide range of icons suitable for mobile applications. Using icon
// libraries enhances the visual consistency and interactivity of your app.

// Introduction to Ionicons
//  Scalable Icons: Vector-based, ensuring clarity at any size.
//  Variety: Offers a vast collection of icons for different use cases.
//  Customization: Easily customizable in terms of size, color, and other properties.

// Installing Ionicons Library
// To use Ionicons in React Native, install the react-native-vector-icons library, which includes
// Ionicons.

// npm install react-native-vector-icons

// Implementing Ionicons in Your App
// Example:

import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";

const IoniconsExample = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={30} color="#4CAF50" />
      <Text style={styles.text}>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default IoniconsExample;

// Explanation:

//  import Ionicons from 'react-native-vector-icons/Ionicons';: Imports the Ionicons
//  component.
//  <Ionicons name="home" size={30} color="#4CAF50" />: Renders the "home" icon with
//  specified size and color.
//  flexDirection: 'row': Aligns the icon and text horizontally.

// Available Icons:
// Refer to the Ionicons Catalog to explore available icon names and styles.

// Dynamic Icon Properties:
// Icons can be customized using props like name, size, color, and more.
