import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import Cards from '../components/Cards/Cards';
import { CocktailAPIContext } from '../contexts/CocktailsAPIContext';
import Loading from '../components/Loading/Loading';

export default function Main() {
  const {
    handleCocktailAPI,
    cocktailLoad,
    cocktailResponse,
  } = useContext(CocktailAPIContext);
  const MAX_CARD_NUMBER = 11;

  useEffect(() => {
    handleCocktailAPI();
  }, []);

  return (
    <section>
      <Header title="Drinks" />
      {cocktailLoad
        ? (<Loading />) : (
          cocktailResponse.map(
            (drink, i) => (i <= MAX_CARD_NUMBER)
            && (<Cards key={ drink.idDrink } { ...drink } />),
          ))}
      <LowerMenu />
    </section>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
