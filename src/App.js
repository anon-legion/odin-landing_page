import './App.css';
import Content from './components/body.js';
import Header from './components/header.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Content />
      </div>
    </div>
  );
}

export default App;
 