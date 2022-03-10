import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailButtons from '../components/DetailButtons/DetailButtons';
import DetailIngredients from '../components/DetailIngredients/DetailIngredients';
import DetailInstructions from '../components/DetailInstructions/DetailInstructions';
import DetailTumb from '../components/DetailTumb/DetailTumb';
import DetailVideo from '../components/DetailVideo/DetailVideo';
import { FilterContext } from '../contexts/FilterContext';
import { fetchMealDetails } from '../services/MealsAPI';
import { fetchDrinkDetails } from '../services/cocktailAPI';

export default function Detail({ match }) {
  const { currentPage } = useContext(FilterContext);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [meal, setMeal] = useState({});
  const [drink, setDrink] = useState({});

  const ingredientArray = (results) => {
    const ingredientsArray = [];
    const chaves = Object.keys(results)
      .filter((key) => key.includes('Ingredient'));
    chaves.forEach((chave) => ingredientsArray.push(results[chave]));
    setIngredients(ingredientsArray);
  };

  const measureArray = (results) => {
    const measuresArray = [];
    const chaves = Object.keys(results)
      .filter((key) => key.includes('Measure'));
    chaves.forEach((chave) => measuresArray.push(results[chave]));
    setMeasures(measuresArray);
  };

  const mealDetails = async () => {
    const results = await fetchMealDetails(match.params.id);
    setMeal(...results.meals);
    ingredientArray(...results.meals);
    measureArray(...results.meals);
  };

  const drinkDetails = async () => {
    const results = await fetchDrinkDetails(match.params.id);
    setDrink(...results.drinks);
    ingredientArray(...results.drinks);
    measureArray(...results.drinks);
    console.log(...results.drinks);
  };

  // strMeasure

  //   <- para cada key ? includes Ingredients

  useEffect(() => {
    if (match.url.includes('foods')) {
      mealDetails();
    } else if (match.url.includes('drinks')) {
      drinkDetails();
    }
  }, []);

  return (
    <section className=" container containerDetail">
      <DetailTumb
        name={ meal.strMeal ? meal.strMeal : drink.strDrink }
        thumb={ meal.strMealThumb ? meal.strMealThumb : drink.strDrinkThumb }
        category={ meal.strMeal ? meal.strCategory : drink.strCategory }
      />
      <DetailButtons id={ match.params.id } />
      <DetailIngredients ingredients={ ingredients } measures={ measures } />
      <DetailInstructions />

      <Link to={ `/${currentPage}/${match.params.id}/in-progress` }>
        <button
          className="btn btnStart"
          data-testid="start-recipe-btn"
          type="button"
        >
          Start
        </button>
      </Link>

      {
        match.url.includes('foods') ? <DetailVideo /> : null
      }
    </section>
  );
}

Detail.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
