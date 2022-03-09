import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import Cards from '../components/Cards/Cards';
import { MealAPIContext } from '../contexts/MealAPIContex';
import Loading from '../components/Loading/Loading';

import '../styles/MainFoods.css';

export default function Main() {
  const { apiResponse, handleAPI, load } = useContext(MealAPIContext);
  const MAX_CARD_NUMBER = 14;

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <section className="section">
      <Header title="Foods" className="header" />

      {load
        ? (<Loading />) : (
          apiResponse.map(
            (meal, i) => (i <= MAX_CARD_NUMBER)
            && (<Cards key={ meal.idMeal } { ...meal } />),
          ))}
      <LowerMenu />
    </section>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
