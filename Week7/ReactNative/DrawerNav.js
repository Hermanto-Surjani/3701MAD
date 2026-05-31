/* React Native Drawer Navigation
React Native Drawer Navigation provides a common pattern in mobile applications where a hidden drawer
slides in from one side of the screen, typically the left, providing navigation options. This drawer can be
opened by swiping from the edge of the screen or by tapping the menu icon. Here's a comprehensive
tutorial on setting up a drawer navigator in a React Native application (with expo) using the popular library
react-navigation.
Step 1: Set Up Your React Native Environment
First, make sure you have the React Native development environment set up. You'll need Node.js, the React
Native command-line interface, a JDK, and either Android Studio or Xcode depending on your target
platform.
Step 2: Create a New React Native Project */

// npx create-expo-app DrawerDemo
// cd DrawerDemo

/* Step 3: Install Dependencies
Install the required react-navigation packages. React Navigation v5 and v6 are modular, so you need to
install the drawer navigation library separately.
 */

// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/drawer
// npx expo install react-native-gesture-handler
// npx expo install react-native-reanimated

/* Step 4: Set Up the Drawer Navigator
Edit your App.js to set up a basic drawer navigator. */

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

/* Step 5: Configure the Drawer Navigation
The Drawer.Navigator component accepts several props to customize the appearance and behavior of
the drawer:
initialRouteName: Specifies the first screen to show.
drawerType: Can be 'front', 'back', or 'slide'.
drawerPosition: Can be 'left' or 'right'.
drawerStyle: Styles for the drawer component (e.g., width, backgroundColor).
Step 6: Link Native Dependencies
If you're targeting iOS, run cd ios && pod install && cd .. to link the native dependencies with
CocoaPods.
Step 7: Run Your App
Now, you're ready to run your app: */

// npm start

/* This setup provides a basic drawer navigation system. From here, you can add more screens, customize the
content of the drawer, handle user input, and integrate other functionalities as per your application
requirements. */
