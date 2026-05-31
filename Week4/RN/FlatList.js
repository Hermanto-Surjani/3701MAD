/* FlatList Component

Basic Usage

The FlatList component is optimized for rendering large lists of data.
It renders items lazily,improving performance by only rendering items
currently visible on the screen.

Example: */

import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  { id: "1", title: "Apple" },
  { id: "2", title: "Banana" },
  { id: "3", title: "Cherry" },
  { id: "4", title: "Date" },
  { id: "5", title: "Elderberry" },
  { id: "6", title: "Orage" },
  { id: "7", title: "Avocado" },
  { id: "8", title: "Papaya" },
  { id: "9", title: "Mandarin" },
  { id: "10", title: "Durian" },
  // Add more items as needed
];
const BasicFlatList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  item: {
    backgroundColor: "#FFC107",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
  },
});
export default BasicFlatList;

/* Explanation:

    data: Array of data objects to render.
    renderItem: Function that renders each item.
    keyExtractor: Unique key for each item, enhancing performance.
    contentContainerStyle: Styles applied to the content container. */
