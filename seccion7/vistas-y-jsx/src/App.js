import logo from './logo.svg';
import './App.css';
import MiComponente from './components/MiComponente';
import SegundoComponente from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
          <SegundoComponente/>
        <hr/>
          <MiComponente/>
         
        
      </header>
    </div>
  );
}

export default App;
