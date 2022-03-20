import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import { fetchRandomMeal } from '../services/MealsAPI';
import { fetchRandomDrink } from '../services/cocktailAPI';
import '../styles/ExplorerType.css';

export default function ExplorerType({ match }) {
  const history = useHistory();
  const url = useLocation();

  const handleSurprise = async () => {
    if (match.url.includes('foods')) {
      const randomMeal = await fetchRandomMeal();
      history.push(`/foods/${randomMeal.meals[0].idMeal}`, { from: url.pathname });
    } else if (match.url.includes('drinks')) {
      const randomDrink = await fetchRandomDrink();
      history.push(`/drinks/${randomDrink.drinks[0].idDrink}`, { from: url.pathname });
    }
  };

  return (
    <section className="container">
      {match.url.includes('drinks') ? (
        <Header
          title="Explore Drinks"
        />
      ) : <Header title="Explore Foods" /> }
      <div className="buttons">
        {match.url.includes('drinks') ? (
          <Link to="/explore/drinks/ingredients">
            <button
              className="btn"
              type="button"
              data-testid="explore-by-ingredient"
            >
              By Ingredient
            </button>
          </Link>
        ) : (
          <Link to="/explore/foods/ingredients">
            <button
              className="btn"
              type="button"
              data-testid="explore-by-ingredient"
            >
              By Ingredient
            </button>
          </Link>
        )}
        {match.url.includes('drinks') ? null
          : (
            <Link to="/explore/foods/nationalities">
              <button
                className="btn"
                type="button"
                data-testid="explore-by-nationality"
              >
                By Nationality
              </button>
            </Link>
          ) }
        <button
          type="button"
          className="btn"
          data-testid="explore-surprise"
          onClick={ handleSurprise }
        >
          Surprise me!
          {' '}
        </button>
      </div>
      <LowerMenu />
    </section>
  );
}

ExplorerType.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
