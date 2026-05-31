/* IconButton Component

IconButton.js */

// src/components/IconButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const IconButton = ({ title, iconName, onPress, iconColor, iconSize }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: 15,
    paddingBottom: 20,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    flex: 1, // Ensures buttons take equal horizontal space
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});
export default IconButton;

/* Explanation:

    TouchableOpacity: Makes the entire button touchable with opacity feedback.
    Ionicons: Renders the specified icon.
    Text: Displays the button's title.
    
Props:
    title: Button label.
    iconName: Name of the Ionicon.
    onPress: Function to execute on button press.
    iconColor & iconSize: Customize the icon's appearance. */
