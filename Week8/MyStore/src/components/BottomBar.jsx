import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

export default function BottomBar({ onCartPress }) {
  const cartItems = useSelector((state) => state.cart.items);

  const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalValue = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0,
  );

  return (
    <View style={styles.bar}>
      <View style={styles.info}>
        <Text style={styles.text}>Items: {itemCount}</Text>
        <Text style={styles.text}>Total: ${totalValue.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={onCartPress}>
        <Ionicons name="cart" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  info: { flexDirection: 'column', gap: 2 },
  text: { color: '#fff', fontSize: 14, fontWeight: '500' },
  cartButton: {
    backgroundColor: '#e44d26',
    borderRadius: 8,
    padding: 8,
  },
});
