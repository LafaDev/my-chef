import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FilterContext } from '../../contexts/FilterContext';
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
  const { currentPage } = useContext(FilterContext);

  return (
    <Link to={ currentPage === 'foods' ? `/foods/${idMeal}` : `/drinks/${idDrink}` }>
      <article className="cards" data-testid={ `${index}-recipe-card` }>
        <img
          src={ currentPage === 'foods' ? strMealThumb : strDrinkThumb }
          alt="strMealThumb"
          name={ currentPage === 'foods' ? strMeal : strDrink }
          data-testid={ `${index}-card-img` }
        />
        <span data-testid={ `${index}-card-name` }>
          { currentPage === 'foods' ? strMeal : strDrink }
        </span>
      </article>
    </Link>
  );
}

Cards.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
}.isRequired;
