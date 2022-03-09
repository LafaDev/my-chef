// - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMeals } from '../services/MealsAPI';

export const MealAPIContext = createContext();

export default function MealAPIContextProvider({ children }) {
  // states

  const [apiResponse, setApiResponse] = useState([]);
  const [load, setLoad] = useState(true);
  // functions
  const handleAPI = async () => {
    const results = await fetchMeals();
    setLoad(false);
    setApiResponse(results.meals);
    console.log(results.meals);
  };

  return (
    <MealAPIContext.Provider
      value={ { handleAPI, load, apiResponse, setLoad,
      } }
    >
      {children}
    </MealAPIContext.Provider>
  );
}

MealAPIContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
