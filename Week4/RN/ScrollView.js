/* ScrollView Componentn

Basic Usage

The ScrollView component provides a scrolling container for content that exceeds the viewport. It's
suitable for smaller lists or static content.

Example: */

import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const BasicScrollView = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {Array.from({ length: 50 }, (_, i) => (
            <Text key={i} style={styles.text}>
              Item {i + 1}
            </Text>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: 10,
    marginEnd: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 4,
    textAlign: "center",
  },
});

export default BasicScrollView;

/* Explanation:

    Content Overflow: Generates 20 text items that exceed the screen's height, enabling scrolling.
    ScrollView: Wraps content to provide scrollability.

Performance Considerations

While ScrollView is easy to use, it renders all child components at once, which can lead to performance
issues with large data sets. For efficiently rendering large lists, consider using FlatList.

Best Practices:

    Limit Content: Use ScrollView for content that doesn't exceed a few dozen items.
    Avoid Heavy Components: Keep child components lightweight to ensure smooth scrolling. */
