// Exercises

// Exercise 1: Using StyleSheet
// . Create a <View> component styled with StyleSheet that has:
// padding: 25
// backgroundColor: '#fff3e0'
// . Add a <Text> component inside the <View> that displays "Styled with StyleSheet" with:
// fontSize: 20
// color: '#e65100'

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// const StyledComponent = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Styled with StyleSheet</Text>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//     backgroundColor: "#fff3e0",
//   },
//   text: {
//     fontSize: 20,
//     color: "#e65100",
//   },
// });
// export default StyledComponent;

// Exercise 2: Implementing Flexbox Layout
// . Create a layout with a parent <View> using Flexbox to arrange three child <View> components
// horizontally (flexDirection: 'row').
// . Assign different flex values to each child:
// First child: flex: 1
// Second child: flex: 2
// Third child: flex: 3
// . Style each child with distinct background colors for differentiation.

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// const FlexExample = () => {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { flex: 1 }]}>
//         <Text style={[styles.text, styles.backBlue]}>Flex 1</Text>
//       </View>
//       <View style={[styles.box, { flex: 2 }]}>
//         <Text style={[styles.text, styles.backRed]}>Flex 2</Text>
//       </View>
//       <View style={[styles.box, { flex: 3 }]}>
//         <Text style={[styles.text, styles.backGreen]}>Flex 3</Text>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     height: 125,
//   },
//   text: {
//     fontFamily: "Courier",
//     fontWeight: "bold",
//     fontSize: 16,
//     color: "white",
//   },
//   backBlue: {
//     backgroundColor: "blue",
//   },
//   backRed: {
//     backgroundColor: "red",
//   },
//   backGreen: {
//     backgroundColor: "green",
//   },
//   box: {
//     backgroundColor: "#7d8cec",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 5,
//   },
// });
// export default FlexExample;

// Exercise 3: Dimension Styling
// . Create three <View> components with the following widths and heights:
// First box: width: '60%', height: 100, backgroundColor: '#ffab91'
// Second box: width: '30%', height: 100, backgroundColor: '#ff8a65'
// Third box: width: '10%', height: 100, backgroundColor: '#ff7043'
// . Arrange them horizontally within a parent <View>.

// Dimension Styling
// Setting explicit dimensions for components ensures consistency across different devices and screen sizes.
// width and height
// Specify the size of a component. Can be defined using absolute values (e.g., 100) or percentages (e.g.,
// '50%').
// Example:

// import React from "react";
// import { View, StyleSheet } from "react-native";
// const DimensionExample = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box60} />
//       <View style={styles.box30} />
//       <View style={styles.box10} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     padding: 10,
//     gap: 10,
//   },
//   box60: {
//     flex: 6,
//     height: 100,
//     backgroundColor: "#ffab91",
//   },
//   box30: {
//     flex: 3,
//     height: 100,
//     backgroundColor: "#ff8a65",
//   },
//   box10: {
//     flex: 1,
//     height: 100,
//     backgroundColor: "#ff7043",
//   },
// });
// export default DimensionExample;

// Exercise 4: Interactive Button Style
// . Create a button using TouchableOpacity that displays "Tap Me".
// . Style the button with:
// backgroundColor: '#64b5f6'
// padding: 15
// borderRadius: 8
// . Implement an opacity change when the button is pressed.
// . Display an alert with the message "Button was tapped!" upon release.

import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
const InteractiveButton = () => {
  const [pressed, setPressed] = useState(false);
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
    Alert.alert("Button Pressed!", "You have pressed the button.");
  };
  return (
    <TouchableOpacity
      style={[styles.button, pressed && styles.buttonPressed]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#81c784",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    opacity: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
});
export default InteractiveButton;
