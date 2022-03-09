import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import Cards from '../components/Cards/Cards';
import { MealAPIContext } from '../contexts/MealAPIContex';
import Loading from '../components/Loading/Loading';

export default function Main() {
  const { apiResponse, handleAPI, load } = useContext(MealAPIContext);

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <section>
      <Header title="Foods" />

      {load
        ? (<Loading />) : (
          apiResponse.map((meal) => (<Cards key={ meal.idMeal } { ...meal } />))
        ) }
      <LowerMenu />
    </section>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
