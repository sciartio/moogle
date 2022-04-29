import MovieCard from './MovieCard.js';
import { useEffect } from 'react';

const MovieContainer = ( {movies} ) => {

    useEffect( () => {
        console.log("BABO");
        console.log(movies);
    }, []);
    
    return (

         <section className="movie-container">
            { movies.map( (movie) => (<MovieCard key={movie.imdbID} movie={movie} />) ) }
        </section>

    );
};

export default MovieContainer;