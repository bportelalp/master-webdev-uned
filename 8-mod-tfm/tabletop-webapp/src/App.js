import './App.css';
import FilmDetail from './components/films/pages/filmDetail';
import Films from './components/films/pages/films';
import NavigationBar from './components/navbar/navigationbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesPage from './pages/GamesPage.jsx';
import GameDetailPage from './pages/GameDetailPage.jsx';

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
            <Route index path='/films' element={<Films/>} />
            <Route index path='/film-detail/:idFilm/:titleFilm' element={<FilmDetail/>} />
            <Route path="*" element={<GamesPage/>}/>
          </Routes>
          {/* <Home></Home> */}
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
