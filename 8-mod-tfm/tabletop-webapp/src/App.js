import './App.css';
import NavigationBar from './components/navbar/navigationbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesPage from './pages/GamesPage.jsx';
import GameDetailPage from './pages/GameDetailPage.jsx';
import GameEditPage from './pages/GameEditPage.jsx';

function App() {    

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<GamesPage/>} />
            <Route index path='/home' element={<GamesPage/>} />
            <Route index path='/game/:gameId' element={<GameDetailPage />} />
            <Route index path='/game/edit' element={<GameEditPage />} />
            <Route index path='/game/edit/:gameId' element={<GameEditPage />} />
            <Route path="*" element={<GamesPage/>}/>
          </Routes>
          {/* <Home></Home> */}
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
