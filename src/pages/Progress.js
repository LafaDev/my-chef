import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DetailsAPIContext, getId } from '../contexts/DetailsAPIContext';
import DetailButtons from '../components/DetailButtons/DetailButtons';
import DetailTumb from '../components/DetailTumb/DetailTumb';
import DetailInstructions from '../components/DetailInstructions/DetailInstructions';

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
    } else if (url.pathname.includes(localRecipe[reId])) {
      console.log('inprogress meal');
    } else if (url.pathname.includes(localRecipe.cocktails[reId])) {
      console.log('inprogress drinks');
    } else {
      console.log('startprogress');
      if (url.pathname.includes('foods')) {
        localRecipe.meals = { ...meal };
        localStorage.setItem('inProgressRecipes', JSON.stringify(localRecipe));
      } else if (url.pathname.includes(JSON.stringify('drinks'))) {
        localRecipe.meals = { ...drink };
        localStorage.setItem('inProgressRecipes', localRecipe);
      }
    }
  };

  useEffect(() => {
    const localRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setLore(localRecipe);
  }, []);

  return (
    <section className="container containerProgress">
      <DetailTumb
        name={ meal.strMeal ? meal.strMeal : drink.strDrink }
        thumb={ meal.strMealThumb ? meal.strMealThumb : drink.strDrinkThumb }
        category={ meal.strMeal ? meal.strCategory : drink.strCategory }
        alcoholic={ drink.strAlcoholic ? drink.strAlcoholic : null }
      />
      <DetailButtons />
      {/* <detail */}

      <DetailInstructions
        inst={ meal.strInstructions ? meal.strInstructions : drink.strInstructions }
      />

      <button type="button" onClick={ () => console.log(meal) }> test </button>

      <h1> </h1>
    </section>
  );
}
