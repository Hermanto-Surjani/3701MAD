/* Answers to Exercises
Exercise 1: Creating a Custom Component
�. Create a Badge Component:
Badge.js */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Badge = ({ count }) => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#f44336",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
export default Badge;

/* Explanation:
Positioning: The badge is absolutely positioned at the top-right corner of its parent.
Styling: Red background, white bold text, rounded corners.
Props: Accepts a count prop to display the number.
�. Usage Example: */

// ProfilePictureWithBadge.js

// import React from "react";
// import { View, Image, StyleSheet } from "react-native";
// import Badge from "./Badge";
// const ProfilePictureWithBadge = ({ uri, unreadMessages }) => {
// return (
// <View style={styles.container}>
// <Image source={{ uri }} style={styles.image} />
// {unreadMessages > 0 && <Badge count={unreadMessages} />}
// </View>
// );
// };
// const styles = StyleSheet.create({
// container: {
// position: "relative",
// width: 100,
// height: 100,
// },
// image: {
// width: "100%",
// height: "100%",
// borderRadius: 50,
// },
// });
// export default ProfilePictureWithBadge;

// Usage in App.js
// import React from "react";
// import { View, StyleSheet } from "react-native";
// import ProfilePictureWithBadge from
// "./components/ProfilePictureWithBadge";
// const App = () => {
// return (
// <View style={styles.container}>
// <ProfilePictureWithBadge
// uri="https://example.com/profile.jpg"
// unreadMessages={3}
// />
// </View>
// );
// };
// const styles = StyleSheet.create({
// container: {
//     flex: 1,
// justifyContent: "center",
// alignItems: "center",
// },
// });

// export default App;

/* Output:
A profile picture with a red badge displaying the number 3 at the top-right corner. */
