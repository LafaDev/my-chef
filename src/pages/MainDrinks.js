import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import Cards from '../components/Cards/Cards';
import { CocktailAPIContext } from '../contexts/CocktailsAPIContext';
import { FilterContext } from '../contexts/FilterContext';
import Loading from '../components/Loading/Loading';
import '../styles/Main.css';

export default function Main() {
  const {
    handleCocktailAPI,
    cocktailLoad,
    cocktailResponse,
  } = useContext(CocktailAPIContext);
  const MAX_CARD_NUMBER = 11;
  const { handlePage, search } = useContext(FilterContext);

  useEffect(() => {
    handleCocktailAPI();
    handlePage('drinks');
  }, []);

  return (
    <main className="section-drink">
      <Header title="Drinks" className="header" />
      <div className="main-container container">
        <div className="cards-container">
          { cocktailLoad && (<Loading />) }
          { search.length > 0 ? search.map((drink, i) => (i <= MAX_CARD_NUMBER)
            && (<Cards key={ drink.idDrink } { ...drink } index={ i } />))
            : cocktailResponse.map((drink, i) => (i <= MAX_CARD_NUMBER)
              && (<Cards key={ drink.idDrink } { ...drink } index={ i } />)) }
        </div>
        <LowerMenu />
      </div>
    </main>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
