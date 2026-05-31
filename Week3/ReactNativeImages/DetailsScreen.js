// Rendering Ionicons
// DetailsScreen.js

// src/screens/DetailsScreen.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const DetailsScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      {/* Displaying Ionicons Icon */}
      <Ionicons name="ios-settings" size={30} color="#4CAF50" />
      <Text style={styles.text}>Settings Icon</Text>
      {/* Button to Go Back */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});
export default DetailsScreen;

// Explanation:
// Ionicons Icon: Renders the "settings" icon from Ionicons.
// Button: Navigates back to the previous screen.
