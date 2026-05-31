import React from "react";
import { View, Text, StyleSheet } from "react-native";
const UserInfo = ({ name, email }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    color: "#37474f",
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#546e7a",
  },
});
export default UserInfo;
