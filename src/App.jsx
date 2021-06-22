import './App.css';
import People from './components/people';
import Counter from './components/counter';
import List from './components/list';
import Temperature from './components/temperature';

function App() {
  return (
    <div className="App">
      <h1>First title</h1>
      <People />
      <Counter />
      <List />
      <Temperature />
    </div>
  );
}

export default App;
