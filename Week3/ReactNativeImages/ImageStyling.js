// Styling Remote Images
// Styling images ensures they fit well within the app's layout and design.
// Example:

<Image
  source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
  style={styles.image}
/>;

// Stylesheet:

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image circular
    borderWidth: 2,
    borderColor: "#000",
  },
});

// Result:
// Dimensions: The image is sized to 100x100 pixels.
// Border Radius: Rounded corners (circular image).
// Border: Adds a 2-pixel black border around the image.
