import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import FilterButtons from '../components/FilterButtons/FilterButtons';
import FavoriteCards from '../components/FavoriteCards/FavoriteCards';
import '../styles/Favorites.css';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [allFavs, setAllFavs] = useState([]);

  const handleFavorites = () => {
    setFavorites(JSON.parse(localStorage.getItem('favoriteRecipes')));
    setAllFavs(JSON.parse(localStorage.getItem('favoriteRecipes')));
  };

  const handleFilters = ({ target }) => {
    switch (target.name) {
    case 'food':
      setFavorites(allFavs.filter((receita) => receita.type === 'food'));
      break;
    case 'drinks':
      setFavorites(allFavs.filter((receita) => receita.type === 'drink'));
      break;
    default:
      handleFavorites();
    }
  };

  useEffect(() => {
    handleFavorites();
  }, []);

  return (
    <main className="section-favorites">
      <div className="header">
        <Header title="Favorite Recipes" />
      </div>
      <div className="main-container container">
        <FilterButtons
          handleFilters={ handleFilters }
          className="container-buttons"
        />
        <div className="cards-container">
          { favorites && favorites.length > 0 && favorites.map((recepie, i) => (
            <FavoriteCards
              key={ recepie.id }
              recepie={ recepie }
              index={ i }
              handleFavorites={ handleFavorites }
            />)) }
        </div>
      </div>
    </main>
  );
}
