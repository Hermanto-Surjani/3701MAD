/* useState Hook

Introduction to useState

The useState hook is a fundamental part of React and React Native for managing state in functional
components. It allows components to maintain and update their own state without needing to convert them
to class components.

Basic Syntax: */

// const [state, setState] = useState(initialState);r

/*  state: The current state value.
    setState: Function to update the state.
    initialState: The initial value of the state. */

/* Managing State in Functional Components

Using useState, you can create dynamic and interactive components that respond to user inputs and
other events.

Example: */

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          title="Increase"
          onPress={() => setCount(count + 1)}
        />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Decrease"
          onPress={() => setCount(count - 1)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 64,
    margin: 10,
    padding: 10,
    marginBottom: 25,
  },
  button: {
    margin: 10,
    padding: 10,
    marginVertical: 10,
    paddingVertical: 10,
  },
  buttonWrapper: {
    marginVertical: 25,
  },
});
export default Counter;

/* Explanation:

    State Initialization: const [count, setCount] = useState(0); initializes count to 0.
    Updating State: setCount(count + 1) increases the count, while setCount(count - 1)
    decreases it.
    Reactivity: The component re-renders automatically when count changes, updating the displayed
    value. */
