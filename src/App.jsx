import { useState } from 'react';
import './App.css';
import { Hello, Hello2 } from './components/Hello';

function App() {
  const [count, setCount] = useState(0);

  let xxx = 333;
  const changeXxx = () => {
    xxx += 1;
    console.log('xxx=', xxx);
    setCount(xxx);
  };

  return (
    <div className='App'>
      <div>
        <Hello name='시코' weather='맑음' />
        <Hello2 name='시니어코딩'>
          <div>하하하</div>
        </Hello2>
        <h2>xxx: {xxx}</h2>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} !!
        </button>
        <button onClick={changeXxx}>ChangeXXX</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
