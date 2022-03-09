// // - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchDrinks } from '../services/cocktailAPI';

export const CocktailAPIContext = createContext();

export default function CocktailAPIContextProvider({ children }) {
  const [cocktailResponse, setCocktailResponse] = useState([]);
  const [cocktailLoad, setCocktailLoad] = useState(true);

  const handleCocktailAPI = async () => {
    const results = await fetchDrinks();
    setCocktailLoad(false);
    setCocktailResponse(results.drinks);
    // console.log(results);
  };

  return (
    <CocktailAPIContext.Provider
      value={ { handleCocktailAPI, cocktailLoad, cocktailResponse, setCocktailLoad,
      } }
    >
      {children}
    </CocktailAPIContext.Provider>
  );
}

CocktailAPIContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
