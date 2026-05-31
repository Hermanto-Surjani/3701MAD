// Introduction to Images in React Native

// Importance of Images in Mobile Apps
// Images enhance the visual appeal and user experience of mobile applications. They serve various purposes,
// such as:

// Branding: Logos and brand-specific imagery establish brand identity.
// User Interface: Icons, backgrounds, and illustrations make the UI more engaging.
// Content Representation: Displaying products, user profiles, and dynamic content.
// Feedback: Visual cues like loading indicators and success/failure icons inform users about app
// states.

// React Native <Image> Component Overview

// React Native provides the <Image> component for displaying images. It supports various image formats
// and sources, including:

// Remote URLs: Images hosted on the web.
// Local Files: Images bundled with the app.
// Icon Fonts: Icon libraries like Ionicons for scalable and customizable icons.

// Key Props:
// source: Defines the image source. Can be a remote URL, local file, or other supported types.
// style: Styles the image (e.g., dimensions, border radius).
// resizeMode: Determines how the image is resized to fit its container (cover, contain, stretch,
// repeat, center).
// onLoad: Callback triggered when the image is successfully loaded.
// onError: Callback triggered when an error occurs while loading the image.
// Understanding how to effectively use the <Image> component is essential for creating visually appealing
// and responsive React Native applications.

// Basic Syntax:

// import React from "react";
// import { Image } from "react-native";
// const MyImage = () => {
//   return (
//     <Image
//       source={{ uri: "https://example.com/image.png" }}
//       style={{ width: 200, height: 200 }}
//     />
//   );
// };
// export default MyImage;

import React from "react";
import { Image } from "react-native";
const MyImage = () => {
  return (
    <Image
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
      style={{ width: 200, height: 200 }}
    />
  );
};
export default MyImage;
