// Introduction to TouchableOpacity

// TouchableOpacity is one of several "Touchable" components provided by React Native to handle touch
// interactions. It wraps any component and makes it respond to touch events by decreasing its opacity when
// pressed, providing visual feedback to users.

// Key Features:
//  *   Opacity Feedback: Automatically reduces the opacity of the wrapped component when pressed,
//      indicating the touch action.
//  *   Simple API: Easy to use with straightforward props like onPress, activeOpacity, etc.
//  *   Gesture Handling: Supports basic touch events such as onPress, onLongPress, onPressIn, and
//      onPressOut.

// Example Usage:
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
const TouchableOpacityExample = () => {
  const handlePress = () => {
    Alert.alert("TouchableOpacity", "Button Pressed!");
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
export default TouchableOpacityExample;
