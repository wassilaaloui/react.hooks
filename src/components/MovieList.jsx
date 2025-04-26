import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

const MovieList = ({ movies }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });

  return (
    <div className="movie-list-container">
      <h2>Movie Collection</h2>
      <Filter 
        onTitleChange={setTitleFilter} 
        onRatingChange={setRatingFilter} 
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
      />
      
      {filteredMovies.length === 0 ? (
        <div className="no-movies">No movies match your filters</div>
      ) : (
        <div className="movie-list">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;