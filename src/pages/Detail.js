import React from 'react';
import DetailButtons from '../components/DetailButtons/DetailButtons';
import DetailIngredients from '../components/DetailIngredients/DetailIngredients';
import DetailInstructions from '../components/DetailInstructions/DetailInstructions';
import DetailTumb from '../components/DetailTumb/DetailTumb';
import DetailVideo from '../components/DetailVideo/DetailButtons';

export default function Detail() {
  return (

    <section className=" container containerDetail">

      <DetailTumb />
      <DetailButtons />
      <DetailIngredients />
      <DetailInstructions />
      <DetailVideo />

    </section>
  );
}
