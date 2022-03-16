import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProgressIngredients.css';

export default function ProgressIngredients({ ingredients, measures, setDisabled }) {
  const url = useLocation();
  const { id } = useParams();
  const [ings, setIngs] = useState([]);

  const handleChecked = () => {
    const recepies = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (url.pathname.includes('foods') && recepies && recepies.meals[id]) {
      setIngs(recepies.meals[id]);
    } else if (url.pathname.includes('drinks') && recepies && recepies.cocktails[id]) {
      setIngs(recepies.cocktails[id]);
    }
  };

  const handleChange = ({ target }) => {
    const recepies = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (url.pathname.includes('foods')) {
      if (target.checked) {
        recepies.meals[id] = [...recepies.meals[id], target.value];
      } else {
        recepies.meals[id] = recepies.meals[id]
          .filter((ing) => ing !== target.value);
      }
    } else if (url.pathname.includes('drinks')) {
      if (target.checked) {
        recepies.cocktails[id] = [...recepies.cocktails[id], target.value];
      } else {
        recepies.cocktails[id] = recepies.cocktails[id]
          .filter((ing) => ing !== target.value);
      }
    }
    setDisabled([...document.querySelectorAll('input')]
      .every((input) => input.checked) === false);
    localStorage.setItem('inProgressRecipes', JSON.stringify(recepies));
    handleChecked();
  };

  useEffect(() => {
    handleChecked();
  }, []);

  return (
    <section className="container containerDetailIngredients">
      <h2> Ingredientes </h2>
      {ingredients.map((ingredient, i) => ingredient && (
        <div key={ ingredient }>
          <p
            data-testid={ `${i}-ingredient-step` }
          >
            <input
              type="checkbox"
              value={ ingredient }
              onChange={ handleChange }
              checked={ ings.some((ing) => ing === ingredient) }
            />
            { `${ingredient} ${measures[i] === null ? '' : measures[i]}` }
          </p>
        </div>
      ))}
    </section>
  );
}

ProgressIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
  setDisabled: PropTypes.func.isRequired,
};
