// Displaying Images from a URL

// Displaying images from a remote source is common in mobile applications, such as fetching user avatars,
// product images, or banners from a server.

// Basic Usage
// To display an image from a URL, use the uri property within the source prop.
// Example:

import React from "react";
import { View, Image, StyleSheet } from "react-native";
const RemoteImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 80,
    height: 80,
  },
});
export default RemoteImage;

// Explanation:
// source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}: Specifies the
// remote image URL.
// style={styles.image}: Sets the image dimensions.
