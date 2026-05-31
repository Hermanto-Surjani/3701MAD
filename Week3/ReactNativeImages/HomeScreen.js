// Displaying Remote and Local Images
// HomeScreen.js

// src/screens/HomeScreen.js
import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      {/* Displaying Remote Image */}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.remoteImage}
      />
      {/* Displaying Local Image */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.localImage}
      />
      {/* Button to Navigate to Details */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { itemId: 1 })}
      />
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
  remoteImage: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  localImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
});
export default HomeScreen;

// Explanation:
// Remote Image: Displays an image fetched from a URL.
// Local Image: Displays an image bundled with the app.
