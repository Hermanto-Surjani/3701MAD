import { useSelector } from 'react-redux';

export default function UserInfo() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user.isLoggedIn ? <p>Welcome, {user.name}</p> : <p>Please log in</p>}
    </div>
  );
}
