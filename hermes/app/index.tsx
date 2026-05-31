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
