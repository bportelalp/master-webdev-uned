import logo from './logo.svg';
import './App.css';
import HelloClass from './components/hello/hello-class';
import HelloFunction from './components/hello/hello-function';


function App() {
  const nombre = "Bruno";
  const apellido = "Portela";
  return (
    <div className="App">
      <header className="App-header">
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
        <HelloClass nombre={nombre} apellido={apellido}/>
        <HelloFunction nombre={nombre} apellido={apellido}/>
      </header>
    </div>
  );
}

export default App;
