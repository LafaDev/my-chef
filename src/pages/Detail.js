import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DetailIngredients from '../components/DetailIngredients/DetailIngredients';
import DetailInstructions from '../components/DetailInstructions/DetailInstructions';
import DetailButtons from '../components/DetailButtons/DetailButtons';
import DetailTumb from '../components/DetailTumb/DetailTumb';
import DetailVideo from '../components/DetailVideo/DetailVideo';
import RecomendRecipes from '../components/RecomendRecipes/RecomendRecipes';
import { DetailsAPIContext, getId } from '../contexts/DetailsAPIContext';
import { GeneralAPIContext } from '../contexts/GeneralAPIContext';
import '../styles/Detail.css';

const CheckDone = () => {
  const url = useLocation();
  const irD = JSON.parse(localStorage.getItem('doneRecipes'));
  let isDone = true;
  if (irD) {
    irD.forEach((e) => {
      if (e.id === getId(url.pathname)) isDone = false;
    });
  }
  return isDone;
};

const CheckFavs = () => {
  const url = useLocation();
  const irD = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let isFav = false;
  if (irD) {
    irD.forEach((e) => {
      if (e.id === getId(url.pathname)) isFav = true;
    });
  }
  return isFav;
};

const CheckProgress = () => {
  const url = useLocation();
  const irD = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let inProgress = 'Start';
  let urDPath;
  if (irD && url.pathname.includes('drinks')) {
    urDPath = 'cocktails';
  } else if (url.pathname.includes('foods')) {
    urDPath = 'meals';
  }
  if (irD && irD[urDPath][getId(url.pathname)]) inProgress = 'Continue Recipe';
  return inProgress;
};

export default function Detail() {
  const url = useLocation();
  const {
    meal,
    mealDetails,
    ingredients,
    measures,
    drink,
    drinkDetails,
  } = useContext(DetailsAPIContext);
  const {
    handleAPI,
    apiResponse,
    handleCocktailAPI,
    cocktailResponse,
  } = useContext(GeneralAPIContext);

  // strMeasure

  //   <- para cada key ? includes Ingredients

  useEffect(() => {
    if (url.pathname.includes('foods')) {
      mealDetails(getId(url.pathname));
      handleCocktailAPI();
    } else if (url.pathname.includes('drinks')) {
      drinkDetails(getId(url.pathname));
      handleAPI();
    }
  }, []);

  return (
    <main className="containerDetail">
      <section className="container c-details">
        <div className="container row">
          <div className="c-details-md">
            <DetailTumb
              name={ meal.strMeal ? meal.strMeal : drink.strDrink }
              thumb={ meal.strMealThumb ? meal.strMealThumb : drink.strDrinkThumb }
              category={ meal.strMeal ? meal.strCategory : drink.strCategory }
              alcoholic={ drink.strAlcoholic ? drink.strAlcoholic : null }
            />
            <DetailButtons
              fav={ CheckFavs() }
              meal={ meal }
              drink={ drink }
              id={ meal.idMeal ? meal.idMeal : drink.idDrink }
            />
          </div>
          <DetailIngredients ingredients={ ingredients } measures={ measures } />
        </div>
        <DetailInstructions
          inst={ meal.strInstructions ? meal.strInstructions : drink.strInstructions }
        />
        <RecomendRecipes
          url={ url.pathname }
          apiResponse={ apiResponse }
          cocktailResponse={ cocktailResponse }
        />
        {
          url.pathname.includes('foods')
            ? <DetailVideo video={ meal.strYoutube } /> : null
        }

        <Link to={ `${url.pathname}/in-progress` } className="c-button">
          { CheckDone() && (
            <button
              data-testid="start-recipe-btn"
              type="button"
              className="btnStart"
            >
              { CheckProgress() }
            </button>
          ) }
        </Link>
      </section>
    </main>
  );
}
