import React from 'react';
import './LowerMenu.css';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

export default function LowerMenu() {
  return (
    <section data-testid="footer" className="lowermenu">
      <img
        src={ drinkIcon }
        className="icon lowerIcon"
        alt="drink-icon"
        data-testid="drinks-bottom-btn"
      />

      <img
        src={ exploreIcon }
        className="icon lowerIcon"
        alt="explore-icon"
        data-testid="explore-bottom-btn"
      />

      <img
        src={ mealIcon }
        className="icon lowerIcon"
        alt="food-icon"
        data-testid="food-bottom-btn"
      />

    </section>
  );
}
