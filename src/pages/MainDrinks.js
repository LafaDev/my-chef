import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import Cards from '../components/Cards/Cards';
import { GeneralAPIContext } from '../contexts/GeneralAPIContext';
import { FilterContext } from '../contexts/FilterContext';
import { fetchDrinksCategories } from '../services/cocktailAPI';
import Loading from '../components/Loading/Loading';
import '../styles/Main.css';

const MAX_CARD_NUMBER = 11;
const MAX_CATEGORIES = 4;

export default function Main() {
  const {
    handleCocktailAPI,
    cocktailLoad,
    cocktailResponse,
    setCocktailLoad,
  } = useContext(GeneralAPIContext);
  const {
    handlePage,
    search,
    handleCategoryFilter,
    categoryFilter,
    setSearch,
    setCategoryFilter,
    cancelReset,
    setCancelReset,
  } = useContext(FilterContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const getCategories = async () => {
    const results = await fetchDrinksCategories();
    setCategories(results.drinks);
  };

  const handleClick = ({ target }) => {
    setCocktailLoad(true);
    if (selectedCategory === target.innerHTML) {
      setCategoryFilter([]);
      setSelectedCategory('');
    } else {
      handleCategoryFilter(target.innerHTML, 'drinks');
      setSelectedCategory(target.innerHTML);
    }
    setSearch([]);
    setCocktailLoad(false);
  };

  const handleAllFilter = () => {
    setCocktailLoad(true);
    setCategoryFilter([]);
    setSearch([]);
    setCocktailLoad(false);
  };

  useEffect(() => {
    handleCocktailAPI();
    handlePage('drinks');
    getCategories();
    if (!cancelReset) setSearch([]);
    setCategoryFilter([]);
    setCancelReset(false);
  }, []);

  return (
    <main className="section-drink">
      <div className="header">
        <Header title="Drinks" />
      </div>
      <section className="main-container container">
        <section className="container-buttons">
          <button
            type="button"
            data-testid="All-category-filter"
            onClick={ handleAllFilter }
            className="btn-profile"
          >
            All
          </button>
          { categories.map((category, i) => (i <= MAX_CATEGORIES
            && (
              <button
                type="button"
                data-testid={ `${category.strCategory}-category-filter` }
                key={ category.strCategory }
                className="btn-profile"
                onClick={ handleClick }
              >
                { category.strCategory }
              </button>))) }
        </section>

        <div className="cards-container">
          { cocktailLoad && (<Loading />) }
          { search.length > 0 && search.map((drink, i) => (i <= MAX_CARD_NUMBER)
            && (<Cards key={ drink.idDrink } { ...drink } index={ i } />)) }
          { search.length === 0 && categoryFilter.length === 0
            && cocktailResponse.map((drink, i) => (i <= MAX_CARD_NUMBER)
              && (<Cards key={ drink.idDrink } { ...drink } index={ i } />)) }
          { search.length === 1 && <Redirect to={ `/drinks/${search[0].idDrink}` } /> }
          { categoryFilter.length > 0 && categoryFilter
            .map((drink, i) => (i <= MAX_CARD_NUMBER)
              && (<Cards key={ drink.idDrink } { ...drink } index={ i } />)) }
        </div>
        <LowerMenu />
      </section>
    </main>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
