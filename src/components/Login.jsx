import { useState } from 'react';

export const Login = ({ login }) => {
  const [userId, setUserId] = useState(10);
  const [userName, setUserName] = useState('홍길동');

  return (
    <>
      <h2>Login Please</h2>
      <form onSubmit={() => login(userId, userName)}>
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

        <button>Login</button>
      </form>
    </>
  );
};
