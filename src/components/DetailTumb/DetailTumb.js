import React from 'react';
import './DetailTumb.css';

export default function DetailTumb() {
  return (
    <section className="container containerDetailTumb">
      <img
        src={ strMealThumb }
        data-testid="recipe-photo"
        alt="strMealThumb"
        name="strMeal"
      />
      <h3 data-testid="recipe-title">
        {Name}
      </h3>
      <h4 data-testid="recipe-category">
        {Category}
      </h4>
    </section>
  );
}
