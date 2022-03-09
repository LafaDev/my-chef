import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';
import { Link } from 'react-router-dom';

export default function Cards({
  strMeal,
  strMealThumb,
  strYoutube,
  idMeal,
  idDrink,
  strDrinkThumb,
  strDrink,
}) {
  return (
    <Link to={ strYoutube ? `/foods/${idMeal}` : `/drinks/${idDrink}` }>
      <article className="card">
        <img
          src={ strYoutube ? strMealThumb : strDrinkThumb }
          alt="strMealThumb"
          name={ strYoutube ? strMeal : strDrink }
        />
        <span>{ strYoutube ? strMeal : strDrink }</span>
      </article>
    </Link>
  );
}

Cards.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
}.isRequired;
