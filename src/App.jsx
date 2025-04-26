import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "../public/images/Inception.jpg",
      rating: 8.8
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "../public/images/The.Dark.Knight.jpg",
      rating: 9.0
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "../public/images/Interstellar.jpg",
      rating: 8.6
    },
    {
      id: 4,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterURL: "../public/images/Pulp.Fiction.jpg",
      rating: 8.9
    }
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/movies" 
              element={<MovieList movies={movies} />} 
            />
            <Route 
              path="/add-movie" 
              element={<AddMovie addMovie={addMovie} />} 
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
