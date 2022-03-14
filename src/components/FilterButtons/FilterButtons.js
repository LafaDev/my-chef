import React from 'react';
import PropTypes from 'prop-types';

export default function FilterButtons() {
  const handleFilters = () => {
    console.log('lhahu');
  };

  return (
    <section className="container containerDetailButtons">
      <button
        className="btn btnFoods"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ handleFilters }
      >
        Food
      </button>
      <button
        className="btn btnDrinks"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ handleFilters }
      >
        Drinks
      </button>
      <button
        className="btn btnAll"
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ handleFilters }
      >
        All
      </button>
    </section>
  );
}

FilterButtons.propTypes = {
  fav: PropTypes.bool,
}.isRequired;
