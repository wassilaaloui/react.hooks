import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = ({ addMovie }) => {
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === 'rating' ? parseFloat(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description && newMovie.posterURL) {
      addMovie(newMovie);
      navigate('/movies');
    }
  };

  return (
    <div className="add-movie-container">
      <h2>Add New Movie</h2>
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newMovie.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="posterURL">Poster URL:</label>
          <input
            type="text"
            id="posterURL"
            name="posterURL"
            value={newMovie.posterURL}
            onChange={handleChange}
            placeholder="/images/your-movie.jpg"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating: {newMovie.rating}</label>
          <input
            type="range"
            id="rating"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            value={newMovie.rating}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;