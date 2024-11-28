import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';
import HomePage from './HomePage';

function App() {
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {!login ?
      <Counter  loginHandle = {(value) => setLogin(true)}/>
      :
      <HomePage/>
      }
      
    </div>
  );
}

export default App;
