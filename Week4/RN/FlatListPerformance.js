/* Optimizing FlatList Performance

To further enhance FlatList performance, especially with large datasets, consider the following
optimizations:

�. Use Unique Keys:
    Ensure each item has a unique key using the keyExtractor prop.

�. Avoid Anonymous Functions in renderItem:
    Define renderItem outside of the render loop to prevent unnecessary re-renders.

�. Implement shouldComponentUpdate or React.memo:
    Prevent unnecessary updates for items that haven't changed.

�. Use initialNumToRender:
    Specify how many items to render initially to balance performance and user experience.

Example: */

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
  { id: "11", title: "Grapes" },
  { id: "12", title: "Kiwi" },
  { id: "13", title: "Lemon" },
  { id: "14", title: "Mango" },
  { id: "15", title: "Nectarine" },
  { id: "16", title: "Peach" },
  { id: "17", title: "Pear" },
  { id: "18", title: "Pineapple" },
  { id: "19", title: "Plum" },
  { id: "20", title: "Raspberry" },
  { id: "21", title: "Strawberry" },
  { id: "22", title: "Watermelon" },
  { id: "23", title: "Blueberry" },
  { id: "24", title: "Coconut" },
  { id: "25", title: "Fig" },
  { id: "26", title: "Guava" },
  { id: "27", title: "Lime" },
  { id: "28", title: "Passion Fruit" },
  { id: "29", title: "Pomegranate" },
  { id: "30", title: "Starfruit" },
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
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
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
