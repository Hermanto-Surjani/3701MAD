import { useDispatch } from 'react-redux';
import { addItem } from '../../../JS/Redux/src/features/cart/cartSlice';

export default function AddItemButton() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addItem({ id: Date.now(), name: 'Apple' }))}
    >
      Add Item
    </button>
  );
}
