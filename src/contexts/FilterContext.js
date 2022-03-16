// - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMealsByCategory } from '../services/MealsAPI';
import { fetchDrinksByCategory } from '../services/cocktailAPI';
// import { fetchMeals } from '../services/MealsAPI';

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  // states

  const [currentPage, setCurrentPage] = useState([]);
  const [search, setSearch] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [cancelReset, setCancelReset] = useState(false);
  // functions
  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryFilter = async (category, type) => {
    if (type === 'foods') {
      const results = await fetchMealsByCategory(category);
      setCategoryFilter(results.meals);
    } else {
      const results = await fetchDrinksByCategory(category);
      setCategoryFilter(results.drinks);
    }
  };

  return (
    <FilterContext.Provider
      value={ {
        handlePage,
        currentPage,
        search,
        setSearch,
        setCurrentPage,
        categoryFilter,
        handleCategoryFilter,
        setCategoryFilter,
        cancelReset,
        setCancelReset,
      } }
    >
      { children }
    </FilterContext.Provider>
  );
}

FilterContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
