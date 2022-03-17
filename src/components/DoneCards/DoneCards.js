import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import './DoneCards.css';

export default function DoneCards({ recepie, index }) {
  const [linkCopy, setLinkCopy] = useState(false);

  function handleShare() {
    navigator.clipboard.writeText(
      `http://localhost:3000/${recepie.type === 'food' ? 'foods' : 'drinks'}/${recepie.id}`,
    );
    setLinkCopy(true);
  }

  return (
    <div className="cardsDone-container">
      <Link
        to={ recepie.type === 'food' ? `/foods/${recepie.id}` : `/drinks/${recepie.id}` }
        className=""
      >
        <section className="cards-done">
          <img
            src={ recepie.image }
            alt={ `${recepie.name} Thumb` }
            name={ recepie.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <span data-testid={ `${index}-horizontal-name` }>
            { recepie.name }
          </span>
          <span>
            { recepie.type === 'food' ? recepie.nationality : recepie.alcoholicOrNot }
          </span>
          <span data-testid={ `${index}-horizontal-top-text` }>
            { `${recepie.type === 'food'
              ? recepie.nationality : recepie.alcoholicOrNot} - ${recepie.category} ` }
          </span>
          <span data-testid={ `${index}-horizontal-done-date` }>
            { recepie.doneDate }
          </span>
          { recepie.type === 'food'
            ? recepie.tags.map((tag, i) => i < 2
              && (<span data-testid={ `${index}-${tag}-horizontal-tag` }>{ tag }</span>))
            : null }
        </section>
      </Link>

      <button
        className="btnShare"
        type="button"
        onClick={ handleShare }
      >
        <img
          alt="share"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          className="img-detail"
          title="Share"
        />
      </button>
      { linkCopy && (<p>Link copied!</p>) }
    </div>
  );
}

DoneCards.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
}.isRequired;
