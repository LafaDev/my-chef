import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import FilterButtons from '../components/FilterButtons/FilterButtons';
import DoneCards from '../components/DoneCards/DoneCards';

export default function Done() {
  const [done, setDone] = useState([]);
  const [allDone, setAllDone] = useState([]);
  const history = useHistory();

  const handleDone = () => {
    console.log(done);
    setDone(JSON.parse(localStorage.getItem('doneRecipes')));
    setAllDone(JSON.parse(localStorage.getItem('doneRecipes')));
  };

  const handleFilters = ({ target }) => {
    switch (target.name) {
    case 'food':
      setDone(allDone.filter((receita) => receita.type === 'food'));
      break;
    case 'drinks':
      setDone(allDone.filter((receita) => receita.type === 'drink'));
      break;
    default:
      handleDone();
    }
  };

  useEffect(() => handleDone(), []);

  return (
    <div>
      <Header title="Done Recipes" />
      <button type="button" onClick={ () => history.goBack() }>Return</button>
      <FilterButtons handleFilters={ handleFilters } />
      {done && done.length > 0 && done.map((recepie, i) => (
        <DoneCards
          key={ recepie.id }
          recepie={ recepie }
          index={ i }
        />))}
    </div>
  );
}
