// Home.js
import { View, Text, TextInput, StyleSheet, Image, Button } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

<Ionicons name="home" size={32} color="blue" />;

const image = {
  uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
};

// Styling Remote Images
// Styling images ensures they fit well within the app's layout and design.
// Example:

const Image2 = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
};

// Result:
// Dimensions: The image is sized to 100x100 pixels.
// Border Radius: Rounded corners (circular image).
// Border: Adds a 2-pixel black border around the image.

const Home = ({ navigation }) => {
  const navToDetail = () => navigation.navigate("Detail");
  const [imgurl, setImgUrl] = useState(image.uri);
  const imgurl2 = Image2.uri;
  const [inputUrl, setInputUrl] = useState(""); // New state for input, starts empty

  const updateImage = () => {
    if (inputUrl.trim()) {
      setImgUrl(inputUrl);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }} onPress={navToDetail}>
        The Home Screen
      </Text>
      <TextInput
        value={inputUrl}
        onChangeText={setInputUrl}
        placeholder="Enter image URL"
      />
      <Button title="Update Image" onPress={updateImage} />
      <Image source={{ uri: imgurl }} style={styles.image} />
      <Image source={{ uri: imgurl2 }} style={styles.image2} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    margin: 10,
  },
  image2: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image circular
    borderWidth: 2,
    borderColor: "#000",
  },
});
