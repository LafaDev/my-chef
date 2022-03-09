import React from 'react';
import PropTypes from 'prop-types';
import DetailButtons from '../components/DetailButtons/DetailButtons';
import DetailIngredients from '../components/DetailIngredients/DetailIngredients';
import DetailInstructions from '../components/DetailInstructions/DetailInstructions';
import DetailTumb from '../components/DetailTumb/DetailTumb';
import DetailVideo from '../components/DetailVideo/DetailVideo';

export default function Detail({ match }) {
  return (

    <section className=" container containerDetail">

      <DetailTumb id={ match.params.id } url={ match.url } />
      <DetailButtons />
      <DetailIngredients />
      <DetailInstructions />
      {
        match.url.includes('foods') ? <DetailVideo /> : null
      }
    </section>
  );
}

Detail.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
