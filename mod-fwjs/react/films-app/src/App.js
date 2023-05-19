import './App.css';
import Home from './components/home/home';
import NavigationBar from './components/navbar/navigationbar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home></Home>
    </div>
  );
}

export default App;
