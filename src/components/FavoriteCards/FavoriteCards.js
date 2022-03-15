import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DetailButtons from '../DetailButtons/DetailButtons';
import './FavoriteCards.css';

export default function FavoriteCards({ recepie, index, handleFavorites }) {
  return (
    <div>
      <Link
        to={ recepie.type === 'food' ? `/foods/${recepie.id}` : `/drinks/${recepie.id}` }
      >
        <article className="cards">
          <img
            src={ recepie.image }
            alt={ `${recepie.name} Thumb` }
            name={ recepie.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <span data-testid={ `${index}-horizontal-name` }>
            { recepie.name }
          </span>
          <span>
            { recepie.type === 'food' ? recepie.nationality : recepie.alcoholicOrNot }
          </span>
          <span data-testid={ `${index}-horizontal-top-text` }>
            { `${recepie.type === 'food'
              ? recepie.nationality : recepie.alcoholicOrNot} - ${recepie.category} ` }
          </span>
        </article>
      </Link>

      <DetailButtons
        index={ index }
        fav
        recepie={ recepie }
        handleFavorites={ handleFavorites }
      />
    </div>
  );
}

FavoriteCards.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
}.isRequired;
