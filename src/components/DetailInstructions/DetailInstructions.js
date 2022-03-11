import React from 'react';
import PropTypes from 'prop-types';
import './DetailInstructions.css';

export default function DetailInstructions({ inst }) {
  return (
    <section
      className="container containerDetailInstructions"
      data-testid="instructions"
    >
      <h2>Instruções</h2>
      <p>{inst}</p>
    </section>
  );
}

DetailInstructions.propTypes = {
  inst: PropTypes.string,
}.isRequired;
