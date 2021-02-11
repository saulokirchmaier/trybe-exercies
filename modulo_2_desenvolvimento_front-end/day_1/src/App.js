import logo from './logo.svg';
import './App.css';

const lista = ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>{lista.map(list => <li>{ list }</li>)}</ul>
  );
}

export default App;
