import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../features/cart/cartSlice';
import { Ionicons } from '@expo/vector-icons';

export default function CartPage({ onBack }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Cart</Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.empty}>Your cart is empty.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>
              {item.title}
            </Text>
            <View style={styles.controls}>
              <Button title="-" onPress={() => dispatch(removeItem(item.id))} />
              <Text style={styles.qty}>{item.quantity}</Text>
              <Button title="+" onPress={() => dispatch(addItem(item))} />
            </View>
            <Text style={styles.price}>
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  title: { fontSize: 22, fontWeight: '700' },
  empty: { textAlign: 'center', marginTop: 40, color: '#666' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: { flex: 1, fontSize: 13, marginRight: 8 },
  controls: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  qty: { fontSize: 16, fontWeight: '600', marginHorizontal: 8 },
  price: { fontSize: 14, fontWeight: '500', color: '#e44d26', marginLeft: 8 },
  footer: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'flex-end',
  },
  total: { fontSize: 18, fontWeight: '700' },
});
