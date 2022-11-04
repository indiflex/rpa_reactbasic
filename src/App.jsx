import { useState } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState(SampleSession);

  const login = (id, name) => {
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    setSession({ ...session, loginUser: null });
  };

  return (
    <div className='App'>
      <div>
        <Hello name='시코' weather='맑음' />
      </div>
      <hr />
      <My session={session} login={login} logout={logout} />
      <hr />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} !
        </button>
      </div>
    </div>
  );
}

export default App;
