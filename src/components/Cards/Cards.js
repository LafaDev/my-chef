import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './Cards.css';

export default function Cards({
  strMeal,
  strMealThumb,
  idMeal,
  idDrink,
  strDrinkThumb,
  strDrink,
  index,
}) {
  const url = useLocation();

  const img = url.pathname.includes('foods') ? strMealThumb : strDrinkThumb;

  return (
    <Link
      to={ url.pathname.includes('foods') ? `/foods/${idMeal}` : `/drinks/${idDrink}` }
      style={ {
        backgroundImage: `url(
        ${img})`,
      } }
      className="cards"
    >
      <div
        data-testid={ `${index}-recipe-card` }
        className="card-container"
      >
        <img
          src={ img }
          alt="strMealThumb"
          name={ url.pathname.includes('foods') ? strMeal : strDrink }
          className="img-card"
          data-testid={ `${index}-card-img` }
        />
        <span
          data-testid={ `${index}-card-name` }
          className="card-name"
        >
          { url.pathname.includes('foods') ? strMeal : strDrink }
        </span>
      </div>
    </Link>
  );
}

Cards.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
}.isRequired;
