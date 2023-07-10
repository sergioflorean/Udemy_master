import logo from './logo.svg';
import './App.css';
import MiComponente from './components/MiComponente';
import SegundoComponente from './components/SegundoComponente';
import TercerComponente from './components/TercerComponente';
import EventosComponente from './components/EventosComponente';

function App() {

  const ficha_medica = {
    altura: "175 cm",
    grupo: "H+",
    estado: "bueno",
    alergias: "ninguna"

  }

  const numero = 1234;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='comopnentes'>
          <hr/>
          <EventosComponente/>
          <hr />
          <TercerComponente
            nombre="sergio"
            apellidos="florean"
            ficha={ficha_medica}
          />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>



      </header>
    </div>
  );
}

export default App;
