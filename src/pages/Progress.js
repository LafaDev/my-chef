import React, { useEffect, useContext, useState } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { DetailsAPIContext } from '../contexts/DetailsAPIContext';
import DetailButtons from '../components/DetailButtons/DetailButtons';
import DetailTumb from '../components/DetailTumb/DetailTumb';
import DetailInstructions from '../components/DetailInstructions/DetailInstructions';
import ProgressIngredients from '../components/ProgressIngredients/ProgressIngredients';
import useSetDone from '../services/useSetDone';
// import React, { useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
// import { FilterContext } from '../contexts/FilterContext';

const CheckFavs = (id) => {
  const irD = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let isFav = false;
  if (irD) {
    irD.forEach((e) => {
      if (e.id === id) isFav = true;
    });
  }
  return isFav;
};

const setProgress = (localRecipe, id, url) => {
  if (!localRecipe.meals[id] && url.pathname.includes('foods')) {
    localRecipe.meals = { ...localRecipe.meals, [id]: [] };
    localStorage.setItem('inProgressRecipes', JSON.stringify(localRecipe));
  } else if (!localRecipe.cocktails[id] && url.pathname.includes('drinks')) {
    localRecipe.cocktails = {
      ...localRecipe.cocktails, [id]: [] };
    localStorage.setItem('inProgressRecipes', JSON.stringify(localRecipe));
  }
};

export default function Progress() {
  const url = useLocation();
  const { id } = useParams();
  const history = useHistory();
  const {
    mealDetails,
    drinkDetails,
    meal,
    drink,
    ingredients,
    measures,
  } = useContext(DetailsAPIContext);
  const [disabled, setDisabled] = useState(true);

  const HandleClick = () => {
    useSetDone(meal, drink);
    history.push('/done-recipes');
  };

  useEffect(() => {
    const localRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!localRecipe) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {},
        meals: {},
      }));
    }
    setProgress(JSON.parse(localStorage.getItem('inProgressRecipes')), id, url);
    if (url.pathname.includes('foods')) {
      mealDetails(id);
    } else if (url.pathname.includes('drinks')) {
      drinkDetails(id);
    }
    console.log(meal);
    console.log(drink);
  }, []);

  return (
    <section className="container containerProgress">
      <DetailTumb
        name={ meal.strMeal ? meal.strMeal : drink.strDrink }
        thumb={ meal.strMealThumb ? meal.strMealThumb : drink.strDrinkThumb }
        category={ meal.strMeal ? meal.strCategory : drink.strCategory }
        alcoholic={ drink.strAlcoholic ? drink.strAlcoholic : null }
      />
      <DetailButtons
        fav={ CheckFavs(id) }
        meal={ meal }
        drink={ drink }
        id={ meal.idMeal ? meal.idMeal : drink.idDrink }
      />

      <ProgressIngredients
        ingredients={ ingredients }
        measures={ measures }
        setDisabled={ setDisabled }
      />

      <DetailInstructions
        inst={ meal.strInstructions ? meal.strInstructions : drink.strInstructions }
      />

      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ HandleClick }
        disabled={ disabled }
      >
        Finalizar
      </button>

      <h1> </h1>
    </section>
  );
}
