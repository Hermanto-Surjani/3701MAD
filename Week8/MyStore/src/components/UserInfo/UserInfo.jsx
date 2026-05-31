import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../../features/user/userSlice';

export default function UserInfo() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <view>
      {user.isLoggedIn ? (
        <>
          <text>Welcome, {user.name}</text>
          <button onClick={() => dispatch(clearUser())}>Log Out</button>
        </>
      ) : (
        <button
          onClick={() =>
            dispatch(
              setUser({
                id: 1,
                name: 'Hermanto',
                email: 'hermanto@example.com',
              }),
            )
          }
        >
          Log In
        </button>
      )}
    </view>
  );
}
