import React from 'react';

const Filter = ({ onTitleChange, onRatingChange, titleFilter, ratingFilter }) => {
  return (
    <div className="filter-container">
      <div className="filter-item">
        <label htmlFor="title-filter">Search by title:</label>
        <input
          type="text"
          id="title-filter"
          placeholder="Enter movie title..."
          value={titleFilter}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label htmlFor="rating-filter">Minimum rating: {ratingFilter}</label>
        <input
          type="range"
          id="rating-filter"
          min="0"
          max="10"
          step="0.1"
          value={ratingFilter}
          onChange={(e) => onRatingChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Filter;
