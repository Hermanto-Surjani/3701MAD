import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../JS/Redux/src/features/cart/cartSelectors';

export default function Cart() {
  const items = useSelector(selectCartItems);

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total items: {items.length}</p>
    </div>
  );
}
