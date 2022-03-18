import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
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
let nameCat;
const setNameCat = (history) => {
  if (history.location.state) {
    nameCat = history.location.state.name;
  } else {
    nameCat = undefined;
  }
};

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
    cancelCategory,
    setCancelCategory,
    selectedCategory,
    setSelectedCategory,
  } = useContext(FilterContext);
  // const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [newCat, setNewCat] = useState(false);
  const history = useHistory();

  const handleSelected = () => {
    const buttons = document.querySelector('.container-buttons').children;
    [...buttons].forEach((btn) => { btn.className = 'btn-profile'; });
    let newCategory = [...buttons].find((btn) => btn.innerHTML === selectedCategory);
    if (!newCategory) {
      newCategory = [...buttons].find((btn) => btn.innerHTML === 'All');
      newCategory.className = 'selectedBtn';
    }
    if (selectedCategory && newCategory) newCategory.className = 'selectedBtn';
  };

  const handleIngredient = () => {
    if (nameCat && !categories.some((cat) => cat === nameCat)) {
      setNewCat(true);
    }
  };

  const getCategories = async () => {
    const results = await fetchDrinksCategories();
    setCategories(results.drinks);
    handleIngredient();
    // if (!cancelCategory) setSelectedCategory('All');
    if (!cancelCategory) {
      setSelectedCategory('All');
    }
    if (nameCat) {
      setSelectedCategory(nameCat);
    }
    handleSelected();
  };

  const handleClick = ({ target }) => {
    setCocktailLoad(true);
    if (nameCat) setNewCat(false);
    if (selectedCategory === target.innerHTML) {
      setCategoryFilter([]);
      setSelectedCategory('All');
    } else {
      handleCategoryFilter(target.innerHTML, 'drinks');
      setSelectedCategory(target.innerHTML);
    }
    setSearch([]);
    setCocktailLoad(false);
  };

  const handleAllFilter = () => {
    setNewCat(false);
    setSelectedCategory('All');
    setCocktailLoad(true);
    setCategoryFilter([]);
    setSearch([]);
    setCocktailLoad(false);
  };

  useEffect(() => {
    setNameCat(history);
    if (!cancelReset) setSearch([]);
    if (!cancelCategory) setCategoryFilter([]);
    handleCocktailAPI();
    handlePage('drinks');
    getCategories();
    setCancelReset(false);
    setCancelCategory(false);
    console.log('rodou useEffec');
  }, []);

  useEffect(() => { handleSelected(); }, [selectedCategory]);

  return (
    <main className="section-drink">
      <Header title="Drinks" />
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
          {categories.map((category, i) => (i <= MAX_CATEGORIES
            && (
              <button
                type="button"
                data-testid={ `${category.strCategory}-category-filter` }
                key={ category.strCategory }
                className="btn-profile"
                onClick={ handleClick }
              >
                {category.strCategory}
              </button>)))}
          {newCat && (
            <button
              type="button"
              data-testid={ `${nameCat}-category-filter` }
              key={ nameCat }
              className="btn-profile"
              onClick={ handleClick }
            >
              { nameCat }
            </button>
          )}
        </section>

        <div className="cards-container">
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
    </main>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
