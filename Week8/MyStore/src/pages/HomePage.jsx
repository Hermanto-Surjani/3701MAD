import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { addItem, removeItem } from '../features/cart/cartSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getQuantity = (id) => {
    const found = cartItems.find((i) => i.id === id);
    return found ? found.quantity : 0;
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <View style={styles.row}>
            <Pressable
              onPress={() => dispatch(removeItem(item.id))}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
                backgroundColor: '#ffbb00',
                borderRadius: 8,
              }}
            >
              <Ionicons name="remove-circle" size={24} color="#ffff00" />
              <Text style={styles.buttonText}>Remove</Text>
            </Pressable>
            <Text style={styles.qty}>Qty: {getQuantity(item.id)}</Text>
            <Pressable
              onPress={() => dispatch(addItem(item))}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
                backgroundColor: '#3cff00',
                borderRadius: 8,
              }}
            >
              <Ionicons name="add-circle" size={24} color="#00bfff" />
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: { width: '100%', height: 200, resizeMode: 'contain', marginBottom: 8 },
  title: { fontSize: 14, fontWeight: '600', marginBottom: 4 },
  price: { fontSize: 16, color: '#e44d26', marginBottom: 8 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qty: { fontSize: 16, fontWeight: '500' },
});
