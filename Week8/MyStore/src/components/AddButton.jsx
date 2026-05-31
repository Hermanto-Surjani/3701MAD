import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export default function AddButton() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(addItem({ id: 1, name: 'Apple' }))}>
      Add Item
    </button>
  );
}

/* Why they belong in components
Because:

useSelector reads state for that component

useDispatch sends actions from that component

They are React hooks, so they must be used:

inside a component

or inside a custom hook

never in slice files

never in store.js */
