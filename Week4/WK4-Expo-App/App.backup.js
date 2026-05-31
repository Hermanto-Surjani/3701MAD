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
  { id: "6", title: "Orange" },
  { id: "7", title: "Avocado" },
  { id: "8", title: "Papaya" },
  { id: "9", title: "Mandarin" },
  { id: "10", title: "Durian" },
  { id: "11", title: "Apple" },
  { id: "12", title: "Banana" },
  { id: "13", title: "Cherry" },
  { id: "14", title: "Date" },
  { id: "15", title: "Elderberry" },
  { id: "16", title: "Orange" },
  { id: "17", title: "Avocado" },
  { id: "18", title: "Papaya" },
  { id: "19", title: "Mandarin" },
  { id: "20", title: "Durian" },
  { id: "21", title: "Apple" },
  { id: "22", title: "Banana" },
  { id: "23", title: "Cherry" },
  { id: "24", title: "Date" },
  { id: "25", title: "Elderberry" },
  { id: "26", title: "Orange" },
  { id: "27", title: "Avocado" },
  { id: "28", title: "Papaya" },
  { id: "29", title: "Mandarin" },
  { id: "30", title: "Durian" },
  { id: "31", title: "Apple" },
  { id: "32", title: "Banana" },
  { id: "33", title: "Cherry" },
  { id: "34", title: "Date" },
  { id: "35", title: "Elderberry" },
  { id: "36", title: "Orange" },
  { id: "37", title: "Avocado" },
  { id: "38", title: "Papaya" },
  { id: "39", title: "Mandarin" },
  { id: "40", title: "Durian" },
  { id: "41", title: "Apple" },
  { id: "42", title: "Banana" },
  { id: "43", title: "Cherry" },
  { id: "44", title: "Date" },
  { id: "45", title: "Elderberry" },
  { id: "46", title: "Orange" },
  { id: "47", title: "Avocado" },
  { id: "48", title: "Papaya" },
  { id: "49", title: "Mandarin" },
  { id: "50", title: "Durian" },
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
          windowSize={2}
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
