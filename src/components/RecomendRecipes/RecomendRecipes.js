import React from 'react';
import PropTypes from 'prop-types';
import './RecomendRecipes.css';

export default function RecomendRecipes({ url, apiResponse, cocktailResponse }) {
  const MAX_CARD_NUMBER = 5;
  return (
    <section
      className="container containerRecomendedRecipes"
    >
      {console.log(cocktailResponse)}
      {url.includes('foods') && cocktailResponse.map(
        (e, i) => (i <= MAX_CARD_NUMBER)
        && (
          <section
            className="reccard"
            key={ `rec-${i}` }
            data-testid={ `${i}-recomendation-card` }
          >
            <img
              src={ e.strDrinkThumb }
              alt={ `${e.strDrink} Thumb` }
              name={ e.strDrink }
              className="img-card"
            />
            <p data-testid={ `${i}-recomendation-title` }>{e.strDrink}</p>
          </section>
        ),
      )}
      {url.includes('drinks') && apiResponse.map(
        (e, i) => (i <= MAX_CARD_NUMBER)
        && (
          <section
            className="reccard"
            key={ `rec-${i}` }
            data-testid={ `${i}-recomendation-card` }
          >
            <p data-testid={ `${i}-recomendation-title` }>{e.strMeal}</p>
          </section>
        ),
      )}
    </section>
  );
}

RecomendRecipes.propTypes = {
  url: PropTypes.obj,
}.isRequired;
