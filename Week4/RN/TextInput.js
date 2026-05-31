/* TextInput Component

Basic Usage

The TextInput component allows users to enter and edit text. It's essential for forms, search bars, and
any feature requiring user input.

Example: */

import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
const BasicTextInput = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        onChangeText={setText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "#4CAF50",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default BasicTextInput;

/* Explanation:

    placeholder: Text displayed when no input is present.
    onChangeText: Function called when the text changes.
    value: Binds the input value to component state. */
