/* Button Component
Basic Usage
The Button component is a simple, standardized button provided by React Native. It's easy to implement
and handles basic user interactions.
Example:
 */

import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Alert,
} from "react-native";
const BasicButton = () => {
  const handlePress = () => {
    console.log("Button Pressed!");
    alert("Button was pressed!");
  };
  return (
    <View>
      <View style={styles.container}>
        <Button title="Click Me" onPress={handlePress} color="#841584" />
      </View>
      <View style={styles.buttonTouchable}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            console.log("Pressed");
            Alert.alert("Press me was pressed!");
          }}
        >
          <Text style={styles.buttonText}>Press Me Touchable</Text>
        </TouchableOpacity>
      </View>
      <TouchableHighlight
        underlayColor="#66ccff"
        onPress={() => {
          console.log("Pressed");

          Alert.alert("Opacity was pressed!");
        }}
        style={styles.highlightButton}
      >
        <View>
          <Text>Press Me Opacity</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    padding: 25,
  },
  buttonTouchable: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: "10%",
    marginRight: "10%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#66ccff",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 5,
  },
  highlightButton: {
    marginLeft: "10%",
    marginRight: "10%",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BasicButton;

/* Explanation:
title: The text displayed on the button.
onPress: Function executed when the button is pressed. */

/* Styling Buttons

While the basic Button component offers limited styling options, you can customize it using the color
prop to change the text or background color, depending on the platform.
Example: */

// {/* <Button title="Click Me" onPress={handlePress} color="#841584" /> */}

/* Note: For more advanced styling, consider using TouchableOpacity or TouchableHighlight with
custom styles.
Handling Button Presses
Handling user interactions is straightforward with the onPress prop. You can define a function that
executes desired actions when the button is pressed. */

// Example:

// const handlePress = () => {
// alert("Button was pressed!");
// };
// Integration:
// <Button title="Show Alert" onPress={handlePress} />
