import React from 'react';
import PropTypes from 'prop-types';
import './DetailTumb.css';

export default function DetailTumb({ thumb, name, category, alcoholic }) {
  return (
    <section className="containerDetailTumb">
      <img
        src={ thumb }
        data-testid="recipe-photo"
        className="img-details"
        alt={ `${name} Thumb` }
        name={ name }
      />
      <h3 data-testid="recipe-title">
        {name}
      </h3>
      <h4 data-testid="recipe-category">
        {alcoholic ? `${alcoholic} ${category}` : category}
      </h4>
    </section>
  );
}

DetailTumb.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  alcoholic: PropTypes.string,
}.isRequired;
