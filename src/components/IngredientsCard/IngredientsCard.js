import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { FilterContext } from '../../contexts/FilterContext';
import { fetchMealsByIngredient } from '../../services/MealsAPI';
import { fetchDrinksByIngredient } from '../../services/cocktailAPI';
import './IngredientsCard.css';

export default function IngredientsCard({
  ingredient,
  index,
}) {
  const { setCancelReset, setSearch } = useContext(FilterContext);
  const currentPage = useLocation().pathname;
  const history = useHistory();

  const handleClick = async () => {
    setCancelReset(true);
    const results = currentPage.includes('foods')
      ? await fetchMealsByIngredient(ingredient.strIngredient)
      : await fetchDrinksByIngredient(ingredient.strIngredient1);
    setSearch(results.drinks ? results.drinks : results.meals);
    history.push(currentPage.includes('foods') ? '/foods' : '/drinks');
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
      data-testid={ `${index}-ingredient-card` }
    >
      <article className="cards">
        <img
          src={ currentPage.includes('foods') ? `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` : `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
          alt="Ingredient Thumb"
          name={ currentPage.includes('foods')
            ? ingredient.strIngredient : ingredient.strIngredient1 }
          data-testid={ `${index}-card-img` }
        />
        <span data-testid={ `${index}-card-name` }>
          { currentPage.includes('foods')
            ? ingredient.strIngredient : ingredient.strIngredient1 }
        </span>
      </article>
    </button>
  );
}

IngredientsCard.propTypes = {
  ingredient: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
}.isRequired;
