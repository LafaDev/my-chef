import React from 'react';
import PropTypes from 'prop-types';
import './DetailTumb.css';

export default function DetailTumb({ thumb, name, category }) {
  return (
    <section className="container containerDetailTumb">
      <img
        src={ thumb }
        data-testid="recipe-photo"
        alt={ `${name} Thumb` }
        name={ name }
      />
      <h3 data-testid="recipe-title">
        {name}
      </h3>
      <h4 data-testid="recipe-category">
        {category}
      </h4>
    </section>
  );
}

DetailTumb.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
}.isRequired;
