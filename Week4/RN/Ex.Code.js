/* Code Examples

Example Project Structure

Week4_ReactiveComponents/
├── src/
│ ├── components/
│ └── IconButton.js
├── App.js
├── package.json

Integrating Components with State and Conditional Rendering

App.js */

import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import IconButton from "./src/components/IconButton";
const DATA = [
  { id: "1", title: "Apple" },
  { id: "2", title: "Banana" },
  { id: "3", title: "Cherry" },
  { id: "4", title: "Date" },
  { id: "5", title: "Elderberry" },
  { id: "6", title: "Fig" },
  { id: "7", title: "Grape" },
  { id: "8", title: "Honeydew" },
  { id: "9", title: "Indian Fig" },
  { id: "10", title: "Jackfruit" },
];
const App = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(DATA);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = DATA.filter((item) => {
        const itemData = item.title.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.includes(textData);
      });
      setFilteredData(newData);
    } else {
      setFilteredData(DATA);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to React Native!</Text>
      {/* Conditional Rendering Based on Login Status */}
      {isLoggedIn ? (
        <Text style={styles.welcomeText}>Hello, User!</Text>
      ) : (
        <Text style={styles.welcomeText}>Please Log In.</Text>
      )}
      {/* Button to Toggle Login Status */}
      <Button
        title={isLoggedIn ? "Log Out" : "Log In"}
        onPress={() => setIsLoggedIn(!isLoggedIn)}
      />
      {/* TextInput for Searching */}
      <TextInput
        style={styles.input}
        placeholder="Search Fruits"
        value={search}
        onChangeText={handleSearch}
      />
      {/* FlatList to Display Filtered Data */}
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.noResult}>No results found.</Text>
        }
        style={styles.list}
      />
      {/* Icon Buttons */}
      <View style={styles.iconButtonContainer}>
        <IconButton
          title="Home"
          iconName="home"
          onPress={() => alert("Home Button Pressed")}
          iconColor="#fff"
          iconSize={20}
        />
        <IconButton
          title="Settings"
          iconName="settings"
          onPress={() => alert("Settings Button Pressed")}
          iconColor="#fff"
          iconSize={20}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    flex: 1, // Ensures the container takes up the full screen height
  },
  header: {
    fontSize: 26,
    marginBottom: 20,
    color: "#3F51B5",
    textAlign: "center",
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#4CAF50",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#F5F5F5",
    width: "100%",
    marginBottom: 20,
  },
  list: {
    flex: 1, // Allows FlatList to take up remaining space
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: "#2196F3",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: "#fff",
  },
  noResult: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#757575",
  },
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
export default App;
