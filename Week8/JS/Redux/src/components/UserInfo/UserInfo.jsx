import { useSelector, useDispatch } from 'react-redux';
import {
  setUser,
  clearUser,
} from '../../../JS/Redux/src/features/user/userSlice';

export default function UserInfo() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      {user.isLoggedIn ? (
        <>
          <p>Welcome, {user.name}</p>
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
    </div>
  );
}
