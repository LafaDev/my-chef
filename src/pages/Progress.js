import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DetailsAPIContext, getId } from '../contexts/DetailsAPIContext';

// import React, { useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
// import { FilterContext } from '../contexts/FilterContext';

export default function Progress() {
  const url = useLocation();
  const reId = getId(url.pathname);
  const {
    meal,
    drink,
  } = useContext(DetailsAPIContext);

  const setLore = (localRecipe) => {
    if (!localRecipe) {
      localRecipe = {
        cocktails: {},
        meals: {},
      };
    } else if (url.pathname.includes(localRecipe.meals[reId])) {
      console.log('inprogress meal');
    } else if (url.pathname.includes(localRecipe.cocktails[reId])) {
      console.log('inprogress drinks');
    } else {
      console.log('startprogress');
      if (url.pathname.includes('foods')) {
        localRecipe.meals = { ...meal };
        localStorage.setItem(JSON.stringify(localRecipe));
      } else if (url.pathname.includes(JSON.stringify('drinks'))) {
        localRecipe.meals = { ...drink };
        localStorage.setItem(localRecipe);
      }
    }
  };

  useEffect(() => {
    const localRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setLore(localRecipe);
  }, []);

  return (
    <section className="container containerProgress">
      <h1>
        Blessed
      </h1>
    </section>
  );
}
