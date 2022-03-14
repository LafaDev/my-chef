import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import Cards from '../components/Cards/Cards';
import { MealAPIContext } from '../contexts/MealAPIContex';
import Loading from '../components/Loading/Loading';
import { FilterContext } from '../contexts/FilterContext';
import '../styles/Main.css';

export default function Main() {
  const { apiResponse, handleAPI, load } = useContext(MealAPIContext);
  const { handlePage, search } = useContext(FilterContext);
  const MAX_CARD_NUMBER = 11;

  useEffect(() => {
    handleAPI();
    handlePage('foods');
  }, []);

  return (
    <main className="section-food">
      <Header title="Foods" className="header" />
      <div className="main-container container">
        <div className="cards-container">
          { load && (<Loading />) }
          { search.length > 0 ? search.map((meal, i) => (i <= MAX_CARD_NUMBER)
            && (<Cards key={ meal.idMeal } { ...meal } index={ i } />))
            : apiResponse.map((meal, i) => (i <= MAX_CARD_NUMBER)
              && (<Cards key={ meal.idMeal } { ...meal } index={ i } />)) }
        </div>
        <LowerMenu />
      </div>
    </main>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
