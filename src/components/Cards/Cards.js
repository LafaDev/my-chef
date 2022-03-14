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

  const img = currentPage === 'foods' ? strMealThumb : strDrinkThumb;

  return (
    <Link
      to={ currentPage === 'foods' ? `/foods/${idMeal}` : `/drinks/${idDrink}` }
      style={ {
        backgroundImage: `url(
        ${img})`,
      } }
      className="cards"
    >
      <div
        data-testid={ `${index}-recipe-card` }
        // style={ {
        //   backgroundImage: `url(
        //   ${img})`,
        // } }
        className="card-container"
      >
        <img
          src={ img }
          alt="strMealThumb"
          name={ currentPage === 'foods' ? strMeal : strDrink }
          className="img-card"
          data-testid={ `${index}-card-img` }
        />
        <span
          data-testid={ `${index}-card-name` }
          className="card-name"
        >
          { currentPage === 'foods' ? strMeal : strDrink }
        </span>
      </div>
    </Link>
  );
}

Cards.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
}.isRequired;
