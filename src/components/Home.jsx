import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MovieHub</h1>
          <p>Your ultimate platform for managing your favorite movies and TV shows</p>
          <Link to="/movies" className="btn-primary">Browse Movies</Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-film"></i>
            </div>
            <h3>Movie Collection</h3>
            <p>Keep track of all your favorite movies in one place</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h3>Advanced Filtering</h3>
            <p>Find movies by title or rating with our powerful filters</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-circle-plus"></i>
            </div>
            <h3>Add New Movies</h3>
            <p>Easily expand your collection with our simple add form</p>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Ready to start your collection?</h2>
        <Link to="/add-movie" className="btn-cta">Add Your First Movie</Link>
      </div>
    </div>
  );
};

export default Home;