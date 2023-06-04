import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryIndexPage from 'pages/countryIndex/countryIndexPage';
import CountryDetailPage from 'pages/countryDetail/countryDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<CountryIndexPage/>} />
            <Route path='/country/:officialName' element={<CountryDetailPage/>}/>
            <Route path="*" element={<CountryIndexPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
