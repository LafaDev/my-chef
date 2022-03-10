import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import Cards from '../components/Cards/Cards';
import { CocktailAPIContext } from '../contexts/CocktailsAPIContext';
import { FilterContext } from '../contexts/FilterContext';
import { fetchDrinksCategories } from '../services/cocktailAPI';
import Loading from '../components/Loading/Loading';

const MAX_CARD_NUMBER = 11;
const MAX_CATEGORIES = 4;

export default function Main() {
  const {
    handleCocktailAPI,
    cocktailLoad,
    cocktailResponse,
    setCocktailLoad,
  } = useContext(CocktailAPIContext);
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
    const results = await fetchDrinksCategories();
    setCategories(results.drinks);
  };

  const handleClick = ({ target }) => {
    setCocktailLoad(true);
    setSearch([]);
    handleCategoryFilter(target.innerHTML, 'drinks');
    setCocktailLoad(false);
  };

  useEffect(() => {
    handleCocktailAPI();
    handlePage('drinks');
    getCategories();
    setSearch([]);
    setCategoryFilter([]);
  }, []);

  return (
    <section>
      <Header title="Drinks" />

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

      <div>
        {cocktailLoad && (<Loading />) }
        {search.length > 0 && search.map((drink, i) => (i <= MAX_CARD_NUMBER)
          && (<Cards key={ drink.idDrink } { ...drink } index={ i } />))}
        {search.length === 0 && categoryFilter.length === 0
        && cocktailResponse.map((drink, i) => (i <= MAX_CARD_NUMBER)
        && (<Cards key={ drink.idDrink } { ...drink } index={ i } />))}
        {search.length === 1 && <Redirect to={ `/drinks/${search[0].idDrink}` } />}
        {categoryFilter.length > 0 && categoryFilter
          .map((drink, i) => (i <= MAX_CARD_NUMBER)
          && (<Cards key={ drink.idDrink } { ...drink } index={ i } />))}
      </div>
      <LowerMenu />
    </section>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
