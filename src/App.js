import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-headers and header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          I have added a new code line of code.
        </p>
        <a
          className="App-links and links "
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
