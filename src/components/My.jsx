import { useSession } from '../hooks/session-context';
import { Login } from './Login';
import { Profile } from './Profile';

// export const My = ({ session, login, logout, removeCartItem }) => {
export const My = () => {
  // console.log('@@@ My');
  const { session, removeCartItem } = useSession();

  return (
    <>
      {session.loginUser ? (
        // <Profile session={session} logout={logout} />
        <Profile />
      ) : (
        // <Login login={login} />
        <Login />
      )}

      <div>
        <ul>
          {session.cart.map((item) => (
            <li key={item.id}>
              {item.name} <small>(₩{item.price.toLocaleString()})</small>
              <button onClick={() => removeCartItem(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
