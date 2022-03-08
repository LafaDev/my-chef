import React from 'react';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';

export default function Profile() {
  return (
    <section className="container">
      <Header title="Profile" />
      <LowerMenu />
    </section>
  );
}
