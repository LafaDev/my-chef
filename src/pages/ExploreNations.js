import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import { GeneralAPIContext } from '../contexts/GeneralAPIContext';
import { fetchMealsAreas, fetchMealsByArea } from '../services/MealsAPI';
import { FilterContext } from '../contexts/FilterContext';
import Loading from '../components/Loading/Loading';
import '../styles/ExploreNations.css';
import Cards from '../components/Cards/Cards';

const MAX_CARD_NUMBER = 11;

export default function ExploreNations() {
  const { apiResponse, handleAPI, load, setLoad } = useContext(GeneralAPIContext);
  const { search, setSearch } = useContext(FilterContext);
  const [nations, setNations] = useState([]);

  const handleNations = async () => {
    const results = await fetchMealsAreas();
    setNations(results.meals);
  };

  const handleChange = async ({ target: { value } }) => {
    setLoad(true);
    if (value === 'All') {
      setSearch([]);
    } else {
      const results = await fetchMealsByArea(value);
      setLoad(false);
      setSearch(results.meals);
    }
    setLoad(false);
  };

  useEffect(() => {
    setSearch([]);
    handleAPI();
    handleNations();
  }, []);

  return (
    <section className="container">
      <Header title="Explore Nationalities" />
      <section className="nations">
        <select onChange={ handleChange } data-testid="explore-by-nationality-dropdown">
          <option data-testid="All-option" value="All" className="btn">
            All
          </option>
          {nations.map((nation) => (
            <option
              data-testid={ `${nation.strArea}-option` }
              key={ nation.strArea }
              className="btn"
              value={ nation.strArea }
            >
              {nation.strArea}
            </option>))}
        </select>
      </section>

      <div className="cards-container">
        {load && (<Loading />)}
        {search.length > 0 ? search.map((meal, i) => (i <= MAX_CARD_NUMBER)
        && (<Cards key={ meal.idMeal } { ...meal } index={ i } />))
          : apiResponse.map((meal, i) => (i <= MAX_CARD_NUMBER)
        && (<Cards key={ meal.idMeal } { ...meal } index={ i } />))}
        {search.length === 1 && <Redirect to={ `/foods/${search[0].idMeal}` } />}
      </div>

      <LowerMenu />
    </section>
  );
}
