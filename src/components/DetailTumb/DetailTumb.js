import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DetailTumb.css';
import { fetchMealDetails } from '../../services/MealsAPI';
import { fetchDrinkDetails } from '../../services/cocktailAPI';

export default function DetailTumb({ id, url }) {
  const [meal, setMeal] = useState({});
  const [drink, setDrink] = useState({});

  const mealDetails = async () => {
    const results = await fetchMealDetails(id);
    setMeal(...results.meals);
  };

  const drinkDetails = async () => {
    const results = await fetchDrinkDetails(id);
    setDrink(...results.drinks);
  };

  useEffect(() => {
    if (url.includes('foods')) {
      mealDetails();
    } else if (url.includes('drinks')) {
      drinkDetails();
    }
  }, []);

  return (
    <section className="container containerDetailTumb">
      <img
        src={ url.includes('foods') ? meal.strMealThumb : drink.strDrinkThumb }
        data-testid="recipe-photo"
        alt={ url.includes('foods')
          ? `${meal.strMeal} Thumb` : `${drink.strDrink} Thumb` }
        name={ url.includes('foods') ? meal.strMeal : drink.strDrink }
      />
      <h3 data-testid="recipe-title">
        {url.includes('foods') ? meal.strMeal : drink.strDrink}
      </h3>
      <h4 data-testid="recipe-category">
        {url.includes('foods') ? meal.strCategory : drink.strCategory}
      </h4>
    </section>
  );
}

DetailTumb.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
}.isRequired;
