import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FilterContext } from '../../contexts/FilterContext';
import './RecomendRecipes.css';

export default function RecomendRecipes({ url, apiResponse, cocktailResponse }) {
  const MAX_CARD_NUMBER = 5;
  const history = useHistory();
  const { setSearch, setCategoryFilter } = useContext(FilterContext);
  const handleClick = (id) => {
    setSearch([]);
    setCategoryFilter([]);
    history.push(url.includes('foods') ? `/drinks/${id}` : `/foods/${id}`);
  };
  return (
    <section
      className="containerRecomendedRecipes"
    >
      { url.includes('foods') && cocktailResponse.map(
        (e, i) => (i <= MAX_CARD_NUMBER)
        && (
          <button
            key={ `recc-${i}` }
            type="button"
            onClick={ () => handleClick(e.idDrink) }
          >
            <section
              className="reccard"
              data-testid={ `${i}-recomendation-card` }
            >
              <img
                src={ e.strDrinkThumb }
                alt={ `${e.strDrink} Thumb` }
                name={ e.strDrink }
                // className="img-card"
              />
              <p data-testid={ `${i}-recomendation-title` }>{e.strDrink}</p>
            </section>
          </button>
        ),
      )}
      {url.includes('drinks') && apiResponse.map(
        (e, i) => (i <= MAX_CARD_NUMBER)
        && (
          <button
            key={ `recc-${i}` }
            type="button"
            onClick={ () => handleClick(e.idMeal) }
          >
            <section
              className="reccard"
              data-testid={ `${i}-recomendation-card` }
            >
              <img
                src={ e.strMealThumb }
                alt={ `${e.strMeal} Thumb` }
                name={ e.strMeal }
                // className="img-card"
              />
              <p data-testid={ `${i}-recomendation-title` }>{e.strMeal}</p>
            </section>
          </button>
        ),
      )}
    </section>
  );
}

RecomendRecipes.propTypes = {
  url: PropTypes.obj,
}.isRequired;
