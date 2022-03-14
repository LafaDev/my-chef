import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import FilterButtons from '../components/FilterButtons/FilterButtons';
import FavoriteCards from '../components/FavoriteCards/FavoriteCards';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);

  return (
    <section className="container">
      <Header title="Favorite Recipes" />
      <FilterButtons />
      {favorites && favorites.length > 0 && favorites.map((recepie, i) => (
        <FavoriteCards key={ recepie.id } recepie={ recepie } index={ i } />))}
    </section>
  );
}
