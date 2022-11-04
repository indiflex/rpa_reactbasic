import { useState } from 'react';
// import { flushSync } from 'react-dom';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <Hello name='시코' weather='맑음' />
      </div>
      <hr />
      {/* <My
        session={session}
        login={login}
        logout={logout}
        removeCartItem={removeCartItem}
      /> */}
      <SessionProvider>
        <My />
      </SessionProvider>

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
