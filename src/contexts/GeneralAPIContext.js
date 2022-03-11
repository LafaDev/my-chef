// - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMeals } from '../services/MealsAPI';
import { fetchDrinks } from '../services/cocktailAPI';

export const GeneralAPIContext = createContext();

export default function GeneralAPIContextProvider({ children }) {
  // meals
  const [apiResponse, setApiResponse] = useState([]);
  const [load, setLoad] = useState(true);
  // drink
  const [cocktailResponse, setCocktailResponse] = useState([]);
  const [cocktailLoad, setCocktailLoad] = useState(true);
  // functions
  const handleAPI = async () => {
    const results = await fetchMeals();
    setLoad(false);
    setApiResponse(results.meals);
  };

  const handleCocktailAPI = async () => {
    const results = await fetchDrinks();
    setCocktailLoad(false);
    setCocktailResponse(results.drinks);
  };

  return (
    <GeneralAPIContext.Provider
      value={ {
        handleAPI,
        load,
        apiResponse,
        setLoad,
        handleCocktailAPI,
        cocktailLoad,
        cocktailResponse,
        setCocktailLoad,
      } }
    >
      {children}
    </GeneralAPIContext.Provider>
  );
}

GeneralAPIContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
