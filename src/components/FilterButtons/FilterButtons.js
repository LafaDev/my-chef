import React from 'react';
import PropTypes from 'prop-types';
import './FilterButtons.css';

export default function FilterButtons({ handleFilters }) {
  return (
    <section className="container-buttons">
      <button
        className="btn-profile"
        type="button"
        name="food"
        data-testid="filter-by-food-btn"
        onClick={ handleFilters }
      >
        Food
      </button>
      <button
        className="btn-Drinks"
        type="button"
        name="drinks"
        data-testid="filter-by-drink-btn"
        onClick={ handleFilters }
      >
        Drinks
      </button>
      <button
        className="btn-profile"
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
