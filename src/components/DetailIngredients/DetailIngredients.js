import React from 'react';
import PropTypes from 'prop-types';
import './DetailIngredients.css';

export default function DetailIngredients({ ingredients, measures }) {
  return (
    <section className="containerDetailIngredients">
      <h2> Ingredientes </h2>
      {ingredients.map((ingredient, i) => ingredient && (
        <div key={ ingredient }>
          <p
            data-testid={ `${i}-ingredient-name-and-measure` }
          >
            { `${ingredient} ${measures[i] === null ? '' : measures[i]}` }
          </p>
        </div>
      ))}
    </section>
  );
}

DetailIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
