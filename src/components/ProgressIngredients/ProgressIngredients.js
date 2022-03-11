import React from 'react';
import PropTypes from 'prop-types';
import './ProgressIngredients.css';

export default function ProgressIngredients({ ingredients, measures }) {
  return (
    <section className="container containerDetailIngredients">
      <h2> Ingredientes </h2>
      {ingredients.map((ingredient, i) => ingredient !== '' && (
        <div key={ ingredient }>
          <p
            data-testid={ `${i}-ingredient-step` }
          >
            { `${ingredient} ${measures[i] === '' ? '' : measures[i]}` }
          </p>
        </div>
      ))}
    </section>
  );
}

ProgressIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
