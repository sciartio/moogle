import MovieCard from './MovieCard.js';

const MovieContainer = ( {movies} ) => {

    return (

         <section className="movie-container">
            { movies.map( (movie) => (<MovieCard key={movie.imdbID} movie={movie} />) ) }
        </section>

    );
};

export default MovieContainer;