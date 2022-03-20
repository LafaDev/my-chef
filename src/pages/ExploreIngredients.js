import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMealsIngredients } from '../services/MealsAPI';
import { fetchDrinksIngredients } from '../services/cocktailAPI';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import IngredientsCard from '../components/IngredientsCard/IngredientsCard';
import '../styles/ExploreIngredients.css';

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
    <main className="section-food">
      <div className="header">
        <Header title="Explore Ingredients" />
      </div>
      <div className="main-container container">
        <div className="buttons-container">
          { ingredients
            .map(
              (ingredient, i) => i <= MAX_INGREDIENTS
                && (
                  <IngredientsCard
                    ingredient={ ingredient }
                    index={ i }
                    key={ match.url.includes('foods')
                      ? ingredient.idIngredient : ingredient.strIngredient1 }
                  />),
            ) }
        </div>
        <LowerMenu />
      </div>
    </main>
  );
}

ExploreIngredients.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
}.isRequired;
