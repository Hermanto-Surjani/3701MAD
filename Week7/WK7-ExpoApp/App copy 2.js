import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const MyComponent = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      fetchData();
    }, 2000); // Adjust time to your preference
    return () => clearTimeout(timer);
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(
        'https://www.fakeurl.dev/200?delay=4000&json={"id":123,"name":"Test Item"}',
      );
      let json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text>{JSON.stringify(data)}</Text>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyComponent;
