import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import ProfilePicture from "./ProfilePicture";
import UserInfo from "./UserInfo";
import CustomButton from "../components/CustomButton";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAhbuhgmVBt6ro0O1CZQaLbu4AB-LzEA0FA&s" />
      <UserInfo name="John Doe" email="john.doe@example.com" />
      <CustomButton
        label="Edit Profile"
        onPress={() => Alert.alert("Edit Profile Pressed!")}
      />
      <CustomButton
        label="Logout"
        onPress={() => Alert.alert("Logout Pressed!")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
});
export default ProfileScreen;
