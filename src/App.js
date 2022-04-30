import './App.css';
import Logo from './Logo.js';
import MovieContainer from './MovieContainer.js';
import SearchBar from './SearchBar.js';
import { useState, useEffect } from 'react';

const App = () => {

  const [ movies, setMovies ] = useState([]);
  const [ title, setTitle ] = useState('Captain');

  const fetchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com?apikey=b8fa90f7&s=${title}`); 
    const data = await response.json(); 

    console.log("title = " + title);
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
      fetchMovies("captain");
  }, []);

  return (
    <div className="app-container">
      <Logo />
      <SearchBar fun={ (text) => { fetchMovies(text) } } />
      {
          movies?.length > 0 ? (
            <MovieContainer movies={movies} />
          ) : (
              <div className="empty">
                  <h2></h2>
              </div>
          )
      }
    </div>
  );
};

export default App;