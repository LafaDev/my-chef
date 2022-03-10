// - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// import { fetchMeals } from '../services/MealsAPI';

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  // states

  const [currentPage, setCurrentPage] = useState([]);
  const [search, setSearch] = useState([]);
  // functions
  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <FilterContext.Provider
      value={ { handlePage, currentPage, search, setSearch,
      } }
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
