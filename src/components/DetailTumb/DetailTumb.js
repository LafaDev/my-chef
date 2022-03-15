import React from 'react';
import PropTypes from 'prop-types';
import './DetailTumb.css';

export default function DetailTumb({ thumb, name, category, alcoholic }) {
  return (
    <section className="containerDetailTumb">
      <img
        src={ thumb }
        data-testid="recipe-photo"
        alt={ `${name} Thumb` }
        name={ name }
        className="img-details"
      />
      <h3 data-testid="recipe-title">
        { name }
      </h3>
      <p data-testid="recipe-category">
        { alcoholic ? `${alcoholic} ${category}` : category }
      </p>
    </section>
  );
}

DetailTumb.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  alcoholic: PropTypes.string,
}.isRequired;
