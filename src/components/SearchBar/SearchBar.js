import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <section className="container containerSearch">
      <h3> filter </h3>
      <form>

        <label htmlFor="ingredient">
          Ingredient

          <input
            name="filter"
            data-testid="ingredient-search-radio"
            type="radio"
            id="ingredient"
          />
        </label>

        <label htmlFor="letter">
          First letter

          <input
            name="filter"
            data-testid="first-letter-search-radio"
            type="radio"
            id="letter"
          />
        </label>

        <label htmlFor="Name">
          Name

          <input
            name="filter"
            data-testid="name-search-radio"
            type="radio"
            id="name"
          />
        </label>

        <input
          data-testid="search-input"
          type="type"
        />
        <button type="button" data-testid="exec-search-btn"> Search </button>

      </form>
    </section>

  );
}
