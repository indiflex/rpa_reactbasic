import { useState } from 'react';
import { useSession } from '../hooks/session-context';

// export const Login = ({ login }) => {
export const Login = () => {
  const { login } = useSession();
  const [userId, setUserId] = useState(10);
  const [userName, setUserName] = useState('홍길동');

  return (
    <>
      <h2>Login Please</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          login(userId, userName);
        }}
      >
        <label htmlFor='user-id'>UserID:</label>
        <input
          id='user-id'
          type='number'
          value={userId}
          onChange={(evt) => setUserId(evt.target.value)}
        />

        <label htmlFor='user-name'>UserName:</label>
        <input
          id='user-name'
          type='text'
          value={userName}
          onChange={(evt) => setUserName(evt.target.value)}
        />

        <button type='submit'>Login</button>
      </form>
    </>
  );
};
