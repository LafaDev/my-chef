import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './IngredientsCard.css';

export default function IngredientsCard({
  ingredient,
  index,
}) {
  const currentPage = useLocation().pathname;

  return (
    <Link to={ currentPage.includes('foods') ? '/foods' : '/drinks' }>
      <article className="cards" data-testid={ `${index}-ingredient-card` }>
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
    </Link>
  );
}

IngredientsCard.propTypes = {
  ingredient: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
}.isRequired;
