import React from "react";
import { Image, StyleSheet } from "react-native";
const ProfilePicture = ({ uri }) => {
  return <Image source={{ uri }} style={styles.image} />;
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
});
export default ProfilePicture;
