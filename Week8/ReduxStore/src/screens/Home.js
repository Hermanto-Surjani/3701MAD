import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { loadAllProducts, selectProduct } from '../store/productSlice';

const ProductCard = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.category}>{item.category}</Text>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.price}>${item.price?.toFixed(2)}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.ratingText}>
      ⭐ {item.rating?.rate} ({item.rating?.count} reviews)
    </Text>
  </View>
);

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(selectProduct);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    dispatch(loadAllProducts());
  }, []);

  const onScroll = (e) => {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
    const percent =
      contentOffset.y / (contentSize.height - layoutMeasurement.height);
    setScrollPercent(Math.min(Math.max(percent, 0), 1));
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => <ProductCard item={item} />}
      />

      {/* Custom permanent scrollbar */}
      <View style={styles.scrollbarTrack}>
        <View
          style={[styles.scrollbarThumb, { top: `${scrollPercent * 85}%` }]}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
    paddingRight: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  category: {
    fontSize: 12,
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e44d26',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#444',
    lineHeight: 20,
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 13,
    color: '#555',
  },
  scrollbarTrack: {
    width: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginVertical: 8,
    marginRight: 4,
    position: 'relative',
  },
  scrollbarThumb: {
    position: 'absolute',
    width: 8,
    height: 60,
    backgroundColor: '#e44d26',
    borderRadius: 4,
  },
});
