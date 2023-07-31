// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/GetMovies/NavBar';
import GetMovies from './components/GetMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './Details/MoviesDetails';

function App (){
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <GetMovies />
        <Routes>
          <Route path='/' element={<GetMovies />} />
          <Route path='/movies/:movieId' element={<movieDetails />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;