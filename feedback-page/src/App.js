import './App.css';
import Graph from './components/Graph';
import { Form } from './components/Form';
import { ExistingComments } from './components/ExistingComments';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test 1</h1>
        <Graph />
        <Form />
        <ExistingComments />
      </header>
    </div>
  );
}

export default App;
