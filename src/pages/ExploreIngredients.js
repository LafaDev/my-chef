import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMealsIngredients } from '../services/MealsAPI';
import { fetchDrinksIngredients } from '../services/cocktailAPI';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import IngredientsCard from '../components/IngredientsCard/IngredientsCard';

export default function ExploreIngredients({ match }) {
  const [ingredients, setIngredients] = useState([]);
  const MAX_INGREDIENTS = 11;

  const handleIngredients = async () => {
    if (match.url.includes('foods')) {
      const mealIngredients = await fetchMealsIngredients();
      setIngredients(mealIngredients.meals);
    } else {
      const drinkIngredients = await fetchDrinksIngredients();
      setIngredients(drinkIngredients.drinks);
    }
  };

  useEffect(() => {
    handleIngredients();
  }, []);

  return (
    <section>
      <Header title="Explore Ingredients" />
      {ingredients
        .map(
          (ingredient, i) => i <= MAX_INGREDIENTS
          && (
            <IngredientsCard
              ingredient={ ingredient }
              index={ i }
              key={ match.url.includes('foods')
                ? ingredient.idIngredient : ingredient.strIngredient1 }
            />),
        )}
      <LowerMenu />
    </section>
  );
}

ExploreIngredients.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
}.isRequired;
