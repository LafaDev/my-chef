import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FilterContext } from '../contexts/FilterContext';

export default function Progress({ match }) {
  const { meal, drink } = useContext(FilterContext);
  useEffect(() => {
    const localRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (match.url.includes(localRecipe.meals.id)) {
      console.log('inprogress meal');
    } else if (match.url.includes(localRecipe.id)) {
      console.log('inprogress drinks');
    } else {
      console.log('startprogress');
      if (match.url.includes('foods')) {
        localRecipe.meals = { ...meal };
        localStorage.setItem(JSON.stringify(localRecipe));
      } else if (match.url.includes(JSON.stringify('drinks'))) {
        localRecipe.meals = { ...drink };
        localStorage.setItem(localRecipe);
      }
    }
  }, []);

  return (
    <section className="container containerProgress">
      <h1>
        Blessed
      </h1>
    </section>
  );
}

Progress.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
