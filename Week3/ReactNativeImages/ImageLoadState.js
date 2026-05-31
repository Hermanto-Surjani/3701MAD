// Handling Image Loading States
// Managing image loading states enhances user experience by providing feedback during image fetching.
// Example: Displaying a Placeholder While Loading

import React, { useState } from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
const RemoteImageWithLoader = () => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
        onLoadEnd={() => setLoading(false)}
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
export default RemoteImageWithLoader;

// Explanation:

// useState Hook: Manages the loading state.
// ActivityIndicator: Displays a loading spinner while the image is being fetched.
// onLoadEnd: Callback invoked when the image loading is complete, updating the loading state to
// hide the spinner.
// Styling: Centers the image and spinner with specific dimensions.

// Result:
// A loading spinner appears while the remote image is being fetched and disappears once the image loads
// successfully.
