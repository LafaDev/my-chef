import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './LowerMenu.css';

export default function LowerMenu() {
  return (
    <section data-testid="footer" className="lowerMenu">
      <Link to="/drinks">
        <img
          src={ drinkIcon }
          className="icon lowerIcon"
          alt="drink-icon"
          data-testid="drinks-bottom-btn"
        />
      </Link>

      <Link to="/explore">
        <img
          src={ exploreIcon }
          className="icon lowerIcon"
          alt="explore-icon"
          data-testid="explore-bottom-btn"
        />
      </Link>

      <Link to="/foods">
        <img
          src={ mealIcon }
          className="icon lowerIcon"
          alt="food-icon"
          data-testid="food-bottom-btn"
        />
      </Link>
    </section>
  );
}
