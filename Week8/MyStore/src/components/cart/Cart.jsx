import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../features/cart/cartSelectors';

export default function Cart() {
  const items = useSelector(selectCartItems);

  return (
    <View>
      <Text>Your Cart</Text>
      <Text>Total items: {items.length}</Text>
    </View>
  );
}
