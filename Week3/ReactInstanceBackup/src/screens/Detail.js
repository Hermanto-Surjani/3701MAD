// Details.page
import { View, Text, StyleSheet, Button } from "react-native";

const Detail = ({ navigation }) => {
  const HomeScreen = () => navigation.navigate("HomeScreen");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: "white" }} onPress={HomeScreen}>
        This is the detail page
      </Text>
      <Button
        title="More details..."
        onPress={() => navigation.push("Detail")}
      />
      <Button title="Home" onPress={() => navigation.navigate("HomeScreen")} />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
