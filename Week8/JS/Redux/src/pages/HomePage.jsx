import Cart from '../../../../MyStore/components/Cart/Cart';
import AddItemButton from '../../../../MyStore/components/AddItemButton/AddItemButton';
import UserInfo from '../../../../MyStore/components/UserInfo/UserInfo';

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <AddItemButton />
      <Cart />
    </>
  );
}
