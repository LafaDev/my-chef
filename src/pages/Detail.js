import React, { useEffect, useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import DetailIngredients from '../components/DetailIngredients/DetailIngredients';
import DetailInstructions from '../components/DetailInstructions/DetailInstructions';
import DetailButtons from '../components/DetailButtons/DetailButtons';
import DetailTumb from '../components/DetailTumb/DetailTumb';
import DetailVideo from '../components/DetailVideo/DetailVideo';
import RecomendRecipes from '../components/RecomendRecipes/RecomendRecipes';
import { DetailsAPIContext, getId } from '../contexts/DetailsAPIContext';
import { GeneralAPIContext } from '../contexts/GeneralAPIContext';
import { FilterContext } from '../contexts/FilterContext';
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
  const history = useHistory();
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
  const { setCancelReset, setCancelCategory } = useContext(FilterContext);

  const handleGoBack = () => {
    setCancelReset(true);
    setCancelCategory(true);
    history.push(url.pathname.includes('foods') ? '/foods' : '/drinks');
  };

  const teste = () => {
    if (url.pathname.includes('foods')) {
      mealDetails(getId(url.pathname));
      handleCocktailAPI();
    } else if (url.pathname.includes('drinks')) {
      drinkDetails(getId(url.pathname));
      handleAPI();
    }
  };

  useEffect(() => {
    console.log('useEffect rodou');
    teste();
  }, [url.pathname]);

  return (
    <main className="section-details">
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
          <DetailInstructions
            inst={ meal.strInstructions ? meal.strInstructions : drink.strInstructions }
          />
          <h2>Recomendações</h2>
          <RecomendRecipes
            url={ url.pathname }
            apiResponse={ apiResponse }
            cocktailResponse={ cocktailResponse }
          />
        </div>

        {
          url.pathname.includes('foods') ? (
            <DetailVideo video={ meal.strYoutube } />) : null
        }
      </section>
      <div className="detail-opt">
        <button
          type="button"
          className="btnRtn"
          onClick={ handleGoBack }
        >
          Return

        </button>
        <Link
          to={ `${url.pathname}/in-progress` }
        >
          {CheckDone() && (
            <button
              data-testid="start-recipe-btn"
              type="button"
              // https://prod.liveshare.vsengsaas.visualstudio.com/join?88CD46C3E5CF44E95F5B6E8328A4DB8F7ED2
              className="btnStart"
            >
              {CheckProgress()}
            </button>
          )}
        </Link>
      </div>
    </main>
  );
}
