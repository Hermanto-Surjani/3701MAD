/* Creating a bottom tab navigator in React Native is a common approach for adding simple, intuitive
navigation between different views or sections in an app. Hereʼs a step-by-step tutorial on how to
implement bottom tab navigation in a React Native project using react-navigation and its bottom tabs
component.

Step 1: Set Up Your React Native Project

If you havenʼt already, start by setting up a new React Native project. If you're using Expo (which simplifies
the setup), you can create a new project with: */

// npx create-expo-app BottomTabDemo
// cd BottomTabDemo

/* Choose a template that suits your needs (like the "blank" template). */

/* Step 2: Install Necessary Dependencies
Install react-navigation along with the dependencies required for bottom tab navigation: */

// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/bottom-tabs

/* Step 3: Set Up Bottom Tab Navigator
Open your App.js and set up the bottom tab navigator. Here's a basic example that includes two tabs: */

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

/* Step 4: Customize the Bottom Tab Navigator
The bottom tab navigator can be customized with various options. For example, you can add icons and
adjust the tab bar's appearance: */

import { Ionicons } from '@expo/vector-icons';
<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>;


import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Colors (replaces deprecated tabBarOptions)
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#ddd',
          // height: 60,
          // paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        // Icons
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'ellipse-outline'; // fallback icon
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

/* Conclusion

Bottom tab navigation is effective for allowing users to navigate easily across
the main areas of your app.
React Navigation provides a flexible system to handle this pattern with extensive
customization options, making it straightforward to integrate fully functional
navigational structures into your React Native applications. */