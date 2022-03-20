// // - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMealDetails } from '../services/MealsAPI';
import { fetchDrinkDetails } from '../services/cocktailAPI';

export const DetailsAPIContext = createContext();

export const getId = (path) => {
  const urlPath = path.split('/');
  return urlPath[urlPath.length - 1];
};

export default function DetailsAPIContextProvider({ children }) {
  const [meal, setMeal] = useState({});
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const ingredientArray = (results) => {
    const ingredientsArray = [];
    const chaves = Object.keys(results)
      .filter((key) => key.includes('Ingredient'));
    chaves.forEach((chave) => ingredientsArray.push(results[chave]));
    setIngredients(ingredientsArray);
  };

  const measureArray = (results) => {
    const measuresArray = [];
    const chaves = Object.keys(results)
      .filter((key) => key.includes('Measure'));
    chaves.forEach((chave) => measuresArray.push(results[chave]));
    setMeasures(measuresArray);
  };

  const mealDetails = async (id) => {
    setDrink({});
    setIngredients([]);
    setMeasures([]);
    const results = await fetchMealDetails(id);
    setMeal(...results.meals);
    ingredientArray(...results.meals);
    measureArray(...results.meals);
  };

  const drinkDetails = async (id) => {
    setMeal({});
    setIngredients([]);
    setMeasures([]);
    const results = await fetchDrinkDetails(id);
    setDrink(...results.drinks);
    ingredientArray(...results.drinks);
    measureArray(...results.drinks);
  };

  // const handleCocktailAPI = async () => {
  //   const results = await fetchDrinks();
  //   setCocktailLoad(false);
  //   setCocktailResponse(results.drinks);
  // };

  return (
    <DetailsAPIContext.Provider
      value={ {
        meal,
        setMeal,
        mealDetails,
        ingredients,
        setIngredients,
        measures,
        setMeasures,
        drink,
        setDrink,
        drinkDetails,
        getId,
      } }
    >
      {children}
    </DetailsAPIContext.Provider>
  );
}

DetailsAPIContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
