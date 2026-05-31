// Home.js
import { View, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  const navToDetail = () => navigation.navigate("Detail");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> The Home Screen</Text>
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
});
