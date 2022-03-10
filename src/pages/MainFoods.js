import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import Cards from '../components/Cards/Cards';
import { MealAPIContext } from '../contexts/MealAPIContex';
import Loading from '../components/Loading/Loading';
import { FilterContext } from '../contexts/FilterContext';
import { fetchMealsCategories } from '../services/MealsAPI';
import '../styles/MainFoods.css';

const MAX_CARD_NUMBER = 11;
const MAX_CATEGORIES = 4;

export default function Main() {
  const { apiResponse, handleAPI, load, setLoad } = useContext(MealAPIContext);
  const {
    handlePage,
    search,
    handleCategoryFilter,
    categoryFilter,
    setSearch,
    setCategoryFilter,
  } = useContext(FilterContext);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const results = await fetchMealsCategories();
    setCategories(results.meals);
  };

  const handleClick = ({ target }) => {
    setLoad(true);
    setSearch([]);
    handleCategoryFilter(target.innerHTML, 'foods');
    setLoad(false);
  };

  useEffect(() => {
    handleAPI();
    handlePage('foods');
    getCategories();
    setSearch([]);
    setCategoryFilter([]);
  }, []);

  return (
    <main className="section">
      <Header title="Foods" className="header" />

      <section>
        {categories.map((category, i) => (i <= MAX_CATEGORIES
          && (
            <button
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              key={ category.strCategory }
              className="btn"
              onClick={ handleClick }
            >
              {category.strCategory}
            </button>)))}
      </section>

      <div className="cards-container">
        {load && (<Loading />)}
        {search.length > 0 && search.map((meal, i) => (i <= MAX_CARD_NUMBER)
        && (<Cards key={ meal.idMeal } { ...meal } index={ i } />))}
        {search.length === 0 && categoryFilter.length === 0
        && apiResponse.map((meal, i) => (i <= MAX_CARD_NUMBER)
                    && (<Cards key={ meal.idMeal } { ...meal } index={ i } />))}
        {search.length === 1 && <Redirect to={ `/foods/${search[0].idMeal}` } />}
        {categoryFilter.length > 0 && categoryFilter
          .map((meal, i) => (i <= MAX_CARD_NUMBER)
        && (<Cards key={ meal.idMeal } { ...meal } index={ i } />))}
      </div>

      <LowerMenu />

    </main>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
