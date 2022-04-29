const MovieCard = ( {movie} ) => {
  return (
    <div className='movie-card'>
      <div className='movie-card-inner'>
        <div className='movie-card-front'>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://picsum.photos/400/400'} alt={movie.Title} />
        </div>
        <div className='movie-card-back'>
          <h1>{movie.Title}</h1>
          <p>{movie.Type} ({movie.Year})</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
