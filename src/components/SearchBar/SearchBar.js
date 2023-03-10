import React, { useContext, useState } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import { GeneralAPIContext } from '../../contexts/GeneralAPIContext';
import {
  fetchMealsByName,
  fetchMealsByFirstLetter,
  fetchMealsByIngredient,
  fetchMeals,
} from '../../services/MealsAPI';
import {
  fetchDrinksByName,
  fetchDrinksByFirstLetter,
  fetchDrinksByIngredient,
  fetchDrinks,
} from '../../services/cocktailAPI';
import './SearchBar.css';

const ALERT = 'Sorry, we haven\'t found any recipes for these filters.';
const NO_MORE_LETTERS = 'Your search must have only 1 (one) character';

export default function SearchBar() {
  const { currentPage, setSearch, setCategoryFilter } = useContext(FilterContext);
  const { setLoad, setCocktailLoad } = useContext(GeneralAPIContext);
  const [input, setInput] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const noResponseAlert = () => {
    alert(ALERT);
  };

  const oneLetterAlert = () => {
    alert(NO_MORE_LETTERS);
  };

  const handleFoods = async () => {
    let results;
    setLoad(true);
    const radio = [...document.querySelectorAll('input')]
      .find((inputs) => inputs.checked);
    switch (radio.id) {
    case 'ingredient':
      results = await fetchMealsByIngredient(input);
      if (!results.meals) {
        setLoad(false);
        noResponseAlert();
      } else {
        setCategoryFilter([]);
        setSearch(results.meals);
        setLoad(false);
      }
      break;
    case 'letter':
      results = await fetchMealsByFirstLetter(input);
      if (!results.meals) {
        setLoad(false);
        // noResponseAlert();
        oneLetterAlert();
      } else {
        setCategoryFilter([]);
        setSearch(results.meals);
        setLoad(false);
      }
      break;
    case 'name':
      results = await fetchMealsByName(input);
      if (!results.meals) {
        setLoad(false);
        noResponseAlert();
      } else {
        setCategoryFilter([]);
        setSearch(results.meals);
        setLoad(false);
      }
      break;
    default:
      results = await fetchMeals();
      if (!results.meals) {
        setLoad(false);
        noResponseAlert();
      } else {
        setCategoryFilter([]);
        setSearch(results.meals);
        setLoad(false);
      }
    }
  };

  const handleDrinks = async () => {
    let results;
    setCocktailLoad(true);
    const radio = [...document.querySelectorAll('input')]
      .find((inputs) => inputs.checked);
    switch (radio.id) {
    case 'ingredient':
      results = await fetchDrinksByIngredient(input);
      if (!results.drinks) {
        setCocktailLoad(false);
        noResponseAlert();
      } else {
        setCategoryFilter([]);
        setSearch(results.drinks);
        setCocktailLoad(false);
      }
      break;
    case 'letter':
      results = await fetchDrinksByFirstLetter(input);
      if (!results.drinks) {
        setCocktailLoad(false);
        oneLetterAlert();
      } else {
        setCategoryFilter([]);
        setSearch(results.drinks);
        setCocktailLoad(false);
      }
      break;
    case 'name':
      results = await fetchDrinksByName(input);
      if (!results.drinks) {
        setCocktailLoad(false);
        noResponseAlert();
      } else {
        setCategoryFilter([]);
        setSearch(results.drinks);
        setCocktailLoad(false);
      }
      break;
    default:
      results = await fetchDrinks();
      if (!results.drinks) {
        setCocktailLoad(false);
        noResponseAlert();
      } else {
        setCategoryFilter([]);
        setSearch(results.drinks);
        setCocktailLoad(false);
      }
    }
  };

  const handleSearch = () => {
    const radio = [...document.querySelectorAll('input')]
      .find((inputs) => inputs.checked);
    if (radio === undefined) {
      alert('Please, choose a filter');
    } else if (currentPage === 'foods') {
      handleFoods();
    } else if (currentPage === 'drinks') {
      handleDrinks();
    }
  };

  return (
    <section className="search-container container">
      {/* <h3> filter </h3> */}
      <form className="">

        <div className="searchbtn">
          <label htmlFor="ingredient">
            Ingredient

            <input
              name="filter"
              data-testid="ingredient-search-radio"
              type="radio"
              id="ingredient"
              className="input-filter"
            />
          </label>

          <label htmlFor="letter">
            First letter

            <input
              name="filter"
              data-testid="first-letter-search-radio"
              type="radio"
              id="letter"
              className="input-filter"
            />
          </label>

          <label htmlFor="Name">
            Name

            <input
              name="filter"
              data-testid="name-search-radio"
              type="radio"
              id="name"
              className="input-filter"
            />
          </label>
        </div>

        <input
          data-testid="search-input"
          type="type"
          value={ input }
          onChange={ handleChange }
          // className="search-input"
          className="input-filter"
        />
        <button
          type="button"
          onClick={ handleSearch }
          data-testid="exec-search-btn"
          className="search-button"
        >
          Search
        </button>

      </form>
    </section>

  );
}
