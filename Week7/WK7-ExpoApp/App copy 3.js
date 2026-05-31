import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

const MyComponent = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      fetchData();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/photos?_limit=20',
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
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6200ea" />
          <Text style={styles.loadingText}>Loading photos...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.grid}
          ListHeaderComponent={
            <Text style={styles.header}>📸 Photo Gallery</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6200ea',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#6200ea',
  },
  grid: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 6,
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 11,
    color: '#444',
    textAlign: 'center',
  },
});

export default MyComponent;
