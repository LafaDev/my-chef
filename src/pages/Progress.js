import React from 'react';
import DetailButtons from '../components/DetailButtons/DetailButtons';
import DetailIngredients from '../components/DetailIngredients/DetailIngredients';
import DetailTumb from '../components/DetailTumb/DetailTumb';

export default function Progress() {
  return (
    <section className="container containerProgress">
      <DetailTumb />
      <DetailButtons />
      <DetailIngredients />

    </section>
  );
  // DetailButtons não deve conter start
}
