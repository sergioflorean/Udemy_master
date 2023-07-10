import logo from './logo.svg';
import './App.css';
import MiPrimerEstado from './components/MiPrimerEstado';
import EjercicioComponent from './components/EjercicioComponent';

function App() {

  const fecha = new Date();
  const fechaActual = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hook UseState</h1>
        <MiPrimerEstado/>
        <EjercicioComponent year={fechaActual}/>
      </header>
    </div>
  );
}

export default App;
