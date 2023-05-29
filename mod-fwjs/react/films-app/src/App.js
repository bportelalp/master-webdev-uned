import './App.css';
import FilmDetail from './components/films/pages/filmDetail';
import Films from './components/films/pages/films';
import Home from './components/home/home';
import NavigationBar from './components/navbar/navigationbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route index path='/home' element={<Home/>} />
            <Route index path='/films' element={<Films/>} />
            <Route index path='/film-detail/:idFilm/:titleFilm' element={<FilmDetail/>} />
            <Route path="*" element={<Home/>}/>
          </Routes>
          {/* <Home></Home> */}
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
