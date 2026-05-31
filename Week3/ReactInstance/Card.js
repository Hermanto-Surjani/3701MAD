import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Card = ({ title, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: "#37474f",
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: "#546e7a",
  },
});
export default Card;
