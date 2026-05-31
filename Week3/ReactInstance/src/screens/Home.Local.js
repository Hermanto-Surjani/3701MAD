// Displaying Local Images
// Local images are bundled with the app and are ideal for static assets like logos, icons, and illustrations.
// Adding Local Images to Your Project
// �. Create an Assets Directory:
// Organize your images within an assets folder at the root level of your project.

// MyReactNativeApp/
// ├── assets/
// │ └── images/
// │ ├── logo.png
// │ └── background.jpg
// ├── src/
// │ ├── components/
// │ ├── screens/
// │ ├── navigation/
// │ └── App.js
// ├── metro.config.js
// ├── package.json
// └── README.md

// �. Add Image Files:
// Place your image files (e.g., logo.png, background.jpg) inside the assets/images/ directory.
// Using the <Image> Component with Local Sources
// To display local images, require them in the source prop.
// Example:

import React from "react";
import { View, Image, StyleSheet } from "react-native";
const LocalImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Image
        source={require("../../assets/images/background.jpg")}
        style={styles.background}
        resizeMode="cover"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  background: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
});
export default LocalImage;

// Explanation:
// source={require('../assets/images/logo.png')}: Imports the local image.
// resizeMode="cover": Ensures the image covers the entire container while maintaining aspect
// ratio.
