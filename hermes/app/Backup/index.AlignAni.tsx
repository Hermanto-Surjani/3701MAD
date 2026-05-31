import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const AnimatedSections = () => {
  const topAnim = useRef(new Animated.Value(-100)).current;
  const midAnim = useRef(new Animated.Value(100)).current;
  const botAnim = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.stagger(150, [
      Animated.spring(topAnim, { toValue: 0, useNativeDriver: true }),
      Animated.spring(midAnim, { toValue: 0, useNativeDriver: true }),
      Animated.spring(botAnim, { toValue: 0, useNativeDriver: true }),
    ]).start();
  }, [topAnim, midAnim, botAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.section, { transform: [{ translateY: topAnim }] }]}
      >
        <Text style={styles.box}>Top</Text>
        <Text style={styles.box}>Top2</Text>
        <Text style={styles.box}>Top3</Text>
        <Text style={styles.box}>Top4</Text>
      </Animated.View>

      <Animated.View
        style={[styles.section, { transform: [{ translateY: midAnim }] }]}
      >
        <Text style={styles.box}>Middle</Text>
        <Text style={styles.box}>Middle2</Text>
        <Text style={styles.box}>Middle3</Text>
        <Text style={styles.box}>Middle4</Text>
      </Animated.View>

      <Animated.View
        style={[styles.section, { transform: [{ translateY: botAnim }] }]}
      >
        <Text style={styles.box}>Bottom</Text>
        <Text style={styles.box}>Bottom2</Text>
        <Text style={styles.box}>Bottom3</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#b2dfdb",
    padding: 10,
    textAlign: "center",
    marginVertical: 4,
  },
});

export default AnimatedSections;
