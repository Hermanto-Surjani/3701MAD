/* Using ActivityIndicator in React Native

The ActivityIndicator component in React Native is used to display a circular loading indicator,
which signals to users that some content or data is currently being loaded or processed.
Importing ActivityIndicator
Before you can use the ActivityIndicator, you need to import it from the react-native library: */

import { ActivityIndicator } from 'react-native';

/* Basic Usage
To display the loading spinner, simply render the ActivityIndicator component: */

<ActivityIndicator />;

/* By default, the spinner will use the default color of the platform (gray on iOS, blue on Android) and will be
displayed as large as it can be without breaking the layout. */

/* Customizing the Appearance
You can customize the size and color of the ActivityIndicator: */

// <ActivityIndicator size="large" color="#33ff33" />

/* size can be either small or large.
color takes any valid color string. */

/* Conditional Rendering
Typically, you want to show the activity indicator only when your app is fetching data or performing some
computation. Here's an example of how to conditionally render it: */

import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
const MyComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await fetch('https://api.example.com/data');
      let json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text>Data has been loaded!</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyComponent;

/* In this example, when MyComponent mounts, it starts fetching data. During this time, isLoading is true,
and the ActivityIndicator is displayed. Once the data is fetched, isLoading is set to false, and the
ActivityIndicator is replaced with a <Text> component indicating that data loading is complete. */
