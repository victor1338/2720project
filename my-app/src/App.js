import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="primary">Primary</Button>{' '}
        <Button
          variant="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
